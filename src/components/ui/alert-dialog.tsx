import React from "react";

interface AlertDialogProps {
  children?: React.ReactNode;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ children }) => {
  return <div className="alert-dialog-container">{children || "AlertDialog"}</div>;
};

export default AlertDialog;
