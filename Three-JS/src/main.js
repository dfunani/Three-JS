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
} from "./shapes";

let app = new Application([
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
  line
]);

app.renderer.setAnimationLoop(() => {
  app.rotate_objects();
  app.render();
});

document.body.appendChild(app.renderer.domElement);
