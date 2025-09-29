"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react"; // you can use any icon
import Image from "next/image";
import { StaticImageData } from "next/image";

type AccordionProps = {
  title: string;
  content: string;
  image: string | StaticImageData;
};

const Accordion: React.FC<AccordionProps> = ({ title, content, image }) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center py-4 text-left">
        <span className="text-lg font-medium">{title}</span>
        <ChevronDown ref={iconRef} className="w-5 h-5 transform" />
      </button>

      <div ref={contentRef} className="overflow-hidden h-0 text-gray-600">
        <div className="pb-4">
          <Image src={image} alt="Arrow" width={600} height={600} className="w-full h-[200px] object-cover mb-5" />
          <p> {content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
