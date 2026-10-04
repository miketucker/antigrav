import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {Track} from '../src/track.ts';
import {EXPANSION_IDS} from '../src/courses.ts';
import {Race,EMPTY_CONTROLS,HOVER_HEIGHT,BOOST_SPEED,SHIP_SPEED,driftTier} from '../src/race.ts';

function place(race:Race,s:number,x=0,speed=140){
  const p=race.player,f=race.track.surface(s,x);p.s=s;p.x=x;p.speed=speed;p.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);p.previous.copy(p.position);
  p.checkpoint=race.track.checkpoints.findIndex(c=>c>s);if(p.checkpoint<0)p.checkpoint=0;return p;
}

test('drifting charges three tiers and releasing grants the corresponding mini-turbo',()=>{
  for(const [seconds,tier,duration] of [[.3,0,0],[.8,1,.65],[1.5,2,1.15],[2.4,3,1.8]]){
    const t=new Track('abyss');t.features.length=0;const race=new Race(t),p=place(race,t.pipe!.start+250);
    for(let tick=0;tick<seconds*60;tick++)race.move(p,{...EMPTY_CONTROLS,throttle:1,steer:.8,drift:true},1/60);
    assert.equal(p.drifting,true);assert.equal(driftTier(p.driftCharge),tier);assert.equal(p.airborne,0);assert.equal(p.recovery,0);
    const before=p.speed;race.events=[];race.move(p,{...EMPTY_CONTROLS,throttle:1},1/60);
    assert.equal(p.drifting,false);assert.equal(p.driftCharge,0);
    if(tier){assert.ok(p.boost>=duration-.02);assert.ok(p.speed>before+20);assert.ok(race.events.some(e=>e.text?.includes('DRIFT TURBO')));}else assert.equal(p.boost,0);
  }
});

test('stationary or straight handbraking earns no turbo and impacts, jumps and reset cancel charge',()=>{
  const t=new Track('abyss'),race=new Race(t),p=place(race,t.pipe!.start+250);t.features.length=0;
  for(let i=0;i<60;i++)race.move(p,{...EMPTY_CONTROLS,throttle:1,drift:true},1/60);
  assert.equal(p.driftCharge,0);race.move(p,{...EMPTY_CONTROLS,throttle:1},1/60);assert.equal(p.boost,0);
  p.drifting=true;p.driftCharge=2;race.damage(p,10,p.position);assert.equal(p.driftCharge,0);
  p.hit=0;p.drifting=true;p.driftCharge=2;p.airborne=.2;race.updateDrift(p,{...EMPTY_CONTROLS,drift:true},1/60);assert.equal(p.drifting,false);
  p.airborne=0;p.drifting=true;p.driftCharge=2;p.speed=10;race.updateDrift(p,EMPTY_CONTROLS,1/60);assert.equal(p.boost,0);
  p.markerPenalty=true;p.markerStreak=3;race.markerTimers.set('0:0',5);race.reset();assert.equal(race.player.markerPenalty,false);assert.equal(race.player.markerStreak,0);assert.equal(race.markerTimers.size,0);assert.equal(race.player.driftCharge,0);
});

function cross(race:Race,index:number,correct:boolean,height=HOVER_HEIGHT){
  const m=race.track.markers[index],p=race.player,x=(m.side==='left'?-8:8)*(correct?1:-1),f=race.track.surface(m.s,x);
  p.s=m.s+3;p.x=x;p.previous.copy(f.position).addScaledVector(f.normal,height).addScaledVector(f.forward,-3);p.position.copy(f.position).addScaledVector(f.normal,height).addScaledVector(f.forward,3);
  race.collectMarkers(p,m.s-3);
}

