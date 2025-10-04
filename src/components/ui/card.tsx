import React from "react";

interface CardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card-container">{children || "Card"}</div>;
};

export default Card;
