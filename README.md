# VECTOR 99

A playable Three.js anti-gravity combat racing prototype with original low-poly ships, pixel texture maps, extreme banking, drift mini-turbos, real jumps, eight circuits, and five CPU opponents.

## Run

Requires Node.js 20.19+ or 22.12+ and a browser with WebGL 2.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. Use the circuit selector to choose one of eight circuits, then choose **Start Race** for a three-lap race. Direct links use `/?stage=foundry`, `abyss`, `helix`, `slalom`, `rift`, `vortex`, `oblivion`, or `driftlab`.

```sh
npm test
npm run build
npm run preview
```

The production game is built into `dist/`. Fonts, textures, and synthesized audio are local; the built game needs no external asset service.

## Controls

| Action | Keyboard | Gamepad |
| --- | --- | --- |
| Accelerate | W / Up | RT |
| Brake | S / Down | LT |
| Steer | A / D or Left / Right | Left stick |
| Airbrake | Q / E | LB / RB |
| Handbrake drift / release turbo | Shift + steer | X + left stick |
| Tilt up / down in flight | I / K or Up / Down | Left stick vertical |
| Use item | Space | A |
| Pause | Escape | Start |

Touch controls appear on devices with a coarse pointer, including DRIFT and UP/DOWN tilt buttons during flight. Hold W for thrust when using arrow keys to tilt; arrows also accelerate/brake when grounded. The settings panel provides CPU difficulty, bloom lighting, camera banking, impact shake, and soundtrack controls. Sound starts after a user interaction.

## Racing

- Lime chevron pads boost your ship for free.
- Hold **Shift while steering** at racing speed to slide through sharp turns. Sparks and the HUD show cyan, amber and violet charge tiers. Release Shift for a mini-turbo lasting 0.65, 1.15 or 1.8 seconds. Straight handbraking earns no charge; impacts, takeoff and recovery cancel it.
- Purple diamonds give one held item: booster, rocket, or mine.
- Rockets have limited homing toward rivals ahead; mines attach to the road even on steep banks.
- Impacts reduce speed and chassis energy. A wreck returns you to your last checkpoint.
- Carve either half-pipe wall. Use the center launch ramp to jump, or steer into an outer lane to bypass it.
- **Abyss Run** climbs to a 300-unit drop across a real gap. Neutral flight lasts about 4.9 seconds. Aim with A/D for the narrow, offset amber landing deck; the HUD predicts lateral alignment and warns if your range is short or long. A missed landing returns you to the approach.
- Abyss has three 14-unit vertical waves, each preceded by boost lanes. The crests launch short hops. Tilt up to trade speed for more height and airtime; tilt down to dive and land sooner. Pitch turns the flight velocity, and the ship and camera follow that direction.
- Its long **Reactor** pipe has a seamless, driveable 360° circumference. Carve with A/D to reach wall and ceiling boosts and items, then return toward the floor before the flared exit. The camera follows the pipe roll.
- **Helix Crown** races around the outside of a tube through a two-turn ascending helix, an offset vertical loop and a descending corkscrew. Its inward gravity is halved, keeping the underside playable with longer hops from ten orange ramps. Eight straight and angled chains have 3–5 boosts spaced roughly 1–2 seconds apart. Ten floating boost rings reward ramp launches. The exterior unfolds into three flat road sections; center before amber UNWRAP signs. An **Inner Reactor** tunnel in the corkscrew lets you carve its full interior circumference, with wall and ceiling incentives, before the road opens back onto the exterior. Tilt up to trade speed for airtime and down to dive toward the surface.
- **Neon Slalom** is the cyan/pink drift district: wide roads, repeated hairpins banked up to 70°, drift exits with boosts, one introductory sky jump, a curved interior tunnel and an exterior loop.
- **Rift Cascade** is the amber jump course: three real gaps of roughly 168, 174 and 190 units, alternating offset decks narrowing from 30 to 25 units, runway boosts and airborne rings. Every missed jump recovers before its own runway.
- **Vortex Spine** is the violet tube course: three interior tunnels, an exterior loop and descending spiral, wall/ceiling boost chains, and optional ramps with airborne rings. Interior ramps launch shorter hops into the tunnel before the inward field pulls the ship back to the surface.
- **Oblivion Circuit** is the red/gold final exam: 70° banks, four offset gaps (roughly 228–245 units), decks narrowing from 24 to 18 units, three tunnels, exterior ramps and loops, and the densest barriers and markers.
- These four circuits use rounded corners, tangent-aligned loop connectors and separated spiral turns. Return roads carry alternating boost/pickup lines and occasional barriers. Every jump has three runway boosts, 140 units apart, with clear landing decks. CPU pilots commit to short banked drifts when there is enough room to slide.
- **Drift Lab** is a flat 24-unit-wide ribbon of repeated, rounded zigzags with open edges. Hold Shift and steer into each bend, straighten your heading, then release Shift for a turbo on the exit. Ordinary steering has less authority on this deliberately slippery course. Missed turns produce a visible fall and a checkpoint reset; falling freezes lap progress and cancels drift charge. There are no tubes, jumps, hazards, pickups or boost pads. Five CPU pilots use the same handling and must drift to stay on the road.
- On the four expansion circuits, pass **left of cyan holographic chevrons** and **right of amber holographic chevrons**. A wrong-side pass cuts both nominal and boosted top speed to 80%. Five consecutive correct markers restore full power; another miss resets the recovery streak. A large text-free chevron on the HUD shows the next direction; the speed caption and race notices report power recovery. Flying far above a marker counts as a miss. Every racer follows the same rules.
- Dodge red blocks on roads and tunnel walls. Swept collisions catch high-speed impacts and drain energy. Jump gaps contain no road geometry: a missed landing returns you to a safe approach checkpoint, and landing checkpoints validate only after touchdown.
- Ships now run at twice the original speed: 140 nominal and 192 boosted simulation units. Acceleration, braking, steering response, and rockets are tuned for that pace.
- A damped anti-gravity cushion compresses and rebounds above the road. Crests and ramp lips lift ships into flight before gravity and the track field bring them back to a cushioned landing.
- Bloom-lit twin cyan exhaust trails and thruster sparks follow every ship; boosts produce longer lime trails. Effects pause with the race and clear on restart.
- Ordered checkpoints determine laps, so recovery cannot grant a shortcut.
- CPU pilots use the same movement, drift, marker and item systems, with track lookahead, overtaking, pickup seeking, and obstacle/mine avoidance. They center for gap landings and tube exits, seek wall/ceiling rewards and use the same flight field as the player. Rubber-banding smoothly grants trailing rivals up to 17% extra pace and eases leaders by up to 7%, based on checkpoint-validated progress across laps.

