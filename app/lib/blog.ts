export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "grid-independent-power-nigeria",
    title: "Why Grid-Independent Power Is the Future of Nigerian Infrastructure",
    excerpt:
      "Unreliable national grid supply is one of the biggest constraints on growth. Here's how solar and integrated electrical engineering are changing the equation for businesses and communities.",
    category: "Energy",
    date: "March 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
    author: "Otinaki Energy Team",
    content: [
      "Nigeria's energy landscape presents a paradox: enormous demand for reliable power, and persistent grid instability that undermines productivity across every sector. For manufacturers, hotel operators, estate developers, and agricultural processors alike, power interruptions are not merely inconvenient — they are a direct threat to margins, safety, and long-term asset value.",
      "At Otinaki Energy, we approach this challenge not as a standalone electrical problem, but as an infrastructure design question. Grid-independent and hybrid solar systems allow commercial and industrial clients to decouple critical operations from national supply volatility while reducing long-term energy costs.",
      "The shift toward autonomous power is accelerating for three reasons. First, the economics of solar have improved dramatically — installation costs continue to fall while panel efficiency rises. Second, businesses are increasingly unwilling to absorb the hidden cost of diesel generators: fuel, maintenance, noise, and emissions. Third, investors and tenants now expect buildings and facilities to demonstrate energy resilience as a baseline requirement, not a premium upgrade.",
      "For Otinaki's integrated group model, energy is never an afterthought. When we develop a commercial property, manage a hotel, or build an agro-processing facility, power architecture is designed in from day one — not retrofitted after handover. This cross-sector discipline is what allows us to deliver assets that perform reliably for decades, not just at commissioning.",
      "Whether you are planning a new estate, upgrading an existing facility, or scaling agricultural operations, the question is no longer whether to invest in sustainable power — but how quickly you can implement a system sized for your actual load profile and growth trajectory.",
    ],
  },
  {
    slug: "integrated-multi-sector-development",
    title: "The Integrated Advantage: Building Across Sectors Under One Roof",
    excerpt:
      "From civil engineering to hospitality management, Otinaki's multi-sector model eliminates the friction that slows complex projects — and delivers outcomes single-discipline firms simply cannot match.",
    category: "Construction",
    date: "February 28, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    author: "Otinaki Group",
    content: [
      "Complex development projects rarely fail because of a single technical deficiency. They fail because of coordination gaps — between the civil engineer and the electrical contractor, between the developer and the facilities manager, between the construction team and the investor's timeline expectations.",
      "Otinaki was structured specifically to close those gaps. As a diversified group operating across construction, real estate, energy, agriculture, and mobility, we bring civil-grade engineering discipline to every sector we touch — not just the ones with visible steel and concrete.",
      "Consider a mixed-use development: the same engineering protocols applied to bridge construction inform our approach to structural integrity in high-rise builds. Our energy division designs the solar and electrical systems before the roof is poured, not after tenants move in. Our hospitality team plans operational workflows alongside architectural layouts, ensuring that what gets built can actually be run at premium standards.",
      "This integration produces measurable advantages. Projects move faster because decisions are not bottlenecked across multiple external vendors. Quality is more consistent because standards are group-wide, not contract-by-contract. And clients gain a single accountable partner from feasibility through long-term operations.",
      "The result is what we call zero-friction asset delivery — a turnkey approach where infrastructure is built, powered, and managed to perform. For investors and institutions navigating Nigeria's growth markets, that integrated capability is not a luxury. It is the difference between a project that delivers returns and one that delivers headaches.",
    ],
  },
  {
    slug: "modern-agriculture-food-security",
    title: "Modern Agriculture at Scale: Securing Nigeria's Food Future",
    excerpt:
      "Industrial-scale farming, livestock, and aquaculture are essential to regional food security. Otinaki Agriculture is applying engineering rigour to agrarian operations across Nigeria.",
    category: "Agriculture",
    date: "February 10, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80",
    author: "Otinaki Agriculture Team",
    content: [
      "Agriculture remains one of Nigeria's greatest economic opportunities — and one of its most persistent challenges. Rising population, urbanisation, and export demand are all placing pressure on food systems that still rely heavily on smallholder production and fragmented supply chains.",
      "Otinaki Agriculture approaches the sector with the same precision we apply to construction and energy projects. Our operations span expansive agrarian farming, optimised livestock rearing, and high-yield aquaculture — each managed with modern techniques, sound land stewardship, and reliable logistics.",
      "Scale matters, but scale without discipline creates waste. That is why our agricultural model emphasises three pillars: consistent quality output through scientific crop and livestock management, supply chain reliability that gives buyers and partners confidence year-round, and infrastructure integration — including power and mobility solutions from across the Otinaki group — that keeps operations running without interruption.",
      "Food security is not achieved by any single farm or programme. It requires coordinated investment in production capacity, processing infrastructure, and distribution networks. Otinaki's multi-sector capability allows us to contribute at each of those layers, partnering with agribusinesses, investors, and communities that share a long-term vision for Nigeria's agricultural potential.",
      "The opportunity is significant. The organisations that move now — with the right partners, systems, and standards — will define the supply chains that feed Nigeria and export markets for a generation.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return blogPosts.map((post) => post.slug);
}
