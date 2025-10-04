import React from "react";

interface AvatarProps {
  children?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ children }) => {
  return <div className="avatar-container">{children || "Avatar"}</div>;
};

export default Avatar;
