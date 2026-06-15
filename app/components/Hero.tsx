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
    setCurrent(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
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
      <div className="relative z-10 flex flex-1 flex-col justify-between px-6 pt-28 pb-12 lg:w-[48%] lg:px-12 lg:pt-32 lg:pb-16">
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
              <h1 className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.08] font-bold tracking-tight text-white">
                Otinaki
              </h1>
              <p className="body-text-light mt-6 max-w-md">{slide.description}</p>
            </motion.div>
          </AnimatePresence>

          <a
            href="#about"
            className="mt-10 inline-flex items-center gap-3 text-[15px] font-semibold text-white transition-colors hover:text-gold"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold text-gold">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
            Explore our story
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 lg:mt-0">
          {heroSlides.map((s, i) => (
            <button
              key={s.subtitle}
              type="button"
              onClick={() => setCurrent(i)}
              className="group text-left"
              aria-label={`View slide: ${s.subtitle}`}
            >
              <div
                className={`mb-2 h-0.5 transition-all duration-300 ${
                  i === current
                    ? "w-14 bg-gold"
                    : "w-8 bg-white/30 group-hover:bg-white/50"
                }`}
              />
              <span
                className={`text-xs font-medium ${
                  i === current ? "text-white" : "text-white/50"
                }`}
              >
                {s.subtitle}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative h-[45vh] flex-1 lg:h-auto lg:min-h-screen">
        <div className="clip-diagonal absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
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
              <div className="absolute inset-0 bg-navy/25" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute right-6 bottom-20 flex gap-2 lg:right-10 lg:bottom-16">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-navy/50 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-navy/50 text-white backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 border-t border-white/10 bg-navy py-3">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, copy) => (
            <div key={copy} className="flex shrink-0">
              {["Innovation", "Integrity", "Excellence", "Sustainability", "Impact", "Vision"].map(
                (word) => (
                  <span
                    key={`${copy}-${word}`}
                    className="mx-10 text-xs font-medium tracking-widest text-white/35 uppercase"
                  >
                    {word}
                    <span className="mx-10 text-gold">·</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
