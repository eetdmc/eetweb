"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { moveUp } from "../motionVarients";
import { useTextReveal } from "@/hooks/useTextReveal";
const WhyExplore = () => {
  useTextReveal({ selector: '.heading' });
  useTextReveal({ selector: '.subtitle' });
  return (
    <section className="pm-noise pt-10 pb-50 xl:py-20 2xl:pt-[145px] 2xl:pb-[400px]">
      <div className="container">
        <div className="xl:max-w-[1000px] 2xl:max-w-[1283px] xl:ml-auto">
          <h2 className="heading text-50 xl:text-70 3xl:text-70 font-light leading-[1.2] xl:leading-[1] text-black xl:max-w-[15ch] mb-10 xl:mb-20">Why Explore UAE with EET?</h2>
        </div>
        <div className="explr-grid">
          <div className="explr-grid__col">
            <div className="">
              <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="xl:ml-auto">
                <Image src="/assets/images/destinations/details/why-explore/icon-1.svg" width={60} height={60} alt="" className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"></Image>
                <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Access to exclusive venues and experiences</h3>
              </motion.div>
            </div>
          </div>
          <div className="explr-grid__col">
            <div >
              <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="mb-4 xl:mb-30px">
                <Image src="/assets/images/destinations/details/why-explore/icon-2.svg" width={60} height={60} alt="" className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">On-ground support in all 7 Emirates</h3>
              </motion.div>
            </div>
            <div className="">
              <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}}>
                <Image src="/assets/images/destinations/details/why-explore/icon-3.svg" width={60} height={60} alt="" className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Multilingual expert guides</h3>
              </motion.div>
            </div>
          </div>
          <div className="explr-grid__col">
            <div>
              <motion.div variants={moveUp(0.8)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}}>
                <Image src="/assets/images/destinations/details/why-explore/icon-4.svg" width={60} height={60} alt="" className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Custom group packages and corporate rates</h3>
              </motion.div>
            </div>
            <div className="">
              <motion.div variants={moveUp(1)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}}>
                <Image src="/assets/images/destinations/details/why-explore/icon-5.svg" width={60} height={60} alt="" className="w-10 xl:w-15 h-auto mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Round-the-clock assistance</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyExplore;