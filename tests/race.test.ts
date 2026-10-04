import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { Track } from '../src/track.ts';
import { Race, SHIP_SPEED, BOOST_SPEED, HOVER_HEIGHT, EMPTY_CONTROLS } from '../src/race.ts';

function isolatedTrack(height = (_s: number) => 0) {
  const track = new Track();
  track.position = (s, x) => new THREE.Vector3(x, height(s), -s);
  track.curvature = () => 0;
  track.features.length = 0;
  return track;
}

test('nominal and boosted ship speed are twice the original limits',()=>{
  assert.equal(SHIP_SPEED,70*2);assert.equal(BOOST_SPEED,96*2);
  for(const boosted of [false,true]){
    const race=new Race(isolatedTrack()),ship=race.player;
    ship.x=0;ship.boost=boosted?20:0;
    for(let tick=0;tick<360;tick++)race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
    assert.equal(ship.speed,boosted?192:140);
    assert.equal(ship.recovery,0);
  }
});

test('the hover cushion compresses, rebounds, and settles above a flat road',()=>{
  const race=new Race(isolatedTrack()),ship=race.player;
  ship.x=0;ship.hoverHeight=.85;ship.hoverVelocity=-4;
  let highest=0,lowest=Infinity;
  for(let tick=0;tick<240;tick++){
    race.move(ship,EMPTY_CONTROLS,1/60);
    highest=Math.max(highest,ship.hoverHeight);lowest=Math.min(lowest,ship.hoverHeight);
  }
  assert.ok(lowest>=.65);assert.ok(highest>HOVER_HEIGHT+.04);
  assert.ok(Math.abs(ship.hoverHeight-HOVER_HEIGHT)<.01);
  assert.ok(Math.abs(ship.hoverVelocity)<.01);
});

test('a natural ridge lifts the ship into flight and gravity returns it to the road',()=>{
  const track=isolatedTrack(s=>9*Math.exp(-(((s-100)/22)**2)));
  const race=new Race(track),ship=race.player;
  ship.s=40;ship.x=0;ship.speed=140;
  const f=track.surface(ship.s,0);ship.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);
  let lifted=false,landed=false,maxHeight=0;
  for(let tick=0;tick<180;tick++){
    race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
    if(race.events.some(e=>e.kind==='launch'))lifted=true;
    if(race.events.some(e=>e.kind==='land'))landed=true;
    maxHeight=Math.max(maxHeight,ship.airHeight);assert.equal(ship.recovery,0);
  }
  assert.ok(lifted);assert.ok(landed);assert.ok(maxHeight>2);
  assert.equal(ship.airborne,0);assert.ok(Math.abs(ship.hoverHeight-HOVER_HEIGHT)<.2);
});

test('CPU rubber-banding smoothly changes pace with bounded, lap-aware gaps',()=>{
  const race=new Race(new Track()),cpu=race.ships[1];
  race.player.total=race.track.length+20;cpu.total=race.track.length-240;
  race.ai(cpu,1/60);assert.ok(cpu.aiPace>1&&cpu.aiPace<1.02);
  for(let tick=0;tick<600;tick++)race.ai(cpu,1/60);
  assert.ok(cpu.aiPace>1.16&&cpu.aiPace<=1.17);
  const position=cpu.position.clone(),s=cpu.s;
  race.player.total=10;cpu.total=race.track.length*2;
  for(let tick=0;tick<600;tick++)race.ai(cpu,1/60);
  assert.ok(cpu.aiPace>=.93&&cpu.aiPace<.94);
  assert.equal(cpu.s,s);assert.ok(cpu.position.equals(position));
  race.reset();assert.equal(race.ships[1].aiPace,1);
});

test('the closed track has continuous frames and drivable extreme banks',()=>{
  const track=new Track();
  const start=track.surface(.01,0),end=track.surface(track.length-.01,0);
  assert.ok(start.position.distanceTo(end.position)<.05);
  assert.ok(start.normal.dot(end.normal)>.999);
  const bank=track.surface(track.length*.18,0);assert.ok(Math.abs(bank.bank)>1.2);
  const pipe=track.surface(track.length*.36,18),center=track.position(track.length*.36,0);
  assert.ok(pipe.position.clone().sub(center).dot(track.base(track.length*.36).normal)>7);
  for(let s=0;s<track.length;s+=13){const f=track.surface(s,0);assert.ok(Number.isFinite(f.position.length()));assert.ok(Math.abs(f.normal.dot(f.forward))<.00001);}
});

