import Main from "./Main";
import Experiences from "./Experiences";
import PhotoGallery from "./PhotoGallery";
import WhyExplore from "./WhyExplore";
import type { DestinationData } from "./type";

const Index = ({ data }: { data: DestinationData }) => {
  console.log(data);
  return (
    <>
      <Main data={data.firstSection} about={data.secondSection} />
      <Experiences data={data.thirdSection} />
      <PhotoGallery data={data.fourthSection} />
      <WhyExplore data={data.fifthSection} />
    </>
  );
};

export default Index;
