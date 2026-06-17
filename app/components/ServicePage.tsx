import Image from "next/image";
import { PageShell } from "./PageShell";
import { PageHero } from "./PageHero";
import type { ReactNode } from "react";

type ServicePageProps = {
  label: string;
  tagline: string;
  headline: string;
  body: string;
  cta: string;
  image: string;
  highlights: { title: string; body: string }[];
  children?: ReactNode;
};

export function ServicePage({
  label,
  tagline,
  headline,
  body,
  cta,
  image,
  highlights,
  children,
}: ServicePageProps) {
  return (
    <PageShell>
      <PageHero label={label} title={tagline} subtitle={headline} image={image} />

      {/* Main content */}
      <section data-header-theme="light" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <h2 className="section-title">What We Deliver</h2>
              <p className="body-text mt-5">{body}</p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy/90"
              >
                {cta} →
              </a>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt={tagline}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      {highlights.length > 0 && (
        <section data-header-theme="light" className="bg-cream">
          <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-navy/8 bg-white p-6">
                  <div className="mb-3 h-1 w-10 rounded bg-gold" />
                  <h3 className="font-bold text-navy">{h.title}</h3>
                  <p className="body-text mt-2 text-sm">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {children}

      {/* CTA */}
      <section data-header-theme="dark" className="bg-navy text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 text-center lg:px-10">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Ready to get started?
          </h2>
          <p className="body-text-light mx-auto mt-4 max-w-xl">
            Speak with our team about how Otinaki can deliver precision and excellence to your project.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-8 py-3.5 text-[15px] font-bold text-navy transition-colors hover:bg-gold/90"
          >
            {cta} →
          </a>
        </div>
      </section>
    </PageShell>
  );
}
