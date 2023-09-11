import Header from "../../../components/Text/header";
import GrayWrapper from "../../../components/Wrapper/gray-wrapper";

type Props = {};

const Message = (props: Props) => {
  return (
    <div className="flex flex-col w-full p-4 py-6 gap-4">
      <Header text={"Important Message"} />
      <GrayWrapper className="lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-12">
        <div className="grid col-span-3 p-4">
          <img
            src="/chhairmain.jpg"
            className="m-auto rounded-full border border-black h-[170px]"
            alt=""
          />
        </div>
        <div className="flex flex-col col-span-9  p-4">
          <h5 className="text-primary text-xl font-[fantasy] text-center lg:text-left xl:text-left underline uppercase py-4">
            CHAIRMAN'S Message
          </h5>
          <p className="text-md uppercase">
            You are getting your education in an institution where there is
            healthy atmosphere for your overall development and we`` are getting
            your education in an institution where there is healthy atmosphere
            for all.
          </p>
        </div>
      </GrayWrapper>
      <GrayWrapper className="flex flex-col-reverse lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-12">
        <div className="flex flex-col col-span-9  p-4">
          <h5 className="text-primary text-xl font-[fantasy] underline uppercase py-4 text-center lg:text-right xl:text-right">
            Principle Message
          </h5>
          <p className="text-md uppercase ">
            You are getting your education in an institution where there is
            healthy atmosphere for your overall development and we`` are getting
            your education in an institution where there is healthy atmosphere
            for all.
          </p>
        </div>
        <div className="grid col-span-3 p-4">
          <img
            src="/principle.jpg"
            className="m-auto rounded-full border border-black h-[170px]"
            alt=""
          />
        </div>
      </GrayWrapper>
    </div>
  );
};

export default Message;
