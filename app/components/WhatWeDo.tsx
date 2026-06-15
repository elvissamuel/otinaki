"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";
import { services } from "../lib/data";

export function WhatWeDo() {
  return (
    <section id="services" data-header-theme="light" className="bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <AnimateOnScroll className="mb-12 max-w-2xl">
          <span className="section-label">What We Do</span>
          <h2 className="section-title mt-3">
            Six disciplines, one standard of excellence
          </h2>
          <p className="body-text mt-4">
            End-to-end expertise across industries — delivered with clarity,
            accountability, and care.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={i * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-navy/8 bg-white p-6 transition-shadow hover:shadow-md hover:shadow-navy/5 lg:p-7">
                <span className="text-sm font-bold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg font-bold text-navy">
                  {service.title}
                </h3>
                <p className="body-text mt-3 text-[0.9375rem] leading-relaxed">
                  {service.description}
                </p>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
