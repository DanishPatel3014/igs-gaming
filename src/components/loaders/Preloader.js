"use client";

import { gsap } from "gsap";
import { useEffect, React, useState } from "react";
import CountUp from 'react-countup';
import ReactCurvedText from 'react-curved-text';

function Preloader() {

  useEffect(() => {
    // Gsap effect to bring text from bottom
    gsap.to(".pre-ctn", {
      duration: 1.2,
      y: 0,
      ease: "power4",
      opacity: 1,
      stagger: 0.1,
    });

    gsap.set('#box3', {
      className: 'glitch',
      delay: 0.9
    });

    gsap.to(".line", {
      duration: 3,
      width : '100%',
      delay: 1
    });

    gsap.to(".mainWrap", {
      opacity: 0,
      delay: '14',
      
    })
    gsap.to(".preloader", {
      opacity: 0,
      delay: '14',
      display : 'none',
      duration: 2,
    })


  
 
  

   
  }, []);


  return (
    <>
      <div className={"preloader"}>
        <div className="mainWrap">
          {/* Glitch text section, contains progress bar as ::before */}
          <div className="pre-wrap">
            <div className="pre-ctn">
              <span id="box3" className="" data-text="innovative Game Studio">
                Innovative Game Studio
              </span>
            </div>
           
          </div>
          <div className="line"></div>
          {/* Rounded animated text component */}
          <div className="roundedText ">
            <ReactCurvedText
              width={240}
              height={240}
              cx={120}
              cy={120}
              rx={100}
              ry={100}
              startOffset={0}
              reversed={true}
              text="- Innovative Game Studio - Innovative Game Studio - Innovative Game Studio"
              textProps={{ style: { fontSize: 12.7 } }}
              textPathProps={{ style: { fill: '#fff' } }}
              tspanProps={{ style: { color: '#fff', textTransform  : 'uppercase' } }}
              ellipseProps={null}
              svgProps={null}
            />
          </div>
          {/* Counter or loading animation */}
          <div className="counter pre-ctn">
            <CountUp delay={0.9} start={0} end={100} duration={8} />
          </div>
        </div>
      
      </div>
    </>
  );
}

export default Preloader;
