# Course identities and skyline

The requested four-course revision changes playable terrain as well as presentation. Keep existing controls, difficulty order, marker rules, combat and seven-course selection.

- Neon Slalom: cyan/pink drift circuit, wide open roads, repeated banked hairpins and exit rewards. One introductory gap and one tunnel retain variety.
- Rift Cascade: warm amber canyon circuit, three real gaps with alternating offsets, progressively narrower decks, approach boosts and airborne rings. Leave landing zones clear of barriers and markers.
- Vortex Spine: violet/blue orbital circuit, three interior tunnels plus exterior loops/spirals, wall/ceiling boost chains, optional ramps and airborne rings inside and outside tubes.
- Oblivion Circuit: red/gold final exam, banked switchbacks, four narrowing offset gaps, multiple tunnels, tube ramps, denser hazards and rewards.

Use explicit authored node ranges for every gap, landing and tunnel. Preserve local projection and ordered checkpoint validation; safe recovery must return before the relevant jump. Banks follow smoothed horizontal curvature only on open roads, fade before jumps and transitions. Interior ramps use the same inward flight field, with shorter hops to keep the ceiling clear.

Skyline: 85 distant buildings and 15 nearby towers instead of 170/30. Increase horizontal footprints roughly 1.8–2×, keep bases at −7000, and reject placements close to any course centerline. Window texture tiles contain 12 slots instead of 24, with matching emissive windows. Keep dusk fog, clouds and glow.

Alternatives considered: recoloring existing routes would leave their gameplay too similar; four completely independent physics systems would add maintenance cost. Author distinct terrain and incentive sequences using the shared road/tube/flight systems.

Implementation: extend course metadata; map all gaps/tunnels into track sections; add bank and ramp incentives; update skyline textures and dimensions; update course descriptions and development previews. Validate every jump at normal/boost/reduced speed, deliberate misses, interior ramp landings, and CPU completion across difficulties. Inspect screenshots and keyboard gameplay in Chrome, then run the production build.

## Verification

Implemented with original circuit IDs and ordering. Slalom has two bank districts and a 46-unit open-road width. Rift has three gaps. Vortex has three tunnels and eleven ramps. Oblivion has four gaps, three tunnels and twenty-five ramps. Course guide colors, city glow, road tint, menus and pilot briefings reflect each theme.

All 64 simulation tests pass, including every gap at nominal, boosted, 80% power, and 80% power with the strongest leading-CPU pace reduction; wrong aim and overshoot recovery; every interior ramp at nominal/boosted speed; all four courses at rookie/standard/expert. CPU pilots hold thrust through gap flight rather than braking because downward velocity raises their total speed. Final-course lift was tuned to preserve viable reduced-power landings. Competitiveness assertions compare unfinished opponents; already-finished rivals continue moving after finishing and should not be measured as racing ahead of the finish line.

Chrome checks passed all nine real-keyboard gap landings, banked Shift drift/release, two interior ramp hops, stage descriptions, 85 distant buildings/up to 15 nearby towers, twelve facade window slots with three matching emissive slots, deep tower bases, and the 390×844 menu. No console/shader errors. The eight screenshots were inspected, all 178–453 KiB, without compression. Results: `docs/screenshots/course-themes-playtest.json`; reproducible script: `scripts/course-themes-playtest.mjs`.

Production build passes. Physical controller/touch hardware and other browsers were not part of this check.
