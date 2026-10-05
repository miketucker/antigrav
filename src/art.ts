import * as THREE from 'three';

export const PALETTE = { lime: 0xd6ff45, cyan: 0x66e5e9, road: 0x777f95, navy: 0x181e32, purple: 0x9382bb, orange: 0xff9460 };

/** Unlit HDR color: survives the darker scene grade and lights up the bloom pass. */
export function glowMaterial(color: THREE.ColorRepresentation, intensity = 8, options: THREE.MeshBasicMaterialParameters = {}) {
  return new THREE.MeshBasicMaterial({ ...options, color: new THREE.Color(color).multiplyScalar(intensity) });
}

function canvasTexture(size: number, paint: (ctx: CanvasRenderingContext2D, size: number) => void) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d')!; paint(ctx, size);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
  texture.magFilter = THREE.NearestFilter; texture.minFilter = THREE.NearestMipmapNearestFilter;
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping; return texture;
}

export function roadTexture() {
  return canvasTexture(128, ctx => {
    ctx.fillStyle = '#818a9f'; ctx.fillRect(0, 0, 128, 128);
    let seed = 17;
    for (let i = 0; i < 2100; i++) { seed = (Math.imul(seed, 1664525) + 1013904223) | 0; const x = seed >>> 0; ctx.fillStyle = i % 2 ? '#8a93a7' : '#737e95'; ctx.fillRect(x % 128, (x >>> 8) % 128, 1, 1); }
    ctx.fillStyle = '#626d84'; ctx.fillRect(0, 0, 128, 2); ctx.fillRect(0, 0, 2, 128);
    ctx.fillStyle = '#a2aabb'; ctx.fillRect(2, 2, 126, 1);
    ctx.fillStyle = '#616d83'; ctx.fillRect(8, 9, 4, 2); ctx.fillRect(117, 117, 4, 2);
    ctx.fillStyle = '#ced4d8'; ctx.fillRect(62, 5, 3, 39); ctx.fillRect(62, 70, 3, 39);
    ctx.fillStyle = '#d1d7df'; ctx.fillRect(7, 0, 2, 128); ctx.fillRect(119, 0, 2, 128);
  });
}

export function hazardTexture() {
  return canvasTexture(64, ctx => {
    ctx.fillStyle = '#d6ff45'; ctx.fillRect(0, 0, 64, 64); ctx.fillStyle = '#202638';
    for (let x = -64; x < 128; x += 32) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 16, 0); ctx.lineTo(x + 80, 64); ctx.lineTo(x + 64, 64); ctx.fill(); }
    ctx.fillStyle = '#ffffff33'; ctx.fillRect(0, 0, 64, 5);
  });
}

export function boostTexture() {
  return canvasTexture(64, ctx => {
    ctx.fillStyle = '#244c48'; ctx.fillRect(0, 0, 64, 64); ctx.fillStyle = '#d6ff45';
    for (let y = 0; y < 80; y += 24) { ctx.beginPath(); ctx.moveTo(5, y + 18); ctx.lineTo(32, y); ctx.lineTo(59, y + 18); ctx.lineTo(59, y + 27); ctx.lineTo(32, y + 9); ctx.lineTo(5, y + 27); ctx.fill(); }
    ctx.fillRect(0, 0, 3, 64); ctx.fillRect(61, 0, 3, 64);
  });
}

export function shipTexture(color: number) {
  return canvasTexture(64, ctx => {
    ctx.fillStyle = `#${color.toString(16).padStart(6, '0')}`; ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = '#131d2d'; ctx.fillRect(23, 0, 12, 64); ctx.fillRect(3, 15, 12, 2); ctx.fillRect(43, 46, 18, 3);
    ctx.fillStyle = '#f0f0dc'; ctx.fillRect(38, 0, 3, 64); ctx.font = 'bold 15px monospace'; ctx.fillText('99', 43, 28);
    ctx.fillStyle = '#ffffff55'; ctx.fillRect(3, 3, 14, 1); ctx.fillRect(45, 54, 14, 1);
    ctx.fillStyle = '#151e33'; for (let y = 32; y < 50; y += 3) ctx.fillRect(6, y, 10, 1);
  });
}

export function signTexture(text: string, color = '#d6ff45', subtitle = '') {
  const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 64;
  const ctx = canvas.getContext('2d')!; ctx.fillStyle = '#192033'; ctx.fillRect(0, 0, 256, 64);
  ctx.fillStyle = color; ctx.fillRect(0, 0, 5, 64); ctx.font = '900 27px monospace'; ctx.fillText(text, 13, 34);
  ctx.font = '9px monospace'; ctx.fillStyle = '#c0c8d4'; ctx.fillText(subtitle || 'ANTI-GRAVITY RACING LEAGUE // 2099', 14, 51);
  const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace; texture.magFilter = THREE.NearestFilter;
  return texture;
}

