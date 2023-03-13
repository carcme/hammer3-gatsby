import React from "react";
import { Button77Styles } from "./ButtonStyles";
import { Link } from "gatsby";

const Button77 = ({ text, link, icon }) => {
  return (
    <Button77Styles>
      <Link to={link}>{text}</Link>
      {icon}
    </Button77Styles>
  );
};

export default Button77;
