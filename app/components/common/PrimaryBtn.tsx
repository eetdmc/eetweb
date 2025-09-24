import Image from "next/image";
import { assets } from "@/public/assets";
import Link from "next/link";
const PrimaryBtn = ({text,link}: {text: string,link?: string}) => {
  return (
    <div className="flex items-center ">
      <Link href={link || "#"} className="border text-black font-light font-inter bg-transparent px-5 py-2 flex items-center gap-2 rounded-3xl">
        <span>{text}</span>
      </Link>
      <div className="bg-primary rounded-full w-8 h-8 xl:w-[44px] xl:h-[44px] flex items-center justify-center"><Image src={assets.arrowTopRight} alt="Arrow" width={20} height={20} className="w-4 h-4 xl:w-[13.79px] xl:h-[13.85px] object-contain brightness-0 invert" /></div>
    </div>
  );
}

export default PrimaryBtn;