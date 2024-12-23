import {
  Mesh,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  MeshBasicMaterial,
} from "three";
import { randFloat } from "three/src/math/MathUtils.js";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";

export class Application {
  #camera_pos = {
    position: 500,
    FOV: 75,
    near: 1,
    far: 1000,
  };

  constructor(objects, width = window.innerWidth, height = window.innerHeight) {
    this.objects = objects;
    this.width = width;
    this.height = height;
    this.init();
  }

  init() {
    this.set_scene();
    this.set_render();
    this.set_camera();
  }

  set_scene() {
    this.scene = new Scene();
    for (let object of this.objects) {
      this.scene.add(object);
    }
  }

  set_render() {
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(this.width, this.height);
  }

  set_camera() {
    this.camera = new PerspectiveCamera(
      this.#camera_pos.FOV,
      this.width / this.height,
      this.#camera_pos.near,
      this.#camera_pos.far
    );
    this.camera.position.z = this.#camera_pos.position;
  }

  rotate_objects() {
    for (let object of this.objects) {
      object.rotation.x += randFloat(0.00001, 0.009);
      object.rotation.y += randFloat(0.0001, 0.01);
    }
  }

  async load_texture(text, texture) {
    const loader = new FontLoader();

    loader.load(texture, (font) => {
      const geometry = new TextGeometry(text, {
        font: font,
        size: 80,
        depth: 5,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 10,
        bevelSize: 8,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      const mat = new MeshBasicMaterial();
      const mesh = new Mesh(geometry, mat);
      this.objects.push(mesh);
      this.set_scene();
    });
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}
