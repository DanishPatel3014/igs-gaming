"use client";
import {
  SmoothScrollProvider,
  SmoothScrollContext,
} from "../context/SmoothScroll.context";
import { useContext } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Teambanner from "@/components/innerbanner/Teambanner";
import Ourteam from "@/components/team/Ourteam";
import Workbanner from "@/components/innerbanner/Workbanner";
import Work from "@/components/work/Work";
import Infovideo from "@/components/infovideo/Infovideo";

export default function workpage() {
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
      <Workbanner />
      <Work />
      <Footer />
    </SmoothScrollProvider>
  );
}
