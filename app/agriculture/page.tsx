import type { Metadata } from "next";
import { ServicePage } from "../components/ServicePage";

export const metadata: Metadata = {
  title: "Agrarian Farming, Livestock & Aquaculture Operations | Otinaki Agriculture",
  description:
    "Otinaki Agriculture operates large-scale agrarian farming, livestock rearing, and aquaculture — delivering reliable food supply chains and contributing to Nigeria's food security.",
};

export default function AgriculturePage() {
  return (
    <ServicePage
      label="Agriculture"
      tagline="Cultivating Growth Naturally."
      headline="Precision Agrarian Operations, Livestock & Aquaculture"
      body="We approach agriculture with industrial scale and scientific rigor. Our operations span expansive agrarian farming, optimized livestock rearing, and high-yield fish farming, combining modern techniques with sound land and resource management to deliver quality produce consistently. We contribute to regional food security and build highly reliable supply chains that serve both domestic and export markets."
      cta="Explore Agricultural Partnerships"
      image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80"
      highlights={[
        {
          title: "Agrarian Farming",
          body: "Large-scale crop cultivation using modern agricultural techniques, precision irrigation, and sound land management practices.",
        },
        {
          title: "Livestock Operations",
          body: "Optimised rearing of cattle, poultry, and other livestock with a focus on animal welfare, yield quality, and operational efficiency.",
        },
        {
          title: "Aquaculture & Fish Farming",
          body: "High-yield fish farming operations combining modern aquaculture technology with sustainable water resource management.",
        },
        {
          title: "Food Security",
          body: "Contributing to Nigeria's food security by maintaining consistent, high-quality produce output throughout the year.",
        },
        {
          title: "Supply Chain Reliability",
          body: "Integrated supply chain management ensuring reliable, traceable delivery of produce to domestic and export markets.",
        },
        {
          title: "Agricultural Partnerships",
          body: "Strategic partnerships with agribusinesses, investors, and communities to scale operations and share expertise.",
        },
      ]}
    />
  );
}
