import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export interface PageContainerProps {
  /** Page main content sections */
  children: React.ReactNode;
  /** Custom wrapper class overrides */
  className?: string;
  /** Main element custom class overrides */
  mainClassName?: string;
}

export default function PageContainer({
  children,
  className = "",
  mainClassName = "",
}: PageContainerProps) {
  return (
    <div className={`min-h-screen flex flex-col bg-white font-sans ${className}`}>
      <Header />
      {/* Main Body Container (Full-bleed root with section container alignment) */}
      <main className={`w-full flex flex-col gap-0 pb-[100px] flex-1 ${mainClassName}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
