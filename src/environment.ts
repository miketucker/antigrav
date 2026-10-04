import * as THREE from 'three';
import type { StageId, Track } from './track';
import { glowMaterial } from './art';

export interface EnvironmentTheme {
  name:string; skyTop:number; skyBottom:number; horizon:number; horizonGlow:number;
  haze:number; hazeDensity:number; cloudShadow:number; cloudLight:number;
  ambient:number; groundLight:number; ambientIntensity:number; sunLight:number; sunIntensity:number;
  sunDirection:[number,number,number]; sunColor:number; sunSize:number; sunGlow:number;
  buildings:number; nearby:number; stars:number;
  mountains:'none'|'moon'|'snow'; abstract:'none'|'shards'|'rings';
}

export const ENVIRONMENTS:Record<StageId,EnvironmentTheme>={
  driftlab:{name:'HOLOGRAPHIC TEST VOID',skyTop:0x020915,skyBottom:0x112c3b,horizon:0x52cfe0,horizonGlow:.55,
    haze:0x13283a,hazeDensity:.4,cloudShadow:0x182c43,cloudLight:0x8db9c9,
    ambient:0xb6dfef,groundLight:0x1b304b,ambientIntensity:2.1,sunLight:0xbcdfed,sunIntensity:1.4,
    sunDirection:[-.3,.45,-1],sunColor:0x99eaff,sunSize:0,sunGlow:0,buildings:0,nearby:0,stars:420,mountains:'none',abstract:'none'},
  foundry:{name:'INDUSTRIAL DUSK',skyTop:0x11192f,skyBottom:0x654752,horizon:0xff7651,horizonGlow:2,
    haze:0x57414e,hazeDensity:1,cloudShadow:0x414059,cloudLight:0xc6a29a,
    ambient:0xe6d6cf,groundLight:0x53415f,ambientIntensity:1.9,sunLight:0xffbb92,sunIntensity:2,
    sunDirection:[-.35,.05,-1],sunColor:0xffa271,sunSize:.022,sunGlow:5,buildings:85,nearby:15,stars:0,mountains:'none',abstract:'none'},
  abyss:{name:'MOONLIT CHASM',skyTop:0x02050e,skyBottom:0x1b2c48,horizon:0x6889ac,horizonGlow:.35,
    haze:0x152136,hazeDensity:.75,cloudShadow:0x111c2e,cloudLight:0x627f9f,
    ambient:0x809cc4,groundLight:0x1b1934,ambientIntensity:1.25,sunLight:0xc6ddff,sunIntensity:1.6,
    sunDirection:[-.45,.34,-1],sunColor:0xd6eaff,sunSize:.035,sunGlow:2.8,buildings:16,nearby:4,stars:520,mountains:'moon',abstract:'none'},
  helix:{name:'VIOLET SCULPTURE FIELD',skyTop:0x211645,skyBottom:0x626b91,horizon:0xb8a5fa,horizonGlow:.8,
    haze:0x514969,hazeDensity:.65,cloudShadow:0x494065,cloudLight:0xb0add1,
    ambient:0xd1c6ff,groundLight:0x352457,ambientIntensity:2.15,sunLight:0xc6deff,sunIntensity:1.65,
    sunDirection:[-.5,.18,-1],sunColor:0xffdcf9,sunSize:0,sunGlow:0,buildings:22,nearby:5,stars:0,mountains:'none',abstract:'shards'},
  slalom:{name:'NEON MIDNIGHT',skyTop:0x020309,skyBottom:0x071b29,horizon:0x156f82,horizonGlow:.45,
    haze:0x081b2b,hazeDensity:.85,cloudShadow:0x0b172c,cloudLight:0x47677b,
    ambient:0x94cfdf,groundLight:0x25203f,ambientIntensity:1.15,sunLight:0x9cbddc,sunIntensity:.9,
    sunDirection:[.3,.5,-1],sunColor:0x87b5da,sunSize:.013,sunGlow:1.8,buildings:85,nearby:15,stars:650,mountains:'none',abstract:'none'},
  rift:{name:'SCARLET ALPINE VOID',skyTop:0x36252f,skyBottom:0x9a6c67,horizon:0xf7a280,horizonGlow:.55,
    haze:0x635155,hazeDensity:.32,cloudShadow:0x60545a,cloudLight:0xe3d0bc,
    ambient:0xe3e1df,groundLight:0x333743,ambientIntensity:2.5,sunLight:0xffd2b4,sunIntensity:2.3,
    sunDirection:[-.2,.14,-1],sunColor:0xffcab5,sunSize:0,sunGlow:0,buildings:0,nearby:0,stars:0,mountains:'snow',abstract:'none'},
  vortex:{name:'DEEP ORBIT',skyTop:0x010615,skyBottom:0x071731,horizon:0x416ee5,horizonGlow:.5,
    haze:0x0b1738,hazeDensity:.6,cloudShadow:0x101a3c,cloudLight:0x637bd0,
    ambient:0x7a9de1,groundLight:0x1f1747,ambientIntensity:1.35,sunLight:0x96bfff,sunIntensity:1.15,
    sunDirection:[.5,.4,-1],sunColor:0x8cbdff,sunSize:0,sunGlow:0,buildings:10,nearby:2,stars:1000,mountains:'none',abstract:'rings'},
  oblivion:{name:'GOLDEN HORIZON',skyTop:0x593452,skyBottom:0xb56c4d,horizon:0xffae42,horizonGlow:3.8,
    haze:0x9a613f,hazeDensity:.55,cloudShadow:0x69465a,cloudLight:0xffcb83,
    ambient:0xffdabc,groundLight:0x523440,ambientIntensity:2.1,sunLight:0xffb84d,sunIntensity:3,
    sunDirection:[-.24,.04,-1],sunColor:0xffd479,sunSize:.062,sunGlow:16,buildings:48,nearby:8,stars:0,mountains:'none',abstract:'none'},
};

