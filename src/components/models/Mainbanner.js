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
              data-scroll-speed="-20"
              data-scroll-target="#direction"
              data-scroll-delay="0.05"
            >
              <h1>
                <b>CYBER</b>FICTION IS THE{" "}
                <b>
                  <i>REAL</i>
                </b>{" "}
                <span>STORY</span> IN THE{" "}
                <span>
                  <i>METAVERSE.</i>
                </span>
              </h1>
              <h1>
                <b>CYBER</b>FICTION IS THE{" "}
                <b>
                  <i>REAL</i>
                </b>{" "}
                <span>STORY</span> IN THE{" "}
                <span>
                  <i>METAVERSE.</i>
                </span>
              </h1>
              <h1>
                <b>CYBER</b>FICTION IS THE{" "}
                <b>
                  <i>REAL</i>
                </b>{" "}
                <span>STORY</span> IN THE{" "}
                <span>
                  <i>METAVERSE.</i>
                </span>
              </h1>
            </div>
          </div>

          {/* <Banner /> */}

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
                  {/* <Link href={''}><AiOutlineSound/></Link> */}
                </div>
              </div>
              <div className="link-wrp">
                <ul className="s-link">
                  <li><Link href={''} ><BiLogoFacebook /></Link></li>
                  <li><Link href={''}><BiLogoInstagram /></Link></li>
                  <li><Link href={''}><BiLogoLinkedin /></Link></li>
                </ul>
              </div>
            </div>
          </div>

        </section>
      
    </>
  );
}
