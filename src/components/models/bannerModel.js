"use client";
import { useEffect, React, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export default function BannerModel() {

 

  const soldiers = useGLTF("../../model/Man/gLTF/Man.gltf");
  const animations = useAnimations(soldiers.animations, soldiers.scene);
  console.log(animations);
  useEffect(() => {
    const action = animations.actions.Walk;
    action.play();
  }, []);
  

  return (
    <>
      <primitive
   
       object={soldiers.scene} 
       scale={2.2}
       position={[0, -4.60 ,1.41]}
     rotation-y={0.27}
        />
    </>
  );
}

useGLTF.preload("../../model/Man/gLTF/Man.gltf");
