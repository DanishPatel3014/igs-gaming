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
                  Let’s Create Your Next
                    <br />
                     Gaming Masterpiece 
                  </h1>
                </div>
              </li>
            </ul>
            <div className="s-h ">
              <h2>
              Fueling Games with Passion, 
                <br />
                Innovation, & Cutting-Edge Tech.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="srlist-wrap pt-16">
                <ul className="sr-list">
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>01</h5>
                                <h4>Game Development</h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>We create stunning 2D and 3D games for all platforms that are fuelled by compelling gameplay.

We approach you as a partner and expand on your vision by presenting you with fresh options and alternatives that better fit your needs.</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>04</h5>
                                <h4>Concept Art</h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our team of artists are experts in Concept art, Storyboards and illustrations, making sure to elevate you game to the next level.

From pixel art to high-resolution, we have got you covered !</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>07</h5>
                                <h4>Game Analytics</h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Our game analytics services provide valuable insights into the performance and engagement of your video games.

We utilize advanced data analysis and tracking tools to monitor the behavior of players, measure the success of the game, and identify areas for improvement.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="srlist-wrap ">
                <ul className="sr-list">
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>02</h5>
                                <h4>Game Maintenance</h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Game maintenance and support services should be proactive in the approach.

This means regularly conducting maintenance checks and updates, as well as monitoring player feedback</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>05</h5>
                                <h4>Game Design </h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>With our team of professional game designers, we strive to provide the best gaming experience by applying design and aesthetics.

We provide quest, level designs, and game economy designs.</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>08</h5>
                                <h4>Game Porting </h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>We offer professional and reliable game porting services to game developers and publishers.

Our team of experienced game developers and testers have extensive experience in porting games across multiple platforms.</p>
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
                                <h4>Asset Production</h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>We believe the true gaming experience is achieved with the gamer in mind, and a true gamer demands realistic adventures and immersive gameplay, and that is exactly what we aim to offer.</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>06</h5>
                                <h4>Animation</h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>With experienced members on board, our team of highly talented 2D & 3D animators creates custom characters, props, and environments for a wide range of game genres, making sure that what you’ve envisioned comes to life.</p>
                        </div>
                    </li>
                    <li>
                        <div className="sr-box s-h p1">
                            <div className="srbox-h">
                                <h5>09</h5>
                                <h4>Game Marketing </h4>
                                <Link href={'/services'}><BsArrowUpRight/></Link>
                            </div>
                            <div className="divider"></div>
                            <p>Whether you need help reaching new audiences, generating buzz, or improving your overall marketing strategy, IDA has the experience and expertise to help you succeed. With a dedicated team of experts and a proven track record of success, you can trust IDA to help you reach your marketing goals and achieve the success your game deserves.</p>
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
