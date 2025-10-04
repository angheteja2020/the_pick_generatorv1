import React from "react";

interface TableProps {
  children?: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children }) => {
  return <div className="table-container">{children || "Table"}</div>;
};

export default Table;
