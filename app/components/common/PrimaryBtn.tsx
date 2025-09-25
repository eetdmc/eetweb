import Image from "next/image";
import { assets } from "@/public/assets";
import Link from "next/link";
const PrimaryBtn = ({ text, link }: { text: string, link?: string }) => {
  return (
    <div className="flex items-center relative group/main overflow-hidden w-fit">
      <Link
        href={link || "#"}
        className="border border-black text-black font-light font-inter bg-transparent px-5 
      py-2 flex items-center gap-2 rounded-3xl relative z-10 group/link overflow-hidden group-hover/main:text-white"
      >
        <div className="absolute top-0 left-0 w-0 h-full z-0 group-hover/main:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
        <span className="relative z-10">{text}</span>
      </Link>

      {/* Arrow container */}
      <div className="bg-primary rounded-full w-8 h-8 xl:w-[44px] xl:h-[44px] flex items-center justify-center relative overflow-hidden">
        {/* First arrow (default) */}
        <Image
          src={assets.arrowTopRight}
          alt="Arrow"
          width={20}
          height={20}
          className="w-4 h-4 xl:w-[13.79px] xl:h-[13.85px] object-contain brightness-0 invert 
                 absolute transition-all duration-400 ease-in-out 
                 group-hover/main:translate-x-2 group-hover/main:-translate-y-2 opacity-100 group-hover/main:opacity-0"
        />

        {/* Second arrow (enters on hover) */}
        <Image
          src={assets.arrowTopRight}
          alt="Arrow"
          width={20}
          height={20}
          className="w-4 h-4 xl:w-[13.79px] xl:h-[13.85px] object-contain brightness-0 invert 
                 absolute translate-x-[-1rem] translate-y-[1rem] opacity-0 
                 transition-all duration-400 ease-in-out 
                 group-hover/main:translate-x-0 group-hover/main:translate-y-0 group-hover/main:opacity-100"
        />
      </div>
    </div>

  );
}

export default PrimaryBtn;