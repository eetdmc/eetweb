"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image"; 
import { assets } from "@/public/assets";
import { motion } from "motion/react";
import { moveUp } from "../motionVarients";
type AccordionProps = {
  title: string;
  content: string;
  image: string | StaticImageData;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
};

const AccordionStyleThree: React.FC<AccordionProps> = ({ title, content, image, isOpen, onToggle, index }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: "auto",
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(iconRef.current, {
          rotate: 180,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
        gsap.to(iconRef.current, {
          rotate: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    }
  }, [isOpen]);

  return (
    <motion.div variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="border-b border-primary-light mb-1 px-2 xl:pl-[38px] xl:pr-[40.38px] first:border-t">
      <button onClick={onToggle} onMouseEnter={onToggle}  className="w-full  py-4 2xl:py-10 text-left relative">
       <div className="flex gap-4 justify-between items-center">
         <div className="flex gap-4 lg:gap-10 2xl:gap-[224px]   items-center">
          <h4 className="text-30 leading-[1.466666666666667] font-light text-black ">{(index + 1).toString().padStart(2, "0")}</h4>
        <div className="ml-container w-full ">
          <h3 className="text-30 leading-[1.466666666666667] font-light text-black">{title}</h3>
        </div>
         </div>
        {/* <ArrowDown ref={iconRef} className="xl:w-10 xl:h-[24.6px] text-primary transform absolute right-0" /> */}
        <Image src={assets.arrowDown} ref={iconRef} alt="arrow-down" className="w-4 h-4 lg:w-3 lg:h-3 xl:w-[40px] xl:h-[40px] object-contain text-primary transform " />
    
       </div>
         </button>
      <div ref={contentRef} className="overflow-hidden h-0 text-gray-600">
        <div className="pb-4 ml-container lg:pl-[15px]">
          <div className="flex flex-col gap-y-5 lg:flex-row xl:gap-10 2xl:gap-20 overflow-hidden">
            <Image src={image} alt={title} width={533} height={390} className="h-[300px] w-full object-cover xl:w-[533px] xl:h-[390px] xl:object-contain flex object-top" />
            <p className="text-19 leading-lhtext-19 font-light max-w-[40ch] font-inter">{content}</p>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default AccordionStyleThree;
