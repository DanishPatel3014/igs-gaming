"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="header px-9 py-5" >
        <div className="  mx-auto">
          <div className="grid grid-cols-2">
            <div className="logo-wrap">
              <div className="logo drop-shadow-2xl">igs</div>
            </div>
            <div className="hamburger-wrp text-right">
              <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="hambrger drop-shadow-2xl">
                <div className={isMenuOpen ? "hicon menuOpen" : "hicon"}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={isMenuOpen ? "menuOverlay menuOpen" : "menuOverlay"}></div>
        <div className={isMenuOpen ? "greenCircle menuOpen" : "greenCircle"}></div>
        <div className={isMenuOpen ? "blackCircle menuOpen" : "blackCircle"}>
          <div className="ft-slink mb-28">
            <div className="page14-inner">
              <h1>Home</h1>
              <Link href={"./"}>
                <BsArrowUpRight />
              </Link>
              <div className="center14"></div>
            </div>
            <div className="page14-inner">
              <h1>About Us</h1>
              <Link href={"/about"}>
                <BsArrowUpRight />
              </Link>
              <div className="center14"></div>
            </div>
            <div className="page14-inner">
              <h1>Services</h1>
              <Link href={"/services"}>
                <BsArrowUpRight />
              </Link>
              <div className="center14"></div>
            </div>
            <div className="page14-inner">
              <h1>Work</h1>
              <Link href={"/work"}>
                <BsArrowUpRight />
              </Link>
              <div className="center14"></div>
            </div>
            <div className="page14-inner">
              <h1>Team</h1>
              <Link href={"/team"}>
                <BsArrowUpRight />
              </Link>
              <div className="center14"></div>
            </div>
            <div className="page14-inner">
              <h1>Contact</h1>
              <Link href={"/contact"}>
                <BsArrowUpRight />
              </Link>
              <div className="center14"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
