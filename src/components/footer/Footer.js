import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import inpl from '../../assets/images/inpl.png'

export default function Footer() {
  return (
    <>
      <section className="footer-sec py-16" data-scroll-section>
        <div className="fot-line m-h">
          <h1>
            have a <span>great</span> project <span>?</span>
          </h1>
          <h1>
            have a <span>great</span> project <span>?</span>
          </h1>
          <h1>
            have a <span>great</span> project <span>?</span>
          </h1>
        </div>
        <div className="ft-slink mb-28">
          <div class="page14-inner">
            <h1>Facebook</h1>
            <Link target="_blank" href={"https://www.facebook.com/InnovativeGameStudio"}>
              <BsArrowUpRight />
            </Link>
            <div class="center14"></div>
          </div>
          <div class="page14-inner">
            <h1>LinkedIn</h1>
            <Link target="_blank" href={"https://www.linkedin.com/company/innovative-game-studio/"}>
              <BsArrowUpRight />
            </Link>
            <div class="center14"></div>
          </div>
          <div class="page14-inner">
            <h1>Instagram</h1>
            <Link target="_blank" href={"https://www.instagram.com/innovativegame.studio/"}>
              <BsArrowUpRight />
            </Link>
            <div class="center14"></div>
          </div>
        </div>
        <div className="footerwarp px-24">
          <div className="grid grid-cols-2  items-center mb-28">
            <div className="get-wrp p1">
             
              <p>
                Have a project in mind?
                <br />
                Let’s work together!
              </p>
            </div>
            <div className="let-warp btn-a">
              <Link href={"/contact"}>
                Let’s Talk
                <BsArrowUpRight />
              </Link>
            </div>
          </div>
          <div className="ft-location mb-16">
        <div className="grid grid-cols-4 gap-9 ">
            <div className="loc-box s-h p1">
                <h4>Pakistan <span>HQ</span></h4>
                <div class="divider"></div>
               <ul className="add">
                <li>
                    <div className="addbx">
                        <h2>Address</h2>
                        <p>41-J, Street-3, Block-6, PECHS, Karachi<br/> Karachi City, Sindh 75400</p>
                    </div>
                </li>
                <li>
                    <div className="addbx">
                        <h2>Phone</h2>
                        <p>(021) 34303051-55</p>
                    </div>
                </li>
                <li>
                    <div className="addbx">
                        <h2>Email</h2>
                        <p>contact@innovative-net.com</p>
                    </div>
                </li>
               </ul>
            </div>
            <div className="loc-box s-h p1">
                <h4>Canada</h4>
                <div class="divider"></div>
               <ul className="add">
                <li>
                    <div className="addbx">
                        <h2>Address</h2>
                        <p>212 Coral Sands Place NE Calgary AB T3J 3J2,<br/> main street</p>
                    </div>
                </li>
                <li>
                    <div className="addbx">
                        <h2>Phone</h2>
                        <p>+16479792001</p>
                    </div>
                </li>
                <li>
                    <div className="addbx">
                        <h2>Email</h2>
                        <p>contact@innovative-net.com</p>
                    </div>
                </li>
               </ul>
            </div>
            <div className="loc-box s-h p1">
                <h4>USA </h4>
                <div class="divider"></div>
               <ul className="add">
                <li>
                    <div className="addbx">
                        <h2>Address</h2>
                        <p>10685-B Hazelhurst Dr. # 29406 Houston,<br/>  TX 77043</p>
                    </div>
                </li>
                <li>
                    <div className="addbx">
                        <h2>Phone</h2>
                        <p>+16479792001</p>
                    </div>
                </li>
                <li>
                    <div className="addbx">
                        <h2>Email</h2>
                        <p>contact@innovative-net.com</p>
                    </div>
                </li>
               </ul>
            </div>
            <div className="loc-box s-h p1">
                <h4>Riyadh </h4>
                <div class="divider"></div>
               <ul className="add">
                <li>
                    <div className="addbx">
                        <h2>Address</h2>
                        <p>Olaya View Tower (العليا ڤيو), Opposite to Kingdom Tower, 2nd Floor, Office No. 4027,King Fahad Road, Riyadh</p>
                    </div>
                </li>
                <li>
                    <div className="addbx">
                        <h2>Phone</h2>
                        <p>(021) 34303051-55</p>
                    </div>
                </li>
              
               </ul>
            </div>
        </div>
        </div>
        <div className="copy py-9 px-14 grid grid-cols-2  items-center ">
        <div className="logo-wrap">
              <div className="logo drop-shadow-2xl">igs</div>
            </div>
            <div className="inpl p1">
                <p>Copyright © 2023 <Link href={'https://innovative-net.com/'} target="_blank"><Image src={inpl} /></Link> All rights reserved.</p>
            </div>
        </div>
        </div>
        
      </section>
    </>
  );
}
