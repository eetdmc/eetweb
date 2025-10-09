
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
interface SlideData {
  id: number;
  image: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: '/assets/images/destinations/details/photo-gallery/img-1.jpg',
  },
  {
    id: 2,
    image: '/assets/images/destinations/details/photo-gallery/img-2.jpg',
  },
  {
    id: 3,
    image: '/assets/images/destinations/details/photo-gallery/img-3.jpg',
  },
  {
    id: 4,
    image: '/assets/images/destinations/details/photo-gallery/img-1.jpg',
  },
  {
    id: 5,
    image: '/assets/images/destinations/details/photo-gallery/img-2.jpg',
  }
];

const PhotoGallery = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Animate slider entrance
    gsap.fromTo(
      '.swiper-container',
      { opacity: 1, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    // Animate active slide
    const activeSlide = swiper.slides[swiper.activeIndex];

    gsap.fromTo(
      activeSlide.querySelector('img'),
      { scale: 0.5 },
      { scale:1, duration: 0.6, ease: 'power2.out' }
    );
  };
  return (
    <section className="py-10 xl:py-20 2xl:pt-30 2xl:pb-[266.06px]">
      <div className="container">
        <div className="max-w-[1318px] flex items-center justify-between">
          <h2 className="text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-5 xl:mb-20 text-black">Photo Gallery</h2>
          <div className="flex gap-5 w-fit">
            <button className="swiper-button-next-team" onClick={() => { swiperRef.current?.slideNext() }}> <Image src={assets.pmArrowLeft} alt={"arrow"} width={30} height={30} className="" /></button>
            <button className="swiper-button-prev-team" onClick={() => { swiperRef.current?.slidePrev() }}> <Image src={assets.pmArrowRight} alt={"arrow"} width={30} height={30} className="" /></button>
          </div>
        </div>
        <div>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={50}
            speed={700}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 1,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                coverflowEffect: {
                  depth: 100,
                  modifier: 1,
                }
              },
              768: {
                slidesPerView: 2,
                coverflowEffect: {
                  depth: 150,
                  modifier: 1,
                }
              },
              1024: {
                slidesPerView: 2.8,
                coverflowEffect: {
                  depth: 100,
                  modifier: 1,
                }
              },
            }}
            modules={[Navigation, Autoplay, EffectCoverflow]}
            onSlideChange={handleSlideChange}
            className="w-full h-full !py-12 md:!py-16 lg:!py-20"
          >
            {slides.map((slide) => (
              <SwiperSlide   key={slide.id} className="flex items-center justify-center !h-auto" >
                {({ isActive }) => (
                  <div className={`relative w-full h-full  overflow-hidden transition-all duration-700 ${isActive ? 'scale-200' : 'scale-100 opacity-100'
                      }`}
                  >
                    {/* Image */}
                    <Image width={1920} height={1280} src={slide.image}  alt={`Slide ${slide.id}`} className="w-full h-full object-contain"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Custom Styles */}
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
      `}</style>
    </section>
  );
}

export default PhotoGallery;