import React from "react";

interface HoverCardProps {
  children?: React.ReactNode;
}

export const HoverCard: React.FC<HoverCardProps> = ({ children }) => {
  return <div className="hover-card-container">{children || "HoverCard"}</div>;
};

export default HoverCard;
