import React from "react";

interface CarouselProps {
  children?: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({ children }) => {
  return <div className="carousel-container">{children || "Carousel"}</div>;
};

export default Carousel;
