import React from "react";

interface CheckboxProps {
  children?: React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
  return <div className="checkbox-container">{children || "Checkbox"}</div>;
};

export default Checkbox;
