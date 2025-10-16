"use client";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
const OurProcess = () => {
  useTextReveal({selector: ".heading"});
  return ( 
    <section className="pt-10 pb-45 xl:py-25 2xl:pt-[139px] 2xl:pb-[400px] pm-noise">
      <div className="container">
       <div className="ml-container-big">
          <h2 className="heading text-50 xl:text-70  font-light leading-[1] mb-10 xl:mb-15 2xl:mb-25 text-black xl:max-w-[15ch]">Our Process</h2>
          <div className="process-grid">
            <div className=""></div>
            <div className="pl-3 xl:pl-30px">
              <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-20 xl:text-30 leading-[1.466666666666667] font-light text-black mb-25px">Discovery & Briefing</motion.h3>
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter">Understanding your goals, audience, and preferences.</motion.p>
              <div className="pr-num">
                <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter">01</h4>
              </div>
            </div>
            <div className="pl-3 xl:pl-30px">
              <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-20 xl:text-30 leading-[1.466666666666667] font-light text-black mb-25px">On-Site Execution</motion.h3>
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter">Our expert teams handle everything from setup to showtime.</motion.p>
              <div className="pr-num">
                <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter">03</h4>
              </div>
            </div>
            <div className="">

            </div>
            <div className="pl-3 xl:pl-30px flex flex-col justify-end">
              <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-20 xl:text-30 leading-[1.466666666666667] font-light text-black mb-25px">Creative Concept & Planning</motion.h3>
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter">Developing themes, agendas, and venue proposals.</motion.p>
              <div className="pr-num">
                <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter" >02</h4>
              </div>
            </div>
            <div className="pl-3 xl:pl-30px flex flex-col justify-end">
              <motion.h3 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-20 xl:text-30 leading-[1.466666666666667] font-light text-black mb-25px">Post-Event Reporting</motion.h3>
              <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-sm xl:text-19 leading-lhtext-19 font-light font-inter">Feedback collection, performance analytics, and ROI reports.</motion.p>
              <div className="pr-num">
                <h4 className="text-primary text-19 leading-lhtext-19 font-light font-inter">04</h4>
              </div>
            </div>
          </div>
       </div>
      </div>
    </section>
   );
}
 
export default OurProcess;