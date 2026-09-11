import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "outline-white" | "primary-navy" | "solid-white" | "ghost-cyan";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary-navy",
  size = "md",
  className = "",
  target,
  rel,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-hidden rounded-md";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantStyles = {
    "outline-white":
      "border-2 border-white bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-[#C43F6E] shadow-xs",
    "primary-navy":
      "bg-[#004899] text-white hover:bg-[#003366] shadow-sm",
    "solid-white":
      "bg-white text-[#004899] hover:bg-zinc-100 shadow-sm",
    "ghost-cyan":
      "text-[#00BCD4] p-0 hover:underline bg-transparent font-normal",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} type={type} className={combinedClasses}>
      {children}
    </button>
  );
}
