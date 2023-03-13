/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";

//import Header from "./header"
//import "./layout.css"
import Navbar from "./NavModule/NavModule";
import { GlobalStyle } from "../styles/GlobalStyles";
import Links from "../components/Links/Links";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Links />
      <footer className="copyright-footer">
        Copyright © {new Date().getFullYear()} |{` `}
        <a href="https://hammer3.de">hammer3</a> | All Rights Reserved
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
// import React from 'react'
// import Navbar from './NavBar/Navbar'
// import { GlobalStyle } from "../styles/GlobalStyles"
// import Footer from "./Footer/Footer"

// const Layout = ({ children }) => {
//     return (
//         <>
//             <GlobalStyle />
//             <Navbar />
//             <main>{children}</main>
//             <Footer />
//         </>
//     )
// }

// export default Layout
