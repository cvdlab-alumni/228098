// add spotlights
function createDirectionalLight(){   
      var dir1 = new THREE.DirectionalLight(0xffffff);
	  dir1.position.set(50, 10, 0);
	  dir1.intensity = 0.6;
	  scene.add(dir1);
	
	  var dir2 = new THREE.DirectionalLight(0xffffff);
	  dir2.position.set(-50, 10, 0);
	  dir2.intensity = 0.6;
	  scene.add(dir2);
	
	  var dir3 = new THREE.DirectionalLight(0xffffff);
	  dir3.position.set(0, 10, 50);
	  dir3.intensity = 0.6;
	  scene.add(dir3);
	
	  var dir4 = new THREE.DirectionalLight(0xffffff);
	  dir4.position.set(0, 10, -50);
	  dir4.intensity = 0.6;
	  scene.add(dir4);
}
//master
function createMasterLight(master){  
      // Camera
      var light1 = createLamp(0.3, 0xFFFFFF);
      master.add(light1);
      light1.position.set(2.3,3.3,2.7);
      light1.pointLight.position.set(0,0,0);
      light1.spotLight.target=(light1.target);

      // Studio
      var light2 = createLamp(0.3, 0xFFFFFF);
      master.add(light2);
      light2.position.set(6.5,3.3,2.7);
      light2.pointLight.position.set(0,0,0);
      light2.spotLight.target=(light2.target);

      //Sala
      var light3 = createLamp(0.3, 0xFFFFFF);
      master.add(light3);
      light3.position.set(6,10,2.7);
      light3.pointLight.position.set(0,0,0)
      light3.spotLight.target=(light3.target);

      //Cucina
      var light4 = createLamp(0.3, 0xFFFFFF);
      master.add(light4);
      light4.position.set(2.3,10,2.7);
      light4.pointLight.position.set(0,0,0);
      light4.spotLight.target=(light4.target);

      //Bagno
      var light5 = createLamp(0.3, 0xFFFFFF);
      master.add(light5);
      light5.position.set(6,16,2.7);
      light5.pointLight.position.set(0,0,0);
      light5.spotLight.target=(light5.target);


      //Intercapedine
      var light6 = createLamp(0.3, 0xFFFFFF);
      master.add(light6);
      light6.position.set(2.5,14,2.7);
      light6.pointLight.position.set(0,0,0);
      light6.spotLight.target=(light6.target);
	  
	  master.luce_camera = light1;
	  master.luce_studio= light2;
	  master.luce_sala= light3;
	  master.luce_cucina= light4;
	  master.luce_bagno= light5;
	  master.luce_intercapedine= light6;
	  
	  return master;	  
}
 //terra
function createTerraLight(terra){  
      // Cucina
      var light1 = createLamp(0.3, 0xFFFFFF);
      terra.add(light1);
      light1.position.set(2.3,3.3,2.7);
      light1.pointLight.position.set(0,0,0);
      light1.spotLight.target=(light1.target);

      // Bagno
      var light2 = createLamp(0.3, 0xFFFFFF);
      terra.add(light2);
      light2.position.set(6.5,2.5,2.7);
      light2.pointLight.position.set(0,0,0);
      light2.spotLight.target=(light2.target);

      //Sala1
      var light3 = createLamp(0.3, 0xFFFFFF);
      terra.add(light3);
      light3.position.set(6,8,2.7);
      light3.pointLight.position.set(0,0,0)
      light3.spotLight.target=(light3.target);

      //Sala2
      var light4 = createLamp(0.3, 0xFFFFFF);
      terra.add(light4);
      light4.position.set(2.3,11,2.7);
      light4.pointLight.position.set(0,0,0);
      light4.spotLight.target=(light4.target);
	  
	  terra.luce_cucina= light1;	  	  
	  terra.luce_bagno= light2;
	  terra.luce_sala1= light3;
	  
	  return terra;

}
  //primo
function createPrimoLight(primo){  
      // Camera1
      var light1 = createLamp(0.3, 0xFFFFFF);
      primo.add(light1);
      light1.position.set(2.3,3.3,2.7);
      light1.pointLight.position.set(0,0,0);
      light1.spotLight.target=(light1.target);

      // Camera2
      var light2 = createLamp(0.3, 0xFFFFFF);
      primo.add(light2);
      light2.position.set(6.5,2.5,2.7);
      light2.pointLight.position.set(0,0,0);
      light2.spotLight.target=(light2.target);

      //Bagno
      var light3 = createLamp(0.3, 0xFFFFFF);
      primo.add(light3);
      light3.position.set(6.5,8,2.7);
      light3.pointLight.position.set(0,0,0)
      light3.spotLight.target=(light3.target);

      //Camera3
      var light4 = createLamp(0.3, 0xFFFFFF);
      primo.add(light4);
      light4.position.set(2.3,11,2.7);
      light4.pointLight.position.set(0,0,0);
      light4.spotLight.target=(light4.target);  
	  
	  primo.luce_camera1= light1;
	  primo.luce_camera2= light2;
	  primo.luce_bagno= light3;
	  primo.luce_camera3= light4;  
	  
	  return primo;
}
