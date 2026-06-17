import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Solar Power Installation & Electrical Engineering in Nigeria | Otinaki Energy",
  description:
    "Otinaki Energy designs and installs solar power systems and provides electrical engineering services for homes, businesses, and industries across Nigeria.",
};

export default function EnergyPage() {
  return (
    <ServicePage
      label="Energy"
      tagline="Powering Autonomous Infrastructure."
      headline="Solar Power Installation & Electrical Engineering Services in Nigeria"
      body="Reliable power is the lifeblood of progress. Otinaki Energy designs and deploys advanced electrical engineering and solar system solutions. We transition communities and commercial enterprises toward grid-independent, sustainable power. Our team delivers energy solutions tailored to each client's needs — from small residential solar installations to large-scale commercial and industrial power systems."
      cta="Get an Energy Assessment"
      image="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80"
      highlights={[
        {
          title: "Solar System Design",
          body: "Custom solar power system design for residential, commercial, and industrial applications — sized for your exact energy needs.",
        },
        {
          title: "Installation & Commissioning",
          body: "Professional installation and commissioning of solar panels, inverters, batteries, and associated electrical systems.",
        },
        {
          title: "Electrical Engineering",
          body: "Full electrical engineering services — from load analysis and panel design to wiring and grid integration.",
        },
        {
          title: "Grid-Independent Power",
          body: "Off-grid and hybrid power systems that eliminate dependence on the national grid and ensure uninterrupted operations.",
        },
        {
          title: "Commercial & Industrial",
          body: "Large-scale energy solutions for factories, estates, commercial complexes, and industrial facilities.",
        },
        {
          title: "Maintenance & Support",
          body: "Ongoing maintenance, monitoring, and technical support to ensure optimal system performance over the long term.",
        },
      ]}
    />
  );
}
