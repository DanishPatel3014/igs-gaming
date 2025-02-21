"use client";
import { useEffect, React, useRef, lazy } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";


export default function BannerModel() {

 
  const soldiers = useGLTF("/man.glb");
  const animations = useAnimations(soldiers.animations, soldiers.scene);
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

useGLTF.preload("/man.glb");
