import React from "react";

interface ToggleProps {
  children?: React.ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({ children }) => {
  return <div className="toggle-container">{children || "Toggle"}</div>;
};

export default Toggle;
