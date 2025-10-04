import React from "react";

interface AccordionProps {
  children?: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="accordion-container">{children || "Accordion"}</div>;
};

export default Accordion;
