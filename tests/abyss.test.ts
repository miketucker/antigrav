import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { Track } from '../src/track.ts';
import { Race, EMPTY_CONTROLS, HOVER_HEIGHT, BOOST_SPEED } from '../src/race.ts';

function place(race:Race,s:number,x=0,speed=140){
  const ship=race.player,f=race.track.surface(s,x);ship.s=s;ship.x=x;ship.speed=speed;
  ship.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);ship.previous.copy(ship.position);
  ship.checkpoint=race.track.checkpoints.findIndex(cp=>cp>s);if(ship.checkpoint<0)ship.checkpoint=0;
  return ship;
}

test('Abyss is a distinct closed course with a physical gap and ordered safe checkpoints',()=>{
  const track=new Track('abyss'),d=track.drop!;
  assert.ok(track.length>new Track().length*1.5);
  assert.ok(track.hasRoad(d.start-1));assert.ok(!track.hasRoad((d.start+d.end)/2));assert.ok(track.hasRoad(d.end+1));
  assert.ok(track.checkpoints.every(s=>track.hasRoad(s)));
  assert.ok(track.checkpoints.every((s,i)=>i===0||s>track.checkpoints[i-1]));
  assert.ok(track.surface(.01,0).position.distanceTo(track.surface(track.length-.01,0).position)<.05);
  assert.ok(track.surface(.01,0).normal.dot(track.surface(track.length-.01,0).normal)>.999);
});

test('full pipe has inward floor, wall and ceiling normals and a seamless circumference',()=>{
  const t=new Track('abyss'),s=t.pipe!.start+500,r=t.pipe!.radius;
  const floor=t.surface(s,0),right=t.surface(s,Math.PI*r/2),ceiling=t.surface(s,Math.PI*r),left=t.surface(s,-Math.PI*r/2);
  assert.ok(floor.normal.y>.99);assert.ok(right.normal.dot(t.base(s).right)<-.99);assert.ok(ceiling.normal.y<-.99);assert.ok(left.normal.dot(t.base(s).right)>.99);
  assert.ok(t.position(s,Math.PI*r).distanceTo(t.position(s,-Math.PI*r))<1e-6);
  assert.ok(t.surface(s,Math.PI*r).normal.dot(t.surface(s,-Math.PI*r).normal)>.999);
  assert.ok(Math.abs(t.laneDelta(s,Math.PI*r-1,-Math.PI*r+1)-2)<1e-6);
});

test('holding steer carves a complete 360-degree pipe loop without wall hits or detachment',()=>{
  const race=new Race(new Track('abyss')),t=race.track,ship=place(race,t.pipe!.start+230);
  t.features.length=0;let unwrapped=0,ceiling=false,wall=false;
  for(let i=0;i<360;i++){
    const old=ship.x;race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1,steer:1},1/60);
    unwrapped+=t.laneDelta(ship.s,old,ship.x);
    const normal=t.surface(ship.s,ship.x).normal;ceiling||=normal.y<-.95;wall||=Math.abs(normal.x)>.95;
    assert.equal(ship.airborne,0);assert.equal(ship.recovery,0);assert.ok(!race.events.some(e=>e.kind==='wall'));
    assert.ok(ship.position.distanceTo(t.surface(ship.s,ship.x).position)<2.5);
  }
  assert.ok(unwrapped>Math.PI*2*t.pipe!.radius);assert.ok(ceiling&&wall);
});

test('wall and ceiling incentives are collectible, including across the ceiling seam',()=>{
  const race=new Race(new Track('abyss')),t=race.track;
  for(const kind of ['pad','pickup'] as const)for(const angle of [Math.PI/2,-Math.PI/2,Math.PI]){
    const feature=t.features.find(f=>f.kind===kind&&t.inFullPipe(f.s)&&Math.abs(t.laneDelta(f.s,angle*t.pipe!.radius,f.x))<.1)!;
    assert.ok(feature,`${kind} at ${angle}`);
    const ship=place(race,feature.s-1,angle===Math.PI?-Math.PI*t.pipe!.radius+.2:feature.x,180);ship.boost=2;ship.item=null;
    race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/30);
    if(kind==='pickup'){assert.ok(ship.item);assert.ok(race.pickupTimers.has(feature.id));}
    else assert.ok(race.padTimers.has(`${ship.id}:${feature.id}`));
  }
});

