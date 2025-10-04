import React from "react";

interface PopoverProps {
  children?: React.ReactNode;
}

export const Popover: React.FC<PopoverProps> = ({ children }) => {
  return <div className="popover-container">{children || "Popover"}</div>;
};

export default Popover;
