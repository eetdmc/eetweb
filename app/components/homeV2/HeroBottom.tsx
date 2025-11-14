"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryBtn from "../common/PrimaryBtn";
import Image from "next/image";
import type { SecondSection } from "./type";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroBottom = ({ data }: { data: SecondSection }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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
          once: true,
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
          once: true,
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

  return (
    <section
      ref={sectionRef}
      className="pt-12 md:pt-12 xl:pt-22 2xl:pt-[170px] pb-13 xl:pb-[243px] pm-noise"
    >
      <div className="container relative">
        <div className="3xl:pl-4 flex flex-col items-center">
          <div className="relative lg:right-[0px]">
            <p
              ref={textRef}
              className="text-[1.1rem] xl:text-19 text-black leading-[1.526315789473684] font-light mb-10 xl:mb-20 max-w-[108ch]"
            >
              {data.description}
            </p>
            <div ref={buttonRef}>
              <PrimaryBtn text={data.title} link={"/about-us"} />
            </div>
          </div>
        </div>
        <div
          ref={imageContainerRef}
          className="hidden xl:block mt-15 xl:mt-0 xl:absolute xl:bottom-[-120%] right-5 xl:right-0 w-full  md:h-auto xl:w-[699px] xl:h-[279px] overflow-hidden"
        >
          <div ref={imageRef} className="w-full h-full">
            <Image
              src={data.image}
              alt={data.imageAlt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBottom;
