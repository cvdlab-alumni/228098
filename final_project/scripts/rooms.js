

function createMasterDoor(floor){
      floor.position.set(0,0,0);
      var door = createBlindDoor(.8,2.2,0.1);
      floor.add(door);
      door.position.set(4.6,1.3,1.4);

      var door1=createDoor(1,2.2,0.1);
	  door1.rotation.z=Math.PI;
      floor.add(door1);
      door1.position.set(4.3,4.3,1.4);

      var door2=createDoor(1,2.2,0.1);
      //door2.rotation.z=Math.PI/2;
      floor.add(door2);
      door2.position.set(4.3,5.4,1.4);

      var door3=createDoor(.8,2.2,0.1, 1);
      //door3.rotation.z=Math.PI/2;
      floor.add(door3);
      door3.position.set(5.85,13.5,1.4);
	  
      floor.porta_ingresso= door;
	  floor.porta_camera= door1;
	  floor.porta_scale= door2;
	  floor.porta_bagno= door3;
      
      return floor;
}
function createTerraDoor(floor){
      floor.position.set(0,0,0);
      var door = createBlindDoor(.8,2.2,0.1);
	  door.rotation.z=Math.PI;
      floor.add(door);
      door.position.set(7,10.5,1.4);
	  
      var door1=createDoor(.6,2.2,0.1);
	  door1.rotation.z=Math.PI;
      floor.add(door1);
      door1.position.set(4.3,5.2,1.4);

      var door2=createDoor(.6,2.2,0.1);
	  door2.rotation.z=Math.PI*3/2;
      floor.add(door2);
      door2.position.set(5.4,5.2,1.4);

      floor.porta_ingresso= door;
	  floor.porta_cucina= door1;
	  floor.porta_bagno= door2;
	  
      return floor;
}
function createPrimoDoor(floor){
      floor.position.set(0,0,0);
        
      var door1=createDoor(.6,2.2,0.1);
	  door1.rotation.z=Math.PI;
      floor.add(door1);
      door1.position.set(4.3,5.2,1.4);

      var door2=createDoor(.6,2.2,0.1);
	  door2.rotation.z=Math.PI*3/2;
      floor.add(door2);
      door2.position.set(5.4,5.2,1.4);

      var door3=createDoor(1,2.2,0.1);
	  door3.rotation.z=Math.PI;
      floor.add(door3);
      door3.position.set(4.3,10.1,1.4);

      var door4=createDoor(.75,2.2,0.1, 1);
	  door4.rotation.z=Math.PI/2;
      floor.add(door4);
      door4.position.set(5.4,6.5,1.4);
	  
	  floor.porta_camera1= door1;
	  floor.porta_camera2= door2;
	  floor.porta_camera3= door3;
	  floor.porta_bagno= door4;
	  
      return floor;
}
function createMasterWindows(floor){
      var window_camera = createSingleWindow(1.4,1.2,0.1);
	  window_camera.rotation.z=Math.PI;
      floor.add(window_camera);
      window_camera.position.set(3,1.3,1.3);

      var window_studio = createSingleWindow(1.1,1.2,0.1);
	  window_studio.rotation.z=Math.PI;
      floor.add(window_studio);
      window_studio.position.set(7.1,1.3,1.3);

      floor.finestra_camera= window_camera;
	  floor.finestra_studio= window_studio;
	  
      return floor;
}
function createTerraWindows(floor){
      var window_cucina = createDoubleWindow(2.7,2.2,0.1);
	  window_cucina.rotation.z=Math.PI;
      floor.add(window_cucina);
      window_cucina.position.set(3.65,1.3,.3);

      var window_camera = createDoubleWindow(2.7,2.2,0.1);
      floor.add(window_camera);
      window_camera.position.set(.97,13.5,.3);

      var window_bagno = createSingleWindow(1.1,1.2,0.1);
      window_bagno.rotation.z=Math.PI;
      floor.add(window_bagno);
      window_bagno.position.set(7.1,1.3,1.3);

	  floor.finestra_cucina_a= window_cucina.anta1;
	  floor.finestra_cucina_b= window_cucina.anta2;
      floor.finestra_camera_a= window_camera.anta1;
	  floor.finestra_camera_b= window_camera.anta2;
	  floor.finestra_bagno= window_bagno;
	  
      return floor;
}
function createPrimoWindows(floor){
       var window_camera1 = createDoubleWindow(1.4,1.2,0.1);
	  window_camera1.rotation.z=Math.PI;
      floor.add(window_camera1);
      window_camera1.position.set(2.35,1.3,1.3);


      var window_camera2 = createDoubleWindow(1.1,1.2,0.1);
      window_camera2.rotation.z=Math.PI;
      floor.add(window_camera2);
      window_camera2.position.set(7.1,1.3,1.3);
	  
      var window_camera3 = createDoubleWindow(2.7,2.2,0.1);
      floor.add(window_camera3);
      window_camera3.position.set(.97,13.5,.3);
	  
	  var window_bagno = createSingleWindow(.8,1.2,0.1, 1);
      floor.add(window_bagno);
      window_bagno.position.set(6.2,10.7,1.3);
	  
	  floor.finestra_camera1_a= window_camera1.anta1;
	  floor.finestra_camera1_b= window_camera1.anta2;
	  floor.finestra_camera2_a= window_camera2.anta1;
	  floor.finestra_camera2_b= window_camera2.anta2;
	  floor.finestra_camera3_a= window_camera3.anta1;
	  floor.finestra_camera3_b= window_camera3.anta2;
	  floor.finestra_bagno= window_bagno;
	  	  
      return floor;
}
function createMasterFloors(floor){
      var floor_master = createPlane(7.8,12.6, [],3);
      floor.add(floor_master);
      floor_master.position.set(0,1.1,0.3);

      var floor_bagno_master = createPlane(3.5,2.2, [],2);
      floor.add(floor_bagno_master);
      floor_bagno_master.position.set(4.3,14.8,0.3);
	  
	  var floor_intercapedine = createPlane(7.8,1.1, [],2);
      floor.add(floor_intercapedine);
      floor_intercapedine.position.set(0,13.7,0.3);
   
      return floor;
}

