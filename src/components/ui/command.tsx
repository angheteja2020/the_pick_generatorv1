import React from "react";

interface CommandProps {
  children?: React.ReactNode;
}

export const Command: React.FC<CommandProps> = ({ children }) => {
  return <div className="command-container">{children || "Command"}</div>;
};

export default Command;
