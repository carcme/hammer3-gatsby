import styled from "styled-components";

export const ReviewsStyles = styled.section`
  display: block;
  margin: auto;
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
  background-color: var(--background);

  .title {
    display: flex;
    justify-content: center;
    margin: 40px 0;
    text-align: center;
  }

  .shadow-effect {
    background: var(--bg-eigengrau);
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    border: 1px solid var(--bodyColor);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.02);
  }
  #shadow-effect p {
    font-family: inherit;
    font-size: 17px;
    line-height: 1.5;
    margin: 0 0 17px 0;
    font-weight: 300;
  }
  .img-circle {
    width: 200px;
    height: 200px;
    object-fit: fill;
    border-radius: 50%;
    margin: 0 auto 17px;
  }
  #customer-testimonoals {
    margin-top: 6%;
  }
  .testimonial-name {
    margin: -17px auto 0;
    display: table;
    width: auto;
    background: linear-gradient(135deg, var(--blood-red), #400303);
    padding: 9px 35px;
    border-radius: 12px;
    text-align: center;
    color: #fff;
    box-shadow: 0px 9px 18px rgba(0, 0, 0, 0.12), 0px 5px 7px rgba(0, 0, 0, 0.5);
  }
  #customer-testimonoals .item {
    text-align: center;
    padding: 50px;
    margin-bottom: 0px;
    opacity: 0.2;
    transform: scale3d(0.5, 0.5, 1);
    transition: all 0.3s ease-in-out;
  }

  //   @media (max-width: 700px) {
  //     #customer-testimonoals .item {
  //       transform: scale3d(0, 0, 1);
  //     }
  //   }

  #customer-testimonoals .item:hover {
    opacity: 0.5;
    transition: all 0.3s ease-in-out;

    #customer-testimonoals .item {
      border: 1px solid var(--blood-red);
    }
  }
  #customer-testimonoals .owl-item.active.center .item {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: var(--blood-red);
    transform: translate3d(0px, -50%, 0px) scale(0.8);
  }
  .owl-carousel .owl-dots {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .owl-carousel .owl-dots .owl-dot {
    display: inline-block;
  }
  .owl-carousel .owl-dots .owl-dot span {
    background: transparent;
    display: inline-block;
    height: 30px;
    width: 20px;
    margin: 0 10px;
    transform: translate3d(0px, -50%, 0px) scale(0.4);
    transition: all 250ms ease-out 0s;
  }

  .owl-theme .owl-nav {
    margin-bottom: 10px;
    color: var(--bodyColor);
    transform: translate3d(0px, -50%, 0px) scale(4);
    text-align: center;
    -webkit-tap-highlight-color: transparent;

    &span {
      padding-right: 40px;
      padding-left: 40px;
    }
  }
  .owl-theme .owl-nav [class*="owl-"]:hover {
    background: transparent !important;
    color: var(--blood-red);
  }
`;
