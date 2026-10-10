"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Competition = {
  title: string;
  badge: string;
  description: React.ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  link?: { href: string; label: string };
};

const COMPETITIONS: Competition[] = [
  {
    title: "Pantene Miracles Case Competition",
    badge: "Winner · 2026",
    description:
      "Developed and presented a winning strategy for the Pantene Miracles business case at the Samaggi x ATSA Case Competition in Bangkok.",
    image: "/pantene-case-competition-winners.png",
    imageAlt: "Winning team at the P&G Pantene Samaggi x ATSA Case Competition 2026",
  },
  {
    title: "True Innovation Launchpad 2026",
    badge: "Top 20 · 2026",
    description: (
      <>
        Pitched Ripples, a smart bathroom system that detects falls and health risks for older adults, and was
        selected as one of the top 20 teams from 203 ideas by more than 945 participants from 37 universities.
        Hosted by True LAB, NIA, and ThaiHealth under the theme &ldquo;Healthy Longevity Tech for Super-Aged
        Society.&rdquo;
      </>
    ),
    image: "/true-innovation-launchpad-pitch.jpg",
    imageAlt: "Warot pitching Ripples at True Innovation Launchpad 2026",
    imagePosition: "30% center",
  },
  {
    title: "Botnoi HackFest",
    badge: "Winner · 2023",
    description:
      "Built Salus Insurance, an insurance cost predictor developed in collaboration with FWD Thailand, and won first place against more than 500 teams. The Streamlit app was deployed on Heroku and integrated with Omne.",
    image: "/botnoi-hackfest-team.jpg",
    imageAlt: "Warot and the Salus Insurance team with their FWD prize at Botnoi HackFest 2023",
    link: { href: "https://github.com/Warotpete/Salus_Frontend", label: "GitHub ↗" },
  },
];

// How much page scroll each competition gets while the section is pinned
const STEP_VH = 90;

function Heading() {
  return (
    <div className="section-heading comp-heading mb-10">
      <p className="section-kicker">Awards &amp; recognition</p>
      <h2 className="text-3xl font-bold md:text-4xl">Competitions</h2>
    </div>
  );
}

function Details({ item }: { item: Competition }) {
  return (
    <>
      <h3 className="text-2xl font-semibold leading-tight md:text-3xl">{item.title}</h3>
      <span className="comp-badge mt-4">{item.badge}</span>
      <p className="mt-5 text-lg leading-8 text-gray-300">{item.description}</p>
      {item.link && (
        <a href={item.link.href} target="_blank" rel="noreferrer" className="link-arrow mt-6">
          {item.link.label}
        </a>
      )}
    </>
  );
}

export default function CompetitionsScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // While the section is pinned, map scroll progress through it to a competition
  useEffect(() => {
    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / travel, 0), 0.9999);
      setActive(Math.floor(progress * COMPETITIONS.length));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Clicking a step scrolls to the middle of that competition's stretch
  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const step = (track.offsetHeight - window.innerHeight) / COMPETITIONS.length;
    const top = track.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + step * (index + 0.5), behavior: "smooth" });
  };

  return (
    <section id="competitions" className="px-6">
      {/* Desktop: pinned panel, scrolling swaps the competition */}
      <div
        ref={trackRef}
        className="comp-track hidden md:block"
        style={{ height: `calc(${COMPETITIONS.length * STEP_VH}vh + 100vh)` }}
      >
        <div className="sticky top-0 flex h-screen items-center pt-20">
          <div className="mx-auto w-full max-w-6xl">
            <Heading />

            <div className="grid grid-cols-[1.1fr_0.9fr] items-center gap-14">
              <div>
                <div className="comp-stack">
                  {COMPETITIONS.map((item, i) => (
                    <div
                      key={item.title}
                      className={`comp-details ${i === active ? "is-active" : i < active ? "is-before" : ""}`}
                      aria-hidden={i !== active}
                    >
                      <Details item={item} />
                    </div>
                  ))}
                </div>

                <div className="comp-steps mt-10" role="tablist" aria-label="Competitions">
                  {COMPETITIONS.map((item, i) => (
                    <button
                      key={item.title}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      aria-label={item.title}
                      className={i === active ? "is-active" : ""}
                      onClick={() => goTo(i)}
                    />
                  ))}
                  <span className="comp-count">
                    {String(active + 1).padStart(2, "0")} / {String(COMPETITIONS.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="comp-frame">
                {COMPETITIONS.map((item, i) => (
                  <div
                    key={item.image}
                    className={`comp-image ${i === active ? "is-active" : ""}`}
                    aria-hidden={i !== active}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: item.imagePosition ?? "center" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phones: a plain stacked list, no pinning */}
      <div className="mx-auto max-w-6xl py-16 md:hidden">
        <Heading />
        <div className="space-y-8">
          {COMPETITIONS.map((item) => (
            <article key={item.title} className="overflow-hidden border">
              <div className="relative h-56">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: item.imagePosition ?? "center" }}
                />
              </div>
              <div className="p-6">
                <Details item={item} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
