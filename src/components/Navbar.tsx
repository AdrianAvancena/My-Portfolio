import React, { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled || open ? "shadow-lg" : "shadow-sm"
      }`}
      style={{ background: scrolled || open ? "rgba(9,13,24,0.88)" : "rgba(9,13,24,0.55)" }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8" aria-label="Main navigation">
        <a className="group flex items-center gap-3" href="#home" aria-label="My Portfolio home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/15 text-orange-400">
            <span className="text-lg font-bold text-orange-400">M</span>
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/90">
            My Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-1 flex-nowrap sm:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#projects"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/25 hover:bg-orange-400 hover:shadow-orange-400/30 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 hover:bg-white/5 hover:border-white/30 transition"
          >
            Contact Me
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white/70 hover:text-white hover:bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="overflow-hidden rounded-b-2xl bg-secondary/80 shadow-lg md:hidden">
          <div className="flex flex-col gap-1 border-t border-white/10 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-orange-500 px-3 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-400 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
