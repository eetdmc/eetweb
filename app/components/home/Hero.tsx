"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { homeData } from "./data";
import Image from "next/image";
import { assets } from "@/public/assets";
import { useState, useRef } from "react";

// Custom Pagination Component matching the exact design
interface CustomPaginationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
  locations: string[];
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentSlide,
  totalSlides,
  onSlideChange,
  locations
}) => {
  return (
    <div className="flex flex-col items-end space-y-6">
      {/* Progress Line with Counter */}
      <div className="relative flex items-center">
        {/* Counter Badge */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 ">
          <span className="text-white text-sm font-light">
            {currentSlide + 1}
          </span>
          <span className="text-white/60 mx-2">-</span>
          <span className="text-white/60 text-sm">
            {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Slide Indicator Lines */}
        <div className="flex">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-12 h-[1px] transition-all duration-300 ${index === currentSlide
                  ? 'bg-primary'
                  : 'bg-white/30 hover:bg-white/50'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Location Navigation */}
      <div className="flex space-x-6">
        {locations.map((location, index) => (
          <button
            key={location}
            onClick={() => onSlideChange(index)}
            className={`text-sm transition-all duration-300 relative ${index === currentSlide
                ? 'text-white font-medium'
                : 'text-white/60 hover:text-white/80 font-light'
              }`}
          >
            {location}
            {/* Active indicator line */}
            {index === currentSlide && (
              <div className="absolute -bottom-1 left-0 w-full h-[1px]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};


const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const handleSwiperSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };
  return (
    <section className="w-full h-screen xl:h-[calc(100vh-130px)] pm-noise relative">
      <Image src={homeData.heroData[activeIndex].image} alt={homeData.heroData[activeIndex].title} width={1000} height={1000} className="w-[66%] h-full object-cover absolute right-0 top-0 z-0" />
      <div className="container h-full">
        <Swiper className="w-full h-full hero-slider" pagination={false} loop={true} modules={[Pagination, Navigation]} slidesPerView={1} speed={1000} autoplay={{ delay: 2500 }} 
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSwiperSlideChange}>
          {
            homeData.heroData.map((item, index) => {
              return (
                <SwiperSlide key={index} className="w-full h-full relative ">
                  <div className="container h-full z-10 relative">
                    <div className="flex flex-col justify-end h-full pb-10 xl:pb-30">
                      <div className="flex justify-between items-end">
                        <div className="w-full h-full xl:max-w-[30%] flex flex-col justify-end  ">
                          <h2 className="text-80 leading-[1] text-black font-[300] mb-5 xl:mb-22">{item.title}</h2>
                          <div className="flex items-center ">
                            <button className="border text-black font-light font-inter bg-transparent px-5 py-2 flex items-center gap-2 rounded-3xl">
                              <span>Explore Destinations</span>
                            </button>
                            <div className="bg-primary rounded-full w-8 h-8 xl:w-[44px] xl:h-[44px] flex items-center justify-center"><Image src={assets.arrowTopRight} alt="Arrow" width={20} height={20} /></div>
                          </div>
                        </div>
                        <div className="relative z-10">
                          <h3 className="text-80 leading-[1] text-white font-[300] mb-5 xl:mb-22 text-right">{item.location}</h3>
                          <div>
                            <CustomPagination
                              currentSlide={activeIndex}
                              totalSlides={homeData.heroData.length}
                              onSlideChange={handleSlideChange}
                              locations={homeData.heroData.map((item) => item.location)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          }
        </Swiper>
      </div>
    </section>
  );
}

export default Hero;