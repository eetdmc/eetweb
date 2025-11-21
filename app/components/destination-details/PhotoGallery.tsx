"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { assets } from "@/public/assets";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";
import { useEffect } from "react";
import gsap from "gsap";
import { useTextReveal } from "@/hooks/useTextReveal";
import { DestinationFourthSection } from "./type";

type Props = {
  data: DestinationFourthSection;
};

const PhotoGallery = ({ data }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);
  useTextReveal({ selector: ".heading-one" });
  useEffect(() => {
    // Animate slider entrance
    gsap.fromTo(
      ".swiper-container",
      { opacity: 1, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    // Animate active slide
    const activeSlide = swiper.slides[swiper.activeIndex];

    gsap.fromTo(
      activeSlide.querySelector("img"),
      { scale: 0.5 },
      { scale: 1, duration: 0.6, ease: "power2.out" }
    );
  };
  return (
    <section className="pt-10 pb-12 xl:py-20 2xl:pt-[144px] 2xl:pb-[180px] pm-noise">
      <div className="container">
        <div className="max-w-[1160px] 3xl:max-w-[1465px] flex items-center justify-between mb-10 2xl:mb-[70px]">
          <h2 className="text-50 font-light leading-[1] text-black heading-one">
            {data.title}
          </h2>
          <div className="flex gap-2 lg:gap-5 w-fit">
            <button
              className="swiper-button-next-team cursor-pointer"
              onClick={() => {
                swiperRef.current?.slidePrev();
              }}
            >
              <Image
                src={assets.pmArrowLeft}
                alt={"arrow"}
                width={40}
                height={24.62}
                className="w-4 lg:w-8 xl:w-10 h-auto"
              />
            </button>
            <button
              className="swiper-button-prev-team cursor-pointer"
              onClick={() => {
                swiperRef.current?.slideNext();
              }}
            >
              <Image
                src={assets.pmArrowRight}
                alt={"arrow"}
                width={40}
                height={24.62}
                className="w-4 lg:w-8 xl:w-10 h-auto"
              />
            </button>
          </div>
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={50}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                coverflowEffect: {
                  depth: 100,
                  modifier: 1,
                },
              },
              768: {
                slidesPerView: 2,
                coverflowEffect: {
                  depth: 150,
                  modifier: 1,
                },
              },
              1024: {
                slidesPerView: 2.7,
                coverflowEffect: {
                  depth: 100,
                  modifier: 1,
                },
              },
            }}
            modules={[Navigation, Autoplay, EffectCoverflow]}
            onSlideChange={handleSlideChange}
            className="w-full h-full !py-0 md:!py-0 lg:!py-0 md:h-[300px] 2xl:h-[629.94px] photo-gallery-slider"
          >
            {data.items.map((slide) => (
              <SwiperSlide
                key={slide._id}
                className="flex items-center justify-center !h-auto"
              >
                {({ isActive }) => (
                  <div
                    className={`relative w-full h-full  overflow-hidden transition-all duration-700 ${
                      isActive ? "scale-200" : "scale-100 opacity-100"
                    }`}
                  >
                    {/* Image */}
                    <Image
                      width={1116}
                      height={629}
                      src={slide.image}
                      alt={slide.imageAlt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Custom Styles
      <style jsx global>{`
        .swiper-slide {
          transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .swiper-slide-active {
          z-index: 2;
        }

        .swiper-slide-prev,
        .swiper-slide-next {
          z-index: 1;
        }
      `}</style> */}
    </section>
  );
};

export default PhotoGallery;