test('directional misses cap both speed modes until five consecutive correct markers',()=>{
  const race=new Race(new Track('slalom')),p=race.player;p.speed=192;p.boost=2;
  cross(race,0,false);assert.equal(p.markerPenalty,true);assert.equal(p.speed,BOOST_SPEED*.8);assert.equal(race.speedLimit(p),BOOST_SPEED*.8);
  p.boost=0;assert.equal(race.speedLimit(p),SHIP_SPEED*.8);
  for(let i=1;i<=3;i++)cross(race,i,true);assert.equal(p.markerStreak,3);assert.equal(p.markerPenalty,true);
  cross(race,4,false);assert.equal(p.markerStreak,0);
  for(let i=5;i<9;i++){cross(race,i,true);assert.equal(p.markerPenalty,true);}assert.equal(p.markerStreak,4);
  cross(race,9,true);assert.equal(p.markerPenalty,false);assert.equal(p.markerStreak,0);assert.equal(race.speedLimit(p),SHIP_SPEED);
  assert.ok(race.events.some(e=>e.text?.includes('FULL POWER RESTORED')));
  const passed=p.markerPassed;cross(race,9,true);assert.equal(p.markerPassed,passed);
});

test('markers validate both directions and reject flying far above their sign',()=>{
  const race=new Race(new Track('slalom'));cross(race,0,true);cross(race,1,true);assert.equal(race.player.markerPassed,2);assert.equal(race.player.markerPenalty,false);
  cross(race,2,true,30);assert.equal(race.player.markerPenalty,true);assert.equal(race.player.markerMissed,1);
});

test('swept barrier collisions hit fast crossings while a clear lane or high jump avoids them',()=>{
  for(const mode of ['hit','side','above'] as const){
    const race=new Race(new Track('slalom')),o=race.track.barriers[0],f=race.track.surface(o.s,o.x),p=race.player;
    p.s=o.s+20;p.speed=140;p.previous.copy(f.position).addScaledVector(f.forward,-30).addScaledVector(f.normal,mode==='above'?o.height+5:HOVER_HEIGHT);p.position.copy(p.previous).addScaledVector(f.forward,60);
    if(mode==='side'){p.previous.addScaledVector(f.right,o.width/2+4);p.position.addScaledVector(f.right,o.width/2+4);}
    p.drifting=true;p.driftCharge=2;race.collideBarriers(p);
    if(mode==='hit'){assert.equal(p.energy,88);assert.ok(p.speed<100);assert.equal(p.driftCharge,0);}else assert.equal(p.energy,100);
  }
});

test('four themed courses retain progressive gaps, narrow landings and dense hazards',()=>{
  let previousGap=0,previousWidth=100,previousHazards=0;
  for(const id of EXPANSION_IDS){
    const t=new Track(id),g=t.gaps[0];assert.ok(t.length>7500);assert.ok(g.end-g.start>previousGap);assert.ok(g.width<previousWidth);assert.ok(t.barriers.length>previousHazards);
    previousGap=g.end-g.start;previousWidth=g.width;previousHazards=t.barriers.length;
    assert.ok(t.markers.length>=10);assert.ok(t.pipes.length>=1);assert.ok(!t.hasRoad((g.start+g.end)/2));assert.ok(t.hasRoad(g.end+1));assert.ok(t.checkpoints.every(s=>t.hasRoad(s)));
    for(let i=0;i<180;i++){
      const s=i/180*t.length,f=t.surface(s,0);assert.ok(Number.isFinite(f.position.length()));assert.ok(f.normal.length()>.99);assert.ok(Math.abs(f.normal.dot(f.forward))<.01);
    }
    const a=t.surface(.001,8),b=t.surface(t.length-.001,8);assert.ok(a.position.distanceTo(b.position)<.01);assert.ok(a.normal.dot(b.normal)>.999);
    for(const pipe of t.pipes){const s=(pipe.start+pipe.end)/2;assert.ok(t.interiorBend(s)>.999);const floor=t.surface(s,0),ceiling=t.surface(s,Math.PI*pipe.radius);assert.ok(floor.normal.dot(ceiling.normal)<-.95);assert.ok(t.position(s,0).distanceTo(t.position(s,Math.PI*2*pipe.radius))<1e-5);}
  }
});

for(const id of EXPANSION_IDS){
  test(`${id} jump is reachable at nominal, boosted and reduced-power speeds`,()=>{
    for(const gapIndex of new Track(id).gaps.keys())for(const speed of [104.16,112,140,192]){
      const t=new Track(id);t.features.length=0;t.rings.length=0;
      const race=new Race(t),g=t.gaps[gapIndex],p=place(race,g.start-80,0,speed);p.markerPenalty=speed<=112;p.aiPace=speed<112?.93:1;p.boost=speed===192?3:0;
      if(speed<112)p.id=1; // Apply the leading CPU's reduced cap throughout flight.
      let launched=0,landed=false,peak=0;
      for(let i=0;i<480;i++){
        race.events=[];race.move(p,{...EMPTY_CONTROLS,throttle:1},1/60);launched+=race.events.filter(e=>e.kind==='launch').length;peak=Math.max(peak,p.airHeight);
        assert.equal(p.recovery,0,`${id} gap ${gapIndex+1} speed ${speed} s=${p.s}`);
        if(race.events.some(e=>e.kind==='land')){landed=true;break;}
      }
      assert.equal(launched,1);assert.ok(landed);assert.ok(peak>15);assert.ok(p.s>=g.end&&p.s<=g.landingEnd);assert.ok(Math.abs(p.x)<g.width/2);
    }
  });
  test(`${id} a misaligned jump misses the real gap and recovers to a safe approach`,()=>{
    for(const gapIndex of new Track(id).gaps.keys()){
    const t=new Track(id);t.features.length=0;t.rings.length=0;const race=new Race(t),g=t.gaps[gapIndex],p=place(race,g.start-20);let missed=false;
    for(let i=0;i<480;i++){race.move(p,{...EMPTY_CONTROLS,throttle:1,steer:p.airborne?1:0},1/60);if(p.recovery){missed=true;break;}}
    assert.ok(missed);assert.ok(Math.abs(p.x)>g.width/2);
    for(let i=0;i<100;i++)race.move(p,EMPTY_CONTROLS,1/60);
    assert.equal(p.recovery,0);assert.ok(p.s<g.start);assert.ok(t.hasRoad(p.s));assert.equal(p.laps,0);
    }
  });
}

test('CPU racers finish each new circuit at every difficulty using jumps, markers, items and drifts',()=>{
  for(const id of EXPANSION_IDS)for(const difficulty of ['rookie','standard','expert'] as const){
    const race=new Race(new Track(id));race.phase='racing';race.difficulty=difficulty;let jumps=0,lands=0,turbos=0,rewards=0,terrainRecoveries=0;
    for(let i=0;i<60*600;i++){
      race.step(1/60,race.ai(race.player,1/60));
      for(const e of race.events){if(e.kind==='launch')jumps++;if(e.kind==='land')lands++;if(e.text?.includes('DRIFT TURBO'))turbos++;if(e.kind==='boost'||e.kind==='pickup')rewards++;if(e.kind==='recover')terrainRecoveries++;}
      if(race.phase==='finished')break;
    }
    assert.equal(race.phase,'finished',`${id} ${difficulty}`);assert.equal(race.player.laps,3);assert.equal(terrainRecoveries,0,`${id} ${difficulty}`);assert.ok(jumps>=18&&lands===jumps,id);assert.ok(rewards>80,id);
    // The jump course no longer needs emergency drifts at malformed connectors.
    if(race.track.banks.length)assert.ok(turbos>0,`${id} ${difficulty} banked drift rewards`);
    assert.ok(race.ships.every(p=>p.markerPassed>10));assert.ok(race.ships.every(p=>p.laps>=2));assert.ok(race.ships.every(p=>p.finish!==null||Math.abs(p.total-race.player.total)<race.track.length*.06),`${id} ${difficulty} unfinished CPU pack: ${race.ships.map(p=>Math.round(p.total-race.player.total)).join(',')}`);
  }
});

