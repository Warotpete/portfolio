"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// Horizontal row of cards with prev/next arrows. The row also scrolls
// by swipe or trackpad, and snaps so a card always lines up with the left edge.
export default function Carousel({ children, label }: { children: React.ReactNode; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // Move by one card (card width plus the gap between cards)
  const move = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label={label}>
      <button type="button" className="carousel-arrow carousel-prev" onClick={() => move(-1)} disabled={atStart} aria-label="Previous projects">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6l-6 6 6 6" /></svg>
      </button>
      <div ref={track} className="carousel-track" data-stagger="120" data-reveal-group>
        {children}
      </div>
      <button type="button" className="carousel-arrow carousel-next" onClick={() => move(1)} disabled={atEnd} aria-label="Next projects">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6" /></svg>
      </button>
    </div>
  );
}
