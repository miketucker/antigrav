import * as THREE from 'three';
import { expansionCourse, driftLabCourse, EXPANSION_IDS, COURSE_THEMES, type ExpansionId } from './courses';

export const clamp = THREE.MathUtils.clamp;
export const wrap = (value: number, length: number) => ((value % length) + length) % length;
export const smooth = (x: number) => { const v = clamp(x, 0, 1); return v * v * (3 - 2 * v); };

export interface Surface {
  position: THREE.Vector3;
  forward: THREE.Vector3;
  right: THREE.Vector3;
  normal: THREE.Vector3;
  longitudinalScale: number;
  lateralScale: number;
  width: number;
  bank: number;
  depth: number;
}

export type StageId = 'foundry' | 'abyss' | 'helix' | 'driftlab' | ExpansionId;
export const STAGES = {
  foundry: { name: 'FOUNDRY CIRCUIT', subtitle: 'INDUSTRIAL SKYWAY', sector: 'FOUNDRY SECTOR / 07', stat: '75°', label: 'BANKS' },
  abyss: { name: 'ABYSS RUN', subtitle: 'CANYON / EXTREME', sector: 'ABYSS SECTOR / 12', stat: '360°', label: 'PIPE' },
  helix: { name: 'HELIX CROWN', subtitle: 'EXTERIOR / ORBITAL', sector: 'HELIX SECTOR / 19', stat: '3D', label: 'LOOPS' },
  slalom: { name:'NEON SLALOM',subtitle:COURSE_THEMES.slalom.subtitle,sector:'NEON SECTOR / 24',stat:'70°',label:'DRIFT BANKS' },
  rift: { name:'RIFT CASCADE',subtitle:COURSE_THEMES.rift.subtitle,sector:'RIFT SECTOR / 31',stat:'3',label:'SKY JUMPS' },
  vortex: { name:'VORTEX SPINE',subtitle:COURSE_THEMES.vortex.subtitle,sector:'VORTEX SECTOR / 42',stat:'3',label:'TUNNELS' },
  oblivion: { name:'OBLIVION CIRCUIT',subtitle:COURSE_THEMES.oblivion.subtitle,sector:'OBLIVION SECTOR / 99',stat:'★★★★',label:'FINAL EXAM' },
  driftlab: { name:'DRIFT LAB',subtitle:'08 / ZIGZAG TEST',sector:'SIMULATION SECTOR / 08',stat:'SHIFT',label:'HOLD / RELEASE' },
};
export interface Drop { start: number; end: number; landingEnd: number; direction: THREE.Vector3; right: THREE.Vector3; origin: THREE.Vector3; gravity: number; height: number }

export interface TrackFeature { s: number; x: number; kind: 'pad' | 'pickup'; id: number; heading?: number; chain?: number }
export interface TubeRamp { s: number; x: number; length: number; width: number; height: number }
export interface FlatSection { center: number; length: number; transition: number; name: string }
export interface BoostRing { id: number; s: number; x: number; height: number; radius: number; ramp: number }
export interface BoostChain { id: number; mode: 'straight' | 'angled'; pads: {s:number;x:number;heading:number}[] }
export interface JumpGap { start:number; end:number; landingEnd:number; width:number; lift:number }
export interface DirectionMarker { id:number; s:number; x:number; side:'left'|'right' }
export interface Barrier { id:number; s:number; x:number; width:number; height:number; length:number }

const UP = new THREE.Vector3(0, 1, 0);
const pulse = (u: number, a: number, b: number, fade = .025) => smooth((u - a) / fade) * smooth((b - u) / fade);

export class Track {
  readonly curve: THREE.CatmullRomCurve3;
  readonly length: number;
  readonly samples = 1400;
  readonly points: THREE.Vector3[];
  readonly tangents: THREE.Vector3[];
  readonly normals: THREE.Vector3[] = [];
  readonly rights: THREE.Vector3[] = [];
  readonly features: TrackFeature[];
  readonly checkpoints: number[];
  readonly launch: number;
  readonly stage: StageId;
  readonly drop: Drop | null;
  readonly pipe: { start: number; end: number; radius: number } | null;
  readonly waves: { s:number; height:number; span:number }[];
  readonly exterior: { radius: number; spiralStart: number; spiralEnd: number; loopStart: number; loopEnd: number; descentStart: number; descentEnd: number } | null;
  readonly ramps: TubeRamp[];
  readonly flats: FlatSection[];
  readonly boostChains: BoostChain[];
  readonly rings: BoostRing[];
  readonly pipes: {start:number;end:number;radius:number}[];
  readonly gaps: JumpGap[];
  readonly markers: DirectionMarker[];
  readonly barriers: Barrier[];
  readonly challenge:number;
  readonly theme:typeof COURSE_THEMES[ExpansionId]|null;
  readonly banks:{start:number;end:number}[];
  readonly openEdges:boolean;
  private readonly banking:number[]=[];

