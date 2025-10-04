import React from "react";

interface DrawerProps {
  children?: React.ReactNode;
}

export const Drawer: React.FC<DrawerProps> = ({ children }) => {
  return <div className="drawer-container">{children || "Drawer"}</div>;
};

export default Drawer;
