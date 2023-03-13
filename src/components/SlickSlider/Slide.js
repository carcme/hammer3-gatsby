import React from "react";
import { Figure, HostContainer, FigureCap } from "./SlideStyle";

const Slide = ({ data }) => {
  return (
    <HostContainer>
      <Figure>
        <img src={data.img} alt="profile-sample6" className="profile" />
        <FigureCap>
          <h3>{data.name}</h3>
          <h4>{data.address}</h4>
          <blockquote>{data.description.flat()}</blockquote>
        </FigureCap>
      </Figure>
    </HostContainer>
  );
};

export default Slide;
