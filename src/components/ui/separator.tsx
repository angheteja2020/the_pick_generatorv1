import React from "react";

interface SeparatorProps {
  children?: React.ReactNode;
}

export const Separator: React.FC<SeparatorProps> = ({ children }) => {
  return <div className="separator-container">{children || "Separator"}</div>;
};

export default Separator;
