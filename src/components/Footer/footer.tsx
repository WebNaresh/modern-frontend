import { ReactNode } from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
type Props = {};
type Social = {
  text: string;
  bg: string;
  icon: ReactNode;
};

const Footer = (props: Props) => {
  return (
    <div className="bg-primary flex flex-col ">
      <div className="grid grid-cols-3 gap-4  border-b py-4 px-6 border-red-100 pb-3">
        <div className="col-span-3 sm:col-span-2 md:col-span-2 xl:col-span-2 lg:col-span-2 text-white text-center sm:text-left md:text-left xl:text-left lg:text-left  gap-1 flex flex-col">
          {" "}
          <h4 className="text-[0.55rem] uppercase font-semibold">
            PROGRESSIVE EDUCATION SOCIETY&rsquo;S
          </h4>
          <h1 className=" text-xl font-[fantasy] underline">
            MODERN COLLEGE OF ENGINEERING, PUNE
          </h1>
          <p className="text-[0.55rem] font-semibold">
            Approved by AICTE, Affiliated to Savitribai Phule Pune University
          </p>
        </div>
        <div className="text-white col-span-3 sm:col-span-1 md:col-span-1 xl:col-span-1 lg:col-span-1 flex ">
          {array.map((e, i) => {
            return <SocialComp key={i} text={e.text} icon={e.icon} bg={e.bg} />;
          })}
        </div>
      </div>
      <div className=" text-white py-4 px-6 gap-4 flex flex-col sm:grid sm:grid-cols-12 lg:grid lg:grid-cols-12 xl:grid xl:grid-cols-12 text-center">
        <div className=" col-span-3 flex align-center flex-col gap-2 border-b border-white pb-4">
          <h3 className="font-sembold font-[fantasy]">Sitemap</h3>
          <div className="flex gap-6 justify-center lg:flex-row sm:flex-row xl:flex-row md:flex-row  flex-col flex-wrap underline">
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
          </div>
        </div>
        <div className=" col-span-3 flex align-center flex-col gap-2 border-b border-white pb-4">
          <h3 className="font-sembold font-[fantasy]">Important Link's</h3>
          <div className="flex gap-6 justify-center lg:flex-row sm:flex-row xl:flex-row md:flex-row flex-col flex-wrap underline">
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
            <div className="text-xs ">
              <Link to={"/"}> Deparment</Link>
            </div>
          </div>
        </div>
        <div className=" col-span-3 flex align-center flex-col gap-2 border-b border-white pb-4">
          <h3 className="font-sembold font-[fantasy]">Address</h3>
          <div className="flex gap-6 flex-wrap underline flex-col lg:flex-row sm:flex-row xl:flex-row md:flex-row">
            <div className="flex items-center gap-4">
              <div>
                <IoLocationSharp />
              </div>
              <Link className="text-xs text-left" to={"/"}>
                1186/A, Off J.M. Road, Shivajinagar, Pune, Maharashtra Pin-
                411005.
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <IoMdCall />
              </div>
              <Link className="text-xs" to={"/"}>
                xx-xx-xx-xx-xx
              </Link>
            </div>
          </div>
        </div>
        <div className=" col-span-3 flex align-center flex-col gap-2">
          <h3 className="font-sembold font-[fantasy]">Map</h3>
          <div className="flex gap-6 justify-center flex-row flex-wrap ">
            <img src="/map.webp" className="rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialComp = (props: Social) => {
  return (
    <div className="m-auto flex  flex-col items-center">
      <div className={`rounded-full p-3 ${props.bg}`}>{props.icon}</div>
      <div className="text-xs font-semibold">{props.text}</div>
    </div>
  );
};
export default Footer;

const array: Social[] = [
  {
    text: "facebook",
    bg: "bg-sky-600",
    icon: <BiLogoFacebook className="" />,
  },
  {
    text: "Instagram",
    bg: "bg-pink-500",
    icon: <BsInstagram className="" />,
  },
  {
    text: "Twitter",
    bg: "bg-black",
    icon: <FaXTwitter className="" />,
  },
  {
    text: "Telegram",
    bg: "bg-sky-400",
    icon: <FaTelegramPlane className="" />,
  },
];
