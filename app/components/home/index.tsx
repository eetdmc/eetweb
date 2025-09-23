import Hero from "./Hero";
import HeroBottom from "./HeroBottom";
import FeaturesSection from "./FeaturesSection";
import Services from "./Services";
// import DestinationSlider from "./DestinationSlider";
// import HorizontalGallery from "./HorizontalGallery";
import DestinationSlider from "./DestinationSlider";
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
      {/* <DestinationSlider /> */}
      {/* <HorizontalGallery /> */}
      <DestinationSlider />
      <BlogSlider />
      <Testimonials />
      <SocialFeeds />
    </>
  );
}

export default Index;