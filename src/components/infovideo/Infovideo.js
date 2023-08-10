import React, { useEffect } from "react";
import { FaAsterisk, FaRegStar, FaSnowflake, FaGamepad } from "react-icons/fa";
import { TbInnerShadowBottomLeft } from "react-icons/tb";
export default function Infovideo() {
  useEffect(() => {
    document.getElementById("vid").play();
  }, []);

  return (
    <>
      <section className="video-sec " id="dir" data-scroll-section>
        <div className="topvid"></div>
        <div className="topctnwrp">
          <div
            className="topctn m-h"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-20"
            data-scroll-target="#dir"
            data-scroll-delay="0.05"
          >
            <h1>
              Creative that slaps 
              <span>
                <FaGamepad />
              </span> 
              Game Development 
              <span>
                <FaRegStar />
              </span> 
              Art Direction 
              <span>
                <FaSnowflake />
              </span> 
              Branding 
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Brand Strategy
              <span>
                 
                <FaGamepad />
              </span> 
              Campaigns 
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Concept Development 
              <span>
                <FaSnowflake />
              </span> 
              Content Creation
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Copywriting 
              <span>
                <FaSnowflake />
              </span> 
              Creative Direction 
              <span>
                <FaGamepad />
              </span> 
              CGI 
              <span>
                <FaSnowflake />
              </span> 
              Email Marketing 
              <span>
                <TbInnerShadowBottomLeft />
              </span>
              Environmental Design 
              <span>
                <FaSnowflake />
              </span> 
              Illustration 
              <span>
                <FaGamepad />
              </span> 
              Motion 
              <span>
                <FaSnowflake />
              </span> 
              Packaging 
              <span>
                <TbInnerShadowBottomLeft />
              </span>
              Photography 
              <span>
                <FaSnowflake />
              </span> 
              Production 
              <span>
                <FaRegStar />
              </span> 
              Paid ads 
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Retail Design 
              <span>
                <FaRegStar />
              </span> 
              Social Media Strategy
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Typography 
              <span>
                <FaGamepad />
              </span> 
              UX/UI 
              <span>
                <FaSnowflake />
              </span> 
              Video 
              <span>
                <FaRegStar />
              </span> 
              Web Design & Development 
              <span>
                <FaSnowflake />
              </span> 
              3D Design
            </h1>
          </div>
        </div>
        <video
          className="vid"
          id="vid"
          autoPlay={true}
          loop={true}
          muted
          controls={false}
        >
          <source src="/images/game2.mp4" />
        </video>
        <div className="btmvid"></div>
        <div className="btmctnwrp">
          <div
            className="btmctn m-h"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="20"
            data-scroll-target="#dir"
            data-scroll-delay="0.05"
          >
            <h1>
              Creative that slaps 
              <span>
                <FaGamepad />
              </span> 
              Game Development 
              <span>
                <FaRegStar />
              </span> 
              Art Direction 
              <span>
                <FaSnowflake />
              </span> 
              Branding 
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Brand Strategy
              <span>
                 
                <FaGamepad />
              </span> 
              Campaigns 
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Concept Development 
              <span>
                <FaSnowflake />
              </span> 
              Content Creation
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Copywriting 
              <span>
                <FaSnowflake />
              </span> 
              Creative Direction 
              <span>
                <FaGamepad />
              </span> 
              CGI 
              <span>
                <FaSnowflake />
              </span> 
              Email Marketing 
              <span>
                <TbInnerShadowBottomLeft />
              </span>
              Environmental Design 
              <span>
                <FaSnowflake />
              </span> 
              Illustration 
              <span>
                <FaGamepad />
              </span> 
              Motion 
              <span>
                <FaSnowflake />
              </span> 
              Packaging 
              <span>
                <TbInnerShadowBottomLeft />
              </span>
              Photography 
              <span>
                <FaSnowflake />
              </span> 
              Production 
              <span>
                <FaRegStar />
              </span> 
              Paid ads 
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Retail Design 
              <span>
                <FaRegStar />
              </span> 
              Social Media Strategy
              <span>
                <TbInnerShadowBottomLeft />
              </span> 
              Typography 
              <span>
                <FaGamepad />
              </span> 
              UX/UI 
              <span>
                <FaSnowflake />
              </span> 
              Video 
              <span>
                <FaRegStar />
              </span> 
              Web Design & Development 
              <span>
                <FaSnowflake />
              </span> 
              3D Design
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
