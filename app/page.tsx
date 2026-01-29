import { Header, WhatWeBuild } from "./components";

export default function Home() {
  return (
    <>
      <Header
        title="Where engineering excellence meets lasting impact."
        subtitle="Queens Company (pvt) LTD"
        ctaText="See Our Projects"
        ctaHref="/get-started"
        secondaryCtaText="Learn More"
        secondaryCtaHref="/about"
      />

      {/* What We Build Section */}
      <WhatWeBuild />
      
    </>
  );
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}



