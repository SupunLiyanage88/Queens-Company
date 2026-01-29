"use client";

import Image, { StaticImageData } from "next/image";
import CountUp from "../animations/CountUp";

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
        {/* Stats Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-[#212C6B]/10 rounded-full text-sm font-semibold text-[#212C6B] uppercase tracking-wider">
              Our Achievements
            </span>
            <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-zinc-900">
              We&apos;ve Done Over
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {/* Roads */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#212C6B] to-[#3a4a9f]" />
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#212C6B]/5 rounded-full transition-transform duration-300 group-hover:scale-150" />
              <div className="relative">
          <div className="flex items-baseline justify-center">
            <CountUp
              from={0}
              to={30}
              separator=","
              direction="up"
              duration={2}
              className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#212C6B] to-[#3a4a9f] bg-clip-text text-transparent"
              startWhen={true}
            />
            <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#212C6B] to-[#3a4a9f] bg-clip-text text-transparent">+</span>
          </div>
          <span className="mt-4 block text-center text-lg font-semibold text-zinc-700">Roads Built</span>
          <p className="mt-2 text-center text-sm text-zinc-500">Connecting communities</p>
              </div>
            </div>
            
            {/* Metal Loads Crushed */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3a4a9f] to-[#212C6B]" />
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#212C6B]/5 rounded-full transition-transform duration-300 group-hover:scale-150" />
              <div className="relative">
          <div className="flex items-baseline justify-center">
            <CountUp
              from={1000}
              to={9490}
              separator=","
              direction="up"
              duration={2}
              className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#212C6B] to-[#3a4a9f] bg-clip-text text-transparent"
              startWhen={true}
            />
            <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#212C6B] to-[#3a4a9f] bg-clip-text text-transparent">+</span>
          </div>
          <span className="mt-4 block text-center text-lg font-semibold text-zinc-700">Metal Loads Crushed</span>
          <p className="mt-2 text-center text-sm text-zinc-500">Premium materials processed</p>
              </div>
            </div>
            
            {/* Projects */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#212C6B] to-[#3a4a9f]" />
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#212C6B]/5 rounded-full transition-transform duration-300 group-hover:scale-150" />
              <div className="relative">
          <div className="flex items-baseline justify-center">
            <CountUp
              from={0}
              to={350}
              separator=","
              direction="up"
              duration={2}
              className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#212C6B] to-[#3a4a9f] bg-clip-text text-transparent"
              startWhen={true}
            />
            <span className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#212C6B] to-[#3a4a9f] bg-clip-text text-transparent">+</span>
          </div>
          <span className="mt-4 block text-center text-lg font-semibold text-zinc-700">Projects Completed</span>
          <p className="mt-2 text-center text-sm text-zinc-500">Delivered with excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
