import Image from "next/image";
import Navbar from "./components/navbar";
import ScrollReveal from "./components/scroll-reveal";
import CompetitionsScroll from "./components/competitions-scroll";

export default function Home() {
  return (
    <main className="portfolio-shell min-h-screen bg-[#f8f8f8] text-slate-900">
      <Navbar />
      <ScrollReveal />

      <section className="hero relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32">
        {/* Network image backdrop with a dark overlay so the text stays readable */}
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Image
            src="/hero-network-hd.jpg"
            alt=""
            fill
            sizes="100vw"
            className="hero-image object-cover object-bottom"
            priority
          />
          <div className="hero-overlay absolute inset-0"></div>
        </div>

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_0.7fr]">
          
          <div>
            <p className="text-blue-400 font-semibold tracking-wide mb-4 text-base md:text-lg uppercase">
              Hello, I&apos;m
            </p>

            <h1 className="hero-title animate-fade-in-up font-bold tracking-tight" style={{ animationDelay: "0.1s" }}>
              Warot Tharanamai
            </h1>

            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="max-w-2xl text-2xl font-medium leading-snug text-gray-100 md:text-3xl">
                4th year Computer Engineering student @ UBC
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow link-arrow-lg"
                >
                  Resume ↗
                </a>
                <a
                  href="https://github.com/Warotpete"
                  target="_blank"
                  rel="noreferrer"
                  className="hero-icon inline-flex items-center justify-center p-3"
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
                  className="hero-icon inline-flex items-center justify-center p-3"
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
            <div className="photo-frame relative">
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden shadow-2xl">
                <Image
                  src="/profile.jpeg"
                  alt="Warot Tharanamai"
                  fill
                  sizes="(min-width: 768px) 320px, 256px"
                  className="object-cover scale-[1.06]"
                  priority
                />
              </div>
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
          <div className="max-w-3xl space-y-5 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
            <p>
              Hi, I&apos;m Warot, a Computer Engineering student at the University of British Columbia. My experience spans from developing a computer vision system for industrial inventory monitoring to designing an award-winning humanoid robotics concept at True Corporation.
            </p>
            <p>
              Beyond engineering, I enjoy exploring how ideas become valuable products and businesses. I won a P&amp;G Thailand case competition by developing a consumer-led growth strategy, and I previously served as President of the UBC Thai Aiyara Student Club.
            </p>
            <p>
              Outside of work and university, I run a small online LEGO shop, managing its inventory, pricing, marketing and customer relationships. I have also been investing in stocks since 2022, which has strengthened my interest in researching companies, understanding business models and examining how technology can influence long-term growth.
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

          <div className="timeline">
            <article tabIndex={0} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">True Alpha Intern</h3>
                  <p className="mt-2 text-gray-400"><span className="company">True Corporation</span> · Bangkok, Thailand</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">May 2026 – July 2026</p>
                </div>
              </div>
              <div className="details">
                <ul>
                  <li>Selected for True&apos;s flagship innovation internship, working in a startup-style team to find business opportunities and build technology-driven solutions for real challenges in telecom and digital services.</li>
                  <li>Analyzed the retail customer journey and gathered stakeholder requirements to identify where humanoid robots could improve the in-store experience.</li>
                  <li>Worked with mentors and cross-functional teams to take a proof of concept from ideation through implementation, define priority use cases, and present recommendations to business and technical stakeholders.</li>
                  <li>Received the program&apos;s <strong>Winner Award</strong> for proposing a practical humanoid robot solution for retail customer engagement.</li>
                </ul>
              </div>
            </article>

            <article tabIndex={0} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">APSC 160 Undergraduate Teaching Assistant</h3>
                  <p className="mt-2 text-gray-400"><span className="company">UBC Electrical and Computer Engineering</span> · Vancouver, BC</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Aug. 2025 – Present</p>
                </div>
              </div>
              <div className="details">
                <ul>
                  <li>Support more than 700 students in APSC 160, Introduction to Computation in Engineering Design.</li>
                  <li>Lead weekly lab sessions on C programming, problem-solving, and computational design.</li>
                  <li>Give presentations and live demonstrations that walk through programming logic, algorithms, and debugging techniques.</li>
                  <li>Grade programming assignments, quizzes, and exams, with feedback that helps students keep improving.</li>
                </ul>
              </div>
            </article>

            <article tabIndex={0} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Software Engineer Intern, AI/ML</h3>
                  <p className="mt-2 text-gray-400"><span className="company">Skyller Solutions</span> · Bangkok, Thailand</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">June 2025 – Aug. 2025</p>
                </div>
              </div>
              <div className="details">
                <ul>
                  <li>Developed a YOLO computer vision model that detects and counts steel pipes in drone footage of warehouse yards, making warehouse inventory monitoring more efficient.</li>
                  <li>Prepared and annotated custom datasets, optimized the training pipeline, and fine-tuned hyperparameters to improve detection accuracy.</li>
                </ul>
              </div>
            </article>

            <article tabIndex={0} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Co-President · Promotional Director</h3>
                  <p className="mt-2 text-gray-400"><span className="company">UBC Thai Aiyara Student Club</span> · Vancouver, BC</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Apr. 2024 – May 2026</p>
                </div>
              </div>
              <div className="details">
                <div className="role">
                  <div className="role-header">
                    <h4>Co-President</h4>
                    <span>Apr. 2025 – May 2026</span>
                  </div>
                  <ul>
                    <li>Led the executive team in planning and running club events that promote Thai culture in the UBC community.</li>
                    <li>Facilitated regular meetings to align team goals, track progress, and keep departments working together.</li>
                  </ul>
                </div>
                <div className="role">
                  <div className="role-header">
                    <h4>Promotional Director</h4>
                    <span>Apr. 2024 – Apr. 2025</span>
                  </div>
                  <ul>
                    <li>Designed graphics, posters, and promotional materials for club events and activities.</li>
                    <li>Created and managed social media content across Instagram, Facebook, and LINE.</li>
                    <li>Tracked social media performance metrics and used them to shape future content and engagement.</li>
                  </ul>
                </div>
              </div>
            </article>

            <article tabIndex={0} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Computer Aided Design Specialist</h3>
                  <p className="mt-2 text-gray-400"><span className="company">UBC Rapid</span> · Vancouver, BC</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Sep. 2023 – Aug. 2025</p>
                </div>
              </div>
              <div className="details">
                <ul>
                  <li>Built precise 3D CAD models in SOLIDWORKS, taking design requests from team members and external stakeholders and delivering custom solutions.</li>
                  <li>Created rapid prototypes to test and validate design concepts through each design iteration.</li>
                  <li>Diagnosed and fixed 3D-printing issues to keep production running smoothly.</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="business" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">Entrepreneurship</p>
            <h2 className="text-3xl font-bold md:text-4xl">Side Business</h2>
          </div>

          <article className="business-card grid gap-8 rounded-3xl border p-8 md:grid-cols-[1.35fr_1fr] md:p-10">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-semibold">Online LEGO Store</h3>
                <span className="business-date">Apr. 2023 – Present</span>
              </div>
              <p className="mt-2 text-gray-400"><span className="company">Founder &amp; Owner</span> · Shopee Thailand · Bangkok</p>
              <p className="mt-5 leading-7 text-gray-300">
                I founded and run an online LEGO retail shop on Shopee Thailand, handling everything from sourcing and pricing to customer service and delivery. Running it end to end has given me hands-on experience in e-commerce operations, digital marketing, sales analytics, and small business management.
              </p>
              <a
                href="https://shopee.co.th/warotpete"
                target="_blank"
                rel="noreferrer"
                className="link-arrow link-shopee mt-7"
              >
                Visit my Shopee store ↗
              </a>
            </div>

            <div>
              <p className="business-label">What I handle</p>
              <div className="flex flex-wrap gap-2">
                <span className="business-chip">Product sourcing</span>
                <span className="business-chip">Inventory management</span>
                <span className="business-chip">Pricing</span>
                <span className="business-chip">Customer communication</span>
                <span className="business-chip">Order fulfillment</span>
                <span className="business-chip">Marketplace optimization</span>
                <span className="business-chip">Sales analytics</span>
                <span className="business-chip">Digital marketing</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CompetitionsScroll />

      <section id="projects" className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">Selected work</p>
            <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Multi-Agent Research Insights Tool */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#111111] to-[#3d3d3d] flex items-center justify-center">
                <p className="px-6 text-center text-2xl font-bold text-white">UBC Cloud Innovation Centre</p>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Agent Institutional Research Insights Tool</h3>
              <p className="text-gray-300 mb-4">
                In a team of 5, building a lightweight multi-agent AI platform on AWS that analyzes publications, grants, and patents to help UBC find research collaboration opportunities. Leading weekly client meetings and delivering a pricing estimate and roadmap for adoption.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Python</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">Amazon Bedrock</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">MCP</span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded border border-blue-500/30">AWS CDK</span>
              </div>
              <p className="text-sm text-gray-400">2026 – Present · In progress</p>
            </article>

            {/* Autonomous Driving Car */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gray-800">
                <Image
                  src="/racing.png"
                  alt="Autonomous Driving Car Report"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
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
                  className="link-arrow"
                >
                  GitHub ↗
                </a>
                <a
                  href="/cpen391_ProjectReport.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow"
                >
                  View Report ↗
                </a>
              </div>
            </article>

            {/* Platformer Game */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <Image
                  src="https://img.youtube.com/vi/33I9vTGCc70/hqdefault.jpg"
                  alt="Platformer Game"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
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
                className="link-arrow"
              >
                Demo ↗
              </a>
            </article>

            {/* Sport Session Tracker */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gray-800">
                <Image
                  src="/sportsession.png"
                  alt="Sport Session Tracker"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
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
                className="link-arrow"
              >
                GitHub ↗
              </a>
            </article>

            

            {/* UBCNET */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <Image
                  src="https://img.youtube.com/vi/Jg0pPHCoGXA/hqdefault.jpg"
                  alt="UBCNET Demo"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
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
                  className="link-arrow"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://youtu.be/Jg0pPHCoGXA?si=v-KsuVNSSosgLGib"
                  target="_blank"
                  rel="noreferrer"
                  className="link-arrow"
                >
                  Demo ↗
                </a>
                
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-[#08101f]">
        <div className="max-w-6xl mx-auto">
          <div className="section-heading mb-10">
            <p className="section-kicker">What I work with</p>
            <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Business &amp; Analytics</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">Market research</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">Consumer insights</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">Data analysis</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-500/30">Strategic problem-solving</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Technical</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">Python</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">SQL</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">Oracle Database</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">Excel</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">PowerPoint</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">Scikit-learn</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-500/30">Git</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Engineering</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 text-sm rounded-full border">C</span>
                <span className="px-3 py-1 text-sm rounded-full border">Java</span>
                <span className="px-3 py-1 text-sm rounded-full border">JavaScript</span>
                <span className="px-3 py-1 text-sm rounded-full border">Node.js</span>
                <span className="px-3 py-1 text-sm rounded-full border">Express</span>
                <span className="px-3 py-1 text-sm rounded-full border">AWS</span>
                <span className="px-3 py-1 text-sm rounded-full border">AWS CDK</span>
                <span className="px-3 py-1 text-sm rounded-full border">Amazon Bedrock</span>
                <span className="px-3 py-1 text-sm rounded-full border">MCP</span>
                <span className="px-3 py-1 text-sm rounded-full border">ROS2</span>
                <span className="px-3 py-1 text-sm rounded-full border">YOLO</span>
                <span className="px-3 py-1 text-sm rounded-full border">Computer Vision</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-500/30">Thai (Native)</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-300 text-sm rounded-full border border-green-500/30">English (Professional)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="section-kicker">Contact</p>
          <h2 className="mb-5 text-3xl font-bold md:text-4xl">Feel free to reach out</h2>
          <p className="text-lg text-gray-300 mb-6">
            I&apos;m always open to discussing new projects, opportunities, and ideas.
          </p>
          <a
            href="mailto:warotpete@gmail.com"
            className="mb-10 inline-block text-xl font-semibold text-blue-400 underline decoration-[#ee0000]/40 underline-offset-4 transition hover:text-blue-300"
          >
            warotpete@gmail.com
          </a>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="mailto:warotpete@gmail.com"
              aria-label="Send email"
              className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#111111] hover:bg-[#ee0000] transition"
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
              className="w-16 h-16 flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-[#ee0000] hover:text-[#ee0000]"
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
              className="w-16 h-16 flex items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-[#ee0000] hover:text-[#ee0000]"
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
