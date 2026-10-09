import React from "react";

export interface ResourceContainerProps {
  children: React.ReactNode;
  variant?: "portrait" | "landscape";
  className?: string;
}

export default function ResourceContainer({
  children,
  variant = "portrait",
  className = "",
}: ResourceContainerProps) {
  const layoutClass =
    variant === "landscape"
      ? "max-w-[720px] grid-cols-1"
      : "max-w-[1060px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-5";

  return (
    <div
      className={`w-full mx-auto grid gap-4 ${layoutClass} ${className}`}
    >
      {children}
    </div>
  );
}