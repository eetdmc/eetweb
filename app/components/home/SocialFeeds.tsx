"use client";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
const SocialFeeds = () => {
  useTextReveal({selector: ".title", stagger: 0.03, duration: 0.6, y: 50, rotateX: -90, ease: "power3.out", start: "top 90%"});
  return ( 
    <section className="pt-10 pb-[160px]  md:pb-[260px] xl:pt-30 xl:pb-[300px] sec-noise">
      <div className="container">
        <div>
          <h2 className="title text-70 leading-[1] font-light text-black mb-8 xl:mb-[78px]">Social Feeds</h2>
        </div>
        {/* <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-[212px]"> */}
        <div className="grid grid-cols-1">
          <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{ once: true, amount: "all" }} className="xl:col-span-2 elfsight-app-f656c073-93a3-4f9d-9d37-e0f103630e4d" >
            <script src="https://elfsightcdn.com/platform.js" async></script> <div className="elfsight-app-f656c073-93a3-4f9d-9d37-e0f103630e4d" data-elfsight-app-lazy></div>
          </motion.div>
          {/* <div className="bg-primary xl:h-[545px] "></div>  */}
        </div>
      </div>
    </section>
   );
}
 
export default SocialFeeds;