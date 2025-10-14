"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { teamData } from "./data";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/public/assets";
import { useState, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { motion } from "motion/react";
const TeamSlider = () => {
  const [isTileView, setIsTileView] = useState(false);
  const handleTileView = () => {
    setIsTileView(!isTileView);
  }
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };
  return (
    <section className="">
      <div className="container">
        <div className="xl:max-w-[1136px] ml-auto">
          <h2 className="text-50 xl:text-70 3xl:text-70 font-[200] leading-[1] mb-5 xl:mb-[30px] text-black">Meet Our Team</h2>
        </div>
      </div>
      <div className="sec-noise relative">
        <div className="container relative">
          <div className={`w-full flex justify-between items-center absolute px-4 left-0 z-50 transition-all duration-300 ease-in-out ${isTileView ? "top-10" : "top-20"}`}>
            <div className="flex gap-[14px] items-center">
              <button onClick={handleTileView} className={`w-[29px] gap-[3px] group transition-all duration-300 ease-in-out ${isTileView ? "flex" : "grid grid-cols-2"}`}>
                <span className="w-[13px] h-[13px] bg-lggray hover:bg-primary transition-all duration-300 ease-in-out"></span>
                <span className="w-[13px] h-[13px] bg-lggray hover:bg-primary transition-all duration-300 ease-in-out"></span>
                <span className="w-[13px] h-[13px] bg-lggray hover:bg-primary transition-all duration-300 ease-in-out"></span>
                <span className="w-[13px] h-[13px] bg-lggray hover:bg-primary transition-all duration-300 ease-in-out"></span>
              </button>
              <div><p className="text-base font-light font-inter leading-[1] group-hover:font-bold transition-all duration-300 ease-in-out">{isTileView ? "Slider View" : "Tile View"}</p></div>
            </div>
            <div className={`flex gap-5 w-fit transition-opacity duration-300 ease-in-out ${isTileView ? "opacity-0" : "opacity-100"}`}>
              <button className="swiper-button-next-team" onClick={() => { swiperRef.current?.slideNext() }}> <Image src={assets.pmArrowLeft} alt={"arrow"} width={30} height={30} className="" /></button>
              <button className="swiper-button-prev-team" onClick={() => { swiperRef.current?.slidePrev() }}> <Image src={assets.pmArrowRight} alt={"arrow"} width={30} height={30} className="" /></button>
            </div>
          </div>
          <div className={`absolute bottom-20 transition-opacity duration-300 ease-in-out ${isTileView ? "opacity-0" : "opacity-100"}`}>
            <div className="pagination">
              {/* Progress Bar */}
              <div className="w-32 h-[0.5px] bg-black/20 mb-3 overflow-hidden">
                <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
              {/* Slide Counter */}
              <h3 className="flex items-center text-55 font-light leading-[1.181818181818182] text-black/30">
                <span className="">{formatNumber(currentSlide)}</span>
                <span className=""> / </span>
                <span className="">{formatNumber(totalSlides)}</span>
              </h3>
            </div>
          </div>
          {
            isTileView ? (
              <div className="grid grid-cols-2 md:grid-cols-3 py-30 gap-8 xl:gap-15">
                {
                  teamData.teamList.map((item, index) => (
                    <div key={index} className="bg-white  p-5 xl:p-8 rounded-lg shadow-lg relative team-tilecard group">
                      <div className="team-overlay"></div>
                      <div className="relative z">
                        <Image src={item.image} alt={item.name} width={513} height={531} className="w-full h-full xl:h-[400px] object-contain" />
                      </div>
                      <div className="text-center pb-4 relative z-30 group-hover:text-white">
                        <h3 className="text-30 font-light mb-[10px] ">{item.name}</h3>
                        <p className="text-19 font-light font-inter">{item.position}</p>
                      </div>
                      <div className="">
                        <Link href={"#"} className="slide-link flex items-center justify-center text-center rounded-full bg-primary p-3 w-12 h-12 mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                          <Image src={assets.arrowTopRight} alt={item.name} width={30} height={30} className="w-10 h-10 brightness-0 invert -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out" />
                        </Link>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : (
              <Swiper className="team-slider" modules={[Navigation, Autoplay, Pagination]} spaceBetween={0} slidesPerView={1}
                effect="slide"
                loop={true}
                //  centeredSlides={true}
                speed={1000}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  // Use the actual length of your data array
                  setTotalSlides(teamData.teamList.length);
                }}

                onSlideChange={(swiper) => {
                  const realIndex = swiper.realIndex + 1;
                  setCurrentSlide(realIndex);

                  // Calculate progress percentage
                  const progressPercent = (realIndex / totalSlides) * 100;
                  setProgress(progressPercent);
                  // Use realIndex for loop mode
                  setCurrentSlide(swiper.realIndex + 1);

                  swiper.slides.forEach((slide) => {
                    slide.classList.remove("swiper-slide-next");
                  });
                  swiper.slides[swiper.activeIndex].classList.add("swiper-slide-next");
                }}


                breakpoints={{
                  300: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  900: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }} >

                {
                  teamData.teamList.map((item, index) => (
                    <SwiperSlide key={index} className="group">
                      {({ isNext }) => (
                        <div className="relative h-full">
                          <div className="team-overlay"></div>
                          <div className="team-item relative z-10 h-full">
                            <motion.div
                              key={isNext ? `next-${index}` : `normal-${index}`}
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: isNext ? 1 : 1, y: isNext ? 0 : 50 }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="staff-img"
                            >
                              <Image src={item.image} alt={item.name} width={513} height={531} />
                            </motion.div>

                            <h3 className="text-30 font-light mb-[10px]">{item.name}</h3>
                            <p className="text-19 font-light font-inter">{item.position}</p>
                            <div>
                              <Link href={"#"} className="slide-link">
                                <Image src={assets.arrowTopRight} alt={item.name} width={30} height={30} />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </SwiperSlide>

                  ))
                }
              </Swiper>
            )}
        </div>
      </div>
    </section>
  );
}

export default TeamSlider;