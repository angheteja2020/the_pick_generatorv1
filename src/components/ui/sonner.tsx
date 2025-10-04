import React from "react";

interface SonnerProps {
  children?: React.ReactNode;
}

export const Sonner: React.FC<SonnerProps> = ({ children }) => {
  return <div className="sonner-container">{children || "Sonner"}</div>;
};

export default Sonner;
