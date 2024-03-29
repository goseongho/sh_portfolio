// // var camera, scene, renderer;

// // var texture_placeholder,
// // isUserInteracting = false,
// // onMouseDownMouseX = 0, onMouseDownMouseY = 0,
// // lon = 90, onMouseDownLon = 0,
// // lat = 0, onMouseDownLat = 0,
// // phi = 0, theta = 0,
// // target = new THREE.Vector3();

// // init();
// // animate();

// // function init() {

// // 	var container, mesh;

// // 	container = document.getElementById( 'container' );

// // 	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

// // 	scene = new THREE.Scene();

// // 	texture_placeholder = document.createElement( 'canvas' );
// // 	texture_placeholder.width = 128;
// // 	texture_placeholder.height = 128;

// // 	var context = texture_placeholder.getContext( '2d' );
// // 	context.fillStyle = 'rgb( 200, 200, 200 )';
// // 	context.fillRect( 0, 0, texture_placeholder.width, texture_placeholder.height );

// // 	var materials = [

// // 		loadTexture( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space4.jpg' ), // right
// // 		loadTexture( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space2.jpg' ), // left
// // 		loadTexture( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space1.jpg' ), // top
// // 		loadTexture( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space6.jpg' ), // bottom
// // 		loadTexture( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space3.jpg' ), // back
// // 		loadTexture( 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1037366/space5.jpg' ) // front

// // 	];

// // 	mesh = new THREE.Mesh( new THREE.BoxGeometry( 300, 300, 300, 7, 7, 7 ), new THREE.MultiMaterial( materials ) );
// // 	mesh.scale.x = - 1;
// // 	scene.add( mesh );

// // 	for ( var i = 0, l = mesh.geometry.vertices.length; i < l; i ++ ) {

// // 		var vertex = mesh.geometry.vertices[ i ];

// // 		vertex.normalize();
// // 		vertex.multiplyScalar( 550 );

// // 	}

// // 	renderer = new THREE.CanvasRenderer();
// // 	renderer.setPixelRatio( window.devicePixelRatio );
// // 	renderer.setSize( window.innerWidth, window.innerHeight );
// // 	container.appendChild( renderer.domElement );

// // 	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
// // 	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
// // 	document.addEventListener( 'mouseup', onDocumentMouseUp, false );
// // 	//document.addEventListener( 'wheel', onDocumentMouseWheel, false );

// // 	document.addEventListener( 'touchstart', onDocumentTouchStart, false );
// // 	document.addEventListener( 'touchmove', onDocumentTouchMove, false );

// // 	//

// // 	window.addEventListener( 'resize', onWindowResize, false );

// // }

// // function onWindowResize() {

// // 	camera.aspect = window.innerWidth / window.innerHeight;
// // 	camera.updateProjectionMatrix();

// // 	renderer.setSize( window.innerWidth, window.innerHeight );

// // }

// // function loadTexture( path ) {

// // 	var texture = new THREE.Texture( texture_placeholder );
// // 	var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0.5 } );

// // 	var image = new Image();
// // 	image.onload = function () {

// // 		texture.image = this;
// // 		texture.needsUpdate = true;

// // 	};
// // 	image.src = path;

// // 	return material;

// // }

// // function onDocumentMouseDown( event ) {

// // 	event.preventDefault();

// // 	isUserInteracting = true;

// // 	onPointerDownPointerX = event.clientX;
// // 	onPointerDownPointerY = event.clientY;

// // 	onPointerDownLon = lon;
// // 	onPointerDownLat = lat;

// // }

// // function onDocumentMouseMove( event ) {

// // 	if ( isUserInteracting === true ) {

// // 		lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
// // 		lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

// // 	}
// // }

// // function onDocumentMouseUp( event ) {

// // 	isUserInteracting = false;

// // }

// // //	function onDocumentMouseWheel( event ) {

// // //	camera.fov += event.deltaY * 0.05;
// // //	camera.updateProjectionMatrix();

// // //	}

// // function onDocumentTouchStart( event ) {

// // 	if ( event.touches.length == 1 ) {

// // 		event.preventDefault();

// // 		onPointerDownPointerX = event.touches[ 0 ].pageX;
// // 		onPointerDownPointerY = event.touches[ 0 ].pageY;

// // 		onPointerDownLon = lon;
// // 		onPointerDownLat = lat;

// // 	}

// // }

// // function onDocumentTouchMove( event ) {

// // 	if ( event.touches.length == 1 ) {

// // 		event.preventDefault();

// // 		lon = ( onPointerDownPointerX - event.touches[0].pageX ) * 0.1 + onPointerDownLon;
// // 		lat = ( event.touches[0].pageY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;

// // 	}

// // }

// // function animate() {

// // 	requestAnimationFrame( animate );
// // 	update();

// // }

// // function update() {

// // 	if ( isUserInteracting === false ) {

// // 		lon += 0.1;

// // 	}

