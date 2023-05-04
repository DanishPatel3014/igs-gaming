"use client";
import { preLoaderAnim } from "@/src/animations";
import React, { useEffect } from "react";
import { gsap } from "gsap";

function Preloader() {

  useEffect(() => {
   preLoaderAnim()
  }, [])
  


  return (
    <>
      <div className="preloader">
        <div className="pre-ctn">
          <span>Innovative</span>
          <span>Game Studio</span>
        </div>
      </div>
    </>
  );
}

export default Preloader;
