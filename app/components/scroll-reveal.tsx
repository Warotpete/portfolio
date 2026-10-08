"use client";
import { useEffect } from "react";

// Fades section headings and cards up into place as they scroll into view.
// Only elements that start below the fold are hidden, so nothing flickers on
// load, and the effect is skipped entirely for reduced-motion users.
const TARGETS = [
  ".portfolio-shell .section-heading",
  ".portfolio-shell article",
  ".portfolio-shell #skills .grid > div",
].join(", ");

export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(TARGETS)).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          observer.unobserve(el);

          // Stagger cards that sit side by side in the same grid
          const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
          const delay = (siblings.indexOf(el) % 3) * 90;
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add("is-visible");

          // Hand transitions back to the card's own hover styles once revealed
          window.setTimeout(() => {
            el.classList.remove("reveal", "is-visible");
            el.style.transitionDelay = "";
          }, 700 + delay);
        }
      },
      { threshold: 0.15 }
    );

    for (const el of elements) {
      el.classList.add("reveal");
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
