"use client"
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { homeData } from "./data";
import { assets } from "@/public/assets";
import Image from "next/image";
import { useTextReveal } from "@/hooks/useTextReveal";
import { motion } from "motion/react";
import { moveDown } from "../motionVarients";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function splitTextIntoChars(element: HTMLElement) {
  const text = element.textContent || '';
  const chars = text.split('');
  
  element.innerHTML = chars
    .map((char) => {
      if (char === ' ') return '<span class="inline-block">&nbsp;</span>';
      return `<span class="inline-block">${char}</span>`;
    })
    .join('');
  
  return element.querySelectorAll('span');
}
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = homeData.testimonials.items.length ;
  // useTextReveal({selector: ".title", stagger: 0.03, duration: 0.9, y: 50, rotateX: -90, ease: "power3.out", start: "top 90%"});/
  // // Animate headings
  // useTextReveal({ selector: '.heading' });

  // // Animate subtitles with different settings
  // useTextReveal({
  //   selector: '.subtitle',
  //   stagger: 0.02,
  //   duration: 0.4,
  //   y: 30,
  // });
 
  useEffect(() => {
    const titles = document.querySelectorAll<HTMLElement>('.title');

    titles.forEach((title) => {
      const chars = splitTextIntoChars(title);

      // Set perspective for 3D rotation
      gsap.set(title, { perspective: 400 });

      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: 50,
          rotateX: -90,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.03,
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-10 xl:py-30 pm-noise">
      <div className="container">
        <div className="mb-5 xl:mb-[78px]">
          <h2 className="title text-70 text-center font-light text-black">Client Testimonials</h2>
        </div>
        <div className="">
          <Swiper className="testimonials-slider relative" modules={[Navigation, EffectFade]} slidesPerView={1} spaceBetween={30}
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-testimonials",
              nextEl: ".swiper-button-next-testimonials",
            }}>
            {homeData.testimonials.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="max-w-[1428px] mx-auto">
                  <div className="border-b border-primary-light pb-5 xl:pb-12 text-center">
                    <h3 className="text-30 leading-[1.2] font-light text-black">{item.name}</h3>
                  </div>
                  <div className="pt-10 xl:pt-15 flex justify-between">
                    <motion.div variants={moveDown(0.2)} initial="hidden" whileInView="show" viewport={{ once: false, amount: "all" }}>
                      <Image src={assets.quoteUp} alt="quote-up" width={227} height={205.2} className="w-8 xl:w-[227px] h-auto" />
                    </motion.div>
                    <div>
                      <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={current === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: false, amount: "all" }}
                        className="text-19 leading-lhtext-19 font-light font-inter text-center max-w-[50ch] mb-4 xl:mb-0"
                      >
                        {item.quote}
                      </motion.p>
                    </div>
                    <motion.div variants={moveDown(0.4)} initial="hidden" whileInView="show" viewport={{ once: false, amount: "all" }}>
                      <Image src={assets.quoteDown} alt="quote-down" width={227} height={205.2} className="w-8 xl:w-[227px] h-auto" />
                    </motion.div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex flex-col justify-center items-center max-w-[1428px] mx-auto gap-y-5 xl:gap-y-0">
            <div className="testimonials-slider-navigation flex justify-center items-center gap-6 ">
              <button  className="swiper-button-prev-testimonials">
                <Image src={assets.pmArrowLeft} alt="" width={52} height={32} className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]" />
              </button>

              <button className="swiper-button-next-testimonials">
                <Image src={assets.pmArrowRight} alt="" width={52} height={32} className="w-8 xl:w-10 h-auto 2xl:w-[52px] 2xl:h-[32px]" />
              </button>
            </div>
            <div className="pt-0 xl:pt-10">
              <h4 className="text-50 leading-[0.8] font-light text-black/30">
               {/* {String(current).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")} */}
                {String(current + 1).padStart(2, "0")}/{String(totalSlides).padStart(2, "0")}
               </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;