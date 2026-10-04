import * as THREE from 'three';

export const EXPANSION_IDS = ['slalom','rift','vortex','oblivion'] as const;
export type ExpansionId = typeof EXPANSION_IDS[number];
export const COURSE_THEMES = {
  slalom:{subtitle:'04 / BANKED DRIFT',hint:'Banked hairpins · Drift exits · Neon district',accent:0x65edff,secondary:0xff79ce,road:0x9bacbc,city:0x869bb3},
  rift:{subtitle:'05 / SKY JUMPS',hint:'3 offset jumps · Air rings · Amber canyon',accent:0xffbe72,secondary:0xff815e,road:0xb4a5a0,city:0xb09591},
  vortex:{subtitle:'06 / TUBE SURFING',hint:'3 tunnels · Wall boost chains · Orbital ramps',accent:0xb896ff,secondary:0x51dfff,road:0x9d99bb,city:0x8f84bb},
  oblivion:{subtitle:'07 / FINAL EXAM',hint:'4 jumps · Banked turns · Reactor gauntlet',accent:0xff6688,secondary:0xffd071,road:0xa293a4,city:0xaa869c},
} as const;

/** Tangent circular fillets remove waypoint cusps without moving jump decks. */
function roundRoute(route:THREE.Vector3[],pinned:Set<number>,cornerCut=.44){
  const nodes:THREE.Vector3[]=[],indices:number[]=[];
  const append=(point:THREE.Vector3)=>{
    const previous=nodes[nodes.length-1];
    if(previous){const pieces=Math.ceil(previous.distanceTo(point)/35);for(let i=1;i<pieces;i++)nodes.push(previous.clone().lerp(point,i/pieces));}
    nodes.push(point.clone());return nodes.length-1;
  };
  for(let i=0;i<route.length;i++){
    const p=route[i],before=route[(i+route.length-1)%route.length],after=route[(i+1)%route.length];
    const incoming=p.clone().sub(before),outgoing=after.clone().sub(p),cut=Math.min(incoming.length(),outgoing.length())*cornerCut;
    incoming.normalize();outgoing.normalize();const angle=incoming.angleTo(outgoing);
    if(pinned.has(i)||angle<.04){indices[i]=append(p);continue;}
    const axis=incoming.clone().cross(outgoing).normalize(),radius=cut/Math.tan(angle/2);
    const entry=p.clone().addScaledVector(incoming,-cut),center=entry.clone().addScaledVector(axis.clone().cross(incoming),radius);
    append(entry);const radial=entry.clone().sub(center),pieces=Math.max(4,Math.ceil(radius*angle/25));
    // An even subdivision gives each original waypoint an exact middle index.
    const count=pieces+pieces%2;
    for(let j=1;j<=count;j++){const index=append(radial.clone().applyAxisAngle(axis,angle*j/count).add(center));if(j===count/2)indices[i]=index;}
  }
  return {nodes,indices};
}

/** Two separated zigzag ribbons, joined at their ends; every node stays level. */
export function driftLabCourse(){
  const route=[[0,0,0],[0,0,-220],[-220,0,-440],[100,0,-700],[-220,0,-960],
    [100,0,-1220],[-220,0,-1480],[100,0,-1740],[-220,0,-2000],[0,0,-2220],
    [400,0,-2380],[800,0,-2220],[1020,0,-2000],[700,0,-1740],[1020,0,-1480],
    [700,0,-1220],[1020,0,-960],[700,0,-700],[1020,0,-440],[800,0,-220],
    [400,0,120],[0,0,220]].map(p=>new THREE.Vector3(...p as [number,number,number]));
  return roundRoute(route,new Set([0]),.16).nodes;
}

