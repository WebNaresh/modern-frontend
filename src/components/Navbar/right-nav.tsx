import { Link } from "react-router-dom";

type Props = {};

const RightNav = (props: Props) => {
  return (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>Departments</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/signup"}>SignUp</Link>
      </li>
    </>
  );
};

export default RightNav;
