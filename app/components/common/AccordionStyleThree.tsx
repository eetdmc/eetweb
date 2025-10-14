"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import { ArrowDown } from "lucide-react";
import { assets } from "@/public/assets";

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
    <div className="border-b border-primary-light mb-1 px-2 xl:pl-[38px] xl:pr-[40.38px] first:border-t">
      <button onClick={onToggle} onMouseEnter={onToggle}  className="w-full flex justify-between items-center py-4 2xl:py-10 text-left relative">
        <h4 className="text-30 leading-[1.466666666666667] font-light text-black absolute left-0">{(index + 1).toString().padStart(2, "0")}</h4>
        <div className="ml-container w-full pl-[15px]">
          <h3 className="text-30 leading-[1.466666666666667] font-light text-black">{title}</h3>
        </div>
        {/* <ArrowDown ref={iconRef} className="xl:w-10 xl:h-[24.6px] text-primary transform absolute right-0" /> */}
        <Image src={assets.arrowDown} ref={iconRef} alt="arrow-down" className="xl:w-[40px] xl:h-[40px] object-contain text-primary transform absolute right-0" />
      </button>
      <div ref={contentRef} className="overflow-hidden h-0 text-gray-600">
        <div className="pb-4 ml-container pl-[15px]">
          <div className="flex xl:gap-10 2xl:gap-20 overflow-hidden">
            <Image src={image} alt={title} width={533} height={390} className="w-[533px] h-[390px] object-contain flex" />
            <p className="text-19 leading-lhtext-19 font-light max-w-[40ch] font-inter">{content}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AccordionStyleThree;
