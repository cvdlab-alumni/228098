
var telaio_texture = THREE.ImageUtils.loadTexture("./textures/fornitures/finestra.jpg");
var frameMaterial = new THREE.MeshLambertMaterial({map: telaio_texture});

var porta_texture = THREE.ImageUtils.loadTexture("./textures/fornitures/porta.jpg");
var portMaterial = new THREE.MeshLambertMaterial({map: porta_texture});




function createBlindDoor(width, height, depth, reverse){
	if(typeof(reverse)==='undefined'){
		 reverse = 0;
	}
	var blind_texture = THREE.ImageUtils.loadTexture("./textures/fornitures/porta_blindata.jpg");
	var portGeometry = new THREE.BoxGeometry(width, depth, height);
	var portMaterial = new THREE.MeshLambertMaterial({map: blind_texture});
	
	var port = new THREE.Mesh(portGeometry, portMaterial);
	var hook = new THREE.Object3D();
	var door = new THREE.Object3D();
	door.add(hook);
	hook.add(port);
	port.position.set(width/2,0,0);
	toIntersect.push(port);
	port.open=false;
	port.action=function(){
		if(!this.open){
			if (reverse===1){
				new TWEEN.Tween(this.parent.rotation)
				.to({z: -Math.PI/2},1000)
				.start();
			} else {
				new TWEEN.Tween(this.parent.rotation)
				.to({z: Math.PI/2},1000)
				.start();
			}
			
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
	return door;
}

function createDoor(width, height, depth, invert){
	if(typeof(invert)==='undefined') invert = 0;
	var portGeometry = new THREE.BoxGeometry(width, depth, height);
	
	var port = new THREE.Mesh(portGeometry, portMaterial);
	var hook = new THREE.Object3D();
	var door = new THREE.Object3D();
	door.add(hook);
	hook.add(port);
	port.position.set(width/2,0,0);
	toIntersect.push(port);
	port.open=false;
	port.action=function(){
		if(!this.open){
			if (invert===1){
				new TWEEN.Tween(this.parent.rotation)
				.to({z: -Math.PI/2},1000)
				.start();
			} else {
				new TWEEN.Tween(this.parent.rotation)
				.to({z: Math.PI/2},1000)
				.start();
			}
			
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
	return door;
}

function createDoubleWindow(width, height, depth){	
	var windows = new THREE.Object3D();

	var frameGeometry1 = new THREE.BoxGeometry(width/2, depth, 0.1);
	var frameGeometry2 = new THREE.BoxGeometry(0.1, depth, height-0.2);
	var frame1 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame2 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame3 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var frame4 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var anta1 = new THREE.Object3D();
	anta1.add(frame1);
	anta1.add(frame2);
	anta1.add(frame3);
	anta1.add(frame4);

	frame1.position.set(width/4,0,0.05);
	frame2.position.set(width/4,0,(height-0.2+0.15));
	frame3.position.set(0.05,0,(height/2));
	frame4.position.set(-0.05+(width/2),0,(height/2));

	anta2=anta1.clone();

	hook1 = new THREE.Object3D();
	hook2 = new THREE.Object3D();

	windows.add(hook1);
	hook1.add(anta1);
	anta1.position.set(0,0,0);
	
	windows.add(hook2);
	hook2.position.set(width,0,0);
	hook2.add(anta2);
	anta2.position.set(-width/2,0,0);

	var glass1 = new THREE.Mesh(new THREE.BoxGeometry((width/2)-0.2, 0.15, height-0.2), new THREE.MeshLambertMaterial({color: 0x012345, opacity: 0.5, transparent: true}));
    anta1.add(glass1);
    glass1.position.set(width/4,0,height/2);

	var glass2 = new THREE.Mesh(new THREE.BoxGeometry((width/2)-0.2, 0.15, height-0.2), new THREE.MeshLambertMaterial({color: 0x012345, opacity: 0.5, transparent: true}));
    anta2.add(glass2);
    glass2.position.set(width/4,0,height/2); 

    toIntersect.push(glass1);
    glass1.open=false;
	glass1.action=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: -Math.PI/2},1000)
			.start();
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
	toIntersect.push(glass2);
    glass2.open=false;
	glass2.action=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: Math.PI/2},1000)
			.start();
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}
	windows.anta1=anta1;
	windows.anta2=anta2;
    return windows;
}

function createSingleWindow(width, height, depth){
	var windows = new THREE.Object3D();
	var hook = new THREE.Object3D();
	windows.add(hook);
	var frameGeometry1 = new THREE.BoxGeometry(width, depth, 0.1);
	var frameGeometry2 = new THREE.BoxGeometry(0.1, depth, height-0.2);
	var frame1 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame2 = new THREE.Mesh(frameGeometry1, frameMaterial);
	var frame3 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var frame4 = new THREE.Mesh(frameGeometry2, frameMaterial);
	var anta = new THREE.Object3D();
	anta.add(frame1);
	anta.add(frame2);
	anta.add(frame3);
	anta.add(frame4);

	frame1.position.set(width/2,0,0.05);
	frame2.position.set(width/2,0,(height-0.2+0.15));
	frame3.position.set(0.05,0,(height/2));
	frame4.position.set(-0.05+(width),0,(height/2));

	var glass = new THREE.Mesh(new THREE.BoxGeometry((width)-0.2, 0.15, height-0.2), new THREE.MeshLambertMaterial({color: 0x012345, opacity: 0.5, transparent: true}));
    anta.add(glass);
    glass.position.set(width/2,0,height/2);

    toIntersect.push(glass);
    glass.open=false;
	glass.action=function(){
		if(!this.open){
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: -Math.PI/2},1000)
			.start();
			this.open=true;
		} else {
			new TWEEN.Tween(this.parent.parent.rotation)
			.to({z: 0},1000)
			.start();
			this.open=false;
		}
	}

	hook.add(anta);
	windows.anta=anta;
	return windows;
}

function createLamp(radius_lampShade, lColor){
	var lampShadeGeometry = new THREE.SphereGeometry(radius_lampShade, 8, 8, 0, Math.PI, 0, Math.PI);
    var lampShadeMaterial = new THREE.MeshPhongMaterial({ color: lColor , shading: THREE.SmoothShading, shininess: 30, metal: true});
    lampShadeMaterial.side = THREE.DoubleSide;
    var lampShade = new THREE.Mesh(lampShadeGeometry, lampShadeMaterial);
    lampShade.scale.z=0.5;

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.angle=Math.PI/2;
    spotLight.intensity=0;
    lampShade.add(spotLight);
 	lampShade.spotLight=spotLight;

 	var plight = new THREE.PointLight( 0xFFFFFF, 1, 5 );
 	lampShade.add(plight);
 	lampShade.pointLight =plight;
 	plight.intensity=0;

 	var t = new THREE.Object3D();
 	lampShade.add(t);
 	t.position.set(0,0,-6);
 	lampShade.target = t;

 	toIntersect.push(lampShade);
 	lampShade.on=false;
	lampShade.action=function(){
		if(!this.on){
			this.children[0].intensity=1;
			this.children[1].intensity=1;
			this.on=true;
		} else {
			this.children[0].intensity=0;
			this.children[1].intensity=0;
			this.on=false;
		}

	}


    return lampShade;
}