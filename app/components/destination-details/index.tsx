"use client";

import Main from "./Main";
import Experiences from "./Experiences";
// import PhotoGallery from "./PhotoGallery";
import PhotoGalleryV2 from "./PhotoGalleryV2";
import WhyExplore from "./WhyExplore";
import type { DestinationData } from "./type";
import SevenEmirates from "./SevenEmirates";
import { usePathname } from "next/navigation";

const Index = ({ data }: { data: DestinationData }) => {
  const pathname = usePathname();
  return (
    <>
      <Main data={data.firstSection} about={data.secondSection} />
      {pathname === "/destinations/uae" && (
        <SevenEmirates heading="The Seven Emirates" items={data.destinationSection.items} />
      )}
      <Experiences data={data.thirdSection} />
      {/* <PhotoGallery data={data.fourthSection} /> */}
      <PhotoGalleryV2 data={data.fourthSection} />
      <WhyExplore data={data.fifthSection} />
    </>
  );
};

export default Index;