const color=(value:number)=>new THREE.Color(value);
const random=(initial:number)=>{let seed=initial;return()=>{seed=(Math.imul(seed,1664525)+1013904223)|0;return(seed>>>0)/4294967296;};};

export function environmentSky(theme:EnvironmentTheme){
  const group=new THREE.Group();group.name='environment-sky';group.userData.theme=theme.name;
  const material=new THREE.ShaderMaterial({side:THREE.BackSide,depthWrite:false,fog:false,
    uniforms:{skyTop:{value:color(theme.skyTop)},skyBottom:{value:color(theme.skyBottom)},horizon:{value:color(theme.horizon).multiplyScalar(theme.horizonGlow)},sunDirection:{value:new THREE.Vector3(...theme.sunDirection).normalize()},sunColor:{value:color(theme.sunColor).multiplyScalar(theme.sunGlow)},sunSize:{value:theme.sunSize}},
    vertexShader:`varying vec3 vRay;void main(){vec4 world=modelMatrix*vec4(position,1.0);vRay=world.xyz-cameraPosition;gl_Position=projectionMatrix*viewMatrix*world;}`,
    fragmentShader:`uniform vec3 skyTop,skyBottom,horizon,sunDirection,sunColor;uniform float sunSize;varying vec3 vRay;
      void main(){vec3 ray=normalize(vRay);float y=ray.y;
        vec3 sky=mix(skyBottom,skyTop,smoothstep(-.17,.65,y));
        float glow=exp(-pow((y+.025)/.09,2.0));sky+=horizon*glow;
        float angle=acos(clamp(dot(ray,sunDirection),-1.0,1.0));
        if(sunSize>0.0)sky+=sunColor*(1.0-smoothstep(sunSize*.92,sunSize,angle)+.075*exp(-angle*angle/(sunSize*sunSize*8.0)));
        gl_FragColor=vec4(sky,1.0);}`});
  const dome=new THREE.Mesh(new THREE.SphereGeometry(12000,24,16),material);dome.name='course-sky';dome.renderOrder=-2;group.add(dome);
  if(theme.stars){
    const rand=random(908),positions:number[]=[],colors:number[]=[];
    for(let i=0;i<theme.stars;i++){
      const y=.08+rand()*.9,angle=rand()*Math.PI*2,r=Math.sqrt(1-y*y),radius=11000;
      positions.push(Math.cos(angle)*r*radius,y*radius,Math.sin(angle)*r*radius);
      const c=color(i%4?0xb5c8ef:0xffdcc6).multiplyScalar(1.3+rand()*2);colors.push(c.r,c.g,c.b);
    }
    const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
    const stars=new THREE.Points(geometry,new THREE.PointsMaterial({size:2,sizeAttenuation:false,vertexColors:true,depthWrite:false,fog:false}));stars.name='night-stars';stars.renderOrder=-1;group.add(stars);
  }
  return group;
}

