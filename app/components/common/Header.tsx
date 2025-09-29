"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { assets } from "@/public/assets";

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
          <div className="flex items-center">
            <Image src={assets.logo} alt="Logo" width={200} height={200} className="w-20 xl:w-[105px] h-auto object-contain"/>
          </div>

          {/* Desktop Nav */}
          <div className="w-fit rounded-3xl bg-white overflow-hidden hidden xl:block">
            <nav>
              <ul className="flex font-manrope">
                {["About", "Services", "Destinations", "Partners", "Blogs", "Contact"].map(
                  (item, i) => (
                    <li key={i} className="group hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] py-2 xl:py-[12.5px]">
                      <a href="#" className="uppercase font-light leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">{item}</a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>

          {/* Login Button */}
          <div className="ml-auto mr-2 w-fit xl:m-0">
            <button className="font-inter bg-white px-2 py-2 xl:px-5  xl:pt-[15px] xl:pb-[13px] flex items-center gap-[6px] uppercase rounded-full relative group hover:text-white">
              <div className="absolute top-0 left-0 w-0 h-full z-0 group-hover:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
              <span className="relative z-10 font-[300] leading-[1] text-black group-hover:text-white hidden xl:block">
                Partner Login
              </span>
              <span>
                <Image src={assets.user} alt="User" width={20} height={20} className="w-[11px] h-[11px] group-hover:brightness-0 group-hover:invert"/>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5">
              <span className={`block w-6 h-[2px] bg-black transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}/>
              <span className={`block w-6 h-[2px] bg-black transition-all ${isOpen ? "opacity-0" : ""}`}/>
              <span className={`block w-6 h-[2px] bg-black transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}/>
            </button>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-4/5 h-full bg-white shadow-lg z-40 p-6 flex flex-col"
          >
            <nav className="mt-10">
              <ul className="flex flex-col gap-6 font-manrope text-lg">
                {["About", "Services", "Destinations", "Partners", "Blogs", "Contact"].map(
                  (item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border-b pb-2"
                    >
                      <a href="#" onClick={() => setIsOpen(false)}>
                        {item}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
