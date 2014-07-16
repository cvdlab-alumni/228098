function explode(){
	if(master.position.x===0){
		var saltoPrimo3 = new TWEEN.Tween(primo.position)
		.to({  x: 100 ,y: 0, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier );
		
		var saltoPrimo2 = new TWEEN.Tween(primo.position)
		.to({  x: 80 ,y: 90, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(saltoPrimo3);
		
		var ruotaPrimo = new TWEEN.Tween(primo.rotation)
		.to({y: Math.PI*2, z: Math.PI*2}, 500)
		.interpolation( TWEEN.Interpolation.Bezier );
		
		var saltoPrimo1 = new TWEEN.Tween(primo.position)
		.to({  x: 44 ,y: 100, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(saltoPrimo2);
		
		var cadePrimo = new TWEEN.Tween(primo.position)
		.to({y: 30}, 500)
		.easing(TWEEN.Easing.Elastic.Out)
		.chain(saltoPrimo1,ruotaPrimo);
		
		var cadeTerra = new TWEEN.Tween(terra.position)
		.to({y: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.easing(TWEEN.Easing.Elastic.Out)
		.chain(cadePrimo);
		
		
		var spostaMaster = new TWEEN.Tween(master.position)
		.to({ x: -100, y: 0}, 500)
		.chain(cadeTerra)
		
		.start();
	}
}

function implode(){
	if(master.position.x===-100){
		var spostaMaster = new TWEEN.Tween(master.position)
		.to({ x: 0, y: 0}, 1000);
		
		var spostaTerra = new TWEEN.Tween(terra.position)
		.to({ x: 0, }, 1000);
		
		var spostaPrimo = new TWEEN.Tween(primo.position)
		.to({ x: 0, }, 1000);
		
		
		
		
		var saltoPrimo3 = new TWEEN.Tween(primo.position)
		.to({  x: -100 ,y: 60, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(spostaMaster,spostaTerra,spostaPrimo);
		
		var saltoPrimo2 = new TWEEN.Tween(primo.position)
		.to({  x: -33 ,y: 100, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(saltoPrimo3);
		
		var ruotaPrimo = new TWEEN.Tween(primo.rotation)
		.to({y: Math.PI*2, z: Math.PI*2}, 500)
		.interpolation( TWEEN.Interpolation.Bezier );
		
		var saltoPrimo1 = new TWEEN.Tween(primo.position)
		.to({  x: 33 ,y: 90, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(saltoPrimo2, ruotaPrimo);
		
		var saltoTerra3 = new TWEEN.Tween(terra.position)
		.to({  x: -100 ,y: 30, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(saltoPrimo1);
		
		var saltoTerra2 = new TWEEN.Tween(terra.position)
		.to({  x: 52 ,y: 90, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(saltoTerra3);
		
		var ruotaTerra = new TWEEN.Tween(terra.rotation)
		.to({z: Math.PI*2}, 500)
		.interpolation( TWEEN.Interpolation.Bezier );
		
		var saltoTerra1 = new TWEEN.Tween(terra.position)
		.to({  x: 4 ,y: 100, z: 0}, 500)
		.interpolation( TWEEN.Interpolation.Bezier )
		.chain(ruotaTerra,saltoTerra2)	
		.start();
	}
}
function manualTour(){
	controls = new THREE.PointerLockControls(camera);
scene.add(controls.getObject());
	var controls =new THREE.FirstPersonControls(camera,this.renderer.domElement);	
}
function autoTour(){
	implode();
	trackballControls.enabled=false;
	
	camera.up = new THREE.Vector3(0,1,0);
	camera.position.set(44,55,250);
	camera.rotation.set(0,0,0);
	
	
	
	//primo

	
	var movecamera52 = new TWEEN.Tween(camera.position)
	.to({   x:44, y:55, z:250}, 1000)
	//.chain(reloadpage);
	
	var chiudiPortaIngressoMaster = new TWEEN.Tween(master.porta_ingresso.rotation)
	.to({z: 0}, 500)
	.chain(movecamera52);
	
	var rotatecamera53 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(chiudiPortaIngressoMaster)
	
	var movecamera51 = new TWEEN.Tween(camera.position)
	.to({   x:50, z:0}, 1000)
	.chain(rotatecamera53);
	
	var rotatecamera52 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(movecamera51)
	
	var chiudiPortaScaleMaster = new TWEEN.Tween(master.porta_scale.rotation)
	.to({z: 0}, 500)
	.chain(rotatecamera52);
	
	var movecamera50 = new TWEEN.Tween(camera.position)
	.to({   x:50, y:10}, 1000)
	.chain(chiudiPortaScaleMaster);
	
	var rotatecamera51 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI*3/2 }, 1000)
	.chain(movecamera50)
	
	var movecamera49 = new TWEEN.Tween(camera.position)
	.to({  z:-60}, 1000)
	.chain(rotatecamera51);
	
	var rotatecamera50 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(movecamera49)
	
	var movecamera48 = new TWEEN.Tween(camera.position)
	.to({  x:10, y:25}, 1000)
	.chain(rotatecamera50);
	
	var rotatecamera49 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera48)
	
	var movecamera47 = new TWEEN.Tween(camera.position)
	.to({  z:-70}, 1000)
	.chain(rotatecamera49);
	
	var rotatecamera48 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(movecamera47)
	
	var movecamera46 = new TWEEN.Tween(camera.position)
	.to({  x:50, y:40}, 1000)
	.chain(rotatecamera48);
	
	var rotatecamera47 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI*3/2 }, 1000)
	.chain(movecamera46)
	
	var movecamera45 = new TWEEN.Tween(camera.position)
	.to({  z:-60}, 1000)
	.chain(rotatecamera47);
	
	var rotatecamera47 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(movecamera45)
	
	var movecamera44 = new TWEEN.Tween(camera.position)
	.to({  x:10, y:55}, 1000)
	.chain(rotatecamera47);
	
	var chiudiPortaBagnoPrimo = new TWEEN.Tween(primo.porta_bagno.rotation)
	.to({z: Math.PI/2}, 500)
	.chain(movecamera44)
	
	var movecamera43 = new TWEEN.Tween(camera.position)
	.to({  x:40}, 1000)
	.chain(chiudiPortaBagnoPrimo);
	
	var rotatecamera46 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera43)
	
	var chiudiFinestraBagnoPrimo = new TWEEN.Tween(primo.finestra_bagno.rotation)
	.to({z: 0}, 500)
	.delay(500)
	.chain(rotatecamera46)
	
	var apriFinestraBagnoPrimo = new TWEEN.Tween(primo.finestra_bagno.rotation)
	.to({z: -Math.PI/2}, 500)	
	.chain(chiudiFinestraBagnoPrimo)
	
	var rotatecamera45 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(apriFinestraBagnoPrimo)
	
	var movecamera42 = new TWEEN.Tween(camera.position)
	.to({  x:70}, 1000)
	.chain(rotatecamera45);
	
	var apriPortaBagnoPrimo = new TWEEN.Tween(primo.porta_bagno.rotation)
	.to({z: 0}, 500)
	.chain(movecamera42)
	
	
	var rotatecamera44 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 1000)
	.chain(apriPortaBagnoPrimo)
	
	var movecamera41 = new TWEEN.Tween(camera.position)
	.to({  z:-70}, 1000)
	.chain(rotatecamera44);
	
	var rotatecamera43 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(movecamera41)
	
	var movecamera40 = new TWEEN.Tween(camera.position)
	.to({  x:50}, 1000)
	.chain(rotatecamera43);
	
	var rotatecamera42 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera40)
	
	var chiudiFinestracamera2Primo1 = new TWEEN.Tween(primo.finestra_camera2_a.rotation)
	.to({z: 0}, 500)
	.delay(500)
	.chain(rotatecamera42)
	
	var apriFinestracamera2Primo1 = new TWEEN.Tween(primo.finestra_camera2_a.rotation)
	.to({z: -Math.PI/2}, 500)	
	.chain(chiudiFinestracamera2Primo1)
	
	var rotatecamera41 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(apriFinestracamera2Primo1)
	
	var movecamera39 = new TWEEN.Tween(camera.position)
	.to({  x:70}, 1000)
	.chain(rotatecamera41);
	
	var apriPortacamera2Primo1 = new TWEEN.Tween(primo.porta_camera2.rotation)
	.to({z: Math.PI/2}, 500)
	//.chain(movecamera39)
	
	var rotatecamera40 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 3000)
	.chain(movecamera39,apriPortacamera2Primo1)
	
	var chiudiFinestracamera1Primo1 = new TWEEN.Tween(primo.finestra_camera1_a.rotation)
	.to({z: 0}, 500)
	.delay(500)
	.chain(rotatecamera40)
	
		
	var apriFinestracamera1Primo1 = new TWEEN.Tween(primo.finestra_camera1_a.rotation)
	.to({z: -Math.PI/2}, 500)
	.chain(chiudiFinestracamera1Primo1)
	
	var rotatecamera39 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(apriFinestracamera1Primo1)
	
	var movecamera38 = new TWEEN.Tween(camera.position)
	.to({  x:30}, 1000)
	.chain(rotatecamera39);
	
	var rotatecamera38 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera38)
	
	
	
	
	
	var movecamera37 = new TWEEN.Tween(camera.position)
	.to({  z:-50}, 1000)
	.chain(rotatecamera38);
	
	var rotatecamera37 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(movecamera37)
	
	var movecamera36 = new TWEEN.Tween(camera.position)
	.to({  x:50}, 1000)
	.chain(rotatecamera37);
	
	var rotatecamera36 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 1000)
	.chain(movecamera36)
	
	var movecamera35 = new TWEEN.Tween(camera.position)
	.to({ z:-95}, 1000)
	.chain(rotatecamera36)
	
	var rotatecamera35 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(movecamera35)
	
	var rotatecamera34 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 1000)
	.chain(rotatecamera35)
	
	var rotatecamera33 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(rotatecamera34)
	
	var rotatecamera32 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(rotatecamera33)
	
	var movecamera34 = new TWEEN.Tween(camera.position)
	.to({  z:-140}, 1000)
	.chain(rotatecamera32);
	
	/*var apriFinestraSaloneTerra2 = new TWEEN.Tween(terra.finestra_camera_b.rotation)
	.to({z: Math.PI/2}, 500)
	//.chain(apriFinestraSaloneTerra2)*/
	
	var apriFinestracamera3Primo1 = new TWEEN.Tween(primo.finestra_camera3_a.rotation)
	.to({z: -Math.PI/2}, 500)
	.chain(movecamera34)
	
	var rotatecamera31 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(apriFinestracamera3Primo1)
	
	var movecamera33 = new TWEEN.Tween(camera.position)
	.to({  x:20}, 1000)
	.chain(rotatecamera31);
	
	/*var apriPortacamera3Primo = new TWEEN.Tween(primo.porta_camera3.rotation)
	.to({z: Math.PI/2}, 500)	
	.chain(chiudiFinestraBagnoTerra)*/
	
	var rotatecamera30 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera33);
	
	var movecamera32 = new TWEEN.Tween(camera.position)
	.to({ z:-95}, 1000)
	.chain(rotatecamera30)
	
	var movecamera31 = new TWEEN.Tween(camera.position)
	.to({ x:50}, 1000)
	.chain(movecamera32)
	
	var rotatecamera29 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	//.chain(movecamera31);
	
	//terra
	var movecamera30 = new TWEEN.Tween(camera.position)
	.to({  x:40, y:75}, 1000)
	.chain(rotatecamera29,movecamera31);
	
	var rotatecamera28 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 1000)
	.chain(movecamera30);
	
	var movecamera29 = new TWEEN.Tween(camera.position)
	.to({  z:-70}, 1000)
	.chain(rotatecamera28);
	
	var rotatecamera27 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(movecamera29)
	
	var movecamera28 = new TWEEN.Tween(camera.position)
	.to({  x:10, y:60}, 1000)
	.chain(rotatecamera27);
	
	var movecamera27 = new TWEEN.Tween(camera.position)
	.to({  x:40 }, 1000)
	.chain(movecamera28);
	
	var rotatecamera26 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera27)
	
	var movecamera26 = new TWEEN.Tween(camera.position)
	.to({  z:-60}, 1000)
	.chain(rotatecamera26);
	
	var rotatecamera25 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(movecamera26)
	
	var movecamera25 = new TWEEN.Tween(camera.position)
	.to({  x:50}, 1000)
	.chain(rotatecamera25);
	
	var rotatecamera25 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera25)
	
	var chiudiFinestraBagnoTerra = new TWEEN.Tween(terra.finestra_bagno.rotation)
	.to({z: Math.PI}, 500)
	.delay(500)
	.chain(rotatecamera25)
	
	var apriFinestraBagnoTerra = new TWEEN.Tween(terra.finestra_bagno.rotation)
	.to({z: Math.PI/2}, 500)	
	.chain(chiudiFinestraBagnoTerra)
	
	var rotatecamera24 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(apriFinestraBagnoTerra)
	
	var movecamera24 = new TWEEN.Tween(camera.position)
	.to({  x:70}, 1000)
	.chain(rotatecamera24);
	
	var apriPortaBagnoTerra = new TWEEN.Tween(terra.porta_bagno.rotation)
	.to({z: Math.PI/2}, 500)
	//.chain(movecamera24)
	
	var rotatecamera23 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 3000)
	.chain(movecamera24,apriPortaBagnoTerra)
	
	var chiudiFinestraCucinaTerra1 = new TWEEN.Tween(terra.finestra_cucina_a.rotation)
	.to({z: 0}, 500)
	.chain(rotatecamera23)
	
	var movecamera23 = new TWEEN.Tween(camera.position)
	.to({  z:-50}, 1000)
	.chain(chiudiFinestraCucinaTerra1);
	
	var rotatecamera22 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 3000)
	.chain(movecamera23)
	
	var rotatecamera21 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 3000)
	.chain(rotatecamera22);
		
	var movecamera22 = new TWEEN.Tween(camera.position)
	.to({  z:5}, 1000)
	.chain(rotatecamera21);
	
	var apriFinestraCucinaTerra1 = new TWEEN.Tween(terra.finestra_cucina_a.rotation)
	.to({z: -Math.PI/2}, 500)
	.chain(movecamera22)
	
	var rotatecamera20 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(apriFinestraCucinaTerra1)
	
	var movecamera21 = new TWEEN.Tween(camera.position)
	.to({  x:30}, 1000)
	.chain(rotatecamera20);
	
	var rotatecamera19 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera21)
	
	var movecamera20 = new TWEEN.Tween(camera.position)
	.to({  z:-50}, 1000)
	.chain(rotatecamera19);
	
	var rotatecamera17 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(movecamera20)
	
	var movecamera19 = new TWEEN.Tween(camera.position)
	.to({  x:50}, 1000)
	.chain(rotatecamera17);
	
	var rotatecamera16 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera19)
	///chiudi porta ingresso e fin salone
	
	var chiudiPortaIngressoTerra = new TWEEN.Tween(terra.porta_ingresso.rotation)
	.to({z: Math.PI}, 500)
	.chain(rotatecamera16)
	
	var chiudiFinestraSaloneTerra1 = new TWEEN.Tween(terra.finestra_camera_a.rotation)
	.to({z: 0}, 500)
	.chain(chiudiPortaIngressoTerra)
	
	var movecamera18 = new TWEEN.Tween(camera.position)
	.to({  z:-60}, 1000)
	.chain(chiudiFinestraSaloneTerra1);
	
	var apriPortaIngressoTerra = new TWEEN.Tween(terra.porta_ingresso.rotation)
	.to({z: Math.PI*3/2}, 500)
	.chain(movecamera18)
	
	var rotatecamera15 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(apriPortaIngressoTerra)
	
	var movecamera17 = new TWEEN.Tween(camera.position)
	.to({  x:65}, 1000)
	.chain(rotatecamera15);
	
	var rotatecamera14 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 1000)
	.chain(movecamera17)
	
	var movecamera16 = new TWEEN.Tween(camera.position)
	.to({  z:-140}, 1000)
	.chain(rotatecamera14);
	
	/*var apriFinestraSaloneTerra2 = new TWEEN.Tween(terra.finestra_camera_b.rotation)
	.to({z: Math.PI/2}, 500)
	//.chain(apriFinestraSaloneTerra2)*/
	
	var apriFinestraSaloneTerra1 = new TWEEN.Tween(terra.finestra_camera_a.rotation)
	.to({z: -Math.PI/2}, 500)
	.chain(movecamera16)
	
	var rotatecamera13 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(apriFinestraSaloneTerra1)
	
	var movecamera15 = new TWEEN.Tween(camera.position)
	.to({  x:20}, 1000)
	.chain(rotatecamera13);
	
	var rotatecamera12 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera15);
	
	var movecamera14 = new TWEEN.Tween(camera.position)
	.to({ z:-90}, 1000)
	.chain(rotatecamera12)
	
	var movecamera13 = new TWEEN.Tween(camera.position)
	.to({ x:50}, 1000)
	.chain(movecamera14)
	
	var rotatecamera11 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	//.chain(movecamera13);
	
	//navigazione master
	var movecamera12 = new TWEEN.Tween(camera.position)
	.to({  x:40, y:45}, 1000)
	.chain(rotatecamera11,movecamera13);
	
	var rotatecamera10 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI/2 }, 1000)
	.chain(movecamera12);
	
	var movecamera11 = new TWEEN.Tween(camera.position)
	.to({  z:-70}, 1000)
	.chain(rotatecamera10);
	
	var rotatecamera9 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(movecamera11)
	
	var movecamera10 = new TWEEN.Tween(camera.position)
	.to({  x:10, y:30}, 1000)
	.chain(rotatecamera9);
	
	var movecamera9 = new TWEEN.Tween(camera.position)
	.to({  x:40 }, 1000)
	.chain(movecamera10);
	
	/*var apriPortaScaleMaster = new TWEEN.Tween(master.porta_scale.rotation)
	.to({z: -Math.PI/2}, 500)
	.chain(movecamera9);*/
	
	var rotatecamera8 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)
	.chain(movecamera9);
	
	var movecamera8 = new TWEEN.Tween(camera.position)
	.to({  z:-60 }, 1000)
	.chain(rotatecamera8);
	
	var rotatecamera7 = new TWEEN.Tween(camera.rotation)
	.to({  y: -Math.PI }, 2000)
	.chain(movecamera8);
	
	
	var chiudiPortaBagnoMaster = new TWEEN.Tween(master.porta_bagno.rotation)
	.to({z: 0}, 500)
	.chain(rotatecamera7);
	
	var movecamera7 = new TWEEN.Tween(camera.position)
	.to({  z:-100 }, 1000)
	.chain(chiudiPortaBagnoMaster);
	
	var rotatecamera5 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 2000)
	.chain(movecamera7);
	
	var movecamera6 = new TWEEN.Tween(camera.position)
	.to({  z:-150 }, 2000)
	.chain(rotatecamera5);
	
	var apriPortaBagnoMaster = new TWEEN.Tween(master.porta_bagno.rotation)
	.to({z: -Math.PI/2}, 500)
	.chain(movecamera6);
	
	var movecamera5 = new TWEEN.Tween(camera.position)
	.to({  z:-100 }, 1000)
	.chain(apriPortaBagnoMaster);
	
	var rotatecamera5 = new TWEEN.Tween(camera.rotation)
	.to({  y: 0 }, 1000)
	.chain(movecamera5);
	
	var chiudiFinestraStudioMaster = new TWEEN.Tween(master.finestra_studio.rotation)
	.to({z: Math.PI}, 500)
	.delay(500)
	.chain(rotatecamera5);
	
	var apriFinestraStudioMaster = new TWEEN.Tween(master.finestra_studio.rotation)
	.to({z: Math.PI/2}, 500)
	.chain(chiudiFinestraStudioMaster);
	
	var rotatecamera4 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(apriFinestraStudioMaster);
	
	var movecamera4 = new TWEEN.Tween(camera.position)
	.to({  x:60, }, 1000)
	.chain(rotatecamera4);
	
	var rotatecamera3 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI*3/2 }, 1000)
	.chain(movecamera4);
	
	var chiudiFinestracameraMaster = new TWEEN.Tween(master.finestra_camera.rotation)
	.to({z: Math.PI}, 500)	
	.delay(500)
	.chain(rotatecamera3);
	
	var apriFinestracameraMaster = new TWEEN.Tween(master.finestra_camera.rotation)
	.to({z: Math.PI/2}, 500)
	.chain(chiudiFinestracameraMaster);
	
	var rotatecamera2 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI }, 1000)
	.chain(apriFinestracameraMaster);
	
	var movecamera3 = new TWEEN.Tween(camera.position)
	.to({  x:30 }, 1000)
	.chain(rotatecamera2);

    var rotatecamera1 = new TWEEN.Tween(camera.rotation)
	.to({  y: Math.PI/2 }, 1000)	
	.chain(movecamera3);
	
	var movecamera2 = new TWEEN.Tween(camera.position)
	.to({  x:50, z: -39 }, 1000)
	.chain(rotatecamera1);
	
	var apriPortaIngressoMaster = new TWEEN.Tween(master.porta_ingresso.rotation)
	.to({z: Math.PI/2}, 500)
	.chain(movecamera2);
	
	var movecamera1 = new TWEEN.Tween(camera.position)
	.to({  x:50, y:15, z: 0 }, 5000)
	.delay(1000)
	.chain(apriPortaIngressoMaster)	
	
	
	
	.start();
	//window.location.reload();
	//trackballControls.enabled=false;
}