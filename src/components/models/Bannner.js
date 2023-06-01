"use client";
import React, { useEffect } from 'react'
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import GUI from 'lil-gui';
 


   
export default function Bannner() {

useEffect(() => {

// =====START=====//

 // Add Canvas

 const canvas = document.querySelector('canvas.webgl')

 // Add Sizes
 const sizes = {
   width : innerWidth,
   height : innerHeight
 }

//  Add Resize Funcation
window,addEventListener('resize', ()=>{

// Update sizes
(sizes.width = window.innerWidth),(sizes.height = window.innerHeight)


// Update Camera
camera.aspect = sizes.width / sizes.height
camera.updateProjectionMatrix()

// Update Renderer
renderer.setSize(sizes.width,sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));

})
 
 // Add Scene
 const scene = new THREE.Scene()
 
 // Add Object
 
 const mesh = new THREE.Mesh(
   new THREE.BoxGeometry(1,1,1,5,5,5),
   new THREE.MeshBasicMaterial({color : 0xff0000})
 )
 scene.add(mesh)
 
 
 //Add Camera
 const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height,0.1,100)
 camera.position.z = 3
 camera.lookAt(mesh.position)
 scene.add(camera)
 
 
 // Add Renderer
 const renderer = new THREE.WebGLRenderer({
   canvas: canvas
 })
 renderer.setSize(sizes.width, sizes.height)
 renderer.render(scene, camera)

// Animation Time past clear
const clock = new THREE.Clock()
let pastTime = 0

const tick = () =>
{
  const elapsedTime = clock.getElapsedTime()
  const deltaTime = elapsedTime - pastTime
  pastTime = elapsedTime

// Update Render
renderer.render(scene, camera)

  // Call tick again on the next frame
window.requestAnimationFrame(tick);
}

tick()
 // =====END=====//

}, [])


  return (
    <>
    <section data-scroll-section  className='mainbanner'>
      <canvas className='webgl'></canvas>
    </section>
    </>
  )
}
