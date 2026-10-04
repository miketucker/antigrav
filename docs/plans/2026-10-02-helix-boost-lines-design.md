# Helix boost lines and unfolding roads

The user requests 3–5 sequential boosts, straight and angled arrangements at roughly 1–2 second spacing, floating ramp boost rings, 50% less gravity and 2–3 flat sections. Apply this to Helix Crown, the circuit being refined.

Add eight authored boost chains with three to five pads each. Use world-space distance along the surface to space them at about 210–260 units. Rotate chevrons toward the next pad on angled chains. Keep ramp approach pads and distribute items along valid lanes.

Add luminous floating rings beyond ramp lips. Collect them with swept plane crossings in world space, only while airborne. Ring boosts sustain thrust and show a HUD notice; cooldowns are per racer and reset with the race. CPU pilots can seek rings while airborne.

Halve the existing inward field, including its centripetal terms. Preserve world-space flight and pitch control. Tune ramp/ring placement and recovery allowances using simulated trajectories rather than silently restoring gravity.

Unwrap the tube into three road sections: the grid/return, a bridge after the ascending helix and a bridge after the vertical loop. Blend a circular exterior cross section into a flat 54-unit road while retaining its center lane and elevation. Use flared transitions, center arrows and rails. Lateral wrapping applies only to the closed tube; road lanes scale with width during ground travel. Project airborne ships onto the local cross section and blend gravity toward its normal as it flattens. Open roads use the same planar heading assistance as the existing wave hops, retaining outward velocity and pitch while following curves. CPU pilots center before an opening and follow road lanes through it.

Verify boost count/spacing and angled lines, exact half-strength field, swept ring collection/cooldowns and missed-ring behavior, smooth surface transitions, nominal/boosted ramp returns, CPU completion at all difficulties and old-stage regressions. Inspect gameplay, rings, unfolding roads and mobile selection in Chrome.

The user subsequently requested an interior ring tunnel like Abyss Run. The corkscrew now includes a roughly 1494-unit Inner Reactor segment. The exterior opens through a flat cross section, closes into an inward-facing 28-radius tunnel, then opens back to the exterior. Signed curvature supports both types of tube with the same lane controls and local projection. Floor, wall and ceiling pads/items offer a full-circumference reward spiral. Ramps remain on exterior/open surfaces. CPUs center before the transitions.

Validation: the full suite passes, with exterior ring paths at nominal/boost speed, three flat bridges, exact half-gravity and a seamless interior roll. Chrome verified an interior circuit of 187.4 lateral units, airborne ring collection, a genuinely flat bridge and paused cloud motion. See `docs/screenshots/expansion-playtest.json`.
