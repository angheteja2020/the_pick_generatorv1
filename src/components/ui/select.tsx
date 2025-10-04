import React from "react";

interface SelectProps {
  children?: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ children }) => {
  return <div className="select-container">{children || "Select"}</div>;
};

export default Select;
