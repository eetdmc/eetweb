"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  title: string;
  content: string;
  image: string | StaticImageData;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionStyleThree: React.FC<AccordionProps> = ({ title, content, image, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

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
    <div className="border-b border-gray-300 bg-white/70 mb-1 px-2">
      <button onClick={onToggle} onMouseEnter={onToggle} onMouseLeave={onToggle} className="w-full flex justify-between items-center py-4 text-left">
        <h3 className="text-30 leading-[1.2] font-light text-black">{title}</h3>
        <ChevronDown ref={iconRef} className="w-5 h-5 transform" />
      </button>

      <div ref={contentRef} className="overflow-hidden h-0 text-gray-600">
        <div className="pb-4">
          <p className="text-20 leading-[1.5] font-light text-black max-w-[80%] font-inter">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionStyleThree;
