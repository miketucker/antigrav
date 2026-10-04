import fs from 'node:fs/promises';
import path from 'node:path';
import {homedir} from 'node:os';
import {pathToFileURL,fileURLToPath} from 'node:url';
const {getBrowser,getPage,closeBrowser}=await import(pathToFileURL(path.join(homedir(),'.agents/skills/chrome-devtools/scripts/lib/browser.js')).href);
const output=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../docs/screenshots');
const browser=await getBrowser({headless:true,viewport:{width:800,height:500},args:['--enable-unsafe-swiftshader']});
const page=await getPage(browser),errors=[],checks={connectors:[],jumps:[],returns:[]},sizes=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const assert=(value,message)=>{if(!value)throw new Error(message);};
const snapshot=()=>page.evaluate(()=>window.__VECTOR99__.snapshot());
const release=async()=>{for(const key of ['w','a','d','Shift'])await page.keyboard.up(key);};
const go=async(stage,preview)=>{await release();await page.goto(`http://127.0.0.1:5173/?stage=${stage}&preview=${preview}`,{waitUntil:'domcontentloaded',timeout:90000});await page.waitForFunction(()=>!!window.__VECTOR99__,{timeout:90000});await page.$eval('#game-canvas',e=>e.focus());};
const elapsedWait=async(seconds)=>{const begin=(await snapshot()).elapsed;await page.waitForFunction((t,d)=>window.__VECTOR99__.snapshot().elapsed>=t+d,{timeout:90000,polling:'raf'},begin,seconds);};
const shot=async(name,game=true)=>{const style=game&&(await snapshot()).phase==='paused'?await page.addStyleTag({content:'.overlay,.screen-vignette{display:none!important}'}):null;const file=`${output}/${name}.png`;await page.screenshot({path:file});if(style)await style.evaluate(e=>e.remove());const bytes=(await fs.stat(file)).size;assert(bytes<5*1024*1024,'Screenshot below 5 MB');sizes.push({file,bytes,compressed:false});};
try{
  await page.setViewport({width:1440,height:1280});await page.setContent(await fs.readFile(`${output}/spline-map.svg`,'utf8'));await shot('spline-route-map',false);await page.setViewport({width:800,height:500});
  console.log(JSON.stringify({progress:'route map captured'}));
  for(const stage of ['slalom','rift','vortex','oblivion']){
    await go(stage,'connector');await page.keyboard.down('w');const start=await snapshot();const samples=[];
    for(let i=0;i<20;i++){await elapsedWait(.1);const state=await snapshot();assert(state.ships[0].recovery===0,`${stage} connector remains driveable`);samples.push({s:state.ships[0].s,normal:state.surfaceNormal,position:state.ships[0].position,speed:state.ships[0].speed});}
    const end=await snapshot();assert(end.ships[0].s>start.ships[0].s+180,`${stage} connector travel`);checks.connectors.push({stage,start:start.ships[0],end:end.ships[0],samples});await page.keyboard.press('Escape');await shot(`spline-${stage}-connector`);console.log(JSON.stringify({progress:`${stage} connector passed`,s:end.ships[0].s,errors}));
  }
  for(const stage of ['slalom','rift','vortex','oblivion']){
    await go(stage,'returnroad');await page.keyboard.down('w');const start=await snapshot();await elapsedWait(1.6);const state=await snapshot();assert(state.ships[0].recovery===0&&state.ships[0].s>start.ships[0].s+100,`${stage} populated return road`);checks.returns.push({stage,start:start.ships[0],end:state.ships[0]});if(stage==='rift'){await page.keyboard.press('Escape');await shot('spline-rift-return-rewards');}console.log(JSON.stringify({progress:`${stage} return passed`,errors}));
  }
  await go('slalom','bank');const entry=await snapshot();await page.keyboard.down('w');await page.keyboard.down('Shift');await page.keyboard.down(entry.bankAngle<0?'a':'d');await elapsedWait(.85);checks.drift=await snapshot();assert(checks.drift.ships[0].drifting&&checks.drift.ships[0].driftTier>=1,'Rounded bank retains player drift charge');await release();await elapsedWait(.04);checks.release=(await snapshot()).ships[0];assert(checks.release.boost>0,'Release grants mini-turbo');await page.keyboard.press('Escape');await shot('spline-slalom-smooth-bank');console.log(JSON.stringify({progress:'player bank drift passed',errors}));
  for(const [stage,count] of [['slalom',1],['rift',3],['vortex',1],['oblivion',4]])for(let i=0;i<count;i++){
    await go(stage,i?'jump'+(i+1):'jump');await page.keyboard.down('w');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne>.1,{timeout:90000});const flying=await snapshot();
    if(stage==='oblivion'&&i===3){await page.keyboard.press('Escape');await shot('spline-oblivion-final-jump');await page.click('#resume-button');await page.keyboard.down('w');}
    await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne===0,{timeout:90000});const state=await snapshot(),p=state.ships[0],gap=state.gaps[i];assert(p.recovery===0&&p.s>=gap.end&&p.s<=gap.landingEnd,`${stage} jump ${i+1} landing`);checks.jumps.push({stage,index:i+1,flying:flying.ships[0],landed:p});console.log(JSON.stringify({progress:`${stage} jump ${i+1} landed`,errors}));
  }
  for(const stage of ['vortex','oblivion']){
    await go(stage,'tuberamp');await page.keyboard.down('w');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne>.1,{timeout:90000});const flying=await snapshot();assert(flying.tubeShape<-.99,'Interior ramp launches inward');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne===0,{timeout:90000});const state=await snapshot();assert(state.ships[0].recovery===0,'Tube ramp lands safely');checks[`${stage}Ramp`]={flying:flying.ships[0],landed:state.ships[0]};console.log(JSON.stringify({progress:`${stage} tube ramp passed`,errors}));
  }
  assert(errors.length===0,'No browser or shader errors');await fs.writeFile(`${output}/spline-playtest.json`,JSON.stringify({success:true,errors,checks,sizes},null,2));console.log(JSON.stringify({success:true,errors,jumps:checks.jumps.length,sizes},null,2));
}catch(error){await fs.writeFile(`${output}/spline-playtest.json`,JSON.stringify({success:false,error:String(error),errors,checks,sizes},null,2));console.error(error);process.exitCode=1;}finally{await closeBrowser();}
