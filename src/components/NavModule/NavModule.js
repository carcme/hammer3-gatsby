import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { motion } from "framer-motion";
import { menuItems } from "./NavConstants";
import { UseSiteMetadata } from "../../hooks/useSiteMetadata";
import { FaRegCalendarAlt, FaRegEnvelope } from "react-icons/fa";

import useScrollPosition from "../useScrollPosition";
import {
  NavModuleStyles,
  NavTopLevel,
  NavSecondaryMenu,
  NavSecondaryBtns,
  ReactIcon,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles";
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
} from "./NavAnim";
import ButtonRound from "../Button/ButtonRound";

const NavModule = () => {
  const [isOpen, setNav] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  const { title } = UseSiteMetadata();
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (scrollPosition > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [scrollPosition]);

  return (
    <NavModuleStyles>
      <div className={isScrolled ? "nav colorChange" : "nav"}>
        <div className="container">
          {title && (
            <LogoStyles>
              <AniLink to="/" paintDrip hex="#880808">
                {title}
              </AniLink>
            </LogoStyles>
          )}
          <ul className="menu-nav">
            {menuItems.map((item, index) => (
              <li key={index}>
                <AniLink
                  // paintDrip
                  cover
                  direction="right"
                  duration={2}
                  // bg="#880808"
                  bg="
                  url(https://hammer3.de/static/bimi-icon.svg)
                  center
                  no-repeat                
                  #1b1b1b                  
                  "
                  to={item.path}
                  activeClassName="menu-nav__item--active"
                >
                  {item.text}
                </AniLink>
              </li>
            ))}
          </ul>
          <NavSecondaryMenu>
            <ButtonRound text="Jetzt buchen" link="/about" />
            <ButtonRound text="Contact" link="/contact" />
          </NavSecondaryMenu>

          <NavSecondaryBtns>
            <ReactIcon inputColor="#a8a6a6" hoverColor="white">
              <FaRegCalendarAlt size={20} />
            </ReactIcon>
            <ReactIcon inputColor="#a8a6a6" hoverColor="white">
              <FaRegEnvelope size={20} />
            </ReactIcon>

            <HamburgerStyles
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              onClick={toggleNav}
              onKeyDown={toggleNav}
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              className={isOpen ? " open" : ""}
            >
              <motion.span
                className="bar"
                variants={barOneVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barTwoVariants}
              ></motion.span>
              <motion.span
                className="bar"
                variants={barThreeVariants}
              ></motion.span>
            </HamburgerStyles>
          </NavSecondaryBtns>
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu-sidebar"
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu-sidebar__item--active"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  );
};

export default NavModule;
