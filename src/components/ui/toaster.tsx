import React from "react";

interface ToasterProps {
  children?: React.ReactNode;
}

export const Toaster: React.FC<ToasterProps> = ({ children }) => {
  return <div className="toaster-container">{children || "Toaster"}</div>;
};

export default Toaster;
