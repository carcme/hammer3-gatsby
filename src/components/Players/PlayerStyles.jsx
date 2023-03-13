import styled from "styled-components";
import img from "./banner-walk-in-woods.jpg";

export const PlayerStyles = styled.section`
  height: 100vh;
  background-position: 65% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image:  linear-gradient(90deg, var(--background) 31%, rgba(0, 0, 0, 0) 100%),
  url(${img});
  // background-image: linear-gradient(
  //     to left,
  //     rgba(27, 27, 27, 0) 20%,
  //     rgba(27, 27, 27, 1) 100%
  //   ),
  //   url(${img});

  .rotated-heading {
    -webkit-writing-mode: vertical-rl;
    height: 100%;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
    position: relative;
    color: rgba(255, 255, 255, 0.38);
  }
  .side-title {
    font-size: 1rem;
    line-height: 1.2em;
    letter-spacing: 0.4em;
    text-transform: uppercase;
  }
  .side-title:before {
    content:"";
    display: block;
    position: absolute;
    left: 0;
    top: 100;
    height: 170px;
    width: 2px;
    margin-top: 10px;
    background-color: rgba(255, 255, 255, 0.1);
}  

  }
`;
