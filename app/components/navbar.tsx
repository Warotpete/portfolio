"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#work-experience", label: "Experience" },
    { href: "#projects",        label: "Projects"   },
    { href: "#skills",          label: "Skills"     },
    { href: "#contact",         label: "Contact"    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0f19]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-xl font-bold text-blue-400">
          Warot Tharanamai
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               className="text-gray-300 hover:text-blue-400 transition text-sm">
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0f19] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               onClick={() => setOpen(false)}
               className="text-gray-300 hover:text-blue-400 transition text-base">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}