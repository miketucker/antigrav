import fs from 'node:fs/promises';
import path from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';

const library = path.join(homedir(), '.agents/skills/chrome-devtools/scripts/lib/browser.js');
const { getBrowser, getPage, closeBrowser } = await import(pathToFileURL(library).href);
const output = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../docs/screenshots');
await fs.mkdir(output, { recursive: true });
const browser = await getBrowser({ headless: true, viewport: { width: 1440, height: 900 }, args: ['--enable-unsafe-swiftshader'] });
const page = await getPage(browser);
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });

try {
  await page.goto('http://127.0.0.1:5173/?preview=bank', { waitUntil: 'networkidle2' });
  const native = await page.evaluate(() => ({ ...window.__VECTOR99__.snapshot().rendering,
    imageRendering: getComputedStyle(document.getElementById('game-canvas')).imageRendering,
    legacySetting: !!document.getElementById('quality') }));
  await page.screenshot({ path: `${output}/neon-bank.png` });
  await page.click('#settings-button');
  await page.waitForSelector('#settings-dialog[open]');
  await page.click('#bloom');
  const bloomOff = await page.evaluate(() => window.__VECTOR99__.snapshot().rendering);
  await page.click('#bloom');
  await page.click('#settings-done-button');
  const bloomOn = await page.evaluate(() => window.__VECTOR99__.snapshot().rendering);

  // A fixed gray scene verifies visible brightness; a bright rectangle verifies
  // light spills into neighboring black pixels only when bloom is enabled.
  const pixels = await page.evaluate(async () => {
    const threeUrl = performance.getEntriesByType('resource').find(entry => new URL(entry.name).pathname.endsWith('/three.js')).name;
    const THREE = await import(threeUrl);
    const { NeonPost } = await import('/src/post.ts');
    const canvas = document.createElement('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false });
    renderer.setSize(64,64,false);
    const scene = new THREE.Scene(); scene.background = new THREE.Color(0x808080);
    const camera = new THREE.OrthographicCamera(-2,2,2,-2,.1,10); camera.position.z=5;
    const post = new NeonPost(renderer,scene,camera); post.resize(64,64,1); post.bloom.enabled=false;
    const gl = renderer.getContext();
    const read = (x,y) => { const rgba=new Uint8Array(4);gl.readPixels(x,y,1,1,gl.RGBA,gl.UNSIGNED_BYTE,rgba);return Array.from(rgba); };
    post.grade.uniforms.brightness.value=1; post.render(0); const original=read(0,0);
    post.grade.uniforms.brightness.value=.5; post.render(0); const darkened=read(0,0);
    scene.background.setHex(0x000000);
    const material=new THREE.MeshBasicMaterial({color:new THREE.Color(1,1,1).multiplyScalar(10)});
    const geometry=new THREE.PlaneGeometry(1,1);scene.add(new THREE.Mesh(geometry,material));
    post.render(0); const withoutBloom=read(20,32);
    post.bloom.enabled=true;post.render(0);const withBloom=read(20,32);
    const center=read(32,32);
    post.composer.passes.forEach(pass=>pass.dispose());post.composer.dispose();geometry.dispose();material.dispose();renderer.dispose();
    return {original,darkened,withoutBloom,withBloom,center};
  });
  console.log(JSON.stringify({stage:'brightness-and-bloom',pixels,errors}));

  await page.setViewport({ width: 800, height: 600, deviceScaleFactor: 2 });
  await page.waitForFunction(() => window.__VECTOR99__.snapshot().rendering.width===1600);
  const retina = await page.evaluate(() => window.__VECTOR99__.snapshot().rendering);
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.waitForFunction(() => window.__VECTOR99__.snapshot().rendering.width===390);
  const mobile = await page.evaluate(() => ({ ...window.__VECTOR99__.snapshot().rendering, scrollWidth:document.documentElement.scrollWidth }));
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:5173/?preview=boost', { waitUntil: 'networkidle2' });
  await page.keyboard.down('w');await page.keyboard.press('Space');
  await page.waitForFunction(() => window.__VECTOR99__.snapshot().ships[0].speed>145&&window.__VECTOR99__.snapshot().trailVertices>200);
  await page.keyboard.up('w');
  await page.screenshot({ path: `${output}/neon-propulsion.png` });
  await page.goto('http://127.0.0.1:5173/?preview=bowl', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: `${output}/neon-city.png` });

  const success=errors.length===0&&native.width===1440&&native.height===900&&native.composerWidth===1440&&native.imageRendering==='auto'&&!native.legacySetting&&native.brightness===.5&&bloomOff.bloom===false&&bloomOn.bloom===true&&pixels.original[0]===128&&Math.abs(pixels.darkened[0]-64)<=1&&pixels.withoutBloom[0]===0&&pixels.withBloom[0]>10&&retina.width===1600&&retina.height===1200&&retina.composerWidth===1600&&retina.composerHeight===1200&&mobile.width===390&&mobile.height===844&&mobile.scrollWidth===390;
  console.log(JSON.stringify({success,errors,native,bloomOff:bloomOff.bloom,bloomOn:bloomOn.bloom,pixels,retina,mobile,screenshots:['neon-bank.png','neon-propulsion.png','neon-city.png']},null,2));
  if(!success)process.exitCode=1;
} finally { await closeBrowser(); }
