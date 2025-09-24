
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
            <h2></h2>
          </div>
        </div>
      </div>
    </section>
   );
}
 
export default MIVI;