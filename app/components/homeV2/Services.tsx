"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "../../../public/assets";
import PrimaryBtn from "../common/PrimaryBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "../common/Accordion";
import { useTextReveal } from "@/hooks/useTextReveal";
import { HomeData } from "./type";

gsap.registerPlugin(ScrollTrigger);

const Services = ({
  data,
  services,
}: {
  data: HomeData["fourthSection"];
  services: {
    secondSection:{
      items:{
        title:string;
        description:string;
        image:string;
        slug:string;
        ctaHome:string;
        homeDescription:string;
        homeImage:string;
      }[]
    }
  };
}) => {
  const [activeService, setActiveService] = useState<number>(2);
  const [displayedService, setDisplayedService] = useState<number>(2);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  const formattedServices = services?.secondSection?.items?.map((service) => ({
    title: service.title,
    description: service.description,
    image: service.homeImage,
    slug: `/services/${service.slug}`,
    ctaHome: service.ctaHome,
    descriptionHome: service.homeDescription,
  }));
  // Animate headings
  useTextReveal({ selector: ".heading" });

  // Animate subtitles with different settings
  useTextReveal({
    selector: ".subtitle",
    stagger: 0.02,
    duration: 0.4,
    y: 30,
  });

  const handleServiceChange = async (index: number) => {
    if (index === activeService || isTransitioning) return;

    setIsTransitioning(true);
    setActiveService(index);

    // Wait for fade-out to complete before changing the displayed content
    setTimeout(() => {
      setDisplayedService(index);

      // Wait a bit more for content to load, then fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Match the CSS transition duration
  };

  const currentService = formattedServices[displayedService];

  /* gsap effect */
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
  /* gsap effect end */

  return (
    <section
      ref={sectionRef}
      className="pt-10 xl:pt-[135px] pb-15 xl:pb-[150px] sec-noise overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1020px_auto] 3xl:grid-cols-[1282px_auto]">
          <h2 className="heading text-50 leading-[1] font-light max-w-[20ch] text-black font-sans">
            {data.mainTitle}
          </h2>
          {/* <h3 className="subtitle text-30 leading-[1.4] font-light text-black">
            {data.subTitle}
          </h3> */}
        </div>
        <div className="mt-13 xl:mt-[70px] hidden xl:block">
          <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-[544px_631px_auto]">
            {/* Services List */}
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px]">
              <ul>
                {formattedServices.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 xl:gap-4 group"
                  >
                    <button
                      className={`text-19 leading-[2.631578947368421] font-sans font-light text-black text-left transition-all duration-300 cursor-pointer ${
                        activeService === index ? "font-medium" : ""
                      }`}
                      onClick={() => handleServiceChange(index)}
                      onMouseEnter={() => handleServiceChange(index)}
                    >
                      {service.title}
                    </button>
                    <Image
                      src={assets.arrowPrimary}
                      alt="Arrow"
                      width={26}
                      height={26}
                      className={`w-4 h-4 xl:w-6 xl:h-6 transition-all duration-300 ${
                        activeService === index
                          ? "opacity-100 translate-x-1"
                          : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      }`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Image */}
            <div ref={imageContainerRef} className="relative overflow-hidden">
              <div
                className="relative h-[400px] xl:h-[581px] 3xl:h-[681px]"
                ref={imageRef}
              >
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  width={631}
                  height={681}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500  ${
                    isTransitioning
                      ? "opacity-100 blur-[5px]"
                      : "opacity-100 blur-0"
                  }`}
                />
              </div>
            </div>

            {/* Service Details */}
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px] pl-15 xl:pl-[70px] 3xl:pl-[106px]">
              <div className="relative">
                {/* <div
                  className={`transition-all duration-300 ease-in-out ${isTransitioning
                      ? 'opacity-0 translate-y-2'
                      : 'opacity-100 translate-y-0'
                    }`}
                > */}
                <h3
                  className={`text-19 leading-[2.3157894736842111] font-medium font-sans text-black mb-[14px] xl:mb-[25px] transition-all duration-300 ease-in-out  ${
                    isTransitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {currentService.title}
                </h3>
                <p
                  className={`text-19 leading-[1.526315789473684] font-light text-black font-sans max-w-[41ch] mb-10 xl:mb-8 3xl:mb-[40px] transition-all duration-700 ease-in-out   ${
                    isTransitioning
                      ? "opacity-0 translate-y-6"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {currentService.descriptionHome}
                </p>
                <div
                  className={`transition-all text-black font-sans duration-500 ease-in-out  ${
                    isTransitioning
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <PrimaryBtn link="services" text="View Services" />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Accordion */}
        <div className="mt-10 xl:hidden">
          {formattedServices.map((service, index) => (
            <Accordion
              key={index}
              title={service.title}
              content={service.description}
              image={service.image}
              isOpen={activeIndex === index}
              onToggle={() => toggleAccordion(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
