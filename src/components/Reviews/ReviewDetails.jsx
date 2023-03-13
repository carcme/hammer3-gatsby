import React from "react";

const ReviewDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <div class="item">
      <div class="shadow-effect">
        <img class="img-circle" src={img} alt="nothing" />
        {description.map((description, i) => (
          <p>{description}</p>
        ))}
      </div>
      <div class="testimonial-name">
        <h5>{name}</h5>
        <p>{address}</p>
      </div>
    </div>
  );
};

export default ReviewDetails;
