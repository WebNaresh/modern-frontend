type Props = {};

const LeftNav = (props: Props) => {
  return (
    <>
      <li className="hidden sm:block md:block xl:block">
        <h4 className="text-sm font-[math] hidden lg:block xl:block md:block">
          PROGRESSIVE EDUCATION SOCIETY&rsquo;S
        </h4>
        <h1 className="text-primary text-lg font-[fantasy]">
          MODERN COLLEGE OF ENGINEERING, PUNE
        </h1>
        <p className="text-sm font-[math] hidden lg:block xl:block md:block">
          Approved by AICTE, Affiliated to Savitribai Phule Pune University
        </p>
      </li>
    </>
  );
};

export default LeftNav;
