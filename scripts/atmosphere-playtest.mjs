import fs from 'node:fs/promises';import path from'node:path';import{homedir}from'node:os';import{pathToFileURL}from'node:url';
const{getBrowser,getPage,closeBrowser}=await import(pathToFileURL(path.join(homedir(),'.agents/skills/chrome-devtools/scripts/lib/browser.js')).href);
const browser=await getBrowser({headless:true,viewport:{width:640,height:480},args:['--enable-unsafe-swiftshader']}),page=await getPage(browser),errors=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
try{
await page.goto('http://127.0.0.1:5173/?stage=foundry',{waitUntil:'networkidle2',timeout:90000});
const pixels=await page.evaluate(async()=>{
  const threeUrl=performance.getEntriesByType('resource').find(e=>new URL(e.name).pathname.endsWith('/three.js')).name;
  const THREE=await import(threeUrl),{NeonPost}=await import('/src/post.ts');
  const renderer=new THREE.WebGLRenderer({canvas:document.createElement('canvas'),antialias:false});renderer.setSize(64,64,false);
  const scene=new THREE.Scene();scene.background=new THREE.Color(0x808080);const camera=new THREE.OrthographicCamera(-2,2,2,-2,.1,100);camera.position.z=5;
  const post=new NeonPost(renderer,scene,camera);post.resize(64,64,1);post.bloom.enabled=false;const gl=renderer.getContext();
  const read=(x,y)=>{const a=new Uint8Array(4);gl.readPixels(x,y,1,1,gl.RGBA,gl.UNSIGNED_BYTE,a);return Array.from(a);};
  post.grade.uniforms.brightness.value=1;post.render(0);const original=read(0,0);post.grade.uniforms.brightness.value=.5;post.render(0);const darkened=read(0,0);
  scene.background.setHex(0);const geometry=new THREE.PlaneGeometry(1,1),material=new THREE.MeshBasicMaterial({color:new THREE.Color(1,1,1).multiplyScalar(10)}),mesh=new THREE.Mesh(geometry,material);scene.add(mesh);
  post.render(0);const withoutBloom=read(20,32);post.bloom.enabled=true;post.render(0);const withBloom=read(20,32);post.bloom.enabled=false;
  mesh.scale.set(5,5,5);mesh.position.set(200,0,100);camera.position.set(200,0,105);material.color.setHex(0x808080);post.atmosphere.pass.uniforms.atmosphereEnabled.value=true;
  post.render(0);const clear=read(32,32);
  const cloud={center:new THREE.Vector3(200,0,30),size:new THREE.Vector3(80,80,20),density:500};post.atmosphere.clouds=[cloud];post.render(0);const behind=read(32,32);
  cloud.center.set(200,0,85);post.render(0);const inside=read(32,32);
  // A thin foreground object must stay clear even while the background fills with clouds.
  mesh.scale.set(.9,1.2,1);material.color.setHex(0xff4400);scene.background.setHex(0x222244);post.atmosphere.clouds=[];post.render(0);
  const foregroundClear=read(28,30),edgeClear=read(26,26),backgroundClear=read(10,30);
  cloud.center.set(200,0,30);cloud.size.set(80,80,20);post.atmosphere.clouds=[cloud];post.render(0);
  const foregroundCloud=read(28,30),edgeCloud=read(26,26),backgroundCloud=read(10,30);
  post.resize(63,47,1);const reducedSize={width:post.atmosphere.pass.cloudTarget.width,height:post.atmosphere.pass.cloudTarget.height};
  post.composer.passes.forEach(p=>p.dispose());post.composer.dispose();geometry.dispose();material.dispose();renderer.dispose();
  return{original,darkened,withoutBloom,withBloom,clear,behind,inside,foregroundClear,foregroundCloud,edgeClear,edgeCloud,backgroundClear,backgroundCloud,reducedSize};
});
const success=errors.length===0&&pixels.original[0]===128&&Math.abs(pixels.darkened[0]-64)<=1&&pixels.withoutBloom[0]===0&&pixels.withBloom[0]>10&&pixels.clear.every((v,i)=>Math.abs(v-pixels.behind[i])<=1)&&pixels.inside.some((v,i)=>i<3&&Math.abs(v-pixels.clear[i])>6)&&pixels.foregroundClear.every((v,i)=>Math.abs(v-pixels.foregroundCloud[i])<=1)&&pixels.edgeClear.every((v,i)=>Math.abs(v-pixels.edgeCloud[i])<=1)&&pixels.backgroundCloud.some((v,i)=>i<3&&Math.abs(v-pixels.backgroundClear[i])>6)&&pixels.reducedSize.width===32&&pixels.reducedSize.height===24;
await fs.writeFile('/Users/mike/Work/kart/docs/screenshots/atmosphere-playtest.json',JSON.stringify({success,errors,pixels},null,2));console.log(JSON.stringify({success,errors,pixels},null,2));if(!success)process.exitCode=1;
}finally{await closeBrowser();}
