import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Track,STAGES,clamp} from '../src/track.ts';
import {Race,EMPTY_CONTROLS,HOVER_HEIGHT,type Ship} from '../src/race.ts';

function place(race:Race,s:number,x=0){
  const p=race.player,f=race.track.surface(s,x);p.s=s;p.x=x;p.speed=140;
  p.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);p.previous.copy(p.position);
  p.checkpoint=race.track.checkpoints.findIndex(c=>c>s);if(p.checkpoint<0)p.checkpoint=0;
  return p;
}

test('Drift Lab is a flat closed ribbon with separated zigzags and no other terrain challenges',()=>{
  const t=new Track('driftlab');assert.equal(Object.keys(STAGES).length,8);assert.ok(t.openEdges);assert.ok(t.length>7000);
  assert.equal(t.features.length+t.markers.length+t.barriers.length+t.ramps.length+t.pipes.length+t.gaps.length,0);
  assert.equal(t.exterior,null);assert.equal(t.drop,null);
  const signs:number[]=[];let previous=0,minDistance=Infinity;
  for(let s=0;s<t.length;s+=10){
    const f=t.surface(s,0),k=t.curvature(s);assert.equal(f.position.y,0);assert.equal(f.bank,0);assert.equal(f.depth,0);assert.equal(f.width,24);
    assert.ok(f.normal.dot(new THREE.Vector3(0,1,0))>.99999);
    if(Math.abs(k)>.012){const sign=Math.sign(k);if(sign!==previous)signs.push(sign);previous=sign;}
    for(const x of [-12,12])assert.equal(t.position(s,x).y,0);
  }
  assert.ok(signs.length>=12,'Repeated alternating sharp corners');
  for(let s=0;s<t.length;s+=30)for(let u=s+180;u<t.length;u+=30){
    if(Math.abs(t.signedDistance(s,u))<180)continue;
    minDistance=Math.min(minDistance,t.position(s,0).distanceTo(t.position(u,0)));
  }
  assert.ok(minDistance>50,`No crossing ribbons: clearance ${minDistance}`);
  const a=t.surface(.001,8),b=t.surface(t.length-.001,8);assert.ok(a.position.distanceTo(b.position)<.01);assert.ok(a.forward.dot(b.forward)>.99999);
});

function lineControls(race:Race,p:Ship,mode:'drift'|'normal'|'late'|'wrong'){
  const k=race.track.curvature(p.s),drift=mode!=='normal'&&(mode!=='late'||Math.abs(p.x)>9)&&
    (Math.abs(k)>.004||Math.abs(race.track.curvature(p.s+35))>.008);
  const target=clamp(-p.x*.035,-.24,.24),damping=drift?7.2:8.4,authority=drift?4.4:.8;
  const steer=clamp(((target-p.yaw)*10+target*damping-k*p.speed*.78)/authority,-1,1)*(mode==='wrong'?-1:1);
  return {...EMPTY_CONTROLS,throttle:1,steer,drift};
}

test('racing-speed zigzags are drivable with timely drifting; normal, late and reversed steering fall',()=>{
  const t=new Track('driftlab');
  for(const mode of ['normal','late','wrong','drift'] as const){
    const race=new Race(t),p=place(race,430);let maxLane=0,driftTicks=0;
    for(let tick=0;tick<(mode==='drift'?3600:180);tick++){
      race.move(p,lineControls(race,p,mode),1/60);maxLane=Math.max(maxLane,Math.abs(p.x));driftTicks+=Number(p.drifting);
      if(p.falling)break;
    }
    if(mode==='drift'){assert.equal(p.falling,false);assert.equal(p.recovery,0);assert.ok(driftTicks>100);assert.ok(maxLane<5);}
    else{assert.ok(p.falling,`${mode} missed the corner`);assert.ok(Math.abs(p.x)>10.3);assert.equal(p.hit,0);}
  }
});

test('open-edge falls retain world motion, cancel charge, freeze progress and recover at the last checkpoint',()=>{
  const t=new Track('driftlab'),race=new Race(t),cp=t.checkpoints[1],p=place(race,cp-1,11);
  p.drifting=true;p.driftCharge=2;p.boost=1;p.total=cp-1;
  race.move(p,{...EMPTY_CONTROLS,throttle:1,drift:true},1/60);
  assert.ok(p.falling);assert.ok(p.airborne>0);assert.equal(p.driftCharge,0);assert.equal(p.boost,0);
  assert.equal(p.checkpoint,1);assert.equal(p.total,cp-1);assert.ok(!race.events.some(e=>e.kind==='wall'));
  const start=p.position.clone(),departureS=p.s;
  for(let i=0;i<30;i++)race.move(p,{...EMPTY_CONTROLS,throttle:1,drift:true},1/60);
  assert.ok(p.position.y<start.y-3);assert.ok(p.position.distanceTo(start)>40);assert.equal(p.s,departureS);assert.equal(p.checkpoint,1);
  for(let i=0;i<180&&!p.recovery;i++)race.move(p,EMPTY_CONTROLS,1/60);
  assert.ok(p.recovery>0);assert.equal(p.laps,0);
  for(let i=0;i<95&&p.recovery;i++)race.move(p,EMPTY_CONTROLS,1/60);
  assert.equal(p.recovery,0);assert.equal(p.falling,false);assert.equal(p.airborne,0);assert.equal(p.s,3);assert.equal(p.x,0);
  assert.equal(p.position.y,HOVER_HEIGHT);assert.equal(p.flightVelocity.length(),0);
});

test('all CPU difficulties complete Drift Lab with real drifts and release turbos without edge recoveries',()=>{
  for(const difficulty of ['rookie','standard','expert'] as const){
    const race=new Race(new Track('driftlab'));race.phase='racing';race.difficulty=difficulty;
    let drifts=0,turbos=0,recoveries=0;
    for(let tick=0;tick<60*260;tick++){
      race.step(1/60,race.ai(race.player,1/60));
      drifts+=race.ships.filter(p=>p.drifting).length;
      turbos+=race.events.filter(e=>e.text?.includes('DRIFT TURBO')).length;
      recoveries+=race.events.filter(e=>e.kind==='recover').length;
      if(race.phase==='finished')break;
    }
    assert.equal(race.phase,'finished',difficulty);assert.equal(race.player.laps,3);assert.equal(recoveries,0,difficulty);
    assert.ok(drifts>1000);assert.ok(turbos>5);assert.ok(race.ships.every(p=>p.laps>=2));
  }
});
