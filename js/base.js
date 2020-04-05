var camera, controls, scene, renderer;
			var pivotPoint;
			var mouseX = 0, mouseY = 0;
				var windowHalfX = window.innerWidth / 2;
				var windowHalfY = window.innerHeight / 2;
			
				init();
				animate();

				function init() {
					scene = new THREE.Scene();
					scene.background = new THREE.Color( 0xfffafa );
					scene.fog = new THREE.FogExp2( 0xfbfcfc, 0.0022 );

					renderer = new THREE.WebGLRenderer( { antialias: true } );
					renderer.setPixelRatio( window.devicePixelRatio );
					renderer.setSize( window.innerWidth, window.innerHeight );
					document.body.appendChild( renderer.domElement );

					camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 10000 );
					

					camera.position.set( 0, 10, 40 );
					controls = new THREE.OrbitControls( camera, renderer.domElement );
					controls.enablePan = false;
					controls.enableDamping = true; 
					controls.dampingFactor = 0.05;
					controls.screenSpacePanning = false;
					controls.minDistance = 160;
					controls.maxDistance = 170;
					controls.maxPolarAngle = 1.294;
					controls.minPolarAngle = 1.107;
					controls.maxAzimuthAngle = 0.2;
					controls.minAzimuthAngle = -0.2;
					pivotPoint = new THREE.Object3D();
					pivotPoint.position.set(0,0,0);
					scene.add(pivotPoint);

					var lader = new THREE.GLTFLoader( );
			        lader.load('models/ptyng/scene.gltf', 
		function ( gltf ) {

			gltf.scene.position.set(0, 0, 0);
			gltf.scene.scale.set(1, 1, 1);
			
			scene.add( gltf.scene );
            gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset;
			},
		// called while loading is progressing
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened' );

		}
			);

	    var lader = new THREE.GLTFLoader( );
			lader.load('models/tree/scene.gltf', 
		function ( gltf ) {


			gltf.scene.position.set(-100, 0, -200);
			scene.add( gltf.scene );

			gltf.animations; // Array<THREE.AnimationClip>
			gltf.scene; // THREE.Group
			gltf.scenes; // Array<THREE.Group>
			gltf.cameras; // Array<THREE.Camera>
			gltf.asset;
			 // Object

		},
		// called while loading is progressing
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened' );

		}
			);
		var loader = new THREE.OBJLoader();
	    loader.load('models/SnowTerrain/SnowTerrain.obj',
		function ( object ) {
			object.position.set(0, -3, 0);
			object.scale.set(10, 10, 10);
			scene.add( object );
			},
		// called when loading is in progresses
		function ( xhr ) {

			console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

		},
		// called when loading has errors
		function ( error ) {

			console.log( 'An error happened' );

		}
	);
    var loader = new THREE.OBJLoader();

	                var orbitGroup = new THREE.Object3D();
	                scene.add(orbitGroup); 

					var texture = new THREE.TextureLoader().load( 'textures/email/contact.jpeg' );

					var geometry = new THREE.BoxBufferGeometry( 13, 13, 13 );
					var material = new THREE.MeshBasicMaterial( { map: texture } );

					mesh = new THREE.Mesh( geometry, material );
					mesh.position.x=40;
					mesh.position.y=23;
					mesh.position.z=0;
					mesh.UserData = {URL: 'contact.html' };
					DDDINK.addURL(mesh, "./contact.html");
					scene.add( mesh );
					pivotPoint.add(mesh);
					DDDINK.domEvent.setGlobalLinkConfig('_self', 'ON', 'ON', 0xffffff);
					DDDINK.readRendererObj( renderer, scene, camera );
					const isHit = new DDDINK.hitEvent.JudgeXYZ(camera);
	                isHit.createHitMargin(25,25,25,25,25,25);
	                console.log(isHit.hitMargin);

					DDDINK.domEvent.addFnc('Fn','A');
					console.log(mesh.userData.linkConfig.isShineOnMouse);
					console.log(DDDINK.domEvent.isShineOnMouseCanvas);
	                console.log(DDDINK.domEvent.isShineOnTouchCanvas);


	                var texture = new THREE.TextureLoader().load( 'textures/email/event.jpeg' );

					var geometry = new THREE.BoxBufferGeometry( 13, 13, 13 );
					var material = new THREE.MeshBasicMaterial( { map: texture } );

					mesh = new THREE.Mesh( geometry, material );
					mesh.position.x= - 40;
					mesh.position.y=23;
					mesh.position.z=0;
					mesh.UserData = {URL: 'events.html' };
					DDDINK.addURL(mesh, "./events.html");
					scene.add( mesh );
					pivotPoint.add(mesh);
					DDDINK.domEvent.setGlobalLinkConfig('_self', 'ON', 'ON', 0xffffff);
					DDDINK.readRendererObj( renderer, scene, camera );
					//const isHit = new DDDINK.hitEvent.JudgeXYZ(camera);
	                isHit.createHitMargin(25,25,25,25,25,25);
	                console.log(isHit.hitMargin);

					DDDINK.domEvent.addFnc('Fn','A');
					console.log(mesh.userData.linkConfig.isShineOnMouse);
					console.log(DDDINK.domEvent.isShineOnMouseCanvas);
	                console.log(DDDINK.domEvent.isShineOnTouchCanvas);

	                var texture = new THREE.TextureLoader().load( 'textures/email/about.jpeg' );

					var geometry = new THREE.BoxBufferGeometry( 13, 13, 13 );
					var material = new THREE.MeshBasicMaterial( { map: texture } );

					mesh = new THREE.Mesh( geometry, material );
					mesh.position.x=0;
					mesh.position.y=23;
					mesh.position.z=40;
					mesh.UserData = {URL: 'about.html' };
					DDDINK.addURL(mesh, "./about.html");
					scene.add( mesh );
					pivotPoint.add(mesh);
					DDDINK.domEvent.setGlobalLinkConfig('_self', 'ON', 'ON', 0xffffff);
					DDDINK.readRendererObj( renderer, scene, camera );
					//const isHit = new DDDINK.hitEvent.JudgeXYZ(camera);
	                isHit.createHitMargin(25,25,25,25,25,25);
	                console.log(isHit.hitMargin);

					DDDINK.domEvent.addFnc('Fn','A');
					console.log(mesh.userData.linkConfig.isShineOnMouse);
					console.log(DDDINK.domEvent.isShineOnMouseCanvas);
	                console.log(DDDINK.domEvent.isShineOnTouchCanvas);

	                var texture = new THREE.TextureLoader().load( 'textures/email/blog.jpeg' );

					var geometry = new THREE.BoxBufferGeometry( 13, 13, 13 );
					var material = new THREE.MeshBasicMaterial( { map: texture } );

					mesh = new THREE.Mesh( geometry, material );
					mesh.position.x=0;
					mesh.position.y=23;
					mesh.position.z=- 40;
					mesh.UserData = {URL: 'blog.html' };
					DDDINK.addURL(mesh, "./blog.html");
					scene.add( mesh );
					pivotPoint.add(mesh);
					DDDINK.domEvent.setGlobalLinkConfig('_self', 'ON', 'ON', 0xffffff);
					DDDINK.readRendererObj( renderer, scene, camera );
					//const isHit = new DDDINK.hitEvent.JudgeXYZ(camera);
	                isHit.createHitMargin(25,25,25,25,25,25);
	                console.log(isHit.hitMargin);

					DDDINK.domEvent.addFnc('Fn','A');
					console.log(mesh.userData.linkConfig.isShineOnMouse);
					console.log(DDDINK.domEvent.isShineOnMouseCanvas);
	                console.log(DDDINK.domEvent.isShineOnTouchCanvas);

	  
					var geometry = new THREE.CylinderBufferGeometry( 0, 300, 370, 13, 1 );
					var material = new THREE.MeshPhongMaterial( { color: 0x1d252b, flatShading: true } );

						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = 0;
						mesh.position.y = 150;
						mesh.position.z = -700;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = 330;
						mesh.position.y = 150;
						mesh.position.z = -700;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = -330;
						mesh.position.y = 150;
						mesh.position.z = -700;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = 660;
						mesh.position.y = 150;
						mesh.position.z = -700;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = -660;
						mesh.position.y = 150;
						mesh.position.z = -700;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = 990;
						mesh.position.y = 150;
						mesh.position.z = -700;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

						var mesh = new THREE.Mesh( geometry, material );
						mesh.position.x = -990;
						mesh.position.y = 150;
						mesh.position.z = -700;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

					var geometry = new THREE.SphereBufferGeometry( 1, 5, 5);
					var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );

					for ( var i = 0; i < 700; i ++ ) {

						var mesh = new THREE.Mesh( geometry, material );
						
						mesh.position.x = Math.random() * 600 - 300;
						mesh.position.y = 6;
						mesh.position.z = Math.random() * 600 - 300;
						if(mesh.position.x<=30 && mesh.position.x>=-30 && mesh.position.z<=30 && mesh.position.z>=-30 )
							continue;
						if(mesh.position.z>=120)
							continue;
						mesh.updateMatrix();
						mesh.matrixAutoUpdate = false;
						scene.add( mesh );

					}

					var loader = new THREE.TextureLoader();
					particleCount = 1000;
	    var pMaterial = new THREE.PointCloudMaterial({
	      color: 0xFFFaFa,
	      size: 4,
	      map: loader.load(
	         "textures/snow-small.png"
	       ),
	       blending: THREE.AdditiveBlending,
	       depthTest: false,
	       transparent: true
	    });

	    particles = new THREE.Geometry;
	    for (var i = 0; i < particleCount; i++) {
	        var pX = Math.random()*1000 - 500,
	            pY = Math.random()*1000 - 500,
	            pZ = Math.random()*600 - 300,
	            
	            particle = new THREE.Vector3(pX, pY, pZ);
	        particle.velocity = {};
	        particle.velocity.y = 0;
	        particles.vertices.push(particle);
	    }
	    particleSystem = new THREE.PointCloud(particles, pMaterial);
	    scene.add(particleSystem);


					// lights

					var light = new THREE.DirectionalLight( 0xffffff );
					light.position.set( 1, 1,1 );
					scene.add( light );

					var light = new THREE.DirectionalLight( 0xffffff );
					light.position.set( - 1, - 1, - 1 );
					scene.add( light );

					
					window.addEventListener( 'resize', onWindowResize, false );

					
					var loader = new THREE.TextureLoader().load('textures/Backyard/iceg.jpg');
					var geometry = new THREE.PlaneBufferGeometry( 2000,2000);
					var material = new THREE.MeshBasicMaterial( { map: loader } );

					groundMesh = new THREE.Mesh( geometry, material );


					groundMesh.rotation.x = - Math.PI / 2;
					groundMesh.receiveShadow = true;
					scene.add( groundMesh );
					

					document.addEventListener( 'mousemove', onDocumentMouseMove, false );
					document.addEventListener( 'touchstart', onDocumentTouchStart, false );
					document.addEventListener( 'touchmove', onDocumentTouchMove, false );


					window.addEventListener( 'resize', onWindowResize, false );

				}
				


    function simulateRain() {
	    var pCount = particleCount;
	    while (pCount--) {
	    var particle = particles.vertices[pCount];
	    if (particle.y < - 200) {
	      particle.y = 200;
	      particle.velocity.y = 0;
	    }
	    particle.velocity.y -= Math.random() * 0.05;
	    particle.y += particle.velocity.y;
	    }
	    particles.verticesNeedUpdate = true;
	};

				function onWindowResize() {

					windowHalfX = window.innerWidth / 2;
					windowHalfY = window.innerHeight / 2;

					camera.aspect = window.innerWidth / window.innerHeight;
					camera.updateProjectionMatrix();

					renderer.setSize( window.innerWidth, window.innerHeight );

				}

				function onDocumentMouseMove( event ) {

					mouseX = event.clientX - windowHalfX;
					mouseY = event.clientY - windowHalfY;
				
			    }

				function onDocumentTouchStart( event ) {

					if ( event.touches.length > 1 ) {

						event.preventDefault();

						mouseX = event.touches[ 0 ].pageX - windowHalfX;
						mouseY = event.touches[ 0 ].pageY - windowHalfY;

					}

				}

				function onDocumentTouchMove( event ) {

					if ( event.touches.length == 1 ) {

						event.preventDefault();

						mouseX = event.touches[ 0 ].pageX - windowHalfX;
						mouseY = event.touches[ 0 ].pageY - windowHalfY;

					}

				}


				function animate() {

					requestAnimationFrame( animate );
	                particleSystem.rotation.y += 0.01;
	                simulateRain();
					controls.update(); 
					render();
					}

				function render() {

					camera.position.x += ( mouseX - camera.position.x ) * 0.008;
					camera.position.y += ( - mouseY + 200 - camera.position.y ) * 0.008;

					//camera.lookAt( scene.position );
					pivotPoint.rotation.y += 0.01;
					renderer.render( scene, camera );

				}