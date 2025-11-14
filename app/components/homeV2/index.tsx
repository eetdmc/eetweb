import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FeaturesSection from "./FeaturesSection";
import Services from "./Services";
import DestinationSection from "./DestinationSection";
// import BlogSlider from "./BlogSlider";
import Testimonials from "./Testimonials";
import SocialFeeds from "./SocialFeeds";
import type { HomeData } from "./type";
import type { DestinationData } from "../destination-details/type";
import type { ServiceData } from "../service-details/type";

interface Props {
  data: HomeData;
  destinations: DestinationData[];
  services: ServiceData[];
}
const Index = ({ data, services, destinations }: Props) => {
  return (
    <>
      <Hero data={data.bannerSection} />
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
