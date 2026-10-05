import * as THREE from 'three';
import { Race, HOVER_HEIGHT } from './race';
import { Track, wrap } from './track';

interface Viewpoint { s:number; position:THREE.Vector3 }

/** An autonomous race and four fixed cameras for the course-selection background. */
export class Spectator {
  readonly race:Race;
  readonly viewpoints:Viewpoint[]=[];
  readonly target=new THREE.Vector3();
  activeCamera=-1;
  cuts=0;
  targetFov=50;
  framing=0;
  private hold=0;
  private lens=Number.NaN;
  private zoomVelocity=0;

  constructor(track:Track){
    this.race=new Race(track);
    this.setTrack(track);
  }

  setTrack(track:Track){
    this.race.track=track;
    this.viewpoints.length=0;
    for(let i=0;i<4;i++){
      const desired=track.length*(.08+i*.25);
      let s=desired,best=Infinity;
      // Favor open road near each quarter of the course; tunnel shots stay inside.
      for(let offset=-10;offset<=10;offset++){
        const candidate=wrap(desired+offset*track.length*.006,track.length);
        if(!track.hasRoad(candidate))continue;
        const score=Math.abs(offset)+(track.inFullPipe(candidate)?30:0);
        if(score<best){best=score;s=candidate;}
      }
      const f=track.surface(s,0);
      let position:THREE.Vector3;
      if(track.inFullPipe(s)){
        const wall=track.surface(s,f.width*.22);
        position=wall.position.addScaledVector(wall.normal,6).addScaledVector(f.forward,-25);
      }else{
        const side=new THREE.Vector3(f.right.x,0,f.right.z).normalize();
        if(side.lengthSq()<.01)side.set(1,0,0);
        position=f.position.clone().addScaledVector(side,(i%2?-1:1)*(55+i*8));
        position.y+=38+i*9;
        position.addScaledVector(f.forward,-30);
      }
      this.viewpoints.push({s,position});
    }
    this.reset();
  }

  reset(){
    const track=this.race.track;
    this.race.reset();this.race.phase='racing';
    let start=wrap(this.viewpoints[0].s-100,track.length);
    while(!track.hasRoad(start))start=wrap(start-20,track.length);
    for(const ship of this.race.ships){
      ship.s=wrap(start-Math.floor(ship.id/2)*16,track.length);
      ship.x=(ship.id%2?1:-1)*Math.min(4.2,track.profile(ship.s).width*.15);
      ship.speed=110;ship.total=ship.s;
      ship.checkpoint=track.checkpoints.findIndex(cp=>cp>ship.s);
      if(ship.checkpoint<0)ship.checkpoint=0;
      const f=track.surface(ship.s,ship.x);
      ship.position.copy(f.position).addScaledVector(f.normal,HOVER_HEIGHT);
      ship.previous.copy(ship.position);
      ship.rotation.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right,f.normal,f.forward.clone().negate()));
    }
    this.activeCamera=-1;this.cuts=0;this.hold=0;this.lens=Number.NaN;this.zoomVelocity=0;
  }

  step(dt:number){
    if(this.race.phase==='finished')this.reset();
    this.race.step(dt,this.race.ai(this.race.player,dt));
  }

  updateCamera(camera:THREE.PerspectiveCamera,dt:number){
    const leader=this.race.ranking().find(ship=>ship.recovery<=0&&!ship.falling&&ship.finish===null)??this.race.player;
    const pack=this.race.ships.filter(ship=>ship.id===leader.id||(ship.recovery<=0&&!ship.falling&&ship.finish===null&&ship.position.distanceToSquared(leader.position)<80*80));
    const aim=new THREE.Vector3();
    for(const ship of pack)aim.add(ship.position);
    aim.divideScalar(pack.length);
    // Anticipate motion so the smooth pan keeps fast racers centered in the shot.
    aim.addScaledVector(leader.position.clone().sub(leader.previous),11);
    let nearest=0,distance=Infinity;
    this.viewpoints.forEach((view,i)=>{
      const d=view.position.distanceToSquared(aim);
      if(d<distance){nearest=i;distance=d;}
    });
    this.hold+=dt;
    const current=this.viewpoints[this.activeCamera];
    const currentDistance=current?.position.distanceToSquared(aim)??Infinity;
    const cut=!current||(nearest!==this.activeCamera&&this.hold>=2&&distance<currentDistance*.8);
    if(cut){
      if(current)this.cuts++;
      this.activeCamera=nearest;this.hold=0;this.target.copy(aim);
    }else this.target.lerp(aim,1-Math.exp(-dt*5));
    camera.position.copy(this.viewpoints[this.activeCamera].position);
    camera.up.set(0,1,0);camera.lookAt(this.target);
    // Compose the passing pack in the space beside or above the course grid.
    const picker=document.querySelector('.course-picker')!.getBoundingClientRect();
    const width=innerWidth,height=innerHeight;
    const sidePanel=width>=900||(height<=480&&width>540);
    const left=sidePanel?picker.right+24:0;
    const viewWidth=Math.max(120,width-left-24),viewHeight=sidePanel?height-48:Math.max(120,picker.top-24);
    camera.updateMatrixWorld();
    let horizontal=0,vertical=0;
    for(const ship of pack){
      const point=ship.position.clone().applyMatrix4(camera.matrixWorldInverse);
      const depth=Math.max(8,-point.z-4.5);
      horizontal=Math.max(horizontal,(Math.abs(point.x)+4.5)/depth*height/viewWidth);
      vertical=Math.max(vertical,(Math.abs(point.y)+4.5)/depth*height/viewHeight);
    }
    // Keep the pack around half the useful frame, including the ships' silhouettes.
    const desired=THREE.MathUtils.clamp(Math.max(horizontal/.62,vertical/.52),Math.tan(THREE.MathUtils.degToRad(2)),Math.tan(THREE.MathUtils.degToRad(52.5)));
    this.targetFov=THREE.MathUtils.radToDeg(2*Math.atan(desired));
    const goal=Math.log(desired);
    if(cut||!Number.isFinite(this.lens)){this.lens=goal;this.zoomVelocity=0;}
    else{
      const error=goal-this.lens;
      // A small framing tolerance and a damped lens prevent nervous zoom hunting.
      const correction=Math.abs(error)>.055?error:0;
      const opening=correction>0;
      this.zoomVelocity+=(correction*(opening?12:7)-this.zoomVelocity*5)*dt;
      this.zoomVelocity=THREE.MathUtils.clamp(this.zoomVelocity,-.85,1.4);
      this.lens=THREE.MathUtils.clamp(this.lens+this.zoomVelocity*dt,Math.log(Math.tan(THREE.MathUtils.degToRad(2))),Math.log(Math.tan(THREE.MathUtils.degToRad(52.5))));
    }
    camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.exp(this.lens)));
    this.framing=Math.max(horizontal,vertical)/Math.exp(this.lens);
    camera.far=15000;
    camera.setViewOffset(width,height,-left/2,sidePanel?0:(height-viewHeight)/2,width,height);
  }
}
