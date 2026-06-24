"use client";

import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "../lib/blog";

export function BlogPreview() {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="blog" data-header-theme="light" className="bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <AnimateOnScroll className="max-w-2xl">
            <span className="section-label">Insights</span>
            <h2 className="section-title mt-3">From the Otinaki blog</h2>
            <p className="body-text mt-4">
              Perspectives on construction, energy, agriculture, and the integrated
              development shaping Nigeria&apos;s future.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold"
            >
              View all articles →
            </Link>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.1} className="mt-12">
          <BlogCard post={featured} featured />
        </AnimateOnScroll>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={0.15 + i * 0.08}>
              <BlogCard post={post} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
