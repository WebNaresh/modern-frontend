type Props = {
  text: string;
  className?: string;
};

const Header = (props: Props) => {
  return (
    <h4
      className={`text-primary ${props.className} text-xl font-[fantasy] underline uppercase px-4`}
    >
      {props.text}
    </h4>
  );
};

export default Header;
