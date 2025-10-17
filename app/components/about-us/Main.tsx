"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { moveUp } from "../motionVarients";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; 
import ScrollReveal from "@/components/ui/ScrollReveal";
import {useTextReveal} from "@/hooks/useTextReveal";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Main = () => { 
  const imageRefZoom = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useTextReveal({ selector: '.heading' });

  // Animate subtitles with different settings
  useTextReveal({
    selector: '.subtitle',
    stagger: 0.02,
    duration: 0.4,
    y: 30,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into words and wrap each word in a span
      const splitText = () => {
        if (!textRef.current) return;

        const text = textRef.current.textContent || "";
        const words = text.split(" ");

        textRef.current.innerHTML = words
          .map(word => `<span class="inline-block overflow-hidden"><span class="inline-block word-span">${word}</span></span>`)
          .join(" ");
      };

      splitText();

      // Get all word spans
      const wordSpans = textRef.current?.querySelectorAll(".word-span");

      // Create timeline for text animation
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate words with stagger effect
      if (wordSpans) {
        textTimeline.fromTo(
          wordSpans,
          {
            y: "100%",
            opacity: 0
          },
          {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.03
          }
        );
      }

      // Animate button
      textTimeline.fromTo(
        buttonRef.current,
        {
          y: 30,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out"
        },
        "-=0.3"
      );

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

  useEffect(() => {
    if (imageRefZoom.current) {
      gsap.to(imageRefZoom.current, {
        scale: 1.15,
        x: -40,
        y: -20,
        duration: 16,
        ease: 'power1.inOut',
        yoyo: true, // This makes it reverse
        repeat: -1, // Infinite loop
      });
    }
  }, []);
  return ( 
    <section className="pb-15 xl:pb-[114px] 2xl:pb-50 overflow-hidden">
      <div className="pm-noise pt-15 xl:pt-25">
      <div className="container">
        <div className="text-center pb-10 xl:pb-[114px]">
          <h3 className="subtitle text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]" >About EET</h3>
          <h1 className="heading text-60 xl:text-80 leading-[1.25] font-light text-black max-w-6xl mx-auto" >Crafting Exceptional Journeys Across the Gulf</h1>
        </div>
      </div>
      </div>
      <div className="mb-15 xl:mb-25 overflow-hidden">
        <Image src="/assets/images/about/main.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[750px] object-cover" ref={imageRefZoom} />
      </div>
      <div className="container" ref={sectionRef}>
        <div className="xl:max-w-[1136px] mx-auto">
          <div className="border-b border-primary-light pb-15 xl:pb-30 2xl:pb-50">
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="text-[1.2rem] xl:text-30 leading-[1.333333333333333] font-light max-w-[68chch]"
            >
            EET DMC is a destination management company built on a foundation of excellence, innovation, and deep regional expertise. Headquartered in the UAE and operating across the GCC, we specialize in delivering seamless travel, MICE, and leisure experiences.
            </ScrollReveal>
          </div>
          <div className="pt-10 xl:pt-[68px]">
            <h2 className="heading text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-5 xl:mb-[30px] text-black">Our Legacy</h2>
            <ScrollReveal
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
              containerClassName="text-19 leading-lhtext-19 font-light font-inter max-w-[57ch]"
            >
            With years of experience in hospitality and event logistics, EET has grown from a small team into a recognized regional leader in DMC services. Our legacy is built on trust, creativity, and an unwavering commitment to service excellence.</ScrollReveal>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Main;