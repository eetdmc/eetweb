"use client";
import { motion } from "motion/react";
import { moveUp,moveRight,moveLeft } from "../motionVarients";
import { useTextReveal } from "@/hooks/useTextReveal";
import ScrollReveal from "@/components/ui/ScrollReveal";

const Main = () => {
  useTextReveal({ selector: '.heading' });
  useTextReveal({ selector: '.subtitle' });
  return (
    <section className="pb-15 xl:pb-50 ">
      <div className="pm-noise pt-10 xl:pt-25">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px] heading">UAE</h3>
            <h1 className="text-60 xl:text-80 leading-[1.25] font-light text-black max-w-7xl mx-auto subtitle">Explore the UAE with EET – Where Luxury Meets Tradition</h1>
          </div>
        </div>
      </div>
      <div className="mb-10 xl:mb-25 ">
        {/* <Image src="/assets/images/destinations/details/uae-bnr.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[750px] object-cover" /> */}
        <div className="grid grid-cols-[4fr_1.5fr]">
          <motion.video variants={moveRight(0.4)} initial="hidden" animate ="show" viewport={{once: true,amount: "all"}} src="/assets/videos/uae-1.mp4" autoPlay loop muted className="h-full w-full object-cover max-h-[750px]"></motion.video>
          <motion.video variants={moveLeft(0.5)} initial="hidden" animate="show" viewport={{once: true,amount: "all"}} src="/assets/videos/uae-2.mp4" autoPlay loop muted className="h-full w-full object-cover max-h-[750px]"></motion.video>
        </div>
      </div>
      <div className="container">
        <div className="xl:max-w-[1135px] mx-auto mr-10 xl:mr-[107px] 2xl:mr-[147px]">
          <div className="border-b border-primary-light pb-10 xl:pb-[150px]">
            <motion.p variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-30 leading-[1.333333333333333] font-light ">
              From iconic skylines to golden deserts, the UAE offers experiences that are both inspiring and unforgettable.
            </motion.p>
          </div>
          <div className="pt-10 xl:pt-[50px] ">
            <h2 className="text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-5 xl:mb-[30px] text-black heading">About UAE</h2>
            
            <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
              containerClassName="text-19 leading-lhtext-19 font-light font-inter max-w-[57ch]"
            >
              The United Arab Emirates is a vibrant destination that blends world-class infrastructure with deep-rooted heritage. Whether you&apos;re planning a high-end event in Dubai, a cultural escape in Sharjah, or a tranquil retreat in Ras Al Khaimah, EET provides the expertise to make it exceptional.
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;