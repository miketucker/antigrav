import * as THREE from 'three';
import { Pass, FullScreenQuad } from 'three/addons/postprocessing/Pass.js';

const VERTEX=`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`;
const FOCUS=`uniform sampler2D tDepth;uniform float focus,focusBand,aperture,focalPixels,maxRadius;varying vec2 vUv;
  float blurRadius(float depth){return min(maxRadius,max(0.0,abs(1.0-focus/max(depth,.01))-focusBand)*aperture*focalPixels/(2.0*max(focus,1.0)));}`;

/** Preserve scene depth before fullscreen passes reuse the composer's buffers. */
class FocusDepthPass extends Pass {
  readonly target=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,format:THREE.RedFormat,minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:false});
  readonly material=new THREE.ShaderMaterial({depthTest:false,depthWrite:false,
    uniforms:{tDepth:{value:null},nearClip:{value:.3},farClip:{value:15000}},vertexShader:VERTEX,
    fragmentShader:`#include <packing>
      uniform sampler2D tDepth;uniform float nearClip,farClip;varying vec2 vUv;
      void main(){float depth=-perspectiveDepthToViewZ(texture2D(tDepth,vUv).x,nearClip,farClip);gl_FragColor=vec4(depth,0.0,0.0,1.0);}`});
  readonly quad=new FullScreenQuad(this.material);
  constructor(){super();this.needsSwap=false;this.target.texture.name='FocusSceneDepth';}
  setSize(width:number,height:number){this.target.setSize(width,height);}
  render(renderer:THREE.WebGLRenderer,_write:THREE.WebGLRenderTarget,read:THREE.WebGLRenderTarget){
    this.material.uniforms.tDepth.value=read.depthTexture;
    renderer.setRenderTarget(this.target);this.quad.render(renderer);
  }
  dispose(){this.target.dispose();this.material.dispose();this.quad.dispose();}
}

