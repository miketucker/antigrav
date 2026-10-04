# Course environments, readable markers, and cheaper clouds

The user requested large direction arrows, a different visual identity for every circuit, and reduced volumetric-fog quality to address slowdown. The existing instruction to build and modify the game authorizes implementation.

Use seven deterministic environment presets: Foundry industrial dusk; Abyss dark, moonlit mountains; Helix violet floating polyhedra; Slalom cyan/pink night city; Rift monumental jagged snow peaks with a muted red sky; Vortex deep blue orbital geometry; Oblivion a bright golden sunrise. Distinction comes from silhouettes, sky, lighting, haze, and landmark objects. Mountains are original procedural faceted geometry inspired by the requested mood. Preserve readable road and item lighting. Static geometry is merged or instanced, with stars in one point batch. Dispose environment assets during course changes.

Direction pylons receive a substantially larger dark sign with a bold arrow and PASS LEFT/RIGHT label. Draw the arrow as a polygon so it stays clear at distance; the sign texture has an explicit back-face counterpart for readable direction from either approach. Give the HUD the same arrow silhouette. Keep all marker gameplay rules unchanged.

Render the cloud volume field at half resolution, reduce its ray march from 14 steps/two noise octaves to 6 steps/one octave, and select only the four nearest relevant volumes. Composite using scene depth so clouds cannot cover nearer track geometry. Preserve full-resolution height haze and the game itself. Reuse scratch buffers instead of sorting allocated arrays each frame. Keep clouds paused with the race and bloom after atmosphere.

Validation: production type/build check; focused GPU checks for depth occlusion, half-resolution sizes, brightness/bloom, resize and pause; all seven course screenshots and marker-direction screenshots, responsive HUD, stage switching and disposal; compare isolated cloud-render cost against the original at a fixed viewport. Gameplay geometry and movement are unchanged, so use targeted marker/gameplay checks rather than rerunning every long CPU race.

Alternatives considered: fewer samples at full resolution improves cost less; flat cloud sprites are cheaper but lose the requested experience of flying through cloud volumes. A separate lower-resolution cloud field plus inexpensive full-resolution haze preserves depth and reduces the expensive work most.

## Verification completed

Production build and TypeScript check pass. Four targeted gameplay tests pass for drift release, both marker directions, five-marker speed recovery, and swept barriers. Chrome visual QA passes on all seven environments and both arrow directions, including mobile and Retina layouts. Repeated stage switches produce stable geometry/texture counts; star and sculpture assets are disposed correctly. Ten screenshots are below 5 MB each and were visually inspected.

GPU pixel checks preserve the 50% grade, bloom spill, cloud animation inside a volume, and depth occlusion on both the interior and edge of a thin foreground object. Odd viewport dimensions also allocate the expected rounded half-resolution cloud target.

At 640×360 in isolated synchronized headless Chrome rendering, the cloud-enabled median changed from 154.65 ms to 45.20 ms. The corresponding disabled medians were 63.28 and 35.45 ms. These are comparative measurements under this browser configuration, not hardware FPS predictions. Reports and screenshots are in docs/screenshots; scripts/environment-playtest.mjs, scripts/atmosphere-playtest.mjs and scripts/fog-performance.mjs reproduce the checks.
