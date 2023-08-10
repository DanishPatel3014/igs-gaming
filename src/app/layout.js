"use client";
import "./globals.css";
import "../assets/css/base.css";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Preloader from "@/components/loaders/Preloader";
import { usePathname } from "next/navigation";
import Link from "next/link";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IGS | Innovative Game Studio",
  description: "Our mission is relentless. At IGS, we yearn for uncharted waters and go beyond creating mere games. We're all about crafting heart-pounding experiences that pump up the adrenaline, ignite joy, and leave players thrilled beyond measure. Just like old times but better than ever!",
};



export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
    
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 8000);
  // }, []);

  return (
    <html lang="en">
      
   
      <body className={inter.className}>
        {/* {
          loading ?
          <Preloader/>
          :
          <main data-scroll-container className="container">
          <div>{children}</div>
        </main>

        } */}
        {/* <Preloader/> */}
        <main data-scroll-container>
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
