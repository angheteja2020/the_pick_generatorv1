import React from "react";

interface BreadcrumbProps {
  children?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ children }) => {
  return <div className="breadcrumb-container">{children || "Breadcrumb"}</div>;
};

export default Breadcrumb;
