import fs from 'node:fs';
import {Track,STAGES} from '../src/track.ts';
import {EXPANSION_IDS} from '../src/courses.ts';

const output=new URL('../docs/screenshots/',import.meta.url);
fs.mkdirSync(output,{recursive:true});
const records=EXPANSION_IDS.map(id=>{
  const track=new Track(id),count=Math.ceil(track.length/10),step=track.length/count;
  const points=Array.from({length:count},(_,i)=>track.base(i*step).position);
  let clearance=Infinity,heading=0,frame=0,empty=0;
  for(let i=0;i<count;i++)for(let j=i+1;j<count;j++){
    if(Math.min(j-i,count-(j-i))*step>=300)clearance=Math.min(clearance,points[i].distanceTo(points[j]));
  }
  for(let s=0;s<track.length;s+=2){
    heading=Math.max(heading,track.base(s).forward.angleTo(track.base(s+10).forward)*180/Math.PI);
    if(!track.hasRoad(s)||!track.hasRoad(s+2)||track.ramps.some(r=>{const d=track.signedDistance(r.s,s);return d>-r.length-4&&d<4;}))continue;
    for(const x of track.inFullPipe(s)?[0,-44,44,87]:[0,-track.profile(s).width*.4,track.profile(s).width*.4]){
      frame=Math.max(frame,track.surface(s,x).normal.angleTo(track.surface(s+2,x).normal)*180/Math.PI);
    }
  }
  const activities=[...track.features,...track.markers,...track.barriers,...track.ramps].map(f=>f.s).sort((a,b)=>a-b);
  for(let i=0;i<activities.length;i++){
    const a=activities[i],b=activities[(i+1)%activities.length]+(i===activities.length-1?track.length:0);
    if(!track.gaps.some(g=>a<g.landingEnd+70&&b>g.start-180))empty=Math.max(empty,b-a);
  }
  const record={id,name:STAGES[id].name,length:track.length,minNonlocalClearance:clearance,maxHeadingDegreesPer10Units:heading,maxFrameDegreesPer2Units:frame,maxQuietRoadUnits:empty,gaps:track.gaps,pipes:track.pipes,features:track.features,barriers:track.barriers,
    samples:points.map((p,i)=>({s:i*step,p:p.toArray(),type:!track.hasRoad(i*step)?'gap':track.interiorBend(i*step)>.5?'inside':track.tubeBend(i*step)>.5?'outside':Math.abs(track.bankAngle(i*step))>.2?'bank':'road'}))};
  console.log(JSON.stringify({...record,samples:undefined,features:undefined,gaps:undefined,pipes:undefined,barriers:undefined}));return record;
});
fs.writeFileSync(new URL('spline-audit.json',output),JSON.stringify({success:records.every(r=>r.minNonlocalClearance>125&&r.maxHeadingDegreesPer10Units<10&&r.maxFrameDegreesPer2Units<5&&r.maxQuietRoadUnits<400),records},null,2));
const palette={road:'#899bb0',bank:'#61dfff',inside:'#bb8aff',outside:'#66d6ac',gap:'#ffc06b'};
let svg='<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1280" viewBox="0 0 1440 1280"><rect width="1440" height="1280" fill="#101620"/><style>text{font-family:Arial,sans-serif;fill:#dbe9f3;font-size:14px}.title{font-size:20px;font-weight:bold}.small{font-size:12px;fill:#8d9caf}</style><text x="35" y="38" class="title">VECTOR 99 · REVISED SPLINE AUDIT</text><text x="35" y="65">Cyan banks · Purple tunnels · Green exterior tubes · Amber jumps · Lime boosts · Pink pickups</text>';
for(const [row,r] of records.entries()){
  const top=95+row*292,ps=r.samples.map(a=>a.p),minX=Math.min(...ps.map(p=>p[0])),maxX=Math.max(...ps.map(p=>p[0])),minZ=Math.min(...ps.map(p=>p[2])),maxZ=Math.max(...ps.map(p=>p[2])),minY=Math.min(...ps.map(p=>p[1])),maxY=Math.max(...ps.map(p=>p[1]));
  const scale=Math.min(620/(maxX-minX),230/(maxZ-minZ));
  const plan=(p:number[])=>[55+(p[0]-minX)*scale,top+50+(p[2]-minZ)*scale];
  const elevation=(s:number,p:number[])=>[760+s/r.length*620,top+260-(p[1]-minY)/(maxY-minY)*200];
  svg+=`<text x="35" y="${top+12}" class="title">${r.name}</text><text x="760" y="${top+12}" class="small">${r.minNonlocalClearance.toFixed(0)} clearance · ${r.maxHeadingDegreesPer10Units.toFixed(1)}° heading / 10u · ${r.maxFrameDegreesPer2Units.toFixed(1)}° frame / 2u · ${r.maxQuietRoadUnits.toFixed(0)}u max quiet road</text>`;
  for(let i=1;i<r.samples.length;i++){
    const a=r.samples[i-1],b=r.samples[i],color=palette[b.type as keyof typeof palette];
    for(const [p,q] of [[plan(a.p),plan(b.p)],[elevation(a.s,a.p),elevation(b.s,b.p)]])svg+=`<path d="M${p[0]},${p[1]} L${q[0]},${q[1]}" stroke="${color}" stroke-width="2" fill="none"/>`;
  }
  for(const f of r.features){const sample=r.samples[Math.min(r.samples.length-1,Math.round(f.s/r.length*r.samples.length))];const p=plan(sample.p);svg+=`<circle cx="${p[0]}" cy="${p[1]}" r="1.8" fill="${f.kind==='pad'?'#d6ff45':'#ff79ce'}"/>`;}
  const p=plan(ps[0]);svg+=`<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="white"/><text x="${p[0]+8}" y="${p[1]}" class="small">GRID</text><text x="35" y="${top+283}" class="small">Plan view (X/Z)</text><text x="760" y="${top+283}" class="small">Elevation along lap · ${(r.length/1000).toFixed(1)}k units</text>`;
}
svg+='</svg>';fs.writeFileSync(new URL('spline-map.svg',output),svg);
