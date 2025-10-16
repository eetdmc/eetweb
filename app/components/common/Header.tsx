"use client";

import { useEffect, useState } from "react";
import Image from "next/image"; 
import { gsap } from "gsap"; 
import Link from "next/link";
import { commonData } from "./data";
import NavBar from "./NavBar";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky effect after 400px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate body lock when menu is open
  useEffect(() => {
    if (isOpen) {
      gsap.to("body", { overflow: "hidden", duration: 0 });
    } else {
      gsap.to("body", { overflow: "auto", duration: 0 });
    }
  }, [isOpen]);

  return (
    <header
      className={`w-full py-3 xl:py-7 bg-cover pm-noise transition-all duration-300 ${isSticky ? "" : "relative"
        }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src={commonData.headerData.logo} alt="Logo" width={200} height={200} className="w-20 xl:w-[105px] h-auto object-contain"/>
          </Link>
  <NavBar/>
         

          

          
        </div>
      </div>

     
    </header>
  );
};

export default Header;
