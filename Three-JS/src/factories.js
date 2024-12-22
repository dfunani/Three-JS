import {
  BoxGeometry, // Import BoxGeometry
  SphereGeometry, // Import SphereGeometry
  CylinderGeometry,
  TorusGeometry,
  TorusKnotGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  TetrahedronGeometry,
  MeshBasicMaterial,
  RingGeometry,
  PlaneGeometry,
  CircleGeometry,
  BufferGeometry,
  LineBasicMaterial,
  Line,
} from "three";
import { Mesh } from "three/webgpu";
const CONFIG = {
  wireframe: true,
  wireframeLinewidth: 2,
};

export const Geometries = {
  cube: (config) => new BoxGeometry(config.width, config.height, config.depth), // Corrected
  sphere: (config) => new SphereGeometry(config.radius), // Corrected
  spheroid: (config) => new IcosahedronGeometry(config.radius),
  octaroid: (config) => new OctahedronGeometry(config.radius),
  tetraroid: (config) => new TetrahedronGeometry(config.radius),
  cylinder: (config) => new CylinderGeometry(config.top, config.bottom),
  torus: (config) => new TorusGeometry(config.radius),
  knot: (config) => new TorusKnotGeometry(config.radius),
  plane: (config) => new PlaneGeometry(config.width, config.height),
  circle: (config) => new CircleGeometry(config.radius),
  ring: (config) => new RingGeometry(config.inner, config.outer),
};

export function create_simple_mesh(color, shape, dimensions, config = CONFIG) {
  let object = Geometries[shape](dimensions);

  let texture = new MeshBasicMaterial({
    ...config,
    color: color,
  });

  return new Mesh(object, texture);
}

export function create_simple_line(color, starts, ends) {
  const geometry = new BufferGeometry().setFromPoints([starts, ends]);
  let material = new LineBasicMaterial({ color: color });
  return new Line(geometry, material);
}
