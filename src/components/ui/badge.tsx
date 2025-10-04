import React from "react";

interface BadgeProps {
  children?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children }) => {
  return <div className="badge-container">{children || "Badge"}</div>;
};

export default Badge;
