import React from "react";

interface InputOtpProps {
  children?: React.ReactNode;
}

export const InputOtp: React.FC<InputOtpProps> = ({ children }) => {
  return <div className="input-otp-container">{children || "InputOtp"}</div>;
};

export default InputOtp;
