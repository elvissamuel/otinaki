"use client";

import { AnimateOnScroll } from "./AnimateOnScroll";
import { services } from "../lib/data";

const sectorIcons: Record<string, React.ReactNode> = {
  building: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15l.75 18H3.75L4.5 3zM9 21V9h6v12" />
    </svg>
  ),
  landmark: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9h20L12 3zM5 9v12M19 9v12M2 21h20" />
    </svg>
  ),
  bolt: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  leaf: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C6.5 21 3 16.5 3 12c0-5 4-9 9-9s9 4 9 9c0 1.5-.5 3-1.5 4.5C18 19 15 21 12 21z" />
    </svg>
  ),
  car: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  ),
};

export function Overview() {
  return (
    <section
      id="overview"
      data-header-theme="light"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <AnimateOnScroll>
            <span className="section-label">Who We Are</span>
            <h2 className="section-title mt-3">
              The Engine of<br />Multi-Sector Progress.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} direction="right">
            <p className="body-text">
              Otinaki is a diversified corporate powerhouse operating across five critical sectors in Nigeria. We engineer entire ecosystems — from the heavy infrastructure that connects cities to the energy systems that power them, and the premium hospitality assets that elevate them. We apply civil-grade precision to every industry we touch.
            </p>
            <p className="body-text mt-4">
              By integrating our expertise across five critical sectors, we secure a definitive, calculated edge for our clients and investors. We exist to drive progress not just within the industries we operate in, but within the communities and economies we serve.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Sector list */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <AnimateOnScroll key={s.slug} delay={i * 0.06}>
              <a
                href={`/${s.slug}`}
                className="group flex h-36 items-start gap-4 rounded-xl border border-navy/8 bg-cream p-5 transition-all hover:border-gold/40 hover:shadow-md hover:shadow-navy/5 sm:h-40"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                  {sectorIcons[s.icon]}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-navy transition-colors group-hover:text-gold">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/65">{s.description}</p>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.1} className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy/90"
          >
            Work With Otinaki
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
