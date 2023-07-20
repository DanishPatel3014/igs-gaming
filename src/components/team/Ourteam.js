import React from "react";
import team from "../../assets/images/team/team.jpg";
import ahsan from "../../assets/images/team/ahsan.png";
import crown from "../../assets/images/team/crown.png";
import money from "../../assets/images/team/money.png";
import cal from "../../assets/images/team/cal.png";
import ishaq from "../../assets/images/team/ishaq.png";
import vr from "../../assets/images/team/vr.png";
import game from "../../assets/images/team/game.png";
import movie from "../../assets/images/team/movie.png";
import obid from "../../assets/images/team/obid.png";
import sleep from "../../assets/images/team/sleep.png";
import bike from "../../assets/images/team/bike.png";
import ani from "../../assets/images/team/ani.png";
import irfan from "../../assets/images/team/irfan.png";
import act from "../../assets/images/team/act.png";
import mark from "../../assets/images/team/mark.png";
import muk from "../../assets/images/team/muk.png";
import ahraz from "../../assets/images/team/ahraz.png";
import paint from "../../assets/images/team/paint.png";
import swi from "../../assets/images/team/swi.png";
import khi from "../../assets/images/team/khi.png";
import danish from "../../assets/images/team/danish.png";
import gym from "../../assets/images/team/gym.png";
import boox from "../../assets/images/team/boox.png";
import cyc from "../../assets/images/team/cyc.png";
import mid from "../../assets/images/team/mid.png";
import anusha from "../../assets/images/team/anusha.png";
import fatima from "../../assets/images/team/fatima.png";
import daniyal from "../../assets/images/team/daniyal.png";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn,FaDiscord,FaFacebookF,FaTwitter } from 'react-icons/fa';

