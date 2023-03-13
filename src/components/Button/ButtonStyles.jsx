import styled from "styled-components";

export const ButtonRoundStyles = styled.button`
  display: inline-block;
  margin-inline: 10px;
  font-weight: 700;
  font-family: "Montserrat";
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid #404040;
  padding: 0.8rem 2rem;
  font-size: 0.75rem;
  line-height: 1.25;
  border-radius: 1.5rem;
  color: #fff;
  background-color: transparent;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: var(--background);
    border-color: var(--blood-red);
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 1200px) {
  }
`;

export const ButtonFlatStyles = styled.button`
  color: #fff;
  background-color: transparent;
  font-family: Montserrat;
  border: 0;
  text-decoration: none;
  padding: 0;
  transition: color 0.3s ease;
  text-transform: capitalize;
  font-size: var(--p);
  font-weight: 700;
  position: relative;
  padding-bottom: 15px;
  align-self: flex-start;
  display: inline-flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    height: 1px;
    width: 80px;
    margin-right: 20px;
    vertical-align: middle;
    background-color: white;

    @media (max-width: 768px) {
      width: 0px;
    }
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 1px;
    left: 100px;
    right: 0;
    bottom: 8px;
    background-color: transparent;
    transition: left 0.3s ease;
  }

  &:focus {
    color: var(--primary-red);
  }

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: var(--blood-red);

      &::after {
        background-color: var(--blood-red);
      }
    }
  }
`;

export const Button77Styles = styled.button`
  align-items: center;
  appearance: none;
  background-clip: padding-box;
  background-color: var(--blood-red);
  background-image: none;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  flex-direction: row;
  flex-shrink: 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 800;
  justify-content: center;
  line-height: 24px;
  margin: 0;
  min-height: 64px;
  outline: none;
  overflow: visible;
  padding: 19px 26px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: auto;
  word-break: keep-all;
  z-index: 0;
  border-radius: 80px;

  @media (min-width: 768px) {
    padding: 19px 32px;
  }

  &::before,
  &::after {
  }

  &::before,
  &::after {
    content: "";
    border-radius: 80px;
    display: block;
    position: absolute;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  &::after {
    content: "";
    background-color: var(--blood-red);
    bottom: 4px;
    display: block;
    left: 4px;
    overflow: hidden;
    position: absolute;
    right: 4px;
    top: 4px;
    transition: all 100ms ease-out;
    z-index: -1;
  }

  &:hover:after {
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    transition-timing-function: ease-in;
    color: #fff;
  }
`;
