import { FaUserGraduate } from "react-icons/fa";
import Header from "../../../components/Text/header";
import GrayWrapper from "../../../components/Wrapper/gray-wrapper";

type Props = {};

const Department = (props: Props) => {
  return (
    <div className="m-4 gap-4 flex flex-col">
      <Header text={"Department's"} />
      <GrayWrapper className="p-4  grid grid-cols-12">
        <DepartmentItem />
        <DepartmentItem />
        <DepartmentItem />
        <DepartmentItem />
        <DepartmentItem />
        <DepartmentItem />
        <DepartmentItem />
      </GrayWrapper>
    </div>
  );
};

export default Department;
const DepartmentItem = (props: Props) => {
  return (
    <div className=" col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 relative px-8 py-2">
      <div className="absolute p-4 rounded-full bg-primary left-[7px] bottom-[22px]">
        <FaUserGraduate />
      </div>
      <div className=" bg-white text-primary font-[fantasy] w-full sm:w-full lg:w-[270px] xl:w-[270px] md:w-[270px] p-6 px-4 rounded-r-full">
        <Header text={"MCA"} />
      </div>
    </div>
  );
};

// const array: any[] = [1, 2, 3, 4, 5];
