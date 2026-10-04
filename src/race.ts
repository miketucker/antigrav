import * as THREE from 'three';
import { Track, clamp, wrap } from './track';

export type Item = 'boost' | 'rocket' | 'mine';
export type Phase = 'menu' | 'countdown' | 'racing' | 'paused' | 'finished';
export interface Controls { throttle: number; brake: number; steer: number; airbrake: number; pitch: number; use: boolean; drift:boolean }
export interface Ship {
  id: number; name: string; color: number; s: number; x: number; speed: number; yaw: number;
  position: THREE.Vector3; previous: THREE.Vector3; rotation: THREE.Quaternion;
  energy: number; item: Item | null; boost: number; hit: number; recovery: number;
  checkpoint: number; laps: number; total: number; finish: number | null; lastLap: number;
  lapStart: number; bestLap: number; aiTarget: number; aiThink: number; itemCooldown: number;
  airborne: number; flightVelocity: THREE.Vector3; airHeight: number; launches: number;
  hoverHeight: number; hoverVelocity: number; aiPace: number; dropFlight: boolean; pitch: number; flightTilted: boolean;
  drifting:boolean; driftCharge:number; driftDirection:number; driftSlide:number; markerPenalty:boolean; markerStreak:number; markerPassed:number; markerMissed:number;
  jumpGap:number|null;
  aiDriftTime:number;aiDriftCooldown:number;
  falling:boolean;
}
export interface Rocket { id: number; owner: number; position: THREE.Vector3; previous: THREE.Vector3; velocity: THREE.Vector3; life: number; target: number | null }
export interface Mine { id: number; owner: number; s: number; x: number; position: THREE.Vector3; normal: THREE.Vector3; life: number; armed: number }
export interface RaceEvent { kind: 'boost' | 'pickup' | 'fire' | 'mine' | 'hit' | 'wall' | 'launch' | 'land' | 'lap' | 'finish' | 'recover' | 'marker'; position: THREE.Vector3; player: boolean; text?: string; color?: number }

export const EMPTY_CONTROLS: Controls = { throttle: 0, brake: 0, steer: 0, airbrake: 0, pitch: 0, use: false, drift:false };
export const driftTier=(charge:number)=>charge>=2.2?3:charge>=1.35?2:charge>=.65?1:0;
export const SHIP_SPEED = 140;
export const BOOST_SPEED = 192;
export const HOVER_HEIGHT = 1.8;
export const EXTERIOR_GRAVITY_SCALE = .5;
const names = ['YOU', 'KIRA', 'GHOST', 'AXEL', 'NOVA', 'RIFT'];
const colors = [0xd6ff45, 0xff6369, 0x9b88ff, 0x46ddf5, 0xffa64d, 0xf075d3];
const segmentDistance = (p: THREE.Vector3, a: THREE.Vector3, b: THREE.Vector3) => {
  const line = b.clone().sub(a);
  const t = clamp(p.clone().sub(a).dot(line) / Math.max(line.lengthSq(), .001), 0, 1);
  return p.distanceTo(a.clone().addScaledVector(line, t));
};

export class Race {
  track: Track;
  ships: Ship[] = [];
  rockets: Rocket[] = [];
  mines: Mine[] = [];
  pickupTimers = new Map<number, number>();
  padTimers = new Map<string, number>();
  ringTimers = new Map<string, number>();
  markerTimers = new Map<string, number>();
  events: RaceEvent[] = [];
  phase: Phase = 'menu';
  previousPhase: Phase = 'racing';
  elapsed = 0;
  countdown = 3.4;
  finishCount = 0;
  seed = 99;
  nextId = 1;
  difficulty: 'rookie' | 'standard' | 'expert' = 'standard';
  readonly totalLaps = 3;

  constructor(track: Track) { this.track = track; this.reset(false); }
  get player() { return this.ships[0]; }
  random() { this.seed = (Math.imul(this.seed, 1664525) + 1013904223) | 0; return (this.seed >>> 0) / 4294967296; }

  reset(start = true) {
    this.seed = 99; this.elapsed = 0; this.countdown = 3.4; this.nextId = 1; this.finishCount = 0;
    this.rockets = []; this.mines = []; this.events = []; this.pickupTimers.clear(); this.padTimers.clear();this.ringTimers.clear();this.markerTimers.clear();
    this.ships = names.map((name, id) => {
      const s = 9 - Math.floor(id / 2) * 8, x = id % 2 ? 4.2 : -4.2;
      const surface = this.track.surface(s, x);
      const position = surface.position.clone().addScaledVector(surface.normal, HOVER_HEIGHT);
      return { id, name, color: colors[id], s, x, speed: 0, yaw: 0, position,
        previous: position.clone(), rotation: new THREE.Quaternion(), energy: 100, item: null,
        boost: 0, hit: 0, recovery: 0, checkpoint: 1, laps: 0, total: 0, finish: null,
        lastLap: 0, lapStart: 0, bestLap: Infinity, aiTarget: x, aiThink: 0, itemCooldown: 0,
        airborne: 0, flightVelocity: new THREE.Vector3(), airHeight: 0, launches: 0,
        hoverHeight: HOVER_HEIGHT, hoverVelocity: 0, aiPace: 1, dropFlight: false, pitch: 0, flightTilted: false,
        drifting:false,driftCharge:0,driftDirection:0,driftSlide:0,markerPenalty:false,markerStreak:0,markerPassed:0,markerMissed:0,jumpGap:null,aiDriftTime:0,aiDriftCooldown:0,falling:false };
    });
    this.phase = start ? 'countdown' : 'menu';
  }

  pause() {
    if (this.phase === 'paused') this.phase = this.previousPhase;
    else if (this.phase === 'racing' || this.phase === 'countdown') { this.previousPhase = this.phase; this.phase = 'paused'; }
  }

  ranking() { return [...this.ships].sort((a, b) => a.finish !== null ? (b.finish !== null ? a.finish - b.finish : -1) : b.finish !== null ? 1 : b.total - a.total); }
  emit(kind: RaceEvent['kind'], ship: Ship, text?: string, position = ship.position) { this.events.push({ kind, position: position.clone(), player: ship.id === 0, text, color: ship.color }); }

