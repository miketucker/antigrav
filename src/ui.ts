import { Race, BOOST_SPEED, driftTier, type Item, type RaceEvent } from './race';
import { Track, STAGES, type StageId } from './track';
import { CORNER_ARROW_PATH } from './direction-arrow';

export const icons = {
  arrow: '<svg viewBox="0 0 24 24" fill="none"><path d="m9 5 7 7-7 7M3 12h12" stroke="currentColor" stroke-width="2"/></svg>',
  sound: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 9v6h4l5 4V5L8 9H4Zm12-1c3 2 3 6 0 8m3-11c5 4 5 10 0 14" stroke="currentColor" stroke-width="1.5"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none"><path d="m9 3-.6 3-2 .9L3.6 6 2 9l2.3 2v2L2 15l1.6 3 2.8-.9 2 .9L9 21h6l.6-3 2-.9 2.8.9 1.6-3-2.3-2v-2L22 9l-1.6-3-2.8.9-2-.9L15 3H9Z" stroke="currentColor" stroke-width="1.3"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/></svg>',
  boost: '<svg viewBox="0 0 40 40" fill="none"><path d="m23 3-15 21h11l-2 13 15-22H21l2-12Z" fill="currentColor"/></svg>',
  rocket: '<svg viewBox="0 0 40 40" fill="none"><path d="M29 6c-12 0-19 7-19 19l6 5c12-3 15-12 13-24Z" stroke="currentColor" stroke-width="2"/><circle cx="23" cy="14" r="3" fill="currentColor"/><path d="m10 18-6 6 6 1m10 3-1 8 8-9M9 30l-4 6 7-4" stroke="currentColor" stroke-width="2"/></svg>',
  mine: '<svg viewBox="0 0 40 40" fill="none"><path d="m20 3 3 9 9-5-4 10 9 3-9 3 4 10-9-5-3 9-3-9-10 5 5-10-9-3 9-3L7 7l10 5 3-9Z" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="5" fill="currentColor"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 21V3h14v11H5" stroke="currentColor" stroke-width="1.5"/><path d="M5 3h5v5H5m5 5h5V8h-5m5-5h4v5h-4" fill="currentColor"/></svg>',
};
export const formatTime = (seconds: number) => {
  if(!Number.isFinite(seconds))return '—';
  const minutes=Math.floor(seconds/60),secs=Math.floor(seconds%60),hundredths=Math.floor(seconds%1*100);
  return `${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}.${String(hundredths).padStart(2,'0')}`;
};
const byId = <T extends HTMLElement = HTMLElement>(id:string) => document.getElementById(id) as T;

export class UI {
  readonly app:HTMLElement;
  readonly map:HTMLCanvasElement;
  private previousPhase='';
  private noticeTimer=0;
  private previousItem:Item|null|undefined=undefined;
  private previousCountdown=4;
  onCountdown:(value:number)=>void=()=>{};
  onSelectStage:(stage:StageId)=>void=()=>{};

