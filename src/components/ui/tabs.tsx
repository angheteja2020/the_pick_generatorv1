import React from "react";

interface TabsProps {
  children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return <div className="tabs-container">{children || "Tabs"}</div>;
};

export default Tabs;
