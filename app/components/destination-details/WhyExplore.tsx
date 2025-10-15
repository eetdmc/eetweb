
import Image from "next/image";
const WhyExplore = () => {
  return (
    <section className="pm-noise py-10 xl:py-20 2xl:pt-[145px] 2xl:pb-[400px]">
      <div className="container">
        <div className="xl:max-w-[1000px] 2xl:max-w-[1283px] xl:ml-auto">
          <h2 className="text-50 xl:text-70 3xl:text-70 font-light leading-[1] text-black max-w-[15ch] mb-10 xl:mb-20">Why Explore UAE with EET?</h2>
        </div>
        <div className="explr-grid">
          <div className="explr-grid__col">
            <div className="">
              <div className="ml-auto">
                <Image src="/assets/images/destinations/details/why-explore/icon-1.svg" width={60} height={60} alt="" className="mb-4 xl:mb-30px"></Image>
                <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Access to exclusive venues and experiences</h3>
              </div>
            </div>
          </div>
          <div className="explr-grid__col">
            <div >
              <div className="mb-4 xl:mb-30px">
                <Image src="/assets/images/destinations/details/why-explore/icon-2.svg" width={60} height={60} alt="" className="mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">On-ground support in all 7 Emirates</h3>

              </div>
            </div>
            <div className="">
              <div>
                <Image src="/assets/images/destinations/details/why-explore/icon-3.svg" width={60} height={60} alt="" className="mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Multilingual expert guides</h3>
              </div>
            </div>
          </div>
          <div className="explr-grid__col">
            <div>
              <div>
                <Image src="/assets/images/destinations/details/why-explore/icon-4.svg" width={60} height={60} alt="" className="mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Custom group packages and corporate rates</h3>
              </div>
            </div>
            <div className="">
              <div>
                <Image src="/assets/images/destinations/details/why-explore/icon-5.svg" width={60} height={60} alt="" className="mb-4 xl:mb-30px"></Image>
              <h3 className="text-30 leading-[1.333333333333333] font-light text-black">Round-the-clock assistance</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyExplore;