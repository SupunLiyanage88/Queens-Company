"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        relative px-3 py-2 text-sm font-medium transition-colors duration-200 text-black hover:text-black
        ${className}
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
      {isActive && (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-black" />
      )}
    </Link>
  );
}
