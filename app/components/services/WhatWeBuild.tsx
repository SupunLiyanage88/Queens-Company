"use client";

import Image, { StaticImageData } from "next/image";

interface ServiceCard {
  title: string;
  description: string;
  image: string | StaticImageData;
}

const services: ServiceCard[] = [
  {
    title: "Road & Highway Construction",
    description:
      "High-quality road networks engineered for durability, safety, and consistent performance, meeting national standards and project requirements.",
    image: "/images/road-construction.png",
  },
  {
    title: "Construction Material Products",
    description:
      "Reliable supply of high-grade construction materials engineered for strength, consistency, and long-term performance.",
    image: "/images/construction-materials.png",
  },
  {
    title: "Asphalt Mixing",
    description:
      "High-quality asphalt mixes produced with precision for strength, durability, and smooth performance, fully compliant with national standards and project specifications.",
    image: "/images/asphalt-mixing.jpeg",
  },
];

function ServiceCard({ title, description, image }: ServiceCard) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Accent Border */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#212C6B] to-[#3a4a9f] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}

export default function WhatWeBuild() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <span className="inline-block text-sm sm:text-base font-semibold text-[#212C6B] uppercase tracking-wider mb-2 sm:mb-3">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900">
            What We Build
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-zinc-600">
            Delivering excellence in construction with quality materials and
            expert craftsmanship.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        <div className=" justify-center mt-10">
          <div className="flex justify-center">
            <span className="mt-5 text-lg text-black font-bold">
              We Done Over
            </span>
          </div>
          <div className="mt-10 border p-20 border-amber-300">
            
          </div>
        </div>
      </div>
    </section>
  );
}
