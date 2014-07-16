function createMaterial(map) {
  var texture = THREE.ImageUtils.loadTexture(map);
  var material = new THREE.MeshPhongMaterial({    map: texture  })
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  
  return material;
}

function createMesh(geom, imageFile) {
  var mat;

  switch(imageFile) {
    case 1:
    mat = mat_floor_camera;
    break;
    case 2:
    mat = mat_floor_bagno;
    break;
    case 3:
    mat = mat_floor_salone;
    break;
    case 4:
    mat = mat_floor_esterno;
    break;
	case 5:
    mat = mat_floor_soffitto;
    break;
	case 6:
    mat = mat_floor_soffitto_esterno;
    break;
	case 7:
    mat = mat_floor_terrazza;
    break;
    case 8:
    mat = mat_floor_cucina;
    break;
    case 9:
    mat = mat_wall_salone;
    break;
    case 10:
    mat = mat_wall_camera;
    break;
    case 11:
    mat = mat_wall_bagno;
    break;
    case 12:
    mat = mat_wall_cucina;
    break;
	case 13:
    mat = mat_wall_scale;
    break;
    case 14:
    mat = mat_wall_esterno;
    break;
	 case 14:
    mat = mat_wall_cucina;
    break;
    
  }
  
  var mesh = new THREE.Mesh(geom, mat);

  return mesh;
}


function createPlane( b,h,holes,texture) {
  var i =0;

  var options = {amount: 0.01,bevelThickness: 2,bevelSize: 1,bevelSegments: 3,bevelEnabled: false,curveSegments: 12,steps: 1};
  var shape = new THREE.Shape();
  shape.moveTo(0,0);
  shape.lineTo(b,0);
  shape.lineTo(b,h);
  shape.lineTo(0,h);

  if (holes.length >0) {
    var hole;
    for (i=0;i<holes.length;i=i+8){
      hole = new THREE.Path();
      hole.moveTo(holes[i],holes[i+1]);
      hole.lineTo(holes[i+2],holes[i+3]);
      hole.lineTo(holes[i+4],holes[i+5]);
      hole.lineTo(holes[i+6],holes[i+7]);
      hole.lineTo(holes[i],holes[i+1]);
      shape.holes.push(hole);
    }

  }
  var planeGeometry = new THREE.ExtrudeGeometry( shape, options );

  var plane = createMesh(planeGeometry,texture);
  return plane;
}




function initStats() {
  var stats = new Stats();
  stats.setMode(0); // 0: fps, 1: ms
  $('body').append(stats.domElement);
  return stats;
}


function onDocumentMouseDown (event) {
	  event.preventDefault();
	  if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
		var raycaster = new THREE.Raycaster(controls.getObject().position, controls.getDirection(new THREE.Vector3(0, 0, 0)).clone());
	  } else {
		var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
		projector.unprojectVector(vector, camera);
		var raycaster = new THREE.Raycaster(camera.position,
		  vector.sub(camera.position).normalize());
	
	  }
	  var intersects = raycaster.intersectObjects(toIntersect);
	  if (intersects.length > 0) {
		intersects[0].object.action && intersects[0].object.action();
	  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  webGLRenderer.setSize( window.innerWidth, window.innerHeight );
}

