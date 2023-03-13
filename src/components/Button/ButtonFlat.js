import * as React from "react";
import { MdArrowForward as Arrow } from "react-icons/md";
import { ButtonFlatStyles } from "./ButtonStyles";

const ButtonFlat = ({ text, to, as, arrow }) => {
  return (
    <ButtonFlatStyles className="btn" as={as} to={to}>
      {text}
      {arrow || to ? <Arrow style={{ marginLeft: "10px" }} /> : null}
    </ButtonFlatStyles>
  );
};

export default ButtonFlat;
