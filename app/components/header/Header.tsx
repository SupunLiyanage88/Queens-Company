import Link from "next/link";
import Image from "next/image";
import headerBg from "@/app/assests/header_bg.png";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function Header({
  title = "Where engineering excellence meets lasting impact.",
  subtitle = "Queens Company (pvt) LTD",
  ctaText = "See Our Projects",
  ctaHref = "/projects",
  secondaryCtaText,
  secondaryCtaHref,
}: HeaderProps) {
  return (
    <header className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={headerBg}
        alt="Header background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Title */}
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-light tracking-wide text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={ctaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-zinc-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaText}
              <svg 
                className="ml-2 h-4 w-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="2" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            {secondaryCtaText && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white transition-all hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
