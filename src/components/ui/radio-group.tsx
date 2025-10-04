import React from "react";

interface RadioGroupProps {
  children?: React.ReactNode;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ children }) => {
  return <div className="radio-group-container">{children || "RadioGroup"}</div>;
};

export default RadioGroup;
