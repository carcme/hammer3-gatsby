import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReviewDetails from "./ReviewDetails";
import OwlCarousel from "react-owl-carousel";
import { reviews } from "../../constants/reviews";
import { ReviewsStyles } from "./ReviewsStyles";

const Reviews = () => {
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    dots: false,
    autoplayTimeout: 8000,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    // className="testimonials pt-70 pb-70"
    <ReviewsStyles>
      <div className="section-divider-top">
        <div className="container">
          <h2 className="title">TESTIMONIALS</h2>
          <div>
            <h3>What Our Clients are Saying?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
          <div className="row">
            <div className="col-md-12">
              <OwlCarousel
                id="customer-testimonoals"
                className="owl-carousel owl-theme"
                {...options}
              >
                {reviews.map((reivewDetail) => {
                  return (
                    <ReviewDetails
                      testiMonialDetail={reivewDetail}
                      key={reivewDetail._key}
                    />
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </ReviewsStyles>
  );
};

export default Reviews;
