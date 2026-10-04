# Futuristic hover racing game — proposed design and build plan

Date: 2026-10-02

Status: implemented playable prototype. Scope: one track, one player, and five CPU racers. The workspace includes the game, simulation tests, a production build, and Chrome playtest screenshots. Additional browser and physical controller validation remains follow-up work.

## Goal and first release

Create an original Three.js arcade racer inspired by Wipeout's speed and combat, with a PS1 visual style and tracks shaped by skatepark bowls, half-pipes, quarter-pipes, and sharply banked curves.

The recommended first release contains one polished circuit, one playable hovercraft design with distinct CPU liveries, five CPU opponents, three-lap races, speed boosters, rockets, and mines. Include a title screen, countdown, pause, results, and restart. Ship keyboard controls first; add gamepad controls during polish if scope permits.

Success means the player can race across the full width of extreme banks, launch and land reliably, overtake opponents, use every item, and finish a complete race. The first circuit should be enjoyable before additional tracks or progression are added.

## Approaches and recommendation

1. **Surface-based arcade physics with airborne jumps — recommended.** Build a procedural track surface and simulate steering, speed, lateral drift, and hover height relative to it. Switch to world-space motion during jumps. This gives direct control over the handling and reliable bank contact, but requires careful surface sampling and transitions.
2. **Spline-guided movement with lateral offsets.** Easier to prototype and good for demonstrating speed, but ordinary versions feel constrained and do not naturally support carving across bowl walls or independent flight. Useful only for an early diagnostic racer.
3. **Full rigid-body hover simulation.** Simulate hover forces and collisions against a track mesh through a physics engine. It provides more emergent behavior, but tuning high-speed contact, steep walls, CPU control, and landings adds substantial complexity.

Use the first approach. Track coordinates support queries and race progress; steering remains under player or CPU control. Do not automatically move ships along the centerline.

## Game feel and controls

- W / Up: accelerate. S / Down: brake.
- A/D or Left/Right: steer.
- Q/E: left and right airbrakes, giving sharper turns at a speed cost.
- Space: use the held item. Escape: pause.
- Steering has acceleration, lateral momentum, and damping. The ship visibly banks into turns and hovers above the driving surface.
- Retain grip on deliberately banked track sections. Allow takeoff at authored ramp lips and loss of contact beyond exposed edges.
- Wall impacts scrub speed and create sparks. Ship impacts create mild separation and deflection rather than long lockups.
- Falling or losing all energy returns the ship to its last valid checkpoint after a brief delay. Ordered checkpoint progress must still be earned.

Tune normal speed before boosters. Derive the sensation of speed from nearby track detail, camera distance, modest field-of-view changes, engine pitch, and exhaust trails.

The chase camera follows the ship's track frame with damping, looks ahead through turns, and uses reduced roll for readable extreme banking. Include a camera-roll setting and independently reduce screen shake. Validate camera clearance from bowl walls and landing ramps.

## Signature circuit: industrial sky skatepark

Working circuit name: **Foundry Circuit**. Aim for a roughly 60–90 second lap after handling is established; final length depends on the tuned speed.

The lap moves through these landmarks:

1. Broad starting straight, mild opening turn, and clearly marked boost pads.
2. Alternating sweeping turns with banks rising to approximately 60–80 degrees.
3. A wide half-pipe corridor: the driving surface curves upward across its width, allowing racers to climb either wall and carve back down.
4. A bowl-shaped hairpin with a fast outer wall line and a shorter, tighter inside line.
5. A quarter-pipe-style launch ramp feeding a forgiving landing transition; give it a slower bypass that is easy to read.
6. Elevated S-curves passing above an earlier section, then a downhill return to the finish straight.

Use smooth transitions into every bank, profile change, takeoff, and landing. Put useful pickups on different lines to make racing-line choices meaningful. Introduce the first mine and weapon opportunities on wide sections. Keep boost pads away from blind, unavoidable hazards.

## Track representation

