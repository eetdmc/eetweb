"use client"
import { useState, useEffect, useCallback } from "react";
import { homeData } from "./data";
import { assets } from "@/public/assets";
import Image from "next/image";

const TestimonialsDemo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const totalItems = homeData.testimonials.items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const handleWheel = useCallback((e: Event) => {
    const wheelEvent = e as WheelEvent;
    wheelEvent.preventDefault();

    if (isScrolling) return;

    setIsScrolling(true);

    if (wheelEvent.deltaY > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    // Debounce wheel events
    setTimeout(() => {
      setIsScrolling(false);
    }, 300);
  }, [isScrolling, nextSlide, prevSlide]);

  useEffect(() => {
    const element = document.querySelector('.testimonials-container');
    if (element) {
      element.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        element.removeEventListener('wheel', handleWheel);
      };
    }
  }, [handleWheel]);

  const currentItem = homeData.testimonials.items[currentIndex];

  return (
    <section className="py-25 xl:py-30">
      <div className="container">
        <div className="mb-8 xl:mb-[95px]">
          <h2 className="text-70 text-center font-light text-black">Client Testimonials</h2>
        </div>
        <div className="overflow-hidden h-screen testimonials-container">
          <div className="h-screen">
            <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-[598px_512px_auto] h-full">
              <div className="pt-15 xl:pt-[112px]">
                <h3 className="text-30 leading-lhtext-30 font-light text-black border-b border-[#5C8898] pb-5 xl:pb-[39px] transition-all duration-500 ease-in-out">
                  {currentItem.name}
                </h3>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[512px] h-[566px] overflow-hidden rounded-3xl">
                  <Image
                    src={currentItem.image}
                    alt={`${currentItem.name} testimonial`}
                    width={512}
                    height={566}
                    className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                    key={currentIndex} // Force re-render for smooth transition
                  />
                </div>
              </div>
              <div>
                <div className="relative pt-15 xl:pt-[95px]">
                  <div className="testimonials-slider-pagination h-30 pl-15 xl:pl-[113px] border-b border-[#5C8898] pb-5 xl:pb-[39px] relative">
                    <button
                      onClick={prevSlide}
                      className="swiper-button-prev-testimonials absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:opacity-70 transition-opacity"
                      type="button"
                      aria-label="Previous testimonial"
                    >
                      <Image
                        src={assets.pmArrowLeft}
                        alt="Previous"
                        width={50}
                        height={50}
                        className="w-8 xl:w-10 h-auto"
                      />
                    </button>

                    <button
                      onClick={nextSlide}
                      className="swiper-button-next-testimonials absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:opacity-70 transition-opacity"
                      type="button"
                      aria-label="Next testimonial"
                    >
                      <Image
                        src={assets.pmArrowRight}
                        alt="Next"
                        width={50}
                        height={50}
                        className="w-8 xl:w-10 h-auto"
                      />
                    </button>


                  </div>
                </div>
                <div className="pt-15 xl:pt-[50px] pl-15 xl:pl-[113px] pr-6 xl:pr-[48px]">
                  <p className="text-19 leading-lhtext-19 font-inter font-light transition-all duration-500 ease-in-out">
                    {currentItem.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsDemo;