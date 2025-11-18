"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import { commonData } from "./data";
// import NavBar from "./NavBar";
import NavBar from "./NavBar";
import { LogIn } from "lucide-react";
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
      className={`w-full py-3 xl:py-7 bg-cover pm-noise transition-all duration-300 max-w-[1920px] mx-auto overflow-hidden ${
        isSticky ? "" : "relative"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-[20%]">
            <Link href="/" className="flex items-center">
              <Image
                src={commonData.headerData.logo}
                alt="Logo"
                width={200}
                height={200}
                className="w-20 xl:w-[105px] h-auto object-contain"
              />
            </Link>
          </div>
          <div>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          {/* ===== Partner Login Button ===== */}
          <div className="w-[20%] flex gap-2 lg:gap-3 justify-end items-center">
            <Link
              href="/partner-login"
              className="flex-shrink-0 cursor-pointer font-sans bg-white px-2 xl:px-5 h-10 sm:h-12 lg:h-12 w-10 md:w-fit  flex items-center gap-[6px] uppercase rounded-full relative group hover:text-white overflow-hidden"
            >
              {/* expanding black overlay inside the pill */}
              <div className="absolute inset-0 h-full bg-black rounded-full origin-left scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></div>

              {/* button text */}
              <span className="relative z-10 font-[300] leading-[1] text-19 text-black group-hover:text-white hidden lg:block">
                Partner Login
              </span>
              <span className="relative z-10 font-[300] leading-[1] text-primary group-hover:text-white lg:hidden">
                <LogIn size={18} />
              </span>
            </Link>

            <Link
              href="https://online.eet.ae/b2b"
              target="_blank"
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 cursor-pointer font-inter bg-white flex items-center justify-center uppercase rounded-full relative group hover:text-white overflow-hidden"
            >
              {/* expanding black overlay inside the circle */}
              <div className="absolute inset-0 w-0 h-full z-0 bg-black transition-all duration-300 ease-in-out rounded-full group-hover:w-full"></div>

              {/* icon/content */}
              <span className="relative z-10 flex items-center justify-center">
                <Image
                  src={assets.user}
                  alt="User"
                  width={20}
                  height={20}
                  className="w-[11px] h-[11px] group-hover:brightness-0 group-hover:invert"
                />
              </span>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 lg:hidden ml-1 z-50"
            >
              <span
                className={`block w-6 h-[2px] bg-black transition-all ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black transition-all ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-[2px] bg-black transition-all ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
