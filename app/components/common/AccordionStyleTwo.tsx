"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";

type AccordionProps = {
  title: string;
  content: string;
  image: string | StaticImageData;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionStyleTwo: React.FC<AccordionProps> = ({
  title,
  content,
  image,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: "auto",
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.4,
          ease: "power2.inOut",
        });
      }
    }
  }, [isOpen]);

  return (
    <div className="border-b border-primary-light mb-1 ">
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
        className="w-full flex justify-between items-center py-2 xl:py-4 text-left"
      >
        <h3 className="text-30 leading-[1.2] font-light text-black">{title}</h3>
        <Image
          src={image}
          alt="Arrow"
          width={20}
          height={20}
          className="w-8 xl:w-auto h-auto object-cover xl:mb-5 mr-10 xl:mr-[54px]"
        />
      </button>

      <div ref={contentRef} className="overflow-hidden h-0 text-gray-600">
        <div className="pb-4">
          <p className="text-20 leading-[1.5] font-light text-black max-w-[80%] font-inter">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionStyleTwo;
