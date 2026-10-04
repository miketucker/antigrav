import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { Track } from '../src/track.ts';
import { Race, EMPTY_CONTROLS, HOVER_HEIGHT, BOOST_SPEED, EXTERIOR_GRAVITY_SCALE } from '../src/race.ts';

function place(race:Race,s:number,x=0,speed=140){
  const ship=race.player,f=race.track.surface(s,x);
  ship.s=s;ship.x=x;ship.speed=speed;ship.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);ship.previous.copy(ship.position);
  ship.checkpoint=race.track.checkpoints.findIndex(cp=>cp>s);if(ship.checkpoint<0)ship.checkpoint=0;
  return ship;
}

test('Helix closes its route and its full tube has seamless outward-facing lanes',()=>{
  const t=new Track('helix'),r=t.exterior!.radius;
  assert.equal(t.drop,null);assert.ok(t.pipe);assert.ok(t.length>9000);
  for(let i=0;i<160;i++)for(let j=0;j<8;j++){
    const s=i/160*t.length,x=j*Math.PI/4*r,b=t.base(s),f=t.surface(s,x),radial=f.position.clone().sub(b.position).normalize();
    if(t.tubeBend(s)<.999)continue;
    assert.ok(f.normal.dot(radial)>.9);assert.ok(f.longitudinalScale>.3);assert.ok(Number.isFinite(f.position.length()));
    if(t.tubeBend(s)===1)assert.ok(t.position(s,x).distanceTo(t.position(s,x+Math.PI*2*r))<1e-6);
  }
  for(let j=0;j<8;j++){
    const x=-24+j/7*48,a=t.surface(.001,x),b=t.surface(t.length-.001,x);
    assert.ok(a.position.distanceTo(b.position)<.01);assert.ok(a.normal.dot(b.normal)>.9999);
  }
  assert.ok(Math.abs(t.laneDelta(1000,Math.PI*r-1,-Math.PI*r+1)-2)<1e-6);
});

test('the route climbs two spiral turns, completes a vertical loop, and twists down on three axes',()=>{
  const t=new Track('helix'),e=t.exterior!;
  assert.ok(t.base(e.spiralEnd).position.y-t.base(e.spiralStart).position.y>470);
  let vertical=0,down=0,up=0;
  for(let i=0;i<=100;i++){
    const b=t.base(e.loopStart+(e.loopEnd-e.loopStart)*i/100);
    vertical=Math.max(vertical,b.position.y);down=Math.min(down,b.forward.y);up=Math.max(up,b.forward.y);
  }
  assert.ok(vertical>1030);assert.ok(up>.97);assert.ok(down<-.97);
  assert.ok(t.base(e.descentStart).position.y-t.base(e.descentEnd).position.y>290);
  assert.ok(t.checkpoints.every((s,i)=>t.hasRoad(s)&&(i===0||s>t.checkpoints[i-1])));
});

test('continuous exterior steering wraps around the underside without walls or recovery',()=>{
  const race=new Race(new Track('helix')),t=race.track,ship=place(race,500);
  t.features.length=0;let travel=0,under=false;
  for(let tick=0;tick<420;tick++){
    const x=ship.x;race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1,steer:1},1/60);
    travel+=t.laneDelta(ship.s,x,ship.x);under||=Math.abs(ship.x)>Math.PI*t.exterior!.radius*.9;
    assert.equal(ship.recovery,0);assert.ok(!race.events.some(e=>e.kind==='wall'));
    assert.ok(ship.position.distanceTo(t.surface(ship.s,ship.x).position)<30);
  }
  assert.ok(under);assert.ok(travel>Math.PI*2*t.exterior!.radius);assert.equal(ship.energy,100);
});

