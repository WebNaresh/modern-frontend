import { AiOutlineUser } from "react-icons/ai";
import { FaMasksTheater } from "react-icons/fa6";
import Header from "../../components/Text/header";
import GrayWrapper from "../../components/Wrapper/gray-wrapper";

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="py-6 px-6">
      <GrayWrapper className="grid grid-cols-12 p-4 ">
        <div className="md:flex lg:flex xl:flex hidden col-span-6 items-center justify-center gap-2 flex-col my-10 border-r-2 border-primary">
          <img src="/modern-logo.png" className=" h-[300px]" alt="" />

          <h4 className="text-sm font-[math] hidden lg:block xl:block md:block">
            PROGRESSIVE EDUCATION SOCIETY&rsquo;S
          </h4>
          <h1 className="text-primary text-lg font-[fantasy]">
            MODERN COLLEGE OF ENGINEERING, PUNE
          </h1>
          <p className="text-sm font-[math] hidden lg:block xl:block md:block">
            Approved by AICTE, Affiliated to Savitribai Phule Pune University
          </p>
        </div>
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 col-span-12 flex items-center justify-center gap-2 flex-col my-10">
          <div>
            <Header className=" text-center" text={"Login"} />
            <div className="flex flex-col gap-4 my-4">
              <div className="w-full">
                <select
                  placeholder="Login As"
                  className="w-full p-2 text-slate-400 outline-none rounded-lg"
                  color="yellow"
                  style={
                    {
                      // color: "yellow",
                    }
                  }
                  title="Login As"
                >
                  <option className="text-black p-2" value="0" selected hidden>
                    Login As..
                  </option>
                  <option className="text-black p-2" value="2">
                    Student
                  </option>
                  <option className="text-black p-2" value="1">
                    Teacher
                  </option>
                  <option className="text-black p-2" value="2">
                    College Staff
                  </option>
                </select>
              </div>
              <div className="relative">
                <AiOutlineUser className="absolute top-3 left-1" />
                <input
                  placeholder="User Name"
                  type="text"
                  className=" outline-none text-md text-slate-600 p-2 pl-6 rounded-sm placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <FaMasksTheater className="absolute top-3 left-1" />
                <input
                  placeholder="Password"
                  type="password"
                  className=" outline-none text-md text-slate-600 p-2 pl-6 rounded-sm placeholder:text-sm"
                />
              </div>
              <button className="bg-primary w-fit m-auto p-1 text-white px-4 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </GrayWrapper>
    </div>
  );
};

export default Login;
