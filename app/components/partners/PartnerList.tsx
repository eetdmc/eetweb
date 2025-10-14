import { partnerData } from "./data";
import Image from "next/image";
const PartnerList = () => {
  return ( 
    <section className="pb-15 xl:pb-[300px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8 xl:gap-15">
          {partnerData.PartnerList.items.map((item, index) => (
            <div key={index} className="border-b border-black/10 flex justify-center items-center pb-8 xl:pb-15">
              <div className="">
                <Image src={item.image} alt={item.name} width={200} height={200} className="w-25 xl:w-auto max-w-[100%] h-auto object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
   );
}
 
export default PartnerList;