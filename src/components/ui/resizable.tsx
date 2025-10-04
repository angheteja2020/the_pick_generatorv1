import React from "react";

interface ResizableProps {
  children?: React.ReactNode;
}

export const Resizable: React.FC<ResizableProps> = ({ children }) => {
  return <div className="resizable-container">{children || "Resizable"}</div>;
};

export default Resizable;
