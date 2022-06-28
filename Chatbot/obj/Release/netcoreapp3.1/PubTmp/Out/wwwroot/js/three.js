import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/controls/OrbitControls.js";
import { FBXLoader } from "https://cdn.jsdelivr.net/npm/three@0.124/examples/jsm/loaders/FBXLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);
const spaceTexture = new THREE.TextureLoader().load(
  "https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/space.jpg"
);
scene.background = spaceTexture;
const moonTexture = new THREE.TextureLoader().load(
  "https://raw.githubusercontent.com/fireship-io/threejs-scroll-animation-demo/main/moon.jpg"
);

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: moonTexture,
  })
);

scene.add(moon);
moon.position.setX(-10);
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);
const controls = new OrbitControls(camera, renderer.domElement);
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);
camera.position.z = -19;
camera.position.x = 22;
camera.position.y = 7;
camera.rotation.y = 100;
function animate() {
  requestAnimationFrame(animate);
  moon.rotation.x += 0.01;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();
