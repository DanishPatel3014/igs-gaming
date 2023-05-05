"use client";

import { useRef, useEffect , React} from 'react';
import { gsap } from "gsap";

function Preloader() {

console.log(gsap);

  return (
    <>
      <div className="preloader">
        <div className="pre-ctn">
        
          <span id="test">Innovative</span>
          <span>Game</span>
          <span>Studio</span>
        </div>
      </div>
    </>
  );
}

export default Preloader;
