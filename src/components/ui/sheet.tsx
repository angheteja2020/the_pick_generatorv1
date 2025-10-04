import React from "react";

interface SheetProps {
  children?: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ children }) => {
  return <div className="sheet-container">{children || "Sheet"}</div>;
};

export default Sheet;