for(const speed of [140,BOOST_SPEED,BOOST_SPEED*1.17])test(`the 300-unit drop gives roughly five seconds to aim and land at speed ${speed}`,()=>{
  const race=new Race(new Track('abyss')),ship=place(race,race.track.drop!.start-2,0,speed);
  if(speed>140)ship.boost=10;if(speed>BOOST_SPEED){ship.id=1;ship.aiPace=1.17;}
  let flight=0,landed=false;
  for(let i=0;i<420;i++){
    race.events=[];race.move(ship,speed===140?{...EMPTY_CONTROLS,throttle:1,steer:ship.airborne>2&&ship.airborne<2.4?1:0}:race.ai(ship,1/60),1/60);
    flight=Math.max(flight,ship.airborne);
    assert.equal(ship.recovery,0,`missed at ${ship.s}, ${ship.x}`);
    if(race.events.some(e=>e.kind==='land')){landed=true;break;}
  }
  assert.ok(landed);assert.ok(flight>4.7&&flight<5.3,`air time ${flight}`);assert.equal(ship.dropFlight,false);
});

test('a missed drop recovers before takeoff and can be retried successfully',()=>{
  const race=new Race(new Track('abyss')),ship=place(race,race.track.drop!.start-2);
  let missed=false;
  for(let i=0;i<420;i++){
    race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
    if(race.events.some(e=>e.kind==='recover')){missed=true;break;}
  }
  assert.ok(missed);assert.ok(ship.recovery>0);
  for(let i=0;i<100;i++)race.move(ship,EMPTY_CONTROLS,1/60);
  assert.ok(ship.s<race.track.drop!.start);assert.ok(race.track.hasRoad(ship.s));assert.equal(ship.dropFlight,false);
  let landed=false;
  for(let i=0;i<900;i++){
    race.events=[];race.move(ship,race.ai(ship,1/60),1/60);
    if(race.events.some(e=>e.kind==='land'&&e.text?.includes('ABYSS'))){landed=true;break;}
  }
  assert.ok(landed);assert.equal(ship.laps,0);
});

test('Abyss CPU pilots race three laps, aim the drop, and collect pipe rewards at every difficulty',()=>{
  for(const difficulty of ['rookie','standard','expert'] as const){
    const race=new Race(new Track('abyss'));race.phase='racing';race.difficulty=difficulty;
    let drops=0,recoveries=0,pipeRewards=0;
    for(let tick=0;tick<60*240;tick++){
      race.step(1/60,race.ai(race.player,1/60));
      for(const e of race.events){if(e.kind==='land'&&e.text?.includes('ABYSS'))drops++;if(e.kind==='recover')recoveries++;if((e.kind==='pickup'||e.kind==='boost')&&e.position.z<-350&&e.position.x>600)pipeRewards++;}
      if(race.phase==='finished')break;
    }
    assert.equal(race.phase,'finished',difficulty);assert.equal(race.player.laps,3);assert.ok(drops>=15,`${difficulty}: ${drops} drop landings`);
    assert.equal(recoveries,0,difficulty);assert.ok(pipeRewards>6,`${difficulty}: ${pipeRewards} pipe rewards`);assert.ok(race.ships.every(s=>s.laps>=2));
    assert.ok(race.ships.every(s=>Math.abs(race.player.total-s.total)<400));
  }
});

test('boosted wave crests launch short hops, and nose-up trades speed for a longer flight than a dive',()=>{
  const results=[];
  for(const pitch of [0,1,-1]){
    const race=new Race(new Track('abyss')),t=race.track,ship=place(race,t.waves[0].s-100,0,140);
    let longest=0,launched=false,landed=false,initialSpeed=0,controlledSpeed=0,maxAltitude=0;
    for(let tick=0;tick<600;tick++){
      race.events=[];
      const controlPitch=ship.airborne>.1&&ship.airborne<.45?pitch:0;
      race.move(ship,{...EMPTY_CONTROLS,throttle:1,pitch:controlPitch},1/60);
      if(ship.airborne&&!initialSpeed)initialSpeed=ship.speed;
      if(controlPitch)controlledSpeed=ship.speed;
      longest=Math.max(longest,ship.airborne);maxAltitude=Math.max(maxAltitude,ship.position.y);
      launched||=race.events.some(e=>e.kind==='launch'&&e.text?.includes('WAVE'));
      assert.equal(ship.recovery,0);
      if(race.events.some(e=>e.kind==='land')){landed=true;break;}
    }
    assert.ok(launched&&landed);results.push({pitch,longest,initialSpeed,controlledSpeed,maxAltitude});
  }
  const [level,climb,dive]=results;
  assert.ok(level.longest>.5&&level.longest<1.5);
  assert.ok(climb.longest>level.longest+.5);assert.ok(dive.longest<level.longest-.2);
  assert.ok(climb.controlledSpeed<climb.initialSpeed-8);
  assert.ok(climb.maxAltitude>level.maxAltitude+15);
});