function createTerraFloors(floor){
	  
	  var floor_int1 = createPlane(7.8,13.7, [0.3,4.3, 4.2,4.3, 4.2,6.3, 0.3,6.3],5);
      floor.add(floor_int1);
      floor_int1.position.set(0,1.1,0);
	  
	  var floor_int2 = createPlane(3.5,2.2, [],5);
      floor.add(floor_int2);
      floor_int2.position.set(4.3,14.8,0);
	  
	  
	  
	  var floor_balcone = createPlane(7.8,1.1, [],7);
      floor.add(floor_balcone);
      floor_balcone.position.set(0,.1,0.3);
	  	
      var floor_cucina = createPlane(4.2,4.4, [],8);
      floor.add(floor_cucina);
      floor_cucina.position.set(0,1.1,0.3);
	  
	  var floor_bagno_terra = createPlane(3.6,4.3, [0,2.1, 0,4.3, 1.3,4.3, 1.3,2.1],2);
      floor.add(floor_bagno_terra);
      floor_bagno_terra.position.set(4.2,1.1,0.3);
	  
	  var floor_area = createPlane(1.3,2.2, [],3);
      floor.add(floor_area);
      floor_area.position.set(4.2,3.2,0.3);

      var floor_sala1 = createPlane(7.8,5.4, [0.3,0, 4.2,0, 4.2,2, 0.3,2], 3);
      floor.add(floor_sala1);
      floor_sala1.position.set(0,5.4,0.3);
	  
	  var floor_sala2 = createPlane(4.6,3, [], 3);
      floor.add(floor_sala2);
      floor_sala2.position.set(0,10.8,0.3);
	  
	  var floor_terrazza1 = createPlane(7.8,3.3, [],7);
      floor.add(floor_terrazza1);
      floor_terrazza1.position.set(0,13.8,0.3);
	  
	  var floor_terrazza2 = createPlane(3.2,3, [],7);
      floor.add(floor_terrazza2);
      floor_terrazza2.position.set(4.6,10.8,0.3);
	  
	  
	  var floor_ext1 = createPlane(7.8,1.1, [],6);
      floor.add(floor_ext1);
      floor_ext1.position.set(0,0,0);
	  
	  var floor_ext2 = createPlane(7.8,0.1, [],6);
      floor.add(floor_ext2);
      floor_ext2.position.set(0,17,0);
	  
	  var floor_ext3 = createPlane(4.3,2.2, [],6);
      floor.add(floor_ext3);
      floor_ext3.position.set(0,14.8,0);
	  
	  

   
      return floor;
}
function createPrimoFloors(floor){
	  var floor_balcone = createPlane(4.6,1.1, [],7);
      floor.add(floor_balcone);
      floor_balcone.position.set(0,13.8,0.3);	  
	  	
      var floor_camera1 = createPlane(4.2,4.3, [],1);
      floor.add(floor_camera1);
      floor_camera1.position.set(0,1.1,0.3);
	  
	  var floor_camera2 = createPlane(3.6,4.3, [0,2.1, 0,4.3, 1.3,4.3, 1.3,2.1],1);
      floor.add(floor_camera2);
      floor_camera2.position.set(4.2,1.1,0.3);
	  
	  var floor_area = createPlane(1.3,7.6, [],3);
      floor.add(floor_area);
      floor_area.position.set(4.2,3.2,0.3);

      var floor_bagno = createPlane(2.3,5.4, [], 2);
      floor.add(floor_bagno);
      floor_bagno.position.set(5.5,5.4,0.3);
	  
	  var floor_camera3 = createPlane(4.6,6.2, [4.2,0, 4.2,3, 4.6,3, 4.6,0 ], 1);
      floor.add(floor_camera3);
      floor_camera3.position.set(0,7.6,0.3);
	  	 
	  
	  var floor_int1 = createPlane(7.8,9.7, [0.3,4.3, 4.2,4.3, 4.2,6.3, 0.3,6.3],5);
      floor.add(floor_int1);
      floor_int1.position.set(0,1.1,0);
	  
	  var floor_int2 = createPlane(4.6,3, [],5);
      floor.add(floor_int2);
      floor_int2.position.set(0,10.8,0);	  
	 
   	  var floor_ext1 = createPlane(4.6,1.1, [],6);
      floor.add(floor_ext1);
      floor_ext1.position.set(0,13.8,0);
	  
      return floor;
}

