import React from "react";

interface MenubarProps {
  children?: React.ReactNode;
}

export const Menubar: React.FC<MenubarProps> = ({ children }) => {
  return <div className="menubar-container">{children || "Menubar"}</div>;
};

export default Menubar;
