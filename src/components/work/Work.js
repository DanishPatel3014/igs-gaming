import Image from "next/image";
import React from "react";
import device from "../../assets/images/device.png";
import skull from "../../assets/images/skull.png";
import cup from "../../assets/images/cup.png";
import glass from "../../assets/images/glass.png";
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
                <Image src={device} />
              </span>
            </h1>
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="2"
            >
              <span>
                <Image src={skull} />
              </span>
              Are Unique,
            </h1>
            <h1
             data-scroll
             data-scroll-direction="horizontal"
             data-scroll-speed="-2"
            >LIKE EACH OF
            <span>
                <Image src={cup} />
              </span>
            </h1>
            <h1
                  data-scroll
                  data-scroll-direction="horizontal"
                  data-scroll-speed="2">
            <span>         
                <Image src={glass} />
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
