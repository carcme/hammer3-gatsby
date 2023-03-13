import React from "react";
import { ConceptStyles, TitleStyles } from "./ConceptStyles";
import Button77 from "../Button/Button77";
import useScrollPosition from "../useScrollPosition";
import { motion } from "framer-motion";

const Concept = () => {
  const scrollPosition = useScrollPosition();
  let isVisible = scrollPosition > 300;
  return (
    <ConceptStyles>
      <div className="section-divider-top">
        {!isVisible && <div style={{ padding: "120px" }}></div>}
        {isVisible && (
          <TitleStyles
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
            }}
          >
            The Concept
          </TitleStyles>
        )}
        {isVisible && (
          <div className="text">
            <motion.p
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "just",
                duration: 1,
              }}
            >
              Join us for a fully immersive, interactive murder mystery crime
              dinner with friends. There are no additional actors…you and your
              friends are the cast
            </motion.p>

            <motion.p
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "just",
                duration: 1,
                delay: 0.3,
              }}
            >
              You decide the course of events. It’s up to you and your group to
              question each other and find the clues.
            </motion.p>

            <motion.p
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "just",
                duration: 1,
                delay: 0.6,
              }}
            >
              Dress as your given character, add your own personality and maybe
              sprinkle in an accent. Your imagination is the only limiting
              factor
            </motion.p>
          </div>
        )}
      </div>
      {isVisible && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "just",
            duration: 1,
            delay: 1,
          }}
        >
          <Button77 text="Solve the Mystery" />
        </motion.div>
      )}
    </ConceptStyles>
  );
};

export default Concept;