/** Authored approaches give each circuit its own turn sequence and silhouette. */
export function expansionCourse(id:ExpansionId){
  const difficulty=EXPANSION_IDS.indexOf(id)+1;
  const approaches:Record<ExpansionId,number[][]>={
    slalom:[[-100,30,-480],[-320,65,-570],[-480,70,-390],[-410,85,-170],[-610,100,-100],[-790,125,-310],[-750,145,-590],[-540,145,-850]],
    rift:[[-140,75,-480],[-430,170,-690],[-650,235,-820]],
    vortex:[[-160,90,-440],[-350,170,-450],[-360,175,-220],[-530,250,-260],[-530,270,-580],[-740,310,-600],[-760,330,-900]],
    oblivion:[[-190,105,-430],[-360,210,-390],[-345,220,-180],[-520,330,-200],[-535,335,-530],[-720,420,-490],[-690,425,-250],[-900,490,-420],[-920,490,-900]],
  };
  const scale={slalom:1.6,rift:1,vortex:1.8,oblivion:2}[id];
  const approach=approaches[id].map(([x,y,z])=>[x*scale,y,-320+(z+320)*scale]);
  const nodes=[[0,0,0],[0,0,-180],[0,15,-320],...approach].map(p=>new THREE.Vector3(...p as [number,number,number]));
  const approachEnd=nodes.length-1,last=nodes[approachEnd],x=last.x,y=last.y,z=last.z;
  nodes.push(new THREE.Vector3(x,y,z-180));
  const jumpStart=nodes.length;nodes.push(new THREE.Vector3(x,y,z-380));
  const offset=[0,8,-10,14][difficulty-1],gap=[135,165,195,225][difficulty-1];
  const jumpEnd=nodes.length;nodes.push(new THREE.Vector3(x+offset,y-30,z-380-gap));
  const landingEnd=nodes.length;nodes.push(new THREE.Vector3(x+offset,y-30,z-850));
  const jumps=[{start:jumpStart,end:jumpEnd,landingEnd,width:36-difficulty*3,lift:difficulty===4?52:42}];
  // Separate runways and real missing road, rather than cosmetic ramp repeats.
  const extraJumps=id==='rift'?2:id==='oblivion'?3:0;
  for(let i=0;i<extraJumps;i++){
    const p=nodes[nodes.length-1],dx=(i%2?-1:1)*(id==='oblivion'?26:20),distance=(id==='oblivion'?210:170)+i*16;
    nodes.push(p.clone().add(new THREE.Vector3(0,0,-180)));
    const start=nodes.length;nodes.push(p.clone().add(new THREE.Vector3(0,0,-380)));
    const end=nodes.length;nodes.push(p.clone().add(new THREE.Vector3(dx,-30,-380-distance)));
    const deckEnd=nodes.length;nodes.push(p.clone().add(new THREE.Vector3(dx,-30,-920)));
    jumps.push({start,end,landingEnd:deckEnd,width:(id==='oblivion'?22:27)-i*2,lift:id==='oblivion'?54+i*2:42});
  }
  const runway=nodes[nodes.length-1],tubeX=runway.x,tubeY=runway.y,tubeZ=runway.z;
  const pipeStart=nodes.length;
  // Long bending interior tunnel, with progressively stronger height changes.
  for(let i=0;i<=12;i++){
    const a=i/12*Math.PI;
    nodes.push(new THREE.Vector3(tubeX+360*(1-Math.cos(a)),tubeY+Math.sin(a)*difficulty*35,tubeZ-200-330*Math.sin(a)));
  }
  const pipeEnd=nodes.length-1;
  const p=nodes[pipeEnd],radius=250-difficulty*12;
  // The U tunnel exits toward +Z. Both ends of the loop share that tangent.
  nodes.push(p.clone().add(new THREE.Vector3(0,40,180)));
  const loopStart=nodes.length;
  for(let i=0;i<=28;i++){
    const a=i/28*Math.PI*2;
    nodes.push(new THREE.Vector3(p.x+i/28*220,p.y+90+radius*(1-Math.cos(a)),p.z+380+radius*Math.sin(a)));
  }
  const loopEnd=nodes.length-1;
  const returnStart=nodes.length;
  if(difficulty>=3){
    const q=nodes[loopEnd],r=320,turns=difficulty===4?1.25:1;
    nodes.push(q.clone().add(new THREE.Vector3(0,-12,170)));
    for(let i=0;i<=36;i++){
      const a=Math.PI-i/36*Math.PI*2*turns;
      nodes.push(new THREE.Vector3(q.x+r+r*Math.cos(a),q.y-30-i/36*turns*280,q.z+350+r*Math.sin(a)));
    }
  }
  const q=nodes[nodes.length-1];
  // Move clear of the loop/spiral before descending along the city's right side.
  const right=Math.max(id==='oblivion'?1550:id==='vortex'?1250:1050,q.x+480);
  const returnNodes:number[][]=[];
  if(id==='slalom'){
    returnNodes.push([q.x+140,q.y-10,q.z+280],[right,125,q.z+600],
      [right+200,95,-1000],[right+80,80,-680],[right-230,70,-720],
      [right-360,55,-1050],[right-600,35,-970],[right-660,20,-610],[right-540,10,-260]);
  }else{
    returnNodes.push([q.x+180,q.y-20,q.z+260],[right,q.y-35,q.z+650]);
    const from=returnNodes[returnNodes.length-1],count=Math.max(2,Math.ceil((-650-from[2])/480));
    for(let i=1;i<=count;i++){
      const u=i/count,amplitude=id==='oblivion'?170:id==='vortex'?130:100;
      returnNodes.push([right+Math.sin(u*Math.PI*3)*amplitude,from[1]*(1-u)+45*u,from[2]+(-650-from[2])*u]);
    }
    returnNodes.push([right-120,30,-300],[right-400,15,-70]);
  }
  returnNodes.push([400,5,140],[160,0,240],[0,0,180]);
  nodes.push(...returnNodes.map(p=>new THREE.Vector3(...p as [number,number,number])));
  const returnEnd=nodes.length-3;
  const pinned=new Set<number>([0]);
  for(let i=approachEnd+1;i<pipeStart;i++)pinned.add(i);
  const rounded=roundRoute(nodes,pinned),at=(i:number)=>rounded.indices[i];
  return {nodes:rounded.nodes,difficulty,approachEnd:at(approachEnd),
    jumps:jumps.map(j=>({...j,start:at(j.start),end:at(j.end),landingEnd:at(j.landingEnd)})),
    jumpStart:at(jumpStart),jumpEnd:at(jumpEnd),landingEnd:at(landingEnd),pipeStart:at(pipeStart),pipeEnd:at(pipeEnd),
    loopStart:at(loopStart),loopEnd:at(loopEnd),returnStart:at(returnStart),returnEnd:at(returnEnd),landingWidth:36-difficulty*3};
}
