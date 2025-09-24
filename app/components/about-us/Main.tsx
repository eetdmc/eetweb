import Image from "next/image";
import { assets } from "@/public/assets";
const Main = () => {
  return ( 
    <section className=" pb-15  xl:pb-[114px] ">
      <div className="pm-noise pt-15 xl:pt-[130px]">
      <div className="container">
        <div className="text-center pb-10 xl:pb-[114px]">
          <h3 className="text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]">About EET</h3>
          <h1 className="text-80 leading-[1.25] font-[200] text-black max-w-7xl mx-auto">Crafting Exceptional Journeys Across the Gulf</h1>
        </div>
      </div>
      </div>
      <div className="mb-15 xl:mb-25">
        <Image src="/assets/images/about/main.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[750px] object-cover" />
      </div>
      <div className="container">
        <div className="xl:max-w-[1136px] mx-auto">
          <div className="border-b border-primary-light pt-15 pb-15 xl:pt-25 xl:pb-30">
            <p className="text-30 leading-[1.333333333333333] font-light ">EET DMC is a destination management company built on a foundation of excellence, innovation, and deep regional expertise. Headquartered in the UAE and operating across the GCC, we specialize in delivering seamless travel, MICE, and leisure experiences.</p>
          </div>
          <div className="pt-10 xl:pt-[68px] pb-15 xl:pb-30">
            <h2 className="text-50 xl:text-70 3xl:text-70 font-[200] leading-[1] mb-5 xl:mb-[30px] text-black">Our Legacy</h2>
            <p className="text-19 leading-lhtext-19 font-light font-inter max-w-[57ch]">With years of experience in hospitality and event logistics, EET has grown from a small team into a recognized regional leader in DMC services. Our legacy is built on trust, creativity, and an unwavering commitment to service excellence.</p>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default Main;