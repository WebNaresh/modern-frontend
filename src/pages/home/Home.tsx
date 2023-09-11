import Department from "./components/department";
import HeroSection from "./components/hero-section";
import Message from "./components/message-section";
import Testimonials from "./components/testimonials";
import VideoGallery from "./components/video-gallery";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <HeroSection />
      <Message />
      <Department />
      <Testimonials />
      <VideoGallery />
    </div>
  );
};

export default Home;
