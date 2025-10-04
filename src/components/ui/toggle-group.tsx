import React from "react";

interface ToggleGroupProps {
  children?: React.ReactNode;
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({ children }) => {
  return <div className="toggle-group-container">{children || "ToggleGroup"}</div>;
};

export default ToggleGroup;
