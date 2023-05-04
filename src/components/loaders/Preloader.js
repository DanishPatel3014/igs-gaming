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
        <div className="xl:container pre-ctn border-slate-50 ">
          <span>Innovative</span>
          <span className="text-black">Game</span>
          <span>Studio</span>
        </div>
      </div>
    </>
  );
}

export default Preloader;
