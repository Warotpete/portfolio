import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="portfolio-shell min-h-screen bg-[#fffdf8] text-slate-900">
      <Navbar />

      <section className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
        {/* Enhanced hero background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          
          <div>
            <p className="text-blue-400 font-semibold tracking-wide mb-4 text-base md:text-lg uppercase">
              Hello, I&apos;m
            </p>

            <h1 className="animate-fade-in-up text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl" style={{ animationDelay: "0.1s" }}>
              Warot Tharanamai
            </h1>

            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="max-w-2xl text-2xl font-medium leading-snug text-gray-100 md:text-3xl">
                4th year Computer Engineering student @ UBC
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/Warotpete"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                  aria-label="GitHub profile"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.808 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.815 1.102.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .323.216.697.825.58C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/warotpete/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-700"
                  aria-label="LinkedIn profile"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452H16.89v-5.568c0-1.328-.025-3.037-1.853-3.037-1.855 0-2.139 1.446-2.139 2.94v5.665H9.256V9H12.7v1.561h.05c.47-.888 1.62-1.823 3.333-1.823 3.563 0 4.22 2.346 4.22 5.396v6.318zM5.337 7.433a1.766 1.766 0 110-3.532 1.766 1.766 0 010 3.532zM7.119 20.452H3.551V9h3.568v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.727C24 .774 23.2 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center animate-fade-in-scale" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Warot Tharanamai"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-[#08101f]">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">Introduction</p>
            <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>
          </div>
          <div className="max-w-4xl text-lg leading-8 text-gray-300 md:text-xl md:leading-9">
            <p>
              I&apos;m a Computer Engineering student at the University of British Columbia passionate about machine learning, autonomous systems, and modern software engineering.
              I enjoy building real-world projects that combine AI, robotics, and full-stack development — from self-driving systems and computer vision models to scalable web applications and cloud infrastructure. I&apos;m also interested in finance, business strategy, and technology-driven innovation, and I explore these interests by competing in case competitions that challenge me to connect technical ideas with real business opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="work-experience" className="py-20 px-6 bg-[#08101f]">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">My journey</p>
            <h2 className="text-3xl font-bold md:text-4xl">Work Experience</h2>
          </div>

          <div className="space-y-5">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Technology Innovation Intern – True Alpha Program</h3>
                  <p className="mt-2 text-gray-400">True Corporation · Internship · Bangkok, Thailand · On-site</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">May 2026 – Present</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                <li>Selected for True&apos;s flagship innovation program to develop technology-driven solutions for real business challenges.</li>
                <li>Worked with cross-functional teams to take an AI and data-focused proof of concept from idea to implementation.</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">APSC 160 Undergraduate Teaching Assistant</h3>
                  <p className="mt-2 text-gray-400">UBC Electrical and Computer Engineering · Vancouver, BC</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Aug. 2025 – Present</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                <li>Supported more than 700 students learning programming fundamentals in C.</li>
                <li>Led weekly labs, explained algorithms and debugging, and provided feedback on assessments.</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Software Engineer Intern, AI/ML</h3>
                  <p className="mt-2 text-gray-400">Skyller Solutions · Bangkok, Thailand</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">June 2025 – Aug. 2025</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                <li>Built a YOLO computer vision model to count steel pipes from warehouse drone footage.</li>
                <li>Prepared datasets and optimized training pipelines to improve detection accuracy.</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Club President | Promotional Director</h3>
                  <p className="mt-2 text-gray-400">UBC Thai Aiyara Student Club · Vancouver, BC</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Apr. 2024 – May. 2026</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                <li>Led the executive team in delivering events that promoted Thai culture at UBC.</li>
                <li>Directed team planning and created promotional content across social platforms.</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Computer Aided Design Specialist</h3>
                  <p className="mt-2 text-gray-400">UBC Rapid · Vancouver, BC</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Sep. 2023 – Sep. 2025</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                <li>Designed custom 3D CAD models and rapid prototypes for internal and external projects.</li>
                <li>Tested designs and resolved 3D-printing issues throughout the production process.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="competitions" className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">Awards &amp; recognition</p>
            <h2 className="text-3xl font-bold md:text-4xl">Competitions</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="group overflow-hidden rounded-3xl border border-amber-300/20 bg-white/5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src="/pantene-case-competition-winners.png"
                  alt="Winning team at the P&G Pantene Samaggi x ATSA Case Competition 2026"
                  fill
                  className="object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold">Pantene Miracles Case Competition</h3>
                  <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">Winner · 2026</span>
                </div>
                <p className="text-gray-300">Developed and presented a winning strategy for the Pantene Miracles business case at the Samaggi x ATSA Case Competition in Bangkok.</p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-amber-300/20 bg-white/5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="relative h-56 overflow-hidden bg-gray-800">
                <Image src="/salus.jpeg" alt="Salus Insurance at Botnoi HackFest 2023" fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-2xl font-semibold">Botnoi HackFest</h3>
                  <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700">Winner · 2026</span>
                </div>
                <p className="mb-5 text-gray-300">Built Salus Insurance and won first place against more than 500 teams, with a Streamlit app deployed on Heroku and integrated with Omne.</p>
                <div className="flex flex-wrap gap-4">
                  <a href="https://github.com/Warotpete/Salus_Frontend" target="_blank" rel="noreferrer" className="font-medium text-blue-400 transition hover:text-blue-300">GitHub →</a>
                  <a href="/Salus.pdf" target="_blank" rel="noreferrer" className="font-medium text-blue-400 transition hover:text-blue-300">View slides →</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">Selected work</p>
            <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Autonomous Driving Car */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gray-800">
                <img
                  src="/racing.png"
                  alt="Autonomous Driving Car Report"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autonomous Racing</h3>
              <p className="text-gray-300 mb-4">
                Real-time self-driving system using ROS2 with LiDAR for navigation. Implemented Gap Follow + Automatic Emergency Braking algorithms.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-900/40 text-purple-200 text-xs rounded border border-purple-500/30">ROS2</span>
                <span className="px-2 py-1 bg-purple-900/40 text-purple-200 text-xs rounded border border-purple-500/30">Python</span>
                <span className="px-2 py-1 bg-purple-900/40 text-purple-200 text-xs rounded border border-purple-500/30">LiDAR</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Warotpete/Autonomous-Racing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  GitHub →
                </a>
                <a
                  href="/cpen391_ProjectReport.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  View Report →
                </a>
                <a
                  href="/autonomous_racing.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  View Slides →
                </a>
                
              </div>
            </article>

            {/* Platformer Game */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <img
                  src="https://img.youtube.com/vi/33I9vTGCc70/hqdefault.jpg"
                  alt="Platformer Game"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Platformer Game</h3>
              <p className="text-gray-300 mb-4">
                A complete platformer game created from scratch with all aspects handled: coding, animation, game mechanics, and level design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-orange-900/40 text-orange-200 text-xs rounded border border-orange-500/30">Game Dev</span>
                <span className="px-2 py-1 bg-orange-900/40 text-orange-200 text-xs rounded border border-orange-500/30">Animation</span>
                <span className="px-2 py-1 bg-orange-900/40 text-orange-200 text-xs rounded border border-orange-500/30">Design</span>
              </div>
              <a
                href="https://youtu.be/33I9vTGCc70?si=isImxwLTYI4FN8Yj"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                Watch Demo →
              </a>
            </article>

            {/* Sport Session Tracker */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gray-800">
                <img
                  src="/sportsession.png"
                  alt="Sport Session Tracker"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sport Session Tracker</h3>
              <p className="text-gray-300 mb-4">
                In a team of 3, developed a full-stack athletic performance analysis web application using Node.js, Express, and Oracle Database. 
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Node.js</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Express</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Oracle</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">SQL</span>
              </div>
              <a
                href="https://github.com/Warotpete/Sport-Sessions-Tracker"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                GitHub →
              </a>
            </article>

            

            {/* UBCNET */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <img
                  src="https://img.youtube.com/vi/Jg0pPHCoGXA/hqdefault.jpg"
                  alt="UBCNET Demo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">UBCNET</h3>
              <p className="text-gray-300 mb-4">
                Java-based classified platform for UBC community with Shop, Housing, and Announcements sections.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Java</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Full-Stack</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Database</span>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href="https://github.com/Warotpete/UBCNet"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  GitHub →
                </a>
                <a
                  href="https://youtu.be/Jg0pPHCoGXA?si=v-KsuVNSSosgLGib"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  Watch Demo →
                </a>
                
              </div>
            </article>
          </div>
        </div>
      </section>

    <section id="skills" className="hidden py-20 px-6 bg-[#08101f]" aria-hidden="true">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">What I work with</p>
            <h2 className="text-3xl font-bold md:text-4xl">Skills &amp; Tech Stack</h2>
            <p className="mt-3 text-gray-400">Languages, frameworks, tools, and platforms I use to bring ideas to life.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">Python</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">C</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">Java</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">JavaScript</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">TypeScript</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">AI/ML</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">TensorFlow</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">Scikit-learn</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">YOLO</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">LiDAR</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-500/30">React</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-500/30">Next.js</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-500/30">Streamlit</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-500/30">ROS2</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Git</span>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Docker</span>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 text-sm rounded-full border border-yellow-500/30">Heroku</span>
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-300 text-sm rounded-full border border-yellow-500/30">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-kicker">Contact</p>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">Feel free to reach out</h2>
          <p className="text-lg text-gray-300 mb-12">
            I'm always open to discussing new projects, opportunities, and ideas. Feel free to reach out!
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="mailto:warot.tharan@gmail.com"
              aria-label="Send email"
              className="w-16 h-16 flex items-center justify-center rounded-xl bg-blue-500 hover:bg-blue-600 transition"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/Warotpete"
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub profile"
              className="w-16 h-16 flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.191 20 14.434 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/warotpete/"
              target="_blank"
              rel="noreferrer"
              aria-label="View LinkedIn profile"
              className="w-16 h-16 flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.553-1.554-2.553-1.554 0-1.791 1.213-1.791 2.462v3.269h-2.669V9.309h2.561v1.156h.036c.357-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.168zM5.337 7.433c-.86 0-1.551-.698-1.551-1.554s.691-1.557 1.551-1.557c.859 0 1.551.699 1.551 1.557s-.692 1.554-1.551 1.554zm1.326 8.905H3.99V9.309h2.674v6.029zM17.7 5.009c0 1.193-.977 2.17-2.17 2.17-1.192 0-2.17-.977-2.17-2.17 0-1.192.977-2.17 2.17-2.17 1.193 0 2.17.978 2.17 2.17z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#08101f] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2026 Warot Tharanamai. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
