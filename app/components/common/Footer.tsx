'use client';
import Image from "next/image";
import { assets } from "@/public/assets";
import Link from "next/link";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black ">
        <div className="container">
          <div className="relative z-0">
           <motion.div
      initial={{ y: 100 }}              
      whileInView={{  y: 0 }}           
      viewport={{ once: true, amount: 0.2 }}         
      transition={{ duration: 0.8, ease: "easeOut" }}  
      className="absolute -top-[185px] md:-top-[250px] lg:-top-[150px] xl:-top-[215px] w-full h-auto xl:h-auto xl:max-h-[435px] left-0"
    >
      {/* Background image */}
      <div className="w-full h-full absolute z-0">
        <Image
          src={assets.footerImg}
          alt=""
          width={1700}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute top-0 bg-black/60 w-full h-full z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-8 xl:px-[142px] py-10 md:py-18 xl:py-20 3xl:py-[145px]">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="3xl:max-w-4xl text-50 xl:text-60 3xl:text-70 font-light text-white leading-[1]"
          >
            Start Your Destination Experience Today
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group cursor-pointer rounded-full font-inter border border-white min-w-max px-4 py-3 xl:px-8 xl:py-3 3xl:px-[65px] 3xl:py-[49.5px]
              flex items-center gap-5 text-base xl:text-[30px] font-light leading-[1.2] 
              text-white transition-all duration-500 ease-in-out hover:backdrop-blur-[1px]"
          >
            <span className="transition-transform duration-500 ease-in-out group-hover:translate-x-2">
              Let&apos;s Connect
            </span>

            <div className="w-8 h-8 md:w-[25px] md:h-[25px] flex relative overflow-hidden">
              <Image
                src={assets.arrowPrimary}
                alt="Arrow icon"
                width={50}
                height={50}
                className="w-5 xl:w-5 md:w-10 h-auto transition-transform duration-500 ease-in-out group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:scale-[.8]"
              />
              <Image
                src={assets.arrowPrimary}
                alt="Arrow icon"
                width={50}
                height={50}
                className="w-5 xl:w-5 md:w-10 h-auto transition-transform duration-500 ease-in-out -translate-x-[51px] translate-y-[30px] group-hover:-translate-x-[25px] group-hover:-translate-y-[0px]"
              />
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
          </div>
          <div className="pt-20 lg:pt-[201px] 2xl:pt-[201px] 3xl:pt-[391px]">
            <div className="hidden xl:grid grid-cols-[1fr_1fr_auto] 3xl:grid-cols-[583px_1fr_auto]">
              <div>
                <h3 className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter pb-3 xl:pb-[24px] hidden xl:block">Follow Us</h3>
              </div>
              <div>
                <h3 className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter pb-3 xl:pb-[24px] hidden xl:block">Contact</h3>
              </div>
              <div>
                <h3 className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter pb-3 xl:pb-[24px] hidden xl:block">Address</h3>
                <p className="text-19 leading-lhtext-19 font-extralight text-white font-inter xl:h-0 opacity-0">East Europe Travel & Tourism LLC<br />
                  PO Box 212371| Suite 12AE02 | iRise Tower<br />
                  Barsha Heights (Tecom)<br />
                  Dubai, UAE</p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-0% from-white/10 via-52% via-white/100 to-100% to-white/10 mb-5 xl:mb-[36px] "></div>
            <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[1fr_1fr_auto] 3xl:grid-cols-[583px_1fr_auto] gap-y-10 xl:gap-y-0">
              <div>
                <h3 className="text-19 leading-lhtext-19 font-light text-white/70 font-inter pb-3 xl:pb-[24px] xl:hidden underline xl:underline-none underline-offset-8">Follow Us</h3>
                <div>
                  <ul>
                    <li className="text-30 leading-lhtext-30 font-extralight text-white">
                      <Link href={"#"}>Instagram</Link>
                    </li>
                    <li className="text-30 leading-lhtext-30 font-extralight text-white">
                      <Link href={"#"}>Linkedin</Link>
                    </li>
                    <li className="text-30 leading-lhtext-30 font-extralight text-white">
                      <Link href={"#"}>Facebook</Link>
                    </li>
                    <li className="text-30 leading-lhtext-30 font-extralight text-white">
                      <Link href={"#"}>X</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-19 leading-lhtext-19 font-light text-white/70 font-inter pb-3 xl:pb-[24px] xl:hidden underline xl:underline-none underline-offset-8">Contact</h3>
                <ul>
                  <li className="text-50 leading-[1.34] font-extralight text-white">
                    <Link href={"tel:+97144229563"}>+971 4 422 9563</Link>
                  </li>
                  <li className="text-50 leading-[1.34] font-extralight text-white">
                    <Link href={"mailto:info@eet.ae"}>info@eet.ae</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-19 leading-lhtext-19 font-light text-white/70 font-inter pb-3 xl:pb-[24px] xl:hidden underline xl:underline-none underline-offset-8">Address</h3>
                <p className="text-19 leading-lhtext-19 font-extralight text-white font-inter ">East Europe Travel & Tourism LLC<br />
                  PO Box 212371| Suite 12AE02 | iRise Tower<br />
                  Barsha Heights (Tecom)<br />
                  Dubai, UAE</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-0% from-white/10 via-52% via-white/100 to-100% to-white/10 mt-5 xl:mt-[68px] mb-5 xl:mb-[50px]"></div>
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[1fr_1fr_auto] 3xl:grid-cols-[583px_1fr_auto]">
            <div>
              <h3 className="text-30 leading-[1.03448275862069] font-extralight text-white pb-3 xl:pb-[24px] ">Destinations</h3>
              <div>
                <ul>
                  <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                    <Link href={"/destinations/uae"}>UAE</Link>
                  </li>
                  <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                    <Link href={"/destinations/oman"}>Oman</Link>
                  </li>
                  <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                    <Link href={"/destinations/qatar"}>Qatar</Link>
                  </li>
                  <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                    <Link href={"/destinations/saudi-arabia"}>Saudi Arabia</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-30 leading-[1.03448275862069] font-extralight text-white pb-3 xl:pb-[24px]">Services</h3>
              <ul>
                <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                  <Link href={"/services/hotel-leisure-services"}>Hotel & Leisure Services</Link>
                </li>
                <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                  <Link href={"/services/mice"}>MICE</Link>
                </li>
                <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                  <Link href={"/services/cruise-liners"}>Cruise Liners</Link>
                </li>
                <li className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-all duration-300">
                  <Link href={"/services/experiences"}>Experiences</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="bg-[#191919] py-3 xl:py-[17px] mt-5 xl:mt-[74px]">
          <div className="container">
            <p className="text-14 leading-[1.2] xl:leading-[2.857142857142857] font-light text-white font-inter">Copyright {new Date().getFullYear()}© East Europe Travel & Tourism LLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;