import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ButtonRoundStyles } from "./ButtonStyles";
// import Icon from "react-icons";

const Button = ({ text, link, icon }) => {
  return (
    <div>
      <ButtonRoundStyles>
        <AniLink paintDrip hex="#F60A0D" to={link}>
          {text}
        </AniLink>
        {/* <Icon>{icon}</Icon> */}

        {icon}
      </ButtonRoundStyles>
    </div>
  );
};

export default Button;