The scene renders at full viewport resolution (up to 2× device pixel ratio), with a 50% brightness grade and HDR bloom. The eight environments have distinct skies, lighting, haze and silhouettes: industrial dusk on Foundry, moonlit peaks on Abyss, floating violet polyhedra on Helix, a dark neon city on Slalom, monumental snowy mountains beneath a muted red sky on Rift, starry blue orbital rings on Vortex, a golden sunrise on Oblivion, and a sparse cyan night void on Drift Lab. The mountains use original faceted geometry; floating sculptures are instanced and stars use a single point batch.

City courses retain large, sparse skyscrapers with half as many window slots per texture tile. Other environments reduce or replace the city. Buildings extend down to −7000 world units and disappear into height haze. Clouds remain depth-clipped 3D volumes that racers can fly through, but render at half resolution with six ray samples, one noise octave, and at most four nearby volumes. A depth-aware composite keeps foreground track edges clear; height haze and the rest of the scene stay at full resolution. Cloud motion pauses with the game. Bloom can be toggled in settings. Directional markers are floating double chevrons with no boards, poles or text. Their additive transparent hologram shader adds scanlines, restrained flicker and a moving light band; bloom gives them a luminous edge. Passed markers dim, animation pauses with the game, and the HUD repeats the text-free shape with an accessible direction label.

## Project structure

- `src/track.ts`: spline, transported track frames, stage definitions, banking, waves, half-pipe/full-pipe and exterior-tube profiles, ramps, gap geometry, and surface queries.
- `src/courses.ts`: authored routes for the four expansion circuits and the flat zigzag Drift Lab.
- `src/race.ts`: fixed-step movement, pitch-controlled flight, jumps, CPU driving, checkpoints, ranking, pickups, and weapons.
- `src/art.ts`: original procedural pixel textures and low-poly ship geometry.
- `src/scene.ts`: Three.js track/scenery, camera, particles, weapon visuals, and full-resolution rendering.
- `src/post.ts`: 50% scene-brightness grade, HDR bloom, and final color output.
- `src/atmosphere.ts`: half-resolution cloud ray marching, depth-aware compositing and full-resolution height haze.
- `src/environment.ts`: eight sky/lighting presets, faceted mountains, stars and instanced floating sculptures.
- `src/hologram.ts`: floating double-chevron geometry and its animated scanline shader.
- `src/wake.ts`: bounded, fading twin-engine exhaust ribbons.
- `src/ui.ts` and `src/style.css`: title, briefing, HUD, minimap, stage selection, landing guidance, settings, pause, and results.
- `src/audio.ts`: synthesized engines, electronic soundtrack, and game sounds.
- `src/main.ts`: inputs and the interpolated 60 Hz simulation loop.

