'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
}

const destinations: Destination[] = [
  {
    id: 1,
    country: 'UAE',
    destinationCount: '15+',
    image: '/assets/images/home/hero/slide-1.jpg',
    highlights: ['Nizwa Fort and Souk', 'Al Hoota Cave', 'Sultan Qaboos Grand Mosque']
  },
  {
    id: 2,
    country: 'Qatar',
    destinationCount: '8+',
    image: '/assets/images/home/hero/slide-2.jpg',
    highlights: ['Wahiba Sands', 'Wadi Shab', 'Traditional Souks']
  },
  {
    id: 3,
    country: 'Saudi Arabia',
    destinationCount: '12+',
    image: '/assets/images/home/hero/slide-3.jpg ',
    highlights: ['Al-Masjid an-Nabawi', 'Kingdom Centre', 'Edge of the World']
  },
  {
    id: 4,
    country: 'Oman',
    destinationCount: '6+',
    image: '/assets/images/home/hero/slide-4.jpg',
    highlights: ['Mountain Landscapes', 'Desert Adventures', 'Historic Forts']
  }
];

const DestinationSliderOne: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    const container = slidesContainerRef.current;
    const trigger = triggerRef.current;

    if (!container || !trigger) return;

    // Clean up any existing ScrollTriggers
    if (scrollTriggerRef.current) {
      scrollTriggerRef.current.kill();
    }

    // Create the horizontal scroll animation
    const slides = gsap.utils.toArray<HTMLElement>('.slide');
    const slideWidth = window.innerWidth * 0.8; // 80vw per slide
    const totalMoveDistance = slideWidth * (slides.length - 1);

    // Set up the horizontal scroll animation with smoother easing
    const tl = gsap.timeline();

    tl.to(container, {
      x: -totalMoveDistance,
      ease: 'none',
      duration: 1
    });

    // Create ScrollTrigger with optimized settings
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: trigger,
      start: 'top top',
      end: () => `+=${window.innerHeight * 3}`, // Fixed scroll distance
      scrub: 1.2, // Slightly more scrub for smoother feel
      pin: true,
      animation: tl,
      refreshPriority: -1, // Lower priority for smoother performance
      onUpdate: (self) => {
        // Simplified and smoother slide detection
        const progress = self.progress;
        const slideIndex = Math.round(progress * (slides.length - 1));
        const clampedIndex = Math.max(0, Math.min(slideIndex, slides.length - 1));

        // Use requestAnimationFrame for smoother state updates
        requestAnimationFrame(() => {
          if (clampedIndex !== currentSlide) {
            setCurrentSlide(clampedIndex);
          }
        });
      }
    });

    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();

    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [currentSlide]); // Add currentSlide to dependencies but use careful comparison

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-25 xl:py-30 overflow-hidden">
      <div className="container">
        <div className="xl:pl-[573px]">
          <h2 className="text-70 leading-[1] font-light mg-8 xl:mb-[50px] max-w-3xl text-black">
            Expertise Behind Every Experience
          </h2>
          <h3 className="text-34 leading-[1.235294117647059] font-light text-black">
            Destinations
          </h3>
        </div>
      </div>

      {/* Main slider section - FULL WIDTH */}
      <div className="relative pt-10 3xl:pt-25" ref={triggerRef}>
        <div className="w-full ml-16 overflow-hidden" ref={containerRef}>
          <div ref={slidesContainerRef} className="flex h-full will-change-transform">
            {destinations.map((destination, index) => (
              <div
                key={destination.id}
                className={`slide flex-shrink-0 h-full relative flex flex-col max-h-[792px] transition-all duration-500 ease-out ${index === currentSlide ? '' : 'mt-auto'
                  }`}
                style={{ width: '80vw' }}
              >
                {/* Background Image */}
                <div className={`relative flex flex-col items-end justify-end pb-5 pr-5 mr-25 3xl:mr-[205px] transition-all duration-500 ease-out ${index === currentSlide
                    ? 'h-[441px] 3xl:h-[620px] order-1 ml-5'
                    : 'h-[400px] 3xl:h-[441px] order-2'
                  }`}>
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                  <div className="flex gap-6 relative z-40">
                    <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border border-primary text-white rounded-3xl hover:bg-primary transition-colors duration-300 font-light font-funnel-display">
                      Know More
                    </button>
                    <button className="px-4 py-2 xl:px-5 xl:py-3 leading-[1] bg-black/75 border-1 border-primary text-white rounded-3xl hover:bg-white hover:text-gray-900 transition-colors duration-300 font-light font-funnel-display">
                      Enquire Now
                    </button>
                  </div>
                </div>

                {/* Content positioned on left side */}
                <div className={`relative z-10 flex items-center mr-25 xl:mr-[205px] transition-all duration-500 ease-out ${index === currentSlide
                    ? 'order-2 ml-5 mt-6 xl:mt-[44px]'
                    : 'order-1 mt-auto pt-6 xl:pt-30'
                  }`}>
                  <div className="flex gap-5 xl:gap-10 border-b border-black/30 w-full">
                    <div className="pr-8 xl:pr-[212px]">
                      <h2 className="text-50 uppercase font-light text-black mb-6 xl:mb-8 leading-tight">
                        {destination.country}
                      </h2>
                    </div>

                    <div className={`mr-8 xl:mr-[136px] transition-all duration-500 ease-out ${index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'
                      }`}>
                      <h3 className="text-50 font-light text-black mb-[10px] leading-[0.9]">
                        {destination.destinationCount}
                      </h3>
                      <h4 className="text-lggray text-19 font-light leading-[1.526315789473684] font-inter">
                        Destinations
                      </h4>
                    </div>

                    <div className={`mb-12 space-y-1 transition-all duration-500 ease-out ${index === currentSlide ? 'opacity-100 block' : 'opacity-0 hidden'
                      }`}>
                      {destination.highlights.map((highlight, idx) => (
                        <ul key={idx} className="text-lggray text-lg columns-2xl font-inter">
                          <li className="text-19 font-light leading-[1.526315789473684]">
                            {highlight}
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination - OVERLAID on top right */}
        <div className="absolute right-0 top-10 3xl:top-25 transform z-50 pr-11 bg-white">
          {/* Progress lines */}
          <div className="flex mb-6">
            {destinations.map((_, index) => (
              <div
                key={index}
                className={`w-8 xl:w-[65.25px] h-0.5 transition-all duration-700 ease-out ${index === currentSlide ? 'bg-primary' : 'bg-black/30'
                  }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <div className="text-white">
            <h4 className="text-50 font-light mb-1 text-black/30 transition-all duration-300">
              <span>{String(currentSlide + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(destinations.length).padStart(2, '0')}</span>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSliderOne;