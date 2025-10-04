import React from "react";

interface AspectRatioProps {
  children?: React.ReactNode;
}

export const AspectRatio: React.FC<AspectRatioProps> = ({ children }) => {
  return <div className="aspect-ratio-container">{children || "AspectRatio"}</div>;
};

export default AspectRatio;
