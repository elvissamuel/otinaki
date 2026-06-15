"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { aboutAccordion, stats } from "../lib/data";

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
                if (start >= value) {
                  setCount(value);
                  clearInterval(timer);
                } else {
                  setCount(Math.floor(start));
                }
              }, 16);
              observer.disconnect();
            }
          },
          { threshold: 0.5 },
        );
        observer.observe(el);
      }}
      className="text-3xl font-bold text-navy lg:text-4xl"
    >
      {count}
      <span className="text-gold">{suffix}</span>
    </motion.span>
  );
}

export function About() {
  const [activeTab, setActiveTab] = useState(0);
  const active = aboutAccordion[activeTab];

  return (
    <section id="about" data-header-theme="light" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <AnimateOnScroll>
            <span className="section-label">About Us</span>
            <h2 className="section-title mt-3">
              Built on vision.
              <br />
              <span className="text-gold">Driven by purpose.</span>
            </h2>
            <p className="body-text mt-5 max-w-lg">
              Otinaki is a multi-sector enterprise shaping industries across real
              estate, construction, energy, and agriculture. We build projects
              that create lasting value for our partners and communities.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1} direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-navy/8 bg-cream px-5 py-6"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 text-xs font-semibold tracking-wide text-navy/70 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimateOnScroll direction="left">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Otinaki workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-3 rounded-xl bg-navy px-5 py-4">
              <p className="text-2xl font-bold text-gold">15+</p>
              <p className="text-sm font-medium text-white">Years of impact</p>
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
                    activeTab === i
                      ? "bg-navy text-white"
                      : "bg-cream text-navy hover:bg-navy/5"
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
              className="mt-6 rounded-xl border border-navy/8 bg-cream p-6"
            >
              <h3 className="text-xl font-bold text-navy">{active.title}</h3>
              <p className="body-text mt-3">{active.content}</p>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href="#projects"
                className="text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
              >
                View our work
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-navy/70 hover:text-navy"
              >
                Get in touch →
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
