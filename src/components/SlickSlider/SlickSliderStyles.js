import styled from "styled-components";

export const SlickSliderStyles = styled.section`
  display: block;
  margin: auto;
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
  background-color: var(--background);

  .container {
    background: #419be0;
  }

  .slick-slide img {
    margin: auto;
  }

  h2 {
    text-align: center;
  }

  .slick-dots li button:before {
  }
  .slick-dots li button .selected {
    color: red;
  }

  .slick-dots li button:before {
    content: "•";
    color: white;
  }
  .slick-prev:before {
    content: "←";
    color: white;
  }
  .slick-next:before {
    content: "→";
    color: white;
  }
`;
