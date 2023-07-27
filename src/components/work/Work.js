import Image from "next/image";
import React from "react";
// import device from "../../assets/images/device.png";
// import skull from "../../assets/images/skull.png";
import glass from "../../assets/images/icon/glass.png";
import handheld from "../../assets/images/icon/handheld.png";
// import notepad from "../../assets/images/icon/notepad.png";
import laptop from "../../assets/images/icon/laptop.png";
// import reaper  from "../../assets/images/icon/reaper.png";
import headache from "../../assets/images/icon/headache.png";

import cup from "../../assets/images/cup.png";

import boy from "../../assets/images/boy.jpg";


export default function Work() {
  return (
    <>
      <section className="work-sec py-36" data-scroll-section>
        <div className="container  mx-auto">
          <div className="m-h w-h text-center mb-28">
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-2"
            >
              Our Projects
              <span>
                <Image src={handheld} />
              </span>
            </h1>
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="2"
            >
              <span>
                <Image src={laptop} />
              </span>
              Are Unique,
            </h1>
            <h1
             data-scroll
             data-scroll-direction="horizontal"
             data-scroll-speed="-2"
            >LIKE EACH OF
            <span>
                <Image src={glass} />
              </span>
            </h1>
            <h1
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="2">
            <span>         
                <Image src={headache} />
              </span>
              Our Clients.</h1>
          </div>
        </div>
        <div class="tiles tiles--rotated" id="grid2" >
        <div class="tiles__wrap">
					<div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
            <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
            <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
            <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
            <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
            <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
            <div class="tiles__line-img" >
              <Image src={boy} />
            </div>
						<div class="tiles__line-img" >
              <Image src={boy} />
            </div>
					</div>
				</div>
			</div>
      </section>
     
    </>
  );
}