test('drop pitch redirects velocity and extends or shortens the descent while the neutral flight stays ballistic',()=>{
  const results=[];
  for(const pitch of [0,1,-1]){
    const race=new Race(new Track('abyss')),ship=place(race,race.track.drop!.start-2);
    let longest=0,speedAfterControl=0,headingChecked=false;
    for(let tick=0;tick<900;tick++){
      const controlPitch=ship.airborne>.1&&ship.airborne<1.1?pitch:0;
      race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1,pitch:controlPitch},1/60);
      longest=Math.max(longest,ship.airborne);
      if(controlPitch){speedAfterControl=ship.speed;
        if(ship.airborne>.8){const direction=new THREE.Vector3(0,0,-1).applyQuaternion(ship.rotation);assert.ok(direction.dot(ship.flightVelocity.clone().normalize())>.98);headingChecked=true;}
      }
      if(race.events.some(e=>e.kind==='land'||e.kind==='recover'))break;
    }
    if(pitch)assert.ok(headingChecked);results.push({longest,speedAfterControl});
  }
  const [neutral,up,down]=results;
  assert.ok(up.longest>neutral.longest+2);assert.ok(down.longest<neutral.longest-1);
  assert.ok(up.speedAfterControl<125);assert.ok(down.speedAfterControl>140);
});

test('ceiling mines stay attached and hit ships crossing the pipe seam',()=>{
  const race=new Race(new Track('abyss')),t=race.track,s=t.pipe!.start+600,x=Math.PI*t.pipe!.radius;
  const owner=place(race,s,x);owner.item='mine';race.useItem(owner);const mine=race.mines[0];
  assert.ok(mine.normal.y<-.99);
  const victim=race.ships[1];victim.previous.copy(mine.position).add(new THREE.Vector3(-8,-1,0));victim.position.copy(mine.position).add(new THREE.Vector3(8,-1,0));mine.armed=0;
  race.updateWeapons(1/60);assert.ok(victim.energy<100);assert.equal(race.mines.length,0);
});

test('rockets fired along the pipe ceiling acquire and hit an opponent',()=>{
  const race=new Race(new Track('abyss')),t=race.track,owner=place(race,t.pipe!.start+500,Math.PI*t.pipe!.radius);
  const target=race.ships[1];target.s=owner.s+45;target.x=-Math.PI*t.pipe!.radius+.2;target.speed=140;
  const f=t.surface(target.s,target.x);target.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);target.previous.copy(target.position);
  owner.item='rocket';race.useItem(owner);assert.equal(race.rockets[0].target,target.id);
  for(let tick=0;tick<150&&target.energy===100;tick++){race.move(target,{...EMPTY_CONTROLS,throttle:1},1/60);race.updateWeapons(1/60);}
  assert.ok(target.energy<100);assert.equal(race.rockets.length,0);
});

test('the landing cue predicts the coast after the pilot releases lateral steering',()=>{
  const race=new Race(new Track('abyss')),ship=place(race,race.track.drop!.start-2,-4);
  for(let tick=0;tick<210;tick++){
    race.move(ship,{...EMPTY_CONTROLS,throttle:1,steer:ship.airborne>2&&ship.airborne<2.6?1:0},1/60);
    if(ship.airborne>=2.6)break;
  }
  const prediction=race.landingPrediction(ship)!;assert.equal(prediction.range,'inside');
  let landed=false;
  for(let tick=0;tick<300;tick++){
    race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
    if(race.events.some(e=>e.kind==='land')){landed=true;break;}
  }
  assert.ok(landed);assert.ok(Math.abs(prediction.error-ship.x)<3,`${prediction.error} vs ${ship.x}`);
});
