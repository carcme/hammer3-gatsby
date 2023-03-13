import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import { AccordianStyles, AccordianHeading } from "./AccordionStyles";

const Accordion = ({ json }) => {
  const { sectionTitle, sections } = json;
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <AccordianStyles>
      <div className="section-divider-top">
        <AccordianHeading>{sectionTitle}</AccordianHeading>
        {sections.map((section, index) => {
          return (
            <AccordionItem
              key={index}
              active={active}
              handleToggle={handleToggle}
              faq={section}
            />
          );
        })}
      </div>
    </AccordianStyles>
  );
};

export default Accordion;
