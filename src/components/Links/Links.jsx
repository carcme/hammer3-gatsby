import React from "react";
import { menuItems } from "../NavModule/NavConstants";
import { Link } from "gatsby";
//import AniLink from "gatsby-plugin-transition-link/AniLink";
import { LinkStyles } from "./LinksStyles";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Links = () => {
  return (
    <LinkStyles>
      <div className="footer-widgets">
        <div className="container__tight">
          <div className="widget-columns">
            <section>
              <p className="widget-number">01</p>
              <div className="widget__header">
                <h4 className="widget__title">Our Address</h4>
              </div>
              <div className="textwidget">
                <p>
                  Hammer3,
                  <br />
                  Groß Köris,
                  <br />
                  15746
                </p>
                <p>
                  Email:
                  <a href="/cdn-cgi/l/email-protection#ff979e92929a8dbf979e92929a8dccd19b9a">
                    <span
                      class="__cf_email__"
                      data-cfemail="6a020b07070f182a020b07070f1859440e0f"
                    >
                      [email&#160;protected]
                    </span>
                  </a>
                  <br />
                  Tel: +49 177 350 7287
                </p>
              </div>
            </section>

            <section>
              <p className="widget-number">02</p>
              <div className="widget__header">
                <h4 className="widget__title">Useful Links</h4>
              </div>
              <div className="textwidget">
                <ul className="textwidget-listing">
                  {menuItems.map((item, index) => (
                    <li key={index} className="footer-widget-links">
                      <Link
                        paintDrip
                        // cover
                        // direction="right"
                        // duration={2}
                        // bg="#F60A0D"
                        hex="#F60A0D"
                        to={item.path}
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            <section>
              <p className="widget-number">03</p>

              <div className="widget__header">
                <h4 className="widget__title">Social Links</h4>
              </div>
              <ul class="social-links social-links--circle">
                <li class="social-links__item">
                  <a
                    href="https://www.facebook.com/Hammer3.de"
                    target="_blank"
                    rel="noreferrer"
                    class="social-links__link"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li class="social-links__item">
                  <a
                    href="https://www.instagram.com/hammer3.de/"
                    target="_blank"
                    rel="noreferrer"
                    class="social-links__link"
                  >
                    <BsInstagram />
                  </a>
                </li>
                <li class="social-links__item">
                  <a
                    href="https://www.youtube.com/@hammer3de"
                    target="_blank"
                    rel="noreferrer"
                    class="social-links__link"
                  >
                    <BsYoutube />
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </LinkStyles>
  );
};

export default Links;
