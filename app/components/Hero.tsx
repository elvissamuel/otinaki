"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { heroSlides } from "../lib/data";

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section
      id="home"
      data-header-theme="dark"
      className="relative flex min-h-screen flex-col overflow-hidden bg-navy lg:flex-row"
    >
      {/* Left content panel */}
      <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pt-28 pb-12 lg:w-[52%] lg:px-14 lg:pt-36 lg:pb-16">
        <div className="flex-1 lg:flex lg:flex-col lg:justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label mb-5">{slide.subtitle}</p>
              <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
                Engineering Your<br />
                <span className="text-gold">Unassailable Advantage.</span>
              </h1>
              <p className="body-text-light mt-6 max-w-lg text-[1rem]">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#overview"
              className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-[15px] font-semibold text-navy transition-colors hover:bg-gold/90"
            >
              Discover Otinaki
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Slide tabs */}
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 lg:mt-0">
          {heroSlides.map((s, i) => (
            <button
              key={s.subtitle}
              type="button"
              onClick={() => setCurrent(i)}
              className="group text-left"
              aria-label={`View: ${s.subtitle}`}
            >
              <div
                className={`mb-2 h-0.5 transition-all duration-300 ${
                  i === current ? "w-14 bg-gold" : "w-8 bg-white/25 group-hover:bg-white/45"
                }`}
              />
              <span className={`text-[11px] font-semibold tracking-wide ${i === current ? "text-white" : "text-white/45"}`}>
                {s.subtitle.split("·")[0]?.trim() || s.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right image panel */}
      <div className="relative h-[45vh] flex-1 lg:h-auto lg:min-h-screen">
        <div className="clip-diagonal absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.subtitle}
                fill
                priority={current === 0}
                className="object-cover animate-ken-burns"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-navy/30" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev/Next */}
        <div className="absolute right-6 bottom-20 flex gap-2 lg:right-10 lg:bottom-16">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-navy/50 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-navy/50 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Ticker */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy/90 py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex shrink-0">
              {["Construction", "Real Estate", "Energy", "Agriculture", "Mobility", "Precision", "Excellence"].map((word) => (
                <span key={`${copy}-${word}`} className="mx-10 text-xs font-semibold tracking-widest text-white/35 uppercase">
                  {word}
                  <span className="mx-10 text-gold">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
