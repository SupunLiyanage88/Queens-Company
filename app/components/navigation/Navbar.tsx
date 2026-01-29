"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MobileMenuButton from "./MobileMenuButton";
import { NAV_ITEMS } from "./types";
import QueensLogo from "@/app/queens_logo.png";

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
      className="sticky top-0 z-50 w-full bg-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 bg-white ">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-black transition-opacity hover:opacity-80"
              aria-label="Queens - Go to homepage"
            >
              <Image
                src={QueensLogo}
                alt="Queens Logo"
                width={32}
                height={32}
                className="h-12 w-12"
              />
                <div className="flex flex-col leading-none text-black font-['Jomolhari']">
                <span className="text-[1.5rem] font-thin leading-none">
                  Queens
                </span>
                <span className="text-[0.85rem] font-thin leading-none -mt-0.5">
                  constructions
                </span>
                </div>
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
              href="/contact"
              className="rounded-[5px] bg-[#212C6B] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1a2356]"
            >
              Contact Us
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
              className="block rounded-md px-3 py-2 text-base font-medium text-black"
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-2 block rounded-[5px] bg-[#212C6B] px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-[#1a2356]"
            role="menuitem"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
