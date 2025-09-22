
import Image from "next/image";
import { assets } from "@/public/assets";

const Footer   = () => {
  return ( 
    <footer className="bg-black h-screen">
      <div className="container">
        <div className="relative z-0">
          <div className="absolute -top-30 xl:-top-[215px] w-full h-fit xl:h-auto xl:max-h-[435px] left-0 ">
            <div className="w-full h-full absolute z-0">
              <Image src={assets.footerImg} alt="" width={1700} height={700} className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-0  bg-black/60 w-full h-full z-10"></div>
            <div className="relative z-20 px-8 xl:px-[142px] py-30 xl:py-[145px]">
              <div className="flex items-center justify-between">
                <h2 className="max-w-4xl text-70 font-[200] text-white leading-[1]">Start Your Destination Experience Today</h2>
                <button className="rounded-full font-inter border border-white px-4 py-3 xl:px-[65px] xl:py-[49.5px] flex items-center gap-5 text-30 font-light leading-lhtext-30 ">
                  <span className="text-white">Let&apos;s Connect</span>
                  <Image src={assets.arrowPrimary} alt="" width={50} height={50} className="w-8 xl:w-10 h-auto" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </footer>
   );
}
 
export default Footer ;