  ai(ship: Ship, dt: number): Controls {
    const difficulty = this.difficulty === 'rookie' ? .86 : this.difficulty === 'expert' ? 1.08 : 1;
    // Validated progress includes laps, so a finish-line crossing cannot flip the gap.
    const gap = ship.id === 0 ? 0 : clamp((this.player.total - ship.total) / 260, -1, 1);
    const pace = 1 + gap * (gap > 0 ? .17 : .07);
    ship.aiPace += (pace - ship.aiPace) * (1 - Math.exp(-dt * 1.3));
    ship.aiThink -= dt;
    const curve = Math.abs(this.track.curvature(ship.s + Math.max(30, ship.speed * .6)));
    let targetSpeed = clamp(SHIP_SPEED - curve * 3800, 76, 134) * difficulty * ship.aiPace;
    const drop=this.track.drop;
    if(drop && (ship.dropFlight || (ship.s>drop.start-220 && ship.s<drop.start))) targetSpeed=SHIP_SPEED*ship.aiPace;
    if (ship.aiThink <= 0) {
      ship.aiThink = .18 + this.random() * .15;
      let target = Math.sin(ship.s * .005 + ship.id * 2) * 5;
      const available = this.track.features.filter(f => this.track.distanceAhead(ship.s, f.s) < (this.track.inFullPipe(ship.s)?240:130) && (f.kind === 'pad' || (!ship.item && !this.pickupTimers.has(f.id))));
      available.sort((a,b)=>this.track.distanceAhead(ship.s,a.s)-this.track.distanceAhead(ship.s,b.s));
      if (available.length) target = available[0].x;
      if(this.track.exterior && (!this.track.inFullPipe(ship.s) || this.track.openingAhead(ship.s)<340))target=0;
      if(this.track.pipe && ship.s>this.track.pipe.end-280 && ship.s<this.track.pipe.end) target=0;
      if(this.track.challenge){
        const marker=this.nextMarker(ship);
        if(marker&&this.track.distanceAhead(ship.s,marker.s)<210)target=marker.x+(marker.side==='left'?-8:8);
        for(const barrier of this.track.barriers)if(this.track.distanceAhead(ship.s,barrier.s)<110&&Math.abs(this.track.laneDelta(ship.s,target,barrier.x))<barrier.width/2+3)target=barrier.x+(barrier.x>ship.x?-1:1)*(barrier.width/2+6);
        if(this.track.gaps.some(g=>ship.s>g.start-190&&ship.s<g.landingEnd))target=0;
        if(this.track.pipes.some(p=>ship.s>p.end-330&&ship.s<p.end+180))target=0;
      }
      if(drop && ship.s>drop.start-220 && ship.s<drop.landingEnd) target=0;
      for (const opponent of this.ships) {
        if (opponent.id === ship.id) continue;
        const ahead = this.track.distanceAhead(ship.s, opponent.s);
        if (ahead < 32 && Math.abs(this.track.laneDelta(ship.s,opponent.x,target)) < 4) target = opponent.x + (ship.x > opponent.x ? 5 : -5);
      }
      for (const mine of this.mines) {
        if (this.track.distanceAhead(ship.s, mine.s) < 90 && Math.abs(this.track.laneDelta(ship.s,mine.x,target)) < 6) target = mine.x > 0 ? -7 : 7;
      }
      const half = this.track.profile(ship.s + 50).width / 2;
      ship.aiTarget = this.track.inFullPipe(ship.s)?this.track.wrapLane(ship.s,target):clamp(target,-half+4,half-4);
    }
    // Error feedback counters centrifugal drift without steering opponents on rails.
    const error=this.track.laneDelta(ship.s,ship.x,ship.aiTarget);
    const desiredYaw = clamp(error * (this.track.inFullPipe(ship.s)?.04:.024), -.42, .42);
    const compensation = ship.dropFlight?0:-this.track.curvature(ship.s)*ship.speed*.325;
    let steer = clamp((desiredYaw - ship.yaw) * 5 + compensation, -1, 1);
    if(this.track.exterior && ship.airborne){
      const ring=this.track.rings.filter(r=>this.track.distanceAhead(ship.s,r.s)<190&&!this.ringTimers.has(`${ship.id}:${r.id}`)).sort((a,b)=>this.track.distanceAhead(ship.s,a.s)-this.track.distanceAhead(ship.s,b.s))[0];
      if(ring){const f=this.track.surface(ship.s,ship.x),lateral=ship.flightVelocity.dot(f.right),desired=clamp(this.track.laneDelta(ship.s,ship.x,ring.x)*1.2,-30,30);steer=clamp((desired-lateral)*.09,-1,1);}
    }
    if(ship.dropFlight && drop) {
      const prediction=this.landingPrediction(ship,false)!;
      const desired=clamp(ship.flightVelocity.dot(drop.right)-prediction.error/Math.max(.25,prediction.remaining),-30,30);
      steer=clamp((Math.asin(clamp(desired/Math.max(ship.speed,1),-.5,.5))-ship.yaw)*5,-1,1);
    }
    const aheadTarget = this.ships.some(s => s.id !== ship.id && this.track.distanceAhead(ship.s, s.s) < 190 && Math.abs(this.track.laneDelta(ship.s,ship.x,s.x)) < 10);
    const pursuer = this.ships.some(s => s.id !== ship.id && this.track.distanceAhead(s.s, ship.s) < 70);
    const use = ship.itemCooldown <= 0 && (ship.item === 'boost' ? curve < .007 && ship.speed > 70 : ship.item === 'rocket' ? aheadTarget : ship.item === 'mine' && pursuer);
    if(this.track.challenge&&this.track.gaps.some(g=>ship.s>g.start-250&&ship.s<g.landingEnd))targetSpeed=SHIP_SPEED*ship.aiPace;
    const bankTurn=Math.abs(this.track.bankAngle(ship.s+25))>.5&&Math.abs(this.track.curvature(ship.s))>.0012;
    ship.aiDriftCooldown=Math.max(0,ship.aiDriftCooldown-dt);ship.aiDriftTime=Math.max(0,ship.aiDriftTime-dt);
    if(ship.airborne||ship.hit>0||ship.driftCharge>=.68)ship.aiDriftTime=0;
    // Commit to a short drift into the bank only when there is room to slide.
    const direction=-Math.sign(this.track.curvature(ship.s));
    if(bankTurn&&!ship.airborne&&ship.hit<=0&&ship.speed>70&&ship.speed<145&&ship.boost===0&&ship.aiDriftCooldown===0&&
      ship.x*direction<this.track.profile(ship.s).width/2-ship.speed*.12-5){ship.aiDriftTime=.78;ship.aiDriftCooldown=3;}
    const bankDrift=ship.aiDriftTime>0;
    let drift=bankDrift||(this.track.challenge>0&&!bankTurn&&!ship.airborne&&ship.speed>65&&curve>.0018&&Math.abs(steer)>.28&&ship.driftCharge<2.25);
    if(bankDrift)steer=(ship.driftDirection||direction)*.64;
    if(this.track.openEdges){
      const bend=this.track.curvature(ship.s);
      drift=!ship.airborne&&ship.hit<=0&&ship.speed>50&&(Math.abs(bend)>.004||Math.abs(this.track.curvature(ship.s+35))>.008);
      const yawTarget=clamp(-ship.x*.035,-.24,.24),authority=drift?4.4:.8,damping=drift?7.2:8.4;
      steer=clamp(((yawTarget-ship.yaw)*10+yawTarget*damping-bend*ship.speed*.78)/authority,-1,1);
      ship.aiTarget=0;targetSpeed=134*difficulty*ship.aiPace;
    }
    const gapFlight=ship.airborne>0&&ship.jumpGap!==null;
    return { throttle: gapFlight||ship.speed < targetSpeed + 2 ? 1 : .28, brake: !gapFlight&&ship.speed > targetSpeed + 16 ? .5 : 0, steer, airbrake: Math.abs(steer) > .85 && curve > .007 ? Math.sign(steer) * .3 : 0, pitch:0, use, drift };
  }

