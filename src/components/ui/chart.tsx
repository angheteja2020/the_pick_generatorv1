import React from "react";

interface ChartProps {
  children?: React.ReactNode;
}

export const Chart: React.FC<ChartProps> = ({ children }) => {
  return <div className="chart-container">{children || "Chart"}</div>;
};

export default Chart;