test('every exterior ramp launches and inward gravity returns nominal and boosted ships',()=>{
  const t=new Track('helix');t.features.length=0;
  for(const speed of [140,BOOST_SPEED])for(const ramp of t.ramps){
    const race=new Race(t),ship=place(race,ramp.s-50,ramp.x,speed);if(speed===BOOST_SPEED)ship.boost=1.8;
    let launch=false,land=false,airtime=0,peak=0;
    for(let tick=0;tick<480;tick++){
      race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
      launch||=race.events.some(e=>e.kind==='launch'&&e.text?.includes('ORBITAL'));
      airtime=Math.max(airtime,ship.airborne);peak=Math.max(peak,ship.airHeight);assert.equal(ship.recovery,0);
      if(race.events.some(e=>e.kind==='land')){land=true;break;}
    }
    assert.ok(launch&&land,`${speed} ramp ${ramp.s}`);assert.ok(airtime>.2&&airtime<8);assert.ok(peak>4);
    assert.ok(ship.position.distanceTo(t.surface(ship.s,ship.x).position)<HOVER_HEIGHT+.1);
  }
});

test('local hop projection retains the correct spiral turn and reaches the underside',()=>{
  const t=new Track('helix'),e=t.exterior!;
  for(const s of [e.spiralStart+600,e.spiralEnd-400,e.loopStart+650,e.descentStart+600])for(const x of [0,Math.PI*e.radius/2,Math.PI*e.radius]){
    const f=t.surface(s,x),p=f.position.clone().addScaledVector(f.normal,12),projected=t.projectExterior(p,s+5);
    assert.ok(Math.abs(projected.s-s)<.5);assert.ok(Math.abs(t.laneDelta(s,x,projected.x))<.1);
  }
});

test('pitch turns flight relative to local gravity and trades speed for lift, including underneath',()=>{
  for(const index of [0,2,4]){
    const results=[];
    for(const pitch of [0,1,-1]){
      const t=new Track('helix');t.features.length=0;t.rings.length=0;
      const ramp=t.ramps[index],race=new Race(t),ship=place(race,ramp.s-50,ramp.x);
      let time=0,initial=0,controlled=0,controlledPitch=0,landed=false;
      for(let tick=0;tick<480;tick++){
        const inputPitch=ship.airborne>.06&&ship.airborne<.28?pitch:0;
        if(inputPitch&&!initial)initial=ship.speed;
        race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1,pitch:inputPitch},1/60);
        if(inputPitch){controlled=ship.speed;controlledPitch=ship.pitch;}time=Math.max(time,ship.airborne);
        assert.equal(ship.recovery,0);
        if(race.events.some(e=>e.kind==='land')){landed=true;break;}
      }
      assert.ok(landed);results.push({time,initial,controlled,controlledPitch});
    }
    const [neutral,up,down]=results;
    assert.ok(up.controlledPitch>down.controlledPitch+.2);assert.ok(up.controlled<up.initial-7);
    if(index===2){assert.ok(up.time>neutral.time+.2);assert.ok(down.time<neutral.time-.15);}
  }
});

test('boosts and items can be collected across the exterior underside seam',()=>{
  const t=new Track('helix'),r=t.exterior!.radius,s=500;
  t.features.length=0;t.features.push({s,x:Math.PI*r-1,kind:'pad',id:0},{s:s+12,x:-Math.PI*r+.5,kind:'pickup',id:1});
  const race=new Race(t),ship=place(race,s-2,-Math.PI*r+.5);
  for(let tick=0;tick<12;tick++)race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
  assert.ok(ship.boost>0);assert.ok(ship.item);assert.equal(ship.energy,100);
});

test('exterior mines and rockets work on the lower side of the tube',()=>{
  const t=new Track('helix'),race=new Race(t),x=Math.PI*t.exterior!.radius,owner=place(race,500,x);
  owner.item='mine';race.useItem(owner);const mine=race.mines[0],radial=mine.position.clone().sub(t.base(mine.s).position).normalize();
  assert.ok(mine.normal.dot(radial)>.99);assert.ok(mine.normal.dot(t.base(mine.s).normal)<-.99);
  const victim=race.ships[1];victim.previous.copy(mine.position).add(new THREE.Vector3(-6,0,0));victim.position.copy(mine.position).add(new THREE.Vector3(6,0,0));mine.armed=0;
  race.updateWeapons(1/60);assert.ok(victim.energy<100);
  owner.itemCooldown=0;owner.item='rocket';victim.hit=0;victim.energy=100;victim.s=545;victim.x=x;victim.speed=140;
  const f=t.surface(victim.s,x);victim.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);victim.previous.copy(victim.position);
  race.useItem(owner);assert.equal(race.rockets[0].target,victim.id);
  for(let tick=0;tick<150&&victim.energy===100;tick++){race.move(victim,{...EMPTY_CONTROLS,throttle:1},1/60);race.updateWeapons(1/60);}
  assert.ok(victim.energy<100);
});

