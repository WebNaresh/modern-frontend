import { FaHandsBubbles } from "react-icons/fa6";
import { IoIosNotificationsOutline } from "react-icons/io";
import SingleCarouseOne from "../../../components/Carousel/components/single-carousel-1";
import GrayWrapper from "../../../components/Wrapper/gray-wrapper";
type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="w-full pb-4 flex flex-col-reverse xl:grid xl:grid-cols-12 lg:grid lg:grid-cols-12 border-b border-primary">
      <div className=" col-span-4 px-4">
        <div className="w-full text-center p-4 bg-primary h-fit rounded-xl my-4">
          <h5 className="text-white text-2xl font-[fantasy]">
            Important Notification
          </h5>
        </div>
        <GrayWrapper className="w-full text-center p-4 bg-primary h-fit flex flex-col">
          <div className="flex px-4 py-3 gap-4 border-b border-primary">
            <div className="py-1">
              <IoIosNotificationsOutline className="text-primary" />
            </div>
            <div>
              <p className="text-primary text-xs text-left w-4/5">
                MCA PROVISIONAL MERIT LIST FOR A CAP & IL 2023-24
              </p>
            </div>
          </div>
          {array.map((i) => {
            return (
              <div
                key={i}
                className="flex px-4 py-3 gap-4 border-b border-primary"
              >
                <div className="py-1">
                  <IoIosNotificationsOutline className="text-primary" />
                </div>
                <div>
                  <p className=" text-xs text-left w-4/5">
                    MCA PROVISIONAL MERIT LIST FOR A CAP & IL 2023-24
                  </p>
                </div>
              </div>
            );
          })}
        </GrayWrapper>
      </div>
      <div className="grid col-span-8 h-fit px-4 ">
        <div className="my-4 flex">
          <div className="rounded-xl m-auto w-full">
            <SingleCarouseOne />
          </div>
        </div>
        <div className="flex gap-4 p-4">
          <div className="flex items-center">
            <FaHandsBubbles className="text-primary text-xl" />
          </div>
          <h4 className="text-primary font-[fantasy] uppercase text-xl">
            Inauguration Photos of 70&rsquo;s statement day
          </h4>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
const array: any[] = [1, 2, 3, 4];
