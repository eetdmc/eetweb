import Main from "./Main";
import Experiences from "./Experiences";
// import PhotoGallery from "./PhotoGallery";
import PhotoGalleryV2 from "./PhotoGalleryV2";
import WhyExplore from "./WhyExplore";
import type { DestinationData } from "./type";
import SevenEmirates from "./SevenEmirates";
import { emiratesData } from "./data";

const Index = ({ data }: { data: DestinationData }) => {
  return (
    <>
      <Main data={data.firstSection} about={data.secondSection} />
      <SevenEmirates heading="The Seven Emirates" items={emiratesData} />
      <Experiences data={data.thirdSection} />
      {/* <PhotoGallery data={data.fourthSection} /> */}
      <PhotoGalleryV2 data={data.fourthSection} />
      <WhyExplore data={data.fifthSection} />
    </>
  );
};

export default Index;
