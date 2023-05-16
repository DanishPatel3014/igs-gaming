"use client";
import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from 'lil-gui';
 


   
export default function Bannner() {

    useEffect(() => {
        console.log(THREE);
        console.log(OrbitControls);
        console.log(GUI);
       }, [])

  return (
    <div>

    </div>
  )
}
