import React from "react";

interface InputProps {
  children?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ children }) => {
  return <div className="input-container">{children || "Input"}</div>;
};

export default Input;
