import React from "react";
import headache from "src/assets/images/icon/headache.png";
import hat from "src/assets/images/icon/hat.png";
import cuup from "src/assets/images/icon/cup.png";
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
              Our Experience
              <span>
                <Image alt="hat"  width={128}  height={128} src={"/icon/hat.png"} />
              </span>
            </h1>
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="2"
            >
              <span>
                <Image alt="cuup" width={128}  height={128} src={'/icon/cup.png'} />
              </span>
              can be evaluated
            </h1>
            <h1
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-2"
            >
              by our Clients
              <span>
                <Image alt="headache" width={128}  height={128} src={'/icon/headache.png'} />
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-9 items-center partnerSec">
            <div className="part-logo">
              <Image alt="p1" src={'/logos/p1.png'} width={521} height={160} />
            </div>
            <div className="part-logo">
              <Image alt="p2" src={'/logos/p2.png'}  width={521} height={160}/>
            </div>
            <div className="part-logo">
              <Image alt="p3" src={'/logos/p3.png'}  width={521} height={160}/>
            </div>
            <div className="part-logo">
              <Image alt="p4" src={'/logos/p4.png'}  width={521} height={160}/>
            </div>
            <div className="part-circle"></div>
            <div className="part-logo">
              <Image alt="p5" src={'/logos/p5.png'}  width={521} height={160}/>
            </div>
            <div className="part-logo">
              <Image alt="p6" src={'/logos/p6.png'}  width={521} height={160}/>
            </div>
            <div className="part-circle">
             
            </div>
            <div className="part-logo">
              <Image alt="p7" src={'/logos/p7.png'}  width={521} height={160}/>
            </div>
            <div className="part-logo">
              <Image alt="p8" src={'/logos/p8.png'} width={521} height={160} />
            </div>
            <div className="part-logo">
              <Image alt="p9" src={'/logos/p9.png'}  width={521} height={160}/>
            </div>
            <div className="part-logo">
              <Image alt="p10" src={'/logos/p10.png'} width={521} height={160} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
