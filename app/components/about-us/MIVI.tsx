
import Image from "next/image";


const MIVI = () => {
  return ( 
    <section className="py-10 xl:py-25 2xl:py-[150px] sec-noise">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div>
            <div className="mb-8 xl:mb-50px">
              <Image src="/assets/images/about/mission.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[750px] object-cover" />
            </div>
            <h2 className="text-70 leading-[1] font-light text-black mb-30px">Mission</h2>
            <p className="text-19 leading-lhtext-19 font-light font-inter max-w-[40ch]">To deliver tailor-made destination solutions that blend cultural richness, logistical precision, and memorable experiences.</p>
          </div>
        <div className="flex flex-wrap justify-between">
          <div>
            <div className="mb-8 xl:mb-50px">
              <Image src="/assets/images/about/vision.jpg" alt="" width={1920} height={1080} className="w-full h-full max-h-[750px] object-cover" />
            </div>
            <h2 className="text-70 leading-[1] font-light text-black mb-30px">Vision</h2>
              <p className="text-19 leading-lhtext-19 font-light font-inter max-w-[40ch]">To be the most trusted and innovative destination management company in the GCC, setting benchmarks in service quality and sustainability.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
   );
}
 
export default MIVI;