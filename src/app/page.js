"use client";

import {
  SmoothScrollProvider,
  SmoothScrollContext,
} from "./context/SmoothScroll.context";
import { useContext, useEffect } from "react";
import Link from "next/link";
import Mainbanner from "@/components/models/Mainbanner";
import Header from "@/components/header/Header";
import { FaBeer } from 'react-icons/fa';
import About from "@/components/about/About";
import Work from "@/components/work/Work";
import Services from "@/components/Services/Services";
import Infovideo from "@/components/infovideo/Infovideo";
import Partner from "@/components/partner/Partner";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import Preloader from "@/components/loaders/Preloader";

export default function Home() {

  useEffect(() => {
    const root = document.querySelector('html')

    // Real cursor element
    const cursor = document.createElement('div')
    cursor.classList.add('cursor')
    root.appendChild(cursor)
    
    // Following extra cursor element
    const follower = document.createElement('div')
    follower.classList.add('cursor', 'cursor__follower')
    root.appendChild(follower)
    
    
    root.addEventListener('mousemove', (e) => {
      setPosition(follower, e)
      setPosition(cursor, e)
    })
    
    function setPosition(element, e) {
      element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }
  }, [])
  

  const { scroll } = useContext(SmoothScrollContext);

  // const goToSecondPart = (event) => {
  //   event.preventDefault();
  //   scroll && scroll.scrollTo("#second-part");
  // };

  // const goToTop = (event) => {
  //   event.preventDefault();
  //   scroll && scroll.scrollTo(0);
  // };
  return (
   <>
    <Preloader/>
    <SmoothScrollProvider  options={{ smooth: true }}   >
      <Header />
      <Mainbanner />
      <About />
      <Work />
      <Infovideo />
      <Services />
      <Partner />
      <Footer />
    </SmoothScrollProvider>
   </>
  );
}
