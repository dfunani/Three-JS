import { Color, Vector3 } from "three";
import {
  create_simple_line,
  create_simple_mesh,
  create_simple_triangle,
} from "./factories";

export const redCube = create_simple_mesh(Color.NAMES.red, "cube", {
  width: 200,
  height: 200,
  depth: 200,
});
export const blueSphere = create_simple_mesh(Color.NAMES.blue, "sphere", {
  radius: 200,
});
export const greenSpheroid = create_simple_mesh(Color.NAMES.green, "spheroid", {
  radius: 250,
});
export const yellowOctaroid = create_simple_mesh(
  Color.NAMES.yellow,
  "octaroid",
  {
    radius: 40,
  }
);
export const purpleTetraroid = create_simple_mesh(
  Color.NAMES.purple,
  "tetraroid",
  {
    radius: 340,
  }
);
export const orangeCylinder = create_simple_mesh(
  Color.NAMES.orange,
  "cylinder",
  {
    radiusTop: 520,
    radiusBottom: 10,
    height: 60,
  }
);
export const pinkTorus = create_simple_mesh(Color.NAMES.pink, "torus", {
  radius: 350,
  tube: 10,
  radialSegments: 16,
  tubularSegments: 32,
});
export const whiteKnot = create_simple_mesh(Color.NAMES.white, "knot", {
  radius: 820,
  tube: 5,
  radialSegments: 64,
  tubularSegments: 128,
  p: 2,
  q: 3,
});

export const plane = create_simple_mesh(Color.NAMES.aliceblue, "plane", {
  width: 50,
  height: 100,
});

export const circle = create_simple_mesh(Color.NAMES.green, "circle", {
  radius: 450,
});

export const ring = create_simple_mesh(Color.NAMES.yellowgreen, "ring", {
  inner: 150,
  outer: 200,
});

export const line = create_simple_line(
  Color.NAMES.blueviolet,
  new Vector3(-100, 0, 0),
  new Vector3(100, 0, 0)
);

export const triangle = create_simple_triangle(Color.NAMES.whitesmoke, [
  new Vector3(0, 500, 0),
  new Vector3(500, 500, 0),
  new Vector3(500, 0, 0),
]);
