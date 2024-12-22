import { Color, IcosahedronGeometry, MeshBasicMaterial } from "three";
import "./style.css";
import { Application } from "./app";
import { create_simple_mesh } from "./factories";

let mesh = create_simple_mesh(Color.NAMES.red, 200);
let mesh1 = create_simple_mesh(Color.NAMES.blue, 300);

let app = new Application([mesh, mesh1]);

app.renderer.setAnimationLoop(() => {
  app.rotate_objects();
  app.render();
});

document.body.appendChild(app.renderer.domElement);
