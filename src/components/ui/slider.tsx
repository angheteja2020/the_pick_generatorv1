import React from "react";

interface SliderProps {
  children?: React.ReactNode;
}

export const Slider: React.FC<SliderProps> = ({ children }) => {
  return <div className="slider-container">{children || "Slider"}</div>;
};

export default Slider;
