import "./style.css";
import { Application } from "./app";
import {
  redCube,
  blueSphere,
  greenSpheroid,
  yellowOctaroid,
  purpleTetraroid,
  orangeCylinder,
  pinkTorus,
  whiteKnot,
  plane,
  circle,
  ring,
  line,
  triangle,
} from "./shapes";

[
  // redCube,
  // blueSphere,
  // greenSpheroid,
  // yellowOctaroid,
  // purpleTetraroid,
  // orangeCylinder,
  // pinkTorus,
  // whiteKnot,
  // plane,
  // circle,
  // ring,
  // ...triangle,
];
let objects = [];

let app = new Application(objects);
app.load_texture("Hello WOrld", "/fonts/helvetiker_bold.typeface.json");

app.renderer.setAnimationLoop(() => {
  app.rotate_objects();
  app.render();
});

document.body.appendChild(app.renderer.domElement);
