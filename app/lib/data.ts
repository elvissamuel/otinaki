export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Corporate Information", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Foundation", href: "/otinaki-foundation" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80",
    subtitle: "Construction · Energy · Real Estate · Agriculture · Mobility",
    description:
      "Delivering precision and excellence across construction, energy, agriculture, real estate and mobility to drive global progress.",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
    subtitle: "Real Estate & Hospitality",
    description:
      "High-yield property assets and premium hotel management, backed by institutional-grade construction standards.",
  },
  {
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&q=80",
    subtitle: "Next-Generation Energy",
    description:
      "Solar and electrical engineering solutions that transition communities toward grid-independent, sustainable power.",
  },
  {
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&q=80",
    subtitle: "Agriculture & Food Security",
    description:
      "Industrial-scale agrarian operations, livestock rearing, and aquaculture delivering reliable supply chains.",
  },
];

export const aboutAccordion = [
  {
    id: "mission",
    title: "Our Mission",
    content:
      "Delivering precision and excellence across construction, energy, agriculture, real estate and mobility to drive progress.",
  },
  {
    id: "vision",
    title: "Our Vision",
    content:
      "To be the benchmark for excellence, securing an unassailable advantage for our clients in every sector we serve.",
  },
  {
    id: "values",
    title: "Our Values",
    content:
      "Otinaki is built on integrity, accountability, and a relentless pursuit of excellence. We hold every team member to the highest ethical standards, and we expect that commitment to quality and trust to be reflected in every project we deliver and every relationship we build — with clients, partners, and communities alike.",
  },
];

export const stats = [
  { value: 5, suffix: "", label: "Sectors" },
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 12, suffix: "", label: "States of Operation" },
];

export const services = [
  {
    slug: "construction",
    icon: "building",
    title: "Construction",
    tagline: "Shaping the Physical Future.",
    headline: "Civil Engineering, Road, Bridge, Dam & Building Construction",
    description:
      "Infrastructure built for longevity — from complex drainage and bridges to architectural landmarks.",
    body: "Otinaki Construction designs and executes infrastructure projects that form the backbone of growing communities and economies. We specialize in the design and execution of complex civil engineering projects — including buildings, roads, bridges, dams, and large-scale commercial buildings. Every project is delivered with a focus on structural integrity, safety, and timely completion, backed by experienced engineers and modern equipment.",
    cta: "Request a Construction Consultation",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    slug: "real-estate-hospitality",
    icon: "landmark",
    title: "Real Estate & Hospitality",
    tagline: "Engineered for Living. Managed for Excellence.",
    headline: "Property Development, Sales & Hotel Management in Nigeria",
    description:
      "High-yield property assets and premium hotel management, backed by institutional-grade construction standards.",
    body: "Otinaki seamlessly blends institutional construction with high-touch lifestyle management. We acquire, develop, and manage premium real estate and hotel properties. Our hospitality division ensures that every physical asset delivers an exceptional human experience and sustained operational value.",
    cta: "Enquire About Available Properties",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    slug: "energy",
    icon: "bolt",
    title: "Energy",
    tagline: "Powering Autonomous Infrastructure.",
    headline: "Solar Power Installation & Electrical Engineering Services",
    description:
      "Next-generation solar and electrical engineering for autonomous, future-proof power.",
    body: "Reliable power is the lifeblood of progress. Otinaki Energy designs and deploys advanced electrical engineering and solar system solutions. We transition communities and commercial enterprises toward grid-independent, sustainable power. Our team delivers energy solutions tailored to each client's needs.",
    cta: "Get an Energy Assessment",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  },
  {
    slug: "agriculture",
    icon: "leaf",
    title: "Agriculture",
    tagline: "Cultivating Growth Naturally.",
    headline: "Precision Agrarian Operations, Livestock & Aquaculture",
    description:
      "Driving food security and economic scale through modern agrarian operations, livestock, and aquaculture.",
    body: "We approach agriculture with industrial scale and scientific rigor. Our operations span expansive agrarian farming, optimized livestock rearing, and high-yield fish farming, combining modern techniques with sound land and resource management to deliver quality produce consistently, contributing to regional food security and highly reliable supply chains.",
    cta: "Explore Agricultural Partnerships",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
  },
  {
    slug: "automobile-mobility",
    icon: "car",
    title: "Automobile & Mobility",
    tagline: "Driving You Forward.",
    headline: "Unrestricted Global Mobility — Vehicles, Vessels & Aircraft",
    description:
      "Bespoke procurement and logistics across land, sea, and air.",
    body: "Moving people and assets with total efficiency. Our mobility division handles the high-level procurement, buying, and selling of premium cars, marine vessels, and aircraft, ensuring our clients maintain their operational momentum without interruption — with emphasis on quality and value.",
    cta: "Enquire About Mobility Solutions",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
];

export const foundation = {
  slug: "otinaki-foundation",
  title: "Otinaki Foundation",
  tagline: "Investing in People. Strengthening Communities.",
  headline: "The social impact arm of the Otinaki Group",
};

export const navServices = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  tagline: s.tagline,
  href: `/${s.slug}`,
}));

export const whyOtinaki = [
  {
    title: "Zero-Friction Asset Delivery",
    subtitle: "End-to-End Project Delivery",
    body: "We manage the full project lifecycle: we build the infrastructure, power the facilities, and manage the long-term operations — a true turnkey approach from design to delivery.",
  },
  {
    title: "Future-Proof Engineering",
    subtitle: "Sustainable, Self-Sufficient Infrastructure",
    body: "We build assets that are self-sustaining, resource-resilient, and structured for long-term operational performance, reducing reliance on unstable power and supply chains.",
  },
];