/** Original angular mountain facets, combined in one draw call. */
export function mountainLandscape(track:Track,theme:EnvironmentTheme){
  const rand=random(730),positions:number[]=[],colors:number[]=[],snow=theme.mountains==='snow';
  const bounds=new THREE.Box3().setFromPoints(track.points),center=bounds.getCenter(new THREE.Vector3());
  const triangle=(a:THREE.Vector3,b:THREE.Vector3,c:THREE.Vector3,cap=false)=>{
    positions.push(...a.toArray(),...b.toArray(),...c.toArray());
    const altitude=(a.y+b.y+c.y)/3,tone=rand();
    const bright=cap||(snow&&altitude>950);
    const base=color(bright?[0xf2e9db,0xc6ced6,0xe4e3df][Math.floor(tone*3)]:snow?[0x272c36,0x47444a,0x696066][Math.floor(tone*3)]:[0x192a40,0x304361,0x536684][Math.floor(tone*3)]);
    for(let i=0;i<3;i++)colors.push(base.r,base.g,base.b);
  };
  for(let i=0;i<26;i++){
    const angle=i/26*Math.PI*2,radius=(snow?1050:680)+rand()*(snow?900:580),margin=snow?1400:620;
    let x=center.x+Math.cos(angle)*(bounds.max.x-bounds.min.x)/2+Math.cos(angle)*(radius+margin);
    let z=center.z+Math.sin(angle)*(bounds.max.z-bounds.min.z)/2+Math.sin(angle)*(radius+margin);
    // Move the entire peak clear of every course segment, including distant returns.
    while(track.points.some(p=>Math.hypot(p.x-x,p.z-z)<radius+(snow?950:230))){x+=Math.cos(angle)*180;z+=Math.sin(angle)*180;}
    const top=(snow?650:800)+rand()*(snow?1400:1100),skirt=top*.10-500;
    const base:THREE.Vector3[]=[],ridge:THREE.Vector3[]=[];
    for(let j=0;j<7;j++){
      const a=j/7*Math.PI*2,r=radius*(.78+rand()*.4);
      base.push(new THREE.Vector3(x+Math.cos(a)*r,-3100,z+Math.sin(a)*r));
      ridge.push(new THREE.Vector3(x+Math.cos(a)*r*.65,skirt+(rand()-.5)*500,z+Math.sin(a)*r*.65));
    }
    const peak=new THREE.Vector3(x+(rand()-.5)*radius*.7,top,z+(rand()-.5)*radius*.7);
    for(let j=0;j<7;j++){
      const next=(j+1)%7;triangle(base[j],ridge[j],base[next]);triangle(base[next],ridge[j],ridge[next]);
      if(snow){const a=ridge[j].clone().lerp(peak,.52),b=ridge[next].clone().lerp(peak,.57);triangle(ridge[j],a,ridge[next]);triangle(ridge[next],a,b);triangle(a,peak,b,true);}
      else triangle(ridge[j],peak,ridge[next]);
    }
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));geometry.computeVertexNormals();
  const mesh=new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({vertexColors:true,flatShading:true,side:THREE.DoubleSide}));mesh.name='faceted-mountains';return mesh;
}

export function abstractLandmarks(track:Track,theme:EnvironmentTheme){
  const group=new THREE.Group();group.name='abstract-landmarks';
  const rand=random(412),rings=theme.abstract==='rings',count=rings?26:58;
  const geometry=rings?new THREE.TorusGeometry(1,.055,3,12):new THREE.OctahedronGeometry(1,0);
  const objects=new THREE.InstancedMesh(geometry,new THREE.MeshLambertMaterial({color:rings?0x5c63a1:0x8d79b6,flatShading:true,emissive:rings?0x171e58:0x251a47,emissiveIntensity:.9}),count);
  objects.name=rings?'orbital-sculptures':'floating-polyhedra';
  const outlines=new THREE.InstancedMesh(geometry,glowMaterial(rings?0x467fea:0xbc8cff,rings?3:1.4,{wireframe:true}),count);
  const matrix=new THREE.Matrix4();
  for(let i=0;i<count;i++){
    const s=i/count*track.length,b=track.base(s),side=i%2?1:-1,size=(rings?90:50)+rand()*(rings?160:145);
    const direction=new THREE.Vector3(b.right.x,0,b.right.z);if(direction.lengthSq()<.01)direction.set(1,0,0);direction.normalize();
    const position=b.position.clone().addScaledVector(direction,side*(size+240+rand()*550));position.y+=140+rand()*650;
    while(track.points.some(p=>p.distanceTo(position)<size+160)){position.addScaledVector(direction,side*150);position.y+=60;}
    const rotation=new THREE.Quaternion().setFromEuler(new THREE.Euler(rand()*3,rand()*3,rand()*3));
    matrix.compose(position,rotation,new THREE.Vector3(size,size*(rings?1:1.2+rand()),size));objects.setMatrixAt(i,matrix);outlines.setMatrixAt(i,matrix);
    objects.setColorAt(i,color(i%3===0?0x547eac:0xc3aedb));
  }
  group.add(objects,outlines);return group;
}
