import Carousel, { DotProps } from "react-multi-carousel";

import CarouselCard from "./components/carousel-card";

function ModernCarousel() {
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
      slidesToSlide={3}
      className="m-12"
      // centerMode={true}
      arrows={true}
      responsive={responsive}
      infinite
      customDot={<CustomDot />}
      showDots
      autoPlay
    >
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
      <CarouselCard />
    </Carousel>
  );
}

export default ModernCarousel;

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
