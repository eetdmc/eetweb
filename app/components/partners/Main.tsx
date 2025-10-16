"use client";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
const Main = () => {
  useTextReveal({selector: ".heading"});
  useTextReveal({selector: ".subtitle"});
  return (
    <section className="pb-10 xl:pb-[114px] 2xl:pb-[212px]">
      <div className="pm-noise pt-15 xl:pt-25">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[184px]">
            <h3 className="heading text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]">Partners</h3>
            <h1 className="subtitle text-60 xl:text-80 leading-[1.25] font-light text-black max-w-7xl mx-auto">Our Trusted Network of Partners Across the Arabian Gulf</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-center border-b border-primary-light py-10 xl:py-25 max-w-[1135px] mx-auto">
          <p className="text-30 leading-[1.294117647058824] font-light max-w-4xl mx-auto">At EET, we simplify partner selection with competitive terms, exceptional ground services, advanced technology, and a dynamic, experienced team.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default Main;