export default function Ourteam() {
  return (
    <>
      <section className="team-sec py-48" data-scroll-section>
        <div className="container mx-auto">
          <div className="sr-wrap mb-36">
            <ul className="slist mb-20">
              <li>
                <div className="s-h">
                  <h4>our avengers</h4>
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
          <div className="team-img mb-36">
            <div
              class="o-image_wrapper"
              data-scroll
              data-scroll-call="dynamicBackground"
              data-scroll-repeat
            >
              <div class="o-image" data-scroll>
                <Image
                  class="c-speed-block_image"
                  src={team}
                  alt="Locomotive image from unsplash"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-32">
            <div className="tl">
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>ceo ceo ceo ceo ceo ceo ceo ceo ceo</h4>
                      <h4>ceo ceo ceo ceo ceo ceo ceo ceo ceo</h4>
                      <h4>ceo ceo ceo ceo ceo ceo ceo ceo ceo</h4>
                      <h4>ceo ceo ceo ceo ceo ceo ceo ceo ceo</h4>
                      <h4>ceo ceo ceo ceo ceo ceo ceo ceo ceo</h4>
                      <h4>ceo ceo ceo ceo ceo ceo ceo ceo ceo</h4>
                      
                    </div>
                    <div className="tlh tline2">
                      <h4>ahsan iqbal<span><Image src={crown}/></span>ahsan iqbal<span><Image src={money}/></span>ahsan iqbal<span><Image src={cal}/></span></h4>
                      <h4>ahsan iqbal<span><Image src={crown}/></span>ahsan iqbal<span><Image src={money}/></span>ahsan iqbal<span><Image src={cal}/></span></h4>
                 
                    </div>
                  </div>
                  <Image src={ahsan}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>ahsan iqbal</h4>
                  <h3>chief executive officer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>Motion Graphic Artist</h4>
                      <h4>Motion Graphic Artist</h4>
                      <h4>Motion Graphic Artist</h4>
                      <h4>Motion Graphic Artist</h4>
                      <h4>Motion Graphic Artist</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Obaid Ahmed Khan<span><Image src={sleep}/></span>Obaid Ahmed Khan<span><Image src={bike}/></span>Obaid Ahmed Khan<span><Image src={ani}/></span></h4>
                      <h4>Obaid Ahmed Khan<span><Image src={sleep}/></span>Obaid Ahmed Khan<span><Image src={bike}/></span>Obaid Ahmed Khan<span><Image src={ani}/></span></h4>
                    </div>
                  </div>
                  <Image src={obid}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Obaid Ahmed Khan</h4>
                  <h3>Sr. Motion Graphic Artist</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>Game Developer</h4>
                      <h4>Game Developer</h4>
                      <h4>Game Developer</h4>
                      <h4>Game Developer</h4>
                      <h4>Game Developer</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Muhammad Mukarram</h4>
                      <h4>Muhammad Mukarram</h4>
                      <h4>Muhammad Mukarram</h4>
                      <h4>Muhammad Mukarram</h4>
                      <h4>Muhammad Mukarram</h4>
                    </div>
                  </div>
                  <Image src={muk}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Muhammad Mukarram</h4>
                  <h3>Game Developer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                    <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Khizar Hayat</h4>
                      <h4>Khizar Hayat</h4>
                      <h4>Khizar Hayat</h4>
                      <h4>Khizar Hayat</h4>
                      <h4>Khizar Hayat</h4>
                    </div>
                  </div>
                  <Image src={khi}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Khizar Hayat</h4>
                  <h3> Jr. Concept Artist</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                    <h4>Head of Content Marketing</h4>
                      <h4>Head of Content Marketing</h4>
                      <h4>Head of Content Marketing</h4>
                      <h4>Head of Content Marketing</h4>
                      <h4>Head of Content Marketing</h4>
                    
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Midhat Nazim</h4>
                      <h4>Midhat Nazim</h4>
                      <h4>Midhat Nazim</h4>
                      <h4>Midhat Nazim</h4>
                      <h4>Midhat Nazim</h4>
                    </div>
                  </div>
                  <Image src={mid}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Midhat Nazim</h4>
                  <h3> Head of Content Marketing</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4> Head of Sales & Marketing </h4>
                      <h4> Head of Sales & Marketing </h4>
                      <h4> Head of Sales & Marketing </h4>
                      <h4> Head of Sales & Marketing </h4>
                      <h4> Head of Sales & Marketing </h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Daniyal Khatib</h4>
                      <h4>Daniyal Khatib</h4>
                      <h4>Daniyal Khatib</h4>
                      <h4>Daniyal Khatib</h4>
                      <h4>Daniyal Khatib</h4>
                    
                    </div>
                  </div>
                  <Image src={daniyal}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Daniyal Khatib</h4>
                  <h3>Head of Sales & Marketing</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tr">
          <div className="tspace"></div>
          <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>Game Producer</h4>
                      <h4>Game Producer</h4>
                      <h4>Game Producer</h4>
                      <h4>Game Producer</h4>
                      <h4>Game Producer</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Muhammad Ishaq Patni <span><Image src={vr}/></span>Muhammad Ishaq Patni <span><Image src={game}/></span>Muhammad Ishaq Patni <span><Image src={movie}/></span></h4>
                      <h4>Muhammad Ishaq Patni <span><Image src={vr}/></span>Muhammad Ishaq Patni <span><Image src={game}/></span>Muhammad Ishaq Patni <span><Image src={movie}/></span></h4>
                    </div>
                  </div>
                  <Image src={ishaq}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Muhammad Ishaq Patni</h4>
                  <h3>Game Producer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>Graphics Designer</h4>
                      <h4>Graphics Designer</h4>
                      <h4>Graphics Designer</h4>
                      <h4>Graphics Designer</h4>
                      <h4>Graphics Designer</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Irfan Ahmed Shah<span><Image src={act}/></span>Irfan Ahmed Shah<span><Image src={mark}/></span>Irfan Ahmed Shah<span><Image src={vr}/></span></h4>
                      <h4>Irfan Ahmed Shah<span><Image src={act}/></span>Irfan Ahmed Shah<span><Image src={mark}/></span>Irfan Ahmed Shah<span><Image src={vr}/></span></h4>
                
                    </div>
                  </div>
                  <Image src={irfan}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Irfan Ahmed Shah</h4>
                  <h3>Graphics Designer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                      <h4>Concept Artist</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Syed Ahraz Zaheen<span><Image src={paint}/></span>Syed Ahraz Zaheen<span><Image src={swi}/></span>Syed Ahraz Zaheen<span><Image src={game}/></span></h4>
                      <h4>Syed Ahraz Zaheen<span><Image src={paint}/></span>Syed Ahraz Zaheen<span><Image src={swi}/></span>Syed Ahraz Zaheen<span><Image src={game}/></span></h4>
                    </div>
                  </div>
                  <Image src={ahraz}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Syed Ahraz Zaheen</h4>
                  <h3>Sr. Concept Artist</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4> Lead ui ux Creative developer </h4>
                      <h4> Lead ui ux Creative developer </h4>
                      <h4> Lead ui ux Creative developer </h4>
                      <h4> Lead ui ux Creative developer </h4>
                      <h4> Lead ui ux Creative developer </h4>
                    

                    </div>
                    <div className="tlh tline2">
                    <h4>Danish Patel<span><Image src={gym}/></span>Danish Patel<span><Image src={boox}/></span>Danish Patel<span><Image src={cyc}/></span></h4>
                  
                    
                    </div>
                  </div>
                  <Image src={danish}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Danish Patel</h4>
                  <h3>Lead ui ux Creative developer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>Senior Content Writer</h4>
                      <h4>Senior Content Writer</h4>
                      <h4>Senior Content Writer</h4>
                      <h4>Senior Content Writer</h4>
                      <h4>Senior Content Writer</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>anush ather</h4>
                      <h4>anush ather</h4>
                      <h4>anush ather</h4>
                      <h4>anush ather</h4>
                      <h4>anush ather</h4>
                    
                    </div>
                  </div>
                  <Image src={anusha}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>anush ather</h4>
                  <h3>Senior Content Writer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4>Social Media Executive</h4>
                      <h4>Social Media Executive</h4>
                      <h4>Social Media Executive</h4>
                      <h4>Social Media Executive</h4>
                      <h4>Social Media Executive</h4>
                    

                    </div>
                    <div className="tlh tline2">
                      <h4>Fatima Ali </h4>
                      <h4>Fatima Ali </h4>
                      <h4>Fatima Ali </h4>
                      <h4>Fatima Ali </h4>
                      <h4>Fatima Ali </h4>
                    
                    </div>
                  </div>
                  <Image src={fatima}/>
                </div>
                <div className="tctnwp grid grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Fatima Ali</h4>
                  <h3>Social Media Executive</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  <li><Link href={''}><FaTwitter/></Link></li>
                  <li><Link href={''}><FaFacebookF/></Link></li>
                </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
