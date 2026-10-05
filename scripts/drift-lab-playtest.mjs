import fs from 'node:fs/promises';
import path from 'node:path';
import {homedir} from 'node:os';
import {pathToFileURL,fileURLToPath} from 'node:url';
const {getBrowser,getPage,closeBrowser}=await import(pathToFileURL(path.join(homedir(),'.agents/skills/chrome-devtools/scripts/lib/browser.js')).href);
const output=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../docs/screenshots');
const browser=await getBrowser({headless:true,viewport:{width:960,height:600},args:['--enable-unsafe-swiftshader']}),page=await getPage(browser);
const errors=[],checks={},screenshots=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const assert=(value,message)=>{if(!value)throw new Error(message);};
const snapshot=()=>page.evaluate(()=>window.__VECTOR99__.snapshot());
const shot=async name=>{
  const file=`${output}/${name}.png`,style=await page.addStyleTag({content:'.overlay,.screen-vignette{display:none!important}'});
  await page.screenshot({path:file});await style.evaluate(e=>e.remove());const bytes=(await fs.stat(file)).size;
  assert(bytes<5*1024*1024,'Screenshot below 5 MB');screenshots.push({file,bytes,compressed:false});
};
const go=async preview=>{
  for(const key of ['w','a','d','Shift'])await page.keyboard.up(key);
  await page.goto(`http://127.0.0.1:5173/?stage=driftlab${preview?'&preview='+preview:''}`,{waitUntil:'domcontentloaded',timeout:90000});
  await page.waitForFunction(()=>window.__VECTOR99__?.snapshot().rendering.stage==='driftlab',{timeout:90000});
  await page.$eval('#game-canvas',e=>e.focus());
};
try{
  await go();checks.menu=await page.evaluate(()=>({count:document.querySelectorAll('[data-stage]').length,name:document.querySelector('.course-option.selected>span').textContent,help:document.querySelector('#stage-help').textContent}));
  assert(checks.menu.count===8&&checks.menu.name==='DRIFT LAB','Eighth selectable circuit');
  assert(checks.menu.help.includes('open edge'),'Briefing explains the falling hazard');await shot('drift-lab-menu');
  await go('drift');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().elapsed>.08);await page.keyboard.press('Escape');
  await page.waitForFunction(()=>window.__VECTOR99__.snapshot().phase==='paused');checks.start=await snapshot();
  assert(checks.start.openEdges&&checks.start.roadWidth===24&&checks.start.surfaceNormal[1]>.999,'Flat open-edge course');
  assert(checks.start.markers.length+checks.start.barriers.length+checks.start.gaps.length+checks.start.ramps.length===0,'Pure drift terrain');
  await shot('drift-lab-zigzag');
  // DOM keyboard events use the normal input handler, timed against game frames.
  checks.drift=await page.evaluate(()=>new Promise((resolve,reject)=>{
    const start=window.__VECTOR99__.snapshot().elapsed,frames=[];let steering=true,released=false;
    const keyup=code=>window.dispatchEvent(new KeyboardEvent('keyup',{code}));
    const keydown=code=>window.dispatchEvent(new KeyboardEvent('keydown',{code}));
    window.__driftLabFrames=frames;
    const tick=()=>{
      const s=window.__VECTOR99__.snapshot(),p=s.ships[0],time=s.elapsed-start;frames.push({time,s:p.s,x:p.x,charge:p.driftCharge,boost:p.boost,falling:p.falling});
      if(p.falling||p.recovery){reject(new Error('Timed keyboard drift left the edge'));return;}
      if(steering&&time>=.65){keyup('KeyD');steering=false;}
      if(!released&&time>=.85){keyup('ShiftLeft');keyup('ShiftRight');released=true;}
      if(released&&p.boost>0&&!p.drifting){window.dispatchEvent(new KeyboardEvent('keydown',{code:'Escape'}));keyup('Escape');resolve({frames,result:p});return;}
      if(time>2){reject(new Error('Drift did not award a release turbo'));return;}requestAnimationFrame(tick);
    };keydown('Escape');keyup('Escape');keydown('KeyW');keydown('KeyD');keydown('ShiftLeft');requestAnimationFrame(tick);
  }));
  assert(checks.drift.result.boost>0&&checks.drift.result.speed>140,'Keyboard drift release grants turbo');
  await page.waitForFunction(()=>window.__VECTOR99__.snapshot().phase==='paused');await shot('drift-lab-release-turbo');
  await go('drift');await page.keyboard.down('w');
  await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].falling,{timeout:90000});
  checks.fall=await snapshot();const savedCheckpoint=checks.fall.ships[0].checkpoint,savedS=checks.fall.ships[0].s,savedLaps=checks.fall.ships[0].laps;
  await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].position[1]<-12,{timeout:90000});
  await page.keyboard.press('Escape');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().phase==='paused');checks.visibleFall=await snapshot();
  assert(checks.visibleFall.ships[0].checkpoint===savedCheckpoint&&checks.visibleFall.ships[0].s===savedS,'Falling freezes route progress');await shot('drift-lab-edge-fall');
  await page.keyboard.up('w');await page.keyboard.press('Escape');
  await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].recovery>0,{timeout:90000});
  await page.waitForFunction(()=>{const p=window.__VECTOR99__.snapshot().ships[0];return p.recovery===0&&!p.falling&&p.speed>0;},{timeout:90000});
  checks.recovered=await snapshot();assert(checks.recovered.ships[0].laps===savedLaps,'Recovery gives no free lap');
  await page.keyboard.press('Escape');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().phase==='paused');await shot('drift-lab-checkpoint-recovery');
  assert(errors.length===0,'No browser or shader errors');
  await fs.writeFile(`${output}/drift-lab-playtest.json`,JSON.stringify({success:true,errors,checks,screenshots},null,2));console.log(JSON.stringify({success:true,errors,screenshots},null,2));
}catch(error){checks.failedFrames=await page.evaluate(()=>window.__driftLabFrames??null).catch(()=>null);await fs.writeFile(`${output}/drift-lab-playtest.json`,JSON.stringify({success:false,error:String(error),errors,checks,screenshots},null,2));console.error(error);process.exitCode=1;}finally{await closeBrowser();}
