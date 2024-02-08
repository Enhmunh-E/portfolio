export const Button = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: string;
}) => {
  return (
    <div
      className=" py-3 px-4 font-raleway font-normal text-xs border border-white text-secondary lg:text-base hover:bg-white hover:text-black"
      onClick={() => onClick && onClick()}
    >
      {children}
    </div>
  );
};

export default Button;
