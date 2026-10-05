import * as THREE from 'three';
import { glowMaterial } from './art';
import type { Track } from './track';
import type { EnvironmentTheme } from './environment';

interface Tower {
  position:THREE.Vector3; rotation:THREE.Quaternion; size:THREE.Vector3;
  seed:number; occupancy:number; floorHeight:number; rounded:boolean; nearby:boolean;
}

/** A continuous, conservative corridor in plan view, covering every course level. */
export function courseClearance(track:Track){
  const steps=Math.max(1800,Math.ceil(track.length/10));
  const stations=Array.from({length:steps+1},(_,i)=>{
    const s=i/steps*track.length,profile=track.profile(s);
    // Arc displacement never exceeds lane distance; also allow for raised decks,
    // ramps, rails and the sampling interval. Keep jump flight paths clear too.
    const radius=profile.width/2+profile.depth+(track.exterior?.radius??0)
      +track.waves.reduce((sum,wave)=>sum+wave.height,0)+40;
    return {position:track.base(s).position,radius};
  });
  const margin=(position:THREE.Vector3,width:number,depth:number)=>{
    // Circumscribed footprint includes rotated boxes, rounded facades and trim.
    const footprint=Math.hypot(width,depth)/2+3;
    let closest=Infinity;
    for(let i=0;i<steps;i++){
      const a=stations[i],b=stations[i+1],dx=b.position.x-a.position.x,dz=b.position.z-a.position.z;
      const lengthSq=dx*dx+dz*dz;
      const t=lengthSq?THREE.MathUtils.clamp(((position.x-a.position.x)*dx+(position.z-a.position.z)*dz)/lengthSq,0,1):0;
      closest=Math.min(closest,Math.hypot(position.x-a.position.x-t*dx,position.z-a.position.z-t*dz)-Math.max(a.radius,b.radius)-footprint);
    }
    return closest;
  };
  const place=(position:THREE.Vector3,direction:THREE.Vector3,width:number,depth:number)=>{
    const move=direction.clone().setY(0).normalize();if(move.lengthSq()<.01)move.set(1,0,0);
    for(let attempt=0;attempt<128;attempt++){
      if(margin(position,width,depth)>=0)return;
      position.addScaledVector(move,80);
    }
    // Guaranteed escape beyond every corridor's projection, even on huge courses.
    const footprint=Math.hypot(width,depth)/2+3;
    const edge=Math.max(...stations.map(station=>station.position.dot(move)+station.radius))+footprint+10;
    position.addScaledVector(move,Math.max(0,edge-position.dot(move)));
  };
  return {margin,place};
}

/** Glass facades with independently occupied offices, dark floors and lit bands. */
function officeMaterial(){
  const material=new THREE.MeshLambertMaterial({color:0x9cabc7});
  material.onBeforeCompile=shader=>{
    shader.vertexShader=shader.vertexShader.replace('#include <common>',`#include <common>
      attribute vec3 towerSize; attribute vec4 towerStyle;
      varying vec2 vOfficeCoord; varying vec4 vOfficeStyle; varying float vRoof;`)
      .replace('#include <uv_vertex>',`#include <uv_vertex>
      float facadeWidth=towerStyle.w>.5?PI*(towerSize.x+towerSize.z)*.5:(abs(normal.z)>.5?towerSize.x:towerSize.z);
      float faceOffset=towerStyle.w>.5?0.0:dot(normal.xz,vec2(137.0,271.0));
      vOfficeCoord=uv*vec2(facadeWidth,towerSize.y)+vec2(faceOffset,0.0);
      vOfficeStyle=towerStyle;vRoof=abs(normal.y);`);
    shader.fragmentShader=shader.fragmentShader.replace('#include <common>',`#include <common>
      varying vec2 vOfficeCoord; varying vec4 vOfficeStyle; varying float vRoof;
      float officeHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7))+vOfficeStyle.x*17.17)*43758.5453);}`)
      .replace('#include <color_fragment>',`#include <color_fragment>
      vec2 office=vOfficeCoord/vec2(4.5+mod(vOfficeStyle.x,4.0),vOfficeStyle.z);
      vec2 cell=floor(office),local=fract(office),aa=min(fwidth(office)*.65,vec2(.4));
      float windowMask=smoothstep(.12-aa.x,.12+aa.x,local.x)*(1.0-smoothstep(.88-aa.x,.88+aa.x,local.x));
      windowMask*=smoothstep(.20-aa.y,.20+aa.y,local.y)*(1.0-smoothstep(.78-aa.y,.78+aa.y,local.y));
      windowMask*=1.0-step(.9,vRoof);
      vec2 officeBlock=floor(cell/vec2(3.0+mod(vOfficeStyle.x,3.0),4.0+mod(vOfficeStyle.x,5.0)));
      float block=officeHash(officeBlock),floorState=officeHash(vec2(-57.0,cell.y)),room=officeHash(cell+vec2(19.0,73.0));
      float occupiedBlock=step(1.0-vOfficeStyle.y,block)*step(.12,room);
      float band=step(.91,floorState)*step(.08,room);
      float scattered=step(1.0-vOfficeStyle.y*.10,room);
      float occupied=max(max(occupiedBlock,band),scattered)*step(.10,floorState);
      float tint=officeHash(officeBlock+vec2(61.0,29.0));
      vec3 officeLight=tint<.44?vec3(1.0,.78,.47):tint<.91?vec3(.70,.86,1.0):vec3(.60,.38,.85);
      diffuseColor.rgb*=mix(vec3(.065,.09,.14),vec3(.14,.19,.27),windowMask);
      totalEmissiveRadiance+=officeLight*windowMask*occupied*(2.2+block*3.0);`);
  };
  material.customProgramCacheKey=()=> 'occupied-office-facades-v1';
  return material;
}

