"use client";

import {
  SmoothScrollProvider,
  SmoothScrollContext,
} from "./context/SmoothScroll.context";
import { useContext } from "react";
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

export default function Home() {

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
    <SmoothScrollProvider options={{ smooth: true }}   >
      <Header />
      <Mainbanner />
      <About />
      <Work />
      <Infovideo />
      <Services />
      <Partner />
      <Footer />
    </SmoothScrollProvider>
  );
}
