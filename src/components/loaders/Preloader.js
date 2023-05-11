"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, React, useState } from "react";
import CountUp from 'react-countup';
import ReactCurvedText from 'react-curved-text';
import Logo from '../../assets/images/logo.png'

function Preloader() {
  const [startLoad, setStartLoad] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

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

    gsap.to(".mainWrap", {
      opacity: 0,
      delay: '5.4'
    })

    // Timer that change state upon which we are changing class of the main div to start the progress bar
    setTimeout(() => {
      setStartLoad(true);
    }, 450);

    setTimeout(() => {
      setStartLoad(false);
    }, 5600);

    setTimeout(() => {
      setShowLogo(true);
    }, 5900);

    return () => clearTimeout();
  }, []);


  return (
    <>
      <div className={startLoad ? "preloader startLoad" : "preloader"}>
        <div className="mainWrap">
          {/* Glitch text section, contains progress bar as ::before */}
          <div className="pre-wrap">
            <div className="pre-ctn">
              <span id="box3" className="" data-text="innovative Game Studio">
                Innovative Game Studio
              </span>
            </div>
          </div>
          {/* Rounded animated text component */}
          <div className="roundedText">
            <ReactCurvedText
              width={300}
              height={300}
              cx={150}
              cy={150}
              rx={120}
              ry={120}
              startOffset={0}
              reversed={true}
              text="- Innovative Game Studio - Innovative Game Studio"
              textProps={{ style: { fontSize: 26.8 } }}
              textPathProps={{ style: { fill: '#fff' } }}
              tspanProps={{ style: { color: '#fff' } }}
              ellipseProps={null}
              svgProps={null}
            />
          </div>
          {/* Counter or loading animation */}
          <div className="counter pre-ctn">
            <CountUp delay={0.9} start={0} end={100} duration={6} />
          </div>
        </div>
        <Image
          className={showLogo ? "PreLoaderLogo show" : "PreLoaderLogo"}
          src={Logo}
          alt="Innovative Game Studio"
        />
      </div>
    </>
  );
}

export default Preloader;
