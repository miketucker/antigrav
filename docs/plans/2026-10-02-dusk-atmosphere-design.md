# Dusk atmosphere and deep city

The user added taller environmental skyscrapers, bases extending far below fog visibility, vertical fog, a luminous dusk horizon and volumetric clouds that racers drift through. Complete this alongside the authorized Helix boost/road changes.

Extend the distant skyline and trackside towers to bases around -7000 world units, with taller roof silhouettes and repeated pixel facades. Keep physical columns clear of the course in the horizontal plane. Remove the visible shallow ground and floating mountain bases into the lower haze.

Replace uniform distance fog with a depth-aware post-processing atmosphere. Reconstruct scene world positions from the scene depth texture and camera matrices. Integrate height-dependent haze along each view ray so lower buildings dissolve while nearby racing remains legible. Render an unlit procedural sky with a narrow peach/pink dusk glow and a violet lower horizon. Preserve the full-resolution image, low-poly geometry, existing brightness grade and bloom.

Author sparse ellipsoidal 3D cloud volumes along each course, including the Abyss flight gap and Helix climb/loop. Ray-march procedural density only inside intersected volumes and stop at scene depth. This works both outside and inside a cloud and prevents cloud shading through opaque ships or roads. Cloud motion pauses with the race. Bound volume count and march steps for browser performance; update uniforms and reuse the pass on stage changes.

Verify depth-texture resizing, stage switching, pause, bloom settings, visible city depth/dusk horizon and flying through clouds in Chrome. Keep the independent brightness/bloom probe unchanged when atmosphere is disabled.

Verification passes in Chrome: clouds affect foreground viewing rays, are clipped by opaque geometry and freeze when paused. The GPU probe's clear/behind-cloud pixel stays `[64,64,64]`, while a foreground cloud produces `[108,96,96]`. The original 50% grade reads 128 → 64 and bloom adds neighboring light spill. Depth attachments match standard, Retina and mobile resolutions after stage switches/settings changes. Screenshots show the dusk horizon, extended towers, cloud haze and legible track/ship geometry; all new PNGs are below 5 MB with no compression needed. See `docs/screenshots/atmosphere-playtest.json` and `docs/screenshots/expansion-playtest.json`.
