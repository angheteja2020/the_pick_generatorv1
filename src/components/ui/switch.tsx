import React from "react";

interface SwitchProps {
  children?: React.ReactNode;
}

export const Switch: React.FC<SwitchProps> = ({ children }) => {
  return <div className="switch-container">{children || "Switch"}</div>;
};

export default Switch;
