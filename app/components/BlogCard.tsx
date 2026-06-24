import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../lib/blog";

type BlogCardProps = {
  post: BlogPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-xl border border-navy/8 bg-white transition-all hover:border-gold/40 hover:shadow-md hover:shadow-navy/5 ${
        featured ? "lg:flex-row lg:items-stretch" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "aspect-[16/10] lg:aspect-auto lg:w-1/2 lg:min-h-[280px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={featured ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 640px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy uppercase">
          {post.category}
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:justify-center lg:p-8" : ""}`}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-navy/50">
          <time dateTime={post.date}>{post.date}</time>
          <span className="text-gold">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3
          className={`mt-3 font-bold text-navy transition-colors group-hover:text-gold ${
            featured ? "text-xl lg:text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <p className="body-text mt-3 flex-1 text-sm leading-relaxed">{post.excerpt}</p>
        <span className="mt-5 text-sm font-semibold text-gold">Read article →</span>
      </div>
    </Link>
  );
}
