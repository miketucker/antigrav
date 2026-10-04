import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Track} from '../src/track.ts';
import {EXPANSION_IDS} from '../src/courses.ts';

for(const id of EXPANSION_IDS){
  test(`${id} keeps nonadjacent road and tube sections clear of each other`,()=>{
    const t=new Track(id),count=Math.ceil(t.length/15),step=t.length/count;
    const points=Array.from({length:count},(_,i)=>t.base(i*step).position);
    for(let i=0;i<count;i++)for(let j=i+1;j<count;j++){
      if(Math.min(j-i,count-(j-i))*step<300)continue;
      // A tunnel extends 56 units from its floor route; this allows both envelopes.
      assert.ok(points[i].distanceToSquared(points[j])>125**2,`${id} overlapping sections at ${i*step}, ${j*step}`);
    }
  });

  test(`${id} has smooth heading and surface frames across the full driving width`,()=>{
    const t=new Track(id);
    for(let s=0;s<t.length;s+=2){
      const base=t.base(s);
      assert.ok(base.forward.angleTo(t.base(s+10).forward)<10*Math.PI/180,`${id} sharp heading at ${s}`);
      if(!t.hasRoad(s)||!t.hasRoad(s+2)||t.ramps.some(r=>{const d=t.signedDistance(r.s,s);return d>-r.length-4&&d<4;}))continue;
      const lanes=t.inFullPipe(s)?[0,-44,44,87]:[0,-t.profile(s).width*.4,t.profile(s).width*.4];
      for(const x of lanes){
        const a=t.surface(s,x),b=t.surface(s+2,x);
        assert.ok(a.normal.angleTo(b.normal)<5*Math.PI/180,`${id} frame jolt at ${s}, lane ${x}`);
        assert.ok(a.forward.dot(base.forward)>.65,`${id} folded surface at ${s}, lane ${x}`);
      }
    }
  });

  test(`${id} connects its themed sections with rewards and clear jump runways`,()=>{
    const t=new Track(id),activities=[...t.features,...t.barriers,...t.markers,...t.ramps].map(f=>f.s).sort((a,b)=>a-b);
    for(let i=0;i<activities.length;i++){
      const start=activities[i],end=activities[(i+1)%activities.length]+(i===activities.length-1?t.length:0);
      if(t.gaps.some(g=>start<g.landingEnd+70&&end>g.start-180))continue;
      assert.ok(end-start<400,`${id} empty stretch from ${start} to ${end}`);
    }
    for(const gap of t.gaps){
      const chain=t.boostChains.find(c=>c.mode==='straight'&&c.pads.length===3&&c.pads[2].s===gap.start-100);
      assert.ok(chain,`${id} jump runway boosts`);
      assert.equal(chain.pads[1].s-chain.pads[0].s,140);
      assert.ok(!t.barriers.some(b=>b.s>gap.start-180&&b.s<gap.landingEnd+70));
    }
  });
}
