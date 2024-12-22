import { Color, IcosahedronGeometry, MeshBasicMaterial } from "three";
import "./style.css";
import { Application } from "./app";
import { create_simple_mesh } from "./factories";

let mesh = create_simple_mesh(Color.NAMES.red, "spheroid", {
  radius: 200,
  details: 1,
});
let mesh1 = create_simple_mesh(Color.NAMES.blue, "cube", {
  width: 100,
  height: 100,
  depth: 100,
});

let app = new Application([mesh, mesh1]);

app.renderer.setAnimationLoop(() => {
  app.rotate_objects();
  app.render();
});

document.body.appendChild(app.renderer.domElement);
