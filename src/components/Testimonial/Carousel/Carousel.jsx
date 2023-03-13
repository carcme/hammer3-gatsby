import React, { useState } from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Arrow from "./Arrow";
import Slider from "./Slider";

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 50px 5px;
`;
const Carousel = ({ list }) => {
  const [state, setState] = useState({
    activeIndex: 0,
    length: list.length,
  });

  const handlePrevItem = () => {
    let index = state.activeIndex;
    let length = state.length;

    if (index < 1) index = length - 1;
    else index--;

    setState({ ...state, activeIndex: index });
  };

  const handleNextItem = () => {
    let index = state.activeIndex;
    let length = state.length;

    if (index === length - 1) index = 0;
    else index++;

    setState({ ...state, activeIndex: index });
  };

  return (
    <Box>
      <Arrow direction="left" action={handlePrevItem} />
      <Slider data={list} activeIndex={state.activeIndex} />
      <Arrow direction="right" action={handleNextItem} />
    </Box>
  );
};

Carousel.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]),
};

export default Carousel;
