import * as THREE from 'three';
import { BOOST_SPEED, type Ship } from './race';

const SAMPLES = 48;
interface TrailPoint { position: THREE.Vector3; age: number; boost: boolean }

/** Twin camera-facing ribbons, with bounded buffers and one draw call per ship. */
export class ShipWake {
  readonly points: TrailPoint[][] = [[], []];
  readonly positions = new Float32Array(2 * (SAMPLES - 1) * 6 * 3);
  readonly colors = new Float32Array(this.positions.length);
  readonly mesh: THREE.Mesh;
  emission = 0;

  constructor(scene: THREE.Scene) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setDrawRange(0, 0);
    this.mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true,
      opacity: .85, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }

  clear() { this.points.forEach(points => { points.length = 0; }); this.mesh.geometry.setDrawRange(0, 0); this.emission = 0; }

  update(ship: Ship, model: THREE.Group, camera: THREE.Camera, dt: number, active: boolean) {
    if (ship.recovery > 0 || !active) { this.clear(); return; }
    if (dt <= 0) return;
    for (const points of this.points) {
      for (const point of points) point.age += dt;
      while (points.length && points[0].age > (points[0].boost ? .58 : .32)) points.shift();
    }
    this.emission += dt;
    if (ship.speed > 8 && this.emission >= 1 / 90) {
      this.emission %= 1 / 90;
      for (let engine = 0; engine < 2; engine++) {
        const points = this.points[engine];
        const position = new THREE.Vector3(engine ? 2.15 : -2.15, -.1, 3.9).applyQuaternion(model.quaternion).add(model.position);
        if (points.length && points[points.length - 1].position.distanceTo(position) > 30) points.length = 0;
        points.push({ position, age: 0, boost: ship.boost > 0 });
        if (points.length > SAMPLES) points.shift();
      }
    }
    let vertex = 0;
    const intensity = Math.min(1, .35 + ship.speed / BOOST_SPEED);
    for (const points of this.points) {
      for (let i = 1; i < points.length; i++) {
        const a = points[i - 1], b = points[i];
        const direction = b.position.clone().sub(a.position);
        if (direction.lengthSq() < .0001) continue;
        const axis = direction.cross(camera.position.clone().sub(b.position)).normalize();
        const ageA = Math.max(0, 1 - a.age / (a.boost ? .58 : .32));
        const ageB = Math.max(0, 1 - b.age / (b.boost ? .58 : .32));
        const widthA = (a.boost ? .66 : .34) * ageA, widthB = (b.boost ? .66 : .34) * ageB;
        const corners = [a.position.clone().addScaledVector(axis, widthA), a.position.clone().addScaledVector(axis, -widthA),
          b.position.clone().addScaledVector(axis, widthB), b.position.clone().addScaledVector(axis, -widthB)];
        const colorA = new THREE.Color(a.boost ? 0xd6ff45 : 0x58ddff).multiplyScalar(ageA * ageA * intensity * 6);
        const colorB = new THREE.Color(b.boost ? 0xd6ff45 : 0x58ddff).multiplyScalar(ageB * ageB * intensity * 6);
        for (const corner of [0, 1, 2, 1, 3, 2]) {
          corners[corner].toArray(this.positions, vertex * 3);
          (corner < 2 ? colorA : colorB).toArray(this.colors, vertex * 3);
          vertex++;
        }
      }
    }
    this.mesh.geometry.setDrawRange(0, vertex);
    this.mesh.geometry.attributes.position.needsUpdate = true;
    this.mesh.geometry.attributes.color.needsUpdate = true;
  }
}
