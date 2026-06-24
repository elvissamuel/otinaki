import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { PageHero } from "../components/PageHero";
import { BlogCard } from "../components/BlogCard";
import { blogPosts } from "../lib/blog";

export const metadata: Metadata = {
  title: "Blog & Insights | Otinaki",
  description:
    "Expert perspectives from Otinaki on construction, energy, agriculture, real estate, and integrated development across Nigeria.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <PageShell>
      <PageHero
        label="Blog"
        title="Insights & Perspectives"
        subtitle="Expert commentary on the industries, innovations, and integrated development strategies shaping Nigeria's future."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section data-header-theme="light" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mb-12">
            <span className="section-label">Featured</span>
            <h2 className="section-title mt-3">Latest article</h2>
          </div>
          <BlogCard post={featured} featured />
        </div>
      </section>

      <section data-header-theme="light" className="bg-cream">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 lg:px-10 lg:pb-28">
          <span className="section-label">All Articles</span>
          <h2 className="section-title mt-3 mb-10">More from Otinaki</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
