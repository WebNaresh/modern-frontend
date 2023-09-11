import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import LeftNav from "./left-nav";
import RightNav from "./right-nav";

type Props = {};

const Navbar = (props: Props) => {
  const [switchNav, setSwitchNav] = useState(false);
  const isClickedOutsideNavbar = (event: Event) => {
    const navbar = document.getElementById("navbarSupportedContent1");
    const button = document.getElementById("button-id-1"); // Replace with your actual button ID
    const targetElement = event.target as Node;

    if (
      navbar &&
      button &&
      !navbar.contains(targetElement) &&
      !button.contains(targetElement)
    ) {
      navbar.classList.add("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("click", isClickedOutsideNavbar);
    document.addEventListener("scroll", isClickedOutsideNavbar);

    return () => {
      document.removeEventListener("click", isClickedOutsideNavbar);
      document.removeEventListener("scroll", isClickedOutsideNavbar);
    };
  }, []);
  return (
    <div className=" transition-all">
      <nav
        className={` fixed top-0 lg:flex md:flex xl:flex lg:h-[90px] flex-no-wrap  z-30 w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-black/5 dark:bg-slate-900 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 shadow-lg`}
        data-te-navbar-ref
      >
        <div className="flex w-full justify-between px-3 h-full">
          <div
            className="!visible flex-grow basis-[100%] items-center lg:!flex lg:basis-auto transform  transition-all duration-300 ease-in-out"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex  pl-0 lg:flex-row items-center gap-6"
              data-te-navbar-nav-ref
            >
              <li>
                <img
                  src="/modern-logo.png"
                  height={"50px"}
                  width={"50px"}
                  alt="Moder logo"
                  className=" p-1 border-primary rounded-lg border"
                ></img>
              </li>
              <LeftNav />
            </ul>
          </div>

          <div className="relative  flex">
            <div className=" md:relative xl:relative lg:relative m-auto">
              <ul
                className="list-style-none mr-auto hidden xl:flex pl-0 lg:flex-row items-center gap-8 align-center font-[fantasy] text-primary px-4  md:flex lg:flex"
                data-te-navbar-nav-ref
              >
                <RightNav />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav
        id="navbarSupportedContent1"
        className={`${
          switchNav ? "flex" : "hidden"
        } fixed top-0 lg:h-[90px] flex-no-wrap  z-30 w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-black/5 dark:bg-slate-900 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 shadow-lg`}
        data-te-navbar-ref
      >
        <div className="flex w-full justify-between px-3 h-full flex-col">
          <div
            className="!visible flex-grow basis-[100%] items-center lg:!flex lg:basis-auto transform  transition-all duration-300 ease-in-out"
            data-te-collapse-item
          >
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row items-center gap-6"
              data-te-navbar-nav-ref
            >
              <li>
                <img
                  src="/modern-logo.png"
                  height={"50px"}
                  width={"50px"}
                  alt="Moder logo"
                  className=" p-1 border-primary rounded-lg border"
                ></img>
              </li>
              {/* <LeftNav /> */}
            </ul>
          </div>

          <div className="flex">
            <div className="m-auto">
              <ul
                className="list-style-none mr-auto flex-col py-3 lg:flex-row items-center flex gap-4 align-center font-[fantasy] text-primary px-4  md:flex lg:flex"
                data-te-navbar-nav-ref
              >
                <RightNav />
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <GiHamburgerMenu
        id="button-id-1"
        onClick={() => setSwitchNav(switchNav === true ? false : true)}
        className="text-xl cursor-pointer md:hidden lg:hidden xl:hidden fixed right-0 top-0 m-6 z-50"
      />
    </div>
  );
};

export default Navbar;
