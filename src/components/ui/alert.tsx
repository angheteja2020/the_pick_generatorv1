import React from "react";

interface AlertProps {
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({ children }) => {
  return <div className="alert-container">{children || "Alert"}</div>;
};

export default Alert;
