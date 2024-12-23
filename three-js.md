# Three JS

Three.js is a JavaScript library that simplifies displaying 3D graphics in web browsers.
Artists, major brands, and many others are increasingly using Three.js to power
immersive online experiences that can reach millions of people across many platforms.
There are many inspiring demos of the technology at http://threejs.org/.
Three.js is usually used with a new technology called WebGL, a JavaScript API
for rendering graphics without plugins. The API is based on OpenGL, a desktop
graphics API (GL stands for graphics library). Because it uses the client's graphics
processing unit to accelerate rendering, WebGL is fast! However, many mobile
browsers as well as Internet Explorer 10 and below do not support WebGL.
Luckily, Three.js supports rendering with the HTML5 Canvas API as well as
other technologies such as Scalable Vector Graphics instead.

## Setting Scene

To create Display anything, we must create a Scene and a Camera. We can then use a renderer to display the scene and Camera accoridngly.

```javascript
let scene = new Scene();
let renderer = new WebGLRenderer();
let camera = new PerspectiveCamera(
  Field Of View,
  Aspect Ratio,
  Nearest Point to the Camera,
  Furthest Point to the Camera
);
```

## Creating Objects

Objects are Meshes (Combination) between Shapes/Geometry and Material/Texture. The created Mesh can then be added to a scene.

```javascript
let shape = new IcosahedronGeometry(radius, detail);
let texture = new MeshBasicMaterial({
  ...config,
  color: color,
});
let mesh = new Mesh(shape, texture);
```

### Geometry (Shapes)

Geometries
Geometries are instances of THREE.Geometry that define the shape of an object in
a scene. They are made up of vertices and faces (which are themselves objects and
are accessible through the vertices and faces array properties). Vertices are the
THREE.Vector3 objects representing points in three-dimensional space, while faces
are the THREE.Face3 objects representing triangular surfaces. (All more complex
shapes are subdivided into triangular faces for rendering purposes.)
Luckily, dealing with vertices and faces directly is usually unnecessary because
THREE.Geometry has many subclasses that help create commonly used shapes.

### Materials (Textures)

Materials are instances of THREE.Material that define how objects appear. There are
several common material subclasses:

- MeshBasicMaterial: It is not affected by lighting (a characteristic called unlit), so
  this is usually used to display a solid color or a wireframe.
  Two adjacent, same-colored, unlit surfaces are difficult to tell
  apart.
- MeshNormalMaterial The red/green/blue values of the colors displayed by this
  material are based on the magnitude of the x/y/z values of
  the faces' normal vectors. (A normal vector is perpendicular
  to a surface.) This material is unlit and useful for quickly
  distinguishing the shape of an object.
- MeshDepthMaterial It is an unlit material that shows shades of gray, with
  brightness depending on the distance from the camera.
  It is useful when designing scenes before applying more
  realistic textures.
- MeshLambertMaterial Faces are affected by lighting, but are not shiny. Specifically,
  lighting is calculated per-vertex and is interpolated over faces.
  It will appear black if there are no lights in the scene.
- MeshPhongMaterial Faces are affected by lighting, and can be shiny. Specifically,
  lighting is calculated per-texel (texture pixel), so this will be
  more accurate than Lambert materials when the light source is
  close to the object in questionn. It will appear black if there are
  no lights in the scene.
