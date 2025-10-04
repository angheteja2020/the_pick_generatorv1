import React from "react";

interface CollapsibleProps {
  children?: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ children }) => {
  return <div className="collapsible-container">{children || "Collapsible"}</div>;
};

export default Collapsible;
