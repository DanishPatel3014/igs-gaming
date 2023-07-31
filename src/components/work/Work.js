"use client";
import Image from "next/image";
import React from "react";
// import device from "src/assets/images/device.png";
// import skull from "src/assets/images/skull.png";
// import reaper  from "src/assets/images/icon/reaper.png";
// import notepad from "src/assets/images/icon/notepad.png";
// import cup from "src/assets/images/cup.png";
import glass from "@/assets/images/icon/glass.png";
// import handheld from "/images/icon/handheld.png";
import laptop from "src/assets/images/icon/laptop.png";
import headache from "src/assets/images/icon/headache.png";
import boy from "src/assets/images/boy.jpg";


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
                <Image width={120}  height={120}  src={'/handheld.png'} />
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
                <Image width={120}  height={120} src={'/images/icon/glass.png'} />
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
