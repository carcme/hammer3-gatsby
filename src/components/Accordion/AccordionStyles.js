import styled from "styled-components";

export const AccordianStyles = styled.section`
  max-width: 1140px;
  display: block;
  margin: auto;
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
  margin: 2rem auto;
  max-width: 800px;
  background-color: var(--background);
`;

export const AccordianHeading = styled.h2`
  text-align: center;
`;

export const AccordianCard = styled.div`
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;

  &:last-child {
    margin-bottom: 0;
  }
`;
export const AccordianHeader = styled.div``;

export const AccordianToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  margin-inline: 10px;

  &.active {
    background-color: var(--blood-red);
  }

  &.active .accordion-icon:before {
    background-color: white;
    transform rotate(0deg)
  }

  &.active .accordion-icon:after {
    background-color: white;
  }

  &.active .title {
    color: #fff;
  }

  @media (max-width: 800px) {
    padding-right: 5px;
  }
`;

export const Title = styled.h5`
  font-weight: 500;
  position: relative;
  padding: 20px;
  margin-bottom: 0;
  color: var(--primary-text);

  @media (max-width: 800px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  &:after,
  &:before {
    content: "";
    position: absolute;
    right: 25px;
    top: 50%;
    width: 22px;
    height: 2px;
    background-color: var(--primary-text);
  }
  &:before {
    transform: rotate(-90deg);
    transition: transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  & .bg:before {
    content: "";
    position: absolute;
    right: 6px;
    top: 10px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 800px) {
    &:after,
    &:before {
      width: 12px;
    }

    & .bg:before {
      content: "";
      position: absolute;
      right: 16px;
      top: 8px;
      width: 30px;
      height: 30px;
    }
  }
`;

export const Body = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 15px;

  p {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: var(--primary-text);
  }
`;

export const Collapse = styled.div`
  position: relative;
  height: 0;
  overflow: hidden;

  color: var(--primary-text);
  transition: all 0.2s ease-in-out;

  &.show {
    height: auto;
    text-align: justify;
    padding: 20px 20px 0px;
  }
`;
