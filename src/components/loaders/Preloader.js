"use client";

import { gsap } from "gsap";
import { useRef, useEffect, React, useState } from "react";
import SplitType from "split-type";

function Preloader() {
  // useEffect(() => {
  //   const myText = new SplitType('#my-text')

  //   gsap.to('.char', {
  //       y: 0,
  //       stagger: 0.05,
  //       delay: 0.2,
  //       duration: .1
  //   })

  // }, [])

  useEffect(() => {
    gsap.to(".pre-ctn", {
      duration: 1.2,
      y: 0,
      ease: "power4",
      opacity: 1,
      stagger: 0.1,
    });
    gsap.set( '#box3', {
      className: 'glitch',
      delay : 0.9
    });
  }, []);

  return (
    <>
      <div className="preloader">
        <div className="pre-wrap">
          <div className="pre-ctn">
            <span id="box3" className="" data-text="innovative Game Studio">
              Innovative Game Studio
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
