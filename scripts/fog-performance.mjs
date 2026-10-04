import fs from 'node:fs/promises';
import path from 'node:path';
import {homedir} from 'node:os';
import {pathToFileURL} from 'node:url';
const {getBrowser,getPage,closeBrowser}=await import(pathToFileURL(path.join(homedir(),'.agents/skills/chrome-devtools/scripts/lib/browser.js')).href);
const browser=await getBrowser({headless:true,viewport:{width:640,height:360},args:['--enable-unsafe-swiftshader']}),page=await getPage(browser),errors=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
try{
  await page.goto('http://127.0.0.1:5173/?stage=helix',{waitUntil:'networkidle2',timeout:90000});
  const metrics=await page.evaluate(async()=>{
    const url=performance.getEntriesByType('resource').find(e=>new URL(e.name).pathname.endsWith('/three.js')).name;
    const THREE=await import(url),{NeonPost}=await import('/src/post.ts');
    const renderer=new THREE.WebGLRenderer({canvas:document.createElement('canvas'),antialias:false});renderer.setSize(640,360,false);
    const scene=new THREE.Scene();scene.background=new THREE.Color(0x222244);const camera=new THREE.PerspectiveCamera(67,640/360,.3,15000);camera.position.set(0,0,100);
    const post=new NeonPost(renderer,scene,camera);post.resize(640,360,1);post.bloom.enabled=false;
    post.atmosphere.clouds=Array.from({length:10},(_,i)=>({center:new THREE.Vector3((i%3-1)*60,0,-i*75),size:new THREE.Vector3(175,85,165),density:1}));
    const gl=renderer.getContext(),samples=[],pixel=new Uint8Array(4);
    const synchronize=()=>gl.readPixels(320,180,1,1,gl.RGBA,gl.UNSIGNED_BYTE,pixel);
    for(let round=0;round<3;round++)for(const enabled of [false,true]){
      post.atmosphere.pass.uniforms.atmosphereEnabled.value=enabled;
      for(let i=0;i<3;i++)post.render(0);synchronize();const start=performance.now();
      for(let i=0;i<6;i++){post.render(0);synchronize();}
      samples.push({enabled,round,msPerFrame:(performance.now()-start)/6,pixel:Array.from(pixel)});
    }
    const median=enabled=>samples.filter(s=>s.enabled===enabled).map(s=>s.msPerFrame).sort((a,b)=>a-b)[1];
    const result={width:640,height:360,renderer:gl.getParameter(gl.RENDERER),baselineMs:median(false),cloudsMs:median(true),samples};
    post.composer.passes.forEach(p=>p.dispose());post.composer.dispose();renderer.dispose();return result;
  });
  const suffix=process.argv[2]||'after';const file=`/Users/mike/Work/kart/docs/screenshots/fog-performance-${suffix}.json`;
  const report={success:errors.length===0,errors,metrics,note:'Isolated synchronized render timings under headless Chrome; not a hardware FPS claim.'};await fs.writeFile(file,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(errors.length)process.exitCode=1;
}finally{await closeBrowser();}
