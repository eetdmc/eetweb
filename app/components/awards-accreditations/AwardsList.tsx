import { assets } from "@/public/assets";
import { awardsData } from "./darta";
import Image from "next/image";
import Link from "next/link";
import { AwardData } from "./type";

type AwardsListProps = {
  data: AwardData["data"]["firstSection"]["items"];
};
const AwardsList = ({ data }: AwardsListProps) => {
  return (
    <section className="pb-40 xl:pb-[300px] 2xl:pb-[400px]">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 xl:gap-x-8 xl:gap-y-5 2xl:gap-x-[104px] 2xl:gap-y-[84px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden hover:overflow-visible bg-gray-500/10 xl:bg-transparent p-2 md:p-4 xl:p-0"
            >
              <div className="pb-8 xl:pb-[23px] pt-8 xl:pt-[13px] px-2 lg:px-6 border-b border-black/10 group-hover:border-none transition-all duration-300 ">
                <div className="flex items-center justify-between xl:text-center relative translate-x-1/2  group-hover:translate-x-0 transition-all duration-300">
                  <h4 className="text-19 leading-lhtext-19 font-light font-inter text-center  transition-all duration-300">
                    {item.year}
                  </h4>
                  <Link
                    href={item.title}
                    className="bg-primary rounded-full flex items-center justify-center xl:absolute -top-2 -right-20 group-hover:right-0 w-8 h-8 xl:w-[44px] xl:h-[44px]  transition-all duration-300"
                  >
                    <Image
                      src={assets.arrowTopRight}
                      alt={item.imageAlt}
                      width={30}
                      height={30}
                      className="w-3 xl:w-auto max-w-[100%] h-auto object-contain cursor-pointer brightness-0 invert"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center pb-8 lg:pb-10 xl:pb-[66px] group-hover:bg-[#f8f8f8] transition-all duration-300">
                <div className="flex flex-col items-center justify-center xl:min-h-[247px] my-4 xl:my-0">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={229}
                    height={200}
                    className="w-25 max-w-[100%] h-auto xl:w-auto object-contain group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-20 xl:text-34 leading-[1.294117647058824] font-light text-center text-black w-fit mx-auto group-hover:mx-0 transition-all duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsList;
