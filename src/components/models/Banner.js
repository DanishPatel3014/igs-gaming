"use client";
import { Canvas } from "@react-three/fiber";
import BannerCav from "./BannerCav";
import * as THREE from "three";

export default function Banner() {
  return (
    <>
      <Canvas gl={{ antialias: true, toneMapping: THREE.LinearToneMapping }}
    >
       <BannerCav/>
      </Canvas>
    </>
  );
}
