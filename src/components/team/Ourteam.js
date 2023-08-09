import React from "react";
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
                  The Masterminds <br/>Behind Our Games
                  </h1>
                </div>
              </li>
            </ul>
            <div className="s-h ">
              <h2>
              Meet our passionate team of 
              <br/>
gamers, creators, and dreamers 

              </h2>
            </div>
          </div>
          <div className="team-img mb-36">
            <div
              className="o-image_wrapper"
              data-scroll
              data-scroll-call="dynamicBackground"
              data-scroll-repeat
            >
              <div className="o-image" data-scroll>
                <Image 
                  className="c-speed-block_image"
                  src={'/team/team.jpg'}
                  width={1920}  height={900}
                  alt="Locomotive image from unsplash"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
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
                      <h4>ahsan iqbal<span><Image alt="crown" src={'/team/crown.png'} width={32} height={32} /></span>ahsan iqbal<span><Image alt="money" src={'/team/money.png'} width={32} height={32}/></span>ahsan iqbal<span><Image alt="cal" src={'/team/cal.png'} width={32} height={32}/></span></h4>
                      <h4>ahsan iqbal<span><Image alt="crown" src={'/team/crown.png'} width={32} height={32} /></span>ahsan iqbal<span><Image alt="money" src={'/team/money.png'} width={32} height={32}/></span>ahsan iqbal<span><Image alt="cal" src={'/team/cal.png'} width={32} height={32}/></span></h4>
                    </div>
                  </div>
                  <Image alt="ahsan" src={'/team/ahsan.png'} width={600} height={750} />
                </div>
                <div className="tctnwp grid grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>ahsan iqbal</h4>
                  <h3>chief executive officer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Obaid Ahmed Khan<span><Image alt="sleep" src={'/team/sleep.png'} width={32} height={32} /></span>Obaid Ahmed Khan<span><Image alt="bike" src={'/team/bike.png'} width={32} height={32} /></span>Obaid Ahmed Khan<span><Image alt="ani" src={'/team/ani.png'} width={32} height={32} /></span></h4>
                      <h4>Obaid Ahmed Khan<span><Image alt="sleep" src={'/team/sleep.png'} width={32} height={32} /></span>Obaid Ahmed Khan<span><Image alt="bike" src={'/team/bike.png'} width={32} height={32} /></span>Obaid Ahmed Khan<span><Image alt="ani" src={'/team/ani.png'} width={32} height={32} /></span></h4>
                    </div>
                  </div>
                  <Image alt="obid" src={'/team/obid.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Obaid Ahmed Khan</h4>
                  <h3>Sr. Motion Graphic Artist</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Muhammad Mukarram<span><Image alt="ggame" src={'/team/ggame.png'} width={32} height={32}/></span>Muhammad Mukarram<span><Image alt="movie" src={'/team/movie.png'} width={32} height={32} /></span>Muhammad Mukarram<span><Image alt="act" src={'/team/act.png'} width={32} height={32} /></span></h4>
                      <h4>Muhammad Mukarram<span><Image alt="ggame" src={'/team/ggame.png'} width={32} height={32}/></span>Muhammad Mukarram<span><Image alt="movie" src={'/team/movie.png'} width={32} height={32} /></span>Muhammad Mukarram<span><Image alt="act" src={'/team/act.png'} width={32} height={32} /></span></h4>
                    </div>
                  </div>
                  <Image alt="muk" src={'/team/muk.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Muhammad Mukarram</h4>
                  <h3>Game Developer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Khizar Hayat<span><Image alt="dance" src={'/team/dance.png'} width={32} height={32}/></span>hizar Hayat<span><Image alt="movie" src={'/team/movie.png'} width={32} height={32} /></span>hizar Hayat<span><Image alt="paint" src={'/team/paint.png'} width={32} height={32} /></span></h4>
                      <h4>Khizar Hayat<span><Image alt="dance" src={'/team/dance.png'} width={32} height={32}/></span>hizar Hayat<span><Image alt="movie" src={'/team/movie.png'} width={32} height={32} /></span>hizar Hayat<span><Image alt="paint" src={'/team/paint.png'} width={32} height={32} /></span></h4>
                    </div>
                  </div>
                  <Image alt="khi" src={'/team/khi.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Khizar Hayat</h4>
                  <h3> Jr. Concept Artist</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Midhat Nazim<span><Image alt="travel" src={'/team/travel.png'} width={32} height={32}/></span>Midhat Nazim<span><Image alt="food" src={'/team/food.png'} width={32} height={32} /></span>Midhat Nazim<span><Image alt="smile" src={'/team/smile.png'} width={32} height={32} /></span></h4>
                      <h4>Midhat Nazim<span><Image alt="travel" src={'/team/travel.png'} width={32} height={32}/></span>Midhat Nazim<span><Image alt="food" src={'/team/food.png'} width={32} height={32} /></span>Midhat Nazim<span><Image alt="smile" src={'/team/smile.png'} width={32} height={32} /></span></h4>
                    </div>
                  </div>
                  <Image alt="mid" src={'/team/mid.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Midhat Nazim</h4>
                  <h3> Head of Content Marketing</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Daniyal Khatib<span><Image alt="movie" src={'/team/movie.png'} width={32} height={32} /></span>Daniyal Khatib<span><Image alt="act" src={'/team/act.png'} width={32} height={32} /></span>Daniyal Khatib<span><Image alt="food" src={'/team/food.png'} width={32} height={32}/></span></h4>
                      <h4>Daniyal Khatib<span><Image alt="movie" src={'/team/movie.png'} width={32} height={32} /></span>Daniyal Khatib<span><Image alt="act" src={'/team/act.png'} width={32} height={32} /></span>Daniyal Khatib<span><Image alt="food" src={'/team/food.png'} width={32} height={32}/></span></h4>
                    </div>
                  </div>
                  <Image alt="daniyal" src={'/team/daniyal.png'} width={600}  height={750} />
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Daniyal Khatib</h4>
                  <h3>Head of Sales & Marketing</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Muhammad Ishaq Patni <span><Image alt="vr" src={'/team/vr.png'} width={32} height={32}/></span>Muhammad Ishaq Patni <span><Image alt="game" src={'/team/game.png'} width={32} height={32}/></span>Muhammad Ishaq Patni <span><Image alt="movie" src={'/team/movie.png'} width={32} height={32}/></span></h4>
                      <h4>Muhammad Ishaq Patni <span><Image alt="vr" src={'/team/vr.png'} width={32} height={32}/></span>Muhammad Ishaq Patni <span><Image alt="game" src={'/team/game.png'} width={32} height={32}/></span>Muhammad Ishaq Patni <span><Image alt="movie" src={'/team/movie.png'} width={32} height={32}/></span></h4>
                    </div>
                  </div>
                  <Image alt="ishaq" src={'/team/ishaq.png'} width={600} height={750} />
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Muhammad Ishaq Patni</h4>
                  <h3>Game Producer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Irfan Ahmed Shah<span><Image alt="act" src={'/team/act.png'} width={32} height={32}/></span>Irfan Ahmed Shah<span><Image alt="mark" src={'/team/mark.png'} width={32} height={32} /></span>Irfan Ahmed Shah<span><Image alt="vr" src={'/team/vr.png'} width={32} height={32} /></span></h4>
                      <h4>Irfan Ahmed Shah<span><Image alt="act" src={'/team/act.png'} width={32} height={32}/></span>Irfan Ahmed Shah<span><Image alt="mark" src={'/team/mark.png'} width={32} height={32} /></span>Irfan Ahmed Shah<span><Image alt="vr" src={'/team/vr.png'} width={32} height={32} /></span></h4>
                
                    </div>
                  </div>
                  <Image alt="irfan" src={'/team/irfan.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Irfan Ahmed Shah</h4>
                  <h3>Graphics Designer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Syed Ahraz Zaheen<span><Image alt="paint" src={'/team/paint.png'} width={32} height={32}/></span>Syed Ahraz Zaheen<span><Image alt="swi" src={'/team/swi.png'} width={32} height={32}/></span>Syed Ahraz Zaheen<span><Image alt="game" src={'/team/game.png'} width={32} height={32}/></span></h4>
                      <h4>Syed Ahraz Zaheen<span><Image alt="paint" src={'/team/paint.png'} width={32} height={32}/></span>Syed Ahraz Zaheen<span><Image alt="swi" src={'/team/swi.png'} width={32} height={32}/></span>Syed Ahraz Zaheen<span><Image alt="game" src={'/team/game.png'} width={32} height={32}/></span></h4>
                    </div>
                  </div>
                  <Image alt="ahraz" src={'/team/ahraz.png'} width={600} height={750}/>
                </div> 
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Syed Ahraz Zaheen</h4>
                  <h3>Sr. Concept Artist</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
                </ul>
                  </div>
                </div>
              </div>
              <div className="tspace2"></div>
              <div className="twrap">
                <div className="timg">
                <div className="tlinewarp s-h">
                    <div className="tlh tline1">
                      <h4> Lead ui ux  developer </h4>
                      <h4> Lead ui ux  developer </h4>
                      <h4> Lead ui ux  developer </h4>
                      <h4> Lead ui ux  developer </h4>
                      <h4> Lead ui ux  developer </h4>
                    

                    </div>
                    <div className="tlh tline2">
                    <h4>Danish Patel<span><Image alt="gym" src={'/team/gym.png'} width={32} height={32} /></span>Danish Patel<span><Image alt="boox" src={'/team/boox.png'} width={32} height={32} /></span>Danish Patel<span><Image alt="cyc" src={'/team/cyc.png'} width={32} height={32}/></span></h4>
                    <h4>Danish Patel<span><Image alt="gym" src={'/team/gym.png'} width={32} height={32} /></span>Danish Patel<span><Image alt="boox" src={'/team/boox.png'} width={32} height={32} /></span>Danish Patel<span><Image alt="cyc" src={'/team/cyc.png'} width={32} height={32}/></span></h4>
                    
                    </div>
                  </div>
                  <Image alt="Danish  Patel" src={'/team/danish.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Danish Patel</h4>
                  <h3>Lead ui ux  developer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>anusha ather<span><Image alt="read" src={'/team/read.png'} width={32} height={32}/></span>anusha ather<span><Image alt="cookie" src={'/team/cookie.png'} width={32} height={32}/></span>anusha ather<span><Image alt="coffee" src={'/team/coffee.png'} width={32} height={32}/></span></h4>
                      <h4>anusha ather<span><Image alt="read" src={'/team/read.png'} width={32} height={32}/></span>anusha ather<span><Image alt="cookie" src={'/team/cookie.png'} width={32} height={32}/></span>anusha ather<span><Image alt="coffee" src={'/team/coffee.png'} width={32} height={32}/></span></h4>
                    
                    </div>
                  </div>
                  <Image alt="Anusha Ather" src={'/team/anusha.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>anusha ather</h4>
                  <h3>Senior Content Writer</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
                      <h4>Fatima Ali<span><Image alt="hash" src={'/team/hash.png'} width={32} height={32}/></span>Fatima Ali<span><Image alt="social" src={'/team/social.png'} width={32} height={32}/></span>Fatima Ali<span><Image alt="mark" src={'/team/mark.png'} width={32} height={32}/></span></h4>
                      <h4>Fatima Ali<span><Image alt="hash" src={'/team/hash.png'} width={32} height={32}/></span>Fatima Ali<span><Image alt="social" src={'/team/social.png'} width={32} height={32}/></span>Fatima Ali<span><Image alt="mark" src={'/team/mark.png'} width={32} height={32}/></span></h4>
                     
                    
                    </div>
                  </div>
                  <Image alt="fatima" src={'/team/fatima.png'} width={600} height={750}/>
                </div>
                <div className="tctnwp grid-cols-1 md:grid-cols-2 items-center">
                  <div className="tctn s-h">
                  <h4>Fatima Ali</h4>
                  <h3>Social Media Executive</h3>
                  </div>
                  <div className="tctn s-h">
                <ul className="tlist">
                  <li><Link href={''}><FaLinkedinIn/></Link></li>
                  
                  
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
