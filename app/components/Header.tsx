"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../lib/data";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 40);

      const probe = document.elementFromPoint(window.innerWidth / 2, 72);
      let node: Element | null = probe;
      while (node) {
        const sectionTheme = node.getAttribute("data-header-theme");
        if (sectionTheme === "light" || sectionTheme === "dark") {
          setTheme(sectionTheme);
          return;
        }
        node = node.parentElement;
      }
      setTheme("dark");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const isLight = theme === "light";

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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
          <a href="#home" className="group flex items-center gap-2.5">
            <Logo className="h-8 w-8 text-gold" />
            <span
              className={`text-lg font-bold tracking-tight transition-colors ${
                isLight ? "text-navy" : "text-white"
              }`}
            >
              Otinaki
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isLight
                    ? "text-navy/75 hover:bg-navy/5 hover:text-navy"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden rounded-lg bg-gold px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold/90 lg:inline-block"
          >
            Start a Project
          </a>

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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <Logo className="h-8 w-8 text-gold" />
                <span className="text-lg font-bold text-white">Otinaki</span>
              </a>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-white/70"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-1 flex-col px-6 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="border-b border-white/10 py-4 text-lg font-semibold text-white hover:text-gold"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
