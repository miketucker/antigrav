import * as THREE from 'three';
import { Track, type StageId } from './track';
import { Race, SHIP_SPEED, driftTier, type RaceEvent } from './race';
import { ShipWake } from './wake';
import { NeonPost } from './post';
import { ENVIRONMENTS, environmentSky, mountainLandscape, abstractLandmarks } from './environment';
import { PALETTE, roadTexture, hazardTexture, boostTexture, facadeTexture, facadeLightsTexture, signTexture, createShip, createPickup, glowMaterial } from './art';
import { hologramChevrons } from './hologram';

interface Particle { position: THREE.Vector3; velocity: THREE.Vector3; life: number; max: number; color: THREE.Color }

export class World {
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(67, 1, .3, 15000);
  readonly renderer: THREE.WebGLRenderer;
  readonly post: NeonPost;
  track: Track;
  readonly course = new THREE.Group();
  readonly ships: THREE.Group[];
  readonly shadows: THREE.Mesh[];
  readonly wakes: ShipWake[];
  readonly exhaustTimers = Array(6).fill(0) as number[];
  readonly pickups = new Map<number, THREE.Group>();
  readonly pads: THREE.Mesh[] = [];
  readonly boostRings = new Map<number,THREE.Group>();
  readonly markerVisuals=new Map<number,THREE.Group>();
  readonly rocketVisuals = new Map<number, THREE.Mesh>();
  readonly mineVisuals = new Map<number, THREE.Group>();
  readonly particles: Particle[] = [];
  readonly particleMesh: THREE.Points;
  readonly particlePositions = new Float32Array(450 * 3);
  readonly particleColors = new Float32Array(450 * 3);
  readonly cameraTarget = new THREE.Vector3();
  readonly cameraUp = new THREE.Vector3(0,1,0);
  readonly ambient=new THREE.HemisphereLight();
  readonly sun=new THREE.DirectionalLight();
  sky:THREE.Group|null=null;
  renderedStage:StageId|null=null;
  time = 0;
  cameraRoll = .5;
  shake = true;
  shakeAmount = 0;

  constructor(canvas: HTMLCanvasElement, track: Track) {
    this.track = track;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.info.autoReset = false;
    this.scene.background = new THREE.Color(0x171a32);
    this.scene.add(this.ambient,this.sun);
    this.scene.add(this.course);
    this.buildTrack(); this.buildScenery();
    this.ships = Array.from({ length: 6 }, (_, i) => { const colors = [0xd6ff45,0xff6369,0x9b88ff,0x46ddf5,0xffa64d,0xf075d3]; const ship = createShip(colors[i],i); this.scene.add(ship); return ship; });
    const shadowGeometry = new THREE.CircleGeometry(3.5, 12);
    const shadowMaterial = new THREE.MeshBasicMaterial({ color: 0x182036, transparent: true, opacity: .24, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 });
    this.shadows = this.ships.map(() => { const mesh = new THREE.Mesh(shadowGeometry, shadowMaterial); this.scene.add(mesh); return mesh; });
    this.wakes = this.ships.map(() => new ShipWake(this.scene));
    const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position',new THREE.BufferAttribute(this.particlePositions,3)); geometry.setAttribute('color',new THREE.BufferAttribute(this.particleColors,3));
    this.particleMesh = new THREE.Points(geometry,new THREE.PointsMaterial({ size: .48, vertexColors: true, transparent: true, opacity: .9, blending: THREE.AdditiveBlending, sizeAttenuation: true, depthWrite: false })); this.particleMesh.frustumCulled = false; this.scene.add(this.particleMesh);
    this.post = new NeonPost(this.renderer,this.scene,this.camera);
    this.post.atmosphere.setTrack(track);
    this.resize();
  }

  resize() {
    const width = Math.max(1,innerWidth), height = Math.max(1,innerHeight);
    const pixelRatio = Math.min(window.devicePixelRatio || 1,2);
    this.renderer.setPixelRatio(pixelRatio);
    this.renderer.setSize(width,height,false);
    this.post.resize(width,height,pixelRatio);
    this.camera.aspect = width/height; this.camera.updateProjectionMatrix();
  }

