import React from "react";

interface ToastProps {
  children?: React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({ children }) => {
  return <div className="toast-container">{children || "Toast"}</div>;
};

export default Toast;
