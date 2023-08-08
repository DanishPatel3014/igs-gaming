"use client";
import React, { useRef, useState } from "react";
import Banner from "./Banner";
import Link from "next/link";
import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';
import { GiSoundOff, GiSoundOn } from 'react-icons/gi';
export default function Mainbanner() {
  const audioRef = useRef(null);
  const [isAudible, setIsAudible] = useState(false);
  return (
    <>
       <section className="mainbanner" id="direction" >
          <div className="loop-wrap " data-scroll-section>
            <div
              className="loop"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="20"
              data-scroll-target="#direction"
              data-scroll-delay="0.05"
            >
             
             <h1>
             We <span>are</span> converting <span>imagination</span> and <span>ideas</span> into <span>reality</span>
              </h1>
              <h1>
              We <span>are</span> converting <span>imagination</span> and <span>ideas</span> into <span>reality</span>
              </h1>
              <h1>
              We <span>are</span> converting <span>imagination</span> and <span>ideas</span> into <span>reality</span>
              </h1>
            </div>
          </div>

          <Banner />

          <div className="ban-btm  px-9 py-5">
            <div className="grid grid-cols-2">
              <audio autoPlay={true} controls={true} loop={true} ref={audioRef} style={{display: 'none'}}>
                <source src="game.mp3" type="audio/mp3" />
              </audio>
              <div className="sund-wrap">
                <div className="sound">
                  {
                    isAudible ?
                      <button
                        onClick={() => {
                          audioRef?.current.pause()
                          setIsAudible(false);
                        }}
                      >
                        <GiSoundOn />
                      </button>
                      :
                      <button
                        onClick={() => {
                          audioRef?.current.play()
                          setIsAudible(true);
                        }}
                      >
                        <GiSoundOff />
                      </button>
                  }
                 
                </div>
              </div>
              <div className="link-wrp">
                <ul className="s-link">
                  <li><Link target="_blank" href={'https://www.facebook.com/InnovativeGameStudio'} ><BiLogoFacebook /></Link></li>
                  <li><Link target="_blank" href={'https://www.instagram.com/innovativegame.studio/'}><BiLogoInstagram /></Link></li>
                  <li><Link target="_blank" href={'https://www.linkedin.com/company/innovative-game-studio/'}><BiLogoLinkedin /></Link></li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      
    </>
  );
}
