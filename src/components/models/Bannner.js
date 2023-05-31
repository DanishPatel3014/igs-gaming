"use client";
import React, { useEffect } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import * as dat from "lil-gui";

export default function Bannner() {
  useEffect(() => {
    // =====START=====//

    // Debug
    const gui = new dat.GUI();

    // Add Canvas

    const canvas = document.querySelector("canvas.webgl");

    // Add Scene
    const scene = new THREE.Scene();

    // Add Sizes
    const sizes = {
      width: innerWidth,
      height: innerHeight,
    };

    // model
// const dracoloader = new DRACOLoader();
// dracoloader.setDecoderPath("/draco/");

const gltfLoader = new GLTFLoader();
// gltfLoader.setDRACOLoader(dracoloader);

let mixer = null;
let model;

  const gltf = useLoader(GLTFLoader,'../src/assets/models/Man/glTF/Man.gltf');
  model = gltf.scene;

    model.rotation.y = 0.27;
    console.log(model);
    scene.add(model);

    const target = new THREE.Object3D();
    scene.add(target);
    mixer = new THREE.AnimationMixer(model);
    const action = mixer.clipAction(gltf.animations[0]);

    action.play();
// Material
const material = new THREE.MeshStandardMaterial();
material.roughness = 0.4;

    //  Add Resize Funcation
    window,
      addEventListener("resize", () => {
        // Update sizes
        (sizes.width = window.innerWidth), (sizes.height = window.innerHeight);

        // Update Camera
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // Update Renderer
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      });

    // Add Object

    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
      new THREE.MeshBasicMaterial({ color: 0xff0000 })
    );
    scene.add(mesh);

    //Add Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.y = 2.12;
    camera.position.z = 1.6;
    scene.add(camera);

    // Add Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });

    // renderer.shadowMap.enabled = true;
    // renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.LinearToneMapping;
    renderer.toneMappingExposure = 1;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Animation Time past clear
    const clock = new THREE.Clock();
    let pastTime = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - pastTime;
      pastTime = elapsedTime;

      // update mixer
      if (mixer) {
        mixer.update(deltaTime);
      }

      // Update camera
      if (model) {
        model.rotation.y = cursor.x * 0.8;
      }
      // Update controls
      //  controls.update()

      // Render
      renderer.render(scene, camera);

      // Call tick again on the next frame
      window.requestAnimationFrame(tick);
    };

    tick();
    // =====END=====//
  }, []);

  return (
    <>
      <section data-scroll-section className="mainbanner">
        <canvas className="webgl"></canvas>
      </section>
    </>
  );
}
