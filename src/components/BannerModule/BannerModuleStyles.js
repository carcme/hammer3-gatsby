import styled from "styled-components";
import { motion } from "framer-motion";

export const BannerModuleStyles = styled(motion.section)`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    animation: blur-in 1000ms;

    @keyframes blur-in {
      from {
        transform: blur(20px);
      }
      to {
        transform: blur(0);
      }
    }
  }

  .gradient {
    z-index: 9;
    background: linear-gradient(
      rgba(27, 27, 27, 0) 80%,
      rgba(27, 27, 27, 1) 100%
    );
  }

  .banner__content {
    font-family: "Montserrat";
    position: relative;
    z-index: 10;
    min-height: 80vh;
    width: 100%;
    max-width: 700px;

    @media (min-width: 768px) {
      width: 66vw;
    }

    .vertical-stack {
      margin-left: var(--borderSpacing);
      color: #fff;
      display: flex;
      flex-direction: column;
    }
    h1,
    h2 {
      text-shadow: var(--textShadow);
    }

    h1 {
      font-family: "Montserrat";
      display: inline-block;
      margin: 0;
      line-height: 1;
    }

    h2 {
      font-size: var(--h5);
      font-weight: 400;
    }

    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
    margin-left: var(--borderSpacing);
  }
`;
