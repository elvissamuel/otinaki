import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { whyOtinaki, stats, aboutAccordion } from "../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Information | Otinaki",
  description:
    "Learn about Otinaki — a diversified corporate powerhouse delivering precision and excellence across construction, energy, real estate, agriculture, and mobility in Nigeria.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="Corporate Information"
        title="The Otinaki Standard: Mastery in Every Discipline"
        subtitle="What separates Otinaki is our technical pedigree — civil-grade precision applied to every industry we touch."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      {/* Main body */}
      <section data-header-theme="light" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="body-text mt-5">
                Otinaki is a diversified corporate powerhouse operating across five critical sectors in Nigeria. We engineer entire ecosystems — from the heavy infrastructure that connects cities, to the energy systems that power them, and the premium hospitality assets that elevate them.
              </p>
              <p className="body-text mt-4">
                The same rigorous engineering protocols required to build a dam or design a commercial solar grid are applied to our luxury real estate developments and agricultural operations. This cross-pollinated expertise allows us to anticipate challenges, eliminate operational friction, and deliver uncompromising quality with absolute certainty.
              </p>
              <p className="body-text mt-4">
                Our strength lies in our diversity. Each Otinaki business unit operates with deep sector expertise, while drawing on the resources, standards, and values of the wider group. This allows us to take on complex, multi-disciplinary projects with confidence — whether that means developing a property and furnishing it with reliable solar power, or supporting an agricultural operation with the logistics and equipment it needs to scale.
              </p>
              <p className="body-text mt-4">
                Guided by our mission to deliver precision and excellence, and our vision to be the benchmark for excellence in every sector we serve, Otinaki is building a reputation as a partner clients can rely on — in Nigeria and beyond, today and for the long term.
              </p>
            </div>

            <div className="space-y-5">
              {aboutAccordion.map((item) => (
                <div key={item.id} className="rounded-xl border border-navy/8 bg-cream p-6">
                  <h3 className="font-bold text-navy">{item.title}</h3>
                  <p className="body-text mt-2 text-[0.9375rem]">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      {/* <section data-header-theme="light" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-navy/8 bg-white px-5 py-6 text-center">
                <p className="text-3xl font-bold text-navy">
                  {stat.value}<span className="text-gold">{stat.suffix}</span>
                </p>
                <p className="mt-2 text-xs font-semibold tracking-wide text-navy/60 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Otinaki */}
      <section data-header-theme="light" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <span className="section-label">Why Otinaki?</span>
          <h2 className="section-title mt-3 max-w-xl">
            The integrated advantage
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyOtinaki.map((item) => (
              <div key={item.title} className="rounded-xl border border-navy/8 bg-cream p-7">
                <p className="text-lg font-bold text-navy">{item.title}</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-gold uppercase">{item.subtitle}</p>
                <p className="body-text mt-4">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-header-theme="dark" className="bg-navy text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 text-center lg:px-10">
          <h2 className="text-2xl font-bold text-white lg:text-3xl">
            Ready to work with Otinaki?
          </h2>
          <p className="body-text-light mx-auto mt-4 max-w-xl">
            Reach out to our team and let&apos;s explore how we can bring precision and excellence to your next project.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-[15px] font-bold text-navy transition-colors hover:bg-gold/90"
          >
            Get in Touch →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
