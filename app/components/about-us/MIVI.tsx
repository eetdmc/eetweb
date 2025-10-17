
"use client";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";  
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";

gsap.registerPlugin(ScrollTrigger);
const MIVI = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Image reveal animation
      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Create mask effect for image reveal
      imageTimeline
        .set(imageContainerRef.current, {
          clipPath: "inset(0 100% 0 0)"
        })
        .to(imageContainerRef.current, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out"
        })
        .fromTo(
          imageRef.current,
          {
            scale: 1.3,
            rotation: 2
          },
          {
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power2.out"
          },
          0
        );

    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return ( 
    <section className="py-10 xl:py-25 2xl:py-[150px] sec-noise" ref={sectionRef}>
      <div className="container">
        <div className="flex flex-wrap justify-between gap-y-5 2xl:flex-nowrap">
          <div ref={imageContainerRef}>
            <div className="mb-8 xl:mb-50px" ref={imageRef}>
              <Image src="/assets/images/about/mission.jpg" alt="" width={1920} height={1080} className="w-full h-full xl:max-w-[80%] 3xl:max-w-none 3xl:max-h-[750px] object-cover"   />
            </div>
            <motion.h2 variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-70 leading-[1] font-light text-black mb-30px">Mission</motion.h2>
            <motion.p variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-19 leading-lhtext-19 font-light font-inter max-w-[40ch]">To deliver tailor-made destination solutions that blend cultural richness, logistical precision, and memorable experiences.</motion.p>
          </div>
        <div className="flex flex-wrap justify-between">
          <div>
            <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="mb-8 xl:mb-50px">
              <Image src="/assets/images/about/vision.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[250px] xl:max-h-[750px] object-cover" />
            </motion.div>
            <motion.h2 variants={moveUp(0.7)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-70 leading-[1] font-light text-black mb-30px">Vision</motion.h2>
              <motion.p variants={moveUp(0.8)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="text-19 leading-lhtext-19 font-light font-inter max-w-[40ch]">To be the most trusted and innovative destination management company in the GCC, setting benchmarks in service quality and sustainability.</motion.p>
          </div>
        </div>
        </div>
      </div>
    </section>
   );
}
 
export default MIVI;