// // 	lat = Math.max( - 85, Math.min( 85, lat ) );
// // 	phi = THREE.Math.degToRad( 90 - lat );
// // 	theta = THREE.Math.degToRad( lon );

// // 	target.x = 500 * Math.sin( phi ) * Math.cos( theta );
// // 	target.y = 500 * Math.cos( phi );
// // 	target.z = 500 * Math.sin( phi ) * Math.sin( theta );

// // 	camera.position.copy( target ).negate();
// // 	camera.lookAt( target );

// // 	renderer.render( scene, camera );

// // }



// let scene,
// 	camera,
// 	renderer,
// 	cloudParticles = [],
// 	rainParticles = [],
// 	flash,
// 	rain,
// 	rainGeo,
// 	rainCount = 15000;
// function init() {
// 	scene = new THREE.Scene();
// 	camera = new THREE.PerspectiveCamera(
// 		60,
// 		window.innerWidth / window.innerHeight,
// 		1,
// 		1000
// 	);
// 	camera.position.z = 1;
// 	camera.rotation.x = 1.16;
// 	camera.rotation.y = -0.12;
// 	camera.rotation.z = 0.27;

// 	ambient = new THREE.AmbientLight(0x555555);
// 	scene.add(ambient);

// 	directionalLight = new THREE.DirectionalLight(0xffeedd);
// 	directionalLight.position.set(0, 0, 1);
// 	scene.add(directionalLight);

// 	flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
// 	flash.position.set(200, 300, 100);
// 	scene.add(flash);

// 	renderer = new THREE.WebGLRenderer();

// 	scene.fog = new THREE.FogExp2(0x11111f, 0.002);
// 	renderer.setClearColor(scene.fog.color);

// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	document.body.appendChild(renderer.domElement);

// 	let positions = [];
// 	let sizes = [];
// 	rainGeo = new THREE.BufferGeometry();
// 	for (let i = 0; i < rainCount; i++) {
// 		rainDrop = new THREE.Vector3(
// 			Math.random() * 400 - 200,
// 			Math.random() * 500 - 250,
// 			Math.random() * 400 - 200
// 		);
// 		positions.push(Math.random() * 400 - 200);
// 		positions.push(Math.random() * 500 - 250);
// 		positions.push(Math.random() * 400 - 200);
// 		sizes.push(30);
// 	}
// 	rainGeo.setAttribute(
// 		"position",
// 		new THREE.BufferAttribute(new Float32Array(positions), 3)
// 	);
// 	rainGeo.setAttribute(
// 		"size",
// 		new THREE.BufferAttribute(new Float32Array(sizes), 1)
// 	);
// 	rainMaterial = new THREE.PointsMaterial({
// 		color: 0xaaaaaa,
// 		size: 0.1,
// 		transparent: true
// 	});
// 	rain = new THREE.Points(rainGeo, rainMaterial);
// 	scene.add(rain);

// 	let loader = new THREE.TextureLoader();
// 	loader.load(
// 		"https://static.vecteezy.com/system/resources/previews/010/884/548/original/dense-fluffy-puffs-of-white-smoke-and-fog-on-transparent-background-abstract-smoke-clouds-movement-blurred-out-of-focus-smoking-blows-from-machine-dry-ice-fly-fluttering-in-air-effect-texture-png.png",
// 		function (texture) {
// 			cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
// 			cloudMaterial = new THREE.MeshLambertMaterial({
// 				map: texture,
// 				transparent: true
// 			});

// 			for (let p = 0; p < 25; p++) {
// 				let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
// 				cloud.position.set(
// 					Math.random() * 800 - 400,
// 					500,
// 					Math.random() * 500 - 450
// 				);
// 				cloud.rotation.x = 1.16;
// 				cloud.rotation.y = -0.12;
// 				cloud.rotation.z = Math.random() * 360;
// 				cloud.material.opacity = 0.6;
// 				cloudParticles.push(cloud);
// 				scene.add(cloud);
// 			}
// 			animate();
// 			window.addEventListener("resize", onWindowResize);
// 		}
// 	);
// }
// function animate() {
// 	cloudParticles.forEach((p) => {
// 		p.rotation.z -= 0.002;
// 	});
// 	rainGeo.attributes.size.array.forEach((r, i) => {
// 		r += 0.3;
// 	});
// 	const time = Date.now() * 0.005;

// 	rainGeo.verticesNeedUpdate = true;

// 	rain.position.z -= 0.222;
// 	if (rain.position.z < -200) {
// 		rain.position.z = 0;
// 	}

// 	if (Math.random() > 0.93 || flash.power > 100) {
// 		if (flash.power < 100)
// 			flash.position.set(Math.random() * 400, 300 + Math.random() * 200, 100);
// 		flash.power = 50 + Math.random() * 500;
// 	}
// 	renderer.render(scene, camera);
// 	requestAnimationFrame(animate);
// }

// init();

// function onWindowResize() {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();

// 	renderer.setSize(window.innerWidth, window.innerHeight);
// }