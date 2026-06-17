"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageShell>
      <PageHero
        label="Contact Us"
        title="Let's Build Something Extraordinary Together"
        subtitle="With experienced teams, modern equipment, and presence across five sectors, Otinaki is ready to bring precision and excellence to your next project."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />

      <section data-header-theme="light" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Contact info */}
            <div>
              <span className="section-label">Reach Us</span>
              <h2 className="section-title mt-3">How can we help?</h2>
              <p className="body-text mt-4">
                Whether you have a specific project in mind or want to learn more about our services, we&apos;d love to hear from you. Our team will respond within 24 hours.
              </p>

              <div className="mt-10 space-y-7">
                {[
                  {
                    icon: "📍",
                    label: "Office",
                    value: "Victoria Island, Lagos, Nigeria",
                  },
                  { icon: "✉️", label: "Email", value: "hello@otinaki.com" },
                  { icon: "📞", label: "Phone", value: "+234 (0) 800 OTINAKI" },
                  { icon: "🕐", label: "Office Hours", value: "Monday – Friday, 8am – 6pm WAT" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-navy/50 uppercase">{item.label}</p>
                      <p className="mt-0.5 text-[15px] font-medium text-navy">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <p className="text-sm font-semibold text-navy/60 uppercase tracking-wide">Enquiries by sector</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Construction", "Real Estate & Hospitality", "Energy", "Agriculture", "Mobility"].map((s) => (
                    <span key={s} className="rounded-full border border-navy/10 bg-cream px-4 py-1.5 text-sm font-medium text-navy">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex min-h-[500px] flex-col items-center justify-center rounded-2xl border border-navy/8 bg-cream p-10 text-center"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold/25 text-gold">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy">Message sent</h3>
                  <p className="body-text mt-2">Thank you — we&apos;ll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-2xl border border-navy/8 bg-cream p-7 lg:p-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {[
                      { id: "name", label: "Full name", type: "text" },
                      { id: "email", label: "Email address", type: "email" },
                      { id: "company", label: "Company / Organisation", type: "text" },
                      { id: "phone", label: "Phone number", type: "tel" },
                    ].map((field) => (
                      <div key={field.id}>
                        <label htmlFor={field.id} className="mb-1.5 block text-sm font-semibold text-navy">
                          {field.label}
                        </label>
                        <input
                          id={field.id}
                          name={field.id}
                          type={field.type}
                          required={field.id !== "phone"}
                          className="w-full rounded-lg border border-navy/12 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/20"
                          placeholder={field.label}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5">
                    <label htmlFor="sector" className="mb-1.5 block text-sm font-semibold text-navy">
                      Sector of interest
                    </label>
                    <select
                      id="sector"
                      name="sector"
                      className="w-full rounded-lg border border-navy/12 bg-white px-4 py-3 text-[15px] text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
                    >
                      <option value="">Select a sector</option>
                      <option>Construction</option>
                      <option>Real Estate & Hospitality</option>
                      <option>Energy</option>
                      <option>Agriculture</option>
                      <option>Automobile & Mobility</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-navy/12 bg-white px-4 py-3 text-[15px] text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-gold focus:ring-2 focus:ring-gold/20"
                      placeholder="Tell us about your project or enquiry"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-6 w-full rounded-lg bg-navy py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-navy/90"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
