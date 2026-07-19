"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#work-experience", label: "Experience" },
    { href: "#competitions",    label: "Competitions" },
    { href: "#projects",        label: "Projects"   },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-3 text-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-3 shadow-[0_8px_30px_rgba(30,48,75,0.08)] backdrop-blur-xl md:px-5">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 font-bold tracking-tight text-slate-900">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#2457a7] text-sm text-white">WT</span>
          <span className="hidden sm:inline">Warot Tharanamai</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 rounded-xl bg-slate-100/80 p-1 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-[#2457a7] hover:shadow-sm">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-1 rounded-lg bg-[#2457a7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#194887]">Let&apos;s talk</a>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-slate-800 transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex flex-col gap-4 border-t border-slate-200 bg-[#fffdf8] px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               onClick={() => setOpen(false)}
               className="text-base font-medium text-slate-600 transition hover:text-[#2457a7]">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl bg-[#2457a7] px-4 py-3 text-center font-semibold text-white">Let&apos;s talk</a>
        </div>
      )}
    </nav>
  );
}
