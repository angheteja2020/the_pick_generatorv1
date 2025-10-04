import React from "react";

interface ContextMenuProps {
  children?: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
  return <div className="context-menu-container">{children || "ContextMenu"}</div>;
};

export default ContextMenu;
