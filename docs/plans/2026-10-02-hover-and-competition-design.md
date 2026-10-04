# Faster ships, buoyant hover, and closer racing

The requested update doubles nominal and boosted speed, including acceleration and braking so ships reach the new pace promptly. Steering response, weapon speed, and CPU lookahead scale with the faster movement. The wide landing deck extends farther after the launch to accommodate the new boosted catch-up speed.

Ships use a damped spring above the local track surface. Vertical momentum responds to rising ramps and falling crests, compresses on landing, and settles with a soft rebound. Sufficient separation releases a ship into gravity-driven flight; the anti-gravity field guides its descent toward the connected road. Extreme banks retain their local surface frame.

CPU pace adjusts smoothly according to validated race progress relative to the player. Trailing racers gain a bounded catch-up allowance; leaders ease slightly. Difficulty, normal steering, collisions, and item tactics still apply. No racer changes position to catch up.

Each ship emits two fading low-poly exhaust ribbons plus sparse thruster particles. Boosting extends the ribbons and changes their color. Effects freeze while paused and clear on restart or recovery.

Verification covers doubled speed, spring compression/rebound, crest lift and ramp landing at the new speeds, bounded rubber-banding across lap boundaries, full CPU races, combat, and browser screenshots of the new effects.

Implemented and verified: production build and all 17 simulation tests pass. Three-lap simulations on rookie, standard, and expert completed with no recoveries and a close field. Chrome playtesting passed acceleration, steering, settings/resume, booster activation, exhaust effects, airborne landing, effect pause, and finish/restart checks with no runtime errors. Screenshots include `docs/screenshots/boost-trails.png` and `docs/screenshots/hover-flight.png`.
