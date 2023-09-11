import ModernCarouselVideo from "../../../components/Carousel/components/carousel-video-card";
import Header from "../../../components/Text/header";
import GrayWrapper from "../../../components/Wrapper/gray-wrapper";

type Props = {};

const VideoGallery = (props: Props) => {
  return (
    <div className="m-4">
      <Header text={"Video Gallery"} />
      <GrayWrapper className="relative">
        <ModernCarouselVideo />
      </GrayWrapper>
    </div>
  );
};

export default VideoGallery;
