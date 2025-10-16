import DestinationSliderNew from "./DestinationSliderNew";

const DestinationSection = () => {
  return ( 
    <section className="py-10 xl:py-30 overflow-hidden">
      <div className="container">
        <div className="3xl:pl-[573px]" >
          <h2 className="title text-70 leading-[1] font-light mb-4 xl:mb-[50px] max-w-4xl text-black">Expertise Behind Every Experience</h2>
          <h3 className="text-34 leading-[1.235294117647059] font-light text-black">Destinations</h3>
        </div>
      </div>
      <DestinationSliderNew />
    </section>
   );
}
 
export default DestinationSection;