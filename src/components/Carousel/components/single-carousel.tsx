import Carousel, { DotProps } from "react-multi-carousel";

function SingleCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <Carousel
      centerMode={true}
      arrows={true}
      responsive={responsive}
      infinite
      customDot={<CustomDot />}
      showDots
      autoPlay
    >
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </Carousel>
  );
}

export default SingleCarousel;

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
  return <div className=" w-8 h-8">helo1</div>;
};
