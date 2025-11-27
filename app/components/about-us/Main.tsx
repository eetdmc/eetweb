"use client";
import Image from "next/image";
import { useRef } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTextReveal } from "@/hooks/useTextReveal";
import { AboutData } from "./type";
import { motion } from "motion/react";
import { moveUpfourty } from "../motionVarients";

type MainProps = {
  data: AboutData["data"]["firstSection"]; // only the inner "data" object
};
type LegacyProps = {
  legacy: AboutData["data"]["secondSection"]; // only the inner "data" object
};

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
const Main = ({ data, legacy }: MainProps & LegacyProps) => {
  const imageRefZoom = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useTextReveal({ selector: ".heading" });

  // Animate subtitles with different settings
  useTextReveal({
    selector: ".subtitle",
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
          .map(
            (word) =>
              `<span class="inline-block overflow-hidden"><span class="inline-block word-span">${word}</span></span>`
          )
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
          toggleActions: "play none none reverse",
        },
      });

      // Animate words with stagger effect
      if (wordSpans) {
        textTimeline.fromTo(
          wordSpans,
          {
            y: "100%",
            opacity: 0,
          },
          {
            y: "0%",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.03,
          }
        );
      }

      // Animate button
      textTimeline.fromTo(
        buttonRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Image reveal animation
      const imageTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Create mask effect for image reveal
      imageTimeline
        .set(imageContainerRef.current, {
          clipPath: "inset(0 100% 0 0)",
        })
        .to(imageContainerRef.current, {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.2,
          ease: "power2.out",
        })
        .fromTo(
          imageRef.current,
          {
            scale: 1.3,
            rotation: 2,
          },
          {
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "power2.out",
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
        ease: "power1.inOut",
        yoyo: true, // This makes it reverse
        repeat: -1, // Infinite loop
      });
    }
  }, []);
  return (
    <section className="pb-15 xl:pb-[105px] 2xl:pb-[120px] overflow-hidden">
      <div className="pm-noise pt-15 xl:pt-23">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="subtitle text-19 leading-lhtext-19 font-light text-black mb-3 xl:mb-[40px]">
              {data.mainTitle}
            </h3>
            <h1 className="heading text-60 leading-[1.153846153846154] font-light text-black max-w-4xl mx-auto">
              {data.subTitle}
            </h1>
          </div>
        </div>
      </div>
      <div className="mb-15 xl:mb-25 overflow-hidden">
        <Image
          src={data.image}
          alt={data.imageAlt}
          width={1920}
          height={1080}
          className="w-full h-full max-h-[750px] object-cover"
          ref={imageRefZoom}
        />
      </div>
      <div className="container" ref={sectionRef}>
        <div className="xl:max-w-[1136px] mx-auto">
          <div className="border-b border-primary-light pb-15 xl:pb-20 2xl:pb-[70px]">
            <motion.p
              variants={moveUpfourty(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="text-19 font-medium leading-1h-text-19 max-w-[98ch] font-sans text-black"
            >
              {data.description}
            </motion.p>
          </div>
          <div className="pt-10 xl:pt-[50px]">
            <h2 className="heading text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-5 xl:mb-[30px] text-black font-sans">
              {legacy.title}
            </h2>
            <motion.p
              variants={moveUpfourty(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className=" text-19 leading-lhtext-19 font-light text-black font-sans"
            >
              {legacy.description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
