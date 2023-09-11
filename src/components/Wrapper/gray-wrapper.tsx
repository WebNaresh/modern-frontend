import React, { ReactNode } from "react";

interface GrayWrapperProps {
  children: ReactNode;
  className?: string;
}

const GrayWrapper: React.FC<GrayWrapperProps> = ({ children, className }) => {
  return (
    <div className={`bg-slate-200 rounded-lg ${className}`}>{children}</div>
  );
};

export default GrayWrapper;
