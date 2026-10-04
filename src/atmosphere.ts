import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';
import type { Track } from './track';
import { ENVIRONMENTS } from './environment';

export interface CloudVolume { center:THREE.Vector3; size:THREE.Vector3; density:number }
const MAX_CLOUDS=4;
const CLOUD_STEPS=6;
const VERTEX=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
const RAY=`uniform sampler2D tDepth;uniform mat4 projectionInverse,cameraWorld;uniform vec3 eye;varying vec2 vUv;
  vec3 worldPoint(vec2 uv,float z){vec4 p=projectionInverse*vec4(uv*2.0-1.0,z*2.0-1.0,1.0);p/=p.w;return(cameraWorld*p).xyz;}`;

/** Half-resolution clouds with a depth-aware composite and full-resolution height haze. */
class AtmospherePass extends Pass {
  readonly uniforms:{[name:string]:THREE.IUniform};
  readonly cloudTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,depthBuffer:false});
  readonly cloudMaterial:THREE.ShaderMaterial;
  readonly compositeMaterial:THREE.ShaderMaterial;
  readonly cloudQuad:FullScreenQuad;
  readonly compositeQuad:FullScreenQuad;

  constructor(){
    super();
    this.uniforms={tDiffuse:{value:null},tDepth:{value:null},tCloud:{value:this.cloudTarget.texture},atmosphereEnabled:{value:false},projectionInverse:{value:new THREE.Matrix4()},cameraWorld:{value:new THREE.Matrix4()},eye:{value:new THREE.Vector3()},cloudCount:{value:0},cloudCenters:{value:Array.from({length:MAX_CLOUDS},()=>new THREE.Vector4())},cloudSizes:{value:Array.from({length:MAX_CLOUDS},()=>new THREE.Vector3(1,1,1))},time:{value:0},hazeBase:{value:-140},hazeDensity:{value:1},hazeColor:{value:new THREE.Color(.16,.105,.24)},horizonColor:{value:new THREE.Color(.9,.40,.28)},cloudShadow:{value:new THREE.Color(.26,.25,.40)},cloudLight:{value:new THREE.Color(.92,.67,.60)},resolution:{value:new THREE.Vector2(1,1)},cloudResolution:{value:new THREE.Vector2(1,1)}};
    this.cloudMaterial=new THREE.ShaderMaterial({uniforms:this.uniforms,depthTest:false,depthWrite:false,vertexShader:VERTEX,
      fragmentShader:`${RAY}
        uniform int cloudCount;uniform vec4 cloudCenters[${MAX_CLOUDS}];uniform vec3 cloudSizes[${MAX_CLOUDS}];
        uniform vec3 cloudShadow,cloudLight;uniform vec2 resolution;uniform float time;
        float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
        float noise3(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
          return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
        void main(){
          vec2 pixel=.5/resolution;
          // Clip to the nearest of the covered scene pixels, preventing fog on foreground edges.
          float depth=min(min(texture2D(tDepth,vUv+pixel).x,texture2D(tDepth,vUv-pixel).x),min(texture2D(tDepth,vUv+vec2(pixel.x,-pixel.y)).x,texture2D(tDepth,vUv+vec2(-pixel.x,pixel.y)).x));
          vec3 endpoint=worldPoint(vUv,depth),ray=normalize(endpoint-eye);
          float distance=min(length(endpoint-eye),4200.0);vec3 cloudColor=vec3(0.0);float transmission=1.0;
          for(int i=0;i<${MAX_CLOUDS};i++){
            if(i>=cloudCount||transmission<.025)break;
            vec3 center=cloudCenters[i].xyz;
            vec3 o=(eye-center)/cloudSizes[i],d=ray/cloudSizes[i];
            float a=dot(d,d),b=dot(o,d),c=dot(o,o)-1.0,disc=b*b-a*c;if(disc<=0.0)continue;
            float entry=max(0.0,(-b-sqrt(disc))/a),exit=min(distance,(-b+sqrt(disc))/a);if(exit<=entry)continue;
            float stepSize=(exit-entry)/float(${CLOUD_STEPS});
            for(int j=0;j<${CLOUD_STEPS};j++){
              vec3 p=eye+ray*(entry+(float(j)+.5)*stepSize),local=(p-center)/cloudSizes[i];
              float edge=1.0-smoothstep(.16,1.0,dot(local,local));
              float shape=noise3(p*.017+vec3(time*.006,0.0,time*.004));
              float density=max(0.0,shape-.3)*edge*cloudCenters[i].w;
              float opacity=1.0-exp(-density*stepSize*.028);
              vec3 light=mix(cloudShadow,cloudLight,clamp(local.y*.45+.65,0.0,1.0));
              cloudColor+=transmission*opacity*light;transmission*=1.0-opacity;
            }
          }
          gl_FragColor=vec4(cloudColor,transmission);
        }`});
    this.compositeMaterial=new THREE.ShaderMaterial({uniforms:this.uniforms,depthTest:false,depthWrite:false,vertexShader:VERTEX,
      fragmentShader:`${RAY}
        uniform sampler2D tDiffuse,tCloud;uniform bool atmosphereEnabled;
        uniform vec2 cloudResolution;uniform vec3 hazeColor,horizonColor;uniform float hazeBase,hazeDensity;
        void main(){vec4 scene=texture2D(tDiffuse,vUv);if(!atmosphereEnabled){gl_FragColor=scene;return;}
          float depth=texture2D(tDepth,vUv).x;vec3 endpoint=worldPoint(vUv,depth),ray=normalize(endpoint-eye);
          float sceneDistance=length(endpoint-eye),distance=min(sceneDistance,4200.0);
          vec2 cell=vUv*cloudResolution-.5,base=floor(cell),fraction=fract(cell);
          vec4 cloud=vec4(0.0);float weights=0.0;
          // Bilateral upsampling: neighboring cloud texels cannot bleed through nearby geometry.
          for(int i=0;i<4;i++){
            vec2 offset=vec2(float(i-i/2*2),float(i/2)),uv=(base+offset+.5)/cloudResolution;
            float neighborDepth=texture2D(tDepth,uv).x;
            float neighborDistance=length(worldPoint(uv,neighborDepth)-eye);
            vec2 blend=mix(1.0-fraction,fraction,offset);
            float weight=blend.x*blend.y*exp(-abs(neighborDistance-sceneDistance)/(2.0+sceneDistance*.008));
            cloud+=texture2D(tCloud,uv)*weight;weights+=weight;
          }
          cloud=weights>.0001?cloud/weights:vec4(0.0,0.0,0.0,1.0);
          vec3 color=scene.rgb*cloud.a+cloud.rgb,end=eye+ray*distance;
          float low=exp(clamp((hazeBase-eye.y)/350.0,-8.0,7.0)),high=exp(clamp((hazeBase-end.y)/350.0,-8.0,7.0));
          float dy=(end.y-eye.y)/350.0,mean=abs(dy)>.01?(low-high)/dy:low;
          float haze=1.0-exp(-distance*(.00013+.00040*max(0.0,mean))*hazeDensity);
          float horizon=exp(-pow((ray.y+.025)/.09,2.0));vec3 fog=mix(hazeColor,horizonColor,horizon);
          gl_FragColor=vec4(mix(color,fog,clamp(haze,0.0,.98)),scene.a);
        }`});
    this.cloudQuad=new FullScreenQuad(this.cloudMaterial);this.compositeQuad=new FullScreenQuad(this.compositeMaterial);
    this.cloudTarget.texture.name='HalfResolutionClouds';
  }

  setSize(width:number,height:number){
    const w=Math.max(1,Math.ceil(width*.5)),h=Math.max(1,Math.ceil(height*.5));
    this.cloudTarget.setSize(w,h);this.uniforms.resolution.value.set(width,height);this.uniforms.cloudResolution.value.set(w,h);
  }

  render(renderer:THREE.WebGLRenderer,writeBuffer:THREE.WebGLRenderTarget,readBuffer:THREE.WebGLRenderTarget){
    const u=this.uniforms;u.tDiffuse.value=readBuffer.texture;if(readBuffer.depthTexture)u.tDepth.value=readBuffer.depthTexture;
    if(u.atmosphereEnabled.value){renderer.setRenderTarget(this.cloudTarget);this.cloudQuad.render(renderer);}
    renderer.setRenderTarget(this.renderToScreen?null:writeBuffer);if(this.clear)renderer.clear();this.compositeQuad.render(renderer);
  }

  dispose(){this.cloudTarget.dispose();this.cloudMaterial.dispose();this.compositeMaterial.dispose();this.cloudQuad.dispose();this.compositeQuad.dispose();}
}

