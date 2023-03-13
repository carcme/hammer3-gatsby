import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { BannerModuleStyles } from "./BannerModuleStyles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../Button/ButtonFlat";
import { GetBannerImages } from "../../hooks/getBannerImages";
import { motion } from "framer-motion";

const BannerModule = ({ children, title, subTitle, price, enquire }) => {
  // const [blur, setBlur] = useState(20);

  // const useEffect(() => {

  // }, [blur])

  const { totalCount, nodes } = GetBannerImages();

  const img = getImage(nodes[0]);

  const words = title.split(" ");

  const msgLoad = () => {
    console.log("onLoad");
  };

  const msgLoading = () => {
    console.log("onStartLoad");
  };

  return (
    <>
      <BannerModuleStyles>
        {children ? (
          children
        ) : (
          <GatsbyImage
            image={img}
            alt="Banner Image"
            className="banner__image"
            imgClassName="banner__image--content"
            layout="fullWidth"
            fadeIn={true}
            imgStyle={{ transition: "opacity 1.5s ease-in" }}
            onLoad={msgLoad}
            onStartLoad={msgLoading}
          />
        )}

        <div className="container">
          <div className="banner__content">
            <div className="vertical-stack">
              {title &&
                words.map((word, i) => (
                  <motion.h1
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{
                      type: "just",
                      duration: 1,
                      delay: i * 0.8,
                    }}
                  >
                    {word}
                  </motion.h1>
                ))}
            </div>
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                {price === "Free" ? "Included with Treatment" : `£${price}`}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            <motion.div
              className="banner__btns "
              initial={{ x: 3000 }}
              animate={{ x: 0 }}
              transition={{
                type: "just",
                duration: 1,
                delay: 1.6,
              }}
            >
              <Button
                className="btn"
                text="View the Mysteries"
                as={Link}
                to="/mystery"
              />
              {enquire && (
                <Button
                  className="btn"
                  text="Contact Us Now"
                  as={Link}
                  to="/contact"
                />
              )}
            </motion.div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  );
};

export default BannerModule;
