"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "@/public/assets";
import { Navigation } from "swiper/modules";
 
import {
  DestinationData,
  DestinationSixthItem,
} from "../destination-details/type";
import Link from "next/link";

const DestinationSliderNew: React.FC<{ destinations: DestinationData[] }> = ({
  destinations,
}) => {
  const formattedDestinations = destinations.map(
    (item: DestinationData, index: number) => ({
      id: index + 1,
      location: item.firstSection.location,
      destinationCount: item.sixthSection.destinationCount + "+",
      homeImage: item.sixthSection?.homeImage,
      mainDestinations:
        item.sixthSection?.mainDestinations?.map(
          (d: DestinationSixthItem) => d.title
        ) || [],
      slug: item.firstSection.slug,
    })
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef({ x: 0, startX: 0 });
  const dragOffsetRef = useRef(0);

  // Fix hydration - only run on client
  useEffect(() => {
    setIsMounted(true);

    // Register GSAP plugins only on client
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }

    // Cleanup function to refresh ScrollTrigger when component unmounts or updates
    return () => {
      ScrollTrigger.refresh();
    };
  }, []);

  // Refresh ScrollTrigger when slide changes (height changes affect scroll positions)
  useEffect(() => {
    if (isMounted) {
      ScrollTrigger.refresh();
    }
  }, [currentSlide, isMounted]);

  // Handle arrow navigation
  const goToSlide = (slideIndex: number) => {
    if (!isMounted) return;

    const container = slidesContainerRef.current;
    if (!container) return;

    const slideWidth = window.innerWidth * 0.8;
    const targetPosition = -slideWidth * slideIndex;

    // Update state first
    setCurrentSlide(slideIndex);

    // Animate with GSAP
    gsap.to(container, {
      // x: targetPosition,
      x: Math.round(targetPosition),
      duration: 1.2,
      ease: "power2.inOut",
      force3D: true,
    });
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < destinations.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  // Touch and Mouse drag handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const container = slidesContainerRef.current;
    if (!container) return;

    const currentX = gsap.getProperty(container, "x") as number;
    dragStartRef.current = { x: clientX, startX: currentX };
    dragOffsetRef.current = 0;

    // Add cursor style
    if (containerRef.current) {
      containerRef.current.style.cursor = "grabbing";
    }
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const container = slidesContainerRef.current;
    if (!container) return;

    const diff = clientX - dragStartRef.current.x;
    dragOffsetRef.current = diff;
    const newX = dragStartRef.current.startX + diff;

    // gsap.set(container, { x: newX });
    gsap.set(container, { x: Math.round(newX) });
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const slideWidth = window.innerWidth * 0.8;
    const threshold = slideWidth * 0.2; // 20% of slide width

    let newSlide = currentSlide;

    // Determine direction and if threshold is met
    if (Math.abs(dragOffsetRef.current) > threshold) {
      if (dragOffsetRef.current > 0 && currentSlide > 0) {
        // Dragged right, go to previous slide
        newSlide = currentSlide - 1;
      } else if (
        dragOffsetRef.current < 0 &&
        currentSlide < destinations.length - 1
      ) {
        // Dragged left, go to next slide
        newSlide = currentSlide + 1;
      }
    }

    // Snap to the slide
    goToSlide(newSlide);

    // Reset cursor style
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
    }
  };

  // Add mouse leave handler to handle edge case
  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Don't render until mounted to avoid hydration issues
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      {/* Main slider section - FULL WIDTH with touch control */}
      <div
        className="relative pt-10 3xl:pt-[74px] hidden xl:block"
        ref={triggerRef}
      >
        <div
          className="w-full xl:ml-6 3xl:ml-16 overflow-hidden cursor-grab active:cursor-grabbing"
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div ref={slidesContainerRef} className="flex h-full">
            {formattedDestinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`slide flex-shrink-0 h-full relative transition-all duration-700 flex flex-col max-h-[792px] ${
                  index === currentSlide ? "mt-0" : "mt-44 xl:mt-[250px]"
                }`}
                style={{ width: "80vw" }}
              >
                {/* top title */}
                <div
                  className={`flex items-center mr-25 xl:mr-[205px] ${
                    index === currentSlide
                      ? "absolute text-white bottom-0 z-0 opacity-0"
                      : "relative opacity-100"
                  }`}
                >
                  <div className="flex gap-5 xl:gap-10 border-b border-black/30 w-full">
                    <div className="pr-8 xl:pr-[212px]">
                      <h2 className="text-50 font-light text-black mb-6 xl:mb-8 leading-tight">
                        {destination.location}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Background Image */}
                <div
                  className={`relative z-20 flex flex-col items-end justify-end pb-5 xl:p-[30px] mr-25 3xl:mr-[205px] transition-all duration-700 
                  ${
                    index === currentSlide
                      ? "ml-5 scale-y-100 h-[441px] 3xl:h-[620px]"
                      : "scale-y-100 h-[400px] 3xl:h-[441px]"
                  }`}
                >
                  <div
                    className={`transition-all duration-700 ${
                      index === currentSlide ? "pt-0" : "pt-25"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full"
                      style={{
                        backgroundImage: `url(${destination.homeImage})`,
                      }}
                    ></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-0 from-transparent to-100 to-black/50" />
                  <div className="flex gap-6 relative z-40">
                    <Link href={`/destination/${destination.slug}`}>
                      <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border border-primary text-white rounded-3xl hover:bg-primary transition-colors font-light font-funnel-display">
                        Know More
                      </button>
                    </Link>
                    <Link href="#">
                      <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border-1 border-primary text-white rounded-3xl hover:bg-white hover:text-gray-900 transition-colors font-light font-funnel-display">
                        Enquire Now
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Content positioned on left side */}
                <div
                  className={`flex items-center xl:mr-25 3xl:mr-[205px] ${
                    index === currentSlide
                      ? "relative z-10 ml-5 mt-6 xl:mt-[44px]"
                      : "top-0 z-0 opacity-0"
                  }`}
                >
                  <div
                    className={`flex gap-5 3xl:gap-10 w-full ${
                      index === currentSlide ? "border-b border-black/30" : ""
                    }`}
                  >
                    <div className="pr-8 xl:pr-20 3xl:pr-[212px]">
                      <h2
                        className="text-50 font-light text-black mb-6 xl:mb-8 leading-tight"
                      >
                        {destination.location}
                      </h2>
                    </div>
                    <div
                      className={`mr-8 xl:mr-18 3xl:mr-[136px] ${
                        index === currentSlide ? "block" : "hidden"
                      }`}
                    >
                      <h3
                        className="text-50 font-light text-black mb-[10px] leading-[0.9]"
                      >
                        {destination.destinationCount}
                      </h3>
                      <h4
                        className="text-lggray text-19 font-light leading-[1.526315789473684] font-inter"
                      >
                        Destinations
                      </ h4>
                    </div>

                    <div
                      className={`mb-12 space-y-1 ${
                        index === currentSlide ? "block" : "hidden"
                      }`}
                    >
                      <ul className="text-lggray text-lg xl:columns-2 xl:[column-width:180px] 3xl:[column-width:250px] xl:gap-4 3xl:gap-[83px] font-inter">
                        {destination.mainDestinations.map((highlight, idx) => (
                          <li
                            className="text-base 3xl:text-19 font-light leading-[1.526315789473684]"
                            key={idx}
                          >
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination - OVERLAID on top right */}
        <div className="absolute right-0 top-10 3xl:top-[74px] z-50 pr-11 pb-6 bg-white">
          {/* Progress lines */}
          <div className="flex mb-6">
            {destinations.map((_, index) => (
              <div
                key={index}
                className={`w-8 xl:w-[65.25px] h-0.5 transition-all duration-500 ${
                  index === currentSlide ? "bg-primary" : "bg-black/30"
                }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-fit">
              <h4 className="text-50 leading-[1.3] font-light mb-1 text-black/30">
                <span>{String(currentSlide + 1).padStart(2, "0")}</span>
                <span>/</span>
                <span>{String(destinations.length).padStart(2, "0")}</span>
              </h4>
            </div>
          </div>

          <div className="flex gap-5 relative z-30">
            <button
              className={`desktop-prev ${
                currentSlide === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={handlePrev}
              disabled={currentSlide === 0}
              type="button"
            >
              <Image
                src={assets.pmArrowLeft}
                width={26}
                height={26}
                alt="Arrow"
              />
            </button>
            <button
              className={`desktop-next ${
                currentSlide === destinations.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={handleNext}
              disabled={currentSlide === destinations.length - 1}
              type="button"
            >
              <Image
                src={assets.pmArrowRight}
                width={26}
                height={26}
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </div>

      {/* mobile slider */}
      <div className="xl:hidden">
        <div className="container">
          <div className="navigaion flex gap-5 mb-4 w-fit ml-auto">
            <button className="mobile-prev">
              <Image
                src={assets.pmArrowLeft}
                width={26}
                height={26}
                alt="Arrow"
              />
            </button>
            <button className="mobile-next">
              <Image
                src={assets.pmArrowRight}
                width={26}
                height={26}
                alt="Arrow"
              />
            </button>
          </div>
        </div>
        <Swiper
          className="destinations-slider"
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation={{ prevEl: ".mobile-prev", nextEl: ".mobile-next" }}
        >
          {formattedDestinations.map((destination, index) => (
            <SwiperSlide key={index}>
              <div className="h-full">
                <div className="relative">
                  {/* <Image
                    src={destination.image.trimEnd()}
                    width={1000}
                    height={500}
                    alt={destination.country}
                    className="w-full h-[300px] object-cover"
                  /> */}
                  <div className="flex gap-6 z-40 absolute left-5 bottom-5">
                    <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border border-primary text-white rounded-3xl hover:bg-primary transition-colors font-light font-funnel-display">
                      Know More
                    </button>
                    <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border-1 border-primary text-white rounded-3xl hover:bg-white hover:text-gray-900 transition-colors font-light font-funnel-display">
                      Enquire Now
                    </button>
                  </div>
                </div>
                <div className="container">
                  <div className="flex flex-wrap py-5 gap-5">
                    <h2 className="text-50 font-light text-black leading-tight">
                      {destination.location}
                    </h2>
                    <h3 className="text-50 font-light text-black leading-[1]">
                      {destination.destinationCount}
                    </h3>
                    <div>
                      <h4 className="text-lggray text-20 font-medium leading-[1.526315789473684] mb-3 font-inter">
                        Destinations
                      </h4>
                      <ul className="flex flex-wrap">
                        {destination.mainDestinations.map((highlight, idx) => (
                          <li
                            className="text-base font-light leading-[1.526315789473684] group mr-2 w-[25%] min-w-max"
                            key={idx}
                          >
                            {highlight}{" "}
                            <span className="group-last:hidden">,</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DestinationSliderNew;
