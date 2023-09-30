import axios, { AxiosError, AxiosResponse } from "axios";
import toast from "react-hot-toast";
import { AiOutlineAppstore, AiOutlineUser } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { FaMasksTheater } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Text/header";
import GrayWrapper from "../../components/Wrapper/gray-wrapper";
type Props = {};

const SignUp = (props: Props) => {
  const navigate = useNavigate();
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      role: (e.target as any).userType.value,
      name: (e.target as any).userName.value,
      email: (e.target as any).userEmail.value,
      password: (e.target as any).password.value,
    };
    console.log(formData);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      axios
        .post(process.env.REACT_APP_API_URL as string, formData, config)
        .then((response: AxiosResponse) => {
          console.log(response);

          toast.success(response.data.message, {
            duration: 4000,
            position: "top-center",
            style: {},
            className: "",
            icon: "👏",
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
          if (response.data.message.includes("User exist please try Log IN")) {
            console.log(`🚀 ~ response.data.message:`, response.data.message);
            navigate("/login");
          }
        })
        .catch((errors: AxiosError) => {
          console.log(errors);
          toast.error(errors.message, {
            duration: 4000,
            position: "top-center",
            style: {},
            className: "",
            icon: "👏",
            iconTheme: {
              primary: "#000",
              secondary: "#fff",
            },
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
        })
        .finally(() => console.log("complted"));
    } catch (error) {
      console.log(`🚀 ~ error:`, error);
    }
  };
  return (
    <div className="py-6 px-12">
      <GrayWrapper className="grid grid-cols-12 p-4 ">
        <div className="md:flex lg:flex xl:flex hidden col-span-6 items-center justify-center gap-2 flex-col my-10 border-r-2 border-primary">
          <img
            src="/modern-logo.png"
            className="md:h-[200px] lg:h-[250px] xl:h-[300px]"
            alt=""
          />

          <h4 className="text-sm font-[math] hidden lg:block xl:block md:block">
            PROGRESSIVE EDUCATION SOCIETY&rsquo;S
          </h4>
          <h1 className="text-primary text-lg font-[fantasy]">
            MODERN COLLEGE OF ENGINEERING, PUNE
          </h1>
          <p className="text-sm font-light text-center hidden lg:block xl:block md:block">
            Approved by AICTE, Affiliated to Savitribai Phule Pune University
          </p>
        </div>
        <div className="md:col-span-6 lg:col-span-6 xl:col-span-6 col-span-12 flex items-center justify-center gap-2 flex-col my-10">
          <form onSubmit={onSubmit} className="w-full px-4">
            <Header className=" text-center" text={"SignUp"} />
            <div className="flex flex-col gap-4 my-4">
              <div className="w-full relative">
                <AiOutlineAppstore className="absolute top-3 left-3" />
                <select
                  required
                  name="userType"
                  className="w-full p-2 text-slate-400 outline-none rounded-md pl-8 "
                  color="yellow"
                  defaultChecked={false}
                >
                  <option className="text-black p-2" value="Student">
                    Student
                  </option>
                  <option className="text-black p-2" value="Teacher">
                    Teacher
                  </option>
                  <option className="text-black p-2" value="HOD">
                    College Staff
                  </option>
                </select>
              </div>
              <div className="relative w-full">
                <AiOutlineUser className="absolute top-3 left-2" />
                <input
                  name="userName"
                  required
                  placeholder="User Name"
                  type="text"
                  className=" outline-none text-md w-full text-slate-600 p-2 pl-8 rounded-sm placeholder:text-sm"
                />
              </div>
              <div className="relative w-full">
                <BiMailSend className="absolute top-3 left-2" />
                <input
                  name="userEmail"
                  required
                  placeholder="User Email"
                  type="text"
                  className=" outline-none text-md w-full text-slate-600 p-2 pl-8 rounded-sm placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <FaMasksTheater className="absolute top-3 left-2" />
                <input
                  name="password"
                  required
                  placeholder="Password"
                  type="password"
                  className=" outline-none text-md w-full text-slate-600 p-2 pl-8 rounded-sm placeholder:text-sm"
                />
              </div>
              <button className="bg-primary w-fit m-auto p-1 text-white px-4 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </GrayWrapper>
    </div>
  );
};

export default SignUp;
