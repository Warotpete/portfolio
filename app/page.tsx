import Image from "next/image";
import Navbar from "./components/navbar";
import ScrollReveal from "./components/scroll-reveal";

/* ---------- Content ---------- */

type Role = { title: string; dates: string; points: React.ReactNode[] };
type Job = { role: string; org: string; place: string; dates: string; points?: React.ReactNode[]; roles?: Role[] };

const EXPERIENCE: Job[] = [
  {
    role: "True Alpha Intern",
    org: "True Corporation",
    place: "Bangkok, Thailand",
    dates: "May 2026 – July 2026",
    points: [
      "Selected for True's flagship innovation internship, working in a startup-style team to find business opportunities and build technology-driven solutions for real challenges in telecom and digital services.",
      "Analyzed the retail customer journey and gathered stakeholder requirements to identify where humanoid robots could improve the in-store experience.",
      "Worked with mentors and cross-functional teams to take a proof of concept from ideation through implementation, define priority use cases, and present recommendations to business and technical stakeholders.",
      <>Received the program&apos;s <strong>Winner Award</strong> for proposing a practical humanoid robot solution for retail customer engagement.</>,
    ],
  },
  {
    role: "APSC 160 Undergraduate Teaching Assistant",
    org: "UBC Electrical and Computer Engineering",
    place: "Vancouver, BC",
    dates: "Aug. 2025 – Present",
    points: [
      "Support more than 700 students in APSC 160, Introduction to Computation in Engineering Design.",
      "Lead weekly lab sessions on C programming, problem-solving, and computational design.",
      "Give presentations and live demonstrations that walk through programming logic, algorithms, and debugging techniques.",
      "Grade programming assignments, quizzes, and exams, with feedback that helps students keep improving.",
    ],
  },
  {
    role: "Software Engineer Intern, AI/ML",
    org: "Skyller Solutions",
    place: "Bangkok, Thailand",
    dates: "June 2025 – Aug. 2025",
    points: [
      "Developed a YOLO computer vision model that detects and counts steel pipes in drone footage of warehouse yards, making warehouse inventory monitoring more efficient.",
      "Prepared and annotated custom datasets, optimized the training pipeline, and fine-tuned hyperparameters to improve detection accuracy.",
    ],
  },
  {
    role: "Co-President · Promotional Director",
    org: "UBC Thai Aiyara Student Club",
    place: "Vancouver, BC",
    dates: "Apr. 2024 – May 2026",
    roles: [
      {
        title: "Co-President",
        dates: "Apr. 2025 – May 2026",
        points: [
          "Led the executive team in planning and running club events that promote Thai culture in the UBC community.",
          "Facilitated regular meetings to align team goals, track progress, and keep departments working together.",
        ],
      },
      {
        title: "Promotional Director",
        dates: "Apr. 2024 – Apr. 2025",
        points: [
          "Designed graphics, posters, and promotional materials for club events and activities.",
          "Created and managed social media content across Instagram, Facebook, and LINE.",
          "Tracked social media performance metrics and used them to shape future content and engagement.",
        ],
      },
    ],
  },
  {
    role: "Computer Aided Design Specialist",
    org: "UBC Rapid",
    place: "Vancouver, BC",
    dates: "Sep. 2023 – Aug. 2025",
    points: [
      "Built precise 3D CAD models in SOLIDWORKS, taking design requests from team members and external stakeholders and delivering custom solutions.",
      "Created rapid prototypes to test and validate design concepts through each design iteration.",
      "Diagnosed and fixed 3D-printing issues to keep production running smoothly.",
    ],
  },
];

