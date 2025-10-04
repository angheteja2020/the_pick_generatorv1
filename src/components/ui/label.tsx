import React from "react";

interface LabelProps {
  children?: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children }) => {
  return <div className="label-container">{children || "Label"}</div>;
};

export default Label;
