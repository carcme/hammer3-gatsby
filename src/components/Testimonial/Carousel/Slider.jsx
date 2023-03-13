import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Status from "./Status";

const Text = styled.p`
  max-width: 500px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
`;
const Avatar = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 501px) {
    width: 150px;
    height: 150px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 1.5rem;
  max-width: 700px;
`;

const Slider = ({ data, activeIndex }) => {
  return (
    <Content>
      {data.map((s, index) => (
        <div
          className={index === activeIndex ? "active" : "inactive"}
          key={index}
        >
          <Top>
            <Text>{s.name}</Text>
            <Avatar src={s.pic} />
          </Top>
          {s.text.map((txt, index) => (
            <Text>{txt}</Text>
          ))}
        </div>
      ))}
      <Status active={activeIndex} data={data} />
    </Content>
  );
};

Slider.propTypes = {
  data: PropTypes.array,
  activeIndex: PropTypes.number,
};

export default Slider;