export class Atmosphere {
  readonly pass=new AtmospherePass();
  clouds:CloudVolume[]=[];
  time=0;
  readonly towerBase=-7000;
  readonly quality={scale:.5,steps:CLOUD_STEPS,maxClouds:MAX_CLOUDS,noiseOctaves:1};
  private readonly nearest:Array<{cloud:CloudVolume|null;distance:number}>=Array.from({length:MAX_CLOUDS},()=>({cloud:null,distance:Infinity}));

  setTrack(track:Track){
    this.time=0;
    const fractions=track.exterior?[.07,.17,.29,.40,.47,.55,.65,.74,.83,.94]:[.08,.19,.34,.50,.59,.68,.80,.92];
    this.clouds=fractions.map((u,i)=>{
      const f=track.surface(track.length*u,0);
      return {center:f.position.clone().addScaledVector(f.normal,22).addScaledVector(f.right,i%2?20:-15),size:new THREE.Vector3(track.exterior?175:130,track.exterior?85:55,track.exterior?165:140),density:.9+(i%3)*.12};
    });
    if(track.drop)this.clouds.push({center:track.drop.origin.clone().addScaledVector(track.drop.direction,340).add(new THREE.Vector3(14,-75,0)),size:new THREE.Vector3(160,85,190),density:1.05});
    const theme=ENVIRONMENTS[track.stage],u=this.pass.uniforms;
    u.atmosphereEnabled.value=true;u.hazeBase.value=track.exterior?-170:track.drop?-220:-140;
    u.hazeColor.value.setHex(theme.haze);u.horizonColor.value.setHex(theme.horizon);u.hazeDensity.value=theme.hazeDensity;
    u.cloudShadow.value.setHex(theme.cloudShadow);u.cloudLight.value.setHex(theme.cloudLight);
  }

