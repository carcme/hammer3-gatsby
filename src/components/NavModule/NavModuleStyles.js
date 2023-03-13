import styled from "styled-components";
import { motion } from "framer-motion";

export const NavModuleStyles = styled(motion.nav)`
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    padding: 0 var(--borderSpacing) 0 0;
  }

  .nav.colorChange {
    background-color: rgb(0, 0, 0, 0.7);
    transition: background-color 1s ease;

    @media (min-width: 1440px) {
      padding-bottom: 40px;
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .menu-nav {
      margin: 0;
      display: flex;
      z-index: 99;
      display: flex;
      align-items: start;
      width: 100vw;
      gap: 1rem;
      font-family: Montserrat;
      font-weight: 700;
      line-height: 1.5rem;
      text-align: left;
      letter-spacing: 0.1em;
      text-transform: lowercase;

      li {
        list-style: none;
        padding: 0;
        margin: 0;
        text-decoration: none;

        .menu-nav__item--active {
          color: #fff;

          background-image: repeating-linear-gradient(
            163deg,
            transparent 0%,
            transparent 45%,
            var(--blood-red) 50%,
            transparent 55%,
            transparent 100%
          );
        }

        a {
          text-decoration: none;
          color: #555;

          &:hover {
            color: #ffffff;
            background-image: repeating-linear-gradient(
              163deg,
              transparent 0%,
              transparent 45%,
              var(--blood-red) 50%,
              transparent 55%,
              transparent 100%
            );
          }
        }
      }
    }

    @media (max-width: 992px) {
      .menu-nav {
        display: none;
      }
    }
  }

  .menu-sidebar {
    background-color: #000;
    width: var(--menuWidth);
    transform: translateX(calc(var(--menuWidth) * -1));
    height: 100%;
    top: 0px;
    bottom: 0;
    left: 0;
    position: fixed;
    z-index: 99;
    padding: 100px var(--borderSpacing);
    display: flex;
    align-items: start;
  }

  .anilink-style {
    url(https://hammer3.de/static/bimi-icon.svg)
    width: 100px;
    height: 100px;
    repeat: no-repeat                /* repeat */
    fixed                    /* attachment */
    padding-box              /* origin */
    content-box              /* clip */
    color: #880808                     /* color */
  }


`;

export const NavTopLevel = styled.ul`
  list-style: none;
  margin: 0;
  font-family: Montserrat;

  > li,
  > li > button {
    text-transform: capitalize;
    padding: 0 0 20px;
    font-size: var(--h2);
    font-weight: 700;
    cursor: pointer;
    transition: color 0.3s ease;

    a {
      text-decoration: none;
      color: #777;
    }

    span {
      color: var(--primary);
    }

    &:hover {
      color: white;
      > a {
        color: white;
      }
    }
  }

  > li {
    &.open {
      > button > svg {
        transform: rotate(180deg);
      }
    }
  }

  > li > button {
    background-color: transparent;
    padding: 0;
    color: #fff;
    border: none;
    font-family: "Heebo", sans-serif;
    display: flex;
    align-items: center;
  }

  > li > button > svg {
    font-size: 22px;
    margin-left: 6px;
    color: var(--primary);
    transition: transform 0.3s ease;

    @media (min-width: 992px) {
      font-size: 26px;
    }

    @media (min-width: 1224px) {
      font-size: 30px;
    }
  }
`;
export const NavSecondaryMenu = styled(motion.div)`
  display: flex;
  align-items: end;

  transition: opacity 0.3s ease-in-out;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavSecondaryBtns = styled(motion.div)`
  display: flex;
  gap: 40px;
  transition: opacity 0.3s ease-in-out;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const ReactIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(props) => props.inputColor || "black"};
  }
  svg:hover {
    color: ${(props) => props.hoverColor || "black"};
  }
`;

export const HamburgerStyles = styled(motion.button)`
  background-color: transparent;
  border: none;
  width: 30px;
  height: 30px;
  padding: 0;
  cursor: pointer;
  outline: none;

  &:focus {
    border: none;
    outline: none;
  }

  .bar {
    display: block;
    background-color: #fff;
    height: 2px;
    border-radius: 2px;

    &:nth-of-type(2) {
      margin-top: 8px;
      margin-bottom: 8px;
    }
  }
`;

export const LogoStyles = styled.div`
  font-weight: 700;
  font-family: Montserrat;
  font-size: 20px;
  letter-spacing: -0.5px;
  background-color: var(--blood-red);
  border-radius: 50%;

  a {
    padding: 1rem;
    color: #aaa;
    background-color: var(--blood-red);
    text-decoration: none;
    display: inline-block;
    padding: 28px 30px;
    transition: all 400ms cubic-bezier(0.645, 0.045, 0.355, 1);
    border-radius: 0 0 30px 0;
  }

  &:hover,
  &:focus {
    a {
      color: white;
    }
  }
`;
