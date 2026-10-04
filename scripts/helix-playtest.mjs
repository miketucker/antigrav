import fs from 'node:fs/promises';
import path from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
const {getBrowser,getPage,closeBrowser}=await import(pathToFileURL(path.join(homedir(),'.agents/skills/chrome-devtools/scripts/lib/browser.js')).href);
const output=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../docs/screenshots');await fs.mkdir(output,{recursive:true});
const browser=await getBrowser({headless:true,viewport:{width:1200,height:800},args:['--enable-unsafe-swiftshader']});
const page=await getPage(browser),errors=[],checks={};
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const snapshot=()=>page.evaluate(()=>window.__VECTOR99__.snapshot());
const elapsedWait=async(seconds)=>{const beginning=(await snapshot()).elapsed;await page.waitForFunction((t,d)=>window.__VECTOR99__.snapshot().elapsed>=t+d,{timeout:45000},beginning,seconds);};
const preview=async(name)=>{await page.goto(`http://127.0.0.1:5173/?stage=helix&preview=${name}`,{waitUntil:'domcontentloaded'});await page.waitForFunction(()=>!!window.__VECTOR99__,{timeout:30000});};
try{
  await page.goto('http://127.0.0.1:5173/?stage=helix',{waitUntil:'networkidle2'});
  checks.selection={stage:(await snapshot()).stage,title:await page.$eval('#stage-name',e=>e.textContent),number:await page.$eval('#stage-number',e=>e.textContent)};
  await page.screenshot({path:`${output}/helix-title.png`});
  await page.click('#help-button');checks.help=await page.$eval('#stage-help',e=>e.textContent);await page.click('[data-close="help-dialog"]');
  checks.switching=[];
  for(const stage of ['foundry','abyss','helix']){await page.select('#stage-select',stage);await page.waitForFunction(s=>window.__VECTOR99__.snapshot().stage===s,{},stage);checks.switching.push((await snapshot()).stage);}
  await page.setViewport({width:390,height:844});await page.screenshot({path:`${output}/helix-mobile.png`});
  checks.mobile=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,start:document.getElementById('start-button').getBoundingClientRect().toJSON(),selector:document.getElementById('stage-select').getBoundingClientRect().toJSON()}));
  await page.click('#start-button');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().phase==='racing',{timeout:30000});checks.start=(await snapshot()).stage;
  await page.setViewport({width:960,height:600});
  checks.hops=[];
  for(const name of ['orbit','underside']){
    await preview(name);await page.keyboard.down('w');
    await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne>.1,{timeout:45000});
    const flying=await snapshot();await page.screenshot({path:`${output}/helix-${name}-flight.png`});
    if(name==='orbit'){
      await page.keyboard.press('Escape');const paused=await snapshot();await new Promise(r=>setTimeout(r,300));checks.pause=paused.elapsed===(await snapshot()).elapsed&&paused.ships[0].airborne===(await snapshot()).ships[0].airborne;
      await page.click('#resume-button');await page.keyboard.down('w');
    }
    await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne===0,{timeout:45000});
    const landed=await snapshot();checks.hops.push({name,flying:flying.ships[0],normal:flying.surfaceNormal,landed:landed.ships[0]});await page.keyboard.up('w');
  }
  console.log(JSON.stringify({stage:'hops-complete',errors,hops:checks.hops.map(h=>({name:h.name,airborne:h.flying.airborne,airHeight:h.flying.airHeight,land:h.landed.airborne,recovery:h.landed.recovery}))}));
  await preview('spiral');await page.keyboard.down('w');await page.keyboard.down('d');
  const first=await snapshot();let lastX=first.ships[0].x,travel=0,underside=false;
  for(let i=0;i<100;i++){
    await elapsedWait(.07);const state=await snapshot(),x=state.ships[0].x,r=state.exterior.radius;
    travel+=((x-lastX+Math.PI*r)%(2*Math.PI*r)+2*Math.PI*r)%(2*Math.PI*r)-Math.PI*r;lastX=x;
    if(Math.abs(x)>Math.PI*r*.85&&!underside){underside=true;await page.screenshot({path:`${output}/helix-exterior-roll.png`});}
    if(state.elapsed>first.elapsed+6.5)break;
  }
  checks.roll={travel,underside,player:(await snapshot()).ships[0]};await page.keyboard.up('d');await page.keyboard.up('w');
  for(const name of ['loop','corkscrew']){await preview(name);await page.keyboard.down('w');await elapsedWait(.6);await page.screenshot({path:`${output}/helix-${name}.png`});checks[name]=await snapshot();await page.keyboard.up('w');}
  checks.pitch=[];
  for(const key of ['i','k']){
    await preview('underside');await page.keyboard.down('w');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne>.04,{timeout:45000});
    const before=(await snapshot()).ships[0];await page.keyboard.down(key);await elapsedWait(.13);await page.keyboard.up(key);
    const controlled=(await snapshot()).ships[0];await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne===0,{timeout:45000});
    checks.pitch.push({key,before,controlled,landed:(await snapshot()).ships[0]});await page.keyboard.up('w');
  }
  await preview('finish');await page.keyboard.down('w');await page.waitForSelector('#results-overlay:not([hidden])',{timeout:30000});await page.keyboard.up('w');
  checks.results=await page.$eval('#result-stage',e=>e.textContent);await page.click('#race-again-button');checks.restart={stage:(await snapshot()).stage,phase:(await snapshot()).phase};
  const success=errors.length===0&&checks.selection.stage==='helix'&&checks.selection.number==='03 / 07'&&checks.start==='helix'&&checks.pause&&checks.hops.every(h=>h.flying.airborne>0&&h.landed.airborne===0&&h.landed.recovery===0)&&checks.roll.underside&&checks.roll.travel>Math.PI*56&&checks.roll.player.recovery===0&&checks.mobile.width===checks.mobile.scroll&&checks.pitch.every(p=>p.controlled.flightTilted&&p.landed.recovery===0)&&checks.results.includes('HELIX CROWN')&&checks.restart.phase==='countdown';
  const report={success,errors,checks};await fs.writeFile(path.resolve(output,'helix-playtest.json'),JSON.stringify(report,null,2));
  console.log(JSON.stringify({success,errors,selection:checks.selection,roll:checks.roll,hops:checks.hops,pitch:checks.pitch.map(p=>({key:p.key,pitch:p.controlled.pitch,speed:p.controlled.speed,land:p.landed.airborne,recovery:p.landed.recovery})),results:checks.results,restart:checks.restart},null,2));if(!success)process.exitCode=1;
}finally{await closeBrowser();}
