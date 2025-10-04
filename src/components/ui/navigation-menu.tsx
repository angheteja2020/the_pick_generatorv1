import React from "react";

interface NavigationMenuProps {
  children?: React.ReactNode;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ children }) => {
  return <div className="navigation-menu-container">{children || "NavigationMenu"}</div>;
};

export default NavigationMenu;
