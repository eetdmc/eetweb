"use client";

import { useEffect, useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap"; 
import { commonData } from "./data";
import { assets } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);  
const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  // Animate body lock when menu is open
  useEffect(() => {
    if (isOpen) {
      gsap.to("body", { overflow: "hidden", duration: 0 });
    } else {
      gsap.to("body", { overflow: "auto", duration: 0 });
    }
  }, [isOpen]);

  return (
    <> 
          {/* Desktop Nav */}
          <div className="w-fit rounded-3xl bg-white   hidden xl:block">
            <nav>
              <ul className="flex font-manrope">
                {commonData.headerData.menuItems.map(
                  (item, i) => (
                    <li key={i} 
                     onMouseEnter={() => setHoveredMenu(item.label)}
            onMouseLeave={() => setHoveredMenu(null)}
            className="group relative rounded-full hover:bg-primary transition-all duration-300 ease-in-out px-[17.5px] py-2 xl:py-[12.5px] first:pl-30px last:pr-30px">
                      <a href={item.href} className="uppercase font-light w-full h-full leading-[1] text-base font-manrope text-black group-hover:text-white group-hover:scale-110 transition-all duration-300 ease-in-out">{item.label}</a>
                   {/* Submenu */}
            {item.submenu && (
              <AnimatePresence>
                {hoveredMenu === item.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute left-0 top-full mt-2 min-w-[290px] bg-white shadow-xl rounded-lg py-2 px-3 flex flex-col  z-50"
                  >
                    {item.submenu.map((sub) => (
                      <li key={sub.label} className="border-b border-[#f3f3f3] last:border-b-0 py-2 linkhrs ">
                        <Link
                          href={sub.href}
                          className="flex gap-5 text-[16px] font-light text-black hover:text-primary hover:translate-x-1  transition-all duration-300 "
                        >
                          <span>{sub.label}</span>
                          <span className="bg-primary rounded-full p-2 w-[27px] h-[27px] opacity-0 blks transition-all duration-500">
                            <Image
                              src="/assets/arrow.svg"
                              alt="Arrow"
                              className="rotate-45"
                              width={20}
                              height={20}
                            />
                          </span>
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            )}
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
               
                     {commonData.headerData.menuItems.map(
                  (item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="border-b pb-2"
                    >
                      <a href="#" onClick={() => setIsOpen(false)}>
                   {item.label}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
