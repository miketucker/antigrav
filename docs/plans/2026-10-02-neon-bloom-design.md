# Full-resolution neon racing

The requested visual update replaces the 420/720-pixel render buffer and CSS pixel upscaling with viewport-resolution rendering, up to 2× device pixel ratio. Low-poly geometry and the authored pixel texture maps retain the game's existing character.

The renderer uses a half-float EffectComposer pipeline: scene render, a 50% display-brightness grade, UnrealBloomPass, and OutputPass. The brightness grade converts linear light to display space before halving brightness and converting back, so it produces the requested visible reduction instead of a much subtler exposure adjustment. Bright HDR accents remain strong enough to bloom after grading. Native render buffers use multisampling where appropriate; post-processing buffers resize with the viewport.

Cyan road edges and inset guide lines, brighter twin propulsion flames and trails, violet pickup cores and rings, lime boost pads, red mine rings, and amber rocket exhaust create readable light sources. Distant buildings gain sparse emissive windows, vertical neon panels, roof lines, and beacons. Existing fog softens distant lights. The UI stays legible above the graded scene.

The obsolete classic/sharp resolution selector is removed. A bloom toggle offers a simple visual preference while keeping full-resolution rendering and the darker grade. Racing behavior, track shapes, speed, and CPU competition remain as implemented.

Verification: strict production build, existing simulation tests, and Chrome screenshots/playtesting. Browser checks cover native sizing and high-DPI resize, bloom on/off, stable darkening with bloom disabled, glow sources, paused effects, race controls, ramps, and mobile layout.

Implementation order: add the post-processing pipeline and resize handling; author emissive accents; update settings and documentation; build, run tests, and inspect screenshots before finishing.

Implemented and verified. The production build and all 17 simulation tests pass. Chrome playtesting passed acceleration, steering, pause/resume, settings, booster use, frozen exhaust effects while paused, ramp flight/landing, race results/restart, and mobile layout with no runtime errors. A separate GPU check confirmed gray pixels change from 128 to 64, bloom adds light outside an isolated bright object, and toggling bloom preserves the darker grade. Render and composer buffers matched 1440×900 at 1×, 1600×1200 for an 800×600 Retina viewport, and 390×844 on mobile.

The final bloom uses strength 0.38, radius 0.3, and threshold 0.9. Propulsion brightness was tuned after screenshot inspection to preserve visible ship silhouettes. Neon strips follow the full track surface; distant window lighting and city accents are batched using instanced meshes. Screenshots are `docs/screenshots/neon-bank.png`, `neon-propulsion.png`, and `neon-city.png` (535–754 KB, without compression).

The pipeline uses the installed Three.js addons described in the [UnrealBloomPass documentation](https://threejs.org/docs/pages/UnrealBloomPass.html).