Author a closed centerline spline plus data for width, bank angle, cross-section profile, barriers, launch zones, checkpoints, and item placements. Three.js provides closed Catmull-Rom curves and arc-length-aware curve sampling; use the latter to avoid uneven travel and geometry spacing. [CatmullRomCurve3](https://threejs.org/docs/pages/CatmullRomCurve3.html), [Curve sampling](https://threejs.org/docs/pages/Curve.html).

Generate each section by sweeping its cross-section along the centerline. Use flat, shallow U, and deep U profiles, with optional asymmetric walls. Banking rotates the whole section; a U profile changes the drivable shape across its width. These are separate controls.

Build stable local frames with parallel transport, then apply authored banking. Correct residual twist around the closed loop. Avoid defining orientation solely from a global up vector, which becomes unreliable on steep transitions.

Expose one shared surface query that returns position, forward direction, lateral direction, normal, curvature, boundaries, and section identity. Use it for movement, item attachment, CPU planning, and placement of render meshes. Account for surface derivatives when mapping travel speed into track coordinates: an outside line must cover more actual distance than an inside line.

Produce a triangulated track through `BufferGeometry`, with UV distance measured along the track so textures repeat consistently. Keep the collision surface faithful to the visible driving surface; coarse decorative meshes can be independent. [BufferGeometry](https://threejs.org/docs/pages/BufferGeometry.html).

Retain section identity during contact queries, especially at overpasses. Search nearby connected sections first instead of snapping to whichever road is closest in world space. Validate track closure, bank continuity, profile continuity, usable width, and accidental intersections before racing.

## Movement and collision

Use a fixed 60 Hz simulation, with interpolation for rendering. Limit accumulated catch-up time after long browser stalls and pause when the page loses focus.

Grounded movement integrates throttle, drag, steering, lateral drift, airbrakes, and surface-relative hover behavior. The local normal governs adhesion and visual alignment. Include the effects of slopes and curvature in the tuning without demanding realistic physical fidelity.

At takeoff, carry the ship's world-space velocity into airborne simulation. Apply gravity and limited air steering. Reattach only on a valid crossing of a drivable surface with an acceptable approach direction; blend orientation on landing. Missing the landing triggers recovery.

Use simple sphere or capsule bounds for ships and projectiles. Sweep fast-moving bodies over each simulation step so rockets, boost pads, thin barriers, and mines cannot be skipped between frames. Separate race progress from recovery position to prevent extra laps or unintended shortcuts.

## Boosters and weapons

Provide both permanent track boost pads and a consumable booster item. Hold one item at a time, with respawning pickups. Initial timings and strength are tuning values, not final balance.

- **Boost pad:** temporary acceleration and higher speed cap, with a clear arrow texture, exhaust change, and sound cue. One activation per pass prevents continuous retriggering.
- **Booster item:** approximately 1.5 seconds of stronger acceleration. Keep a firm maximum speed and bounded stacking behavior.
- **Rocket:** launch forward with limited homing toward a visible opponent within a forward cone. Turn rate, lifetime, and range are bounded. Rockets collide with the track and barriers; impacts cause energy loss, speed loss, and brief handling disruption.
- **Mine:** drop onto the driving surface behind the ship. Align it to the local normal so it works on steep banks. Arm after a short delay, ignore the owner during that delay, and detonate when a racer enters its trigger volume. Expire old mines and cap the active count.

Use strong silhouettes and distinct colors for each item. Show the held item, energy, active boost, and incoming-rocket warning on the HUD. Give hit effects a short recovery window to avoid repeated damage trapping a racer.

## CPU opponents

CPU drivers generate the same throttle, steering, airbrake, and item-use commands as the player and use the same movement rules.

Each driver samples the track ahead, chooses a target speed based on curvature and upcoming ramps, and follows a lateral racing line. Extend lookahead with speed. Evaluate a few candidate lines for overtaking, boost pads, pickups, walls, and mines. Avoid rapid lane switching by holding decisions briefly.

Run tactical decisions at a lower frequency than movement, such as 10 Hz, while updating steering every simulation step. Give drivers different aggression, reaction delay, line precision, and item priorities. Use seeded variation for repeatable tuning.

Drivers fire rockets when a viable target is ahead, drop mines when another racer is following, and boost on safe sections. Difficulty changes decision quality and mistakes. Any later catch-up assistance must be bounded and explicit; do not teleport opponents or give them different collision rules.

## PS1 art and sound

- Angular wedge-shaped ships, initially targeting roughly 200–500 triangles each.
- Faceted buildings, gantries, pipes, concrete bowls, warning panels, and distant silhouettes.
- Mostly 64×64 and 128×128 texture maps with painted panel seams, checker markings, hazard stripes, rust, and fictional team logos.
- Nearest-neighbor texture magnification. Test mipmapped minification for distant roads to keep high-speed patterns readable. Three.js exposes these choices on `Texture`. [Texture filtering](https://threejs.org/docs/pages/Texture.html).
- Render the world at an intentionally low internal resolution, such as 426×240 or 640×360, and enlarge it with nearest-neighbor sampling. Keep the HUD legible at display resolution. Render targets support an intermediate scene image. [WebGLRenderTarget](https://threejs.org/docs/pages/WebGLRenderTarget.html).
- Limited palette, simple lighting, painted or vertex-colored shading, distance fog, sprite explosions, and restrained exhaust particles.
- Optional ordered dithering and subtle vertex snapping after racing is stable. Keep essential track edges and hazards readable.
- Electronic race music, engine pitch tied to speed, airbrake noise, boost surge, pickup chimes, and recognizable weapon cues. Start audio after the player's start action.

All ships, tracks, logos, textures, UI, and audio should have an original identity.

## Runtime architecture

Use TypeScript, Three.js, and Vite, with a lightweight DOM HUD. Pin compatible dependency versions when scaffolding and keep rendering separate from the simulation.

Suggested module responsibilities:

- `core`: fixed timestep, input, asset loading, settings, and audio.
- `track`: authored track data, generated mesh, surface queries, checkpoints, and validation.
- `vehicles`: shared ship state, movement, collisions, and recovery.
- `ai`: track preview, line selection, opponent awareness, and item decisions.
- `combat`: pickups, boost effects, rockets, mines, and damage.
- `race`: countdown, lap validation, ranking, finish order, and results.
- `render`: ship visuals, camera, retro presentation, particles, and scenery.
- `ui`: title, controls, HUD, pause, and results.

Data flows from player/CPU commands into simulation, then collision and combat resolution, then race-state updates. Render and HUD read the resulting state. Use events for sounds and short-lived visual effects rather than making visuals responsible for gameplay.

Provide visible loading progress, a readable asset-load failure message, and a WebGL support check. Current Three.js `WebGLRenderer` uses WebGL 2. [WebGLRenderer](https://threejs.org/docs/pages/WebGLRenderer.html).

Pool projectiles and particles, instance repeated scenery where useful, and avoid allocating vectors inside hot update loops. Measure performance with all six ships and active combat before expanding content.

## Build milestones and completion checks

### 1. Greybox handling and difficult track sections

Create the project shell, fixed-step loop, track data, surface generator, debug views, one ship, and chase camera. Include a flat straight, steep bank, half-pipe, and jump in the test circuit.

**Done when:** the player can accelerate, brake, steer across the track, climb bowl walls, launch, land, and recover. Full-speed traversal has no orientation flips, unintended road snapping, or camera burial. Tune this before adding combat.

### 2. Complete racing loop

Build Foundry Circuit, checkpoints, boost pads, countdown, laps, energy/recovery, ranking, finish, pause, and restart. Add an initial CPU driver, then increase to five opponents.

**Done when:** the player and five CPUs can finish three-lap races. Ranking works over the finish seam and overpass. Reverse driving, missed checkpoints, and recovery cannot grant a lap.

### 3. Items and CPU tactics

Add pickups, held-item state, booster, rockets, mines, damage feedback, hazard avoidance, overtaking, and CPU item use.

**Done when:** every item works for both player and CPUs on flat and banked sections. Fast projectiles and racers cannot pass through triggers. CPU behavior remains stable in traffic and around the jump.

### 4. Retro presentation

Replace greyboxes with original low-poly ships, texture atlases, scenery, pixel rendering, HUD art, particles, and sound. Add optional retro shader effects only after checking readability.

**Done when:** an ordinary screenshot clearly communicates the intended PS1 style, while track boundaries, pickups, hazards, and opponents stay readable at racing speed.

### 5. Balance, browser validation, and delivery

Tune steering, speed, camera, jump forgiveness, item strength, pickup positions, and CPU difficulty. Profile draw calls and frame times. Test current desktop Chrome, Firefox, and Safari on a documented target machine. Provide build instructions and a production bundle.

**Done when:** repeated races run without crashes or stuck opponents; pause/resume and restart reset all race and item state; the game approaches its 60 fps target under normal six-racer combat load. If it misses the target, adjust scenery, effects, and internal resolution based on measurements.

## Validation priorities

Automate meaningful simulation checks for closed-track frame continuity, ordered checkpoint/lap logic, boosted movement through thin triggers, airborne landings, and reproducible CPU race completion. Do not substitute screenshot checks for handling playtests.

Manually validate the steepest bank, both half-pipe walls, launch and landing at normal and boosted speed, rockets around banked turns, mines on near-vertical sections, overpass contact selection, and camera behavior. Repeat important movement scenarios while rendering at 30, 60, and 120 fps to verify that the fixed simulation preserves gameplay.

The main risks are discontinuous track frames, unreliable jump reattachment, CPU cornering at extreme speed, and retro effects obscuring the road. Address the first three in greybox milestones and the fourth during art polish.

## Later expansion

After the prototype meets the checks above, add two more circuits, ships with distinct handling, time trials and ghosts, then championship progression. Reuse the track data and shared driver interfaces. Treat multiplayer, a full track editor, and a skate-style trick scoring system as separate projects unless they become explicit priorities.
