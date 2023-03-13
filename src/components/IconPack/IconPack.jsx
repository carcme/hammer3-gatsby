import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExpectStyles,
  ExpectHeadingStyles,
  ExpectFeatureStyles,
  ExpectIconStyles,
} from "./IconPackStyles";
import useScrollPosition from "../useScrollPosition";

const Expect = ({ json, autoplay, scrollThreshold }) => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setVisible] = useState(autoplay);

  useEffect(() => {
    if (scrollPosition >= scrollThreshold) {
      setVisible(true);
    }
  }, [scrollPosition]);

  return (
    <ExpectStyles>
      <div className="section-divider-top">
        {!isVisible && <div style={{ padding: "120px" }}></div>}

        {isVisible && (
          <ExpectHeadingStyles
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "just",
              duration: 0.5,
              delay: 0.3,
            }}
          >
            {json.section}
          </ExpectHeadingStyles>
        )}
      </div>

      <ExpectFeatureStyles>
        {json.listing.map((item, index) => {
          return (
            // this motion does nothing
            <motion.div key={index} className="card" whileHover={{ scale: 1 }}>
              {" "}
              <div className="icon-wrapper">
                {isVisible && (
                  <ExpectIconStyles
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      delay: (index + 1) * 1,
                    }}
                  >
                    <item.icon />
                  </ExpectIconStyles>
                )}
              </div>
              <div className="item-title">
                <h3> {item.title}</h3>
              </div>
              <div className="item-text">
                {item.text.map((txt, i) => {
                  return <p key={i}>{txt}</p>;
                })}
              </div>
            </motion.div>
          );
        })}
      </ExpectFeatureStyles>
    </ExpectStyles>
  );
};

export default Expect;
