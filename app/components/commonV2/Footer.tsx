"use client";
import Image from "next/image";
import { assets } from "@/public/assets";
import Link from "next/link";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
import { fetchMenuItems } from "@/lib/menuItems";
import { useEffect, useState } from "react";
import { MenuItem } from "./type";

const Footer = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    const loadMenu = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);
    };
    loadMenu();
  }, []);

  const services = menuItems.find((m) => m.label === "Services")?.submenu || [];
  const destinations =
    menuItems.find((m) => m.label === "Destinations")?.submenu || [];

  return (
    <footer>
      <div className="bg-black ">
        <div className="container">
          <div className="relative z-0">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute -top-[95px] sm:-top-[135px] md:-top-[220px] lg:-top-[160px] 2xl:-top-[170px]
               w-full  left-0"
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
              <div
                className="relative flex flex-col h-full justify-center items-center z-20 
              px-8 xl:px-30 2xl:pl-[142px] 2xl:pr-[218px] py-10 md:py-20 lg:py-[115px]"
              >
                <div className="flex items-center w-full justify-between flex-wrap sm:flex-nowrap gap-5">
                  <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-[24ch] text-50 font-[230] text-white leading-[1]"
                  >
                    Start Your Destination Experience Today
                  </motion.h2>

                  <Link href={"/contact-us"}>
                    <motion.button
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.4,
                        duration: 0.7,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="m-auto sm:m-0 group cursor-pointer rounded-full font-sans border-2 border-white min-w-max px-3 sm:px-4 py-1 sm:py-3 xl:px-10 xl:py-5 3xl:px-[65px] flex items-center gap-1  sm:gap-5 text-white transition-colors hover:backdrop-blur-[1px] "
                    >
                      <span className="transition-transform text-19 font-[250] leading-[2.368421052631579] duration-500 ease-in-out group-hover:translate-x-2">
                        Let&apos;s Connect
                      </span>

                      <div className="w-5 h-5 md:w-[25px] md:h-[25px] xl:w-[50px] xl:h-[50px] flex relative overflow-hidden">
                        <Image
                          src={assets.arrowPrimary}
                          alt="Arrow icon"
                          width={44}
                          height={44}
                          className="w-5 xl:w-auto md:w-10 h-auto transition-transform duration-500 ease-in-out group-hover:translate-x-[51px] group-hover:-translate-y-[51px] scale-50 3xl:scale-100"
                        />
                        <Image
                          src={assets.arrowPrimary}
                          alt="Arrow icon"
                          width={50}
                          height={50}
                          className="w-5 xl:w-auto md:w-10 h-auto transition-transform duration-500 ease-in-out -translate-x-[102px] translate-y-[51px] group-hover:-translate-x-[51px] group-hover:-translate-y-[0px] scale-50 3xl:scale-100"
                        />
                      </div>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="pt-35 lg:pt-[201px] 2xl:pt-[314px]">
            <div className="hidden xl:grid grid-cols-[1fr_1fr_auto] 3xl:grid-cols-[583px_1fr_auto]">
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-19 leading-lhtext-19 font-[500] text-white font-sans pb-3 xl:pb-[24px] hidden xl:block"
                >
                  Follow Us
                </motion.h3>
              </div>
              <div>
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-19 leading-lhtext-19 font-medium text-white font-sans pb-3 xl:pb-[24px] hidden xl:block"
                >
                  Contact
                </motion.h3>
              </div>
              <div className="2xl:pr-55">
                <motion.h3
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-19 leading-lhtext-19 font-medium text-white font-sans pb-3 xl:pb-[24px] hidden xl:block"
                >
                  Address
                </motion.h3>
                <p className="text-19 leading-lhtext-19 font-light text-white font-sans xl:h-0 opacity-0">
                  East Europe Travel & Tourism LLC
                  <br />
                  PO Box 212371| Suite 12AE02 | iRise Tower
                  <br />
                  Barsha Heights (Tecom)
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-0% from-white/10 via-52% via-white/100 to-100% to-white/10 mb-5 xl:mb-[36px] "></div>
            <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[1fr_1fr_auto] 3xl:grid-cols-[583px_1fr_auto] gap-y-10 xl:gap-y-0">
              <div>
                <h3 className="text-19 leading-lhtext-19 font-light text-white font-sans pb-3 xl:pb-[24px] xl:hidden underline xl:underline-none underline-offset-8">
                  Follow Us
                </h3>
                <div>
                  <ul>
                    <motion.li
                      variants={moveUp(0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="text-19 leading-lhtext-19 font-[200] text-white hover:text-white/70 transition-colors duration-300"
                    >
                      <Link
                        href={
                          "https://www.instagram.com/eet_destinationmanagement"
                        }
                        target="_blank"
                      >
                        Instagram
                      </Link>
                    </motion.li>
                    <motion.li
                      variants={moveUp(0.4)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="text-19 leading-lhtext-19 font-[200] text-white hover:text-white/70 transition-colors duration-300"
                    >
                      <Link
                        href={
                          "https://www.linkedin.com/company/eet-destinationmanagement"
                        }
                        target="_blank"
                      >
                        Linkedin
                      </Link>
                    </motion.li>
                    <motion.li
                      variants={moveUp(0.6)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="text-19 leading-lhtext-19 font-[200] text-white hover:text-white/70 transition-colors duration-300"
                    >
                      <Link href={"#"}>Facebook</Link>
                    </motion.li>
                    <motion.li
                      variants={moveUp(0.8)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="text-19 leading-lhtext-19 font-[200] text-white hover:text-white/70 transition-colors duration-300"
                    >
                      <Link href={"#"}>X</Link>
                    </motion.li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-19 leading-lhtext-19 font-medium text-white font-inter pb-3 xl:pb-[24px] xl:hidden underline xl:underline-none underline-offset-8">
                  Contact
                </h3>
                <ul>
                  <motion.li
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-19 leading-lhtext-19 font-[200] text-white hover:text-white/70 transition-colors duration-300"
                  >
                    <Link href={"tel:+97144229563"}>+971 4 422 9563</Link>
                  </motion.li>
                  <motion.li
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-19 leading-lhtext-19 font-[200] text-white hover:text-white/70 transition-colors duration-300"
                  >
                    <Link href={"mailto:info@eet.ae"}>info@eet.ae</Link>
                  </motion.li>
                </ul>
              </div>
              <div className="2xl:pr-55">
                <h3 className="text-19 leading-lhtext-19 font-light text-white font-inter pb-3 xl:pb-[24px] xl:hidden underline xl:underline-none underline-offset-8">
                  Address
                </h3>
                <motion.p
                  variants={moveUp(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-19 leading-lhtext-19 font-[200] text-white font-sans "
                >
                  East Europe Travel & Tourism LLC
                  <br />
                  PO Box 212371| Suite 12AE02 | iRise Tower
                  <br />
                  Barsha Heights (Tecom)
                  <br />
                  Dubai, UAE
                </motion.p>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gradient-to-r from-0% from-white/10 via-52% via-white/100 to-100% to-white/10 mt-5 xl:mt-[68px] mb-5 xl:mb-[50px]"></div>
          <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-[1fr_1fr_auto] 3xl:grid-cols-[583px_1fr_auto]">
            <div>
              <motion.h3
                variants={moveUp(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-19 leading-lhtext-19 font-medium text-white pb-3 xl:pb-[24px] "
              >
                Destinations
              </motion.h3>
              {destinations.map((item, i) => (
                <motion.p
                  key={i}
                  variants={moveUp(i * 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="text-19 leading-lhtext-19 font-[200] text-white font-sans hover:text-white/70 transition-colors"
                >
                  <Link href={item.href}>{item.label}</Link>
                </motion.p>
              ))}
              {/* <div>
                <ul>
                  <motion.li
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-colors"
                  >
                    <Link href={"/destinations/uae"}>UAE</Link>
                  </motion.li>
                  <motion.li
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-colors"
                  >
                    <Link href={"/destinations/oman"}>Oman</Link>
                  </motion.li>
                  <motion.li
                    variants={moveUp(0.6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-colors"
                  >
                    <Link href={"/destinations/qatar"}>Qatar</Link>
                  </motion.li>
                  <motion.li
                    variants={moveUp(0.8)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-colors"
                  >
                    <Link href={"/destinations/saudi-arabia"}>
                      Saudi Arabia
                    </Link>
                  </motion.li>
                </ul>
              </div> */}
            </div>
            <div>
              <motion.h3
                variants={moveUp(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-19 leading-lhtext-19 font-medium text-white pb-3 xl:pb-[24px]"
              >
                Services
              </motion.h3>
              <ul>
                {services.map((item, i) => (
                  <motion.p
                    key={i}
                    variants={moveUp(i * 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="text-19 leading-lhtext-19 font-[200] text-white font-sans hover:text-white/70 transition-colors"
                  >
                    <Link href={"/services"}>{item.label}</Link>
                  </motion.p>
                  // <motion.li
                  //   variants={moveUp(0.4)}
                  //   initial="hidden"
                  //   whileInView="show"
                  //   viewport={{ once: true }}
                  //   className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-colors"
                  // >
                  //   <Link href={"/services/mice"}>MICE</Link>
                  // </motion.li>
                  // <motion.li
                  //   variants={moveUp(0.6)}
                  //   initial="hidden"
                  //   whileInView="show"
                  //   viewport={{ once: true }}
                  //   className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-colors"
                  // >
                  //   <Link href={"/services/cruise-liners"}>Cruise Liners</Link>
                  // </motion.li>
                  // <motion.li
                  //   variants={moveUp(0.8)}
                  //   initial="hidden"
                  //   whileInView="show"
                  //   viewport={{ once: true }}
                  //   className="text-19 leading-lhtext-19 font-extralight text-white/70 font-inter hover:text-white transition-colors"
                  // >
                  //   <Link href={"/services/experiences"}>Experiences</Link>
                  // </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-[#191919] py-3 xl:py-[17px] mt-5 xl:mt-[74px]">
          <div className="container">
            <p className="text-14 leading-[1.2] xl:leading-[2.857142857142857] font-light text-white font-sans opacity-50">
              Copyright {new Date().getFullYear()}© East Europe Travel & Tourism
              LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
