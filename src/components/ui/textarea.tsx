import React from "react";

interface TextareaProps {
  children?: React.ReactNode;
}

export const Textarea: React.FC<TextareaProps> = ({ children }) => {
  return <div className="textarea-container">{children || "Textarea"}</div>;
};

export default Textarea;
