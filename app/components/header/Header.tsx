import Link from "next/link";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function Header({
  title = "Welcome to Queens",
  subtitle = "Build something amazing with modern tools and best practices. Start your journey today.",
  ctaText = "Get Started",
  ctaHref = "/get-started",
  secondaryCtaText = "Learn More",
  secondaryCtaHref = "/about",
}: HeaderProps) {
  return (
    <header className="relative overflow-hidden bg-linear-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
      {/* Background decoration */}
      <div 
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-zinc-200/50 blur-3xl dark:bg-zinc-800/30" />
        <div className="absolute -bottom-20 right-0 h-75 w-75 rounded-full bg-zinc-300/30 blur-3xl dark:bg-zinc-700/20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Now Available
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            {subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ctaHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:bg-zinc-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 sm:w-auto"
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
            <Link
              href={secondaryCtaHref}
              className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 sm:w-auto"
            >
              {secondaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