  step(dt: number, controls: Controls) {
    this.events = [];
    if (this.phase === 'paused' || this.phase === 'menu' || this.phase === 'finished') return;
    if (this.phase === 'countdown') { this.countdown -= dt; if (this.countdown <= 0) { this.phase = 'racing'; this.events.push({ kind: 'boost', position: this.player.position.clone(), player: true, text: 'GO · FIND YOUR LINE' }); } return; }
    this.elapsed += dt;
    for (const [id, timer] of this.pickupTimers) { if (timer <= dt) this.pickupTimers.delete(id); else this.pickupTimers.set(id, timer - dt); }
    for (const [id, timer] of this.padTimers) { if (timer <= dt) this.padTimers.delete(id); else this.padTimers.set(id, timer - dt); }
    for (const [id, timer] of this.ringTimers) { if (timer <= dt) this.ringTimers.delete(id); else this.ringTimers.set(id, timer - dt); }
    for (const [id, timer] of this.markerTimers) { if (timer <= dt) this.markerTimers.delete(id); else this.markerTimers.set(id, timer - dt); }
    for (const ship of this.ships) this.move(ship, ship.id === 0 ? controls : this.ai(ship, dt), dt);
    this.resolveShipCollisions(dt);
    this.updateWeapons(dt);
    if (this.player.finish !== null) { this.phase = 'finished'; this.emit('finish', this.player); }
  }

