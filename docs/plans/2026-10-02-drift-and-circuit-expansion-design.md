# Drift and circuit expansion

The playable prototype grows to seven circuits. The existing three remain selectable. Four authored courses increase steering demands, obstacle density and jump risk: Neon Slalom, Rift Cascade, Vortex Spine and Oblivion Circuit. They combine open roads, exterior tubes and interior tunnels. Real road gaps have illuminated landing decks and safe recovery checkpoints.

Hold Shift (gamepad X or touch DRIFT) while steering at racing speed to engage the handbrake. A tighter heading with lateral slide helps carve sharp corners. Charge only accumulates while steering on the road, in three visible tiers; releasing grants a proportional mini-turbo. Impacts, recovery and jumping cancel charging. CPUs use the same mechanic.

New courses contain red collision barriers and directional pylons. Cyan left markers require the pilot to pass to their left; amber right markers require the right. A swept crossing validates lane and road proximity for every racer. A miss caps nominal and boosted speed at 80%; five consecutive correct markers restore full power. Another miss resets that recovery streak. The HUD always shows the next direction, missed-marker power reduction and recovery progress. Markers do not gate lap completion.

Difficulty is authored through tighter spline bends, progressively narrower open roads and landing decks, longer gaps, more barriers and denser alternating markers. Each course includes clear boost approaches, safe start grids, interior wall/ceiling incentives and at least one exterior section. Existing half-gravity, hovering, pitch controls, boost chains, airborne rings and city atmosphere remain shared systems.

Validation will exercise drift tiers and cancellation, both marker directions and the five-marker rule, swept obstacle impacts, reachable and missed jumps, all new course geometry and CPU race completion. Chrome playtesting will verify controls, readable signs, track selection, mobile HUD and GPU rendering.

## Implementation and verification

All seven circuits are selectable. New circuits have one true jump gap each, increasingly narrow landing decks, interior and exterior tubes, vertical loops and progressively denser markers/barriers. Vortex and Oblivion add a second tunnel and a descending spiral. The open-road hover frame blends toward world-up; closed tubes retain transported frames. CPU pilots plan marker sides and dodge barriers, use drift turbos and aim for landing decks. A missed or overshot gap cannot validate the landing checkpoint; recovery returns to the approach.

`npm test` passes all 62 tests, including three-lap CPU races at rookie, standard and expert on each new course, drift tiers/cancellation, both marker directions, five consecutive clean markers restoring power, swept barriers and nominal/boost/reduced-power jumps. `npm run build` passes; its standard bundle-size advisory remains. Development diagnostics/previews are excluded from the production bundle.

Chrome verified all seven selections, starting the final circuit, a responsive 390×844 menu, Shift charging and release turbo, an interior Helix roll, airborne ring rewards, flat road geometry, paused cloud time, keyboard landings on all four new courses, wrong-side marker penalties and clean-marker recovery, bloom toggling, Retina/mobile depth texture sizes, final-circuit results and restart. Reports: `docs/screenshots/expansion-playtest.json` and `docs/screenshots/atmosphere-playtest.json`. The GPU probe reads gray 128 → 64 with the brightness grade, bloom spill 0 → 132, unchanged pixels for clouds behind opaque geometry, and visible cloud shading in front.

Screenshots were visually inspected. New captures are approximately 257–494 KB, below the 5 MB limit without compression. Marker flags were made narrower and raised to preserve road visibility; the drift and marker widgets sit above the item panel to keep the ship visible. Firefox/Safari and physical gamepad/touch hardware remain unverified.