  setTrack(track:Track) {
    this.renderedStage=null;
    this.clearEffects();
    const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),textures=new Set<THREE.Texture>();
    this.course.traverse(object=>{if(object instanceof THREE.Mesh||object instanceof THREE.Points){if(object instanceof THREE.InstancedMesh)object.dispose();geometries.add(object.geometry);for(const material of Array.isArray(object.material)?object.material:[object.material]){materials.add(material);for(const value of Object.values(material))if(value instanceof THREE.Texture)textures.add(value);}}});
    geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());this.course.clear();
    this.pickups.clear();this.pads.length=0;this.boostRings.clear();this.markerVisuals.clear();this.track=track;
    this.buildTrack();this.buildScenery();
    this.post.atmosphere.setTrack(track);
    this.cameraUp.set(0,1,0);this.cameraTarget.copy(track.surface(9,-4.2).position);
  }

  courseStations() {
    const steps=this.track.exterior?1800:this.track.pipe?1600:1200;
    const stations=Array.from({length:steps+1},(_,i)=>i/steps*this.track.length);
    if(this.track.drop)stations.push(this.track.drop.start,this.track.drop.end);
    for(const gap of this.track.gaps)stations.push(gap.start,gap.end,gap.landingEnd);
    for(const ramp of this.track.ramps)stations.push(ramp.s-ramp.length,ramp.s-.001,ramp.s);
    for(const flat of this.track.flats)for(const offset of [-flat.length/2-flat.transition,-flat.length/2,flat.length/2,flat.length/2+flat.transition])stations.push((flat.center+offset+this.track.length)%this.track.length);
    return stations.sort((a,b)=>a-b);
  }

  buildLanding() {
    const d=this.track.drop!,material=glowMaterial(0xffad67,10);
    for(const side of [-1,1]){
      const start=this.track.surface(d.end+2,side*19),end=this.track.surface(d.landingEnd-5,side*19);
      const delta=end.position.clone().sub(start.position);
      const rail=new THREE.Mesh(new THREE.BoxGeometry(.5,.5,delta.length()),material);
      rail.position.copy(start.position).addScaledVector(delta,.5).addScaledVector(start.normal,.45);
      rail.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),delta.normalize());this.course.add(rail);
      for(const s of [d.end+3,d.end+90,d.landingEnd-5]){
        const f=this.track.surface(s,side*22);
        const beacon=new THREE.Mesh(new THREE.BoxGeometry(.8,28,.8),material);beacon.position.copy(f.position).addScaledVector(f.normal,14);this.course.add(beacon);
      }
    }
    for(const s of [d.end+5,d.end+90,d.end+190,d.end+290,d.end+390]){
      const f=this.track.surface(s,0);
      const line=new THREE.Mesh(new THREE.PlaneGeometry(35,.6),material);line.position.copy(f.position).addScaledVector(f.normal,.17);line.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.forward,f.normal));this.course.add(line);
    }
    const f=this.track.surface(d.end+55,0);
    const sign=new THREE.Mesh(new THREE.PlaneGeometry(34,8),new THREE.MeshBasicMaterial({map:signTexture('LAND HERE // >>>','#ffad67'),side:THREE.DoubleSide}));sign.position.copy(f.position).addScaledVector(f.normal,.18);sign.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.forward,f.normal));this.course.add(sign);
    // Low-poly canyon buttresses frame the void without occupying the flight path.
    const rock=new THREE.MeshLambertMaterial({color:0x34354c,flatShading:true});
    for(let i=0;i<18;i++){
      const h=220+(i%5)*55,side=i%2?1:-1;
      const spire=new THREE.Mesh(new THREE.CylinderGeometry(18,65,h,5),rock);spire.position.copy(d.origin).addScaledVector(d.direction,120+i*45).addScaledVector(d.right,side*(140+(i%3)*35));spire.position.y=-450+h/2;this.course.add(spire);
    }
  }

  strip(offset: (s: number) => number, size: number, material: THREE.Material, height = 0, repeat = 12,visible:(s:number)=>boolean=()=>true) {
    const positions: number[] = [], uvs: number[] = [], indices: number[] = [];
    const stations=this.courseStations(),steps=stations.length-1;
    for (let i = 0; i <= steps; i++) {
      const s = stations[i];
      for (const side of [-1,1]) { const f = this.track.surface(s, offset(s) + side * size / 2); const p = f.position.addScaledVector(f.normal, height); positions.push(p.x,p.y,p.z); uvs.push((side+1)/2, s/repeat); }
      if (i < steps && this.track.hasRoad((s+stations[i+1])/2) && visible((s+stations[i+1])/2)) { const a = i*2; indices.push(a,a+1,a+2,a+1,a+3,a+2); }
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3)); geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2)); geo.setIndex(indices); geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo,material); this.course.add(mesh); return mesh;
  }

  buildTrack() {
    const positions: number[] = [], uvs: number[] = [], indices: number[] = [];
    const stations=this.courseStations(),steps=stations.length-1;
    const cross=this.track.pipe||this.track.exterior?Array.from({length:33},(_,i)=>i/16-1):[-1,-.97,-.88,-.73,-.5,-.25,0,.25,.5,.73,.88,.97,1];
    for (let i=0;i<=steps;i++) {
      const s=stations[i], width=this.track.profile(s).width;
      for (const ratio of cross) { const p=this.track.position(s,ratio*width/2); positions.push(p.x,p.y,p.z); uvs.push((ratio+1)/2,s/24); }
      if(i<steps && this.track.hasRoad((s+stations[i+1])/2)) for(let j=0;j<cross.length-1;j++){ const a=i*cross.length+j,b=a+cross.length; indices.push(a,b,a+1,a+1,b,b+1); }
    }
    const geometry=new THREE.BufferGeometry(); geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3)); geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2)); geometry.setIndex(indices); geometry.computeVertexNormals();
    this.course.add(new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({map:roadTexture(),color:this.track.theme?.road??0xffffff,side:THREE.DoubleSide})));
    const hazard=new THREE.MeshLambertMaterial({map:hazardTexture(),side:THREE.DoubleSide});
    const cyan=glowMaterial(PALETTE.cyan,10,{side:THREE.DoubleSide});
    const guide=glowMaterial(0x4ac7ec,9,{side:THREE.DoubleSide});
    if(!this.track.exterior)for(const side of [-1,1]) {
      this.strip(s=>side*(this.track.profile(s).width/2-.8),1.4,hazard,.08,5);
      this.strip(s=>side*(this.track.profile(s).width/2-.18),.4,cyan,.45,5);
      this.strip(s=>side*this.track.profile(s).width*.24,.22,guide,.12,5);
    }
    if(this.track.pipe) for(const ratio of [-.75,-.5,0,.5,.75]) this.strip(s=>ratio*this.track.profile(s).width/2,.28,glowMaterial(Math.abs(ratio)===.75?0xb89aff:0x66e5e9,9,{side:THREE.DoubleSide}),.14,12,s=>!this.track.exterior||this.track.interiorBend(s)>.01);
    if(this.track.exterior){
      for(let lane=-4;lane<4;lane++)this.strip(s=>lane/4*this.track.profile(s).width/2,.32,glowMaterial(lane%2?(this.track.theme?.secondary??0xffa66c):(this.track.theme?.accent??0x66e5e9),8,{side:THREE.DoubleSide}),.15);
      for(const side of [-1,1])this.strip(s=>side*(this.track.profile(s).width/2-.6),.65,glowMaterial(0xffbd72,10,{side:THREE.DoubleSide}),.55,12,s=>this.track.tubeBend(s)<.999);
    }
    const edgeMaterial = new THREE.MeshLambertMaterial({color:0x343b54,side:THREE.DoubleSide});
    if(!this.track.exterior)for(const side of [-1,1]) {
      const p:number[]=[],idx:number[]=[];
      for(let i=0;i<=steps;i++){ const s=stations[i], f=this.track.surface(s,side*this.track.profile(s).width/2); p.push(f.position.x,f.position.y,f.position.z,f.position.x-f.normal.x*3,f.position.y-f.normal.y*3,f.position.z-f.normal.z*3); if(i<steps && this.track.hasRoad((s+stations[i+1])/2)){const a=i*2;idx.push(a,a+2,a+1,a+1,a+2,a+3);} }
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setIndex(idx);g.computeVertexNormals();this.course.add(new THREE.Mesh(g,edgeMaterial));
    }
    const padMaterial=glowMaterial(0xffffff,8,{map:boostTexture(),side:THREE.DoubleSide});
    for(const f of this.track.features) {
      const surface=this.track.surface(f.s,f.x);
      if(f.kind==='pad') {
        const mesh=new THREE.Mesh(new THREE.PlaneGeometry(6.3,10),padMaterial); mesh.position.copy(surface.position).addScaledVector(surface.normal,.14); mesh.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(surface.right,surface.forward,surface.normal));mesh.rotateZ(-(f.heading??0));this.course.add(mesh);this.pads.push(mesh);
      } else { const group=createPickup();group.position.copy(surface.position).addScaledVector(surface.normal,3.2);group.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(surface.right,surface.normal,surface.forward.clone().negate()));group.userData.baseRotation=group.quaternion.clone();this.course.add(group);this.pickups.set(f.id,group); }
    }
    if(!this.track.features.some(f=>f.kind==='pad')){padMaterial.map?.dispose();padMaterial.dispose();}
    // Grid markings and the start gantry.
    const checkerCanvas=document.createElement('canvas');checkerCanvas.width=checkerCanvas.height=32;const c=checkerCanvas.getContext('2d')!;
    for(let y=0;y<4;y++)for(let x=0;x<8;x++){c.fillStyle=(x+y)%2?'#172033':'#f1f0db';c.fillRect(x*4,y*8,4,8);}
    const checker=new THREE.CanvasTexture(checkerCanvas);checker.magFilter=THREE.NearestFilter;checker.colorSpace=THREE.SRGBColorSpace;
    const start=new THREE.Mesh(new THREE.PlaneGeometry(this.track.openEdges?this.track.profile(1).width:28,4),new THREE.MeshBasicMaterial({map:checker,side:THREE.DoubleSide}));const sf=this.track.surface(1,0);start.position.copy(sf.position).addScaledVector(sf.normal,.13);start.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(sf.right,sf.forward,sf.normal));this.course.add(start);
    this.gantry(25,'VECTOR // 99','#d6ff45');
    if(this.track.exterior){
      const e=this.track.exterior;
      this.gantry(e.spiralStart+65,this.track.challenge?'REACTOR // 360':'DOUBLE HELIX','#ffad67');
      this.gantry(e.loopStart+80,this.track.challenge?'VORTEX // LOOP':'CROWN // LOOP','#c5acff');
      this.gantry(e.descentStart+70,this.track.challenge?'FINAL SECTOR':'CORKSCREW','#66e5e9');
      this.buildExteriorRamps();
      this.buildBoostRings();
      for(const pipe of this.track.pipes)this.gantry(pipe.start-110,'INNER REACTOR','#c5acff');
      if(!this.track.challenge)for(const flat of this.track.flats)this.gantry(flat.center-flat.length/2-flat.transition-50,'UNWRAP // CENTER','#ffbd72');
    }else if(this.track.drop && this.track.pipe){
      this.gantry(this.track.drop.start-95,'ABYSS // 5 SEC','#ffad67');
      this.gantry(this.track.pipe.start-85,'REACTOR // 360','#c5acff');
      this.gantry(this.track.waves[0].s-135,'BOOST SWELL','#d6ff45');
      this.buildLanding();
    } else if(!this.track.openEdges) {
      this.gantry(this.track.length*.274,'THE HALFPIPE','#c5acff');
      this.gantry(this.track.launch-38,'LAUNCH ZONE','#ff9a6c');
      this.gantry(this.track.length*.74,'FOUNDRY BOWL','#66e5e9');
    }
    this.buildChallenges();
    if(this.track.banks.length){
      for(const bank of this.track.banks){
        this.gantry(bank.start+45,'DRIFT // RELEASE',this.track.stage==='slalom'?'#65edff':'#ff6688');
        for(let s=bank.start+100;s<bank.end-90;s+=130){
          if(Math.abs(this.track.bankAngle(s))<.25)continue;
          const side=-Math.sign(this.track.bankAngle(s)),f=this.track.surface(s,side*(this.track.profile(s).width/2-2));
          const sign=new THREE.Mesh(new THREE.PlaneGeometry(11,3.5),glowMaterial(0xffffff,3,{map:signTexture(side>0?'<<< DRIFT':'DRIFT >>>',this.track.stage==='slalom'?'#ff79ce':'#ffd071'),side:THREE.DoubleSide}));
          sign.position.copy(f.position).addScaledVector(f.normal,5);sign.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.normal,f.forward.clone().negate()));this.course.add(sign);
        }
      }
    }
    if(this.track.exterior||this.track.openEdges)return;
    const supports=new THREE.InstancedMesh(new THREE.BoxGeometry(4,1,5),new THREE.MeshLambertMaterial({color:0x47506b}),55);
    const matrix=new THREE.Matrix4();
    // Omit gap supports; zero-axis instances have singular normal transforms.
    let supportCount=0;
    for(let i=0;i<55;i++){
      const s=i/55*this.track.length;if(!this.track.hasRoad(s))continue;
      const b=this.track.base(s),h=b.position.y+(this.track.drop?450:62);
      matrix.compose(new THREE.Vector3(b.position.x,b.position.y-h/2-3,b.position.z),new THREE.Quaternion(),new THREE.Vector3(1,h,1));supports.setMatrixAt(supportCount++,matrix);
    }
    supports.count=supportCount;this.course.add(supports);
  }

  buildChallenges(){
    const frame=(s:number,x:number)=>{const f=this.track.surface(s,x),group=new THREE.Group();group.position.copy(f.position);group.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.normal,f.forward.clone().negate()));return group;};
    for(const marker of this.track.markers){
      const group=frame(marker.s,marker.x);group.add(hologramChevrons(marker.side,marker.id*.73));
      this.course.add(group);this.markerVisuals.set(marker.id,group);
    }
    const bodyMaterial=new THREE.MeshLambertMaterial({color:0x992b4a,map:hazardTexture(),flatShading:true}),danger=glowMaterial(0xff466c,9);
    for(const obstacle of this.track.barriers){
      const group=frame(obstacle.s,obstacle.x),body=new THREE.Mesh(new THREE.BoxGeometry(obstacle.width,obstacle.height,obstacle.length),bodyMaterial);body.position.y=obstacle.height/2;group.add(body);
      for(const side of [-1,1]){const edge=new THREE.Mesh(new THREE.BoxGeometry(.3,obstacle.height+.3,obstacle.length+.3),danger);edge.position.set(side*obstacle.width/2,obstacle.height/2,0);group.add(edge);}
      const top=new THREE.Mesh(new THREE.BoxGeometry(obstacle.width,.3,obstacle.length),danger);top.position.y=obstacle.height;group.add(top);
      const label=new THREE.Mesh(new THREE.PlaneGeometry(obstacle.width-1,2.8),new THREE.MeshBasicMaterial({map:signTexture('X / X','#ff466c'),side:THREE.DoubleSide}));label.position.set(0,obstacle.height/2,obstacle.length/2+.05);group.add(label);this.course.add(group);
    }
    for(const [index,gap] of this.track.gaps.entries()){
      this.gantry(gap.start-140,`JUMP ${index+1} // AIM`,'#ffbd72');
      for(const s of [gap.end+2,gap.end+60,gap.landingEnd-20]){
        const group=frame(s,0),line=new THREE.Mesh(new THREE.BoxGeometry(gap.width,.25,.5),glowMaterial(0xffbd72,10));line.position.y=.2;group.add(line);
        for(const side of [-1,1]){const post=new THREE.Mesh(new THREE.BoxGeometry(.45,15,.45),glowMaterial(0xffbd72,8));post.position.set(side*gap.width/2,7.5,0);group.add(post);}this.course.add(group);
      }
      const f=this.track.surface(gap.end+25,0),label=new THREE.Mesh(new THREE.PlaneGeometry(gap.width-2,8),new THREE.MeshBasicMaterial({map:signTexture('LAND HERE >>>','#ffbd72'),side:THREE.DoubleSide}));label.position.copy(f.position).addScaledVector(f.normal,.16);label.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.forward,f.normal));this.course.add(label);
    }
  }

  buildBoostRings(){
    const material=glowMaterial(0xd6ff45,12),core=glowMaterial(0xeaffc8,9);
    for(const ring of this.track.rings){
      const f=this.track.surface(ring.s,ring.x),group=new THREE.Group();
      group.position.copy(f.position).addScaledVector(f.normal,ring.height);
      group.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.normal,f.forward.clone().negate()));
      group.add(new THREE.Mesh(new THREE.TorusGeometry(ring.radius,.38,4,20),material));
      group.add(new THREE.Mesh(new THREE.TorusGeometry(ring.radius-.7,.14,3,20),core));
      for(let i=0;i<4;i++){
        const angle=i*Math.PI/2,bar=new THREE.Mesh(new THREE.BoxGeometry(1.6,.35,.5),material);bar.position.set(Math.cos(angle)*ring.radius,Math.sin(angle)*ring.radius,0);bar.rotation.z=angle;group.add(bar);
      }
      this.course.add(group);this.boostRings.set(ring.id,group);
    }
  }

  buildExteriorRamps(){
    const material=glowMaterial(0xffa45c,9,{side:THREE.DoubleSide});
    for(const ramp of this.track.ramps){
      // Surface-following edge ribbons expose the raised lip on any tube lane.
      for(const side of [-1,1]){
        const points:number[]=[],indices:number[]=[];
        for(let i=0;i<=20;i++){
          const s=ramp.s-ramp.length+i/20*(ramp.length-.01);
          for(const edge of [-.18,.18]){
            const f=this.track.surface(s,ramp.x+side*ramp.width*.3+edge),p=f.position.addScaledVector(f.normal,.18);points.push(p.x,p.y,p.z);
          }
          if(i<20){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
        }
        const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(points,3));g.setIndex(indices);g.computeVertexNormals();this.course.add(new THREE.Mesh(g,material));
      }
      const f=this.track.surface(ramp.s-12,ramp.x);
      const marker=new THREE.Mesh(new THREE.PlaneGeometry(9,8),new THREE.MeshBasicMaterial({map:signTexture('JUMP >>>','#ffad67'),side:THREE.DoubleSide}));
      marker.position.copy(f.position).addScaledVector(f.normal,.22);marker.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.forward,f.normal));this.course.add(marker);
    }
    // Structural collars remain inside the racing surface.
    const collarMaterial=new THREE.MeshLambertMaterial({color:0x39425a,flatShading:true});
    for(let s=0;s<this.track.length;s+=150){if(this.track.tubeBend(s)<.999)continue;const b=this.track.base(s),collar=new THREE.Mesh(new THREE.TorusGeometry(this.track.exterior!.radius-2,1.4,4,24),collarMaterial);collar.position.copy(b.position);collar.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),b.forward);this.course.add(collar);}
  }

  gantry(s:number,text:string,color:string){
    const b=this.track.exterior?{...this.track.surface(s,0),width:26}:this.track.base(s),group=new THREE.Group();group.position.copy(b.position);group.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(b.right,b.normal,b.forward.clone().negate()));
    const material=new THREE.MeshLambertMaterial({color:0x222b42});
    for(const side of [-1,1]){const post=new THREE.Mesh(new THREE.BoxGeometry(1.5,15,2),material);post.position.set(side*(b.width/2+1),7.5,0);group.add(post);}
    const beam=new THREE.Mesh(new THREE.BoxGeometry(b.width+5,3,2),material);beam.position.y=15;group.add(beam);
    const sign=new THREE.Mesh(new THREE.PlaneGeometry(24,6),new THREE.MeshBasicMaterial({map:signTexture(text,color),side:THREE.DoubleSide}));sign.position.set(0,15,1.1);group.add(sign);
    for(const side of [-1,1]){const bar=new THREE.Mesh(new THREE.BoxGeometry(.5,11,.4),glowMaterial(color,7));bar.position.set(side*(b.width/2+.1),7.5,1.2);group.add(bar);}
    this.course.add(group);
  }

  buildScenery(){
    let seed=123;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)|0;return(seed>>>0)/4294967296;};
    const theme=ENVIRONMENTS[this.track.stage];
    this.ambient.color.setHex(theme.ambient);this.ambient.groundColor.setHex(theme.groundLight);this.ambient.intensity=theme.ambientIntensity;
    this.sun.color.setHex(theme.sunLight);this.sun.intensity=theme.sunIntensity;this.sun.position.set(...theme.sunDirection).multiplyScalar(1000);
    this.scene.background=new THREE.Color(theme.skyTop);
    const abyss=this.track.stage!=='foundry',floor=-7000,cityZ=this.track.exterior?-500:abyss?-1000:0;
    const ground=new THREE.Mesh(new THREE.PlaneGeometry(22000,22000),new THREE.MeshLambertMaterial({color:theme.haze}));ground.rotation.x=-Math.PI/2;ground.position.y=floor;this.course.add(ground);
    const facade=facadeTexture(),lights=facadeLightsTexture();facade.repeat.y=lights.repeat.y=80;
    const buildingMaterial=new THREE.MeshLambertMaterial({map:facade,color:this.track.theme?.city??0x8895af,flatShading:true,emissive:0xffffff,emissiveMap:lights,emissiveIntensity:6});
    const buildingCount=theme.buildings,nearbyCount=theme.nearby;
    const buildings=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),buildingMaterial,buildingCount);buildings.name='skyline-buildings';
    const cityLines=new THREE.InstancedMesh(new THREE.BoxGeometry(1,1,1),glowMaterial(0xffffff,1),buildingCount*3);
    const beacons=new THREE.InstancedMesh(new THREE.OctahedronGeometry(1),glowMaterial(0xff9460,10),buildingCount);
    const matrix=new THREE.Matrix4();
    for(let i=0;i<buildingCount;i++){
      const angle=i/buildingCount*Math.PI*2+rand()*.05,radius=(abyss?1600:920)+rand()*900,top=(this.track.exterior?750:400)+rand()*(this.track.exterior?1450:1100),h=top-floor;
      const rotation=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),rand()>.5?0:Math.PI/4),width=60+rand()*120,depth=60+rand()*120;
      const position=new THREE.Vector3(Math.cos(angle)*radius,h/2+floor,Math.sin(angle)*radius+cityZ),clearance=Math.hypot(width,depth)/2+110;
      if(this.track.stage==='oblivion'){
        const sunAngle=Math.atan2(theme.sunDirection[0],theme.sunDirection[2]),heading=Math.atan2(position.x,position.z),delta=Math.atan2(Math.sin(heading-sunAngle),Math.cos(heading-sunAngle));
        if(Math.abs(delta)<.25){const distance=Math.hypot(position.x,position.z),openAngle=sunAngle+(delta<0?-.34:.34);position.x=Math.sin(openAngle)*distance;position.z=Math.cos(openAngle)*distance;}
      }
      while(this.track.points.some(p=>Math.hypot(p.x-position.x,p.z-position.z)<clearance)){position.x+=Math.cos(angle)*100;position.z+=Math.sin(angle)*100;}
      matrix.compose(position,rotation,new THREE.Vector3(width,h,depth));buildings.setMatrixAt(i,matrix);
      buildings.setColorAt(i,new THREE.Color().setHSL(.64+rand()*.09,.13,.6+rand()*.2));
      const neon=new THREE.Color(this.track.theme?(i%2?this.track.theme.secondary:this.track.theme.accent):[0x58d9ff,0x9a75ff,0xffad67][i%3]).multiplyScalar(8);
      for(let line=0;line<3;line++){
        const vertical=line===2;
        const offset=vertical?new THREE.Vector3(width/2+.3,h*.075,0):new THREE.Vector3(0,h/2-2,(line?1:-1)*(depth/2+.3));
        matrix.compose(offset.applyQuaternion(rotation).add(position),rotation,vertical?new THREE.Vector3(.7,h*.85,1.1):new THREE.Vector3(width*.85,.8,.9));
        cityLines.setMatrixAt(i*3+line,matrix);cityLines.setColorAt(i*3+line,neon);
      }
      matrix.compose(new THREE.Vector3(position.x,h+floor+3,position.z),rotation,new THREE.Vector3(2.2,2.2,2.2));beacons.setMatrixAt(i,matrix);
    }if(buildingCount)this.course.add(buildings,cityLines,beacons);
    else{buildings.dispose();cityLines.dispose();beacons.dispose();buildings.geometry.dispose();cityLines.geometry.dispose();beacons.geometry.dispose();buildingMaterial.dispose();facade.dispose();lights.dispose();(cityLines.material as THREE.Material).dispose();(beacons.material as THREE.Material).dispose();}
    for(let i=0;i<nearbyCount;i++){
      const s=i/nearbyCount*this.track.length; if(!this.track.hasRoad(s))continue;const b=this.track.base(s),side=i%2?1:-1;
      const horizontal=new THREE.Vector3(b.right.x,0,b.right.z);if(horizontal.lengthSq()<.01)horizontal.set(1,0,0);horizontal.normalize();
      const position=b.position.clone().addScaledVector(horizontal,side*(this.track.exterior?180:90)+rand()*70);
      for(let attempt=0;attempt<8;attempt++){
        if(!this.track.points.some(p=>Math.hypot(p.x-position.x,p.z-position.z)<145))break;
        position.addScaledVector(horizontal,side*75);
      }
      const top=b.position.y+45+rand()*90,height=top-floor;
      const tower=new THREE.Mesh(new THREE.BoxGeometry(36,height,48),buildingMaterial);tower.name='trackside-tower';tower.position.set(position.x,(top+floor)/2,position.z);this.course.add(tower);
      const towerHeight=(tower.geometry.parameters as {height:number}).height;
      const light=new THREE.Mesh(new THREE.BoxGeometry(.7,towerHeight*.85,.7),glowMaterial(this.track.theme?.accent??(i%2?0xffad67:0x66e5e9),7));light.position.copy(tower.position).add(new THREE.Vector3(18.3,towerHeight*.075,24.3));this.course.add(light);
      if(i%3===0){const sign=new THREE.Mesh(new THREE.PlaneGeometry(22,6),new THREE.MeshBasicMaterial({map:signTexture(['APEX ENERGY','ZERO / G','ORBITAL','VECTOR 99'][i%4],i%2?'#ff9a6c':'#d6ff45'),side:THREE.DoubleSide}));sign.position.set(position.x,top-12,position.z);sign.lookAt(b.position);this.course.add(sign);}
    }
    if(theme.mountains!=='none')this.course.add(mountainLandscape(this.track,theme));
    if(theme.abstract!=='none')this.course.add(abstractLandmarks(this.track,theme));
    this.sky=environmentSky(theme);this.course.add(this.sky);
  }

  burst(event:RaceEvent){
    if(event.kind==='hit'||event.kind==='wall'||event.kind==='land'||event.kind==='boost'||event.kind==='pickup'){
      const count=event.kind==='hit'?28:event.kind==='boost'?12:9;
      for(let i=0;i<count;i++){if(this.particles.length>=450)this.particles.shift();this.particles.push({position:event.position.clone(),velocity:new THREE.Vector3((Math.random()-.5)*15,Math.random()*12,(Math.random()-.5)*15),life:.4+Math.random()*.5,max:1,color:new THREE.Color(event.kind==='hit'?0xffad67:event.kind==='pickup'?0xb89aff:event.kind==='boost'?PALETTE.lime:0xeee0bb)});}
    }
    if(event.player&&(event.kind==='hit'||event.kind==='wall'||event.kind==='land'))this.shakeAmount=event.kind==='hit'?.5:.2;
  }

  update(race:Race,dt:number,alpha:number){
    this.time+=dt;
    const effectsDt=race.phase==='paused'?0:dt;
    for(const ship of race.ships){const mesh=this.ships[ship.id];mesh.visible=(race.phase!=='menu'||ship.id===0)&&(ship.recovery<=0||Math.sin(this.time*22)>0);mesh.scale.setScalar(1);mesh.position.copy(ship.previous).lerp(ship.position,alpha);mesh.quaternion.copy(ship.rotation);
      const f=this.track.surface(ship.s,ship.x),shadow=this.shadows[ship.id];shadow.visible=mesh.visible&&!ship.falling&&this.track.hasRoad(ship.s)&&race.phase!=='menu';shadow.position.copy(f.position).addScaledVector(f.normal,.08);shadow.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.forward,f.normal));const spread=1+ship.airHeight*.025;shadow.scale.set(spread,1.5*spread,1);
      for(const side of [-1,1]){const flame=mesh.getObjectByName(`flame${side}`) as THREE.Mesh;flame.visible=ship.speed>2||race.phase==='menu';flame.scale.y=(ship.boost>0?2.6:.55+ship.speed/SHIP_SPEED*.8)+Math.sin(this.time*43+ship.id)*.12;(flame.material as THREE.MeshBasicMaterial).color.setHex(ship.boost>0?0xd6ff45:0x77efff).multiplyScalar(8);
        const core=mesh.getObjectByName(`engineCore${side}`) as THREE.Mesh;core.visible=flame.visible;core.scale.y=ship.boost>0?1.7:1;
      }
      this.wakes[ship.id].update(ship,mesh,this.camera,effectsDt,race.phase==='racing'||race.phase==='paused');
      if(race.phase==='racing'&&ship.recovery<=0&&ship.speed>8){
        this.exhaustTimers[ship.id]+=effectsDt;
        while(this.exhaustTimers[ship.id]>.035){this.exhaustTimers[ship.id]-=.035;
          for(const side of [-1,1])if(this.particles.length<450){const position=new THREE.Vector3(side*2.15,-.1,4).applyQuaternion(mesh.quaternion).add(mesh.position);this.particles.push({position,velocity:f.forward.clone().multiplyScalar(-8).addScaledVector(f.normal,(Math.random()-.5)*2),life:ship.boost>0?.5:.25,max:ship.boost>0?.5:.25,color:new THREE.Color(ship.boost>0?0xd6ff45:0x63dfff)});
            if(ship.drifting&&this.particles.length<450){const tier=driftTier(ship.driftCharge),color=[0x65dcff,0x65dcff,0xffbd72,0xc9a0ff][tier],position=mesh.position.clone().addScaledVector(f.right,-ship.driftDirection*2.8).addScaledVector(f.normal,-1);this.particles.push({position,velocity:f.forward.clone().multiplyScalar(-18).addScaledVector(f.right,-ship.driftDirection*9).addScaledVector(f.normal,2),life:.35,max:.35,color:new THREE.Color(color)});}
          }
        }
      }
    }
    for(const [id,mesh] of this.pickups){mesh.visible=!race.pickupTimers.has(id);mesh.quaternion.copy(mesh.userData.baseRotation as THREE.Quaternion).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),this.time*1.2));mesh.children[0].rotation.z=this.time*.8;mesh.children[2].scale.setScalar(1+Math.sin(this.time*2.5+id)*.1);}
    for(const [id,group] of this.boostRings){
      group.userData.pulse=(group.userData.pulse??0)+effectsDt;
      group.children[0].scale.setScalar(1+Math.sin(group.userData.pulse*4+id)*.025);
      group.visible=!race.ringTimers.has(`${race.player.id}:${id}`);
    }
    for(const [id,group] of this.markerVisuals){
      const material=(group.children[0] as THREE.Mesh).material as THREE.ShaderMaterial;
      material.uniforms.time.value+=effectsDt;material.uniforms.intensity.value=race.markerTimers.has(`${race.player.id}:${id}`)?.16:1;
    }
    for(const [id,mesh] of this.rocketVisuals)if(!race.rockets.some(r=>r.id===id)){this.scene.remove(mesh);this.rocketVisuals.delete(id);mesh.geometry.dispose();(mesh.material as THREE.Material).dispose();}
    for(const r of race.rockets){let mesh=this.rocketVisuals.get(r.id);if(!mesh){mesh=new THREE.Mesh(new THREE.ConeGeometry(.4,2.5,5),glowMaterial(0xffb077,10));this.rocketVisuals.set(r.id,mesh);this.scene.add(mesh);}mesh.position.copy(r.position);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),r.velocity.clone().normalize());
      if(effectsDt>0&&this.particles.length<450)this.particles.push({position:r.position.clone(),velocity:new THREE.Vector3(0,.5,0),life:.35,max:.35,color:new THREE.Color(0xff9c68)});
    }
    for(const[id,mesh]of this.mineVisuals)if(!race.mines.some(m=>m.id===id)){this.scene.remove(mesh);this.mineVisuals.delete(id);mesh.traverse(child=>{if(child instanceof THREE.Mesh){child.geometry.dispose();(child.material as THREE.Material).dispose();}});}
    for(const m of race.mines){let group=this.mineVisuals.get(m.id);if(!group){group=new THREE.Group();const body=new THREE.Mesh(new THREE.CylinderGeometry(1.5,1.8,.6,6),new THREE.MeshLambertMaterial({color:0xff717d,emissive:0x660a18}));group.add(body);const ring=new THREE.Mesh(new THREE.TorusGeometry(2,.16,4,12),glowMaterial(0xff5a79,12));ring.rotation.x=Math.PI/2;group.add(ring);this.mineVisuals.set(m.id,group);this.scene.add(group);}group.position.copy(m.position);group.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),m.normal);group.children[1].scale.setScalar(1+Math.sin(this.time*9)*.1);}
    for(const p of this.particles){p.life-=effectsDt;p.position.addScaledVector(p.velocity,effectsDt);p.velocity.y-=effectsDt*8;}this.particles.splice(0,this.particles.length,...this.particles.filter(p=>p.life>0));
    this.particles.forEach((p,i)=>{const fade=Math.min(1,p.life/p.max)*6;this.particlePositions.set([p.position.x,p.position.y,p.position.z],i*3);this.particleColors.set([p.color.r*fade,p.color.g*fade,p.color.b*fade],i*3);});
    this.particleMesh.geometry.setDrawRange(0,this.particles.length);this.particleMesh.geometry.attributes.position.needsUpdate=true;this.particleMesh.geometry.attributes.color.needsUpdate=true;
    this.updateCamera(race,dt);
    this.sky?.position.copy(this.camera.position);
    this.renderer.info.reset();this.post.render(effectsDt);this.renderedStage=this.track.stage;
  }

  updateCamera(race:Race,dt:number){
    if(race.phase==='menu'){
      const b=this.track.surface(112,0);this.ships[0].position.copy(b.position).addScaledVector(b.normal,2.2);this.ships[0].scale.setScalar(2.2);this.ships[0].quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(b.right,b.normal,b.forward.clone().negate()));
      const orbit=.4*Math.sin(this.time*.15);const pos=b.position.clone().addScaledVector(b.forward,21).addScaledVector(b.right,21+orbit).addScaledVector(b.normal,9);
      this.camera.position.copy(pos);const target=b.position.clone().addScaledVector(b.right,13).addScaledVector(b.normal,2);this.camera.up.set(0,1,0);this.camera.lookAt(target);this.camera.fov=58;this.camera.updateProjectionMatrix();return;
    }
    const ship=race.player,f=this.track.surface(ship.s,ship.x),mesh=this.ships[0];
    const forward=ship.dropFlight?ship.flightVelocity.clone().normalize():f.forward;
    const normal=ship.dropFlight?new THREE.Vector3(0,1,0):f.normal;
    const desired=mesh.position.clone().addScaledVector(forward,ship.dropFlight?-22:-12-ship.speed*.0175).addScaledVector(normal,ship.dropFlight?24:6);
    const ease=1-Math.exp(-dt*6);
    if(this.camera.position.distanceTo(desired)>70)this.camera.position.copy(desired);else this.camera.position.lerp(desired,ease);
    const target=mesh.position.clone().addScaledVector(forward,ship.dropFlight?30:12+ship.speed*.03).addScaledVector(normal,ship.dropFlight?-12:1.2);
    this.cameraTarget.lerp(target,1-Math.exp(-dt*9));
    const up=new THREE.Vector3(0,1,0).lerp(normal,this.track.exterior||this.track.profile(ship.s).pipe>.02?1:this.cameraRoll).normalize();this.cameraUp.lerp(up,1-Math.exp(-dt*(this.track.exterior?7:5)));this.camera.up.copy(this.cameraUp);
    if(this.shake&&this.shakeAmount>0){this.camera.position.x+=(Math.random()-.5)*this.shakeAmount;this.camera.position.y+=(Math.random()-.5)*this.shakeAmount;this.shakeAmount=Math.max(0,this.shakeAmount-dt);}
    this.camera.lookAt(this.cameraTarget);const fov=67+ship.speed*.0275+(ship.boost>0?5:0);this.camera.fov=THREE.MathUtils.lerp(this.camera.fov,fov,1-Math.exp(-dt*3));this.camera.updateProjectionMatrix();
  }

  clearEffects(){this.particles.length=0;this.wakes.forEach(wake=>wake.clear());this.exhaustTimers.fill(0);}
}
