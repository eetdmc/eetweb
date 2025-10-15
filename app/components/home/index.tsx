import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FeaturesSection from "./FeaturesSection";
import Services from "./Services";
// import DestinationSliderOne from "./DestinationSliderOne";
// import DestinationSlider from "./DestinationSlider";
import DestinationSliderNew from "./DestinationSliderNew";
import BlogSlider from "./BlogSlider";
import Testimonials from "./Testimonials";
import SocialFeeds from "./SocialFeeds";
const Index = () => {
  return (
    <>
      <Hero />
      <HeroBottom />
      <FeaturesSection />
      <Services />
      {/* <DestinationSliderOne /> */}
      {/* <DestinationSlider /> */}
      <DestinationSliderNew />
      {/* <BlogSlider /> */}
      <Testimonials />
      <SocialFeeds />
    </>
  );
}

export default Index;