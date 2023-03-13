import styled from "styled-components";

export const HostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap;
  margin: 0;
  height: 100%;
`;

export const Figure = styled.figure`
  font-family: Montserrat;
  position: relative;
  overflow: hidden;
  margin: 10px;
  padding: 30px;
  min-width: 230px;
  max-width: 400px;
  width: 100%;
  color: #000000;
  text-align: center;
  font-size: 14px;
  border-radius: 10px;
  background-color: var(--background);
  background-image: linear-gradient(
    -25deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );

  .profile {
    width: 100px;
    border-radius: 50%;
    display: inline-block;
    margin-bottom: 10px;
    border: solid 5px var(--blood-red);
    box-shadow: 5px 5px 5px var(--bg-eigengrau);
  }
`;

export const FigureCap = styled.figcaption`
  width: 100%;
  h3,
  h4,
  blockquote {
    margin: 0;
    font-family: Montserrat;
  }
  h3,
  h4 {
    font-weight: 300;
    text-shadow: 5px 5px 5px var(--bg-eigengrau);
  }
  h3 {
    color: #ffffff;
  }
  h4 {
    color: #a6a6a6;
  }

  blockquote {
    font-size: 1em;
    border-left: none;
    padding: 45px 20px 40px 50px;
    margin-top: 30px;
    color: var(--bodyColor);
    border-radius: 5px;
    align-items: center;
    box-shadow: inset -1.4px -1.4px 2px rgba(0, 0, 0, 0.3);
    text-align: left;
    position: relative;
    box-shadow: 5px 5px 5px var(--bg-eigengrau);
  }
  blockquote::before {
    content: "“";
    position: absolute;
    color: white;
    font-size: 70px;
    opacity: 0.4;
    top: 0px;
    left: 0px;
  }
  blockquote::after {
    content: "”";
    position: absolute;
    color: white;
    font-size: 70px;
    opacity: 0.4;
    bottom: -30px;
    right: 20px;
  }
`;
