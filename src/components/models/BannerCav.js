"use client";
import { Perf } from "r3f-perf";
import BannerModel from "./bannerModel.js";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

export default function BannerCav() {
 

  return (
    <>
      {/* <Perf position={"top-left"} /> */}
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={1} />

    
      <Suspense>
      <BannerModel />
      </Suspense>
    </>
  );
}
