import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Vehicle, Marine & Aircraft Procurement | Otinaki Automobile & Mobility",
  description:
    "Otinaki Mobility handles premium procurement and logistics for cars, marine vessels, and aircraft — ensuring our clients maintain operational momentum with quality and value.",
};

export default function MobilityPage() {
  return (
    <ServicePage
      label="Automobile & Mobility"
      tagline="Driving You Forward."
      headline="Unrestricted Global Mobility — Vehicles, Marine Vessels & Aircraft"
      body="Moving people and assets with total efficiency. Our mobility division handles the high-level procurement, buying, and selling of premium cars, marine vessels, and aircraft, ensuring our clients maintain their operational momentum without interruption — with emphasis on quality and value. We source, verify, and deliver assets across land, sea, and air with the same precision we bring to every Otinaki operation."
      cta="Enquire About Mobility Solutions"
      image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      highlights={[
        {
          title: "Premium Vehicle Procurement",
          body: "Bespoke sourcing of premium and luxury vehicles — new and used — from global markets, verified and delivered to your specification.",
        },
        {
          title: "Marine Vessels",
          body: "Procurement and supply of marine assets including speedboats, yachts, and commercial vessels for personal and business use.",
        },
        {
          title: "Aircraft Acquisition",
          body: "Expert facilitation of private and commercial aircraft procurement, including pre-purchase inspection, logistics, and registration support.",
        },
        {
          title: "Import & Export Logistics",
          body: "End-to-end import and export logistics for vehicles and mobile assets — customs clearance, documentation, and delivery.",
        },
        {
          title: "Fleet Solutions",
          body: "Fleet procurement and management services for corporate clients requiring reliable, cost-effective mobility solutions.",
        },
        {
          title: "Asset Valuation & Sales",
          body: "Professional valuation and structured resale of vehicles, vessels, and aircraft to maximise value for sellers.",
        },
      ]}
    />
  );
}