  update(camera:THREE.Camera,depth:THREE.DepthTexture,dt:number){
    this.time+=Math.max(0,dt);const u=this.pass.uniforms;
    u.tDepth.value=depth;u.projectionInverse.value.copy(camera.projectionMatrixInverse);u.cameraWorld.value.copy(camera.matrixWorld);u.eye.value.setFromMatrixPosition(camera.matrixWorld);u.time.value=this.time;
    // Insertion into a bounded, reused list keeps per-frame selection cheap.
    let count=0;for(const slot of this.nearest){slot.cloud=null;slot.distance=Infinity;}
    for(const cloud of this.clouds){
      const distance=cloud.center.distanceToSquared(u.eye.value);if(distance>Math.pow(4200+Math.max(cloud.size.x,cloud.size.y,cloud.size.z),2))continue;
      let i=0;while(i<count&&this.nearest[i].distance<distance)i++;
      if(i<MAX_CLOUDS){for(let j=Math.min(count,MAX_CLOUDS-1);j>i;j--){this.nearest[j].cloud=this.nearest[j-1].cloud;this.nearest[j].distance=this.nearest[j-1].distance;}this.nearest[i].cloud=cloud;this.nearest[i].distance=distance;count=Math.min(count+1,MAX_CLOUDS);}
    }
    u.cloudCount.value=count;
    this.nearest.forEach(({cloud},i)=>{
      if(!cloud)return;
      const center=u.cloudCenters.value[i],phase=cloud.center.x*.017+cloud.center.z*.023;
      center.set(cloud.center.x+Math.sin(this.time*.035+phase)*24,cloud.center.y,cloud.center.z+Math.cos(this.time*.025+phase)*18,cloud.density);u.cloudSizes.value[i].copy(cloud.size);
    });
  }
}
