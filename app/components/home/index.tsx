import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FeaturesSection from "./FeaturesSection";
import Services from "./Services";
import DestinationSection from "./DestinationSection";
// import BlogSlider from "./BlogSlider";
import Testimonials from "./Testimonials";
import SocialFeeds from "./SocialFeeds";
const Index = () => {
  return (
    <>
      <Hero />
      <HeroBottom />
      <FeaturesSection />
      <Services />
      <DestinationSection />
      {/* <BlogSlider /> */}
      <Testimonials />
      <SocialFeeds />
    </>
  );
}

export default Index;