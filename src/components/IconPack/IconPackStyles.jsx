import styled from "styled-components";
import { motion } from "framer-motion";

export const ExpectStyles = styled.section`
  max-width: 1140px;
  display: block;
  margin: auto;
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
`;

export const ExpectHeadingStyles = styled(motion.h2)`
  text-align: center;
`;

export const ExpectIconStyles = styled(motion.div)`
  text-align: center;
  border: 2px solid #404040;
  border-radius: 50%;
  border-color: #404040;
  margin: 0 auto;
  width: 120px;
  height: 120px;
  line-height: 140px;
  font-size: 60px;
  color: #eee;
  background-color: var(--bg-eigengrau);
`;

export const ExpectFeatureStyles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  margin: 0 20px;

  .card {
    width: 265px;
    @media (max-width: 1024px) and (min-width: 768px) {
      width: 50%;
    }
  }

  .icon-wrapper {
    position: relative;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 2rem;
  }

  .icon-wrapper::before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    margin-left: -1px;
    background-color: var(--blood-red);
    transform: rotate(-330deg);
    z-index: -1;
  }

  .item-title h3 {
    font-size: 24px;
    font-family: Montserrat;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: none;
    margin-bottom: 20px;
  }
  .item-text p {
    padding: 0 20px;
    font-family: "Hind", sans-serif;
    font-size: 0.9rem;
    font-weight: normal;
    line-height: 1.5;
    text-align: left;
    text-transform: none;
    color: var(--primary-text);
  }
`;
