import Image from "next/image";
const BehindTheScene = () => {
  return ( 
    <section className="pt-10 xl:pt-30 pb-15 xl:pb-[130px] 2xl:pb-[350px]">
      <div className="container">
        <div className="xl:max-w-[1285px] 2xl:max-w-[1400px] ml-auto mb-15 xl:mb-25 2xl:mb-[132px]">
          <h2 className="text-50 xl:text-70 3xl:text-70 font-[200] leading-[1] mb-5 xl:mb-[30px] text-black/50 xl:max-w-[23ch]">We’re your team behind the scenes.</h2>
        </div>
        <div className="flex justify-between">
          <div>
            <Image src={"/assets/images/team/b-1.jpg"} alt={""} width={408} height={498} />
          </div>
          <div>
            <div className="ml-auto pr-15 xl:pr-[145px]">
              <p className="text-30 leading-[1.333333333333333] font-light max-w-[59ch]">With years of experience in hospitality and event logistics, EET has grown from a small team into a recognized regional leader in DMC services. Our legacy is built on trust, creativity, and an unwavering commitment to service excellence.</p>
            </div>
            <Image src={"/assets/images/team/b-2.jpg"} alt={""} width={406} height={192} className="mt-15 xl:mt-[146px] ml-auto" />
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default BehindTheScene;