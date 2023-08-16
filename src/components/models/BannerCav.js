"use client";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Man } from "./Man.js";
import { Preload } from "@react-three/drei";

export default function BannerCav() {
  return (
    <>
      {/* <Perf position={"top-left"} /> */}
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={1} />

      <Suspense fallback={null}>
        <Man scale={2.2} position={[0, -4.6, 1.41]} rotation-y={0.27} />
        <Preload all />
      </Suspense>
    </>
  );
}
