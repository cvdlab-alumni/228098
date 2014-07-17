
	  
	  
	  var mesh;
      createDirectionalLight();
	  
	  var base = createPlane(500,500, [],4);
      scene.add(base);	  
      base.position.set(-250,0,-250);
	  base.rotation.x=Math.PI/2;
	  
      var master = new THREE.Object3D();

      var loader = new THREE.OBJLoader();
      loader.load('models/master.obj', function (obj) {

        

        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0xEFEFEF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
          new THREE.MeshBasicMaterial({wireframe: false, overdraw: false, color: 0xffffff, side: THREE.DoubleSide})
          ];

        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
          
        master.add(mesh);
      });

      master = createMasterDoor(master);

      master = createMasterWindows(master);

      master = createMasterFloors(master);

      master = createMasterInternalWall(master);

      master = createMasterExternalWalls(master);
	  
	  master = createMasterLight(master);

		
      master.position.set(-44,0,85);
      master.scale.set(10,10,10);
      master.rotation.x=-Math.PI/2;
      scene.add(master);
	  
	 
	   
	  var terra = new THREE.Object3D();

      var loader = new THREE.OBJLoader();
      loader.load('models/terra.obj', function (obj) {

        

        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0xEFEFEF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
          new THREE.MeshBasicMaterial({wireframe: false, overdraw: false, color: 0xffffff, side: THREE.DoubleSide})
          ];

        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
          
        terra.add(mesh);
      });

      terra = createTerraDoor(terra);

      terra = createTerraWindows(terra);

      terra = createTerraFloors(terra);

      terra = createTerraInternalWalls(terra);

      terra = createTerraExternalWalls(terra);

	  terra = createTerraLight(terra);

      terra.position.set(-44,30,85);
      terra.scale.set(10,10,10);
      terra.rotation.x=-Math.PI/2;
      scene.add(terra);
	  
	  
	  var primo = new THREE.Object3D();

      var loader = new THREE.OBJLoader();
      loader.load('models/primo.obj', function (obj) {

       

        var multiMaterial = [
          new THREE.MeshLambertMaterial({color: 0xEFEFEF, side: THREE.DoubleSide, shading: THREE.FlatShading}),
          new THREE.MeshBasicMaterial({wireframe: false, overdraw: false, color: 0xffffff, side: THREE.DoubleSide})
          ];

        mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
          
        primo.add(mesh);
      });

      primo = createPrimoDoor(primo);

      primo = createPrimoWindows(primo);

      primo = createPrimoFloors(primo);

      primo = createPrimoInternalWalls(primo);

      primo = createPrimoExternalWalls(primo);

	  primo = createPrimoLight(primo);


      primo.position.set(-44,60,85);
      primo.scale.set(10,10,10);
      primo.rotation.x=-Math.PI/2;
      scene.add(primo);
	  
	 