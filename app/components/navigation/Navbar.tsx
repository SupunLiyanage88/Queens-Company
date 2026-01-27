"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";
import { NAV_ITEMS } from "./types";
import QueensLogo from "@/app/assests/queens_logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-xl font-bold text-zinc-900 transition-opacity hover:opacity-80 dark:text-white"
              aria-label="Queens - Go to homepage"
            >
                <Image 
                src={QueensLogo} 
                alt="Queens Logo" 
                width={32}
                height={32}
                className="h-8 w-8" 
                />
              <span>Queens</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/get-started"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton 
            isOpen={isMobileMenuOpen} 
            onClick={toggleMobileMenu} 
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        role="menu"
        aria-orientation="vertical"
      >
        <div className="space-y-1 border-t border-zinc-200 px-4 pb-4 pt-2 dark:border-zinc-800">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMobileMenu}
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={closeMobileMenu}
            className="mt-2 block rounded-full bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            role="menuitem"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