/** Half-resolution disk blur with a depth-aware, full-resolution sharp composite. */
export class DepthOfField extends Pass {
  readonly depthPass=new FocusDepthPass();
  readonly blurTarget=new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,depthBuffer:false});
  readonly uniforms={tDiffuse:{value:null as THREE.Texture|null},tDepth:{value:this.depthPass.target.texture},tBlur:{value:this.blurTarget.texture},resolution:{value:new THREE.Vector2(1,1)},blurResolution:{value:new THREE.Vector2(1,1)},focus:{value:100},focusBand:{value:.18},aperture:{value:2.25},focalPixels:{value:900},maxRadius:{value:20}};
  readonly blurMaterial:THREE.ShaderMaterial;
  readonly compositeMaterial:THREE.ShaderMaterial;
  readonly blurQuad:FullScreenQuad;
  readonly compositeQuad:FullScreenQuad;
  private shot='';
  private initialized=false;
  private readonly point=new THREE.Vector3();

  constructor(){
    super();this.blurTarget.texture.name='HalfResolutionDepthOfField';
    this.blurMaterial=new THREE.ShaderMaterial({uniforms:this.uniforms,depthTest:false,depthWrite:false,vertexShader:VERTEX,
      fragmentShader:`${FOCUS}
        uniform sampler2D tDiffuse;uniform vec2 resolution;
        void main(){float depth=texture2D(tDepth,vUv).r,radius=blurRadius(depth);vec4 center=texture2D(tDiffuse,vUv);
          if(radius<.6){gl_FragColor=center;return;}
          vec3 color=center.rgb;float weights=1.0;
          for(int i=0;i<24;i++){
            float angle=float(i)*2.39996323,r=sqrt((float(i)+.5)/24.0);
            vec2 uv=clamp(vUv+vec2(cos(angle),sin(angle))*r*radius/resolution,vec2(0.0),vec2(1.0));
            float neighbor=texture2D(tDepth,uv).r;
            // Reject unrelated depths so the skyline cannot bleed over a sharp racer.
            float edge=abs(neighbor-depth)/max(2.0,min(neighbor,depth)*.06);
            float weight=exp(-edge*edge);
            color+=texture2D(tDiffuse,uv).rgb*weight;weights+=weight;
          }
          gl_FragColor=vec4(color/weights,center.a);
        }`});
    this.compositeMaterial=new THREE.ShaderMaterial({uniforms:this.uniforms,depthTest:false,depthWrite:false,vertexShader:VERTEX,
      fragmentShader:`${FOCUS}
        uniform sampler2D tDiffuse,tBlur;uniform vec2 blurResolution;
        void main(){vec4 sharp=texture2D(tDiffuse,vUv);float depth=texture2D(tDepth,vUv).r,radius=blurRadius(depth);
          if(radius<.6){gl_FragColor=sharp;return;}
          vec2 cell=vUv*blurResolution-.5,base=floor(cell),fraction=fract(cell);vec3 blurred=vec3(0.0);float weights=0.0;
          for(int i=0;i<4;i++){
            vec2 offset=vec2(float(i-i/2*2),float(i/2)),uv=clamp((base+offset+.5)/blurResolution,vec2(0.0),vec2(1.0));
            float neighbor=texture2D(tDepth,uv).r,edge=abs(neighbor-depth)/max(2.0,min(neighbor,depth)*.06);
            vec2 blend=mix(1.0-fraction,fraction,offset);float weight=blend.x*blend.y*exp(-edge*edge);
            blurred+=texture2D(tBlur,uv).rgb*weight;weights+=weight;
          }
          blurred=weights>.0001?blurred/weights:sharp.rgb;
          gl_FragColor=vec4(mix(sharp.rgb,blurred,smoothstep(.6,2.0,radius)),sharp.a);
        }`});
    this.blurQuad=new FullScreenQuad(this.blurMaterial);this.compositeQuad=new FullScreenQuad(this.compositeMaterial);
  }

  resetFocus(){this.initialized=false;}

  focusOn(camera:THREE.PerspectiveCamera,target:THREE.Vector3,dt:number,shot:string,spectating:boolean){
    camera.updateMatrixWorld();
    const distance=THREE.MathUtils.clamp(-this.point.copy(target).applyMatrix4(camera.matrixWorldInverse).z,camera.near+1,camera.far);
    const snap=!this.initialized||shot!==this.shot;
    this.uniforms.focus.value=snap?distance:THREE.MathUtils.lerp(this.uniforms.focus.value,distance,1-Math.exp(-Math.max(0,dt)*8));
    this.initialized=true;this.shot=shot;
    this.uniforms.focusBand.value=spectating?.18:.3;
    this.uniforms.aperture.value=spectating?2.25:.4;
    this.uniforms.maxRadius.value=spectating?20:8;
    this.uniforms.focalPixels.value=this.uniforms.resolution.value.y/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov)/2));
    this.depthPass.material.uniforms.nearClip.value=camera.near;
    this.depthPass.material.uniforms.farClip.value=camera.far;
    this.depthPass.enabled=this.enabled;
  }

  setSize(width:number,height:number){
    const w=Math.max(1,Math.ceil(width*.5)),h=Math.max(1,Math.ceil(height*.5));
    this.blurTarget.setSize(w,h);this.uniforms.resolution.value.set(width,height);this.uniforms.blurResolution.value.set(w,h);
  }

  render(renderer:THREE.WebGLRenderer,write:THREE.WebGLRenderTarget,read:THREE.WebGLRenderTarget){
    this.uniforms.tDiffuse.value=read.texture;
    renderer.setRenderTarget(this.blurTarget);this.blurQuad.render(renderer);
    renderer.setRenderTarget(this.renderToScreen?null:write);this.compositeQuad.render(renderer);
  }

  dispose(){this.depthPass.dispose();this.blurTarget.dispose();this.blurMaterial.dispose();this.compositeMaterial.dispose();this.blurQuad.dispose();this.compositeQuad.dispose();}
}
