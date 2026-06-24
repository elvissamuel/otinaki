import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "../../components/PageShell";
import { BlogCard } from "../../components/BlogCard";
import { blogPosts, getAllBlogSlugs, getBlogPost } from "../../lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found | Otinaki" };

  return {
    title: `${post.title} | Otinaki Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <article>
        <header
          data-header-theme="dark"
          className="relative overflow-hidden bg-navy pt-28"
        >
          <Image
            src={post.image}
            alt=""
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />

          <div className="relative mx-auto max-w-[800px] px-6 pb-16 pt-8 lg:px-10 lg:pb-20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-gold"
            >
              ← Back to blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy uppercase">
                {post.category}
              </span>
              <time className="text-sm text-white/60" dateTime={post.date}>
                {post.date}
              </time>
              <span className="text-sm text-white/40">·</span>
              <span className="text-sm text-white/60">{post.readTime}</span>
            </div>

            <h1 className="mt-6 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-white">
              {post.title}
            </h1>
            <p className="body-text-light mt-5 text-[1.0625rem]">{post.excerpt}</p>
            <p className="mt-6 text-sm font-medium text-gold">{post.author}</p>
          </div>
        </header>

        <div data-header-theme="light" className="bg-white">
          <div className="mx-auto max-w-[800px] px-6 py-16 lg:px-10 lg:py-20">
            <div className="space-y-6">
              {post.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="body-text text-[1.0625rem] leading-[1.85]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-14 rounded-xl border border-navy/8 bg-cream p-8 text-center">
              <h2 className="text-xl font-bold text-navy">
                Ready to start your project?
              </h2>
              <p className="body-text mt-3">
                Speak with our team about how Otinaki can bring precision and
                excellence to your next venture.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-navy/90"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section data-header-theme="light" className="bg-cream">
          <div className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20">
            <span className="section-label">Continue Reading</span>
            <h2 className="section-title mt-3 mb-10">Related articles</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map((relatedPost) => (
                <BlogCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
