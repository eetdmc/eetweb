"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { assets } from "../../../public/assets";
import PrimaryBtn from "../common/PrimaryBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Accordion from "../common/Accordion";
import { useTextReveal } from "@/hooks/useTextReveal";

gsap.registerPlugin(ScrollTrigger);
interface ServiceItem {
  title: string;
  description: string;
  image: string;
  slug: string;
}

interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

const servicesData: ServicesData = {
  title: "Expertise Behind Every Experience",
  subtitle: "Our Services",
  items: [
    {
      title: "Hotel & Leisure Services",
      description: "Praesentium porro a repellat exercitationem architecto.Quam reprehenderit sed non atque in voluptate omnis, ratione architecto facere vitae ducimus.Error natus maxime molestias quo velit quas placeat praesentium nulla sit! ",
      image: "/assets/images/services/service-1.jpg",
      slug: "/services/hotel-leisure-services"
    },
    {
      title: "MICE",
      description: "Lorem ipsum dolor sit amet consectetur  perspiciatis exercitationem magnam minus sit libero officia! Fuga amet, a aspernatur soluta veritatis non odio architecto aliquid ipsum eveniet atque laborum provident eos sapiente quia dolore.Suscipit, sit voluptatum!",
      image: "/assets/images/services/service-2.jpg",
      slug: "/services/mice"
    },
    {
      title: "Cruise Liners",
      description: "Discover unforgettable journeys with our curated leisure travel experiences, offering personalized holidays, cultural escapes, and relaxing getaways across the Arabian Gulf and beyond.",
      image: "/assets/images/services/service-3.jpg",
      slug: "/services/cruise-liners"
    },
    {
      title: "Experiences",
      description: "Lorem ipsum dolor sit amet consectetur dfasf adipisicing elit. Doloremque magni cumdgs tempora dolore saepe? Natus in sed oditdfafa praesentium?Praesentium porro  provident eos sapiente quia dolore.Suscipit,",
      image: "/assets/images/services/service-4.png",
      slug: "/services/experiences"
    }
  ]
};

const Services = () => {
  const [activeService, setActiveService] = useState<number>(2); // Default to Cruise Liners (index 2)
  const [displayedService, setDisplayedService] = useState<number>(2); // What's currently shown
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Animate headings
  useTextReveal({ selector: '.heading' });

  // Animate subtitles with different settings
  useTextReveal({
    selector: '.subtitle',
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

  const currentService = servicesData.items[displayedService];

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
  /* gsap effect end */

  return (
    <section ref={sectionRef} className="pt-10 xl:pt-[138px] pb-15 xl:pb-[150px] sec-noise overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-[1020px_auto] 3xl:grid-cols-[1282px_auto]">
          <h2 className="heading text-70 leading-[1] font-light max-w-2xl text-black">
            {servicesData.title}
          </h2>
          <h3 className="subtitle text-30 leading-[1.4] font-light text-black">
            {servicesData.subtitle}
          </h3>
        </div>
        <div className="mt-18 xl:mt-[120px] hidden xl:block">
          <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-[544px_631px_auto]">
            {/* Services List */}
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px]" >
              <ul>
                {servicesData.items.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 xl:gap-4 group" >
                    <button
                      className={`text-30 leading-[2] font-light text-left transition-all duration-300 ${activeService === index
                        ? 'text-black'
                        : ''
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
                      className={`w-4 h-4 xl:w-6 xl:h-6 transition-all duration-300 ${activeService === index
                        ? 'opacity-100 translate-x-1'
                        : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                        }`}
                    />

                  </li>
                ))}
              </ul>
            </div>

            {/* Service Image */}
            <div ref={imageContainerRef} className="relative overflow-hidden">
              <div className="relative h-[400px] xl:h-[581px] 3xl:h-[681px]" ref={imageRef}>
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  width={631}
                  height={681}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500  ${isTransitioning
                    ? 'opacity-100 blur-[5px]'
                    : 'opacity-100 blur-0'
                    }`}
                />
              </div>
            </div>

            {/* Service Details */}
            <div className="pt-6 xl:pt-[41px] border-t border-[#5C8898] mt-25 xl:mt-[180px] pl-15 xl:pl-[106px]">
              <div className="relative">
                {/* <div
                  className={`transition-all duration-300 ease-in-out ${isTransitioning
                      ? 'opacity-0 translate-y-2'
                      : 'opacity-100 translate-y-0'
                    }`}
                > */}
                <h3 className={`text-30 xl:text-50 leading-[1] font-light text-black mb-4 xl:mb-[35px] transition-all duration-300 ease-in-out  ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  {currentService.title}
                </h3>
                <p className={`text-19 leading-[1.526315789473684] font-light text-[#484848] font-inter max-w-[36ch] mb-12 xl:mb-[63px] transition-all duration-700 ease-in-out   ${isTransitioning ? 'opacity-0 translate-y-6' : 'opacity-100 translate-y-0'}`}>
                  {currentService.description}
                </p>
                <div className={`transition-all duration-500 ease-in-out  ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  <PrimaryBtn link={currentService.slug} text="Read More" />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* Accordion */}
        <div className="mt-10 xl:hidden">
          {servicesData.items.map((service, index) => (
            <Accordion key={index} title={service.title} content={service.description} image={service.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;