"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#about",           label: "About" },
  { href: "#work-experience", label: "Experience" },
  { href: "#business",        label: "Business" },
  { href: "#competitions",    label: "Competitions" },
  { href: "#projects",        label: "Projects" },
  { href: "#skills",          label: "Skills" },
  { href: "#contact",         label: "Contact" },
];

const contacts = [
  {
    href: "mailto:warotpete@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" />
        <path d="M3 6l9 7 9-7" />
      </svg>
    ),
  },
  {
    href: "https://github.com/Warotpete",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 007.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/warotpete/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  // Transparent at the top; a solid bar once scrolled. Hides while scrolling
  // down and comes back on any scroll up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 80) setHidden(false);
      else if (y > lastY.current + 4) setHidden(true);
      else if (y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the menu, and the page behind it doesn't scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className={`site-nav fixed inset-x-0 top-0 z-50 transition-transform duration-300 motion-reduce:transition-none ${
          hidden && !open ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "is-scrolled" : ""}`}
        onFocus={() => setHidden(false)}
      >
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 md:px-10">
          <button
            type="button"
            className="nav-burger justify-self-start"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span />
            <span />
          </button>

          <a href="#" aria-label="Warot Tharanamai, back to top" className="justify-self-center">
            <Image src="/logo-white.png" alt="Warot Tharanamai" width={2013} height={297} priority className="logo-light h-4 w-auto sm:h-5 md:h-6" />
            <Image src="/logo-black.png" alt="" aria-hidden="true" width={2013} height={297} priority className="logo-dark h-4 w-auto sm:h-5 md:h-6" />
          </a>

          <div className="flex items-center gap-4 justify-self-end sm:gap-5">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={c.label}
                className="nav-icon"
              >
                {c.icon}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Slide-in menu from the left */}
      <div className={`nav-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <button type="button" className="nav-menu-backdrop" tabIndex={-1} aria-hidden="true" onClick={() => setOpen(false)} />
        <div className="nav-menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="nav-close" onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1}>
            <span />
            <span />
          </button>
          <ul>
            {links.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}>
                <a href={l.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