function createMasterInternalWall(floor){
      var muro_camera_1 = createPlane(3.9,2.7, [1.3,2.2, 1.3, 1, 2.7,1, 2.7,2.2],10);
      muro_camera_1.rotation.x = Math.PI/2;
      floor.add(muro_camera_1);
      muro_camera_1.position.set(0.3,1.4,0.3);
	  
	  var muro_camera_2 = createPlane(3.9,2.7, [],10);
      muro_camera_2.rotation.x = Math.PI/2;
	  muro_camera_2.rotation.y = Math.PI/2;
      floor.add(muro_camera_2);
      muro_camera_2.position.set(0.3,1.4,0.3);

      var muro_camera_3 = createPlane(3.9,2.7, [],10);
      muro_camera_3.rotation.x = Math.PI/2;
      floor.add(muro_camera_3);
      muro_camera_3.position.set(0.3,5.3,0.3);
	  
	  var muro_camera_4 = createPlane(3.9,2.7, [1.9,2.2, 1.9, 0, 2.9,0, 2.9,2.2],10);
      muro_camera_4.rotation.x = Math.PI/2;
	  muro_camera_4.rotation.y = Math.PI/2;
      floor.add(muro_camera_4);
      muro_camera_4.position.set(4.2,1.4,0.3);
	  
	  var muro_scale_1 = createPlane(3.9,2.7, [],13);
      muro_scale_1.rotation.x = Math.PI/2;
      floor.add(muro_scale_1);
      muro_scale_1.position.set(0.3,5.4,0.3);
	  
	  var muro_scale_2 = createPlane(3.9,2.7, [],13);
      muro_scale_2.rotation.x = Math.PI/2;
      floor.add(muro_scale_2);
      muro_scale_2.position.set(0.3,7.4,0.3);
	  
	  var muro_scale_3 = createPlane(2,2.7, [],13);
      muro_scale_3.rotation.x = Math.PI/2;
	  muro_scale_3.rotation.y = Math.PI/2;
      floor.add(muro_scale_3);
      muro_scale_3.position.set(0.3,5.4,0.3);
	  
	  var muro_scale_4 = createPlane(2,2.7, [0,2.2, 0,0, 1,0, 1,2.2],13);
      muro_scale_4.rotation.x = Math.PI/2;
	  muro_scale_4.rotation.y = Math.PI/2;
      floor.add(muro_scale_4);
      muro_scale_4.position.set(4.2,5.4,0.3);
	  
	  var muro_sala_1 = createPlane(6.1,2.7, [1.9,2.2, 1.9, 0, 2.9,0, 2.9,2.2,    4,2.2, 4,0, 5,0, 5,2.2 ],9);
      muro_sala_1.rotation.x = Math.PI/2;
	  muro_sala_1.rotation.y = Math.PI/2;
      floor.add(muro_sala_1);
      muro_sala_1.position.set(4.3,1.4,0.3);
	  
	  var muro_sala_2 = createPlane(4,2.7, [],9);
      muro_sala_2.rotation.x = Math.PI/2;
      floor.add(muro_sala_2);
      muro_sala_2.position.set(0.3,7.5,0.3);
	  
	  var muro_sala_3 = createPlane(7.2,2.7, [5.55,2.2, 5.55,0, 6.35,0, 6.35,2.2],9);
      muro_sala_3.rotation.x = Math.PI/2;
      floor.add(muro_sala_3);
      muro_sala_3.position.set(0.3,13.3,0.3);
	  
      var muro_sala_4 = createPlane(13.5,2.7, [],9);
      muro_sala_4.rotation.x = Math.PI/2;
	  muro_sala_4.rotation.y = Math.PI/2;
      floor.add(muro_sala_4);
      muro_sala_4.position.set(7.5,1.4,0.3);
	  
	  var muro_sala_5 = createPlane(5.9,2.7, [],9);
      muro_sala_5.rotation.x = Math.PI/2;
	  muro_sala_5.rotation.y = Math.PI/2;
      floor.add(muro_sala_5);
      muro_sala_5.position.set(0.3,7.5,0.3);
	  
	  var muro_sala_6 = createPlane(3.2,2.7, [.3,2.2, .3,0, 1.1,0, 1.1,2.2,   2.8,2.2, 2.8,1, 1.7,1, 1.7,2.2],9);
      muro_sala_6.rotation.x = Math.PI/2;
      floor.add(muro_sala_6);
      muro_sala_6.position.set(4.3,1.4,0.3);
	  
	  var muro_bagno_1 = createPlane(7.2,2.7, [5.55,2.2, 5.55,0, 6.35,0, 6.35,2.2],11);
      muro_bagno_1.rotation.x = Math.PI/2;
      floor.add(muro_bagno_1);
      muro_bagno_1.position.set(0.3,13.6,0.3);
	  
	  var muro_bagno_2 = createPlane(7.2,2.7, [5.55,2.2, 5.55,0, 6.35,0, 6.35,2.2],11);
      muro_bagno_2.rotation.x = Math.PI/2;
      floor.add(muro_bagno_2);
      muro_bagno_2.position.set(0.3,14.6,0.3);
	  
	  var muro_bagno_3 = createPlane(1,2.7, [],11);
      muro_bagno_3.rotation.x = Math.PI/2;
	  muro_bagno_3.rotation.y = Math.PI/2;
      floor.add(muro_bagno_3);
      muro_bagno_3.position.set(0.3,13.6,0.3);
	  
	  var muro_bagno_4 = createPlane(1,2.7, [],11);
      muro_bagno_4.rotation.x = Math.PI/2;
	  muro_bagno_4.rotation.y = Math.PI/2;
      floor.add(muro_bagno_4);
      muro_bagno_4.position.set(7.5,13.6,0.3);
	  
	  var muro_bagno_5 = createPlane(2,2.7, [],11);
      muro_bagno_5.rotation.x = Math.PI/2;
	  muro_bagno_5.rotation.y = Math.PI/2;
      floor.add(muro_bagno_5);
      muro_bagno_5.position.set(7.5,14.7,0.3);
	  
	  var muro_bagno_6 = createPlane(2,2.7, [],11);
      muro_bagno_6.rotation.x = Math.PI/2;
	  muro_bagno_6.rotation.y = Math.PI/2;
      floor.add(muro_bagno_6);
      muro_bagno_6.position.set(4.6,14.7,0.3);
	  
	  var muro_bagno_7 = createPlane(2.9,2.7, [],11);
      muro_bagno_7.rotation.x = Math.PI/2;
      floor.add(muro_bagno_7);
      muro_bagno_7.position.set(4.6,16.7,0.3);
	  
	  var muro_bagno_8 = createPlane(2.9,2.7, [1.25,2.2, 1.25,0, 2.05,0, 2.05,2.2],11);
      muro_bagno_8.rotation.x = Math.PI/2;
      floor.add(muro_bagno_8);
      muro_bagno_8.position.set(4.6,14.7,0.3);
	  
      return floor;
}
function createTerraInternalWalls(floor){
      var muro_camera_1 = createPlane(3.9,2.7, [0.67,2.2, 0.67,0, 3.35,0, 3.35,2.2],12);
      muro_camera_1.rotation.x = Math.PI/2;
      floor.add(muro_camera_1);
      muro_camera_1.position.set(0.3,1.4,0.3);
	  
	  var muro_camera_2 = createPlane(3.9,2.7, [],12);
      muro_camera_2.rotation.x = Math.PI/2;
	  muro_camera_2.rotation.y = Math.PI/2;
      floor.add(muro_camera_2);
      muro_camera_2.position.set(0.3,1.4,0.3);

      var muro_camera_3 = createPlane(3.9,2.7, [],12);
      muro_camera_3.rotation.x = Math.PI/2;
      floor.add(muro_camera_3);
      muro_camera_3.position.set(0.3,5.3,0.3);
	  
	  var muro_camera_4 = createPlane(3.9,2.7, [3.2,2.2, 3.2, 0, 3.8,0, 3.8,2.2],12);
      muro_camera_4.rotation.x = Math.PI/2;
	  muro_camera_4.rotation.y = Math.PI/2;
      floor.add(muro_camera_4);
      muro_camera_4.position.set(4.2,1.4,0.3);
	  
	  var muro_scale_1 = createPlane(3.9,3, [],13);
      muro_scale_1.rotation.x = Math.PI/2;
      floor.add(muro_scale_1);
      muro_scale_1.position.set(0.3,5.5,0);
	  
	  var muro_scale_2 = createPlane(3.9,3, [],13);
      muro_scale_2.rotation.x = Math.PI/2;
      floor.add(muro_scale_2);
      muro_scale_2.position.set(0.3,7.4,0);
	  
	  var muro_scale_3 = createPlane(2,3, [],13);
      muro_scale_3.rotation.x = Math.PI/2;
	  muro_scale_3.rotation.y = Math.PI/2;
      floor.add(muro_scale_3);
      muro_scale_3.position.set(0.3,5.4,0);
	  
	 	  
	  var muro_bagno_1 = createPlane(1.2,2.7, [],11);
      muro_bagno_1.rotation.x = Math.PI/2;
      floor.add(muro_bagno_1);
      muro_bagno_1.position.set(4.3,3.2,0.3);
	  
	  var muro_bagno_2 = createPlane(2.1,2.7, [1.4,2.2, 1.4, 0, 2,0, 2,2.2],11);
      muro_bagno_2.rotation.x = Math.PI/2;
	  muro_bagno_2.rotation.y = Math.PI/2;
      floor.add(muro_bagno_2);
      muro_bagno_2.position.set(5.5,3.2,0.3);
	  
	  var muro_bagno_3 = createPlane(2,2.7, [],11);
      muro_bagno_3.rotation.x = Math.PI/2;
      floor.add(muro_bagno_3);
      muro_bagno_3.position.set(5.5,5.3,0.3);
	  
	  var muro_bagno_4 = createPlane(3.9,2.7, [],11);
      muro_bagno_4.rotation.x = Math.PI/2;
	  muro_bagno_4.rotation.y = Math.PI/2;
      floor.add(muro_bagno_4);
      muro_bagno_4.position.set(7.5,1.4,0.3);
	  
	  var muro_bagno_5 = createPlane(1.8,2.7, [],11);
      muro_bagno_5.rotation.x = Math.PI/2;
	  muro_bagno_5.rotation.y = Math.PI/2;
      floor.add(muro_bagno_5);
      muro_bagno_5.position.set(4.3,1.4,0.3);
	  
	  var muro_bagno_6 = createPlane(3.2,2.7, [2.8,2.2, 2.8,1, 1.7,1, 1.7,2.2],11);
      muro_bagno_6.rotation.x = Math.PI/2;
      floor.add(muro_bagno_6);
      muro_bagno_6.position.set(4.3,1.4,0.3);
	
	  
	  var muro_sala_1 = createPlane(4.3,2.7, [1.3,2.2, 1.3, 0, 1.9,0, 1.9,2.2,      2.2,2.2, 2.2,0, 4.1,0, 4.1,2.2 ],9);
      muro_sala_1.rotation.x = Math.PI/2;
	  muro_sala_1.rotation.y = Math.PI/2;
      floor.add(muro_sala_1);
      muro_sala_1.position.set(4.3,3.3,0.3);
	  
	  var muro_sala_2 = createPlane(4,2.7, [],9);
      muro_sala_2.rotation.x = Math.PI/2;
      floor.add(muro_sala_2);
      muro_sala_2.position.set(0.3,7.6,0.3);
	  
	  var muro_sala_3 = createPlane(5.1,2.7, [],9);
      muro_sala_3.rotation.x = Math.PI/2;
	  muro_sala_3.rotation.y = Math.PI/2;
      floor.add(muro_sala_3);
      muro_sala_3.position.set(7.5,5.4,0.3);
	  
	  var muro_sala_5 = createPlane(5.9,2.7, [],9);
      muro_sala_5.rotation.x = Math.PI/2;
	  muro_sala_5.rotation.y = Math.PI/2;
      floor.add(muro_sala_5);
      muro_sala_5.position.set(0.3,7.6,0.3);
	  
	  var muro_sala_6 = createPlane(4,2.7, [3.35,0, 3.35,2.2, 0.65,2.2, 0.65,0],9);
      muro_sala_6.rotation.x = Math.PI/2;
      floor.add(muro_sala_6);
      muro_sala_6.position.set(0.3,13.5,0.3);
	  
	  var muro_sala_7 = createPlane(3,2.7, [],9);
      muro_sala_7.rotation.x = Math.PI/2;
	  muro_sala_7.rotation.y = Math.PI/2;
      floor.add(muro_sala_7);
      muro_sala_7.position.set(4.3,10.5,0.3);
	  
	  var muro_sala_8 = createPlane(3.2,2.7, [2.7,0, 2.7,2.2, 1.9,2.2, 1.9,0 ],9);
      muro_sala_8.rotation.x = Math.PI/2;
      floor.add(muro_sala_8);
      muro_sala_8.position.set(4.3,10.5,0.3);
	  
	  var muro_sala_9 = createPlane(2.1,2.7, [],9);
      muro_sala_9.rotation.x = Math.PI/2;
      floor.add(muro_sala_9);
      muro_sala_9.position.set(5.4,5.4,0.3);
	  
	  var muro_sala_9 = createPlane(2.1,2.7, [],9);
      muro_sala_9.rotation.x = Math.PI/2;
      floor.add(muro_sala_9);
      muro_sala_9.position.set(5.4,5.5,0.3);
	  
	  var muro_sala_10 = createPlane(1.1,2.7, [],9);
      muro_sala_10.rotation.x = Math.PI/2;
      floor.add(muro_sala_10);
      muro_sala_10.position.set(4.3,3.4,0.3);
	  
	  var muro_sala_11 = createPlane(2.2,2.7, [1.3,2.2, 1.3, 0, 1.9,0, 1.9,2.2 ],9);
      muro_sala_11.rotation.x = Math.PI/2;
	  muro_sala_11.rotation.y = Math.PI/2;
      floor.add(muro_sala_11);
      muro_sala_11.position.set(5.4,3.3,0.3);
	  
      return floor;
	  
	  
}

