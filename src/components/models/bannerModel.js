"use client";
import { useEffect, React } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export default function BannerModel() {

  const { position } = useControls({
    position: {
      value: {x:0, y:-4.60 ,z:1.41},
      step: 0.01,
    },
   
  });

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
       position={[position.x,position.y,position.z]}
     rotation-y={0.27}
        />
    </>
  );
}

useGLTF.preload("../../model/Man/gLTF/Man.gltf");
