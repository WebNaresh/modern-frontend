import Carousel, { DotProps } from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

function ModernCarouselVideo() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <Carousel
      className="m-12"
      // centerMode={true}
      arrows={true}
      responsive={responsive}
      infinite
      customDot={<CustomDot />}
      showDots
      //   autoPlay
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Carousel>
  );
}

export default ModernCarouselVideo;

const CustomDot: React.FC<DotProps> = ({ index, onClick, active }) => {
  return (
    <div
      onClick={() => onClick?.()}
      className={`px-4 py-[2px] m-2 cursor-pointer ${
        active ? "bg-slate-400" : "bg-primary"
      }`}
    ></div>
  );
};

type Props = {};

const VideoCard = (props: Props) => {
  return (
    <div className="py-8">
      <div className="m-2">
        <iframe
          className="rounded-lg"
          src="https://www.youtube.com/embed/nSJy0oMPcdY?si=3YpmSl1XPhY3-yCr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h4 className="text-primary text-center font-bold">
          Dr. (Mrs.) K. R. Joshi
        </h4>
      </div>
      <div>
        <p className="text-slate-600 text-center text-xs italic">
          "One Of the Thing of Modern College Of Enginneering Is Its Atmosphere"
        </p>
      </div>
    </div>
  );
};