function createPrimoInternalWalls(floor){
      var muro_camera1_1 = createPlane(3.9,2.7, [0.67,2.2, 0.67,1, 2.07,1, 2.07,2.2],10);
      muro_camera1_1.rotation.x = Math.PI/2;
      floor.add(muro_camera1_1);
      muro_camera1_1.position.set(0.3,1.4,0.3);
	  
	  var muro_camera1_2 = createPlane(3.9,2.7, [],10);
      muro_camera1_2.rotation.x = Math.PI/2;
	  muro_camera1_2.rotation.y = Math.PI/2;
      floor.add(muro_camera1_2);
      muro_camera1_2.position.set(0.3,1.4,0.3);

      var muro_camera1_3 = createPlane(3.9,2.7, [],10);
      muro_camera1_3.rotation.x = Math.PI/2;
      floor.add(muro_camera1_3);
      muro_camera1_3.position.set(0.3,5.3,0.3);
	  
	  var muro_camera1_4 = createPlane(3.9,2.7, [3.2,2.2, 3.2, 0, 3.8,0, 3.8,2.2],10);
      muro_camera1_4.rotation.x = Math.PI/2;
	  muro_camera1_4.rotation.y = Math.PI/2;
      floor.add(muro_camera1_4);
      muro_camera1_4.position.set(4.2,1.4,0.3);
	  
	  var muro_scale_1 = createPlane(3.9,3, [],13);
      muro_scale_1.rotation.x = Math.PI/2;
      floor.add(muro_scale_1);
      muro_scale_1.position.set(0.3,5.5,0);
	  
	  var muro_scale_2 = createPlane(3.9,3, [],13);
      muro_scale_2.rotation.x = Math.PI/2;
      floor.add(muro_scale_2);
      muro_scale_2.position.set(0.3,7.4,0);
	  
	  var muro_scale_3 = createPlane(2,3, [],13);
      muro_scale_3.rotation.x = Math.PI/2;
	  muro_scale_3.rotation.y = Math.PI/2;
      floor.add(muro_scale_3);
      muro_scale_3.position.set(0.3,5.4,0);
	  
	 	  
	  var muro_camera2_1 = createPlane(1.2,2.7, [],10);
      muro_camera2_1.rotation.x = Math.PI/2;
      floor.add(muro_camera2_1);
      muro_camera2_1.position.set(4.3,3.2,0.3);
	  
	  var muro_camera2_2 = createPlane(2.1,2.7, [1.4,2.2, 1.4, 0, 2,0, 2,2.2],10);
      muro_camera2_2.rotation.x = Math.PI/2;
	  muro_camera2_2.rotation.y = Math.PI/2;
      floor.add(muro_camera2_2);
      muro_camera2_2.position.set(5.5,3.2,0.3);
	  
	  var muro_camera2_3 = createPlane(2,2.7, [],10);
      muro_camera2_3.rotation.x = Math.PI/2;
      floor.add(muro_camera2_3);
      muro_camera2_3.position.set(5.5,5.3,0.3);
	  
	  var muro_camera2_4 = createPlane(3.9,2.7, [],10);
      muro_camera2_4.rotation.x = Math.PI/2;
	  muro_camera2_4.rotation.y = Math.PI/2;
      floor.add(muro_camera2_4);
      muro_camera2_4.position.set(7.5,1.4,0.3);
	  
	  var muro_camera2_5 = createPlane(1.8,2.7, [],10);
      muro_camera2_5.rotation.x = Math.PI/2;
	  muro_camera2_5.rotation.y = Math.PI/2;
      floor.add(muro_camera2_5);
      muro_camera2_5.position.set(4.3,1.4,0.3);
	  
	  var muro_camera2_6 = createPlane(3.2,2.7, [2.8,2.2, 2.8,1, 1.7,1, 1.7,2.2],10);
      muro_camera2_6.rotation.x = Math.PI/2;
      floor.add(muro_camera2_6);
      muro_camera2_6.position.set(4.3,1.4,0.3);
	
	  
	  var muro_sala_1 = createPlane(7.2,2.7, [1.3,2.2, 1.3, 0, 1.9,0, 1.9,2.2,      2.2,2.2, 2.2,0, 4.1,0, 4.1,2.2,	   5.8,2.2, 5.8,0, 6.8,0, 6.8,2.2 ],9);
      muro_sala_1.rotation.x = Math.PI/2;
	  muro_sala_1.rotation.y = Math.PI/2;
      floor.add(muro_sala_1);
      muro_sala_1.position.set(4.3,3.3,0.3);
	  
	  var muro_camera3_1 = createPlane(4,2.7, [],10);
      muro_camera3_1.rotation.x = Math.PI/2;
      floor.add(muro_camera3_1);
      muro_camera3_1.position.set(0.3,7.6,0.3);
	  
	  var muro_camera3_2 = createPlane(4,2.7, [3.35,0, 3.35,2.2, 0.65,2.2, 0.65,0],10);
      muro_camera3_2.rotation.x = Math.PI/2;
      floor.add(muro_camera3_2);
      muro_camera3_2.position.set(0.3,13.5,0.3);
	  
	  var muro_camera3_3 = createPlane(3,2.7, [],10);
      muro_camera3_3.rotation.x = Math.PI/2;
	  muro_camera3_3.rotation.y = Math.PI/2;
      floor.add(muro_camera3_3);
      muro_camera3_3.position.set(4.3,10.5,0.3);
	  
	  var muro_camera3_4 = createPlane(5.9,2.7, [],10);
      muro_camera3_4.rotation.x = Math.PI/2;
	  muro_camera3_4.rotation.y = Math.PI/2;
      floor.add(muro_camera3_4);
      muro_camera3_4.position.set(0.3,7.6,0.3);
	  
	  var muro_camera3_5 = createPlane(2.9,2.7, [1.5,2.2, 1.5,0, 2.5,0, 2.5,2.2],10);//porta
      muro_camera3_5.rotation.x = Math.PI/2;
	  muro_camera3_5.rotation.y = Math.PI/2;
      floor.add(muro_camera3_5);
      muro_camera3_5.position.set(4.2,7.6,0.3);
	  
	  var muro_camera3_6 = createPlane(0.1,2.7, [],10);
      muro_camera3_6.rotation.x = Math.PI/2;
      floor.add(muro_camera3_6);
      muro_camera3_6.position.set(4.2,10.5,0.3);
	  
	  
	  
	  var muro_sala_2 = createPlane(1.1,2.7, [],9);
      muro_sala_2.rotation.x = Math.PI/2;
      floor.add(muro_sala_2);
      muro_sala_2.position.set(4.3,10.5,0.3);
	  
	  var muro_bagno_primo_1 = createPlane(2,2.7, [1.5,1, 1.5,2.2, 0.7,2.2, 0.7,1 ],11);
      muro_bagno_primo_1.rotation.x = Math.PI/2;
      floor.add(muro_bagno_primo_1);
      muro_bagno_primo_1.position.set(5.5,10.5,0.3);
	  
	  var muro_bagno_primo_2 = createPlane(5,2.7, [1,0, 1.75,0, 1.75,2.2, 1,2.2],11);//porta
      muro_bagno_primo_2.rotation.x = Math.PI/2;
	  muro_bagno_primo_2.rotation.y = Math.PI/2;
      floor.add(muro_bagno_primo_2);
      muro_bagno_primo_2.position.set(5.5,5.5,0.3);
	  
	   var muro_bagno_primo_3 = createPlane(2.1,2.7, [],11);
      muro_bagno_primo_3.rotation.x = Math.PI/2;
      floor.add(muro_bagno_primo_3);
      muro_bagno_primo_3.position.set(5.4,5.5,0.3);
	  
	  var muro_bagno_primo_4 = createPlane(5.1,2.7, [],11);
      muro_bagno_primo_4.rotation.x = Math.PI/2;
	  muro_bagno_primo_4.rotation.y = Math.PI/2;
      floor.add(muro_bagno_primo_4);
      muro_bagno_primo_4.position.set(7.5,5.5,0.3);
	  
	 
	  
	  
	  var muro_sala_3 = createPlane(1.1,2.7, [],9);
      muro_sala_3.rotation.x = Math.PI/2;
      floor.add(muro_sala_3);
      muro_sala_3.position.set(4.3,3.4,0.3);
	  
	  var muro_sala_4 = createPlane(7.2,2.7, [1.3,2.2, 1.3, 0, 1.9,0, 1.9,2.2,     3.2,2.2, 3.2,0, 3.95,0, 3.95,2.2],9);
      muro_sala_4.rotation.x = Math.PI/2;
	  muro_sala_4.rotation.y = Math.PI/2;
      floor.add(muro_sala_4);
      muro_sala_4.position.set(5.4,3.3,0.3);
	  
      return floor;
	  
	  
}
function createMasterExternalWalls(floor){
	  var muro_ext_1 = createPlane(13.7,3, [],14);
      muro_ext_1.rotation.x = Math.PI/2;
	  muro_ext_1.rotation.y = Math.PI/2;
      floor.add(muro_ext_1);
      muro_ext_1.position.set(0,1.1,0);
	  
	  var muro_ext_2 = createPlane(15.9,3, [],14);
      muro_ext_2.rotation.x = Math.PI/2;
	  muro_ext_2.rotation.y = Math.PI/2;
      floor.add(muro_ext_2);
      muro_ext_2.position.set(7.8,1.1,0);
	  
	  var muro_ext_3 = createPlane(3.5,3, [],14);
      muro_ext_3.rotation.x = Math.PI/2;
	  //muro_ext_3.rotation.y = Math.PI/2;
      floor.add(muro_ext_3);
      muro_ext_3.position.set(4.3,17,0);
	  
	  var muro_ext_4 = createPlane(2.2,3, [],14);
      muro_ext_4.rotation.x = Math.PI/2;
	  muro_ext_4.rotation.y = Math.PI/2;
      floor.add(muro_ext_4);
      muro_ext_4.position.set(4.3,14.8,0);
	  
	  var muro_ext_5 = createPlane(4.3,3, [],14);
      muro_ext_5.rotation.x = Math.PI/2;
	  //muro_ext_5.rotation.y = Math.PI/2;
      floor.add(muro_ext_5);
      muro_ext_5.position.set(0,14.8,0);
	  
	  var muro_ext_6 = createPlane(7.8,3, [3,2.5, 3,1.3, 1.6,1.3, 1.6,2.5,       5.4,0.3, 5.4,2.5, 4.6,2.5, 4.6,0.3,    7.1,2.5, 7.1,1.3, 6,1.3, 6,2.5], 14);
      muro_ext_6.rotation.x = Math.PI/2;
	  //muro_ext_5.rotation.y = Math.PI/2;
      floor.add(muro_ext_6);
      muro_ext_6.position.set(0,1.1,0);
	
      
      return floor;
}
function createTerraExternalWalls(floor){
	  var muro_ext_1 = createPlane(12.7,3, [],14);
      muro_ext_1.rotation.x = Math.PI/2;
	  muro_ext_1.rotation.y = Math.PI/2;
      floor.add(muro_ext_1);
      muro_ext_1.position.set(0,1.1,0);
	  
	  var muro_ext_2 = createPlane(9.7,3, [],14);
      muro_ext_2.rotation.x = Math.PI/2;
	  muro_ext_2.rotation.y = Math.PI/2;
      floor.add(muro_ext_2);
      muro_ext_2.position.set(7.8,1.1,0);
	  
	  var muro_ext_3 = createPlane(3.2,3, [2.4,0.3, 2.4,2.5, 1.6,2.5, 1.6,0.3 ],14);
      muro_ext_3.rotation.x = Math.PI/2;
	  //muro_ext_3.rotation.y = Math.PI/2;
      floor.add(muro_ext_3);
      muro_ext_3.position.set(4.6,10.8,0);
	  
	  var muro_ext_4 = createPlane(3,3, [],10,2,2);
      muro_ext_4.rotation.x = Math.PI/2;
	  muro_ext_4.rotation.y = Math.PI/2;
      floor.add(muro_ext_4);
      muro_ext_4.position.set(4.6,10.8,0);
	  
	  var muro_ext_5 = createPlane(4.6,3, [3.65,0.3, 3.65,2.5, 0.95,2.5, 0.95,0.3],14);
      muro_ext_5.rotation.x = Math.PI/2;
	  //muro_ext_5.rotation.y = Math.PI/2;
      floor.add(muro_ext_5);
      muro_ext_5.position.set(0,13.8,0);
	  
	  var muro_ext_6 = createPlane(7.8,3, [0.97,2.5, 0.97,0.3, 3.65,0.3, 3.65,2.5,        7.1,2.5, 7.1,1.3, 6,1.3, 6,2.5], 14);
      muro_ext_6.rotation.x = Math.PI/2;
	  //muro_ext_5.rotation.y = Math.PI/2;
      floor.add(muro_ext_6);
      muro_ext_6.position.set(0,1.1,0);
	  
	  
	  
	  //balcone
	  var muro_ext_7 = createPlane(7.8,1.3, [],14);
      muro_ext_7.rotation.x = Math.PI/2;
	  //muro_ext_7.rotation.y = Math.PI/2;
      floor.add(muro_ext_7);
      muro_ext_7.position.set(0,0,0);
	  
	  var muro_ext_8 = createPlane(1.1,1.3, [],14);
      muro_ext_8.rotation.x = Math.PI/2;
	  muro_ext_8.rotation.y = Math.PI/2;
      floor.add(muro_ext_8);
      muro_ext_8.position.set(0,0,0);
	  
	  var muro_ext_9 = createPlane(1.1,1.3, [],14);
      muro_ext_9.rotation.x = Math.PI/2;
	  muro_ext_9.rotation.y = Math.PI/2;
      floor.add(muro_ext_9);
	  muro_ext_9.position.set(7.8,0,0);
	  
	  var muro_ext_10 = createPlane(7.2,1, [],14);
      muro_ext_10.rotation.x = Math.PI/2;
	  //muro_ext_7.rotation.y = Math.PI/2;
      floor.add(muro_ext_10);
      muro_ext_10.position.set(0.3,.1,0.3);
	  
	  var muro_ext_11 = createPlane(1,1, [],14);
      muro_ext_11.rotation.x = Math.PI/2;
	  muro_ext_11.rotation.y = Math.PI/2;
      floor.add(muro_ext_11);
      muro_ext_11.position.set(0.3,0.1,0.3);
	  
	  var muro_ext_12 = createPlane(1,1, [],14);
      muro_ext_12.rotation.x = Math.PI/2;
	  muro_ext_12.rotation.y = Math.PI/2;
      floor.add(muro_ext_12);
      muro_ext_12.position.set(7.5,0.1,0.3);
	  
	  //pezetti
	  var muro_ext_13 = createPlane(7.8,0.3, [],14);
      muro_ext_13.rotation.x = Math.PI/2;
	  //muro_ext_13.rotation.y = Math.PI/2;
      floor.add(muro_ext_13);
      muro_ext_13.position.set(0,17.1,0);
	  
	  var muro_ext_14 = createPlane(6.4,0.3, [],14);
      muro_ext_14.rotation.x = Math.PI/2;
	  muro_ext_14.rotation.y = Math.PI/2;
      floor.add(muro_ext_14);
      muro_ext_14.position.set(7.8,10.7,0);
	  
	  var muro_ext_15 = createPlane(3.3,0.3, [],14);
      muro_ext_15.rotation.x = Math.PI/2;
	  muro_ext_15.rotation.y = Math.PI/2;
      floor.add(muro_ext_15);
      muro_ext_15.position.set(0,13.8,0);
	  
      return floor;
}

