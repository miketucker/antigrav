# Abyss Run

Add a second selectable circuit while retaining Foundry. The user's request authorizes building the new stage and choosing its implementation details.

Abyss Run climbs 340 units above its starting grid, then drops across an actual missing road to a landing deck 300 units below. A vertical launch velocity of 8 and gravity of 28 give about 4.9 seconds of flight. The deck starts roughly 630 units ahead and extends far enough to accept nominal and boosted speeds, but its lateral offset and narrow width require steering. A/D provide air steering, a HUD cue shows deck alignment, and a missed landing returns the ship to the checkpoint before takeoff. No road attraction acts across this gap.

A long, flared full pipe uses lateral arc length around a circular cross section. It wraps at the ceiling seam, allowing continuous 360-degree carving. Magnetic hover remains attached on walls and ceiling. Boost and pickup positions use the same circular coordinates and swept collection as the floor. CPU pilots steer toward reachable rewards, return to the floor before the exit, and aim for the landing deck in flight.

Reuse the renderer, post processing, ships and input listeners when switching stages; replace and dispose the stage geometry and textures. Keep the low-poly geometry, pixel maps, dark grade and bloom. Add amber landing markers, violet/cyan pipe rails and a deeper industrial canyon.

Implementation: extend Track with stage metadata and pipe/drop queries; extend Race with circular steering and ballistic drop flight; render the physical gap and tube; add stage selection and landing instructions; verify geometry seams, flight timing, failures/recovery, reward collection, CPU completion and both stages in Chrome.

## Wave and flight-control extension

User requested boosted vertical waves and pitch steering during implementation. Add a dedicated straight after the landing deck with three 14-unit wave crests and three boost lanes before each crest. A neutral crest hop lasts about one second. Airborne I/K or Up/Down, gamepad vertical stick, and touch tilt buttons turn the actual velocity. Nose-up steering adds drag and trades speed for height/time; nose-down steepens the descent. The short wave hops retain road-heading guidance, while the abyss flight follows inertial world-space velocity. Gravity still acts in both cases. Align the ship model to its actual flight vector and make the chase camera follow that vector to stay clear of exhaust ribbons. The neutral abyss flight remains about five seconds; pitch changes the range and requires adjusting the landing aim. Predict landing alignment at the actual future along-track point rather than the center of a fixed marker.