test('CPU pilots finish three competitive Helix laps at every difficulty using rewards and ramps',()=>{
  for(const difficulty of ['rookie','standard','expert'] as const){
    const race=new Race(new Track('helix'));race.phase='racing';race.difficulty=difficulty;
    let launches=0,lands=0,rewards=0,rings=0,terrainRecoveries=0;
    for(let tick=0;tick<60*350;tick++){
      race.step(1/60,race.ai(race.player,1/60));
      for(const e of race.events){
        if(e.kind==='launch')launches++;if(e.kind==='land')lands++;
        if(e.kind==='boost'||e.kind==='pickup')rewards++;
        if(e.text==='AIR RING · BOOST')rings++;
        if(e.kind==='recover'&&race.ships.some(s=>s.position.distanceTo(e.position)<.01&&s.energy>0))terrainRecoveries++;
      }
      if(race.phase==='finished')break;
    }
    assert.equal(race.phase,'finished',difficulty);assert.equal(race.player.laps,3);assert.equal(terrainRecoveries,0);
    assert.ok(launches>10&&lands===launches);assert.ok(rewards>100);assert.ok(race.ships.every(s=>s.laps>=2));
    assert.ok(rings>20);
    assert.ok(race.ships.every(s=>Math.abs(race.player.total-s.total)<400));
  }
});

test('eight straight and angled boost chains have 3–5 pads at about one to two seconds of travel',()=>{
  const t=new Track('helix');assert.equal(t.boostChains.length,8);
  assert.ok(t.boostChains.some(c=>c.mode==='straight'));assert.ok(t.boostChains.some(c=>c.mode==='angled'));
  for(const chain of t.boostChains){
    assert.ok(chain.pads.length>=3&&chain.pads.length<=5);
    assert.equal(t.features.filter(f=>f.chain===chain.id).length,chain.pads.length);
    if(chain.mode==='angled')assert.ok(chain.pads.some(p=>Math.abs(p.heading)>.025));
    for(let i=1;i<chain.pads.length;i++){
      const a=chain.pads[i-1],b=chain.pads[i],dx=t.laneDelta(a.s,a.x,b.x);
      let length=0,last=t.position(a.s,a.x);
      for(let j=1;j<=40;j++){const p=t.position(a.s+(b.s-a.s)*j/40,a.x+dx*j/40);length+=p.distanceTo(last);last=p;}
      assert.ok(length/BOOST_SPEED>.95&&length/BOOST_SPEED<1.6,`${chain.id}: ${length}`);
      assert.ok(length/140>1.3&&length/140<2.2);
    }
  }
});

test('three road sections unwrap smoothly and disable circular wrapping on the flat surface',()=>{
  const t=new Track('helix');assert.equal(t.flats.length,3);
  for(const flat of t.flats){
    const s=flat.center,b=t.base(s),left=t.surface(s,-20),right=t.surface(s,20);
    assert.equal(t.tubeBend(s),0);assert.equal(t.profile(s).width,54);assert.equal(t.inFullPipe(s),false);
    assert.ok(left.normal.dot(right.normal)>.999);assert.ok(Math.abs(left.position.clone().sub(right.position).length()-40)<.01);
    assert.ok(left.position.clone().sub(b.position).dot(b.normal)>27.9);
    assert.equal(t.wrapLane(s,100),100);
    for(const sign of [-1,1]){
      const edge=s+sign*flat.length/2,end=edge+sign*flat.transition;
      assert.ok(t.inFullPipe(end+sign));
      for(let step=0;step<=40;step++){
        const u=edge+sign*flat.transition*step/40,x=t.profile(u).width*.15;
        const before=t.surface(u-.01,x),after=t.surface(u+.01,x);
        assert.ok(before.position.distanceTo(after.position)<.1);assert.ok(before.normal.dot(after.normal)>.99);
        const projected=t.projectExterior(after.position.clone().addScaledVector(after.normal,2),u+.01);
        assert.ok(Number.isFinite(projected.s)&&Number.isFinite(projected.x));
      }
    }
  }
});

