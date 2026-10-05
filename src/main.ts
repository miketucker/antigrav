import '@fontsource/barlow/latin-400.css';
import '@fontsource/barlow/latin-500.css';
import '@fontsource/barlow/latin-600.css';
import '@fontsource/barlow/latin-700.css';
import '@fontsource/barlow-condensed/latin-600.css';
import '@fontsource/barlow-condensed/latin-700.css';
import '@fontsource/barlow-condensed/latin-800.css';
import '@fontsource/barlow-condensed/latin-800-italic.css';
import './style.css';
import { Track, STAGES, clamp, type StageId } from './track';
import { Race, HOVER_HEIGHT, driftTier, type Controls } from './race';
import { World } from './scene';
import { UI } from './ui';
import { AudioSystem } from './audio';

const requestedStage=new URLSearchParams(location.search).get('stage');
let track = new Track(requestedStage && Object.hasOwn(STAGES,requestedStage)?requestedStage as StageId:'foundry');
const ui = new UI(document.getElementById('app')!,track);
const race = new Race(track);
const audio = new AudioSystem();
let world:World;

try { world = new World(document.getElementById('game-canvas') as HTMLCanvasElement,track); }
catch(error){ui.error(`The 3D renderer could not start. Enable hardware acceleration and use a browser with WebGL 2 support. ${error instanceof Error?error.message:''}`);throw error;}

const keys = new Set<string>();
const touch = new Set<string>();
let usePressed=false;
let pendingUse=false;
let gamepadUse=false;
let gamepadPause=false;
let last=performance.now(),accumulator=0;
let uiClock=0;
let settingsPaused=false;

ui.onSelectStage=stage=>{
  if(race.phase!=='menu')return;
  if(stage===track.stage)return;
  track=new Track(stage);race.track=track;race.reset(false);world.setTrack(track);ui.setTrack(track);ui.update(race,0);
  keys.clear();touch.clear();pendingUse=false;accumulator=0;
  const url=new URL(location.href);url.searchParams.set('stage',stage);url.searchParams.delete('preview');history.replaceState(null,'',url);
};

const start = async()=>{
  document.querySelectorAll<HTMLDialogElement>('dialog').forEach(d=>d.close());
  keys.clear();touch.clear();usePressed=false;pendingUse=false;accumulator=0;
  race.reset();world.clearEffects();world.cameraTarget.copy(race.player.position);await audio.start();
  ui.update(race,0);
  document.getElementById('game-canvas')?.focus();
};
const quit=()=>{race.reset(false);world.clearEffects();keys.clear();touch.clear();pendingUse=false;audio.update(0,false,false,0);ui.update(race,0);document.getElementById('start-button')?.focus();};
const pause=()=>{race.pause();keys.clear();touch.clear();pendingUse=false;ui.update(race,0);if(race.phase==='racing'||race.phase==='countdown')document.getElementById('game-canvas')?.focus();else if(race.phase==='paused')document.getElementById('resume-button')?.focus();};
for(const id of ['start-button','help-start-button','restart-button','race-again-button'])document.getElementById(id)!.addEventListener('click',start);
for(const id of ['resume-button','pause-button'])document.getElementById(id)!.addEventListener('click',pause);
for(const id of ['quit-button','results-quit-button'])document.getElementById(id)!.addEventListener('click',quit);
document.getElementById('help-button')!.addEventListener('click',()=>{(document.getElementById('help-dialog') as HTMLDialogElement).showModal();});
document.getElementById('settings-button')!.addEventListener('click',()=>{
  settingsPaused=race.phase==='racing'||race.phase==='countdown';if(settingsPaused)pause();
  (document.getElementById('settings-dialog') as HTMLDialogElement).showModal();
});
document.getElementById('settings-done-button')!.addEventListener('click',()=>{(document.getElementById('settings-dialog') as HTMLDialogElement).close();});
document.getElementById('settings-dialog')!.addEventListener('close',()=>{if(settingsPaused&&race.phase==='paused')pause();settingsPaused=false;});
document.getElementById('difficulty')!.addEventListener('change',e=>{race.difficulty=(e.target as HTMLSelectElement).value as typeof race.difficulty;});
document.getElementById('bloom')!.addEventListener('change',e=>{world.post.bloom.enabled=(e.target as HTMLInputElement).checked;});
document.getElementById('camera-roll')!.addEventListener('change',e=>{world.cameraRoll=Number((e.target as HTMLSelectElement).value);});
document.getElementById('shake')!.addEventListener('change',e=>{world.shake=(e.target as HTMLInputElement).checked;});
document.getElementById('music')!.addEventListener('change',e=>{audio.music=(e.target as HTMLInputElement).checked;});
document.getElementById('sound-button')!.addEventListener('click',async()=>{await audio.start();audio.setMuted(!audio.muted);const button=document.getElementById('sound-button')!;button.classList.toggle('is-muted',audio.muted);button.setAttribute('aria-label',audio.muted?'Unmute sound':'Mute sound');if(race.phase==='racing'||race.phase==='countdown')document.getElementById('game-canvas')?.focus();});
ui.onCountdown=value=>audio.tone(value===1?650:440,.18,'square',.15);

