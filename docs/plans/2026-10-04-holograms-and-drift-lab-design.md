# Holographic chevrons and Drift Lab

Replace directional marker boards, lettering and poles with large double-chevron geometry. An additive transparent shader adds moving scanlines, a sweeping band, restrained flicker and view-dependent glow. Cyan and amber retain the existing left/right meaning and marker validation. HUD directions use the same text-free shape with an accessible label. Passed markers dim; animation pauses with the race.

Add an eighth selectable three-lap course, DRIFT LAB, with five CPU opponents. Two separated runs of large alternating zigzags form a closed loop on one perfectly flat, constant-width surface. Rounded corners preserve continuous frames without banking, ramps, tubes, hazards, boost pads or item pickups. Charged drift releases are the speed reward. The sparse night environment keeps the corner sequence easy to read.

Open edges replace wall clamping on this 24-unit-wide course. Leaving the road preserves world velocity and starts a visible gravity-driven fall, cancels drift charge, freezes checkpoint progress and returns the racer to the last checkpoint. Ordinary steering has less authority on this deliberately slippery course; handbrake drifting retains the existing stronger yaw control, charge thresholds and turbo durations. CPUs use the same handling and must drift through the test corners. Existing courses retain their wall handling and steering.

Alternatives: a broad flat arena would obscure the racing line; sharp unsmoothed polygon corners would reintroduce the spline jolts already fixed. A narrow ribbon with rounded zigzag apices tests drift timing and edge control clearly.

Implementation: author and register the course and environment; integrate course-specific handling and falling; replace world and HUD markers; verify flatness, route separation, fall/reset semantics, successful drift versus failed ordinary steering, CPU completion, production build and Chrome visual/input behavior.

## Verification

All 80 simulation tests pass, including four Drift Lab tests. Normal, late and reversed steering leave the edge, while timely drifting can traverse the circuit. Five CPU racers use the same movement and finish without edge recoveries at rookie, standard and expert difficulty, earning release turbos. The production TypeScript check and Vite build pass.

Chrome Drift Lab QA passes for the eighth circuit selector, flat open-edge terrain, keyboard input through the normal handler, a charged release turbo above nominal speed, a visible gravity-driven fall, frozen route progress and checkpoint recovery without free laps. Its five screenshots are 116–252 KiB and have been visually inspected.

Chrome environment QA passes on all eight courses with no page or shader errors. Both world markers are single, text-free 16.9×12 meshes with transparent ShaderMaterial and no depth writes or support geometry. Both HUD directions are 100 pixels wide on desktop and 78 pixels on mobile, with accessible labels and no visible text. Hologram time pauses correctly. Two complete rounds of course switching leave identical GPU geometry and texture counts per course. Retina targets retain the existing half-resolution clouds. Eleven environment/marker screenshots were inspected, all below 5 MB without compression. Reports: `docs/screenshots/environment-playtest.json` and `docs/screenshots/drift-lab-playtest.json`.
