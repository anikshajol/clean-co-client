import { Children } from "react";

const Header = ({ title, children }) => {
  return (
    <>
      <h2 className="text-4xl text-center my-3"> {title}</h2>
      <p className="text-lg">{children}</p>
    </>
  );
};

export default Header;
