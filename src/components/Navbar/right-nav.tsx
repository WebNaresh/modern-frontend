import { Link } from "react-router-dom";

type Props = {};

const RightNav = (props: Props) => {
  return (
    <>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>Departments</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </>
  );
};

export default RightNav;
