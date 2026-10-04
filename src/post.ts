import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { Atmosphere } from './atmosphere';

/** Darken display brightness before adding light spill from the HDR accents. */
export class NeonPost {
  readonly composer: EffectComposer;
  readonly grade: ShaderPass;
  readonly bloom: UnrealBloomPass;
  readonly atmosphere=new Atmosphere();
  readonly camera:THREE.Camera;

  constructor(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera) {
    this.camera=camera;
    renderer.toneMapping = THREE.LinearToneMapping;
    const target = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType });
    target.depthTexture=new THREE.DepthTexture(1,1,THREE.UnsignedIntType);
    this.composer = new EffectComposer(renderer, target);
    this.composer.addPass(new RenderPass(scene, camera));
    this.composer.addPass(this.atmosphere.pass);
    this.grade = new ShaderPass({
      name: 'SceneBrightness',
      uniforms: { tDiffuse: { value: null }, brightness: { value: .5 } },
      vertexShader: `varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: `uniform sampler2D tDiffuse;
        uniform float brightness;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tDiffuse, vUv);
          vec4 displayColor = sRGBTransferOETF(vec4(max(color.rgb, vec3(0.0)), color.a));
          displayColor.rgb *= brightness;
          gl_FragColor = sRGBTransferEOTF(displayColor);
        }`,
    });
    this.composer.addPass(this.grade);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), .38, .3, .9);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
  }

  resize(width: number, height: number, pixelRatio: number) {
    // Keep fine polygon silhouettes without multiplying MSAA cost on retina screens.
    const samples = pixelRatio <= 1 ? 4 : 0;
    this.composer.renderTarget1.samples = this.composer.renderTarget2.samples = samples;
    this.composer.setPixelRatio(pixelRatio);
    this.composer.setSize(width, height);
  }

  render(dt: number) {this.camera.updateMatrixWorld();this.atmosphere.update(this.camera,this.composer.readBuffer.depthTexture!,dt);this.composer.render(dt); }
}
