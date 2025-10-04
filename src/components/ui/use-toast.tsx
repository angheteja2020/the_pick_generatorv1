import React from "react";

interface UseToastProps {
  children?: React.ReactNode;
}

export const UseToast: React.FC<UseToastProps> = ({ children }) => {
  return <div className="use-toast-container">{children || "UseToast"}</div>;
};

export default UseToast;
