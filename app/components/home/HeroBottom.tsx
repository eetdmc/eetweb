import PrimaryBtn from "../common/PrimaryBtn";
import Image from "next/image";
const HeroBottom = () => {
  return ( 
    <section className="pt-25 xl:pt-50 pb-15 xl:pb-25 pm-noise ">
      <div className="container relative">
        <div className="xl:pl-30 2xl:pl-[392px]">
          <p className="text-30 leading-[1.333333333333333] font-light mb-10 xl:mb-20 max-w-[70ch]">
            EET Destination Management is a leading inbound tour operator and travel management company serving the Arabian Gulf, with extensive expertise in tourism, tours, and MICE services across the UAE, Oman, Bahrain, Qatar, Kuwait, and Saudi Arabia.
          </p>
          <PrimaryBtn text="About EET" link="#" />
        </div>
        <div className="absolute bottom-[-80%] right-0 w-40 h-28 xl:w-[699px] xl:h-[279px]">
          <Image src="/assets/images/home/hero/bottom-img.jpg" alt="Arrow" width={1000} height={1000} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
   );
}
 
export default HeroBottom;