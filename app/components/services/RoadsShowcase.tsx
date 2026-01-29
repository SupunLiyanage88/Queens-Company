"use client";

import { motion } from "motion/react";

const roadProjects = [
  "Terence Perera Road",
  "Wellatha Thudugala Road",
  "Meegahawaththa Road",
  "Waththala Wanavasala Road",
  "Lady Katharine Stage 2 & 3",
  "Nagaha Mavatha",
  "Panadura Kuruppumulla Road",
];

export default function RoadsShowcase() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1920&q=80')" }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#212C6B]/90" />

      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="road-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0v60M0 30h60" stroke="white" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#road-pattern)" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase">
            Our Portfolio
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Roads We&apos;ve Built
          </h2>
          <div className="mt-6 mx-auto w-20 h-0.5 bg-white/30" />
        </motion.div>

        {/* Roads List - Clean Timeline Style */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/20 sm:-translate-x-px" />

          <div className="space-y-6">
            {roadProjects.map((road, index) => (
              <motion.div
                key={road}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-white rounded-full sm:-translate-x-1.5 z-10 shadow-lg shadow-white/20" />
                
                {/* Card */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-[calc(50%-40px)] ${
                    index % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                  }`}
                >
                  <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-white font-semibold text-lg">
                        {road}
                      </h3>
                      <span className="shrink-0 w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-4xl sm:text-5xl font-bold text-white">
              {roadProjects.length}
            </span>
            <div className="text-left">
              <span className="block text-white/90 font-medium">Completed Roads</span>
              <span className="text-white/50 text-sm">Connecting Sri Lanka</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
