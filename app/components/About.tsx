"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { aboutAccordion, stats, whyOtinaki } from "../lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  return (
    <motion.span
      ref={(el) => {
        if (!el || started) return;
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setStarted(true);
              let start = 0;
              const step = value / 125;
              const timer = setInterval(() => {
                start += step;
                if (start >= value) { setCount(value); clearInterval(timer); }
                else setCount(Math.floor(start));
              }, 16);
              observer.disconnect();
            }
          },
          { threshold: 0.5 },
        );
        observer.observe(el);
      }}
      className="text-3xl font-bold text-navy"
    >
      {count}<span className="text-gold">{suffix}</span>
    </motion.span>
  );
}

export function About() {
  const [activeTab, setActiveTab] = useState(0);
  const active = aboutAccordion[activeTab];

  return (
    <section id="about" data-header-theme="light" className="bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">

        {/* Headline + body */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll>
            <span className="section-label">About Otinaki</span>
            <h2 className="section-title mt-3">
              The Otinaki Standard:<br />
              <span className="text-gold">Mastery in Every Discipline</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1} direction="right">
            <p className="body-text">
              What separates Otinaki is our technical pedigree. The same rigorous engineering protocols required to build a dam or design a commercial solar grid are applied to our luxury real estate developments and agricultural operations. This cross-pollinated expertise allows us to anticipate challenges, eliminate operational friction, and deliver uncompromising quality with absolute certainty across every sector we serve.
            </p>
            <p className="body-text mt-4">
              Our strength lies in our diversity. Each Otinaki business unit — Construction, Real Estate & Hospitality, Energy, Agriculture, and Mobility — operates with deep sector expertise, while drawing on the resources, standards, and values of the wider group.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Stats */}
        {/* <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-navy/8 bg-white px-5 py-6 text-center">
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs font-semibold tracking-wide text-navy/60 uppercase">{stat.label}</p>
            </div>
          ))}
        </div> */}

        {/* Image + Mission/Vision/Values */}
        <div className="mt-20 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Otinaki operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <span className="section-label">Our Foundation</span>
            <div className="mt-4 flex flex-wrap gap-2">
              {aboutAccordion.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    activeTab === i ? "bg-navy text-white" : "bg-white text-navy hover:bg-navy/5"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 rounded-xl border border-navy/8 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-navy">{active.title}</h3>
              <p className="body-text mt-3 text-[0.9375rem]">{active.content}</p>
            </motion.div>

            {/* Why Otinaki */}
            <div className="mt-10 space-y-5">
              <h3 className="text-base font-bold text-navy">Why Otinaki?</h3>
              {whyOtinaki.map((item) => (
                <div key={item.title} className="rounded-xl border border-navy/8 bg-white p-5">
                  <p className="font-bold text-navy">{item.title}</p>
                  <p className="text-xs font-semibold text-gold uppercase mt-0.5">{item.subtitle}</p>
                  <p className="body-text mt-2 text-sm">{item.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                Read our full story →
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
