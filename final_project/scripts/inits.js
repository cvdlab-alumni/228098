var stats = initStats();


var scene = new THREE.Scene();


var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 10000);

camera.up = new THREE.Vector3(0,1,0);
camera.position.set(0,55,250);
camera.lookAt(scene.position);

document.addEventListener('mousedown', onDocumentMouseDown, false);
window.addEventListener('resize', onWindowResize, false);

var toIntersect=[];

var trackballControls = new THREE.TrackballControls(camera);

var axisHelper = new THREE.AxisHelper(100);
scene.add(axisHelper);

var webGLRenderer = new THREE.WebGLRenderer();
webGLRenderer.setClearColor(new THREE.Color(0xC7C7C7, 1.0));
webGLRenderer.setSize(window.innerWidth, window.innerHeight);

var interact=true;
var fpc = false;
var controls;

var rayMove = new THREE.Raycaster();
rayMove.ray.direction.set(0, 0, -1);
var rayPointer = new THREE.Raycaster();

var projector = new THREE.Projector();
