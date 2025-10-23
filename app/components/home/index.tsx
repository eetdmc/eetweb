import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FeaturesSection from "./FeaturesSection";
import Services from "./Services";
import DestinationSection from "./DestinationSection";
// import BlogSlider from "./BlogSlider";
import Testimonials from "./Testimonials";
import SocialFeeds from "./SocialFeeds";
import type { HomeData } from "./type";
interface Props {
  data: HomeData;
}
const Index = ({ data }: Props) => {
  return (
    <>
      <Hero data={data.bannerSection} />
      <HeroBottom data={data.secondSection} />
      <FeaturesSection data={data.thirdSection} />
      <Services />
      <DestinationSection />
      {/* <BlogSlider /> */}
      <Testimonials data={data.seventhSection} />
      <SocialFeeds />
    </>
  );
};

export default Index;
