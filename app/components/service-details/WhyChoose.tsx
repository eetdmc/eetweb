import { serviceDetailsData } from "./data";
import Image from "next/image";
  const WhyChoose = () => {
  return ( 
    <section className="py-15 xl:py-25 2xl:pt-30 2xl:pb-[269px]">
      <div className="container">
          <h2 className="text-50 xl:text-70  font-light leading-[1] mb-5 xl:mb-[30px] text-black xl:max-w-[15ch]">Why Choose EET for MICE?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 why-choose-wrap">
          {
            serviceDetailsData.whyChoose.items.map((item, index) => (
              <div key={index} className="pl-5 xl:pl-6 2xl:pl-[47px] first:border-l border-primary-light min-h-[506px] flex flex-col last:pt-5 group">
                <div  className="card-head">
                  <p className="text-19 leading-lhtext-19 font-inter text-primary crd-index pb-50px">{(index + 1).toString().padStart(2, "0")}</p>
                  <h3 className="text-30 leading-[1.466666666666667] font-light pb-3 xl:pb-[25px]">{item.title}</h3>
                  <p className="pb-8 xl:pb-10">{item.content}</p>
                </div>
                <div className="">
                  <Image src={item.image} alt={item.title} width={383} height={264} className="h-30 w-auto xl:h-[264px] xl:w-[383px] object-contain flex" />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
   );
}
 
export default WhyChoose;