const COMPETITIONS = [
  {
    title: "Pantene Miracles Case Competition",
    badge: "Winner · 2026",
    description:
      "Developed and presented a winning strategy for the Pantene Miracles business case at the Samaggi x ATSA Case Competition in Bangkok.",
    image: "/pantene-case-competition-winners.png",
    imageAlt: "Winning team at the P&G Pantene Samaggi x ATSA Case Competition 2026",
    position: "center",
  },
  {
    title: "True Innovation Launchpad 2026",
    badge: "Top 20 · 2026",
    description:
      "Pitched Ripples, a smart bathroom system that detects falls and health risks for older adults, selected as one of the top 20 teams from 203 ideas by more than 945 participants from 37 universities. Hosted by True LAB, NIA, and ThaiHealth.",
    image: "/true-innovation-launchpad-pitch.jpg",
    imageAlt: "Warot pitching Ripples at True Innovation Launchpad 2026",
    position: "35% center",
  },
  {
    title: "Botnoi HackFest",
    badge: "Winner · 2023",
    description:
      "Built Salus Insurance, an insurance cost predictor developed in collaboration with FWD Thailand, and won first place against more than 500 teams. The Streamlit app was deployed on Heroku and integrated with Omne.",
    image: "/botnoi-hackfest-team.jpg",
    imageAlt: "Warot and the Salus Insurance team with their FWD prize at Botnoi HackFest 2023",
    position: "center",
    link: { href: "https://github.com/Warotpete/Salus_Frontend", label: "GitHub" },
  },
];

type Project = {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  video?: { src: string; poster: string };
  // a wide app screenshot, shown inside a browser-window frame
  screen?: { src: string; url: string };
  imageAlt?: string;
  note?: string;
  links?: { href: string; label: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "Autonomous Racing",
    description:
      "Real-time self-driving system using ROS2 with LiDAR for navigation. Implemented Gap Follow + Automatic Emergency Braking algorithms.",
    tags: ["ROS2", "Python", "LiDAR"],
    video: { src: "/autonomous-racing.mp4", poster: "/autonomous-racing-poster.jpg" },
    imageAlt: "The autonomous race car driving around the track",
    links: [
      { href: "https://github.com/Warotpete/Autonomous-Racing", label: "GitHub" },
      { href: "/cpen391_ProjectReport.pdf", label: "View report" },
    ],
  },
  {
    title: "Multi-Agent Institutional Research Insights Tool",
    description:
      "In a team of 5, building a lightweight multi-agent AI platform on AWS that analyzes publications, grants, and patents to help UBC find research collaboration opportunities. Leading weekly client meetings and delivering a pricing estimate and roadmap for adoption.",
    tags: ["Python", "Amazon Bedrock", "MCP", "AWS CDK"],
    note: "UBC Cloud Innovation Centre · 2026 – Present",
  },
  {
    title: "Sport Session Tracker",
    description:
      "In a team of 3, developed a full-stack athletic performance analysis web application using Node.js, Express, and Oracle Database.",
    tags: ["Node.js", "Express", "Oracle", "SQL"],
    screen: { src: "/sportsession.png", url: "sport-sessions-tracker" },
    imageAlt: "Sport Session Tracker interface",
    links: [{ href: "https://github.com/Warotpete/Sport-Sessions-Tracker", label: "GitHub" }],
  },
  {
    title: "UBCNET",
    description: "Java-based classified platform for the UBC community with Shop, Housing, and Announcements sections.",
    tags: ["Java", "Full-Stack", "Database"],
    screen: { src: "/ubcnet-screen.jpg", url: "ubcnet" },
    imageAlt: "UBCNET demo",
    links: [
      { href: "https://github.com/Warotpete/UBCNet", label: "GitHub" },
      { href: "https://youtu.be/Jg0pPHCoGXA?si=v-KsuVNSSosgLGib", label: "Demo" },
    ],
  },
  {
    title: "Platformer Game",
    description:
      "A complete platformer game created from scratch with all aspects handled: coding, animation, game mechanics, and level design.",
    tags: ["Game Dev", "Animation", "Design"],
    image: "https://img.youtube.com/vi/33I9vTGCc70/hqdefault.jpg",
    imageAlt: "Platformer game demo",
    links: [{ href: "https://youtu.be/33I9vTGCc70?si=isImxwLTYI4FN8Yj", label: "Demo" }],
  },
];

const SKILLS = [
  { title: "Business & Analytics", items: ["Market research", "Consumer insights", "Data analysis", "Strategic problem-solving"] },
  { title: "Technical", items: ["Python", "SQL", "Oracle Database", "Excel", "PowerPoint", "Scikit-learn", "Git"] },
  {
    title: "Engineering",
    items: ["C", "Java", "JavaScript", "Node.js", "Express", "AWS", "AWS CDK", "Amazon Bedrock", "MCP", "ROS2", "YOLO", "Computer Vision"],
  },
  { title: "Languages", items: ["Thai (Native)", "English (Professional)"] },
];

const SHOP_TASKS = [
  "Product sourcing",
  "Inventory management",
  "Pricing",
  "Customer communication",
  "Order fulfillment",
  "Marketplace optimization",
  "Sales analytics",
  "Digital marketing",
];

/* ---------- Building blocks ---------- */

// Two-line title: a thin uppercase line, then an italic serif line
function Title({ top, bottom, as: Tag = "h2" }: { top: string; bottom: string; as?: "h1" | "h2" }) {
  return (
    <Tag className="title" data-stagger="180">
      <span className="title-thin" data-reveal>{top}</span>
      <span className="title-serif" data-reveal>{bottom}</span>
    </Tag>
  );
}

// "—— Discover more" style link
function LineLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http") || href.endsWith(".pdf");
  return (
    <a href={href} className="line-link" target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <main className="site">
      <Navbar />
      <ScrollReveal />

      {/* Hero */}
      <section className="hero tone-dark">
        <div className="hero-media" aria-hidden="true">
          <Image src="/hero-network-hd.jpg" alt="" fill sizes="100vw" priority className="hero-media-img" />
        </div>
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Title as="h1" top="Warot" bottom="Tharanamai" />
            <p className="lede" data-reveal="text" style={{ ["--reveal-delay" as string]: "400ms" }}>
              4th year Computer Engineering student at the University of British Columbia.
            </p>
            <div data-reveal style={{ ["--reveal-delay" as string]: "600ms" }}>
              <LineLink href="/resume.pdf">Resume</LineLink>
            </div>
          </div>
          <div className="hero-portrait" data-reveal="image" style={{ ["--reveal-delay" as string]: "300ms" }}>
            <Image src="/profile.jpeg" alt="Warot Tharanamai" fill sizes="(min-width: 768px) 30vw, 70vw" className="object-cover scale-[1.06]" priority />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="block tone-light">
        <div className="shell split">
          <Title top="About" bottom="Me" />
          <div className="prose" data-stagger="160">
            <p data-reveal="text">
              Hi, I&apos;m Warot, a Computer Engineering student at the University of British Columbia. My experience spans from developing a computer vision system for industrial inventory monitoring to designing an award-winning humanoid robotics concept at True Corporation.
            </p>
            <p data-reveal="text">
              Beyond engineering, I enjoy exploring how ideas become valuable products and businesses. I won a P&amp;G Thailand case competition by developing a consumer-led growth strategy, and I previously served as President of the UBC Thai Aiyara Student Club.
            </p>
            <p data-reveal="text">
              Outside of work and university, I run a small online LEGO shop, managing its inventory, pricing, marketing and customer relationships. I have also been investing in stocks since 2022, which has strengthened my interest in researching companies, understanding business models and examining how technology can influence long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="work-experience" className="block tone-dark">
        <div className="shell split">
          <Title top="My" bottom="Journey" />
          <ol className="jobs">
            {EXPERIENCE.map((job) => (
              <li key={job.role} className="job" tabIndex={0} data-reveal>
                <div className="job-head">
                  <span className="job-dates">{job.dates}</span>
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-org">
                      {job.org} <span>· {job.place}</span>
                    </p>
                  </div>
                  <span className="job-toggle" aria-hidden="true" />
                </div>
                <div className="job-details">
                  {job.points && (
                    <ul>
                      {job.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  )}
                  {job.roles?.map((r) => (
                    <div key={r.title} className="job-subrole">
                      <p className="job-subrole-head">
                        <span>{r.title}</span>
                        <span>{r.dates}</span>
                      </p>
                      <ul>
                        {r.points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Business */}
      <section id="business" className="block tone-light">
        <div className="shell split">
          <Title top="Side" bottom="Business" />
          <div className="business">
            <div data-stagger="140">
              <p className="eyebrow" data-reveal>Founder &amp; Owner · Shopee Thailand · Apr. 2023 – Present</p>
              <h3 className="business-name" data-reveal>Online LEGO Store</h3>
              <p className="body-text" data-reveal="text">
                I founded and run an online LEGO retail shop on Shopee Thailand, handling everything from sourcing and pricing to customer service and delivery. Running it end to end has given me hands-on experience in e-commerce operations, digital marketing, sales analytics, and small business management.
              </p>
              <div data-reveal>
                <LineLink href="https://shopee.co.th/warotpete">Visit my Shopee store</LineLink>
              </div>
            </div>
            <ul className="business-tasks" data-stagger="70">
              {SHOP_TASKS.map((t) => (
                <li key={t} data-reveal>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Competitions: large image and text side by side, alternating sides */}
      <section id="competitions" className="block tone-dark">
        <div className="shell">
          <Title top="Awards &" bottom="Recognition" />
          <div className="features">
            {COMPETITIONS.map((c, i) => (
              <article key={c.title} className={`feature ${i % 2 ? "is-flipped" : ""}`}>
                <div className="feature-media" data-reveal="image">
                  <div className="feature-media-inner" data-parallax="0.05">
                    <Image src={c.image} alt={c.imageAlt} fill sizes="(min-width: 900px) 55vw, 100vw" className="object-cover" style={{ objectPosition: c.position }} />
                  </div>
                </div>
                <div className="feature-copy" data-stagger="140">
                  <p className="feature-index" data-reveal>{String(i + 1).padStart(2, "0")} / {String(COMPETITIONS.length).padStart(2, "0")}</p>
                  <h3 className="feature-title" data-reveal>{c.title}</h3>
                  <p className="card-badge" data-reveal>{c.badge}</p>
                  <p className="body-text feature-text" data-reveal="text">{c.description}</p>
                  {c.link && (
                    <div data-reveal>
                      <LineLink href={c.link.href}>{c.link.label}</LineLink>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects: heading left, row of cards right */}
      <section id="projects" className="block tone-light">
        <div className="shell split">
          <Title top="Selected" bottom="Projects" />
          <div className="cards" data-stagger="150">
            {PROJECTS.map((p) => (
              <article key={p.title} className="card" data-reveal>
                <div className="card-media">
                  {p.video ? (
                    <video
                      className="card-video"
                      src={p.video.src}
                      poster={p.video.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={p.imageAlt}
                    />
                  ) : p.screen ? (
                    <div className="screen">
                      <div className="screen-window">
                        <div className="screen-bar" aria-hidden="true">
                          <span /><span /><span />
                          <em>{p.screen.url}</em>
                        </div>
                        <div className="screen-shot">
                          <Image src={p.screen.src} alt={p.imageAlt ?? p.title} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw" className="object-cover object-left-top" />
                        </div>
                      </div>
                    </div>
                  ) : p.image ? (
                    <Image src={p.image} alt={p.imageAlt ?? p.title} fill sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw" className="object-cover" />
                  ) : (
                    <div className="piece-placeholder">
                      <span>UBC Cloud</span>
                      <em>Innovation Centre</em>
                    </div>
                  )}
                </div>
                <p className="card-badge">{p.note ?? p.tags.join(" · ")}</p>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-text">{p.description}</p>
                {p.note && <p className="card-tags">{p.tags.join(" · ")}</p>}
                {p.links && (
                  <div className="piece-links">
                    {p.links.map((l) => (
                      <LineLink key={l.label} href={l.href}>{l.label}</LineLink>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="block tone-paper">
        <div className="shell split">
          <Title top="What I" bottom="Work With" />
          <div className="skills" data-stagger="120">
            {SKILLS.map((group) => (
              <div key={group.title} data-reveal>
                <h3 className="skills-title">{group.title}</h3>
                <ul>
                  {group.items.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="block tone-light contact">
        <div className="shell contact-row">
          <Title top="Get in" bottom="Touch" />
          <p className="body-text" data-reveal="text">
            I&apos;m always open to discussing new projects, opportunities, and ideas.
          </p>
          <div data-reveal>
            <a href="mailto:warotpete@gmail.com" className="solid-button">Email me</a>
          </div>
        </div>
      </section>

      <footer className="footer tone-dark">
        <div className="shell footer-row">
          <Image src="/logo-white.png" alt="Warot Tharanamai" width={2013} height={297} className="h-5 w-auto" />
          <div className="footer-links">
            <a href="mailto:warotpete@gmail.com">warotpete@gmail.com</a>
            <a href="https://github.com/Warotpete" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/warotpete/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p>© 2026 Warot Tharanamai</p>
        </div>
      </footer>
    </main>
  );
}
