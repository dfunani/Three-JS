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
  cylinder: (config) =>
    new CylinderGeometry(config.radiusTop, config.radiusBottom, config.height),
  torus: (config) => new TorusGeometry(config.radius),
  knot: (config) =>
    new TorusKnotGeometry(
      config.radius,
      config.radialSegments,
      config.tubularSegments
    ),
};

export function create_simple_mesh(color, shape, dimensions, config = CONFIG) {
  let object = Geometries[shape](dimensions);
  console.log(object);

  let texture = new MeshBasicMaterial({
    ...config,
    color: color,
  });

  return new Mesh(object, texture);
}
