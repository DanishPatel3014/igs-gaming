"use client";
import { SmoothScrollProvider, SmoothScrollContext } from "../context/SmoothScroll.context";
import { useContext } from "react";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Servicesbanner from "@/components/innerbanner/Servicesbanner";
import Servicesdetails from "@/components/Services/Servicesdetails";
import Teambanner from "@/components/innerbanner/Teambanner";
import Ourteam from "@/components/team/Ourteam";

export default function Teampage() {
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
    <Teambanner/>
     <Ourteam/>
     <Footer/>
      </SmoothScrollProvider>
    );
}
