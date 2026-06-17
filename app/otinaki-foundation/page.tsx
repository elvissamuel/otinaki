import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Otinaki Foundation | Community Impact & Social Responsibility",
  description:
    "The Otinaki Foundation is the social impact arm of the Otinaki Group — investing in education, community development, and sustainable livelihoods across Nigeria.",
};

const focusAreas = [
  {
    title: "Education & Skills Development",
    body: "Supporting access to quality education and vocational training programmes that equip young people and underserved communities with the skills to thrive in a changing economy.",
  },
  {
    title: "Community Infrastructure",
    body: "Funding and delivering essential community infrastructure — from clean water access to youth centres — in the areas where Otinaki operates.",
  },
  {
    title: "Agricultural Livelihoods",
    body: "Empowering smallholder farmers and rural communities through training, equipment access, and market linkages that strengthen food security and household income.",
  },
  {
    title: "Youth Empowerment",
    body: "Creating pathways for young Nigerians through mentorship, entrepreneurship support, and internship programmes across Otinaki's business units.",
  },
];

export default function OtinakiFoundationPage() {
  return (
    <PageShell>
      <PageHero
        label="Otinaki Foundation"
        title="Investing in People. Strengthening Communities."
        subtitle="The social impact arm of the Otinaki Group — committed to creating lasting change in the communities we serve."
        image="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&q=80"
      />

      <section data-header-theme="light" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title mt-3">
              Building beyond business
            </h2>
            <p className="body-text mt-5">
              The Otinaki Foundation was established to extend the group&apos;s commitment to progress beyond commercial enterprise. We believe that lasting success is measured not only by what we build, but by the lives we improve and the communities we strengthen along the way.
            </p>
            <p className="body-text mt-4">
              Through targeted programmes in education, community development, and sustainable livelihoods, the Foundation works alongside Otinaki&apos;s business units to create meaningful, measurable impact in Nigeria and beyond.
            </p>
            <p className="body-text mt-4">
              {/* Placeholder — replace with official Foundation copy */}
              More details about our programmes, partnerships, and impact stories will be shared here soon. We invite organisations, donors, and community leaders who share our vision to connect with us.
            </p>
          </div>
        </div>
      </section>

      <section data-header-theme="light" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24">
          <span className="section-label">Focus Areas</span>
          <h2 className="section-title mt-3 max-w-xl">
            Where we direct our impact
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-xl border border-navy/8 bg-white p-6">
                <div className="mb-3 h-1 w-10 rounded bg-gold" />
                <h3 className="font-bold text-navy">{area.title}</h3>
                <p className="body-text mt-2 text-sm">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-header-theme="dark" className="bg-navy text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 text-center lg:px-10">
          <h2 className="text-2xl font-bold lg:text-3xl">
            Partner with the Foundation
          </h2>
          <p className="body-text-light mx-auto mt-4 max-w-xl">
            Whether you are a corporate partner, NGO, or individual donor, we welcome conversations about how we can create impact together.
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
