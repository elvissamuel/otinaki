import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Real Estate Development & Hotel Management in Nigeria | Otinaki",
  description:
    "Otinaki Real Estate & Hospitality develops, sells, and manages premium properties and hotels across Nigeria — built and operated to institutional-grade standards.",
};

export default function RealEstatePage() {
  return (
    <ServicePage
      label="Real Estate & Hospitality"
      tagline="Engineered for Living. Managed for Excellence."
      headline="Property Development, Sales & Hotel Management in Nigeria"
      body="Otinaki seamlessly blends institutional construction with high-touch lifestyle management. We acquire, develop, and manage premium real estate and hotel properties. Our hospitality division ensures that every physical asset delivers an exceptional human experience and sustained operational value. From luxury residential developments to full-service hotel properties, we combine engineering rigor with elevated service standards."
      cta="Enquire About Available Properties"
      image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=80"
      highlights={[
        {
          title: "Property Development",
          body: "Acquisition, planning, and development of premium residential and commercial real estate across Nigeria.",
        },
        {
          title: "Property Sales",
          body: "Transparent, well-structured sales processes for residential, commercial, and mixed-use assets.",
        },
        {
          title: "Hotel Management",
          body: "Full-service hotel management delivering exceptional guest experiences and optimised operational performance.",
        },
        {
          title: "Institutional Standards",
          body: "Every property is designed and constructed to the same standards applied to our civil engineering projects.",
        },
        {
          title: "Asset Management",
          body: "Long-term portfolio management maximising yield for investors and owners across our real estate holdings.",
        },
        {
          title: "Hospitality Operations",
          body: "End-to-end hospitality operations — from staffing and brand standards to procurement and guest services.",
        },
      ]}
    />
  );
}
