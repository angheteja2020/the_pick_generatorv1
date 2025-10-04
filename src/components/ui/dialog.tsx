import React from "react";

interface DialogProps {
  children?: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ children }) => {
  return <div className="dialog-container">{children || "Dialog"}</div>;
};

export default Dialog;
