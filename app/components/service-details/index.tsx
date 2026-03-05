import Main from "./Main";
import ServiceOfferings from "./ServiceOfferings";
import WhyChoose from "./WhyChoose";
import OurProcess from "./OurProcess";
import { ServiceData } from "./type";

const Index = ({ data }: { data: ServiceData }) => {
  return (
    <>
      <Main data={data.firstSection} />
      <ServiceOfferings data={data.secondSection} />
      <WhyChoose data={data.thirdSection} />
      <OurProcess data={data.fourthSection} />
    </>
  );
};

export default Index;
