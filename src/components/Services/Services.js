import { gsap } from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsArrowUpRight } from 'react-icons/bs';

export default function Services() {
  return (
    <>
      <section className="service-sec py-48" data-scroll-section>
        <div className="container mx-auto">
          <div className="sr-wrap mb-36">
            <ul className="slist mb-20">
              <li>
                <div className="s-h">
                  <h4>services</h4>
                </div>
              </li>
              <li>
                <div className="m-h col-span-2">
                  <h1>
                    discover the world
                    <br />
                    based your loves
                  </h1>
                </div>
              </li>
            </ul>
            <div className="s-h ">
              <h2>
                highest level of satisfaction for
                <br />
                our customers and their users.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-3 ">
            <div className="srlist-wrap pt-16">
                <ul className="sr-list">
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>02</h5>
                                <h4>Game Development</h4>
                                <Link href={''}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our game development team uses the Unity platform <br/>to build a successful & interactive 2D, 3D games with <br/>a flawless performance on every platform.</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>05</h5>
                                <h4>Game Development</h4>
                                <Link href={''}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our game development team uses the Unity platform <br/>to build a successful & interactive 2D, 3D games with <br/>a flawless performance on every platform.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="srlist-wrap ">
                <ul className="sr-list">
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>01</h5>
                                <h4>Game Development</h4>
                                <Link href={''}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our game development team uses the Unity platform <br/>to build a successful & interactive 2D, 3D games with <br/>a flawless performance on every platform.</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>04</h5>
                                <h4>Game Development</h4>
                                <Link href={''}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our game development team uses the Unity platform <br/>to build a successful & interactive 2D, 3D games with <br/>a flawless performance on every platform.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="srlist-wrap pt-24">
                <ul className="sr-list">
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>03</h5>
                                <h4>Game Development</h4>
                                <Link href={''}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our game development team uses the Unity platform <br/>to build a successful & interactive 2D, 3D games with <br/>a flawless performance on every platform.</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>06</h5>
                                <h4>Game Development</h4>
                                <Link href={''}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our game development team uses the Unity platform <br/>to build a successful & interactive 2D, 3D games with <br/>a flawless performance on every platform.</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