  constructor(app:HTMLElement,track:Track){
    this.app=app;
    app.innerHTML=`
      <canvas id="game-canvas" tabindex="0" aria-label="Three-dimensional futuristic racing circuit"></canvas>
      <div class="screen-vignette" aria-hidden="true"></div>
      <main id="menu" class="menu" aria-label="Race setup">
        <section class="course-picker" aria-label="Choose a course">
          <div id="course-grid" class="course-grid" role="group" aria-label="Courses">${Object.entries(STAGES).map(([id,meta])=>`<button class="course-option" data-stage="${id}" aria-pressed="false"><canvas id="course-map-${id}" width="320" height="160" aria-hidden="true"></canvas><span>${meta.name}</span></button>`).join('')}</div>
          <p id="stage-hint" class="stage-hint">Extreme banks · Half-pipe · Skyline launch</p>
          <div class="menu-actions"><button id="start-button" class="primary-button"><span>START RACE</span>${icons.arrow}</button></div>
          <div id="menu-tools" class="menu-tools"><button id="help-button" class="text-button">HOW TO RACE <span>↗</span></button><div id="utility-actions" class="utility-actions" role="group" aria-label="Game controls"><button id="pause-button" class="icon-button" aria-label="Pause race" title="Pause race" hidden><svg viewBox="0 0 24 24" fill="none"><path d="M8 5v14M16 5v14" stroke="currentColor" stroke-width="3"/></svg></button><button id="sound-button" class="icon-button" aria-label="Mute sound" title="Toggle sound">${icons.sound}</button><button id="settings-button" class="icon-button" aria-label="Open settings" title="Settings">${icons.gear}</button></div></div>
        </section>
      </main>
      <section id="hud" class="hud" hidden aria-label="Race information">
        <div class="race-top"><div class="lap-panel"><span class="hud-label">LAP</span><b id="lap-value">01<span>/ 03</span></b></div><div class="timer-panel"><span class="hud-label">RACE TIME</span><b id="time-value">00:00.00</b><span id="best-value">BEST —</span></div><div class="position-panel"><span class="hud-label">POSITION</span><b id="position-value">1<span>/ 6</span></b></div></div>
        <div class="leaderboard" id="leaderboard"></div>
        <div id="race-map-panel" class="race-map"><canvas id="race-map" width="300" height="230" aria-label="Live map of all racers"></canvas><span id="section-name">GRID STRAIGHT</span></div>
        <div id="technique-hud" class="technique-hud"><div id="drift-status" hidden></div><div id="marker-status" role="img" hidden></div></div><div id="landing-cue" class="landing-cue" hidden aria-live="polite"></div>
        <div id="notice" class="notice" aria-live="polite"></div>
        <div id="countdown" class="countdown" aria-live="assertive"></div>
        <div id="warning" class="warning" hidden>⚠ INCOMING ROCKET</div>
        <div class="speed-panel"><div class="speed-readout"><b id="speed-value">000</b><span>KM/H</span></div><div class="speed-bars" id="speed-bars"></div><div class="speed-caption"><span id="boost-label">THRUST / NOMINAL</span><span class="speed-class">V-01</span></div></div>
        <div class="energy-panel"><span class="hud-label">CHASSIS ENERGY</span><div class="energy-track"><div id="energy-fill"></div></div><span id="energy-value">100%</span></div>
        <div class="weapon-panel"><div id="weapon-icon" class="weapon-icon">+</div><div class="weapon-info"><span class="hud-label">ITEM SYSTEM</span><b id="weapon-name">EMPTY</b><span id="weapon-hint">FLY THROUGH A PICKUP</span></div><kbd>SPACE</kbd></div>
        <div class="race-controls"><span><kbd>W</kbd> THRUST</span><span><kbd>A</kbd><kbd>D</kbd> STEER</span><span><kbd>Q</kbd><kbd>E</kbd> AIRBRAKE</span><span><kbd>SHIFT</kbd> DRIFT</span><span id="air-pitch-hint" hidden><kbd>I</kbd><kbd>K</kbd> TILT</span><span><kbd>ESC</kbd> PAUSE</span></div>
      </section>
      <div id="pause-overlay" class="overlay" hidden><section class="modal pause-modal" role="dialog" aria-modal="true" aria-labelledby="pause-title"><h2 id="pause-title">RACE PAUSED</h2><button id="resume-button" class="primary-button">RESUME RACE ${icons.arrow}</button><button id="restart-button" class="secondary-button">RESTART RACE</button><button id="quit-button" class="text-button">RETURN TO GRID ↗</button></section></div>
      <div id="results-overlay" class="overlay" hidden><section class="modal results-modal" role="dialog" aria-modal="true" aria-labelledby="results-title"><span class="eyebrow" id="result-stage">FOUNDRY CIRCUIT</span><h2 id="results-title">RACE COMPLETE</h2><div class="result-summary"><div><span class="hud-label">POSITION</span><b id="result-position">01<span>/06</span></b></div><div><span class="hud-label">RACE TIME</span><b id="result-time">00:00.00</b><span id="result-best">BEST LAP —</span></div></div><div id="result-grid" class="result-grid"></div><button id="race-again-button" class="primary-button">RACE AGAIN ${icons.arrow}</button><button id="results-quit-button" class="text-button">RETURN TO GRID ↗</button></section></div>
      <dialog id="help-dialog" class="modal help-modal"><button class="close-button" data-close="help-dialog" aria-label="Close instructions">×</button><h2>CONTROLS</h2><p id="stage-briefing">Race three laps against five CPU pilots. Stay fast through the banks, climb the half-pipe walls, and use the launch ramp to leave the pack behind.</p><div class="control-grid"><span><kbd>W</kbd> / <kbd>↑</kbd></span><b>Accelerate</b><span><kbd>S</kbd> / <kbd>↓</kbd></span><b>Brake</b><span><kbd>A</kbd> <kbd>D</kbd> / <kbd>←</kbd> <kbd>→</kbd></span><b>Steer</b><span><kbd>Q</kbd> <kbd>E</kbd></span><b>Airbrake into sharp turns</b><span><kbd>SHIFT</kbd> + STEER</span><b>Drift · Release for a mini-turbo</b><span><kbd>SPACE</kbd></span><b>Use held item</b><span><kbd>I</kbd> <kbd>K</kbd> / <kbd>↑</kbd> <kbd>↓</kbd></span><b>Tilt up / down while airborne</b><span><kbd>ESC</kbd></span><b>Pause race</b></div><div class="item-guide"><div>${icons.boost}<b>BOOST</b><p>Lime pads give free speed. Save your booster for a clear straight.</p></div><div>${icons.rocket}<b>ROCKET</b><p>Fire toward a rival ahead. Limited homing helps land the hit.</p></div><div>${icons.mine}<b>MINE</b><p>Drop a trap behind you. Mines cling to even the steepest banks.</p></div></div><p class="help-note" id="stage-help">Purple diamonds give one item. Impacts drain energy; a wreck returns you to your last checkpoint. Steer to an outer lane to bypass the center launch ramp.</p><button id="help-start-button" class="primary-button">LET'S RACE ${icons.arrow}</button></dialog>
      <dialog id="settings-dialog" class="modal settings-modal"><button class="close-button" data-close="settings-dialog" aria-label="Close settings">×</button><h2>SETTINGS</h2><label class="setting-row"><span>CPU difficulty</span><select id="difficulty"><option value="rookie">ROOKIE</option><option value="standard" selected>STANDARD</option><option value="expert">EXPERT</option></select></label><label class="setting-row"><span>Bloom lighting</span><input id="bloom" type="checkbox" checked></label><label class="setting-row"><span>Depth of field</span><input id="depth-of-field" type="checkbox" checked></label><label class="setting-row"><span>Camera banking</span><select id="camera-roll"><option value="0">STABLE</option><option value="0.5" selected>BALANCED</option><option value="1">FULL BANK</option></select></label><label class="setting-row"><span>Impact shake</span><input id="shake" type="checkbox" checked></label><label class="setting-row"><span>Electronic soundtrack</span><input id="music" type="checkbox" checked></label><p class="help-note">Keyboard and gamepad supported. Gamepad: left stick to steer and tilt in flight, RT to accelerate, LT to brake, bumpers to airbrake, X to drift (release to boost), A to use an item, Start to pause.</p><button id="settings-done-button" class="primary-button">BACK TO FLIGHT ${icons.arrow}</button></dialog>
      <div class="touch-controls" id="touch-controls" hidden><button data-touch="left" aria-label="Steer left">◀</button><button data-touch="right" aria-label="Steer right">▶</button><button data-touch="brake">BRAKE</button><button data-touch="throttle">THRUST</button><button data-touch="drift">DRIFT</button><button data-touch="use">ITEM</button><button data-touch="pitch-up" hidden aria-label="Tilt nose up">UP</button><button data-touch="pitch-down" hidden aria-label="Tilt nose down">DOWN</button></div>
      <div id="error-overlay" class="overlay" hidden><section class="modal"><h2>UNABLE TO START</h2><p id="error-message"></p><button onclick="location.reload()" class="primary-button">RETRY</button></section></div>`;
    this.map=byId<HTMLCanvasElement>('race-map');
    for(const stage of Object.keys(STAGES) as StageId[])this.drawMap(byId<HTMLCanvasElement>(`course-map-${stage}`),stage===track.stage?track:new Track(stage),null);
    document.querySelectorAll<HTMLButtonElement>('[data-stage]').forEach(button=>button.addEventListener('click',()=>this.onSelectStage(button.dataset.stage as StageId)));
    byId('speed-bars').innerHTML=Array.from({length:24},()=>'<i></i>').join('');
    this.setTrack(track);
    document.querySelectorAll<HTMLButtonElement>('[data-close]').forEach(button=>button.addEventListener('click',()=>byId<HTMLDialogElement>(button.dataset.close!).close()));
    document.querySelectorAll<HTMLDialogElement>('dialog').forEach(dialog=>dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();}));
  }

  setTrack(track:Track){
    const meta=STAGES[track.stage];
    document.querySelectorAll<HTMLButtonElement>('[data-stage]').forEach(button=>{
      const selected=button.dataset.stage===track.stage;button.classList.toggle('selected',selected);button.setAttribute('aria-pressed',String(selected));
    });
    byId('start-button').setAttribute('aria-label',`Start race on ${meta.name}`);
    byId('stage-hint').textContent=track.exterior?'Air rings · Reactor tunnel · Flat bridges':track.drop?'5-second drop · Boosted waves · 360° pipe':'Extreme banks · Half-pipe · Skyline launch';
    byId('stage-briefing').textContent=track.exterior?'Race three laps around the outside of an orbital tube against five CPU pilots. Climb the double helix, roll through the Crown loop and plunge down the corkscrew. Lighter gravity pulls toward the tube, even on its underside. Follow boost chains, jump through floating rings and line up for three unwrapped road sections. Carve around the walls and ceiling inside the Reactor tunnel.':track.drop?'Race three laps across a vertical canyon against five CPU pilots. Take the 300 m drop, aim for the offset landing deck, surf boosted wave crests, then carve a complete loop inside the Reactor pipe.':'Race three laps against five CPU pilots. Stay fast through the banks, climb the half-pipe walls, and use the launch ramp to leave the pack behind.';
    byId('stage-help').textContent=track.exterior?'Hold W for thrust and use A/D to steer all the way around the tube. Follow chains of 3–5 lime boosts and launch from orange ramps to fly through floating boost rings. Lighter inward gravity gives you more airtime. Before amber UNWRAP gates, steer toward the center: the tube opens into a flat road. In the violet Reactor tunnel, hold A or D to carve its walls and ceiling; center your line before its exit. Use I/K or Up/Down in flight: up tilts away from the tube and trades speed for airtime, down dives toward it. The camera follows your roll through the spiral and vertical loop.':track.drop?'Keep W held at takeoff. In the air, use A/D to aim for the amber deck; release steering when the landing cue aligns. I/K or Up/Down tilt your nose: up trades speed for airtime, down dives toward the deck. Hold A or D inside the pipe to climb its walls and ceiling. Follow the lime boosts and violet items, and steer back toward the floor before the flared exit. A missed landing returns you to the approach.':'Purple diamonds give one item. Impacts drain energy; a wreck returns you to your last checkpoint. Steer to an outer lane to bypass the center launch ramp.';
    if(track.challenge){
      byId('stage-hint').textContent=track.theme!.hint;
      const briefing:Record<string,string>={
        slalom:'Carve wide cyan-and-pink banks through repeated hairpins. Hold Shift into each bend, then release your charged drift on the exit. A single sky jump, Reactor tunnel and vertical loop break up the drift district.',
        rift:'Leap across three missing skyway sections in the amber canyon. Each offset landing is narrower than the last. Follow the runway boosts, aim through airborne rings and line up with the amber decks. A missed landing returns you to that jump’s approach.',
        vortex:'Surf three violet Reactor tunnels, an exterior vertical loop and a descending spiral. Wall and ceiling boost chains reward full-circumference carving. Optional orange ramps launch short hops through floating rings; center before tunnel exits.',
        oblivion:'The red-and-gold final exam combines banked switchbacks, four offset sky jumps, three Reactor tunnels, exterior loops and ramp hops. Narrowing landing decks and dense barriers test every technique. Carry drift boosts into clear straights and watch your marker power.',
      };
      byId('stage-briefing').textContent=`${meta.name}: ${briefing[track.stage]} Race three laps against five CPU pilots.`;
      byId('stage-help').textContent='Hold Shift while steering to charge cyan, amber or violet drift sparks, then release for a mini-turbo. Dodge the red blocks. Pass on the side indicated by the floating corner arrows: cyan points left, amber points right. A miss cuts top speed to 80%; five consecutive correct markers restore full power. Follow approach boosts, keep your jump aligned with the amber landing deck and use I/K to tilt in flight. Carve around tunnel walls for boosts and powerups, and center before exits.';
    }
    if(track.openEdges){
      byId('stage-hint').textContent='Flat zigzags · Open edges · Drift to survive';
      byId('stage-briefing').textContent='A pure handling test: large alternating zigzags on a flat, narrow ribbon. Race three laps against five CPU pilots. At racing speed, enter each corner with Shift held, then release on the exit for a mini-turbo.';
      byId('stage-help').textContent='Hold W for thrust. Use Shift with A/D to carve each zigzag, then release Shift as the track straightens. Normal steering has less grip here: mistimed drifts slide off the open edge. Falling cancels your charge and returns you to the last checkpoint. Brake to learn the course at lower speed. There are no pickups or boost pads; your drift releases supply the boosts.';
    }
  }

  update(race:Race,dt:number){
    const phase=race.phase,p=race.player;
    if(phase!==this.previousPhase){
      byId('menu').hidden=phase!=='menu';byId('hud').hidden=phase==='menu';byId('pause-overlay').hidden=phase!=='paused';byId('results-overlay').hidden=phase!=='finished';
      if(phase==='menu')byId('menu-tools').append(byId('utility-actions'));
      else byId('race-map-panel').prepend(byId('utility-actions'));
      byId('pause-button').hidden=phase!=='racing'&&phase!=='countdown';
      this.app.dataset.phase=phase;this.previousPhase=phase;
      if(phase==='finished')this.results(race);
      if(phase==='countdown'){this.previousCountdown=4;this.previousItem=undefined;this.noticeTimer=0;}
      byId('touch-controls').hidden=phase!=='racing'||!matchMedia('(pointer: coarse)').matches;
    }
    if(phase==='menu')return;
    byId('air-pitch-hint').hidden=!p.airborne;
    document.querySelectorAll<HTMLElement>('[data-touch^="pitch-"]').forEach(button=>button.hidden=!p.airborne);
    byId('lap-value').innerHTML=`${String(Math.min(p.laps+1,3)).padStart(2,'0')}<span>/ 03</span>`;
    byId('time-value').textContent=formatTime(race.elapsed);byId('best-value').textContent=`BEST ${formatTime(p.bestLap)}`;
    const ranked=race.ranking(),position=ranked.findIndex(s=>s.id===0)+1;
    byId('position-value').innerHTML=`${position}<span>/ 6</span>`;
    byId('leaderboard').innerHTML=ranked.map((ship,i)=>`<div class="leader-row ${ship.id===0?'is-player':''}"><span>${String(i+1).padStart(2,'0')}</span><i style="background:#${ship.color.toString(16)}"></i><b>${ship.name}</b><span>${ship.finish?'FIN':ship.id===0?'V-01':`${Math.round(Math.abs(ship.total-p.total))} M`}</span></div>`).join('');
    byId('speed-value').textContent=String(Math.round(p.speed*7)).padStart(3,'0');
    const bars=byId('speed-bars').children;for(let i=0;i<bars.length;i++)bars[i].classList.toggle('active',i<p.speed/BOOST_SPEED*24);
    byId('boost-label').textContent=p.recovery>0?'CHASSIS / RECOVERING':p.markerPenalty?'POWER / 80%':p.drifting?'DRIFT / CHARGING':p.airborne?'FLIGHT / AIRBORNE':p.boost>0?'BOOST / ENGAGED':'THRUST / NOMINAL';
    byId('boost-label').classList.toggle('boosting',p.boost>0);this.app.classList.toggle('is-boosting',p.boost>0);
    byId('energy-fill').style.width=`${Math.max(0,p.energy)}%`;byId('energy-fill').classList.toggle('low',p.energy<30);byId('energy-value').textContent=`${Math.max(0,Math.round(p.energy))}%`;
    const drift=byId('drift-status'),tier=driftTier(p.driftCharge);drift.hidden=!p.drifting;drift.dataset.tier=String(tier);drift.innerHTML=`<span>SHIFT / DRIFT</span><b>${tier?['','CYAN','AMBER','VIOLET'][tier]+' TURBO READY':'CHARGING'}</b><i style="--charge:${Math.min(1,p.driftCharge/2.2)}"></i><small>RELEASE TO BOOST</small>`;
    const marker=byId('marker-status'),next=race.nextMarker(p);marker.hidden=!next;marker.classList.toggle('penalty',p.markerPenalty);
    if(next){marker.dataset.side=next.side;marker.setAttribute('aria-label',`Pass ${next.side}, ${Math.round(race.track.distanceAhead(p.s,next.s))} meters ahead. ${p.markerPenalty?`Power 80 percent, ${p.markerStreak} of 5 clean markers.`:'Full power.'}`);marker.innerHTML=`<svg class="marker-arrow" viewBox="0 0 100 100" aria-hidden="true"><path d="${CORNER_ARROW_PATH}"/></svg>`;}
    const cue=byId('landing-cue');cue.hidden=!p.dropFlight||p.recovery>0;
    if(p.dropFlight && race.track.drop){
      const prediction=race.landingPrediction(p)!;
      const aligned=prediction.range==='inside' && Math.abs(prediction.error)<17;cue.classList.toggle('aligned',aligned);
      const instruction=prediction.range==='short'?'MORE THRUST ↑':prediction.range==='long'?'BRAKE ↓':aligned?'◆ ALIGNED':prediction.error<0?'STEER RIGHT ►':'◄ STEER LEFT';
      cue.innerHTML=`<span>LANDING DECK / ${prediction.remaining.toFixed(1)} SEC</span><b>${instruction}</b>`;
    }
    byId('section-name').textContent=race.track.sectionName(p.s);
    if(p.item!==this.previousItem){byId('weapon-icon').innerHTML=p.item?icons[p.item]:'+';byId('weapon-name').textContent=p.item?.toUpperCase()??'EMPTY';byId('weapon-hint').textContent=p.item?'READY TO DEPLOY':'FLY THROUGH A PICKUP';this.previousItem=p.item;byId('weapon-icon').classList.toggle('has-item',!!p.item);}
    this.drawMap(this.map,race.track,race);
    if(phase==='countdown'){const value=Math.max(1,Math.ceil(race.countdown));byId('countdown').textContent=String(value);byId('countdown').hidden=false;if(value!==this.previousCountdown){this.onCountdown(value);this.previousCountdown=value;}}else byId('countdown').hidden=true;
    this.noticeTimer=Math.max(0,this.noticeTimer-dt);byId('notice').classList.toggle('visible',this.noticeTimer>0);
    byId('warning').hidden=!race.rockets.some(r=>r.target===0&&r.position.distanceTo(p.position)<100);
  }

  event(event:RaceEvent){if(event.player&&event.text){byId('notice').textContent=event.text;this.noticeTimer=2.2;}}

  drawMap(canvas:HTMLCanvasElement,track:Track,race:Race|null){
    const ctx=canvas.getContext('2d')!,w=canvas.width,h=canvas.height;ctx.clearRect(0,0,w,h);
    const points=track.points,minX=Math.min(...points.map(p=>p.x)),maxX=Math.max(...points.map(p=>p.x)),minZ=Math.min(...points.map(p=>p.z)),maxZ=Math.max(...points.map(p=>p.z));
    const scale=Math.min((w-50)/(maxX-minX),(h-35)/(maxZ-minZ));
    const project=(p:{x:number;z:number})=>({x:(p.x-(minX+maxX)/2)*scale+w/2,y:(p.z-(minZ+maxZ)/2)*scale+h/2});
    ctx.strokeStyle=race?'#f0f0e755':'#bfc5d744';ctx.lineWidth=race?5:10;ctx.lineJoin='round';ctx.beginPath();points.forEach((p,i)=>{const q=project(p);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y);});ctx.closePath();ctx.stroke();
    ctx.strokeStyle=race?'#dce1e5':'#d6ff45';ctx.lineWidth=race?1.8:2;ctx.stroke();
    if(!race){ctx.strokeStyle='#b7a0ff';ctx.lineWidth=4;ctx.beginPath();const begin=track.pipe?Math.floor(track.pipe.start/track.length*(points.length-1)):Math.floor(points.length*.28),end=track.pipe?track.pipe.end/track.length*(points.length-1):points.length*.445;for(let i=begin;i<end;i++){const q=project(points[i]);i===begin?ctx.moveTo(q.x,q.y):ctx.lineTo(q.x,q.y);}ctx.stroke();}
    const start=project(track.points[0]);ctx.fillStyle='#d6ff45';ctx.fillRect(start.x-4,start.y-4,8,8);
    if(race)for(const ship of [...race.ships].reverse()){const q=project(track.base(ship.s).position);ctx.beginPath();ctx.arc(q.x,q.y,ship.id===0?5:3,0,Math.PI*2);ctx.fillStyle=`#${ship.color.toString(16).padStart(6,'0')}`;ctx.fill();if(ship.id===0){ctx.strokeStyle='#fff';ctx.lineWidth=1.3;ctx.stroke();}}
  }

  results(race:Race){
    byId('result-stage').textContent=STAGES[race.track.stage].name;
    const p=race.player;byId('result-position').innerHTML=`${String(p.finish??6).padStart(2,'0')}<span>/06</span>`;byId('result-time').textContent=formatTime(race.elapsed);byId('result-best').textContent=`BEST LAP ${formatTime(p.bestLap)}`;
    byId('result-grid').innerHTML=race.ranking().map((s,i)=>`<div class="result-row ${s.id===0?'is-player':''}"><span>${String(i+1).padStart(2,'0')}</span><b>${s.name}</b><span>${s.finish?'FINISHED':`LAP ${Math.min(s.laps+1,3)}`}</span></div>`).join('');
  }

  error(message:string){byId('error-overlay').hidden=false;byId('error-message').textContent=message;}
}
