import React from "react";

interface ScrollAreaProps {
  children?: React.ReactNode;
}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ children }) => {
  return <div className="scroll-area-container">{children || "ScrollArea"}</div>;
};

export default ScrollArea;
