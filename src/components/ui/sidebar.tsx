import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return <div className="sidebar-container">{children || "Sidebar"}</div>;
};

export default Sidebar;
