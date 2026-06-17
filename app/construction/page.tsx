import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Civil Engineering, Road, Bridge & Building Construction | Otinaki",
  description:
    "Otinaki Construction designs and executes complex civil engineering projects — roads, bridges, dams, and commercial buildings — to the highest standards of safety and structural integrity.",
};

export default function ConstructionPage() {
  return (
    <ServicePage
      label="Construction"
      tagline="Shaping the Physical Future."
      headline="Civil Engineering, Road, Bridge, Dam & Building Construction"
      body="Otinaki Construction designs and executes infrastructure projects that form the backbone of growing communities and economies. We specialize in the design and execution of complex civil engineering projects — including buildings, roads, bridges, dams, and large-scale commercial buildings. Every project is delivered with a focus on structural integrity, safety, and timely completion, backed by experienced engineers and modern equipment. From initial design through final handover, our construction team manages projects to a standard built to last."
      cta="Request a Construction Consultation"
      image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
      highlights={[
        {
          title: "Roads & Highways",
          body: "Design and construction of roads, highways, and arterial routes built for long-term durability and community connectivity.",
        },
        {
          title: "Bridges & Drainage",
          body: "Complex civil engineering structures — from drainage systems to cable-stayed bridges — executed to exacting safety standards.",
        },
        {
          title: "Dams & Water Infrastructure",
          body: "Large-scale water containment and management structures engineered for resilience, safety, and long operational life.",
        },
        {
          title: "Commercial Buildings",
          body: "Architectural landmarks and large-scale commercial builds designed for functionality, aesthetics, and structural longevity.",
        },
        {
          title: "Residential Developments",
          body: "Premium residential construction backed by the same institutional standards we apply to civil engineering projects.",
        },
        {
          title: "Project Management",
          body: "End-to-end oversight from design brief through final handover — on time, within budget, to specification.",
        },
      ]}
    />
  );
}
