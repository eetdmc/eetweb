"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { revealPresets, splitTextPresets, useSplitText } from "@/utils/animateText";

gsap.registerPlugin(ScrollTrigger);
const FeaturesSection = () => {


  const containerRef = useSplitText([
    {
      className: '.fadeInUp-text',
      options: {
        ...splitTextPresets.fadeInUp,
        delay: 0,
      }
    },
    {
      className: '.typewriter-text',
      options: {
        ...splitTextPresets.typewriter,
        delay: 0.5,
      }
    },
    {
      className: '.slideInLeft-text',
      options: {
        ...splitTextPresets.slideInLeft,
        delay: 1.0,
      }
    },
    {
      className: '.reveal-image',
      options: {
        ...revealPresets.slideFromLeft,
        delay: 1.0,
      }
    }
  ]);

  return (
    <section className="pt-25 xl:pt-[247px] pb-15 xl:pb-25 overflow-hidden" ref={containerRef}>
      <div className="container">
        <div className="grid grid-cols-[1fr_2fr] xl:grid-cols-[408px_auto] gap-20 3xl:gap-[235px]">
        
          <div className="w-full h-full "> 
              <Image src="/assets/images/home/features-section/main.jpg" alt="Features" width={1000} height={1000} className="w-full h-full object-cover" />
            </div>
          <div className="pr-20 xl:pr-[146px] pt-7 xl:pt-[38px]">
            <div className="grid grid-cols-2 3xl:grid-cols-[455px_auto]">
              <div className="border-r border-black/20">
                <div className="flex flex-col gap-5 pb-8 xl:pb-[49px] border-b border-black/20" >
                  <Image src="/assets/images/home/features-section/icons/icon-1.svg" alt="World Class Service" width={60} height={60} className="w-fit h-13 xl:h-[60px] object-contain" />
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text" >World Class Service</h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">Our world-class service ensures a seamless and unforgettable experience.</p>
                </div>
                <div className="flex flex-col gap-5 pt-10 xl:pt-[51px] pb-20 xl:pb-[130px]">
                  <Image src="/assets/images/home/features-section/icons/icon-2.svg" alt="Excellence" width={60} height={60} className="w-fit h-13 xl:h-[60px] object-contain" />
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text">Excellence</h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">Driven by precision, defined by quality—excellence is our standard.</p>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-5 pl-6 xl:pl-[71.5px] pb-8 xl:pb-[57px] pt-8 xl:pt-[115px] border-b border-black/20">
                  <Image src="/assets/images/home/features-section/icons/icon-3.svg" alt="24/7 Guide Support" width={60} height={60} className="w-fit h-13 xl:h-[60px] object-contain" />
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text" >24/7 Guide Support</h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">Our dedicated team of professional guides is just a call away—day or night.</p>
                </div>
                <div className="flex flex-col gap-5 pl-6 xl:pl-[71.5px] pb-5 xl:pb-[28px] pt-6 xl:pt-[43px] ">
                  <Image src="/assets/images/home/features-section/icons/icon-4.svg" alt="Authentic Experience" width={60} height={60} className="w-fit h-13 xl:h-[60px] object-contain" />
                  <h3 className="text-30 leading-[1.466666666666667] text-black font-light typewriter-text" >Authentic Experience</h3>
                  <p className="text-19 leading-[1.526315789473684] font-light font-inter text-[#484848] max-w-[36ch] slideInLeft-text">Connect with the true spirit of the Gulf through curated, local experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;