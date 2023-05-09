"use client";

import { useRef, useEffect , React, useState} from 'react';
import { gsap } from "gsap";


function Preloader() {

        const myText = new SplitType('#my-text')

        gsap.to('.char', {
            y: 0,
            stagger: 0.05,
            delay: 0.2,
            duration: .1
        })

text.start();
text.reveal(4000);

  return (
    <>
      <div className="preloader" >
        <div className="pre-ctn">        
          <span id="my-text" class="glitch" data-text="innovative Game Studio">Innovative Game Studio</span>
          
        </div>
      </div>
    </>
  );
}

export default Preloader;
