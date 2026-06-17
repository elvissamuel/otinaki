"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" data-header-theme="dark" className="bg-navy text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <AnimateOnScroll>
            <span className="section-label">Contact Us</span>
            <h2 className="section-title-light mt-3">
              Let&apos;s Build Something<br />
              <span className="text-gold">Extraordinary Together</span>
            </h2>
            <p className="body-text-light mt-5 max-w-lg">
              With experienced teams, modern equipment, and a presence across construction, energy, agriculture, real estate, hospitality, and mobility, Otinaki is ready to bring precision and excellence to your next project.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { label: "Office", value: "Victoria Island, Lagos, Nigeria" },
                { label: "Email", value: "hello@otinaki.com" },
                { label: "Phone", value: "+234 (0) 800 OTINAKI" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold tracking-wide text-white/50 uppercase">{item.label}</p>
                  <p className="mt-1 text-[15px] font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              Visit full contact page →
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-10 text-center"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/20 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message sent</h3>
                <p className="body-text-light mt-2">We&apos;ll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-7 lg:p-8">
                <div className="space-y-5">
                  {[
                    { id: "name", label: "Full name", type: "text" },
                    { id: "email", label: "Email address", type: "email" },
                    { id: "company", label: "Company / Organisation", type: "text" },
                    { id: "subject", label: "Subject", type: "text" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="mb-1.5 block text-sm font-semibold text-white/80">
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold"
                        placeholder={field.label}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-white/80">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none transition-colors placeholder:text-white/30 focus:border-gold"
                      placeholder="Tell us about your project"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-gold py-3.5 text-[15px] font-bold text-navy transition-colors hover:bg-gold/90"
                >
                  Send Message
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
