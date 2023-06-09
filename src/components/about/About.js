import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight } from 'react-icons/bs';
import ReactCurvedText from 'react-curved-text';
import { BsArrow90DegDown } from 'react-icons/bs'

export default function About() {

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
            <div className="abtRoundMain">
              <div className="roundedTextAbt">
                <ReactCurvedText
                  width={240}
                  height={240}
                  cx={120}
                  cy={120}
                  rx={100}
                  ry={100}
                  startOffset={0}
                  reversed={true}
                  text="- Innovative Game Studio - Innovative Game Studio - Innovative Game Studio"
                  textProps={{ style: { fontSize: 12.7 } }}
                  textPathProps={{ style: { fill: '#fff' } }}
                  tspanProps={{ style: { color: '#fff', textTransform: 'uppercase' } }}
                  ellipseProps={null}
                  svgProps={null}
                />
              </div>
              <BsArrow90DegDown 
              className=""
                style={{
                  transform: 'translateY(-150px)',
                  margin: '0 auto'
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