window.addEventListener('keydown',e=>{
  const dialogOpen=!!document.querySelector('dialog[open]');
  if(dialogOpen)return;
  const target=e.target as HTMLElement;if(['INPUT','SELECT','TEXTAREA','BUTTON'].includes(target.tagName)&&e.code!=='Escape')return;
  if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault();
  if(e.code==='Escape'){e.preventDefault();if(!e.repeat)pause();return;}
  if(e.code==='Space'&&!e.repeat)usePressed=true;
  if(e.code==='Enter'&&race.phase==='menu'){start();return;}
  keys.add(e.code);
});
window.addEventListener('keyup',e=>keys.delete(e.code));
window.addEventListener('blur',()=>{keys.clear();touch.clear();if(race.phase==='racing'||race.phase==='countdown')pause();});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&(race.phase==='racing'||race.phase==='countdown'))pause();});
window.addEventListener('resize',()=>world.resize());
document.querySelectorAll<HTMLButtonElement>('[data-touch]').forEach(button=>{
  button.addEventListener('pointerdown',event=>{event.preventDefault();button.setPointerCapture(event.pointerId);touch.add(button.dataset.touch!);if(button.dataset.touch==='use')usePressed=true;});
  for(const kind of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(kind,()=>touch.delete(button.dataset.touch!));
});

function controls():Controls{
  const down=(...codes:string[])=>codes.some(c=>keys.has(c));
  const input:Controls={throttle:down(...(race.player.airborne?['KeyW']:['KeyW','ArrowUp']))||touch.has('throttle')?1:0,brake:down(...(race.player.airborne?['KeyS']:['KeyS','ArrowDown']))||touch.has('brake')?1:0,
    steer:(down('KeyD','ArrowRight')||touch.has('right')?1:0)-(down('KeyA','ArrowLeft')||touch.has('left')?1:0),
    airbrake:(down('KeyE')?1:0)-(down('KeyQ')?1:0),pitch:(down('KeyI','ArrowUp')||touch.has('pitch-up')?1:0)-(down('KeyK','ArrowDown')||touch.has('pitch-down')?1:0),use:usePressed,drift:down('ShiftLeft','ShiftRight')||touch.has('drift')};usePressed=false;
  const pad=navigator.getGamepads?.()[0];
  if(pad)input.drift||=pad.buttons[2]?.pressed??false;
  if(pad){input.steer=clamp(input.steer+(Math.abs(pad.axes[0])>.12?pad.axes[0]:0),-1,1);input.pitch=clamp(input.pitch+(Math.abs(pad.axes[1])>.12?-pad.axes[1]:0),-1,1);input.throttle=Math.max(input.throttle,pad.buttons[7]?.value??0);input.brake=Math.max(input.brake,pad.buttons[6]?.value??0);input.airbrake+=(pad.buttons[5]?.pressed?1:0)-(pad.buttons[4]?.pressed?1:0);const use=pad.buttons[0]?.pressed??false;input.use||=use&&!gamepadUse;gamepadUse=use;const startButton=pad.buttons[9]?.pressed??false;if(startButton&&!gamepadPause)pause();gamepadPause=startButton;}
  return input;
}

function frame(now:number){
  const dt=clamp((now-last)/1000,0,.08);last=now;
  accumulator+=dt;
  const input=controls();pendingUse||=input.use;
  while(accumulator>=1/60){
    if(race.phase==='menu'){
      world.spectator.step(1/60);
      for(const event of world.spectator.race.events)world.burst({...event,player:false});
    }else{
      race.step(1/60,{...input,use:pendingUse});
      for(const event of race.events){world.burst(event);ui.event(event);audio.event(event);}
    }
    pendingUse=false;accumulator-=1/60;
  }
  world.update(race,dt,accumulator*60);
  uiClock+=dt;if(uiClock>1/20){ui.update(race,uiClock);uiClock=0;}
  audio.update(race.player.speed,race.player.boost>0,race.phase==='racing',dt);
  requestAnimationFrame(frame);
}

// Development-only scene entry points keep difficult sections easy to playtest.
if(import.meta.env.DEV){
  const preview=new URLSearchParams(location.search).get('preview');
  const sections:{[key:string]:number}={bank:track.banks.length?track.banks[0].start+240:track.length*.17,halfpipe:track.length*.34,launch:track.launch-22,bowl:track.length*.78,finish:track.length-45,boost:track.length*.04,drop:(track.drop?.start??track.launch)-25,pipe:(track.pipe?.start??track.length*.34)+240,ceiling:(track.pipe?.start??track.length*.34)+500,waves:(track.waves[0]?.s??track.launch)-100,spiral:(track.exterior?.spiralStart??0)+250,loop:(track.exterior?.loopStart??0)+400,orbit:(track.ramps[0]?.s??track.launch)-100,underside:(track.ramps[2]?.s??track.launch)-100,corkscrew:(track.exterior?.descentStart??0)+150,flat:track.flats[1]?.center??0,unwrap:(track.flats[1]?.center??0)-(track.flats[1]?.length??0)/2-(track.flats[1]?.transition??0)-80,chain:(track.boostChains[0]?.pads[0]?.s??0)-25,diagonal:(track.boostChains[2]?.pads[0]?.s??0)-30,ring:(track.ramps[3]?.s??track.launch)-100,tunnel:(track.pipe?.start??0)+230,tunnelceiling:(track.pipe?.start??0)+500,clouds:track.length*.17,jump:(track.gaps[0]?.start??track.launch)-90,markers:(track.markers[0]?.s??100)-55,barrier:(track.barriers[0]?.s??100)-75,drift:track.challenge?180:500};
  for(let i=1;i<track.gaps.length;i++)sections['jump'+(i+1)]=track.gaps[i].start-90;
  const tunnelRamp=track.ramps.find(r=>track.interiorBend(r.s)>.999);
  if(tunnelRamp)sections.tuberamp=tunnelRamp.s-70;
  if(track.challenge){sections.connector=(track.pipe?.end??0)+30;sections.returnroad=(track.exterior?.descentEnd??track.length)-1150;for(const side of ['left','right'])sections['marker'+side]=(track.markers.find(m=>m.side===side)?.s??100)-75;}
  sections.environment=100;
  if(track.openEdges)sections.drift=470;
  if(preview&&preview in sections){
    race.reset();race.phase='racing';
    for(const ship of race.ships){ship.s=sections[preview]-ship.id*9;ship.speed=120;ship.x=preview==='halfpipe'?8-ship.id*2:ship.id%2?4:-4;if(preview==='launch')ship.x=ship.id%2?2:-2;ship.checkpoint=track.checkpoints.findIndex(cp=>cp>ship.s);if(ship.checkpoint<0)ship.checkpoint=0;ship.laps=preview==='finish'?2:0;ship.total=ship.s+ship.laps*track.length;if(preview==='drop')ship.speed=140;if((preview==='ceiling'||preview==='tunnelceiling')&&track.pipe)ship.x=Math.PI*track.pipe.radius-ship.id*5;if(track.exterior&&(preview==='orbit'||preview==='underside'||preview==='ring'))ship.x=(preview==='underside'?track.ramps[2]:preview==='ring'?track.ramps[3]:track.ramps[0]).x+ship.id*4;if(preview==='bank'&&track.banks.length)ship.x=track.bankAngle(ship.s)<0?12:-12;if(preview==='tuberamp'&&tunnelRamp)ship.x=tunnelRamp.x;const f=track.surface(ship.s,ship.x);ship.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);ship.previous.copy(ship.position);}
    if(preview==='boost')race.player.item='boost';
    world.cameraTarget.copy(race.player.position);
  }
}
ui.update(race,0);requestAnimationFrame(frame);

