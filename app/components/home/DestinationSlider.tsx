'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { assets } from '@/public/assets';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Destination {
  id: number;
  country: string;
  destinationCount: string;
  image: string;
  highlights: string[];
  slug: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    country: 'UAE',
    destinationCount: '15+',
    image: '/assets/images/destinations/img-1.jpg',
    highlights: ['Nizwa Fort and Souk', 'Al Hoota Cave', 'Sultan Qaboos Grand Mosque', 'Wahiba Sands', 'Wadi Shab'],
    slug: '/destinations/uae'
  },
  {
    id: 2,
    country: 'Qatar',
    destinationCount: '8+',
    image: '/assets/images/destinations/img-2.jpg',
    highlights: ['Wahiba Sands', 'Wadi Shab', 'Traditional Souks'],
    slug: '/destinations/qatar'
  },
  {
    id: 3,
    country: 'Saudi Arabia',
    destinationCount: '12+',
    image: '/assets/images/home/hero/slide-3.jpg ',
    highlights: ['Al-Masjid an-Nabawi', 'Kingdom Centre', 'Edge of the World'],
    slug: '/destinations/saudi-arabia'
  },
  {
    id: 4,
    country: 'Oman',
    destinationCount: '6+',
    image: '/assets/images/home/hero/slide-4.jpg',
    highlights: ['Mountain Landscapes', 'Desert Adventures', 'Historic Forts'],
    slug: '/destinations/oman'
  }
];

const DestinationSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = slidesContainerRef.current;
    const trigger = triggerRef.current;

    if (!container || !trigger) return;

    // Create the horizontal scroll animation
    const slides = gsap.utils.toArray<HTMLElement>('.slide');

    // Move by 75% of viewport width per slide (since each slide is 75vw)
    const slideWidth = window.innerWidth * 0.75;
    const totalMoveDistance = slideWidth * (slides.length - 1);

    // Set up the horizontal scroll animation
    const tl = gsap.timeline();

    tl.to(container, {
      x: -totalMoveDistance,
      ease: 'none',
      duration: slides.length - 1
    });

    // Create ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger,
      start: 'top top',
      end: () => `+=${window.innerHeight * (slides.length - 1)}`,
      scrub: 1,
      pin: true,
      animation: tl,
      onUpdate: (self) => {
        const progress = self.progress;
        // Only change slide when it's fully visible (at specific progress thresholds)
        const slideProgress = progress * (slides.length - 1);

        // Calculate which slide is fully visible based on 75% movement
        // A slide is fully visible when scroll progress reaches certain thresholds
        let newSlideIndex = 0;

        for (let i = 0; i < slides.length; i++) {
          const slideThreshold = i / (slides.length - 1);
          if (progress >= slideThreshold - 0.8 && progress <= slideThreshold + 0.8) {
            newSlideIndex = i;
            break;
          } else if (progress >= slideThreshold) {
            newSlideIndex = i;
          }
        }

        // Only update if slide is fully positioned (not mid-transition)
        const isAtStablePosition = Math.abs(slideProgress - Math.round(slideProgress)) < 0.9;

        if (isAtStablePosition) {
          const slideIndex = Math.round(slideProgress);
          setCurrentSlide(Math.max(0, Math.min(slideIndex, slides.length - 1)));
        }
      }
    });

    return () => {
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-10 xl:py-30 overflow-hidden">
      <div className="container">
        <div className="3xl:pl-[573px] " >
          <h2 className="text-70 leading-[1] font-light mb-4 xl:mb-[50px] max-w-4xl text-black">Expertise Behind Every Experience</h2>
          <h3 className="text-34 leading-[1.235294117647059] font-light text-black">Destinations</h3>
        </div>
      </div>
      {/* Main slider section - FULL WIDTH */}
      <div className="relative pt-10 3xl:pt-[74px] hidden xl:block" ref={triggerRef}>
        <div className=" w-full xl:ml-6 3xl:ml-16 overflow-hidden" ref={containerRef}>
          <div ref={slidesContainerRef} className="flex h-full">
            {destinations.map((destination, index) => (
              <div key={destination.id} className={`slide flex-shrink-0 h-full relative transition-all duration-700 flex flex-col max-h-[792px]   ${index === currentSlide ? 'mt-0' : 'mt-44 xl:mt-[250px]'}`} style={{ width: '80vw' }}>
                {/* top title */}
                <div className={`flex items-center mr-25 xl:mr-[205px] ${index === currentSlide ? 'absolute text-white bottom-0 z-0 opacity-0' : 'relative opacity-100'}`}>
                  <div className=" flex gap-5 xl:gap-10 border-b border-black/30 w-full">
                    <div className="pr-8 xl:pr-[212px]">
                      <h2 className="text-50 font-light text-black mb-6 xl:mb-8 leading-tight">
                        {destination.country}
                      </h2>
                    </div>
                  </div> 
                </div>
                {/* top title end */}
                {/* Background Image */}
                {/* <div className={`relative z-20 flex flex-col items-end justify-end pb-5 pr-5 mr-25 3xl:mr-[205px] transition-height duration-700 
                  ${index === currentSlide ? 'h-[441px] 3xl:h-[620px] ml-5 ' : ' h-[400px] 3xl:h-[441px]'}`}> */}
                <div className={`relative z-20 flex flex-col items-end justify-end pb-5 xl:p-[30px] mr-25 3xl:mr-[205px] transition-all duration-700 
                  ${index === currentSlide ? ' ml-5 scale-y-100 h-[441px] 3xl:h-[620px]' : ' scale-y-100 h-[400px] 3xl:h-[441px]'}`}>
                  <div className={`transition-all duration-700 ${index === currentSlide ? ' pt-0' : ' pt-25'}`}>
                    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full" style={{ backgroundImage: `url(${destination.image})` }}> </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-0 from-transparent to-100 to-black/50" />
                  <div className="flex gap-6 relative z-40">
                    <Link href={destination.slug}>
                    <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border border-primary text-white rounded-3xl hover:bg-primary transition-colors font-light font-funnel-display">
                      Know More
                    </button>
                    </Link>
                    <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border-1 border-primary text-white rounded-3xl hover:bg-white hover:text-gray-900 transition-colors font-light font-funnel-display">
                      Enquire Now
                    </button>
                  </div>
                </div>

                {/* Content positioned on left side */}
                <div className={` flex items-center xl:mr-25 3xl:mr-[205px]  ${index === currentSlide ? 'relative z-10 ml-5 mt-6 xl:mt-[44px]' : ' top-0 z-0 opacity-0'}`}>
                  <div className={`flex gap-5 3xl:gap-10  w-full ${index === currentSlide ? 'border-b border-black/30' : ''}`}>
                    <div className="pr-8 xl:pr-20 3xl:pr-[212px]">
                      <h2 className="text-50 font-light text-black mb-6 xl:mb-8 leading-tight">
                        {destination.country}
                      </h2>

                    </div>
                    <div className={`mr-8 xl:mr-18 3xl:mr-[136px] ${index === currentSlide ? 'block ' : 'hidden '}`}>
                      <h3 className="text-50 font-light text-black mb-[10px] leading-[0.9]">
                        {destination.destinationCount}
                      </h3>
                      <h4 className="text-lggray text-19 font-light leading-[1.526315789473684] font-inter"> Destinations </h4>
                    </div>

                    <div className={`mb-12 space-y-1 ${index === currentSlide ? 'block ' : 'hidden '}`}>
                      <ul className="text-lggray text-lg xl:columns-2 xl:[column-width:180px] 3xl:[column-width:250px] xl:gap-4 3xl:gap-[83px] font-inter">
                      {destination.highlights.map((highlight, idx) => (
                        <li className='text-base 3xl:text-19 font-light leading-[1.526315789473684]' key={idx}>{highlight}</li>
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
        <div className="absolute right-0 top-10 3xl:top-[74px]  transform z-50 pr-11 bg-white">
          {/* Progress lines */}
          <div className="flex mb-6">
            {destinations.map((_, index) => (
              <div key={index} className={`w-8 xl:w-[65.25px] h-0.5 transition-all duration-500 ${index === currentSlide ? 'bg-primary' : 'bg-black/30'}`} />
            ))}
          </div>

          {/* Slide counter */}
          <div className="text-white ">
            <h4 className="text-50 leading-[1.3] font-light mb-1 text-black/30">
              <span>{String(currentSlide + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(destinations.length).padStart(2, '0')}</span>
            </h4>
          </div>
        </div>
      </div>
         {/* mobile slider */}
              <div className='xl:hidden'>
                <div className="container">
                  <div className="navigaion flex gap-5 mb-4 w-fit ml-auto">
                    <button className="prev"><Image src={assets.pmArrowLeft} width={26} height={26} alt="Arrow" /></button>
                    <button className="next"><Image src={assets.pmArrowRight} width={26} height={26} alt="Arrow" /></button>
                  </div>
                </div>
                <Swiper
                className="destinations-slider"
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={{ prevEl: '.prev', nextEl: '.next' }}
              >
                {destinations.map((destination, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-full">
                     <div className="relative">
                        <Image src={destination.image.trimEnd()} width={1000} height={500} alt={destination.country} className="w-full h-[300px] object-cover" />
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
                        <div className='flex flex-wrap py-5 gap-5 '>
                          <h2 className="text-50 font-light text-black leading-tight">
                            {destination.country}
                          </h2>
                          <h3 className="text-50 font-light text-black leading-[1]">
                            {destination.destinationCount}
                          </h3>
                         <div>
                            <h4 className="text-lggray text-20 font-medium leading-[1.526315789473684] mb-3 font-inter"> Destinations </h4>
                            <ul className='flex flex-wrap'>
                              {destination.highlights.map((highlight, idx) => (
                                <li className='text-base  font-light leading-[1.526315789473684] group mr-2 w-[25%] min-w-max' key={idx}>{highlight} <span className="group-last:hidden">,</span></li>
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
    </section>
  );
};

export default DestinationSlider;