function createPrimoExternalWalls(floor){
	  var muro_ext_1 = createPlane(12.7,3, [],14);
      muro_ext_1.rotation.x = Math.PI/2;
	  muro_ext_1.rotation.y = Math.PI/2;
      floor.add(muro_ext_1);
      muro_ext_1.position.set(0,1.1,0);
	  
	  var muro_ext_2 = createPlane(9.7,3, [],14);
      muro_ext_2.rotation.x = Math.PI/2;
	  muro_ext_2.rotation.y = Math.PI/2;
      floor.add(muro_ext_2);
      muro_ext_2.position.set(7.8,1.1,0);
	  
	  var muro_ext_3 = createPlane(3.2,3, [2.4,1.3, 2.4,2.5, 1.6,2.5, 1.6,1.3 ],14);
      muro_ext_3.rotation.x = Math.PI/2;
	  //muro_ext_3.rotation.y = Math.PI/2;
      floor.add(muro_ext_3);
      muro_ext_3.position.set(4.6,10.8,0);
	  
	  var muro_ext_4 = createPlane(3,3, [],14);
      muro_ext_4.rotation.x = Math.PI/2;
	  muro_ext_4.rotation.y = Math.PI/2;
      floor.add(muro_ext_4);
      muro_ext_4.position.set(4.6,10.8,0);
	  
	  var muro_ext_5 = createPlane(4.6,3, [3.65,0.3, 3.65,2.5, 0.95,2.5, 0.95,0.3],14);
      muro_ext_5.rotation.x = Math.PI/2;
	  //muro_ext_5.rotation.y = Math.PI/2;
      floor.add(muro_ext_5);
      muro_ext_5.position.set(0,13.8,0);
	  
	  var muro_ext_6 = createPlane(7.8,3, [0.97,2.5, 0.97,1.3, 2.35,1.3, 2.35,2.5,        7.1,2.5, 7.1,1.3, 6,1.3, 6,2.5], 14);
      muro_ext_6.rotation.x = Math.PI/2;
	  //muro_ext_5.rotation.y = Math.PI/2;
      floor.add(muro_ext_6);
      muro_ext_6.position.set(0,1.1,0);
	  
	  //balcone
	  var muro_ext_7 = createPlane(4.6,1.3, [],14);
      muro_ext_7.rotation.x = Math.PI/2;
	  //muro_ext_7.rotation.y = Math.PI/2;
      floor.add(muro_ext_7);
      muro_ext_7.position.set(0,14.9,0);
	  
	  var muro_ext_8 = createPlane(1.1,1.3, [],14);
      muro_ext_8.rotation.x = Math.PI/2;
	  muro_ext_8.rotation.y = Math.PI/2;
      floor.add(muro_ext_8);
      muro_ext_8.position.set(0,13.8,0);
	  
	  var muro_ext_9 = createPlane(1.1,1.3, [],14);
      muro_ext_9.rotation.x = Math.PI/2;
	  muro_ext_9.rotation.y = Math.PI/2;
      floor.add(muro_ext_9);
	  muro_ext_9.position.set(4.6,13.8,0);
	  
	  var muro_ext_10 = createPlane(4,1, [],14);
      muro_ext_10.rotation.x = Math.PI/2;
	  //muro_ext_7.rotation.y = Math.PI/2;
      floor.add(muro_ext_10);
      muro_ext_10.position.set(0.3,14.8,0.3);
	  
	  var muro_ext_11 = createPlane(1,1, [],14);
      muro_ext_11.rotation.x = Math.PI/2;
	  muro_ext_11.rotation.y = Math.PI/2;
      floor.add(muro_ext_11);
      muro_ext_11.position.set(0.3,13.8,0.3);
	  
	  var muro_ext_12 = createPlane(1,1, [],14);
      muro_ext_12.rotation.x = Math.PI/2;
	  muro_ext_12.rotation.y = Math.PI/2;
      floor.add(muro_ext_12);
      muro_ext_12.position.set(4.3,13.8,0.3);
      return floor;
}