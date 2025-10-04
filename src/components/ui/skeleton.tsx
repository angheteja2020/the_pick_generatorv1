import React from "react";

interface SkeletonProps {
  children?: React.ReactNode;
}

export const Skeleton: React.FC<SkeletonProps> = ({ children }) => {
  return <div className="skeleton-container">{children || "Skeleton"}</div>;
};

export default Skeleton;
