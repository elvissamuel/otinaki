"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { services } from "../lib/data";

export function WhatWeDo() {
  return (
    <section id="services" data-header-theme="light" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <AnimateOnScroll className="mb-12 max-w-2xl">
          <span className="section-label">Our Services</span>
          <h2 className="section-title mt-3">
            Five sectors. One integrated group.
          </h2>
          <p className="body-text mt-4">
            Each Otinaki business unit carries deep sector expertise while drawing on the resources, standards, and values of the wider group.
          </p>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.slug} delay={i * 0.05}>
              <a
                href={`/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-navy/8 bg-cream transition-all hover:shadow-md hover:shadow-navy/5"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy/30" />
                  <span className="absolute bottom-3 left-4 text-xs font-bold tracking-wider text-gold uppercase">
                    {service.title}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-bold text-navy group-hover:text-gold transition-colors">{service.tagline}</h3>
                  <p className="body-text mt-2 flex-1 text-sm">{service.description}</p>
                  <span className="mt-4 text-sm font-semibold text-gold">
                    Learn more →
                  </span>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
