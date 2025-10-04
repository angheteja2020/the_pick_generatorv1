import React from "react";

interface DropdownMenuProps {
  children?: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  return <div className="dropdown-menu-container">{children || "DropdownMenu"}</div>;
};

export default DropdownMenu;
