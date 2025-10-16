"use client";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";

gsap.registerPlugin(ScrollTrigger);
const BehindTheScene = () => {
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
            end: "bottom 80%",
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
              rotation: 0
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
    <section className="pt-10 xl:pt-30 pb-50 xl:pb-[130px] 2xl:pb-[350px] overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="xl:max-w-[1285px] 2xl:max-w-[1400px] ml-auto mb-15 xl:mb-25 2xl:mb-[132px]">
          <ScrollReveal
            as="h2"
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            rotationEnd="bottom 80%"
            wordAnimationEnd="bottom 80%"
            containerClassName="text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-5 xl:mb-[30px] text-black xl:max-w-[23ch]"
          >
            We’re your team behind the scenes.
          </ScrollReveal>
        </div>
        <div className="flex flex-wrap gap-y-10 justify-between" >
          <motion.div variants={moveUp(0.4)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} >
            <Image src={"/assets/images/team/b-1.jpg"} alt={""} width={408} height={498} className="w-auto h-60 xl:h-auto" />
          </motion.div>
          <div>
            <div className="ml-auto pr-15 xl:pr-[145px]">
              <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={20}
                rotationEnd="bottom 80%"
                wordAnimationEnd="bottom 80%"
                containerClassName="text-30 leading-[1.333333333333333] font-light max-w-[59ch]"
              >
                With years of experience in hospitality and event logistics, EET has grown from a small team into a recognized regional leader in DMC services. Our legacy is built on trust, creativity, and an unwavering commitment to service excellence.
              </ScrollReveal>

            </div>
            <div ref={imageContainerRef}>
              <div ref={imageRef}>
                <Image src={"/assets/images/team/b-2.jpg"} alt={""} width={406} height={192} className="mt-15 xl:mt-[146px] ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BehindTheScene;