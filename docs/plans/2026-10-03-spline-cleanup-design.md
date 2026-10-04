# Four-course spline cleanup

Review and repair Neon Slalom, Rift Cascade, Vortex Spine and Oblivion Circuit while preserving their drift, jump, tube and combined identities. Keep the existing controls, flight physics, gap counts and difficulty order.

The initial geometric audit found 68–74 degree heading changes over ten units at tunnel/loop connectors, frame flips over two units, 53-unit centerline clearance in Oblivion and a 4,619-unit unpopulated stretch in Rift. Distinct tube surfaces require clearance beyond their 56-unit diameter, including open-road offsets and rail structures.

Use tangent-aligned authored connectors, larger separated descending spirals and broad return corridors. Round non-jump waypoint corners with tangent circular fillets, sampled into the existing Catmull–Rom route. Preserve takeoff, gap and landing nodes and remap all authored section indices after rounding. Interpolate sampled positions and frames with a uniform cubic B-spline (C2 position continuity) to remove derivative changes experienced by surface physics. Smooth the bank field with Gaussian filtering, continuous saturation and C2 interpolation. Multiply overlapping unwrapping fades to avoid the derivative cusp created by choosing their minimum.

Fill uncovered road with readable boost/pickup sequences at one to two seconds of travel. Use alternating lanes, side/ceiling tunnel incentives and occasional barriers with a wide clear lane. Exclude gap airspace, clear landing decks and transition openings. Existing authored rewards take priority to avoid stacking pads and pickups.

Alternatives: global smoothing alone would conceal but not separate overlapping routes; replacing the four courses entirely would lose their established gameplay. Local route reconstruction and shared interpolation corrections address the measured defects while retaining their identity.

Implementation and validation: record before/after clearance, heading, surface-angle and reward spacing; add regression tests for nonadjacent route clearance and smoothness; run existing jump, ramp, drift and CPU completion tests; inspect revised track maps and actual keyboard gameplay in Chrome; run the production build. No git repository or writing-plans skill is available in this workspace, so this document records the implementation plan directly.

## Results

All four routes retain their themes, original gap counts, tunnel counts and steering/flight controls. Slalom has broad banked hairpins; Rift retains three offset jumps; Vortex has three tunnels, ramps and an exterior spiral; Oblivion combines four gaps, banks, three tunnels and a longer descending spiral. Spiral turns descend 280 units per revolution and loop endpoints separate by 220 units.

Nonadjacent route clearance is now 210 / 210 / 204 / 200 units for Slalom / Rift / Vortex / Oblivion, measured at ten-unit spacing with 300 units of route separation. Maximum heading changes over ten units are 5.9 / 6.0 / 8.8 / 8.7 degrees, compared with 68–74 degrees before. Maximum surface-normal changes over two units, sampled on roads and around tube walls outside intentional ramp lips, are 2.2 / 2.1 / 2.2 / 2.8 degrees. Previously the centerline alone could flip more than 170 degrees. The longest unpopulated road intervals are 309 / 363 / 291 / 363 units; clear airborne gaps and landing decks are excluded.

CPU pilots use a brief committed drift on banks when speed and available lane space allow it, then release for a mini-turbo. The smoother Rift course no longer needs emergency drifting at malformed joins. Final-course lift increases slightly to prevent combat-slowed CPU pilots falling just short of a landing. The strongest leading-CPU jump test now uses an actual CPU speed cap throughout flight rather than only starting the player at reduced speed.

All 76 tests pass, including twelve new geometry/spacing regressions, all nine gaps at four speeds, every new tunnel ramp at nominal/boost speed, three-lap CPU races at all difficulties with zero terrain recoveries, marker rules, drift rewards and the original three courses. Production build passes, and development diagnostics/previews are absent from its assets. Measurements and layout diagrams are reproducible with `scripts/spline-audit.ts`; baseline and final reports are in `docs/screenshots/`.

Chrome keyboard QA passes all four rebuilt connectors, all four populated return roads, bank drift/release, all nine jump landings, and interior ramp hops on Vortex and Oblivion. No browser or shader errors. All eight screenshots were inspected; they are 145–298 KiB without compression. The route map records plan and elevation views. Report: `docs/screenshots/spline-playtest.json`; reproduce with `scripts/spline-playtest.mjs`. The game checks used an 800×500 viewport and the diagram used 1440×1280. Physical controllers, touch hardware and other browsers were not rechecked for this revision.
