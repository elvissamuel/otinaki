"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { services, navServices } from "../lib/data";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40);
      const probe = document.elementFromPoint(window.innerWidth / 2, 72);
      let node: Element | null = probe;
      while (node) {
        const t = node.getAttribute("data-header-theme");
        if (t === "light" || t === "dark") { setTheme(t); return; }
        node = node.parentElement;
      }
      setTheme("dark");
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isLight = theme === "light";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        } ${
          isLight
            ? "border-navy/8 bg-white/95 backdrop-blur-md"
            : scrolled
              ? "border-white/10 bg-navy/95 backdrop-blur-md"
              : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 lg:px-10">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo className="h-8 w-8 text-gold" />
            <span className={`text-lg font-bold tracking-tight transition-colors ${isLight ? "text-navy" : "text-white"}`}>
              Otinaki
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isLight ? "text-navy/75 hover:bg-navy/5 hover:text-navy" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isLight ? "text-navy/75 hover:bg-navy/5 hover:text-navy" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                Services
                <svg className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-72 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-xl shadow-navy/10"
                  >
                    {navServices.map((s, i) => (
                      <Link
                        key={s.slug}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-start gap-3 px-4 py-3 transition-colors hover:bg-cream ${
                          i === services.length ? "border-t border-navy/8" : ""
                        }`}
                      >
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-navy/8 text-navy">
                          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-navy">{s.title}</p>
                          <p className="mt-0.5 text-xs text-navy/55 leading-snug">{s.tagline}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <Link
            href="/contact"
            className="hidden rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold/90 lg:inline-block"
          >
            Start a Project
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`block h-0.5 w-5 ${isLight ? "bg-navy" : "bg-white"}`} />
            <span className="block h-0.5 w-5 bg-gold" />
            <span className={`block h-0.5 w-5 ${isLight ? "bg-navy" : "bg-white"}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-navy"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <Link href="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5">
                <Logo className="h-8 w-8 text-gold" />
                <span className="text-lg font-bold text-white">Otinaki</span>
              </Link>
              <button type="button" aria-label="Close" onClick={() => setMenuOpen(false)} className="text-2xl text-white/70">×</button>
            </div>

            <nav className="flex flex-1 flex-col px-6 py-4">
              {mainLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/10 py-4 text-lg font-semibold text-white hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: mainLinks.length * 0.06 }}>
                <p className="mt-6 mb-2 text-xs font-semibold tracking-wider text-white/40 uppercase">Our Services</p>
              </motion.div>
              {navServices.map((s, i) => (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (mainLinks.length + 1 + i) * 0.06 }}
                >
                  <Link
                    href={s.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 text-base font-medium text-white/80 hover:text-gold ${
                      i === services.length
                        ? "mt-2 border-t border-white/10 pt-5"
                        : "border-b border-white/8"
                    }`}
                  >
                    {s.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-6 pb-8 pt-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-lg bg-gold py-3.5 text-center text-[15px] font-bold text-navy"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
