import fs from 'node:fs/promises';
import path from 'node:path';
import {homedir} from 'node:os';
import {pathToFileURL,fileURLToPath} from 'node:url';
const {getBrowser,getPage,closeBrowser}=await import(pathToFileURL(path.join(homedir(),'.agents/skills/chrome-devtools/scripts/lib/browser.js')).href);
const output=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../docs/screenshots');
const browser=await getBrowser({headless:true,viewport:{width:960,height:600},args:['--enable-unsafe-swiftshader']}),page=await getPage(browser),errors=[],checks={stages:[],markers:[],switches:[]},screenshots=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const assert=(value,message)=>{if(!value)throw new Error(message);};
const snapshot=()=>page.evaluate(()=>window.__VECTOR99__.snapshot());
const go=async(stage,preview)=>{
  await page.keyboard.up('w');await page.goto(`http://127.0.0.1:5173/?stage=${stage}${preview?`&preview=${preview}`:''}`,{waitUntil:'domcontentloaded',timeout:90000});
  await page.waitForFunction(()=>!!window.__VECTOR99__&&window.__VECTOR99__.snapshot().drawCalls>0,{timeout:90000});await page.$eval('#game-canvas',e=>e.focus());
  if(preview){await page.waitForFunction(()=>window.__VECTOR99__.snapshot().elapsed>.08,{timeout:90000});await page.keyboard.press('Escape');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().phase==='paused');}
};
const shot=async(name)=>{
  const style=await page.addStyleTag({content:'.overlay,.screen-vignette{display:none!important}'}),file=`${output}/${name}.png`;
  await page.screenshot({path:file});await style.evaluate(e=>e.remove());const bytes=(await fs.stat(file)).size;assert(bytes<5*1024*1024,'Screenshot below 5 MB');screenshots.push({file,bytes,compressed:false});
};
try{
  for(const stage of ['foundry','abyss','helix','slalom','rift','vortex','oblivion','driftlab']){
    await go(stage,'environment');const s=await snapshot();
    assert(s.atmosphere.cloudWidth===480&&s.atmosphere.cloudHeight===300,`${stage}: half-resolution cloud field`);
    assert(s.rendering.width===960&&s.rendering.height===600&&s.rendering.brightness===.5,'Full-resolution scene, 50% grade');
    assert(s.atmosphere.activeClouds<=4&&s.atmosphere.quality.steps===6,'Bounded cloud cost');
    const time=s.atmosphere.time;await new Promise(r=>setTimeout(r,200));assert((await snapshot()).atmosphere.time===time,'Cloud animation pauses');
    if(['abyss','rift'].includes(stage))assert(s.environment.mountains,`${stage}: dramatic peaks`);
    if(['helix','vortex'].includes(stage))assert(s.environment.abstract===2,`${stage}: instanced sculptures`);
    if(['abyss','slalom','vortex'].includes(stage))assert(s.environment.stars==='Points',`${stage}: night stars`);
    if(s.environment.signs.length)assert(s.environment.signs.every(sign=>sign.width>16&&sign.height===18&&sign.children===1&&sign.shader==='ShaderMaterial'&&sign.transparent&&!sign.depthWrite),'Floating holographic corner arrows without boards or poles');
    checks.stages.push({stage,environment:s.environment,skyline:s.skyline,atmosphere:s.atmosphere});await shot(`environment-${stage}`);console.log(JSON.stringify({progress:stage,errors}));
  }
  for(const side of ['left','right']){
    await go('slalom','marker'+side);const info=await page.$eval('#marker-status',e=>({side:e.dataset.side,text:e.textContent,label:e.getAttribute('aria-label'),arrow:e.querySelector('svg')?.getBoundingClientRect().width,transform:getComputedStyle(e.querySelector('svg')).transform}));
    assert(info.side===side&&info.text===''&&info.label.startsWith(`Pass ${side},`)&&info.arrow>=78,'Large corner arrow with accessible matching HUD direction');
    checks.markers.push(info);await shot(`marker-${side}-hologram`);const before=await snapshot();await new Promise(r=>setTimeout(r,180));assert((await snapshot()).environment.signs[0].time===before.environment.signs[0].time,'Hologram animation pauses');
  }
  // Reuse one world across every theme; repeat the cycle to catch undisposed sky/star assets.
  await go('foundry');
  for(let round=0;round<2;round++)for(const stage of ['abyss','helix','rift','slalom','vortex','oblivion','driftlab','foundry']){
    await page.click(`[data-stage="${stage}"]`);await page.waitForFunction(id=>window.__VECTOR99__.snapshot().rendering.stage===id,{timeout:90000},stage);
    await new Promise(r=>setTimeout(r,150));const s=await snapshot();checks.switches.push({round,stage,geometries:s.environment.geometries,textures:s.environment.textures});
  }
  for(const stage of ['foundry','abyss','helix','slalom','rift','vortex','oblivion','driftlab']){
    const same=checks.switches.filter(c=>c.stage===stage);assert(same[0].geometries===same[1].geometries&&same[0].textures===same[1].textures,`${stage}: stable GPU allocations after switching`);
  }
  await page.setViewport({width:640,height:400,deviceScaleFactor:2});await go('oblivion','environment');checks.retina=await snapshot();
  assert(checks.retina.rendering.width===1280&&checks.retina.atmosphere.cloudWidth===640&&checks.retina.atmosphere.cloudHeight===400,'Retina cloud resize stays at half resolution');
  await page.setViewport({width:390,height:844,deviceScaleFactor:1});await go('slalom','markerright');await shot('marker-mobile-hologram');
  checks.mobile=await page.$eval('#marker-status',e=>({width:e.getBoundingClientRect().width,arrow:e.querySelector('svg').getBoundingClientRect().width,right:e.getBoundingClientRect().right,screen:innerWidth}));
  assert(checks.mobile.arrow>=78&&checks.mobile.right<=390,'Mobile arrow is readable and fits');assert(await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth),'No mobile horizontal overflow');
  assert(errors.length===0,'No browser or shader errors');await fs.writeFile(`${output}/environment-playtest.json`,JSON.stringify({success:true,errors,checks,screenshots},null,2));console.log(JSON.stringify({success:true,errors,screenshots},null,2));
}catch(error){await fs.writeFile(`${output}/environment-playtest.json`,JSON.stringify({success:false,error:String(error),errors,checks,screenshots},null,2));console.error(error);process.exitCode=1;}finally{await closeBrowser();}
