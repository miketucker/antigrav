import * as THREE from 'three';
import { CORNER_ARROW_POINTS } from './direction-arrow';

/** Geometry is the icon: no board, lettering, or supporting pole. */
export function hologramArrow(side:'left'|'right',phase=0){
  const shape=new THREE.Shape();
  CORNER_ARROW_POINTS.forEach(([x,y],i)=>{
    const px=(x-50)*.18*(side==='left'?-1:1),py=(50-y)*.18;
    if(i)shape.lineTo(px,py);else shape.moveTo(px,py);
  });
  shape.closePath();
  const geometry=new THREE.ShapeGeometry(shape);
  const material=new THREE.ShaderMaterial({transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,
    uniforms:{time:{value:0},phase:{value:phase},intensity:{value:1},tint:{value:new THREE.Color(side==='left'?0x65dcff:0xffbd72)}},
    vertexShader:`varying vec3 vLocal;varying vec3 vNormal;varying vec3 vView;
      void main(){vLocal=position;vec4 view=modelViewMatrix*vec4(position,1.0);vNormal=normalize(normalMatrix*normal);vView=normalize(-view.xyz);gl_Position=projectionMatrix*view;}`,
    fragmentShader:`uniform float time,phase,intensity;uniform vec3 tint;varying vec3 vLocal,vNormal,vView;
      void main(){float clock=time+phase;
        float scan=.55+.45*smoothstep(-.35,.45,sin(vLocal.y*18.0-clock*5.0));
        float band=exp(-pow(mod(vLocal.y-clock*2.0+9.0,18.0)-9.0,2.0)*2.0);
        float flicker=.94+.04*sin(clock*31.0)+.02*sin(clock*79.0);
        float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(vView))),2.0);
        float alpha=(.38+.28*scan+.13*band)*flicker*intensity;
        gl_FragColor=vec4(tint*(3.0+scan*2.0+band*3.0+rim*1.8),alpha);}`});
  const mesh=new THREE.Mesh(geometry,material);mesh.name='direction-arrow';mesh.position.y=12;
  return mesh;
}
