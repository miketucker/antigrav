# Helix Crown

The user requests a third playable circuit with three-axis curves, exterior tube racing, inward gravity, ramp hops, spirals and vertical loops. This authorizes implementing the course and choosing routine details.

Use one continuous exterior tube rather than transitions between roads and tubes. Its route contains a two-turn ascending helix, an offset vertical loop, a descending corkscrew and a curving return. Parallel-transported frames close the seam and stay stable through vertical tangents. Lateral coordinates wrap around the circumference. Surface normals face outward, and gravity points toward the local centerline.

Author ramps on several circumferential lanes, with boost approaches and item incentives. Ramps have an elevated takeoff lip and a bypass. During a hop, integrate world-space velocity, project only onto the connected local route, and apply inward tube gravity. Allow steering and pitch relative to the tube's local frame; retain the speed/airtime tradeoff. Land with the existing hover cushion. CPU pilots use the same physics and circular lane seeking.

Render a low-poly, pixel-textured tube with cyan and orange longitudinal guides, glowing ramp edges, section signs and a distant industrial skyline. Camera up follows the outward normal even on the underside and through loops. Add the third circuit to the selector, briefing, minimap and results; preserve both existing circuits and shared effects/settings.

Alternatives considered: a short exterior segment would reduce development but underserve the requested terrain; unrestricted rigid-body racing would introduce a larger control/AI rewrite. A continuous parameterized surface plus physical local hops fits the existing game and gives consistent three-axis handling.

Implement route/surface/projection first, then radial flight and CPU handling, then visuals/menu/controls. Verify outward normals, closure, loops, circular steering, ramp flight and landing on multiple sides, rewards/weapons and three-lap CPU races. Build and playtest all stages in Chrome, capturing the new course and mobile selector.

Verification: all 40 simulation tests pass, including nine Helix tests and the existing Foundry/Abyss checks. All ten ramps land at nominal and boosted speed; neutral hops last about 0.5–0.9 seconds. CPU fields finish three laps at rookie, standard and expert with no terrain recovery; combat can still wreck a ship. The production build passes. Chrome keyboard playtesting passes with no console errors, covering three-stage switching, start, top/underside hops, pitch, pause/resume, more than one complete exterior roll, loop/corkscrew views, results and restart. Screenshots in `docs/screenshots/helix-*.png` were inspected at 960×600 gameplay, 1200×800 desktop and 390×844 mobile; files are below 1 MB and needed no compression. The full browser report is `docs/screenshots/helix-playtest.json`.