The development server supports `?preview=bank`, `halfpipe`, `launch`, `bowl`, `boost`, and `finish` for testing difficult sections, effects, and results. Abyss adds `drop`, `waves`, `pipe`, and `ceiling`. Helix adds `spiral`, `loop`, `corkscrew`, `orbit`, `underside`, `flat`, `unwrap`, `chain`, `diagonal`, `ring`, `tunnel`, `tunnelceiling`, `clouds`, and `drift`. New circuits add `jump`, `jump2` / `jump3` / `jump4` where present, `bank`, `tuberamp`, `markers`, `barrier`, `connector` and `returnroad`, for example `/?stage=oblivion&preview=jump`. These shortcuts and the read-only diagnostic snapshot are excluded from production builds.

## Verification

Automated simulation tests cover doubled speed, hover compression/rebound, natural crest flight, bounded lap-aware CPU catch-up, track closure, steep banks, half-pipe height, CPU race completion, items, swept pickups/mines, ordered laps, launch/landing at six speeds (including boosted CPU catch-up), and pause/restart. Abyss tests also cover actual missing road, safe checkpoints, 360° pipe loops and seam normals, wall/ceiling reward collection, roughly five-second landings at three speeds, missed-landing recovery/retry, all CPU difficulties, boosted crest hops, nose-up speed/airtime tradeoffs, dives, and ship/velocity alignment, ceiling mines, and ceiling rocket hits. Helix tests cover outward normals and seams, three-axis terrain, continuous underside steering, every ramp at nominal/boost speed, local route projection, radial pitch controls, underside rewards and weapons, and CPU completion at every difficulty. Chrome browser testing covers keyboard movement, item use, exhaust trails, settings, pause/resume, responsive layout, stage switching, aimed abyss landings, full pipe loops, I/K pitch on wave hops, exterior rolls and top/underside ramp landings on Helix, and its loop/corkscrew camera views. GPU checks verify 50% visible brightness, bloom spill and toggling, and matching render/composer sizes at standard, Retina, and mobile resolutions. Screenshots are saved in `docs/screenshots/`.

The simulation tests additionally cover the three drift tiers and cancellation, both marker directions and five-marker power recovery, swept barriers, every gap on the four themed courses at nominal/boost/reduced power, safe tunnel-ramp hops, missed/overshot landing recovery without checkpoint shortcuts, and CPU completion at every difficulty on the new circuits. Browser QA is recorded in `docs/screenshots/expansion-playtest.json`; the reproducible script is `scripts/expansion-playtest.mjs`. `scripts/atmosphere-playtest.mjs` checks brightness, bloom and cloud depth occlusion on the GPU.

Firefox/Safari and physical gamepad/touch hardware have not been separately verified. This is a eight-circuit prototype; it does not include multiplayer or progression.

The original [design and build plan](docs/plans/2026-10-02-futuristic-racer-plan.md) describes the intended scope and later expansion.

Course-theme browser QA is recorded in `docs/screenshots/course-themes-playtest.json`; run `scripts/course-themes-playtest.mjs` for real-keyboard gap landings, banked drifting, tunnel ramp flight, skyline/window checks and theme screenshots.

Spline regression tests check nonadjacent clearance, heading changes, surface continuity across roads and tunnel walls, reward spacing and jump runways. Run `npx tsx scripts/spline-audit.ts` to regenerate `docs/screenshots/spline-audit.json` and the route/elevation diagram `spline-map.svg`. Original measurements are saved in `spline-audit-before.json`. `scripts/spline-playtest.mjs` checks the rebuilt connectors and return roads, player drifting, all nine keyboard jump landings and two tunnel ramp hops; its report is `docs/screenshots/spline-playtest.json`.

Environment and marker browser QA is recorded in `docs/screenshots/environment-playtest.json`; `scripts/environment-playtest.mjs` checks all eight environments, holographic chevrons, cloud resolution and pause, repeated course switching, Retina sizing and mobile layout. `scripts/fog-performance.mjs` measures synchronized isolated rendering under headless Chrome, with before/after reports in `docs/screenshots/`; these timings are comparative and do not represent hardware frame rates.

Drift Lab simulation checks in `tests/drift-lab.test.ts` cover flatness and route separation, timely versus normal/late/reversed steering, ballistic edge falls, progress-safe checkpoint resets, and three-lap CPU completion with drift turbos at every difficulty. `scripts/drift-lab-playtest.mjs` checks course selection, a keyboard drift release through the normal input handler, visible falling and recovery; its report and screenshots are in `docs/screenshots/`.
