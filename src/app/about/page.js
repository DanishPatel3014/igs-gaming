"use client"
import Link from "next/link";
import { SmoothScrollProvider, SmoothScrollContext } from "../context/SmoothScroll.context";
import { useContext } from "react";
import Aboutbanner from "@/components/innerbanner/Aboutbanner";
import Header from "@/components/header/Header";
import About from "@/components/about/About";
import Infovideo from "@/components/infovideo/Infovideo";
import Partner from "@/components/partner/Partner";
import Footer from "@/components/footer/Footer";
import Gamecross from "@/components/about/Gamecross";

export default function AboutPage() {
  const { scroll } = useContext(SmoothScrollContext);

  const goToSecondPart = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo("#second-part");
  };

  const goToTop = (event) => {
    event.preventDefault();
    scroll && scroll.scrollTo(0);
  };
  return (
    <SmoothScrollProvider options={{ smooth: true }}>
      <Header />
      <Aboutbanner />
      <About />
      <Gamecross />
      <Infovideo />
      <Partner />
      <Footer />
    </SmoothScrollProvider>
  );
}