function poly(vertices: number[][], faces: number[][], material: THREE.Material) {
  const positions: number[] = [], uvs: number[] = [];
  for (const f of faces) for (const i of f) { const v = vertices[i]; positions.push(...v); uvs.push((v[0] + 3.5) / 7, (v[2] + 4) / 7); }
  const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); geometry.computeVertexNormals();
  return new THREE.Mesh(geometry, material);
}

export function createShip(color: number, index = 0) {
  const group = new THREE.Group();
  const livery = new THREE.MeshLambertMaterial({ map: shipTexture(color), flatShading: true, side: THREE.DoubleSide });
  const dark = new THREE.MeshLambertMaterial({ color: 0x252d43, flatShading: true });
  const metal = new THREE.MeshLambertMaterial({ color: 0xbdc8cf, flatShading: true });
  const canopy = new THREE.MeshLambertMaterial({ color: 0x67bac5, emissive: 0x163f53, flatShading: true });
  const body = [[0, .25, -4.4], [-.9, .3, -1.3], [.9, .3, -1.3], [-1.1, .2, 2.2], [1.1, .2, 2.2], [0, 1.05, -.1], [0, .75, 2.1], [0, -.55, -1.5], [-.8, -.45, 2], [.8, -.45, 2]];
  group.add(poly(body, [[0,1,5],[0,5,2],[1,3,6],[1,6,5],[2,5,6],[2,6,4],[3,4,6]], livery));
  group.add(poly(body, [[0,7,1],[0,2,7],[1,7,8],[1,8,3],[2,9,7],[2,4,9],[3,8,9],[3,9,4],[7,9,8]], dark));
  group.add(poly([[-.56,.65,-1.5],[.56,.65,-1.5],[0,1.12,-.1],[-.58,.65,.75],[.58,.65,.75]], [[0,2,1],[0,3,2],[1,2,4],[3,4,2]], canopy));
  for (const side of [-1, 1]) {
    const wing = [[side * .75, .15, -.6],[side * 3.1, -.1, 2.25],[side * 1.2, .3, 2.7],[side * 2.55, .25, .55]];
    group.add(poly(wing, [[0,1,3],[0,2,1],[1,2,3]], livery));
    const pod = new THREE.Mesh(new THREE.BoxGeometry(.65, .55, 2.1), dark); pod.position.set(side * 2.15, -.1, 1.45); group.add(pod);
    const fin = poly([[side*1.9,.1,1],[side*2.2,1.2,2.3],[side*2.35,.1,2.5]], [[0,1,2]], livery); group.add(fin);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(.32,.4,.5,6), metal); nozzle.rotation.x = Math.PI/2; nozzle.position.set(side*2.15,-.1,2.55); group.add(nozzle);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(.42,2.5,5), glowMaterial(0x77efff,8,{ transparent: true, opacity: .9, blending: THREE.AdditiveBlending, depthWrite: false }));
    flame.rotation.x = Math.PI / 2; flame.position.set(side*2.15,-.1,3.7); flame.name = `flame${side}`; group.add(flame);
    const core = new THREE.Mesh(new THREE.ConeGeometry(.18,1.6,5),glowMaterial(0xd7fbff,6));
    core.rotation.x = Math.PI/2; core.position.set(side*2.15,-.1,3.15); core.name = `engineCore${side}`; group.add(core);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(.08,.09,2),glowMaterial(0x66e5e9,7));
    rail.position.set(side*2.48,.2,1.45); group.add(rail);
  }
  const badge = new THREE.Mesh(new THREE.PlaneGeometry(.65,.6), new THREE.MeshBasicMaterial({ map: signTexture(`0${index+1}`), side: THREE.DoubleSide })); badge.rotation.x = -Math.PI/2; badge.position.set(0,.85,1.5); group.add(badge);
  return group;
}

export function createPickup() {
  const group = new THREE.Group();
  const core = new THREE.Mesh(new THREE.OctahedronGeometry(1.5), glowMaterial(0x9b71ff,9)); group.add(core);
  const cage = new THREE.Mesh(new THREE.OctahedronGeometry(2), glowMaterial(0xe0d8ff,8,{wireframe:true})); group.add(cage);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(2.1,.17,4,16), glowMaterial(0xb89aff,14)); ring.rotation.x = Math.PI/2; group.add(ring);
  return group;
}
