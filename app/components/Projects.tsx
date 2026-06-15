"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { projects } from "../lib/data";

export function Projects() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const project = projects[active];

  return (
    <section id="projects" data-header-theme="dark" className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <AnimateOnScroll>
            <span className="section-label">Projects</span>
            <h2 className="section-title-light mt-3">
              Work that speaks for itself
            </h2>
            <p className="body-text-light mt-4">
              Landmark developments and initiatives across four continents —
              each one built with precision, passion, and purpose.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.1} className="mt-12">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:aspect-[21/9]">
            <motion.div
              key={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
            </motion.div>

            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
              <motion.div
                key={`info-${project.title}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="section-label">{project.category}</span>
                <h3 className="mt-2 text-2xl font-bold text-white lg:text-4xl">
                  {project.title}
                </h3>
                <p className="body-text-light mt-3 max-w-xl">{project.description}</p>
              </motion.div>
            </div>
          </div>
        </AnimateOnScroll>

        <div
          ref={scrollRef}
          className="mt-5 flex gap-3 overflow-x-auto pb-1 scrollbar-hide"
        >
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              onClick={() => setActive(i)}
              className={`group relative shrink-0 overflow-hidden rounded-xl transition-opacity ${
                active === i ? "w-56 opacity-100 sm:w-64" : "w-40 opacity-70 hover:opacity-100 sm:w-48"
              }`}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
                {active === i && (
                  <motion.div
                    layoutId="project-active"
                    className="absolute inset-0 border-2 border-gold"
                  />
                )}
              </div>
              <p
                className={`mt-2 text-left text-sm font-semibold ${
                  active === i ? "text-gold" : "text-white/75"
                }`}
              >
                {p.title}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
