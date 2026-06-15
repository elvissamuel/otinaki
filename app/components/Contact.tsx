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
    <section id="contact" data-header-theme="light" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <AnimateOnScroll>
            <span className="section-label">Contact</span>
            <h2 className="section-title mt-3">
              Let&apos;s build something{" "}
              <span className="text-gold">remarkable</span>
            </h2>
            <p className="body-text mt-4 max-w-md">
              Ready to start your next project? Reach out and our team will
              respond within 24 hours.
            </p>

            <div className="mt-10 space-y-6">
              {[
                {
                  label: "Office",
                  value: "42 Innovation Drive, Victoria Island, Lagos",
                },
                { label: "Email", value: "hello@otinaki.com" },
                { label: "Phone", value: "+234 (0) 800 OTINAKI" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-semibold tracking-wide text-navy/60 uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-navy">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll direction="right" delay={0.1}>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-navy/10 bg-cream p-10 text-center"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/25 text-gold">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy">Message sent</h3>
                <p className="body-text mt-2 text-base">
                  Thank you — we&apos;ll be in touch shortly.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-navy/8 bg-cream p-7 lg:p-8"
              >
                <div className="space-y-5">
                  {[
                    { id: "name", label: "Full name", type: "text" },
                    { id: "email", label: "Email address", type: "email" },
                    { id: "subject", label: "Subject", type: "text" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="mb-1.5 block text-sm font-semibold text-navy"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        required
                        className="w-full rounded-lg border border-navy/12 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/20"
                        placeholder={field.label}
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full resize-none rounded-lg border border-navy/12 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="Tell us about your project"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 w-full rounded-lg bg-navy py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy/90"
                >
                  Send message
                </button>
              </form>
            )}
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
