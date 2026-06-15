import { navLinks } from "../lib/data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer data-header-theme="dark" className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-[1200px] px-6 py-14 lg:px-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8 text-gold" />
              <span className="text-xl font-bold text-white">Otinaki</span>
            </div>
            <p className="body-text-light mt-3 max-w-xs text-[15px]">
              Shaping industries. Empowering communities. Building what comes
              next.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/75 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Otinaki. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "LinkedIn"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-white/50 transition-colors hover:text-gold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
