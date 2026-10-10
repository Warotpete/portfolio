"use client";
import { useEffect } from "react";

// Drives the page's motion:
// - [data-reveal] elements fade up out of the background when they scroll in.
//   data-reveal="text" sweeps a paragraph in from top to bottom, line by line;
//   data-reveal="image" fades and settles from a slight zoom.
// - Children of a [data-stagger] container reveal one after another.
// - [data-parallax="0.08"] elements drift at a slightly different speed.
// Nothing is hidden until this runs, and it is skipped for reduced-motion users.
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    let parallax: HTMLElement[] = [];

    // Pick up every element that should animate. Runs again whenever the page
    // content changes, so newly rendered sections never get stuck hidden.
    const scan = () => {
      // Stagger: give each revealing child of a [data-stagger] group its own delay
      document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
        const step = Number(group.dataset.stagger) || 140;
        group.querySelectorAll<HTMLElement>(":scope > [data-reveal]").forEach((el, i) => {
          el.style.setProperty("--reveal-delay", `${i * step}ms`);
        });
      });
      document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal-watched])").forEach((el) => {
        el.dataset.revealWatched = "";
        observer.observe(el);
      });
      parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    };
    scan();

    let pending = 0;
    const mutations = new MutationObserver(() => {
      if (!pending) pending = requestAnimationFrame(() => { pending = 0; scan(); onScroll(); });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    // Parallax, batched into one animation frame per scroll
    let frame = 0;
    const updateParallax = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      for (const el of parallax) {
        const rect = el.getBoundingClientRect();
        const offset = rect.top + rect.height / 2 - mid;
        el.style.transform = `translate3d(0, ${(-offset * Number(el.dataset.parallax)).toFixed(1)}px, 0)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(updateParallax);
    };
    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      cancelAnimationFrame(pending);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
