import styled from "styled-components";
import { motion } from "framer-motion";

export const ConceptStyles = styled.section`
  position: relative;
  padding-top: 90px;
  padding-bottom: 120px;
  text-align: center;
  background-color: var(--bg-eigengrau);

  .text {
    display: block;
    margin: auto;
    text-align: center;
    max-width: 840px;
  }

  .text p {
    padding: 10px 20px;
    font-family: "Hind", sans-serif;
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.5;
    color: var(--primary-text);

    &:last-child {
      margin-bottom: 40px;
    }
  }
`;

export const TitleStyles = styled(motion.h2)`
  padding-bottom: 30px;
`;
