import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from 'react-icons/bs';

export default function About() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      var theta = window.scrollY() / 600 % Math.PI
      console.log(theta)
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="about-sec py-36" data-scroll-section>
        <div className="container  mx-auto"  >
        <div className="m-h h-wrp mb-28">
          <div className="h-wrp mb-28">
            <h1>
              We Bring Whole-assed gaming<br />Creative Solutions
            </h1>
            <h2><span>*</span> never Half <span>*</span></h2>
            <h1>Into The World That Solve, Achieve, & Inspire.</h1>
          </div>
          <div className="grid grid-cols-2  items-center">
            <div className="btn-wrap ">
              <ul className="btn-list">
                <li><Link href={''}>what we do<BsArrowUpRight /></Link></li>
                <li><Link href={''}>meet us<BsArrowUpRight /></Link></li>
              </ul>
            </div>
            <div className="p1 para">
              If you ask our clients what it’s like working with 36, they’ll talk about how much we care about their success. For us, real relationships fuel real success. We love building brands and helping clients conquer the world with them.
            </div>
          </div>
          <img style={{ transform: `rotate(${rotation}deg)` }} id='shiledImage2' src="./images/shield2.png" />
        </div>
        </div>
      </section>
    </>
  );
}
