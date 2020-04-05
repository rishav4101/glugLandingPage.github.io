$("#menu").on("mouseenter",function(){
  
  $("#menu").addClass('hovered');
  
  
})

$("#menu").on("mouseleave",function(){
  
  $("#menu").removeClass('hovered');
  
  
})
 
		function App() {
  const conf = {
    el: 'canvas',
    fov: 50,
    cameraZ: 500,
    background: 0xffffff,
  };

  let renderer, scene, camera, cameraCtrl;
  let width, height;
  let planet;

  const { randFloat: rnd, randInt: rndInt } = THREE.Math;
  const { PI } = Math;

  init();

  function init() {
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el), antialias: true, alpha: true });
    camera = new THREE.PerspectiveCamera(conf.fov);
    camera.position.set(0, conf.cameraZ, conf.cameraZ);
    cameraCtrl = new THREE.OrbitControls(camera, renderer.domElement);
    cameraCtrl.enableDamping = true;
    cameraCtrl.dampingFactor = 0.2;
    cameraCtrl.autoRotate = true;
    cameraCtrl.autoRotateSpeed = 0.2;
    cameraCtrl.rotateSpeed = 0.2;
    cameraCtrl.enableZoom = false;

    updateSize();
    window.addEventListener('resize', updateSize, false);

    initScene();
    animate();
  }

  function initScene() {
    scene = new THREE.Scene();
    scene.add(new THREE.AmbientLight(0xcccccc));

    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(0, 0, 500);
    scene.add(pointLight);
    const pointLigh = new THREE.PointLight(0xffffff);
    pointLigh.position.set(0, 0, - 500);
    scene.add(pointLigh);
    planet = new THREE.Object3D();
    planet.scale.set(0.1, 0.1, 0.1);
    scene.add(planet);

    let material  = new THREE.MeshStandardMaterial({ color: 0xbababa });
    const sphereG = new THREE.SphereBufferGeometry(86, 32, 32);
    const sphere = new THREE.Mesh(sphereG, material);
    planet.add(sphere);

    const geometries = [];
    const loader = new THREE.FBXLoader();
    loader.load('https://www.iutbayonne.univ-pau.fr/~klevron/codepen/crazy-planet/buildings.fbx', object => {
      object.traverse(child => {
        if (child.isMesh) {
          child.geometry.scale(0.15, 0.3, 0.15);
          child.geometry.rotateX(-PI/2);
          geometries.push(child.geometry);
        }
      });

      const points = getFibonacciSpherePoints(200, 80);
      let p, mesh;
      for (let i=0;i<points.length;i++) {
        p = points[i];
        material  = new THREE.MeshStandardMaterial({ color: 0xbababa });
        mesh = new THREE.Mesh(geometries[rndInt(0, geometries.length-1)], material);
        mesh.position.set(p.x, p.y, p.z);
        mesh.lookAt(0, 0, 0);
        mesh.scale.z = 0.01;
        mesh.building = true;
        mesh.tween = TweenMax.to(mesh.scale, 2, { z: rnd(1, 1.5), ease:  Elastic.easeOut.config(1, 0.2), delay: rnd(0, 4)});
        planet.add(mesh);
      }
      TweenMax.to(planet.scale, 3, { x: 1, y:1, z:1, ease: Power1.easeOut });

      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();
      renderer.domElement.addEventListener('mousemove', e => {
        mouse.x = (e.clientX / width) * 2 - 1;
        mouse.y = - (e.clientY / height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(planet.children, false);
        if (intersects.length>0 && intersects[0].object.building) {
          const mesh = intersects[0].object;
          if (mesh.tween && mesh.tween.isActive()) return;
          mesh.material.color.setHex(0x0);
          mesh.tween = TweenMax.to(mesh.scale, 0.3, { z: 0.01, ease: Power2.easeOut, onComplete: () => {
            mesh.material.color.setHex(0xbababa);
            mesh.geometry.dispose();
            mesh.geometry = geometries[rndInt(0, geometries.length - 1)];
            mesh.tween = TweenMax.to(mesh.scale, 2, { z: rnd(1, 1.5), ease: Elastic.easeOut.config(1, 0.2) });
          }});
        }
      })
    });
  }

  function animate() {
    requestAnimationFrame(animate);

    // planet.rotation.y-= 0.002;

    if (cameraCtrl) cameraCtrl.update();
    renderer.render(scene, camera);
  }

  function updateSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function getFibonacciSpherePoints(samples, radius, randomize) {
  samples = samples || 1;
  radius = radius || 1;
  randomize = randomize || true;
  let random = 1;
  if (randomize) {
    random = Math.random() * samples;
  }
  let points = []
  let offset = 2 / samples
  let increment = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < samples; i++) {
    let y = ((i * offset) - 1) + (offset / 2);
    let distance = Math.sqrt(1 - Math.pow(y, 2));
    let phi = ((i + random) % samples) * increment;
    let x = Math.cos(phi) * distance;
    let z = Math.sin(phi) * distance;
    x = x * radius;
    y = y * radius;
    z = z * radius;
    points.push({ x, y, z });
  }
  return points;
}

App();