// Read-only diagnostics for development and repeatable simulation tests.
if(import.meta.env.DEV){
  Object.defineProperty(window,'__VECTOR99__',{value:{snapshot:()=>({phase:race.phase,stage:track.stage,openEdges:track.openEdges,curvature:track.curvature(race.player.s),curvatureAhead:track.curvature(race.player.s+35),roadWidth:track.profile(race.player.s).width,drop:track.drop?{start:track.drop.start,end:track.drop.end,landingEnd:track.drop.landingEnd}:null,pipe:track.pipe,pipes:track.pipes,gaps:track.gaps,markers:track.markers,barriers:track.barriers,exterior:track.exterior,ramps:track.ramps,flats:track.flats,banks:track.banks,bankAngle:track.bankAngle(race.player.s),boostChains:track.boostChains,rings:track.rings,ringBoosts:[...race.ringTimers.keys()],tubeBend:track.tubeBend(race.player.s),tubeShape:track.tubeShape(race.player.s),spectator:{active:race.phase==='menu',camera:world.spectator.activeCamera,cuts:world.spectator.cuts,fov:world.camera.fov,targetFov:world.spectator.targetFov,framing:world.spectator.framing,elapsed:world.spectator.race.elapsed,viewpoints:world.spectator.viewpoints.map(v=>({s:v.s,position:v.position.toArray()})),ships:world.spectator.race.ships.map(s=>({id:s.id,speed:s.speed,s:s.s,position:s.position.toArray(),recovery:s.recovery})),visible:world.ships.filter(s=>s.visible).length},environment:{name:world.sky?.userData.theme,theme:world.track.stage,stars:world.course.getObjectByName('night-stars')?.type,mountains:!!world.course.getObjectByName('faceted-mountains'),abstract:world.course.getObjectByName('abstract-landmarks')?.children.length??0,ambient:world.ambient.intensity,sun:world.sun.intensity,geometries:world.renderer.info.memory.geometries,textures:world.renderer.info.memory.textures,signs:[...world.markerVisuals.values()].map(group=>{const icon=group.getObjectByName('direction-arrow') as import('three').Mesh<import('three').ShapeGeometry,import('three').ShaderMaterial>;icon.geometry.computeBoundingBox();const box=icon.geometry.boundingBox!;return {width:box.max.x-box.min.x,height:box.max.y-box.min.y,children:group.children.length,shader:icon.material.type,transparent:icon.material.transparent,depthWrite:icon.material.depthWrite,time:icon.material.uniforms.time.value,intensity:icon.material.uniforms.intensity.value};})},skyline:{...world.course.getObjectByName('skyline-buildings')?.userData},atmosphere:{clouds:world.post.atmosphere.clouds.map(c=>({center:c.center.toArray(),size:c.size.toArray()})),time:world.post.atmosphere.time,quality:world.post.atmosphere.quality,activeClouds:world.post.atmosphere.pass.uniforms.cloudCount.value,cloudWidth:world.post.atmosphere.pass.cloudTarget.width,cloudHeight:world.post.atmosphere.pass.cloudTarget.height,towerBase:world.post.atmosphere.towerBase,depthWidth:world.post.composer.readBuffer.depthTexture?.image.width,depthHeight:world.post.composer.readBuffer.depthTexture?.image.height},surfaceNormal:track.surface(race.player.s,race.player.x).normal.toArray(),elapsed:race.elapsed,trackLength:track.length,ships:race.ships.map(s=>({id:s.id,s:s.s,x:s.x,yaw:s.yaw,speed:s.speed,laps:s.laps,checkpoint:s.checkpoint,item:s.item,boost:s.boost,energy:s.energy,drifting:s.drifting,driftCharge:s.driftCharge,driftTier:driftTier(s.driftCharge),markerPenalty:s.markerPenalty,markerStreak:s.markerStreak,markerPassed:s.markerPassed,markerMissed:s.markerMissed,pitch:s.pitch,flightTilted:s.flightTilted,dropFlight:s.dropFlight,falling:s.falling,recovery:s.recovery,position:s.position.toArray(),airborne:s.airborne,airHeight:s.airHeight,hoverHeight:s.hoverHeight,hoverVelocity:s.hoverVelocity,aiPace:s.aiPace,launches:s.launches,finish:s.finish})),rockets:race.rockets.length,mines:race.mines.length,trailVertices:world.wakes.reduce((total,wake)=>total+wake.mesh.geometry.drawRange.count,0),particles:world.particles.length,rendering:{stage:world.renderedStage,width:world.renderer.domElement.width,height:world.renderer.domElement.height,pixelRatio:world.renderer.getPixelRatio(),brightness:world.post.grade.uniforms.brightness.value,bloom:world.post.bloom.enabled,composerWidth:world.post.composer.readBuffer.width,composerHeight:world.post.composer.readBuffer.height},landing:race.landingPrediction(race.player),camera:{position:world.camera.position.toArray(),direction:world.camera.getWorldDirection(world.camera.position.clone()).toArray()},drawCalls:world.renderer.info.render.calls,triangles:world.renderer.info.render.triangles})},writable:false});
}
