'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
// Demo data
const destinationsData = [
  {
    id: 1,
    country: "UAE",
    totalDestinations: "15+",
    mainImage: "/assets/images/destinations/img-1.jpg",
    previewImage: "/assets/images/destinations/img-1.jpg",
    previewCountry: "Qatar",
    destinations: [
      "Nizwa Fort and Souk",
      "Al Hoota Cave",
      "Sultan Qaboos Grand Mosque",
      "Wahiba Sands",
      "Wadi Shab"
    ]
  },
  {
    id: 2,
    country: "Qatar",
    totalDestinations: "12+",
    mainImage: "/assets/images/destinations/img-2.jpg",
    previewImage: "/assets/images/destinations/img-2.jpg",
    previewCountry: "Saudi Arabia",
    destinations: [
      "Museum of Islamic Art",
      "Souq Waqif",
      "Pearl Island",
      "Katara Cultural Village",
      "Al Zubarah Archaeological Site"
    ]
  },
  {
    id: 3,
    country: "Saudi Arabia",
    totalDestinations: "20+",
    mainImage: "/assets/images/destinations/img-3.jpg",
    previewImage: "/assets/images/destinations/img-3.jpg",
    previewCountry: "Oman",
    destinations: [
      "Al-Masjid an-Nabawi",
      "Masjid al-Haram",
      "Madain Salih",
      "Edge of the World",
      "Red Sea Coast"
    ]
  },
  {
    id: 4,
    country: "Oman",
    totalDestinations: "18+",
    mainImage: "/assets/images/destinations/img-4.jpg",
    previewImage: "/assets/images/destinations/img-4.jpg",
    previewCountry: "UAE",
    destinations: [
      "Sultan Qaboos Grand Mosque",
      "Wahiba Sands",
      "Wadi Shab",
      "Nizwa Fort",
      "Jebel Shams"
    ]
  }
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      const slides = gsap.utils.toArray('.gallery-slide');

      // Create the horizontal animation
      const tween = gsap.to(slides, {
        // xPercent: -75 * (slides.length - 1), // 75% because we show 1 full + 1/4
        ease: "none"
      });

      // Create ScrollTrigger
      const scrollTrigger = ScrollTrigger.create({
        trigger: slidesRef.current,
        start: "top top",
        end: () => "+=" + (slides.length * 100) + "%",
        scrub: 1,
        pin: true,
        animation: tween,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentIndex = Math.round(progress * (slides.length - 1));
          setActiveIndex(currentIndex);
        }
      });

      // Refresh on resize
      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener('resize', handleResize);

      return () => {
        scrollTrigger.kill();
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="relative">
 
      {/* Gallery Section */}
      <div ref={containerRef} className="relative">
        <div ref={slidesRef} className="flex">
          {destinationsData.map((destination, index) => (
            <div
              key={destination.id}
              className={`gallery-slide flex-shrink-0 w-full pl-20 flex transition-all duration-700 ${activeIndex === index ? 'brightness-100' : 'brightness-90'
                }`}
            >
              {/* Main Image Area - Takes most of the left space */}
              <div className="flex-1 relative">
                <Image width={1700} height={700}
                  src={destination.mainImage}
                  alt={destination.country}
                  className="w-full h-full object-cover"
                />

                {/* Overlay with destination info - positioned in bottom left */}
                <div className="absolute inset-0 bg-black bg-opacity-20">
                  <div className="absolute bottom-16 left-12">
                    <h2 className="text-7xl font-bold text-white mb-4">{destination.country}</h2>
                    <div className="text-white mb-6">
                      <div className="text-5xl font-bold text-orange-400 mb-1">{destination.totalDestinations}</div>
                      <div className="text-xl text-gray-200">Destinations</div>
                    </div>

                    {/* Destinations list */}
                    <div className="space-y-2 mb-8">
                      {destination.destinations.map((dest, idx) => (
                        <div key={idx} className="text-lg text-gray-100">
                          {dest}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4">
                      <button className="px-6 py-3 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm">
                        Know More
                      </button>
                      <button className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 rounded-sm">
                        Enquire Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar - Contains pagination and preview */}
              <div className="w-80 flex flex-col bg-white relative">
                {/* Pagination Section - Top Right */}
               
                <div className="sticky top-8 right-8 z-10">
                  {/* Numerical Counter */}
                  <div className="text-right mb-4">
                    <span className="text-2xl font-light text-gray-400">
                      {String(activeIndex + 1).padStart(2, '0')} / {String(destinationsData.length).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Line Indicators */}
                  <div className="flex space-x-2">
                    {destinationsData.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-8 h-1 transition-all duration-300 ${activeIndex === idx
                          ? 'bg-blue-500'
                          : 'bg-gray-300'
                          }`}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Preview Image - Bottom part of sidebar */}
                <div className="flex-1 mt-24 relative">
                  <Image 
                    src={destination.previewImage}
                    alt={`${destination.previewCountry} preview`}
                    width={1700}
                    height={700}
                    className="w-full h-full object-cover"
                  />

                  {/* Preview Country Label */}
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-2xl font-bold text-white">
                      {destination.previewCountry}
                    </h3>
                  </div>

                  {/* Gradient overlay for better text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}