test('the entire exterior gravity field is half its previous strength on tube lanes',()=>{
  const t=new Track('helix'),race=new Race(t),s=1200;assert.equal(EXTERIOR_GRAVITY_SCALE,.5);
  for(const x of [0,44,88]){
    const radial=t.position(s,x).sub(t.base(s).position).normalize();
    const curvature=t.base(s+8).forward.sub(t.base(s-8).forward).multiplyScalar(1/16);
    const previous=95+Math.max(0,-curvature.dot(radial))*140**2+25**2/(28+HOVER_HEIGHT);
    assert.ok(Math.abs(race.exteriorGravity(race.player,s,radial,140,25,curvature)-previous*.5)<1e-9);
  }
});

test('a fast airborne ring crossing boosts once, while misses and grounded ships get no reward',()=>{
  const t=new Track('helix'),race=new Race(t),ring=t.rings[3],f=t.surface(ring.s,ring.x),center=f.position.clone().addScaledVector(f.normal,ring.height);
  const ship=race.player;ship.airborne=.2;ship.flightVelocity.copy(f.forward).multiplyScalar(140);
  ship.previous.copy(center).addScaledVector(f.forward,-25);ship.position.copy(center).addScaledVector(f.forward,25);
  race.collectRings(ship);assert.ok(ship.boost>=1.4);assert.ok(ship.flightVelocity.length()>=BOOST_SPEED-.01);assert.equal(race.ringTimers.size,1);
  ship.boost=0;race.collectRings(ship);assert.equal(ship.boost,0);
  const miss=race.ships[1];miss.airborne=.2;miss.previous.copy(center).addScaledVector(f.right,ring.radius+3).addScaledVector(f.forward,-25);miss.position.copy(miss.previous).addScaledVector(f.forward,50);
  race.collectRings(miss);assert.equal(miss.boost,0);
  const grounded=race.ships[2];grounded.previous.copy(ship.previous);grounded.position.copy(ship.position);race.collectRings(grounded);assert.equal(grounded.boost,0);
  race.reset();assert.equal(race.ringTimers.size,0);
});

test('marked ring trajectories are reachable at normal and boosted ramp speeds',()=>{
  for(const speed of [140,BOOST_SPEED]){
    const t=new Track('helix');t.features.length=0;let collected=0;
    for(const ramp of t.ramps){
      const race=new Race(t),ship=place(race,ramp.s-50,ramp.x,speed);ship.boost=speed===BOOST_SPEED?1.8:0;
      let landed=false;
      for(let tick=0;tick<480;tick++){
        race.events=[];race.move(ship,{...EMPTY_CONTROLS,throttle:1},1/60);
        collected+=race.events.filter(e=>e.text==='AIR RING · BOOST').length;
        assert.equal(ship.recovery,0,`${speed} ramp ${ramp.s}`);
        if(race.events.some(e=>e.kind==='land')){landed=true;break;}
      }
      assert.ok(landed);
    }
    assert.ok(collected>=8,`${speed}: ${collected}`);
  }
});

test('Helix Reactor tunnel has inward walls and a seamless ceiling, with a driveable full roll',()=>{
  const t=new Track('helix'),p=t.pipe!,s=p.start+260,r=p.radius;
  const floor=t.surface(s,0),ceiling=t.surface(s,Math.PI*r),center=t.base(s).position.addScaledVector(t.base(s).normal,56);
  for(let i=0;i<8;i++){
    const x=i*Math.PI/4*r,f=t.surface(s,x);assert.ok(f.normal.dot(center.clone().sub(f.position).normalize())>.97);assert.ok(t.position(s,x).distanceTo(t.position(s,x+Math.PI*2*r))<1e-5);
  }
  assert.ok(floor.normal.dot(ceiling.normal)<-.97);assert.equal(t.tubeShape(s),-1);
  const race=new Race(t),ship=place(race,s);t.features.length=0;let travel=0;
  for(let i=0;i<400;i++){const x=ship.x;race.move(ship,{...EMPTY_CONTROLS,throttle:1,steer:1},1/60);travel+=t.laneDelta(ship.s,x,ship.x);assert.equal(ship.recovery,0);assert.equal(ship.airborne,0);}
  assert.ok(travel>Math.PI*2*r);
});