  move(ship: Ship, input: Controls, dt: number) {
    ship.previous.copy(ship.position);
    ship.boost = Math.max(0, ship.boost - dt); ship.hit = Math.max(0, ship.hit - dt); ship.itemCooldown = Math.max(0, ship.itemCooldown - dt);
    if (ship.recovery > 0) {
      ship.recovery = Math.max(0,ship.recovery-dt);
      if (ship.recovery <= 0) {
        const saved = this.track.checkpoints[wrap(ship.checkpoint - 1, this.track.checkpoints.length)];
        ship.s = saved + 3; ship.x = 0; ship.speed = 44; ship.yaw = 0; ship.energy = 100; ship.airborne = 0; ship.dropFlight=false;ship.flightTilted=false;ship.pitch=0; ship.boost = 0;
        ship.hoverHeight = HOVER_HEIGHT; ship.hoverVelocity = 0; ship.airHeight = 0; ship.flightVelocity.set(0, 0, 0);ship.jumpGap=null;ship.falling=false;this.cancelDrift(ship);
        const f = this.track.surface(ship.s, 0); ship.position.copy(f.position).addScaledVector(f.normal, HOVER_HEIGHT); ship.previous.copy(ship.position);
      }
      return;
    }
    if(ship.falling){this.moveEdgeFall(ship,dt);return;}
    const surface = this.track.surface(ship.s, ship.x);
    this.updateDrift(ship,input,dt);
    const boosted = ship.boost > 0;
    const maxSpeed = this.speedLimit(ship);
    const acceleration = input.throttle * (boosted ? 120 : 70) - 14 - ship.speed * .075 - input.brake * 96 - Math.abs(input.airbrake) * 24-(ship.drifting?6:0);
    if(!ship.airborne || !ship.flightTilted) ship.speed = clamp(ship.speed + acceleration * dt, 0, maxSpeed);
    if (ship.hit > 0) ship.speed = Math.min(ship.speed, 98);
    const curve = ship.dropFlight || (this.track.exterior && ship.airborne)?0:this.track.curvature(ship.s);
    const yawRate = input.steer * ((ship.drifting?4.4:this.track.openEdges?.8:2.4) + Math.abs(input.airbrake) * 1.4) + input.airbrake + curve * ship.speed * .78;
    ship.yaw = clamp(ship.yaw + (yawRate - ship.yaw * (ship.drifting?7.2:8.4)) * dt, -.8, .8);
    const startS = ship.s, wasDropFlight=ship.dropFlight,wasGapFlight=ship.airborne?this.track.gaps.find(g=>ship.s>=g.start&&ship.s<=g.landingEnd+100):undefined;
    if(ship.dropFlight) this.moveDropFlight(ship,input,dt);
    else if(this.track.exterior && ship.airborne)this.moveExteriorFlight(ship,input,dt);
    else {
      const travelYaw=ship.drifting?ship.yaw*.52:ship.yaw;
      const longitudinalSpeed = ship.speed * Math.cos(travelYaw) / surface.longitudinalScale;
      let lateralSpeed = ship.speed * Math.sin(travelYaw) / surface.lateralScale;
      if(ship.drifting){ship.driftSlide+=(lateralSpeed-ship.driftSlide)*(1-Math.exp(-dt*5));lateralSpeed=ship.driftSlide;}else ship.driftSlide=lateralSpeed;
      ship.s += longitudinalSpeed * dt;
      ship.x += lateralSpeed * dt;
      const width = this.track.profile(ship.s).width;
      if(this.track.exterior && !ship.airborne)ship.x*=width/surface.width;
      const edge = width / 2 - 1.7;
      ship.x=this.track.wrapLane(ship.s,ship.x);
      if (!this.track.inFullPipe(ship.s) && !ship.airborne && Math.abs(ship.x) > edge) {
        if(this.track.openEdges){
          const f=this.track.surface(ship.s,ship.x);
          ship.position.copy(f.position).addScaledVector(f.normal,ship.hoverHeight);
          ship.flightVelocity.copy(f.forward).multiplyScalar(ship.speed*Math.cos(travelYaw)).addScaledVector(f.right,lateralSpeed).addScaledVector(f.normal,ship.hoverVelocity);
          ship.falling=true;ship.airborne=.001;ship.boost=0;this.cancelDrift(ship);
          this.emit('launch',ship,'EDGE MISSED · FALLING');return;
        }
        ship.x = clamp(ship.x, -edge, edge);
        if (ship.hit <= 0 && ship.speed > 15) { ship.speed *= .83; ship.energy -= 4; ship.hit = .22;this.cancelDrift(ship); this.emit('wall', ship); }
        ship.yaw *= -.25;
      }
  
      const next = this.track.surface(ship.s, ship.x);
      const dropLaunch=this.track.drop && startS<this.track.drop.start && ship.s>=this.track.drop.start;
      const gapLaunch=this.track.gaps.find(g=>startS<g.start&&ship.s>=g.start);
      const pipeGrip=this.track.profile(ship.s).pipe>0;
      const tubeRamp=!gapLaunch&&this.track.exterior && this.track.ramps.find(ramp=>this.track.distanceAhead(startS,ramp.s)<=this.track.distanceAhead(startS,ship.s)&&Math.abs(this.track.laneDelta(ship.s,ship.x,ramp.x))<ramp.width*.45);
      const waveLaunch=this.track.waves.some(wave=>startS<wave.s && ship.s>=wave.s) && ship.speed>100;
      const launchLip = !this.track.drop && !this.track.exterior && startS < this.track.launch && ship.s >= this.track.launch && Math.abs(ship.x) < 8 && ship.speed > 8;
      if (!ship.airborne) {
        // The magnetic cushion counters gravity; vertical track curvature injects
        // momentum into the spring. Horizontal banking stays magnetically attached.
        const supportAcceleration = this.track.exterior?0:clamp((next.forward.y - surface.forward.y) * ship.speed / dt * Math.max(.25, next.normal.y), -110, 100);
        const wave = Math.sin(this.elapsed * 3.4 + ship.id * 1.7) * 2;
        const lift = clamp(46 + (HOVER_HEIGHT - ship.hoverHeight) * 42 - ship.hoverVelocity * 7.2 + wave, 0, 110);
        ship.hoverVelocity += (lift - 46 - supportAcceleration) * dt;
        ship.hoverHeight += ship.hoverVelocity * dt;
        if (ship.hoverHeight < .65) { ship.hoverHeight = .65; ship.hoverVelocity = Math.abs(ship.hoverVelocity) * .25; }
      }
      if (!ship.airborne && ((!pipeGrip&&(launchLip || waveLaunch || (!this.track.exterior && ship.hoverHeight > 3.2 && ship.hoverVelocity > 2))) || (tubeRamp && ship.speed>70))) {
        ship.airborne = .001;ship.flightTilted=false; ship.launches++;
        ship.flightVelocity.copy(surface.forward).multiplyScalar(ship.speed * Math.cos(ship.yaw)).addScaledVector(surface.right, ship.speed * Math.sin(ship.yaw)).addScaledVector(tubeRamp?next.normal:surface.normal, Math.max(ship.hoverVelocity, tubeRamp?(pipeGrip?16:28):launchLip ? 6 : waveLaunch ? 18 : 0));
        this.emit('launch', ship, tubeRamp?(pipeGrip?'TUNNEL RAMP · AIRBORNE':'ORBITAL RAMP · AIRBORNE'):waveLaunch?'WAVE CREST · AIRBORNE':'AIRBORNE');
      }
      if(dropLaunch){
        const drop=this.track.drop!;
        ship.dropFlight=true;ship.flightTilted=false;ship.airborne=.001;ship.launches++;
        ship.flightVelocity.copy(drop.direction).multiplyScalar(ship.speed*Math.cos(ship.yaw)).addScaledVector(drop.right,ship.speed*Math.sin(ship.yaw));
        ship.flightVelocity.y=8;
        this.emit('launch',ship,'ABYSS DROP · AIM FOR THE DECK');
      }
      if(gapLaunch){
        if(ship.speed<65)this.recover(ship);
        else{
          ship.airborne=.001;ship.flightTilted=false;ship.jumpGap=this.track.gaps.indexOf(gapLaunch);ship.launches++;
          ship.flightVelocity.copy(surface.forward).multiplyScalar(ship.speed*Math.cos(ship.yaw)).addScaledVector(surface.right,ship.speed*Math.sin(ship.yaw)).addScaledVector(surface.normal,gapLaunch.lift);
          this.cancelDrift(ship);this.emit('launch',ship,'RIFT JUMP · AIM FOR AMBER');
        }
      }
      if(ship.airborne)this.cancelDrift(ship);
      if (ship.dropFlight) this.moveDropFlight(ship,input,dt);
      else if(this.track.exterior && ship.airborne)this.moveExteriorFlight(ship,input,dt);
      else if (ship.airborne) {
        ship.airborne += dt;
        // Gravity and the road's magnetic field pull the ship back onto even a bank.
        ship.flightVelocity.y -= 18 * dt;
        ship.flightVelocity.addScaledVector(next.normal, -58 * dt);
        if(ship.flightTilted || input.pitch) {
          this.applyAirPitch(ship,input,dt);
          const vertical=ship.flightVelocity.dot(next.normal),planar=Math.sqrt(Math.max(0,ship.flightVelocity.lengthSq()-vertical*vertical));
          const heading=next.forward.clone().multiplyScalar(Math.cos(ship.yaw)).addScaledVector(next.right,Math.sin(ship.yaw));
          const guided=heading.multiplyScalar(planar).addScaledVector(next.normal,vertical);
          ship.flightVelocity.lerp(guided,1-Math.exp(-dt*3.2));ship.speed=ship.flightVelocity.length();
        }
        else {
          const along = next.forward.clone().multiplyScalar(ship.speed * Math.cos(ship.yaw)).addScaledVector(next.right, ship.speed * Math.sin(ship.yaw));
          along.addScaledVector(next.normal, ship.flightVelocity.dot(next.normal));
          ship.flightVelocity.lerp(along, 1 - Math.exp(-dt * 3.2));
          ship.flightVelocity.addScaledVector(next.right, input.steer * 8 * dt);
        }
        ship.position.addScaledVector(ship.flightVelocity, dt);
        // Match track coordinates to actual world-space flight, retaining route identity.
        for (let i = 0; i < 2; i++) {
          const projected = this.track.surface(ship.s, ship.x);
          const residual = ship.position.clone().sub(projected.position);
          ship.s += clamp(residual.dot(projected.forward) / projected.longitudinalScale, -12, 12);
          ship.x += clamp(residual.dot(projected.right) / projected.lateralScale, -4, 4);
        }
        const landing = this.track.surface(ship.s, ship.x);
        const gap = ship.position.clone().sub(landing.position).dot(landing.normal);
        ship.airHeight = Math.max(0, gap - HOVER_HEIGHT);
        if (ship.airborne > .12 && gap < HOVER_HEIGHT && Math.abs(ship.x) < landing.width / 2 - 1.5 && ship.flightVelocity.dot(landing.normal) < 0) {
          ship.airborne = 0;ship.flightTilted=false;ship.pitch=0; ship.airHeight = 0; this.emit('land', ship, 'CLEAN LANDING');
          ship.hoverHeight = Math.max(.65, gap); ship.hoverVelocity = clamp(ship.flightVelocity.dot(landing.normal), -9, 0);
          ship.position.copy(landing.position).addScaledVector(landing.normal, ship.hoverHeight);
        } else if (ship.airborne > (ship.flightTilted?6:4) || ship.position.y < (this.track.drop?-430:-90)) this.recover(ship);
      } else {
        ship.position.copy(next.position).addScaledVector(next.normal, ship.hoverHeight);
        ship.airHeight = Math.max(0, ship.hoverHeight - HOVER_HEIGHT);
      }
    }
    const next=this.track.surface(ship.s,ship.x);
    let up=ship.airborne&&!this.track.exterior?new THREE.Vector3(0,1,0):next.normal;
    const forward = ship.airborne ? ship.flightVelocity.clone().normalize() : next.forward.clone().applyAxisAngle(up,-ship.yaw);
    const right = forward.clone().cross(up).normalize();
    if(ship.airborne){ship.pitch=this.track.exterior?Math.asin(clamp(forward.dot(up),-1,1)):Math.atan2(forward.y,Math.hypot(forward.x,forward.z));up=right.clone().cross(forward).normalize();}else ship.pitch=0;
    const matrix = new THREE.Matrix4().makeBasis(right, up, forward.clone().negate());
    const rotation = new THREE.Quaternion().setFromRotationMatrix(matrix);
    rotation.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), -input.steer * .12));
    rotation.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), ship.airborne?0:clamp(ship.hoverVelocity * .012, -.12, .12)));
    ship.rotation.slerp(rotation, 1 - Math.exp(-12 * dt));

    if (input.use && ship.item && ship.itemCooldown <= 0) this.useItem(ship);
    this.collectMarkers(ship,startS);this.collideBarriers(ship);
    if(ship.markerPenalty){ship.speed=Math.min(ship.speed,this.speedLimit(ship));if(ship.airborne)ship.flightVelocity.clampLength(0,this.speedLimit(ship));}
    if(this.track.exterior)this.collectRings(ship);
    if (!ship.airborne) this.collectFeatures(ship, startS);
    this.updateProgress(ship, wasDropFlight && !ship.dropFlight ? Math.min(startS,this.track.drop!.end-1) : wasGapFlight&&!ship.airborne&&!ship.recovery?Math.min(startS,wasGapFlight.start-1):startS);
    if (ship.hit <= 0) ship.energy = Math.min(100, ship.energy + dt * 1.2);
    if (ship.energy <= 0) this.recover(ship);
    if (ship.s >= this.track.length) ship.s -= this.track.length;
  }

  moveEdgeFall(ship:Ship,dt:number){
    ship.airborne+=dt;
    ship.flightVelocity.y-=46*dt;
    ship.position.addScaledVector(ship.flightVelocity,dt);
    // Course coordinates and checkpoint progress stay at the departure edge.
    if(ship.position.y<this.track.surface(ship.s,ship.x).position.y-70||ship.airborne>2.5)this.recover(ship);
  }

  moveExteriorFlight(ship:Ship,input:Controls,dt:number){
    const track=this.track,tube=track.exterior!;
    const projected=track.projectExterior(ship.position,ship.s),b=track.base(projected.s),radial=projected.radial;
    const previousSurface=track.surface(projected.s,projected.x),previousGap=ship.position.clone().sub(previousSurface.position).dot(previousSurface.normal);
    const right=b.forward.clone().cross(radial).normalize();
    if(input.pitch || ship.flightTilted){
      ship.flightTilted=true;
      const angle=Math.asin(clamp(ship.flightVelocity.clone().normalize().dot(radial),-1,1));
      const delta=input.pitch?clamp(angle+input.pitch*.95*dt,-1.05,.85)-angle:0;
      const planeRight=ship.flightVelocity.clone().addScaledVector(radial,-ship.flightVelocity.dot(radial)).normalize().cross(radial).normalize();
      ship.flightVelocity.applyAxisAngle(planeRight,delta);
      const drag=3+Math.max(0,input.pitch)*24+Math.max(0,Math.sin(angle))*24+input.brake*35;
      ship.flightVelocity.setLength(Math.max(22,ship.flightVelocity.length()+(input.throttle*5-drag)*dt));
      const max=this.speedLimit(ship);
      if(ship.flightVelocity.length()>max){
        const tangent=ship.flightVelocity.clone().addScaledVector(radial,-ship.flightVelocity.dot(radial)).normalize();
        ship.flightVelocity.addScaledVector(tangent,-(ship.flightVelocity.length()-max)*3*dt);
      }
    }else{
      const max=this.speedLimit(ship);
      const thrust=ship.flightVelocity.length()>max?-(ship.flightVelocity.length()-max)*3-input.brake*96:input.throttle*(ship.boost>0?120:70)-14-ship.speed*.075-input.brake*96;
      const tangent=ship.flightVelocity.clone().addScaledVector(radial,-ship.flightVelocity.dot(radial)).normalize();
      ship.flightVelocity.addScaledVector(tangent,thrust*dt);
    }
    ship.flightVelocity.addScaledVector(right,input.steer*20*dt);
    const roadAssist=(1-Math.abs(track.tubeShape(projected.s)))**2;
    if(roadAssist>0){
      const f=track.surface(projected.s,projected.x),lift=ship.flightVelocity.dot(radial);
      const planar=Math.sqrt(Math.max(0,ship.flightVelocity.lengthSq()-lift*lift));
      const heading=f.forward.clone().multiplyScalar(Math.cos(ship.yaw)).addScaledVector(f.right,Math.sin(ship.yaw));
      ship.flightVelocity.lerp(heading.multiplyScalar(planar).addScaledVector(radial,lift),1-Math.exp(-dt*3.2*roadAssist));
    }
    const curvature=track.base(projected.s+8).forward.sub(track.base(projected.s-8).forward).multiplyScalar(1/16);
    const axial=ship.flightVelocity.dot(b.forward),lateral=ship.flightVelocity.dot(right);
    // The field supplies centripetal force for the moving tube frame, plus a
    // constant inward pull that returns hops on any side, including underneath.
    const gravity=this.exteriorGravity(ship,projected.s,radial,axial,lateral,curvature);
    ship.flightVelocity.addScaledVector(radial,-gravity*dt);
    ship.position.addScaledVector(ship.flightVelocity,dt);ship.airborne+=dt;
    const landingProjection=track.projectExterior(ship.position,projected.s);
    ship.s=landingProjection.s;ship.x=track.wrapLane(ship.s,landingProjection.x);
    const landing=track.surface(ship.s,ship.x),gap=ship.position.clone().sub(landing.position).dot(landing.normal);
    const jump=ship.jumpGap===null?null:track.gaps[ship.jumpGap],inDeck=!jump||(ship.s>=jump.end&&ship.s<=jump.landingEnd);
    ship.airHeight=Math.max(0,gap-HOVER_HEIGHT);ship.speed=ship.flightVelocity.length();
    if(inDeck&&track.hasRoad(ship.s)&&ship.airborne>.12 && gap<HOVER_HEIGHT && (track.inFullPipe(ship.s)||Math.abs(ship.x)<landing.width/2-1.5) && (previousGap>=HOVER_HEIGHT || ship.flightVelocity.dot(landingProjection.radial)<0)){
      ship.airborne=0;ship.flightTilted=false;ship.pitch=0;ship.airHeight=0;ship.jumpGap=null;
      ship.hoverHeight=Math.max(.65,gap);ship.hoverVelocity=-7;
      ship.speed=Math.min(this.speedLimit(ship),Math.hypot(ship.flightVelocity.dot(landing.forward),ship.flightVelocity.dot(landing.right)));
      ship.position.copy(landing.position).addScaledVector(landing.normal,ship.hoverHeight);
      this.emit('land',ship,'ORBITAL LANDING');
    }else if(ship.airborne>8 || gap>180 || gap<-tube.radius || (jump&&ship.s>jump.landingEnd+15))this.recover(ship);
  }

  exteriorGravity(_ship:Ship,s:number,radial:THREE.Vector3,axial:number,lateral:number,curvature:THREE.Vector3){
    const radius=this.track.exterior!.radius,bend=Math.abs(this.track.tubeShape(s));
    return EXTERIOR_GRAVITY_SCALE*(95+Math.max(0,-curvature.dot(radial))*axial*axial+lateral*lateral*bend/(radius+HOVER_HEIGHT));
  }

  collectRings(ship:Ship){
    if(!ship.airborne)return;
    for(const ring of this.track.rings){
      const key=`${ship.id}:${ring.id}`;if(this.ringTimers.has(key))continue;
      const f=this.track.surface(ring.s,ring.x),center=f.position.clone().addScaledVector(f.normal,ring.height);
      const a=ship.previous.clone().sub(center).dot(f.forward),b=ship.position.clone().sub(center).dot(f.forward);
      if(a>=0 || b<0)continue;
      const crossing=ship.previous.clone().lerp(ship.position,-a/(b-a));
      if(crossing.distanceTo(center)>ring.radius-1.2)continue;
      this.ringTimers.set(key,3);ship.boost=Math.max(ship.boost,1.4);
      ship.flightVelocity.setLength(this.speedLimit(ship));ship.speed=ship.flightVelocity.length();
      this.emit('boost',ship,'AIR RING · BOOST',center);
    }
  }

  speedLimit(ship:Ship){return (ship.boost>0?BOOST_SPEED:SHIP_SPEED)*(ship.id===0?1:ship.aiPace)*(ship.markerPenalty?.8:1);}
  cancelDrift(ship:Ship){ship.drifting=false;ship.driftCharge=0;ship.driftDirection=0;ship.driftSlide=0;}
  updateDrift(ship:Ship,input:Controls,dt:number){
    if(ship.airborne||ship.hit>0||ship.speed<50||input.brake>.8){this.cancelDrift(ship);return;}
    if(input.drift){
      ship.drifting=true;
      if(Math.abs(input.steer)>.28){
        if(ship.driftDirection&&Math.sign(input.steer)!==ship.driftDirection)ship.driftCharge=Math.max(0,ship.driftCharge-dt*2);
        else ship.driftCharge=Math.min(3,ship.driftCharge+dt*Math.min(1,Math.abs(input.steer)*1.5));
        ship.driftDirection=Math.sign(input.steer);
      }
    }else if(ship.drifting){
      const tier=driftTier(ship.driftCharge);this.cancelDrift(ship);
      if(tier){ship.boost=Math.max(ship.boost,[0,.65,1.15,1.8][tier]);ship.speed=Math.min(this.speedLimit(ship),ship.speed+22+tier*8);this.emit('boost',ship,`DRIFT TURBO / ${['','CYAN','AMBER','VIOLET'][tier]}`);}
    }
  }
  nextMarker(ship:Ship){return this.track.markers.filter(m=>!this.markerTimers.has(`${ship.id}:${m.id}`)).sort((a,b)=>this.track.distanceAhead(ship.s,a.s)-this.track.distanceAhead(ship.s,b.s))[0];}
  collectMarkers(ship:Ship,from:number){
    for(const marker of this.track.markers){
      if(!(from<marker.s&&ship.s>=marker.s)||this.markerTimers.has(`${ship.id}:${marker.id}`))continue;
      this.markerTimers.set(`${ship.id}:${marker.id}`,5);
      const f=this.track.surface(marker.s,marker.x),crossing=ship.previous.clone().lerp(ship.position,clamp((marker.s-from)/Math.max(.001,ship.s-from),0,1)).sub(f.position),lane=crossing.dot(f.right);
      const onRoad=this.track.hasRoad(marker.s)&&Math.abs(lane)<f.width/2-1.2&&Math.abs(crossing.dot(f.normal))<14&&ship.recovery<=0;
      const correct=onRoad&&(marker.side==='left'?lane<-1.5:lane>1.5);
      if(correct){
        ship.markerPassed++;
        if(ship.markerPenalty){ship.markerStreak++;if(ship.markerStreak>=5){ship.markerPenalty=false;ship.markerStreak=0;this.emit('marker',ship,'FIVE CLEAN · FULL POWER RESTORED');}else this.emit('marker',ship,`CLEAN MARKER · POWER ${ship.markerStreak} / 5`);}
      }else{ship.markerMissed++;ship.markerPenalty=true;ship.markerStreak=0;ship.speed=Math.min(ship.speed,this.speedLimit(ship));if(ship.airborne)ship.flightVelocity.clampLength(0,this.speedLimit(ship));this.emit('marker',ship,'MISSED MARKER · POWER 80%');}
    }
  }
  collideBarriers(ship:Ship){
    if(ship.hit>0||ship.recovery>0)return;
    for(const barrier of this.track.barriers){
      if(Math.abs(this.track.signedDistance(ship.s,barrier.s))>35)continue;
      const f=this.track.surface(barrier.s,barrier.x),a=ship.previous.clone().sub(f.position),b=ship.position.clone().sub(f.position);
      let enter=0,exit=1;
      for(const [axis,extent,offset] of [[f.right,barrier.width/2+1.5,0],[f.normal,barrier.height/2+1,barrier.height/2],[f.forward,barrier.length/2+2,0]] as [THREE.Vector3,number,number][]){
        const start=a.dot(axis)-offset,delta=b.dot(axis)-a.dot(axis);
        if(Math.abs(delta)<1e-6){if(Math.abs(start)>extent){exit=-1;break;}}else{const t1=(-extent-start)/delta,t2=(extent-start)/delta;enter=Math.max(enter,Math.min(t1,t2));exit=Math.min(exit,Math.max(t1,t2));}
      }
      if(enter<=exit){this.damage(ship,12,ship.previous.clone().lerp(ship.position,clamp(enter,0,1)));this.emit('wall',ship,'BARRIER IMPACT · DODGE THE RED BLOCKS');break;}
    }
  }

  applyAirPitch(ship:Ship,input:Controls,dt:number) {
    ship.flightTilted=true;
    const velocity=ship.flightVelocity,planar=new THREE.Vector3(velocity.x,0,velocity.z);
    if(planar.lengthSq()<.01)return;
    const right=planar.normalize().cross(new THREE.Vector3(0,1,0));
    const angle=Math.atan2(velocity.y,Math.hypot(velocity.x,velocity.z));
    const target=clamp(angle+input.pitch*.95*dt,-1.05,.85);
    velocity.applyAxisAngle(right,target-angle);
    velocity.applyAxisAngle(new THREE.Vector3(0,1,0),-input.steer*.55*dt);
    const drag=3+Math.max(0,input.pitch)*24+Math.max(0,Math.sin(target))*24+input.brake*35+Math.abs(input.airbrake)*10;
    const speed=Math.max(22,velocity.length()+(input.throttle*5+(ship.boost>0?6:0)-drag)*dt);
    velocity.setLength(speed);ship.speed=speed;
  }

  landingPrediction(ship:Ship, releaseSteering=true) {
    const d=this.track.drop;if(!d || !ship.dropFlight)return null;
    const remaining=Math.max(0,(ship.flightVelocity.y+Math.sqrt(ship.flightVelocity.y**2+2*d.gravity*Math.max(0,ship.position.y-d.origin.y+d.height)))/d.gravity);
    const predicted=ship.position.clone().addScaledVector(ship.flightVelocity,remaining);
    if(releaseSteering && !ship.flightTilted){
      // Forecast the neutral yaw/jet damping after the pilot releases A/D.
      const jet=2.6,yaw=8.4,a=(1-Math.exp(-jet*remaining))/jet,b=(1-Math.exp(-yaw*remaining))/yaw;
      const lateral=ship.flightVelocity.dot(d.right),target=ship.speed*Math.sin(ship.yaw);
      const coast=lateral*a+target*jet/(jet-yaw)*(b-a);
      predicted.addScaledVector(d.right,coast-lateral*remaining);
    }
    const projection=this.track.projectDrop(predicted);
    const target=this.track.base(projection.s).position;
    const along=predicted.clone().sub(d.origin).dot(d.direction);
    const start=this.track.base(d.end).position.sub(d.origin).dot(d.direction),end=this.track.base(d.landingEnd).position.sub(d.origin).dot(d.direction);
    return {remaining,error:predicted.sub(target).dot(d.right),range:along<start?'short':along>end?'long':'inside'};
  }

  moveDropFlight(ship: Ship, input: Controls, dt: number) {
    const d=this.track.drop!;
    ship.airborne+=dt;
    if(ship.flightTilted || input.pitch) this.applyAirPitch(ship,input,dt);
    else {
      const along=d.direction.clone().multiplyScalar(ship.speed*Math.cos(ship.yaw)).addScaledVector(d.right,ship.speed*Math.sin(ship.yaw));
      along.y=ship.flightVelocity.y;
      ship.flightVelocity.lerp(along,1-Math.exp(-dt*2.6));
    }
    ship.flightVelocity.y-=d.gravity*dt;
    if(ship.flightTilted)ship.speed=ship.flightVelocity.length();
    ship.position.addScaledVector(ship.flightVelocity,dt);
    const projected=this.track.projectDrop(ship.position);ship.s=projected.s;ship.x=projected.x;
    const f=this.track.surface(ship.s,ship.x),gap=ship.position.clone().sub(f.position).dot(f.normal);
    ship.airHeight=Math.max(0,ship.position.y-(d.origin.y-d.height)-HOVER_HEIGHT);
    const crossed=ship.previous.y>=f.position.y+HOVER_HEIGHT && gap<=HOVER_HEIGHT;
    if(crossed && ship.s>=d.end && ship.s<=d.landingEnd && Math.abs(ship.x)<f.width/2-2 && ship.flightVelocity.y<0){
      ship.dropFlight=false;ship.airborne=0;ship.flightTilted=false;ship.pitch=0;ship.airHeight=0;ship.hoverHeight=Math.max(.65,gap);ship.hoverVelocity=-9;
      ship.position.copy(f.position).addScaledVector(f.normal,ship.hoverHeight);
      this.emit('land',ship,'ABYSS LANDING · CLEAN');
    } else if(ship.airborne>14 || ship.position.y<d.origin.y-d.height-14 || ship.s>d.landingEnd+40) this.recover(ship);
  }

  updateProgress(ship: Ship, from: number) {
    const end = ship.s;
    const airborneGap=ship.airborne&&this.track.gaps.find(g=>ship.s>=g.start&&ship.s<=g.landingEnd+100);
    if(airborneGap){ship.total=ship.laps*this.track.length+airborneGap.start;return;}
    const target = this.track.checkpoints[ship.checkpoint];
    if (!ship.dropFlight && ship.checkpoint === 0) {
      if (from < this.track.length && end >= this.track.length) {
        ship.laps++; ship.lastLap = this.elapsed - ship.lapStart; ship.bestLap = Math.min(ship.bestLap, ship.lastLap); ship.lapStart = this.elapsed; ship.checkpoint = 1;
        this.emit('lap', ship, ship.laps === 2 ? 'FINAL LAP' : `LAP ${ship.laps + 1} / 3`);
        if (ship.laps >= this.totalLaps && ship.finish === null) { ship.finish = ++this.finishCount; }
      }
    } else if (!ship.dropFlight && from < target && end >= target) {
      do { ship.checkpoint=(ship.checkpoint+1)%this.track.checkpoints.length; } while(ship.checkpoint!==0 && end>=this.track.checkpoints[ship.checkpoint]);
    }
    const previousCheckpoint = ship.checkpoint === 0 ? this.track.checkpoints[this.track.checkpoints.length-1] : this.track.checkpoints[ship.checkpoint - 1];
    ship.total = ship.laps * this.track.length + clamp(wrap(end, this.track.length), previousCheckpoint, ship.checkpoint===0?this.track.length:this.track.checkpoints[ship.checkpoint]);
  }

  collectFeatures(ship: Ship, from: number) {
    for (const feature of this.track.features) {
      const crosses = from <= feature.s + 3 && ship.s >= feature.s - 3;
      if (!crosses || Math.abs(this.track.laneDelta(feature.s,ship.x,feature.x)) > (feature.kind === 'pad' ? 3.8 : 4.2)) continue;
      if (feature.kind === 'pad') {
        const key = `${ship.id}:${feature.id}`;
        if (!this.padTimers.has(key)) { ship.boost = Math.max(ship.boost, .85); this.padTimers.set(key, 2); this.emit('boost', ship, 'BOOST PAD'); }
      } else if (!ship.item && !this.pickupTimers.has(feature.id)) {
        const choice: Item[] = ['rocket', 'boost', 'mine']; ship.item = choice[Math.floor(this.random() * 3)]; this.pickupTimers.set(feature.id, 5); this.emit('pickup', ship, `${ship.item.toUpperCase()} ACQUIRED`);
      }
    }
  }

  useItem(ship: Ship) {
    const item = ship.item; ship.item = null; ship.itemCooldown = .8;
    if (item === 'boost') { ship.boost = Math.max(ship.boost, 1.8); this.emit('boost', ship, 'BOOST ENGAGED'); }
    else if (item === 'mine') {
      const s = wrap(ship.s - 5, this.track.length), f = this.track.surface(s, ship.x);
      this.mines.push({ id: this.nextId++, owner: ship.id, s, x: ship.x, position: f.position.clone().addScaledVector(f.normal, .5), normal: f.normal, life: 18, armed: .7 });
      if (this.mines.length > 24) this.mines.shift(); this.emit('mine', ship, 'MINE DEPLOYED');
    } else if (item === 'rocket') {
      const f = this.track.surface(ship.s, ship.x);
      const direction = f.forward.clone().applyAxisAngle(f.normal, -ship.yaw);
      const target = this.ships.filter(s => s.id !== ship.id && this.track.distanceAhead(ship.s, s.s) < 240 && s.position.clone().sub(ship.position).normalize().dot(direction) > .55).sort((a, b) => a.position.distanceToSquared(ship.position) - b.position.distanceToSquared(ship.position))[0];
      const position = ship.position.clone().addScaledVector(direction, 5).addScaledVector(f.normal, .5);
      this.rockets.push({ id: this.nextId++, owner: ship.id, position, previous: position.clone(), velocity: direction.multiplyScalar(270), life: 3, target: target?.id ?? null });
      if (this.rockets.length > 18) this.rockets.shift(); this.emit('fire', ship, 'ROCKET AWAY');
    }
  }

  damage(ship: Ship, amount: number, position: THREE.Vector3) {
    if (ship.hit > 0 || ship.recovery > 0) return;
    this.cancelDrift(ship);ship.energy -= amount; ship.speed *= .55;if(ship.airborne)ship.flightVelocity.multiplyScalar(.55); ship.hit = .85; ship.yaw += (this.random() - .5) * .2;
    this.emit('hit', ship, 'IMPACT · ENERGY LOST', position);
  }

  updateWeapons(dt: number) {
    this.rockets = this.rockets.filter(rocket => {
      rocket.life -= dt; rocket.previous.copy(rocket.position);
      const target = rocket.target !== null ? this.ships[rocket.target] : null;
      if (target && target.recovery <= 0) {
        const desired = target.position.clone().addScaledVector(this.track.base(target.s).forward, target.speed * .12).sub(rocket.position).normalize();
        const current = rocket.velocity.clone().normalize();
        const angle = current.angleTo(desired);
        const turn = Math.min(1, dt * 2.3 / Math.max(angle, .001));
        current.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(current, desired).slerp(new THREE.Quaternion(), 1 - turn));
        rocket.velocity.copy(current).multiplyScalar(270);
      }
      rocket.position.addScaledVector(rocket.velocity, dt);
      for (const ship of this.ships) {
        if (ship.id === rocket.owner || ship.recovery > 0) continue;
        if (segmentDistance(ship.position, rocket.previous, rocket.position) < 3.6) { this.damage(ship, 25, rocket.position); return false; }
      }
      // Use connected local road sections, so the lower road at an overpass never steals a hit.
      const owner = this.ships[rocket.owner];
      let bestDistance = Infinity, bestSurface = this.track.surface(owner.s, owner.x);
      for (let delta = -20; delta < 260; delta += 12) {
        const b = this.track.base(owner.s + delta);
        const residual=rocket.position.clone().sub(b.position),bend=this.track.profile(owner.s+delta).pipe;
        const radius=this.track.pipe && bend>.01?this.track.pipe.radius/bend:0;
        const bendExterior=this.track.tubeShape(owner.s+delta),radiusExterior=this.track.exterior&&Math.abs(bendExterior)>.00001?this.track.exterior.radius/bendExterior:0;
        const sign=Math.sign(radiusExterior);
        const x=this.track.exterior?(radiusExterior?Math.atan2(residual.dot(b.right)*sign,(residual.dot(b.normal)-this.track.exterior.radius+radiusExterior)*sign)*radiusExterior:residual.dot(b.right)):radius?Math.atan2(residual.dot(b.right),radius-residual.dot(b.normal))*radius:residual.dot(b.right);
        const f = this.track.surface(owner.s + delta, clamp(x, -b.width / 2 + .2, b.width / 2 - .2));
        const d = f.position.distanceToSquared(rocket.position);
        if (d < bestDistance) { bestDistance = d; bestSurface = f; }
      }
      const above = rocket.position.clone().sub(bestSurface.position).dot(bestSurface.normal);
      if (bestDistance < 1200 && above < .1) { this.events.push({ kind: 'hit', position: rocket.position.clone(), player: false, color: 0xffa64d }); return false; }
      return rocket.life > 0 && (this.track.exterior || rocket.position.y > -80);
    });
    this.mines = this.mines.filter(mine => {
      mine.life -= dt; mine.armed -= dt;
      if (mine.armed <= 0) for (const ship of this.ships) {
        if (ship.recovery > 0 || (ship.id === mine.owner && mine.life > 16.5)) continue;
        if (segmentDistance(mine.position, ship.previous, ship.position) < 4) { this.damage(ship, 30, mine.position); return false; }
      }
      return mine.life > 0;
    });
  }

  resolveShipCollisions(dt: number) {
    for (let i = 0; i < this.ships.length; i++) for (let j = i + 1; j < this.ships.length; j++) {
      const a = this.ships[i], b = this.ships[j];
      if (a.recovery > 0 || b.recovery > 0 || a.position.distanceToSquared(b.position) > 20) continue;
      const direction = this.track.laneDelta(a.s,b.x,a.x)>0 ? 1 : -1;
      a.x += direction * dt * 9; b.x -= direction * dt * 9;
      if (a.speed > b.speed) a.speed = Math.max(b.speed, a.speed - 16 * dt); else b.speed = Math.max(a.speed, b.speed - 16 * dt);
    }
  }

  recover(ship: Ship) { if (ship.recovery > 0) return;this.cancelDrift(ship); ship.recovery = 1.5; ship.speed = 0; ship.item = null; this.emit('recover', ship, 'RECOVERING TO CHECKPOINT'); }
}
