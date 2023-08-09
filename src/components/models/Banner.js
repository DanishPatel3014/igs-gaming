"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import BannerCav from "./BannerCav";
import * as THREE from "three";

function Rig() {
  return useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, 0.25 + state.mouse.x / 4, 0.075)
   
  })
}

// function Rig() {
//   const { camera, mouse } = useThree();
//   const vec = new THREE.Vector3();

//   return useFrame(() => {
//     camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.5);
//     camera.lookAt(0, 0, 0);
//   });
// }

export default function Banner() {
  return (
    <>
      <Canvas gl={{ antialias: true, toneMapping: THREE.LinearToneMapping }}>
        <BannerCav />
        <Rig />
      </Canvas>
    </>
  );
}
