import fs from 'node:fs/promises';
import path from 'node:path';
import {homedir} from 'node:os';
import {pathToFileURL,fileURLToPath} from 'node:url';
const {getBrowser,getPage,closeBrowser}=await import(pathToFileURL(path.join(homedir(),'.agents/skills/chrome-devtools/scripts/lib/browser.js')).href);
const output=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../docs/screenshots');await fs.mkdir(output,{recursive:true});
const browser=await getBrowser({headless:true,viewport:{width:960,height:600},args:['--enable-unsafe-swiftshader']});
const page=await getPage(browser),errors=[],checks={jumps:[],themes:[]},sizes=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
const assert=(value,message)=>{if(!value)throw new Error(message);};
const snapshot=()=>page.evaluate(()=>window.__VECTOR99__.snapshot());
const go=async(stage,preview)=>{await page.keyboard.up('w');await page.keyboard.up('a');await page.keyboard.up('d');await page.keyboard.up('Shift');await page.goto(`http://127.0.0.1:5173/?stage=${stage}${preview?`&preview=${preview}`:''}`,{waitUntil:'domcontentloaded',timeout:90000});await page.waitForFunction(()=>!!window.__VECTOR99__,{timeout:90000});await page.$eval('#game-canvas',e=>e.focus());};
const elapsedWait=async(seconds)=>{const begin=(await snapshot()).elapsed;await page.waitForFunction((t,d)=>window.__VECTOR99__.snapshot().elapsed>=t+d,{timeout:90000,polling:'raf'},begin,seconds);};
const shot=async(name)=>{const style=(await snapshot()).phase==='paused'?await page.addStyleTag({content:'.overlay,.screen-vignette{display:none!important}'}):null;const file=`${output}/${name}.png`;await page.screenshot({path:file});if(style)await style.evaluate(e=>e.remove());const bytes=(await fs.stat(file)).size;assert(bytes<5*1024*1024,'Screenshot below 5 MB');sizes.push({file,bytes,compressed:false});};
try{
  for(const [stage,gaps,pipes,hint] of [['slalom',1,1,'Banked'],['rift',3,1,'3 offset'],['vortex',1,3,'3 tunnels'],['oblivion',4,3,'4 jumps']]){
    await go(stage);const state=await snapshot();const theme=await page.$eval('#stage-hint',e=>e.textContent);assert(state.gaps.length===gaps&&state.pipes.length===pipes,`${stage} authored layout`);assert(theme.includes(hint),`${stage} description`);assert(state.skyline.minimumCourseClearance===undefined||state.skyline.minimumCourseClearance>=0,'Buildings clear the whole course');assert(state.atmosphere.towerBase===-7000,'Deep skyscraper bases');checks.themes.push({stage,theme,skyline:state.skyline,gaps:state.gaps.length,pipes:state.pipes.length});
  }
  await shot('oblivion-final-exam-menu');
  checks.windows=(await snapshot()).skyline;
  assert(checks.windows.profiles===4&&checks.windows.rounded>0&&checks.windows.stepped>0,'Varied tower profiles');
  assert(checks.windows.occupancyRange[1]-checks.windows.occupancyRange[0]>.4,'Varied office occupancy');
  assert(checks.windows.floorHeightRange[1]-checks.windows.floorHeightRange[0]>5,'Varied floor spacing');
  console.log(JSON.stringify({progress:'themes, skyline and windows complete',checks:checks.themes,windows:checks.windows,errors}));
  await go('slalom','bank');const entry=await snapshot();const key=entry.bankAngle<0?'a':'d';await page.keyboard.down('w');await page.keyboard.down('Shift');await page.keyboard.down(key);await elapsedWait(.85);checks.drift=await snapshot();assert(Math.abs(checks.drift.bankAngle)>.2,'Visible bank');assert(checks.drift.ships[0].drifting&&checks.drift.ships[0].driftTier>=1,'Bank drift charges');await page.keyboard.press('Escape');await shot('slalom-banked-drift');await page.click('#resume-button');await elapsedWait(.05);checks.release=(await snapshot()).ships[0];assert(checks.release.boost>0&&!checks.release.drifting,'Bank drift release turbo');console.log(JSON.stringify({progress:'banked keyboard drift complete',bank:checks.drift.bankAngle,tier:checks.drift.ships[0].driftTier,boost:checks.release.boost,errors}));
  for(const [stage,count] of [['slalom',1],['rift',3],['vortex',1],['oblivion',4]])for(let i=0;i<count;i++){
    await go(stage,i?'jump'+(i+1):'jump');await page.keyboard.down('w');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne>.1,{timeout:90000});const flying=await snapshot();if((stage==='rift'&&i===2)||(stage==='oblivion'&&i===3)){await page.keyboard.press('Escape');await shot(`${stage}-offset-jump-${i+1}`);await page.click('#resume-button');await page.keyboard.down('w');}
    await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne===0,{timeout:90000});const landed=await snapshot(),p=landed.ships[0],gap=landed.gaps[i];assert(p.recovery===0&&p.s>=gap.end&&p.s<=gap.landingEnd,`${stage} jump ${i+1} lands in its real deck`);checks.jumps.push({stage,index:i+1,flying:flying.ships[0],landed:p});console.log(JSON.stringify({progress:`${stage} jump ${i+1} landed`,s:p.s,errors}));
  }
  for(const stage of ['vortex','oblivion']){
    await go(stage,'tuberamp');await page.keyboard.down('w');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne>.1,{timeout:90000});const flying=await snapshot();assert(flying.tubeShape<-.99,'Ramp flies into the tube interior');await page.keyboard.press('Escape');await shot(`${stage}-tunnel-ramp`);await page.click('#resume-button');await page.keyboard.down('w');await page.waitForFunction(()=>window.__VECTOR99__.snapshot().ships[0].airborne===0,{timeout:90000});const landed=await snapshot();assert(landed.ships[0].recovery===0,'Tube ramp returns safely');checks[`${stage}Ramp`]={flying:flying.ships[0],landed:landed.ships[0]};console.log(JSON.stringify({progress:`${stage} tunnel ramp landed`,errors}));
  }
  await go('helix','clouds');await page.keyboard.press('Escape');await shot('larger-sparse-skyscrapers');checks.skyline=(await snapshot()).skyline;assert(checks.skyline.buildings===22&&checks.skyline.minimumCourseClearance>=0,'Helix skyline preserves its theme and clears the course');
  await page.setViewport({width:390,height:844});await go('slalom');await shot('course-theme-mobile');assert(await page.evaluate(()=>document.documentElement.scrollWidth===innerWidth),'Mobile menu fits');
  assert(errors.length===0,'No browser or shader errors');await fs.writeFile(`${output}/course-themes-playtest.json`,JSON.stringify({success:true,errors,checks,sizes},null,2));console.log(JSON.stringify({success:true,errors,jumps:checks.jumps.length,sizes},null,2));
}catch(error){await fs.writeFile(`${output}/course-themes-playtest.json`,JSON.stringify({success:false,error:String(error),errors,checks,sizes},null,2));console.error(error);process.exitCode=1;}finally{await closeBrowser();}
