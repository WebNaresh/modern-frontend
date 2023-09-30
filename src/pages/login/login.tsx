import axios, { AxiosError, AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import toast from "react-hot-toast";
import { BiMailSend } from "react-icons/bi";
import { FaMasksTheater } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Text/header";
import GrayWrapper from "../../components/Wrapper/gray-wrapper";

type Props = {};

const Login = (props: Props) => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([
    "naresh",
    "LoginDetais",
  ]);
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
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
        .post(process.env.REACT_APP_API_Login as string, formData, config)
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
          setCookie("LoginDetais", response.data.token);
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
            <form onSubmit={onSubmit} className="flex flex-col gap-4 my-4">
              <div className="relative">
                <BiMailSend className="absolute top-3 left-1" />
                <input
                  required
                  name="userEmail"
                  placeholder="E-mail"
                  type="email"
                  className=" outline-none text-md text-slate-600 p-2 pl-6 rounded-sm placeholder:text-sm"
                />
              </div>
              <div className="relative">
                <FaMasksTheater className="absolute top-3 left-1" />
                <input
                  required
                  name="password"
                  placeholder="Password"
                  type="password"
                  className=" outline-none text-md text-slate-600 p-2 pl-6 rounded-sm placeholder:text-sm"
                />
              </div>
              <button className="bg-primary w-fit m-auto p-1 text-white px-4 rounded-md">
                Submit
              </button>
            </form>
          </div>
        </div>
      </GrayWrapper>
    </div>
  );
};

export default Login;
