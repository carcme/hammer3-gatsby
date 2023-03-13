import React, { Component } from "react";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlickSliderStyles } from "./SlickSliderStyles";
import Slide from "./Slide";
import { reviews } from "../../constants/reviews";

const SimpleSlider = () => {
  var settings = {
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    speed: 500,
    appendDots: (dots) => <ul style={{ marginBottom: "-30px" }}> {dots} </ul>,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerMode: true,

          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <SlickSliderStyles>
      <div className="section-divider-top">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <Slide data={review} />
          ))}
        </Slider>
      </div>
    </SlickSliderStyles>
  );
};

export default SimpleSlider;
