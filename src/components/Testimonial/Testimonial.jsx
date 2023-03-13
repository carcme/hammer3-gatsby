import React from "react";
import { TestimonialStyles } from "./TestimonialStyles";
import Carousel from "./Carousel/Carousel";
import data from "./Carousel/data.json";

const Expect = () => {
  return (
    <TestimonialStyles>
      <div className="section-divider-top">
        <h2>Testimonials</h2>
      </div>
      <Carousel list={data} />
    </TestimonialStyles>
  );
};

export default Expect;
