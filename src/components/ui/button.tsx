import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <div className="button-container">{children || "Button"}</div>;
};

export default Button;
