import Link from "next/link";
import { Logo } from "./Logo";
import { services, foundation } from "../lib/data";

export function Footer() {
  return (
    <footer data-header-theme="dark" className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Logo className="h-20 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Engineering your unassailable advantage across construction, energy, real estate, agriculture, and mobility.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white/40 uppercase">Company</p>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Foundation", href: `/${foundation.slug}` },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white/40 uppercase">Our Services</p>
            <div className="flex flex-col gap-2.5">
              {services.map((s) => (
                <Link key={s.slug} href={`/${s.slug}`} className="text-sm font-medium text-white/70 hover:text-gold transition-colors">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs font-semibold tracking-wider text-white/40 uppercase">Get in Touch</p>
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/70">hello@otinaki.com</p>
              <p className="text-sm text-white/70">+234 (0) 800 OTINAKI</p>
              <p className="text-sm text-white/70">Victoria Island, Lagos</p>
            </div>
            <Link
              href="/contact"
              className="mt-5 inline-block rounded-lg bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-gold/90"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Otinaki Group. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link key={item} href="#" className="text-sm text-white/40 hover:text-gold transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
