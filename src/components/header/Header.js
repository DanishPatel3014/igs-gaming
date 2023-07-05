"use client";
import React from "react";

export default function Header() {
  return (
    <>
      <div className="header px-9 py-5" data-scroll-section>
        <div className="  mx-auto">
          <div className="grid grid-cols-2">
            <div className="logo-wrap">
              <div className="logo drop-shadow-2xl">igs</div>
            </div>
            <div className="hamburger-wrp text-right">
              <div className="hambrger drop-shadow-2xl">
                <div className="hicon">
                <span></span>
                <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