  constructor(stage: StageId = 'foundry') {
    this.stage = stage;
    this.openEdges=stage==='driftlab';
    const expansion=EXPANSION_IDS.includes(stage as ExpansionId)?expansionCourse(stage as ExpansionId):null;
    this.challenge=expansion?.difficulty??0;this.theme=expansion?COURSE_THEMES[stage as ExpansionId]:null;this.banks=[];this.gaps=[];this.markers=[];this.barriers=[];
    const foundry = [
      [0, 0, 0], [0, 3, -145], [-35, 15, -280], [-160, 48, -385],
      [-320, 58, -340], [-395, 24, -210], [-310, 7, -75], [-160, 10, -10],
      [-55, 46, 65], [60, 86, 75], [155, 112, -10], [190, 120, -135],
      [310, 105, -165], [400, 62, -65], [435, 36, 100], [310, 6, 200],
      [135, 0, 265], [-35, 0, 180],
    ].map(p => new THREE.Vector3(p[0] * 1.3, p[1], p[2] * 1.3));
    const abyss = [
      [0,0,0], [0,5,-180], [-80,75,-360], [-270,210,-550], [-600,335,-600],
      [-600,340,-850], [-600,340,-940], [-576,40,-1480], [-576,40,-1980],
      [-576,40,-2180], [-576,40,-2500], [-576,40,-2800],
      [-380,20,-3020], [0,45,-3100], [350,85,-2940], [600,105,-2670],
      [630,105,-2370], [630,105,-1970], [630,105,-1570], [630,105,-1170],
      [620,110,-1000], [620,100,-500], [430,180,40], [200,50,160], [50,5,150],
    ].map(p => new THREE.Vector3(...p as [number, number, number]));
    const helix = [[0,0,0],[0,10,-170],[0,40,-300]].map(p=>new THREE.Vector3(...p as [number,number,number]));
    const spiralStart=helix.length;
    for(let i=0;i<=32;i++){
      const angle=-i/32*Math.PI*4;
      helix.push(new THREE.Vector3(-240+240*Math.cos(angle),80+i/32*480,-400+240*Math.sin(angle)));
    }
    const spiralEnd=helix.length-1;
    helix.push(new THREE.Vector3(0,605,-650),new THREE.Vector3(60,610,-830));
    const loopStart=helix.length;
    for(let i=0;i<=24;i++){
      const angle=i/24*Math.PI*2;
      helix.push(new THREE.Vector3(60+i/24*130,610+220*(1-Math.cos(angle)),-850-220*Math.sin(angle)));
    }
    const loopEnd=helix.length-1;
    helix.push(new THREE.Vector3(320,550,-1130),new THREE.Vector3(480,470,-1300));
    const descentStart=helix.length;
    for(let i=0;i<=24;i++){
      const angle=Math.PI-i/24*Math.PI*2.5;
      helix.push(new THREE.Vector3(820+260*Math.cos(angle),450-i/24*300,-1250+260*Math.sin(angle)));
    }
    const descentEnd=helix.length-1;
    helix.push(...[[1100,100,-850],[1100,70,-450],[900,30,-130],[610,-15,80],[350,-30,140],[100,-15,120]].map(p=>new THREE.Vector3(...p as [number,number,number])));
    const nodes=stage==='driftlab'?driftLabCourse():expansion?.nodes??(stage==='helix'?helix:stage==='abyss'?abyss:foundry);
    this.curve = new THREE.CatmullRomCurve3(nodes, true, 'centripetal');
    this.curve.arcLengthDivisions = 6000;
    this.length = this.curve.getLength();
    this.points = this.curve.getSpacedPoints(this.samples);
    this.tangents = Array.from({ length: this.samples + 1 }, (_, i) => this.curve.getTangentAt(i / this.samples).normalize());
    if(stage==='helix'||expansion){
      // Numerical endpoint derivatives sample different sides of a closed curve.
      // Share the endpoint frame so the whole tube circumference closes exactly.
      this.points[this.samples].copy(this.points[0]);
      this.tangents[this.samples].copy(this.tangents[0]);
    }

    // Parallel-transported frames avoid sudden rolls through straight sections.
    let normal = UP.clone().addScaledVector(this.tangents[0], -UP.dot(this.tangents[0])).normalize();
    for (let i = 0; i <= this.samples; i++) {
      if (i) normal.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(this.tangents[i - 1], this.tangents[i]));
      normal.addScaledVector(this.tangents[i], -normal.dot(this.tangents[i])).normalize();
      this.normals.push(normal.clone());
    }
    const end = this.normals[this.samples];
    const seam = Math.atan2(this.tangents[0].dot(end.clone().cross(this.normals[0])), end.dot(this.normals[0]));
    for (let i = 0; i <= this.samples; i++) {
      this.normals[i].applyAxisAngle(this.tangents[i], seam * i / this.samples);
      this.rights.push(this.tangents[i].clone().cross(this.normals[i]).normalize());
    }