test('CPU drivers complete three laps, use items, and survive launches',()=>{
  const race=new Race(new Track());race.reset();race.countdown=0;
  let weapons=0,boosts=0;
  for(let tick=0;tick<60*260;tick++){
    race.step(1/60,race.ai(race.player,1/60));
    for(const event of race.events){if(event.kind==='fire'||event.kind==='mine')weapons++;if(event.kind==='boost')boosts++;}
    if(race.phase==='finished')break;
  }
  assert.equal(race.player.laps,3,JSON.stringify(race.ships.map(s=>({id:s.id,laps:s.laps,s:s.s,checkpoint:s.checkpoint,speed:s.speed}))));
  assert.equal(race.phase,'finished');assert.ok(race.elapsed>50);assert.ok(weapons>3);assert.ok(boosts>10);
  assert.ok(race.ships.filter(s=>s.laps>=2).length>=5);
  assert.ok(race.ships.some(s=>s.launches>0));
  assert.ok(race.ships.every(s=>Math.abs(race.player.total-s.total)<300));
});

test('boosted movement collects a thin pickup crossed within one step',()=>{
  const race=new Race(new Track());const ship=race.player;
  const pickup=race.track.features.find(f=>f.kind==='pickup')!;
  ship.s=pickup.s-1;ship.x=pickup.x;ship.speed=90;ship.boost=1;
  race.move(ship,{...EMPTY_CONTROLS,throttle:1},.08);
  assert.ok(ship.item);assert.ok(race.pickupTimers.has(pickup.id));
});

for (const speed of [35,70,110,140,190,BOOST_SPEED*1.17]) test(`the launch ramp lands successfully at speed ${speed}`,()=>{
  const race=new Race(new Track()),ship=race.player;
  ship.s=race.track.launch-1;ship.x=0;ship.speed=speed;ship.boost=speed>140?2:0;
  if(speed>192){ship.id=1;ship.aiPace=1.17;}
  const f=race.track.surface(ship.s,ship.x);ship.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);
  let launched=false,landed=false;
  for(let tick=0;tick<180;tick++){
    race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
    if(race.events.some(e=>e.kind==='launch'))launched=true;
    if(race.events.some(e=>e.kind==='land')){landed=true;break;}
    assert.equal(ship.recovery,0);
  }
  assert.ok(launched);assert.ok(landed,JSON.stringify({s:ship.s,x:ship.x,airborne:ship.airborne,height:ship.airHeight}));
});

test('a finish crossing without the ordered checkpoints grants no lap',()=>{
  const race=new Race(new Track());const ship=race.player;
  ship.s=race.track.length+.5;ship.checkpoint=3;
  race.updateProgress(ship,race.track.length-.5);assert.equal(ship.laps,0);
  ship.checkpoint=0;race.updateProgress(ship,race.track.length-.5);assert.equal(ship.laps,1);
  assert.ok(Math.abs(ship.total-(race.track.length+.5))<.001);
});

test('banked mines align to the surface and hit a ship crossing between frames',()=>{
  const race=new Race(new Track()),ship=race.player;
  ship.s=race.track.length*.18;ship.x=0;ship.item='mine';race.useItem(ship);
  const mine=race.mines[0];assert.ok(mine.normal.dot(race.track.surface(mine.s,mine.x).normal)>.999);
  const opponent=race.ships[1];opponent.previous.copy(mine.position).add(new THREE.Vector3(-8,1,0));opponent.position.copy(mine.position).add(new THREE.Vector3(8,1,0));mine.armed=0;
  race.updateWeapons(1/60);assert.equal(race.mines.length,0);assert.ok(opponent.energy<100);
});

test('a forward rocket acquires and damages an opponent',()=>{
  const race=new Race(new Track()),owner=race.player,target=race.ships[1];
  for(const [ship,s] of [[owner,100],[target,150]] as const){ship.s=s;ship.x=0;ship.speed=140;const f=race.track.surface(s,0);ship.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);ship.previous.copy(ship.position);}
  owner.item='rocket';race.useItem(owner);assert.equal(race.rockets[0].target,target.id);
  for(let tick=0;tick<150&&target.energy>=100;tick++){race.move(target,{...EMPTY_CONTROLS,throttle:1},1/60);race.updateWeapons(1/60);}
  assert.ok(target.energy<90);assert.ok(target.speed<98);assert.equal(race.rockets.length,0);
});

test('pause and restart clear race time, weapons, and pickups',()=>{
  const race=new Race(new Track());race.phase='racing';race.elapsed=12;race.player.item='mine';race.useItem(race.player);
  race.pause();race.step(1,{...EMPTY_CONTROLS,throttle:1});assert.equal(race.elapsed,12);
  race.reset();assert.equal(race.elapsed,0);assert.equal(race.mines.length,0);assert.equal(race.player.item,null);assert.equal(race.phase,'countdown');
});
