import React, { useRef } from "react";
import {
  AccordianCard,
  AccordianHeader,
  AccordianToggle,
  Title,
  Icon,
  Body,
  Collapse,
} from "./AccordionStyles";

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
            ? { height: contentEl.current.scrollHeight + 20 } // add height of padding/margin
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
export default AccordionItem;
