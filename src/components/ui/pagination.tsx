import React from "react";

interface PaginationProps {
  children?: React.ReactNode;
}

export const Pagination: React.FC<PaginationProps> = ({ children }) => {
  return <div className="pagination-container">{children || "Pagination"}</div>;
};

export default Pagination;
