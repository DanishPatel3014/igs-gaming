"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

function Preloader() {

  // useEffect(() => {
  //  preLoaderAnim()
  // }, [])
  


  return (
    <>
      <div className="preloader">
        <div className="pre-ctn ">
          <span>Innovative</span>
          <span>Game</span>
          <span>Studio</span>
        </div>
      </div>
    </>
  );
}

export default Preloader;
