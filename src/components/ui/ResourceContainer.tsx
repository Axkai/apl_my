import React from "react";

interface ResourceContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ResourceContainer({
  children,
  className = "",
}: ResourceContainerProps) {
  return (
    <div
      className={`w-full max-w-[1060px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 ${className}`}
    >
      {children}
    </div>
  );
}