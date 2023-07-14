import React from "react";
import device from "../../assets/images/device.png";
import skull from "../../assets/images/skull.png";
import cup from "../../assets/images/cup.png";
import p1 from "../../assets/images/partner/p1.png";
import p2 from "../../assets/images/partner/p2.png";
import p3 from "../../assets/images/partner/p3.png";
import p4 from "../../assets/images/partner/p4.png";
import p5 from "../../assets/images/partner/p5.png";
import Image from "next/image";

export default function Partner() {
  return (
    <>
      <section className="partner-sec py-36" data-scroll-section>
        <div className="container  mx-auto">
          <div className="m-h w-h text-center mb-28">
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-2"
            >
              Our clientele
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
              spans across
            </h1>
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-2"
            >
              different industries
              <span>
                <Image src={cup} />
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-4  gap-9 items-center">
            <div className="part-logo">
              <Image src={p1} />
            </div>
            <div className="part-logo">
              <Image src={p2} />
            </div>
            <div className="part-logo">
              <Image src={p3} />
            </div>
            <div className="part-logo">
              <Image src={p4} />
            </div>
            <div className="part-circle"></div>
            <div className="part-logo">
              <Image src={p5} />
            </div>
            <div className="part-logo">
              <Image src={p3} />
            </div>
            <div className="part-circle">
             
            </div>
            <div className="part-logo">
              <Image src={p1} />
            </div>
            <div className="part-logo">
              <Image src={p2} />
            </div>
            <div className="part-logo">
              <Image src={p3} />
            </div>
            <div className="part-logo">
              <Image src={p4} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
