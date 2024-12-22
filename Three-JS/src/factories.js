import { Color, IcosahedronGeometry, MeshBasicMaterial } from "three";
import { Mesh } from "three/webgpu";

const shape_config = {
  wireframe: true,
  wireframeLinewidth: 2,
};

export function create_simple_mesh(color, radius, detail = 1, config = shape_config) {
  let shape = new IcosahedronGeometry(radius, detail);
  let texture = new MeshBasicMaterial({
    ...config,
    color: color,
  });
  return new Mesh(shape, texture);
}
