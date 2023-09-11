import ModernCarousel from "../../../components/Carousel/carousel";
import Header from "../../../components/Text/header";
import GrayWrapper from "../../../components/Wrapper/gray-wrapper";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <div className="m-4">
      <Header text={"Testimonial's"} />
      <GrayWrapper className="relative">
        <ModernCarousel />
      </GrayWrapper>
    </div>
  );
};

export default Testimonials;