    const nodeDistance = (index: number) => {
      let lo = 0, hi = 1;
      for (let i=0;i<35;i++) { const mid=(lo+hi)/2; if(this.curve.getUtoTmapping(mid,0) < index/nodes.length) lo=mid; else hi=mid; }
      return (lo+hi)/2*this.length;
    };
    this.pipe = stage === 'abyss' ? { start: nodeDistance(15), end: nodeDistance(20), radius: 24 } : stage==='helix'?{start:nodeDistance(descentStart)+350,end:nodeDistance(descentEnd)-220,radius:28}:null;
    this.pipes=this.pipe?[this.pipe]:[];
    if(expansion){
      this.pipe={start:nodeDistance(expansion.pipeStart)+80,end:nodeDistance(expansion.pipeEnd)-80,radius:28};this.pipes.push(this.pipe);
      if(expansion.difficulty>=3){
        const start=nodeDistance(expansion.returnStart)+240,end=nodeDistance(expansion.returnEnd)-260,split=start+(end-start)*.48;
        this.pipes.push({start,end:split-260,radius:28},{start:split+260,end,radius:28});
      }
      for(const jump of expansion.jumps)this.gaps.push({start:nodeDistance(jump.start),end:nodeDistance(jump.end),landingEnd:nodeDistance(jump.landingEnd),width:jump.width,lift:jump.lift});
      if(stage==='slalom'||stage==='oblivion')this.banks.push({start:280,end:nodeDistance(expansion.approachEnd)-100},...(stage==='slalom'?[{start:nodeDistance(expansion.returnStart)+100,end:nodeDistance(expansion.returnEnd)-90}]:[]));
    }
    this.drop = stage === 'abyss' ? { start: nodeDistance(5), end: nodeDistance(7), landingEnd: nodeDistance(8), direction: new THREE.Vector3(0,0,-1), right: new THREE.Vector3(1,0,0), origin: abyss[5].clone(), gravity: 28, height: 300 } : null;
    this.waves=this.drop?[160,340,520].map(offset=>({s:this.drop!.landingEnd+offset,height:14,span:38})):[];
    this.exterior=stage==='helix'?{radius:28,spiralStart:nodeDistance(spiralStart),spiralEnd:nodeDistance(spiralEnd),loopStart:nodeDistance(loopStart),loopEnd:nodeDistance(loopEnd),descentStart:nodeDistance(descentStart),descentEnd:nodeDistance(descentEnd)}:null;
    if(expansion)this.exterior={radius:28,spiralStart:nodeDistance(expansion.pipeStart),spiralEnd:nodeDistance(expansion.pipeEnd),loopStart:nodeDistance(expansion.loopStart),loopEnd:nodeDistance(expansion.loopEnd),descentStart:nodeDistance(expansion.returnStart),descentEnd:nodeDistance(expansion.returnEnd)};
    const e=this.exterior;
    this.flats=e?[
      {center:this.length-280,length:850,transition:260,name:'GRID / UNWRAPPED'},
      {center:(e.spiralEnd+e.loopStart)/2,length:180,transition:210,name:'SKY BRIDGE / UNWRAPPED'},
      {center:(e.loopEnd+e.descentStart)/2,length:260,transition:230,name:'CROWN BRIDGE / UNWRAPPED'},
    ]:[];
    if(expansion){
      const approach=nodeDistance(expansion.jumpStart),retStart=nodeDistance(expansion.returnStart),retEnd=nodeDistance(expansion.returnEnd);
      this.flats=[{center:0,length:260,transition:100,name:'GRID / POWER UP'},
        {center:approach/2,length:approach-60,transition:110,name:'DRIFT ALLEY / MARKER SLALOM'},
        ...this.gaps.map(g=>({center:(g.start+g.landingEnd)/2,length:g.landingEnd-g.start+360,transition:100,name:'SKY JUMP / AIM FOR THE DECK'})),
        ...(expansion.difficulty<3?[{center:(retStart+retEnd)/2,length:retEnd-retStart,transition:180,name:'SWITCHBACK / DRIFT LINE'}]:[]),
        {center:this.length-170,length:480,transition:180,name:'HOME STRAIGHT / MARKER SLALOM'}];
    }
    if(this.banks.length){
      const raw=Array.from({length:this.samples},(_,i)=>this.rawBankAngle(i/this.samples*this.length));
      const radius=Math.ceil(65/this.length*this.samples);
      for(let i=0;i<this.samples;i++){
        let value=0,total=0;
        for(let offset=-radius;offset<=radius;offset++){const weight=Math.exp(-.5*(offset/Math.max(1,radius/2))**2);value+=raw[wrap(i+offset,this.samples)]*weight;total+=weight;}
        this.banking.push(value/total);
      }
    }
    this.ramps=e?[.07,.16,.25,.35,.43,.53,.81,.855,.88,.95].map((u,i)=>{const s=this.length*u;return {s,x:this.tubeBend(s)>.999?wrap(i*Math.PI/2*28+Math.PI*28,Math.PI*56)-Math.PI*28:0,length:38,width:18,height:6};}):[];
    if(expansion){
      this.ramps=this.gaps.map(g=>({s:g.start,x:0,length:48,width:60,height:5}));
      const s=e!.loopStart-180;if(this.tubeBend(s)>.999)this.ramps.push({s,x:44,length:38,width:16,height:5});
      if(stage==='vortex'||stage==='oblivion'){
        for(const pipe of this.pipes)for(let i=0,s=pipe.start+320;s<pipe.end-350;i++,s+=320)this.ramps.push({s,x:this.wrapLane(s,(i%3-1)*Math.PI/2*28),length:44,width:18,height:4});
        for(let i=0,s=e!.loopStart+200;s<e!.loopEnd-160;i++,s+=330)this.ramps.push({s,x:this.wrapLane(s,(i%3-1)*44),length:38,width:18,height:5});
      }
    }
    this.boostChains=[];this.rings=[];
    this.launch = this.openEdges?Infinity:this.drop?.start ?? this.length * .535;
    this.checkpoints = Array.from({ length: 12 }, (_, i) => this.length * i / 12);
    if(this.drop){this.checkpoints[1]=500;this.checkpoints[2]=this.drop.start-215;this.checkpoints[3]=this.drop.end+70;this.checkpoints[4]=this.drop.landingEnd-70;}
    if(expansion){
      this.checkpoints=this.checkpoints.filter(s=>!this.gaps.some(g=>s>g.start-140&&s<g.end+30));
      for(const gap of this.gaps)this.checkpoints.push(gap.start-110,gap.end+35);
      this.checkpoints.sort((a,b)=>a-b);
    }
    const pads: [number, number][] = [[.037, -7], [.075, 7], [.153, 0], [.235, -7], [.322, 7], [.412, 0], [.505, -6], [.61, 6], [.705, 0], [.792, -7], [.895, 7], [.954, 0]];
    const pickups: [number, number][] = [[.055, 0], [.12, -7], [.195, 7], [.275, 0], [.365, -6], [.452, 7], [.565, 0], [.665, -7], [.748, 7], [.842, 0], [.925, -6]];
    const authored:Omit<TrackFeature,'id'>[] = [...pads.map(([u, x]) => ({ s: u * this.length, x, kind: 'pad' as const })), ...pickups.map(([u, x]) => ({ s: u * this.length, x, kind: 'pickup' as const }))];
    if (this.drop && this.pipe) {
      const drop=this.drop, pipe=this.pipe;
      authored.length=0;
      for(const [s,x] of [[180,-6],[480,6],[drop.start-210,0],[drop.start-65,-5],[drop.start-65,5],[drop.end+160,4],[pipe.start-180,-5],[pipe.end+150,5],[this.length-160,0]]) authored.push({s,x,kind:'pad'});
      for(const [s,x] of [[280,0],[700,-5],[drop.start-160,5],[drop.end+260,-4],[pipe.start-110,0],[pipe.end+210,0],[this.length-300,6]]) authored.push({s,x,kind:'pickup'});
      // A reachable spiral of incentives: right wall, ceiling, left wall, floor.
      for(let i=0;i<9;i++) {
        const s=pipe.start+230+i*115;
        const x=wrap((i+1)*Math.PI/2*pipe.radius+Math.PI*pipe.radius,Math.PI*2*pipe.radius)-Math.PI*pipe.radius;
        authored.push({s,x,kind:i%2?'pickup':'pad'});
        if(i%2===0) authored.push({s:s+35,x:-x,kind:'pickup'});
      }
      authored.push({s:pipe.start+780,x:Math.PI*pipe.radius,kind:'pad'});
      for(const wave of this.waves) for(const x of [-6,0,6]) authored.push({s:wave.s-85,x,kind:'pad'});
    }
    if(this.exterior&&!expansion){
      authored.length=0;
      for(const ramp of this.ramps){const s=ramp.s+150;authored.push({s:ramp.s-80,x:ramp.x,kind:'pad'},{s,x:this.inFullPipe(s)?this.wrapLane(s,ramp.x+Math.PI*28/2):0,kind:'pickup'});}
      for(let i=0;i<30;i++){
        const s=(i+.5)/30*this.length,x=this.inFullPipe(s)?this.wrapLane(s,(i%8)*Math.PI/4*28):Math.sin(i)*14;
        authored.push({s,x,kind:'pickup'});
      }
      const chains:[number,number,number,number,number][]=[
        [80,3,220,0,0],[this.length*.12,4,230,44,0],[this.length*.20,5,220,-25,18],
        [e!.loopStart+200,3,240,0,0],[this.length*.49,4,220,0,0],
        [this.length*.62,5,230,-45,18],[this.length*.81,4,240,-30,18],[this.length-760,4,200,-12,8],
      ];
      for(const [start,count,spacing,lane,angle] of chains){
        const line:BoostChain={id:this.boostChains.length,mode:angle?'angled':'straight',pads:[]};
        let s=start;
        for(let i=0;i<count;i++){
          const x=this.inFullPipe(s)?this.wrapLane(s,lane+i*angle):clamp(lane+i*angle,-18,18);
          line.pads.push({s,x,heading:0});
          if(i<count-1){
            let distance=0;
            while(distance<spacing){const scale=this.surface(s,x).longitudinalScale;s+=2;distance+=scale*2;}
          }
        }
        line.pads.forEach((pad,i)=>{
          const next=line.pads[i+1]??line.pads[i];
          pad.heading=Math.atan2(this.laneDelta(pad.s,pad.x,next.x),Math.max(1,next.s-pad.s)*this.surface(pad.s,pad.x).longitudinalScale);
          authored.push({...pad,kind:'pad',chain:line.id});
        });this.boostChains.push(line);
      }
      const ringLanes=[20,54,82,0,-24,0,-73,-43,-5,-9],ringHeights=[25,32,27,21,18,18,14,21,24,18];
      for(let i=0;i<this.ramps.length;i++){
        const ramp=this.ramps[i];
        this.rings.push({id:this.rings.length,s:ramp.s+110,x:ringLanes[i],height:ringHeights[i],radius:8,ramp:i});
      }
      if(this.pipe)for(let i=0;i<8;i++){
        const s=this.pipe.start+220+i*130,x=this.wrapLane(s,(i%4)*Math.PI/2*this.pipe.radius);
        authored.push({s,x,kind:i%2?'pickup':'pad'});
      }
    }
    if(expansion){
      authored.length=0;
      const gap=this.gaps[0],step=180-this.challenge*18;
      const roadEnd=gap.start-160;
      for(let s=220;s<roadEnd;s+=step){
        const side=this.markers.length%2?'right':'left',lane=side==='left'?-8:8;
        this.markers.push({id:this.markers.length,s,x:0,side});
        authored.push({s:s+35,x:lane,kind:'pad'});
        if(this.markers.length%2)authored.push({s:s+70,x:lane,kind:'pickup'});
      }
      // Obstacles leave an intentional, wide escape lane; never obstruct the jump.
      for(let i=0;i<4+this.challenge*2;i++){
        const s=290+i/(4+this.challenge*2)*(roadEnd-330),marker=this.markers.reduce((a,b)=>Math.abs(b.s-s)<Math.abs(a.s-s)?b:a);
        const avoid=marker.side==='left'?1:-1;
        this.barriers.push({id:this.barriers.length,s,x:-avoid*(9-this.challenge*.5),width:5+this.challenge,height:5,length:7});
      }
      for(const g of this.gaps)for(const x of [-6,0,6])authored.push({s:g.start-100,x,kind:'pad'});
      for(const pipe of this.pipes)for(let i=0,s=pipe.start+210;s<pipe.end-190;i++,s+=140){
        const x=this.wrapLane(s,i*Math.PI/2*28);authored.push({s,x,kind:i%2?'pickup':'pad'});
        if(i%3===1)this.barriers.push({id:this.barriers.length,s:s+60,x:this.wrapLane(s,x+44),width:6+this.challenge,height:4,length:8});
      }
      for(let s=e!.loopStart+150;s<e!.loopEnd-100;s+=220)authored.push({s,x:this.wrapLane(s,Math.sin(s)*44),kind:'pickup'});
      const homeStart=this.length-600;
      for(let s=homeStart;s<this.length-90;s+=step){const side=this.markers.length%2?'right':'left';this.markers.push({id:this.markers.length,s,x:0,side});authored.push({s:s+25,x:side==='left'?-8:8,kind:'pad'});}
      for(let c=0;c<2;c++){
        const line:BoostChain={id:this.boostChains.length,mode:c?'angled':'straight',pads:[]};
        for(let i=0;i<3+this.challenge%3;i++){
          const s=(c?e!.loopStart+100:gap.landingEnd+100)+i*220;
          if(!this.hasRoad(s)||!this.inFullPipe(s))continue;
          const x=this.wrapLane(s,c?-30+i*15:0),heading=c?Math.atan2(15,220):0;
          line.pads.push({s,x,heading});authored.push({s,x,heading,kind:'pad',chain:line.id});
        }if(line.pads.length)this.boostChains.push(line);
      }
      for(let i=0;i<this.gaps.length;i++)this.rings.push({id:this.rings.length,s:this.gaps[i].start+95,x:0,height:39,radius:10,ramp:i});
      if(stage==='slalom'||stage==='oblivion')for(const bank of this.banks)for(let s=bank.start+80;s<bank.end-50;s+=220){
        const x=-Math.sign(this.curvature(s))*8;
        authored.push({s,x,kind:'pad'},{s:s+65,x:-x,kind:'pickup'});
      }
      if(stage==='vortex'||stage==='oblivion'){
        for(const pipe of this.pipes){
          const line:BoostChain={id:this.boostChains.length,mode:'angled',pads:[]};
          for(let i=0,s=pipe.start+220;i<5&&s<pipe.end-190;i++,s+=210){
            const x=this.wrapLane(s,i*44),heading: number=Math.atan2(44,210);
            line.pads.push({s,x,heading});authored.push({s,x,heading,kind:'pad',chain:line.id});
          }
          if(line.pads.length>=3)this.boostChains.push(line);
        }
        for(let i=this.gaps.length;i<this.ramps.length;i++){
          const ramp=this.ramps[i],inside=this.interiorBend(ramp.s)>.999;
          authored.push({s:ramp.s-65,x:ramp.x,kind:'pad'});
          this.rings.push({id:this.rings.length,s:ramp.s+(inside?70:90),x:ramp.x,height:inside?11:17,radius:inside?6:8,ramp:i});
        }
      }
      // Populate connecting roads too, while preserving clear jump landings.
      const safe=(s:number)=>this.hasRoad(s)&&!this.gaps.some(g=>s>g.start-180&&s<g.landingEnd+70);
      const occupied=(s:number)=>authored.some(f=>Math.abs(this.signedDistance(f.s,s))<100)||this.markers.some(m=>Math.abs(this.signedDistance(m.s,s))<75);
      for(let s=420;s<this.length-260;s+=190){
        if(!safe(s)||occupied(s))continue;
        const pipe=this.inFullPipe(s),lane=pipe?this.wrapLane(s,Math.floor(s/190)%4*44):Math.sin(s/380)*8;
        authored.push({s,x:lane,kind:Math.floor(s/190)%3===0?'pickup':'pad'});
      }
      // Every jump has a deliberate three-pad runway, spaced about one second apart.
      for(const g of this.gaps){
        const line:BoostChain={id:this.boostChains.length,mode:'straight',pads:[]};
        for(const s of [g.start-380,g.start-240,g.start-100]){
          const pad={s,x:0,heading:0};line.pads.push(pad);
          const existing=authored.find(f=>f.kind==='pad'&&Math.abs(f.s-s)<.01&&f.x===0);
          if(existing)Object.assign(existing,{chain:line.id});else authored.push({...pad,kind:'pad',chain:line.id});
        }
        this.boostChains.push(line);
      }
      const returnStart=e!.descentStart+400,returnEnd=e!.descentEnd-250;
      for(let i=0;i<this.challenge*2;i++){
        const s=returnStart+(returnEnd-returnStart)*(i+1)/(this.challenge*2+1);
        if(!safe(s)||Math.abs(this.tubeShape(s))>.05||Math.abs(this.bankAngle(s))>.9)continue;
        this.barriers.push({id:this.barriers.length,s,x:i%2?-10:10,width:5+this.challenge,height:4,length:7});
        if(!occupied(s+90))authored.push({s:s+90,x:i%2?8:-8,kind:'pickup'});
      }
    }
    if(this.openEdges)authored.length=0; // Drift timing supplies all speed rewards in the lab.
    this.features = authored.map((f,id)=>({...f,id}));
  }

  profile(s: number) {
    if(this.openEdges)return {bank:0,depth:0,width:24,pipe:0};
    const u = wrap(s, this.length) / this.length;
    if(this.exterior){const inside=this.interiorBend(s),flatWidth=this.challenge?42-this.challenge*3:54;
      const gap=this.gaps.find(g=>wrap(s,this.length)>=g.start-80&&wrap(s,this.length)<=g.landingEnd);
      return {bank:this.bankAngle(s),depth:0,width:gap?gap.width:(this.stage==='slalom'?46:flatWidth)+(Math.PI*2*this.exterior.radius-(this.stage==='slalom'?46:flatWidth))*(this.tubeBend(s)+inside),pipe:inside};}
    if(this.stage === 'abyss') {
      const pipe=this.pipe!;
      const bend=smooth((wrap(s,this.length)-pipe.start)/180)*smooth((pipe.end-wrap(s,this.length))/180);
      const landing=this.drop!;
      const onDeck=wrap(s,this.length)>=landing.end && wrap(s,this.length)<=landing.landingEnd;
      const bank=1.48*pulse(u,.045,.145,.025)-1.35*pulse(u,.42,.52,.025)+1.1*pulse(u,.88,.95,.02);
      const bowl=pulse(u,.89,.93,.015);
      const swell=this.waves.length?pulse(wrap(s,this.length),this.waves[0].s-120,this.waves[2].s+140,80):0;
      return {bank: onDeck || bend>0 || (s>=landing.start-160 && s<landing.end) ? 0 : bank*(1-swell),depth:bowl*14,width:onDeck?40:34+(Math.PI*2*pipe.radius-34)*bend,pipe:bend};
    }
    const bank = 1.28 * pulse(u, .105, .245, .035) - 1.15 * pulse(u, .62, .74, .035) + .62 * pulse(u, .82, .91, .035);
    const halfpipe = pulse(u, .28, .445, .035);
    const bowl = pulse(u, .745, .82, .02);
    const landing = pulse(u, .51, .62, .014);
    return { bank, depth: halfpipe * 17 + bowl * 10, width: 30 + halfpipe * 12 + bowl * 8 + landing * 60, pipe: 0 };
  }

  base(s: number) {
    const scaled = wrap(s, this.length) / this.length * this.samples;
    const i = Math.floor(scaled), a = scaled - i;
    const position = this.points[i].clone().lerp(this.points[i + 1], a);
    if(this.drop) {
      const d=this.drop, local=wrap(s,this.length);
      if(local>=d.start && local<d.end) position.y=d.origin.y-d.height*smooth((local-d.start)/(d.end-d.start));
      if(local>=d.end && local<=d.landingEnd) position.y=d.origin.y-d.height;
    }
    const forward = this.tangents[i].clone().lerp(this.tangents[i + 1], a).normalize();
    if(this.drop && wrap(s,this.length)>=this.drop.start && wrap(s,this.length)<=this.drop.landingEnd) forward.y=0;
    forward.normalize();
    const normal = this.stage==='abyss' ? UP.clone().addScaledVector(forward,-UP.dot(forward)).normalize() : this.normals[i].clone().lerp(this.normals[i + 1], a).normalize();
    if(this.challenge||this.openEdges){
      // C2 position/frame interpolation removes acceleration jolts at sample edges.
      const a2=a*a,a3=a2*a,weights=[(1-a)**3/6,(3*a3-6*a2+4)/6,(-3*a3+3*a2+3*a+1)/6,a3/6];
      const derivatives=[-((1-a)**2)/2,1.5*a2-2*a,-1.5*a2+a+.5,a2/2];
      position.set(0,0,0);forward.set(0,0,0);normal.set(0,0,0);
      for(let j=0;j<4;j++){
        const index=wrap(i+j-1,this.samples);
        position.addScaledVector(this.points[index],weights[j]);
        forward.addScaledVector(this.points[index],derivatives[j]);
        normal.addScaledVector(this.normals[index],weights[j]);
      }
      forward.normalize();normal.addScaledVector(forward,-normal.dot(forward)).normalize();
    }
    if(this.challenge&&Math.abs(forward.y)<.9){
      const floor=UP.clone().addScaledVector(forward,-UP.dot(forward)).normalize(),blend=1-Math.abs(this.tubeShape(s));
      normal.lerp(floor,blend*blend).normalize();
    }
    const { bank, depth, width } = this.profile(s);
    normal.applyAxisAngle(forward, bank);
    const right = forward.clone().cross(normal).normalize();
    return { position, forward, normal, right, bank, depth, width };
  }

  position(s: number, x: number) {
    const b = this.base(s);
    if(this.exterior){
      const bend=this.tubeShape(s),r=this.exterior.radius;
      const angle=x*bend/r,radius=Math.abs(bend)>.00001?r/bend:0,lift=this.rampHeight(s,x);
      const lateral=radius?radius*Math.sin(angle):x,height=r+(radius?radius*(Math.cos(angle)-1):0);
      return b.position.addScaledVector(b.normal,height+lift*Math.cos(angle)).addScaledVector(b.right,lateral+lift*Math.sin(angle));
    }
    for(const wave of this.waves)b.position.y+=wave.height*Math.exp(-(((wrap(s,this.length)-wave.s)/wave.span)**2));
    const bend=this.profile(s).pipe;
    if(bend>0.00001 && this.pipe) {
      const radius=this.pipe.radius/bend, angle=x/radius;
      return b.position.addScaledVector(b.right,radius*Math.sin(angle)).addScaledVector(b.normal,radius*(1-Math.cos(angle)));
    }
    const ratio = clamp(x / (b.width / 2), -.997, .997);
    const height = b.depth * (1 - Math.sqrt(1 - ratio * ratio));
    // An optional center-line launch lip; the outer lanes are the bypass.
    const d = s - this.launch;
    const lip = !this.drop && d > -27 && d < 0 ? 5.5 * smooth((d + 27) / 27) * (1 - smooth((Math.abs(x) - 5) / 5)) : 0;
    return b.position.addScaledVector(b.right, x).addScaledVector(b.normal, height + lip);
  }

  surface(s: number, x: number): Surface {
    const { bank, depth, width } = this.profile(s);
    const position = this.position(s, x);
    let before = s - .35, after = s + .35;
    // Derivatives stay on one side of the authored takeoff edge.
    if (s < this.launch && after >= this.launch) after = this.launch - .0001;
    if (s >= this.launch && before < this.launch) before = this.launch;
    if(this.exterior)for(const ramp of this.ramps){
      const edge=s+this.signedDistance(s,ramp.s);
      if(s<edge && after>=edge)after=edge-.0001;
      if(s>=edge && before<edge)before=edge;
    }
    const longitudinal = this.position(after, x).sub(this.position(before, x)).multiplyScalar(1 / Math.max(.0001, after - before));
    const lateral = this.position(s, x + .025).sub(this.position(s, x - .025)).multiplyScalar(20);
    const normal = lateral.clone().cross(longitudinal).normalize();
    return { position, forward: longitudinal.clone().normalize(), right: lateral.clone().normalize(), normal,
      longitudinalScale: Math.max(.3, longitudinal.length()), lateralScale: Math.max(1, lateral.length()), width, bank, depth };
  }

  hasRoad(s: number) { const local=wrap(s,this.length); return (!this.drop || local<=this.drop.start || local>=this.drop.end)&&!this.gaps.some(g=>local>g.start&&local<g.end); }
  tubeBend(s:number){
    if(!this.exterior)return 0;
    let bend=1;
    for(const flat of this.flats){const fade=smooth((Math.abs(this.signedDistance(flat.center,s))-flat.length/2)/flat.transition);bend=this.challenge?bend*fade:Math.min(bend,fade);}
    const local=wrap(s,this.length);for(const pipe of this.pipes)bend*=1-smooth((local-pipe.start+220)/220)*smooth((pipe.end+220-local)/220);
    return bend;
  }
  interiorBend(s:number){const local=wrap(s,this.length);return this.exterior?this.pipes.reduce((bend,p)=>Math.max(bend,smooth((local-p.start)/180)*smooth((p.end-local)/180)),0):0;}
  tubeShape(s:number){return this.tubeBend(s)-this.interiorBend(s);}
  inFullPipe(s: number) { return this.exterior?this.tubeBend(s)>.999||this.interiorBend(s)>.999:this.profile(s).pipe > .999; }
  openingAhead(s:number){
    let distance=Infinity;
    for(const flat of this.flats)distance=Math.min(distance,this.distanceAhead(s,wrap(flat.center-flat.length/2-flat.transition,this.length)));
    if(this.exterior)for(const pipe of this.pipes)for(const edge of [pipe.start-220,pipe.end-180])distance=Math.min(distance,this.distanceAhead(s,edge));
    return distance;
  }
  wrapLane(s: number, x: number) { const radius=this.exterior?.radius??this.pipe?.radius;return radius && this.inFullPipe(s) ? wrap(x+Math.PI*radius,Math.PI*2*radius)-Math.PI*radius : x; }
  laneDelta(s: number, from: number, to: number) { return this.wrapLane(s,to-from); }
  rampHeight(s:number,x:number){
    let height=0;
    for(const ramp of this.ramps){
      const d=this.signedDistance(ramp.s,s),lane=Math.abs(this.laneDelta(s,ramp.x,x));
      if(d>=-ramp.length&&d<0)height+=ramp.height*smooth((d+ramp.length)/ramp.length)*(1-smooth((lane-ramp.width*.3)/(ramp.width*.2)));
    }
    return height;
  }

  // Local projection preserves route identity where the spiral overlaps itself.
  projectExterior(position:THREE.Vector3,hint:number){
    let s=hint;
    for(let i=0;i<5;i++){
      const b=this.base(s),delta=position.clone().sub(b.position).dot(b.forward);
      s+=clamp(delta,-30,30);
    }
    const b=this.base(s),bend=this.tubeShape(s),r=this.exterior!.radius;
    const residual=position.clone().sub(b.position),lateral=residual.dot(b.right),height=residual.dot(b.normal);
    if(Math.abs(bend)<.00001)return {s,x:lateral,radial:b.normal};
    const radius=r/bend,sign=Math.sign(radius),angle=Math.atan2(lateral*sign,(height-r+radius)*sign);
    return {s,x:angle*radius,radial:b.normal.clone().multiplyScalar(Math.cos(angle)).addScaledVector(b.right,Math.sin(angle)).normalize()};
  }
  projectDrop(position: THREE.Vector3) {
    const d=this.drop!; let lo=d.start, hi=d.landingEnd+80;
    const along=position.clone().sub(d.origin).dot(d.direction);
    for(let i=0;i<17;i++){const mid=(lo+hi)/2;if(this.base(mid).position.sub(d.origin).dot(d.direction)<along)lo=mid;else hi=mid;}
    const s=(lo+hi)/2, b=this.base(s);
    return {s,x:position.clone().sub(b.position).dot(d.right)};
  }

  curvature(s: number) {
    const a = this.base(s - 8), b = this.base(s + 8);
    return a.forward.clone().cross(b.forward).dot(a.normal) / 16;
  }

  bankAngle(s:number){
    if(!this.banking.length)return 0;
    const local=wrap(s,this.length);
    if(this.gaps.some(g=>local>g.start-170&&local<g.landingEnd+100))return 0;
    const scaled=local/this.length*this.samples,i=Math.floor(scaled),a=scaled-i,a2=a*a,a3=a2*a;
    const weights=[(1-a)**3/6,(3*a3-6*a2+4)/6,(-3*a3+3*a2+3*a+1)/6,a3/6];
    return weights.reduce((angle,weight,j)=>angle+weight*this.banking[wrap(i+j-1,this.samples)],0);
  }

  private rawBankAngle(s:number){
    if(!this.banks.length)return 0;
    const local=wrap(s,this.length),range=this.banks.find(b=>local>b.start&&local<b.end);
    if(!range||this.gaps.some(g=>local>g.start-170&&local<g.landingEnd+100))return 0;
    const tangent=(distance:number)=>{const scaled=wrap(distance,this.length)/this.length*this.samples,i=Math.floor(scaled);return this.tangents[i].clone().lerp(this.tangents[i+1],scaled-i).normalize();};
    const before=tangent(s-35),after=tangent(s+35);
    const curvature=before.clone().cross(after).dot(UP)/70;
    const fade=smooth((local-range.start)/120)*smooth((range.end-local)/120)*(1-Math.abs(this.tubeShape(s)))**2;
    return 1.22*Math.tanh(-curvature*300/1.22)*fade;
  }

  distanceAhead(from: number, to: number) { return wrap(to - from, this.length); }
  signedDistance(from: number, to: number) { const d = this.distanceAhead(from, to); return d > this.length / 2 ? d - this.length : d; }

  sectionName(s: number) {
    if(this.openEdges)return Math.abs(this.curvature(s+30))>.004?'ZIGZAG / HOLD SHIFT TO CARVE':'DRIFT LAB / RELEASE ON THE EXIT';
    const u = wrap(s, this.length) / this.length;
    if(this.exterior){
      const e=this.exterior,local=wrap(s,this.length);
      if(this.challenge){
        if(!this.hasRoad(s))return 'RIFT GAP / AIM FOR AMBER';
        if(Math.abs(this.bankAngle(s))>.18)return 'BANKED HAIRPIN / DRIFT TO BOOST';
        if(this.interiorBend(s)>.01)return 'REACTOR TUNNEL / 360°';
        if(local>e.loopStart&&local<e.loopEnd)return 'VORTEX LOOP / INVERTED';
        if(this.tubeBend(s)>.99)return 'EXTERIOR TUBE / ORBITAL';
      }
      if(this.interiorBend(s)>.001)return 'INNER REACTOR / 360° TUNNEL';
      for(const flat of this.flats)if(Math.abs(this.signedDistance(flat.center,s))<flat.length/2)return flat.name;
      if(this.tubeBend(s)<.999)return 'TUBE UNWRAP / CENTER YOUR LINE';
      if(local>=e.spiralStart&&local<=e.spiralEnd)return 'THE DOUBLE HELIX / ASCENT';
      if(local>=e.loopStart&&local<=e.loopEnd)return 'CROWN LOOP / INVERTED';
      if(local>=e.descentStart&&local<=e.descentEnd)return 'CORKSCREW / DESCENT';
      return u>.8?'ORBITAL S-BENDS':'ORBITAL APPROACH';
    }
    if(this.stage==='abyss') {
      const d=this.drop!,p=this.pipe!,local=wrap(s,this.length);
      if(this.waves.length && local>this.waves[0].s-130 && local<this.waves[2].s+130)return 'BOOST SWELL / WAVE RIDGES';
      if(local>=p.start && local<=p.end)return 'THE REACTOR / 360° PIPE';
      if(local>=d.start && local<d.end)return 'ABYSS / AIM FOR THE DECK';
      if(local>=d.end && local<d.landingEnd)return 'LANDING PLATFORM';
      if(local>=d.start-250 && local<d.start)return 'DROP APPROACH';
      if(u<.16)return 'VERTICAL ASCENT';
      if(u>.87)return 'CANYON DESCENT';
      return 'RAZOR RIDGE';
    }
    if (u < .1 || u > .94) return 'GRID STRAIGHT';
    if (u < .26) return 'BANKED ASCENT';
    if (u < .45) return 'THE HALFPIPE';
    if (u < .59) return 'SKYLINE LAUNCH';
    if (u < .745) return 'HIGHLINE CURVES';
    if (u < .825) return 'FOUNDRY BOWL';
    return 'DESCENT';
  }
}
