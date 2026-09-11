"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200 shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Brand Logo Image */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/allplay-learn-logo.png"
            alt="AllPlay Learn Logo"
            width={180}
            height={55}
            className="h-12 sm:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links (Figma "Navbar Titles" spec: Lexend, 16px, #004899) */}
        <nav className="hidden lg:flex items-center gap-10 lg:gap-12 text-base font-medium text-[#004899]">
          <Link
            href="/getting-started"
            className="relative py-1 transition-colors hover:text-[#003366] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#004899] after:transition-all hover:after:w-full"
          >
            Getting Started
          </Link>
          <Link
            href="/disability-strategies"
            className="relative py-1 transition-colors hover:text-[#003366] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#004899] after:transition-all hover:after:w-full"
          >
            Disability Strategies
          </Link>
          <Link
            href="/social-inclusion"
            className="relative py-1 transition-colors hover:text-[#003366] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#004899] after:transition-all hover:after:w-full"
          >
            Social Inclusion
          </Link>
          <Link
            href="/resources"
            className="relative py-1 transition-colors hover:text-[#003366] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#004899] after:transition-all hover:after:w-full"
          >
            Resources
          </Link>
          <Link
            href="/about"
            className="relative py-1 transition-colors hover:text-[#003366] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#004899] after:transition-all hover:after:w-full"
          >
            About
          </Link>
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search Toggle */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex items-center justify-center p-1.5 text-[#004899] hover:text-[#002b5c] transition-colors focus:outline-hidden"
              aria-label="Toggle Search"
            >
              <Search className="h-6 w-6 stroke-[2.2]" />
            </button>

            {/* Search Popover Input */}
            {isSearchOpen && (
              <div className="absolute right-0 mt-3 w-80 rounded-xl bg-white p-4 shadow-xl border border-zinc-200 z-50">
                <div className="flex items-center gap-2 border-b border-zinc-200 pb-2">
                  <Search className="h-4 w-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search resources, strategies..."
                    className="w-full text-sm outline-hidden text-[#1B254B] placeholder-zinc-400"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-zinc-400 hover:text-zinc-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-[#1B254B] hover:bg-zinc-200"
            aria-label="Toggle Mobile Navigation"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-200 bg-white px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#004899]">
            <Link
              href="/getting-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#003366]"
            >
              Getting Started
            </Link>
            <Link
              href="/disability-strategies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#003366]"
            >
              Disability Strategies
            </Link>
            <Link
              href="/social-inclusion"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#003366]"
            >
              Social Inclusion
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#003366]"
            >
              Resources
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[#003366]"
            >
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
