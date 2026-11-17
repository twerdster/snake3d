# New 3D Snake demonstration

[Open the hosted demonstration](https://twerdster.github.io/snake3d/).

## Local use

From the repository root, use Python 3 and a browser:

```sh
python3 -m http.server --bind 127.0.0.1 --directory updated/demo
```

Open <http://127.0.0.1:8000/>. No dependency installation or build is required.

## Controls

Start the game and steer with the arrow keys; up/down tilt the snake. On touch screens, drag on the game view. Collect food to grow and avoid the enclosure and your body. Space pauses; Restart clears the score.

## Verification and limitations

New code from the report, not recovered Unity source. No Leap Motion, RealSense, VR headset or historical B-spline body mesh. Six focused simulation checks cover pickup/growth, deterministic food, 3D steering, wall/self collision and reset.

Actual Chrome checks on 2026-11-17 exercised the controls and 390-pixel/desktop layouts without JavaScript page errors or horizontal overflow. A narrow viewport is not a physical-device test; Safari/Firefox and physical phone input were not checked. Detailed current checks are in [VALIDATION.json](VALIDATION.json).

New demo source: Aaron Wetzler with agent assistance, 2026, under the scoped [MIT license](LICENSE). Original materials and supplied data retain their separate terms.

Run the focused operator/simulation checks from the repository root with `node updated/check-demo.mjs` (Node.js 18+).
