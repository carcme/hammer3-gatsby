import React, { useState, useRef } from "react";
import {
  AccordianStyles,
  AccordianCard,
  AccordianHeader,
  AccordianToggle,
  Title,
  Icon,
  Body,
  Collapse,
} from "./AStyles";

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { title, content, id } = faq;

  return (
    <AccordianCard>
      <AccordianHeader>
        <AccordianToggle
          className={`${active === id ? "active" : ""}`}
          onClick={() => handleToggle(id)}
        >
          <Title className="title">{title}</Title>
          <Icon className="accordion-icon">
            {/* <Plus className="accordion-icon" /> */}
            <div className="bg"></div>
          </Icon>
        </AccordianToggle>
      </AccordianHeader>
      <Collapse
        ref={contentEl}
        className={`${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <Body>
          <p>{content}</p>
        </Body>
      </Collapse>
    </AccordianCard>
  );
};

const A = ({ json }) => {
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
        <h4 className="">{sectionTitle}</h4>
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

export default A;
