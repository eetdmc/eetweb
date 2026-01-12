import HeroV2Index from "./HeroV2Index";
import HeroBottom from "./HeroBottom";
import FeaturesSection from "./FeaturesSection";
import Services from "./Services";
import DestinationSection from "./DestinationSection";
// import BlogSlider from "./BlogSlider";
import Testimonials from "./Testimonials";
import SocialFeeds from "./SocialFeeds";
import type { HomeData } from "./type";
import type { DestinationData } from "../destination-details/type";

interface Props {
  data: HomeData;
  destinations: DestinationData[];
  services: {
    secondSection: {
      items: {
        title: string;
        description: string;
        image: string;
        slug: string;
        ctaHome: string;
        homeDescription: string;
        homeImage: string;
      }[]
    }
  };
}
const Index = ({ data, services, destinations }: Props) => {
  return (
    <>
      <HeroV2Index data={data.bannerSection} />
      <HeroBottom data={data.secondSection} />
      <FeaturesSection data={data.thirdSection} />
      <Services data={data.fourthSection} services={services} />

      <DestinationSection
        // data={data.fifthSection}
        destinations={destinations}
      />
      {/* <BlogSlider /> */}
      <Testimonials data={data.seventhSection} />
      <SocialFeeds />
    </>
  );
};

export default Index;
