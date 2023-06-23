"use client";
import { Perf } from "r3f-perf";
import BannerModel from "./bannerModel.js";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function BannerCav() {
 

  return (
    <>
      <Perf position={"top-left"} />
      {/* <OrbitControls makeDefault /> */}
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={1} />

      {/* <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"#84ff76"} />
      </mesh> */}
      <Suspense>
      <BannerModel />
      </Suspense>
    </>
  );
}
