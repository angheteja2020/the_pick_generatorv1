import React from "react";

interface ProgressProps {
  children?: React.ReactNode;
}

export const Progress: React.FC<ProgressProps> = ({ children }) => {
  return <div className="progress-container">{children || "Progress"}</div>;
};

export default Progress;
