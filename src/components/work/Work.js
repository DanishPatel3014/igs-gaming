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
              <Image src={'/work/p1.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p2.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p3.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p4.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p5.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p6.jpg'} width={700}  height={600} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
          <Image src={'/work/p7.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p8.jpg'} width={700}  height={600} />
            </div>
            <div class="tiles__line-img" >
            <Image src={'/work/p9.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p10.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p11.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p12.jpg'} width={700}  height={600} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
          <Image src={'/work/p13.jpg'} width={700}  height={600} />
            </div>
            <div class="tiles__line-img" >
            <Image src={'/work/p14.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p15.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p16.jpg'} width={700}  height={600} />
            </div>
            <div class="tiles__line-img" >
            <Image src={'/work/p17.jpg'} width={700}  height={600} />
            </div>
            <div class="tiles__line-img" >
            <Image src={'/work/p18.jpg'} width={700}  height={600} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
          <Image src={'/work/p19.jpg'} width={700}  height={600} />
            </div>
            <div class="tiles__line-img" >
            <Image src={'/work/p20.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p21.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p21.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p6.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p1.jpg'} width={700}  height={600} />
            </div>
					</div>
					<div class="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
          <div class="tiles__line-img" >
          <Image src={'/work/p19.jpg'} width={700}  height={600} />
            </div>
            <div class="tiles__line-img" >
            <Image src={'/work/p20.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p21.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p22.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p6.jpg'} width={700}  height={600} />
            </div>
						<div class="tiles__line-img" >
            <Image src={'/work/p1.jpg'} width={700}  height={600} />
            </div>
					</div>
				</div>
			</div>
      </section>
     
    </>
  );
}
