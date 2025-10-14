import Image from "next/image";
import { assets } from "@/public/assets";
const Main = () => {
  return (
    <section className=" pb-15  xl:pb-[114px] ">
      <div className="pm-noise pt-15 xl:pt-[130px]">
        <div className="container">
          <div className="text-center pb-10 xl:pb-[114px]">
            <h3 className="text-30 leading-lhtext-30 font-light text-black mb-3 xl:mb-[25px]">UAE</h3>
            <h1 className="text-80 leading-[1.25] font-light text-black max-w-7xl mx-auto">Explore the UAE with EET – Where Luxury Meets Tradition</h1>
          </div>
        </div>
      </div>
      <div className="mb-15 xl:mb-25">
        <Image src="/assets/images/destinations/details/uae-bnr.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[750px] object-cover" />
      </div>
      <div className="container">
        <div className="xl:max-w-[1135px] mx-auto mr-10 xl:mr-[107px]">
          <div className="border-b border-primary-light xl:pb-[150px]">
            <p className="text-30 leading-[1.333333333333333] font-light ">From iconic skylines to golden deserts, the UAE offers experiences that are both inspiring and unforgettable.</p>
          </div>
          <div className="pt-10 xl:pt-[68px] pb-15 xl:pb-30">
            <h2 className="text-50 xl:text-70 3xl:text-70 font-light leading-[1] mb-5 xl:mb-[30px] text-black">About UAE</h2>
            <p className="text-19 leading-lhtext-19 font-light font-inter max-w-[57ch]">The United Arab Emirates is a vibrant destination that blends world-class infrastructure with deep-rooted heritage. Whether you&apos;re planning a high-end event in Dubai, a cultural escape in Sharjah, or a tranquil retreat in Ras Al Khaimah, EET provides the expertise to make it exceptional.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;