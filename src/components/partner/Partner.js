import React from "react";
import headache from "src/assets/images/icon/headache.png";
import hat from "src/assets/images/icon/hat.png";
import cuup from "src/assets/images/icon/cup.png";
import p1 from "../../assets/images/logos/p1.png";
import p2 from "../../assets/images/logos/p2.png";
import p3 from "../../assets/images/logos/p3.png";
import p4 from "../../assets/images/logos/p4.png";
import p5 from "../../assets/images/logos/p5.png";
import p6 from "../../assets/images/logos/p6.png";
import p7 from "../../assets/images/logos/p7.png";
import p8 from "../../assets/images/logos/p8.png";
import p9 from "../../assets/images/logos/p9.png";
import p10 from "../../assets/images/logos/p10.png";
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
                <Image src={headache} />
              </span>
            </h1>
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="2"
            >
              <span>
                <Image src={cuup} />
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
                <Image src={hat} />
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
              <Image src={p6} />
            </div>
            <div className="part-circle">
             
            </div>
            <div className="part-logo">
              <Image src={p7} />
            </div>
            <div className="part-logo">
              <Image src={p8} />
            </div>
            <div className="part-logo">
              <Image src={p9} />
            </div>
            <div className="part-logo">
              <Image src={p10} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
