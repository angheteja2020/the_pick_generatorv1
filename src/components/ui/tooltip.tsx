import React from "react";

interface TooltipProps {
  children?: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  return <div className="tooltip-container">{children || "Tooltip"}</div>;
};

export default Tooltip;