test('overshooting a marked landing deck recovers instead of attaching to the following road',()=>{
  const t=new Track('slalom'),race=new Race(t),g=t.gaps[0],p=place(race,g.start-30);
  p.jumpGap=0;p.airborne=.5;p.s=g.landingEnd+20;p.x=0;
  const f=t.surface(p.s,0);p.position.copy(f.position).addScaledVector(f.normal,1.5);p.flightVelocity.copy(f.forward).multiplyScalar(140).addScaledVector(f.normal,-10);
  race.events=[];race.move(p,{...EMPTY_CONTROLS,throttle:1},1/60);
  assert.ok(p.recovery>0);assert.ok(!race.events.some(e=>e.kind==='land'));assert.equal(p.laps,0);
});


test('course identities change their playable terrain and incentives',()=>{
  const slalom=new Track('slalom'),rift=new Track('rift'),vortex=new Track('vortex'),final=new Track('oblivion');
  assert.equal(slalom.gaps.length,1);assert.equal(rift.gaps.length,3);assert.equal(final.gaps.length,4);
  assert.equal(vortex.pipes.length,3);assert.equal(final.pipes.length,3);
  assert.equal(slalom.banks.length,2);assert.ok(final.banks.length>0);assert.equal(rift.banks.length,0);
  for(const t of [slalom,final]){
    const angles=Array.from({length:600},(_,i)=>t.bankAngle(i/600*t.length));
    assert.ok(Math.max(...angles)>1);assert.ok(Math.min(...angles)<-1);
    for(const g of t.gaps)assert.equal(t.bankAngle(g.start-50),0);
  }
  for(const t of [rift,final])for(const [i,g] of t.gaps.entries()){
    assert.ok(!t.hasRoad((g.start+g.end)/2));assert.ok(t.checkpoints.includes(g.start-110));assert.ok(t.checkpoints.includes(g.end+35));
    assert.ok(t.features.some(f=>f.kind==='pad'&&f.s===g.start-100));assert.ok(t.rings.some(r=>r.ramp===i));
    assert.ok(!t.barriers.some(b=>b.s>g.start-150&&b.s<g.landingEnd));
    if(i)assert.ok(g.width<t.gaps[i-1].width);
  }
  for(const t of [vortex,final]){
    assert.ok(t.ramps.filter(r=>t.interiorBend(r.s)>.999).length>=3);
    for(const pipe of t.pipes)assert.ok(t.boostChains.some(c=>c.pads.length>=3&&c.pads.every(p=>p.s>pipe.start&&p.s<pipe.end)));
    assert.ok(t.features.some(f=>t.interiorBend(f.s)>.999&&Math.abs(f.x)>70));
  }
});

test('every new tube ramp hops inward and returns safely at normal and boosted speed',()=>{
  for(const id of ['vortex','oblivion'] as const){
    const t=new Track(id);t.features.length=0;t.rings.length=0;
    for(const ramp of t.ramps.filter(r=>t.interiorBend(r.s)>.999))for(const speed of [140,192]){
      const race=new Race(t),p=place(race,ramp.s-12,ramp.x,speed);p.boost=speed===192?3:0;
      let launched=false,landed=false;
      for(let tick=0;tick<480;tick++){
        race.events=[];race.move(p,{...EMPTY_CONTROLS,throttle:1},1/60);
        if(race.events.some(e=>e.kind==='launch'))launched=true;
        if(race.events.some(e=>e.kind==='land')){landed=true;break;}
        assert.equal(p.recovery,0,`${id} ramp=${ramp.s} speed=${speed}`);
      }
      assert.ok(launched);assert.ok(landed);assert.ok(p.s>ramp.s);
    }
  }
});