function towerBatch(towers:Tower[],rounded:boolean,material:THREE.Material){
  const geometry=rounded?new THREE.CylinderGeometry(.5,.5,1,20,1):new THREE.BoxGeometry(1,1,1);
  geometry.setAttribute('towerSize',new THREE.InstancedBufferAttribute(new Float32Array(towers.flatMap(t=>t.size.toArray())),3));
  geometry.setAttribute('towerStyle',new THREE.InstancedBufferAttribute(new Float32Array(towers.flatMap(t=>[t.seed,t.occupancy,t.floorHeight,rounded?1:0])),4));
  const mesh=new THREE.InstancedMesh(geometry,material,towers.length);
  mesh.name=rounded?'rounded-office-towers':'rectangular-office-towers';
  const matrix=new THREE.Matrix4();
  towers.forEach((tower,i)=>{
    matrix.compose(tower.position,tower.rotation,tower.size);mesh.setMatrixAt(i,matrix);
    mesh.setColorAt(i,new THREE.Color().setHSL(.57+(tower.seed%11)*.009,.12+(tower.seed%5)*.025,.65+(tower.seed%7)*.025));
  });
  return mesh;
}

export function buildSkyline(track:Track,theme:EnvironmentTheme){
  const group=new THREE.Group();group.name='skyline-buildings';
  group.userData.buildings=theme.buildings;group.userData.nearby=0;
  if(!theme.buildings&&!theme.nearby)return group;
  const clearance=courseClearance(track);
  let state=123;const rand=()=>{state=(Math.imul(state,1664525)+1013904223)|0;return(state>>>0)/4294967296;};
  const floor=-7000,cityZ=track.exterior?-500:track.stage==='foundry'?0:-1000;
  const towers:Tower[]=[],accents:{tower:Tower;color:number;band:boolean}[]=[],beaconPositions:THREE.Vector3[]=[];
  const profiles=[{width:48,spread:48,depth:.72,height:1.35},{width:140,spread:140,depth:.75,height:.63},{width:70,spread:75,depth:1.0,height:1.08},{width:100,spread:85,depth:1.18,height:.9}];
  for(let i=0;i<theme.buildings;i++){
    const profile=profiles[i%profiles.length],rounded=i%5===2,stepped=i%5===3;
    const width=profile.width+rand()*profile.spread,depth=width*(profile.depth+rand()*.25);
    const top=(160+rand()*(track.exterior?1850:1400))*profile.height;
    const h=top-floor,angle=i/theme.buildings*Math.PI*2+rand()*.09,radius=(track.stage==='foundry'?950:1600)+rand()*1200;
    const rotation=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),rand()*.8);
    const position=new THREE.Vector3(Math.cos(angle)*radius,floor+h/2,Math.sin(angle)*radius+cityZ);
    if(track.stage==='oblivion'){
      const sunAngle=Math.atan2(theme.sunDirection[0],theme.sunDirection[2]),heading=Math.atan2(position.x,position.z),delta=Math.atan2(Math.sin(heading-sunAngle),Math.cos(heading-sunAngle));
      if(Math.abs(delta)<.25){const distance=Math.hypot(position.x,position.z),openAngle=sunAngle+(delta<0?-.34:.34);position.x=Math.sin(openAngle)*distance;position.z=Math.cos(openAngle)*distance;}
    }
    clearance.place(position,new THREE.Vector3(Math.cos(angle),0,Math.sin(angle)),width,depth);
    const occupancy=.10+rand()*.68,floorHeight=9+rand()*9,seed=17+i*13;
    const crown=stepped?80+rand()*200:0;
    const tower:Tower={position:position.clone().add(new THREE.Vector3(0,-crown/2,0)),rotation,size:new THREE.Vector3(width,h-crown,depth),seed,occupancy,floorHeight,rounded,nearby:false};
    towers.push(tower);
    if(stepped){
      const upper={...tower,position:new THREE.Vector3(position.x,top-crown/2,position.z),size:new THREE.Vector3(width*.66,crown,depth*.66),seed:seed+5};
      towers.push(upper);
    }
    if(i%3===0)accents.push({tower,color:[0x65baff,0xff5b99,0xa37eff,0xffb973][i%4],band:i%2===0});
    if(i%2===0)beaconPositions.push(new THREE.Vector3(position.x,top+3,position.z));
  }
  for(let i=0;i<theme.nearby;i++){
    const s=i/theme.nearby*track.length;if(!track.hasRoad(s))continue;
    const b=track.base(s),side=i%2?1:-1,width=28+rand()*42,depth=30+rand()*45;
    const horizontal=new THREE.Vector3(b.right.x,0,b.right.z).normalize();if(horizontal.lengthSq()<.01)horizontal.set(1,0,0);
    const position=b.position.clone().addScaledVector(horizontal,side*(track.exterior?180:110));
    clearance.place(position,horizontal.clone().multiplyScalar(side),width,depth);
    const top=b.position.y+35+rand()*160,h=top-floor;
    position.y=floor+h/2;
    const tower:Tower={position,rotation:new THREE.Quaternion(),size:new THREE.Vector3(width,h,depth),seed:1501+i*19,occupancy:.16+rand()*.6,floorHeight:8+rand()*8,rounded:i%4===1,nearby:true};
    towers.push(tower);group.userData.nearby++;
    if(i%4===0)accents.push({tower,color:track.theme?.accent??0x65dcff,band:true});
  }
  const material=officeMaterial();
  for(const rounded of [false,true]){
    const batch=towers.filter(t=>t.rounded===rounded);
    if(batch.length)group.add(towerBatch(batch,rounded,material));
  }
  const trim=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),glowMaterial(0xffffff,1),accents.length);
  trim.name='skyline-accent-bands';const matrix=new THREE.Matrix4();
  accents.forEach(({tower,color,band},i)=>{
    const [width,h,depth]=tower.size.toArray();
    const offset=new THREE.Vector3(band?0:width/2+.5,band?h/2-3:h*.35,band?depth/2+.6:0).applyQuaternion(tower.rotation);
    matrix.compose(tower.position.clone().add(offset),tower.rotation,band?new THREE.Vector3(width*.9,1.6,1):new THREE.Vector3(1.1,h*.26,1.1));
    trim.setMatrixAt(i,matrix);trim.setColorAt(i,new THREE.Color(color).multiplyScalar(5));
  });
  group.add(trim);
  const beacons=new THREE.InstancedMesh(new THREE.OctahedronGeometry(1),glowMaterial(0xff5e76,6),beaconPositions.length);beacons.name='skyline-roof-beacons';
  beaconPositions.forEach((position,i)=>{matrix.compose(position,new THREE.Quaternion(),new THREE.Vector3(2,2,2));beacons.setMatrixAt(i,matrix);});group.add(beacons);
  group.userData.profiles=profiles.length;group.userData.rounded=towers.filter(t=>t.rounded).length;
  group.userData.stepped=Math.floor(theme.buildings/5);
  group.userData.occupancyRange=[Math.min(...towers.map(t=>t.occupancy)),Math.max(...towers.map(t=>t.occupancy))];
  group.userData.floorHeightRange=[Math.min(...towers.map(t=>t.floorHeight)),Math.max(...towers.map(t=>t.floorHeight))];
  group.userData.minimumCourseClearance=Math.min(...towers.map(tower=>clearance.margin(tower.position,tower.size.x,tower.size.z)));
  return group;
}
