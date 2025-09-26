"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryBtn from "../common/PrimaryBtn";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HeroBottom = () => {
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

  return (
    <section ref={sectionRef} className="pt-25 xl:pt-50 pb-15 xl:pb-25 pm-noise">
      <div className="container relative">
        <div className="xl:pl-30 flex flex-col items-center">
          <div>
            <p ref={textRef} className="text-30 text-lggray leading-[1.14] font-light mb-10 xl:mb-20 max-w-[70ch]">
              EET Destination Management is a leading inbound tour operator and travel management company serving the Arabian Gulf, with extensive expertise in tourism, tours, and MICE services across the UAE, Oman, Bahrain, Qatar, Kuwait, and Saudi Arabia.
            </p>
            <div ref={buttonRef}>
              <PrimaryBtn text="About EET" link="#" />
            </div>
          </div>
        </div>
        <div ref={imageContainerRef} className="absolute bottom-[-80%] right-0 w-40 h-28 xl:w-[699px] xl:h-[279px] overflow-hidden">
          <div ref={imageRef} className="w-full h-full">
            <Image src="/assets/images/home/hero/bottom-img.jpg" alt="Arrow" width={1000} height={1000} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBottom;