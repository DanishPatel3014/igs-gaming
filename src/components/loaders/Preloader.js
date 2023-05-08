"use client";

import { useRef, useEffect , React, useState} from 'react';
import { gsap } from "gsap";


function Preloader() {

  

  return (
    <>
      <div className="preloader" >
        <div className="pre-ctn">        
          <span>Innovative</span>
          <span>Game</span>
          <span>Studio</span>
        </div>
      </div>
    </>
  );
}

export default Preloader;
