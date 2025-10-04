import React from "react";

interface FormProps {
  children?: React.ReactNode;
}

export const Form: React.FC<FormProps> = ({ children }) => {
  return <div className="form-container">{children || "Form"}</div>;
};

export default Form;
