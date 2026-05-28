import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <Navbar />

      <section className="min-h-screen flex items-center px-6 py-20 mt-16 relative">
        {/* Enhanced hero background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-blue-400 font-semibold tracking-wide mb-4 text-base md:text-lg uppercase">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Warot Tharanamai
            </h1>

            <div className="mt-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-3xl md:text-4xl font-semibold text-gray-100 leading-tight">
                4th year Computer Engineering student @ UBC
              </p>
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
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>
          <div className="max-w-3xl mx-auto text-gray-300 text-xl md:text-2xl leading-relaxed">
            <p>
              I'm a Computer Engineering student at the University of British Columbia passionate about machine learning, autonomous systems, and modern software engineering.
              I enjoy building real-world projects that combine AI, robotics, and full-stack development — from self-driving systems and computer vision models to scalable web applications and cloud infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section id="work-experience" className="py-20 px-6 bg-[#08101f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-10">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">Incoming Intern</h3>
                  <p className="mt-2 text-gray-400">True Corporation · Bangkok, Thailand</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">May 2026 – Present</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300">
                <li>Accepted internship position starting May 2026.</li>
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
                <li>Worked as part of a teaching team supporting over 700 students in the Introduction to Programming in C course.</li>
                <li>Conducted weekly lab sessions and delivered presentations and demonstrations to explain programming logic, algorithms, debugging techniques, and computational design applications.</li>
                <li>Graded programming assignments, quizzes, and exams with feedback to support continuous learning.</li>
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
                <li>Developed a computer vision model using YOLO architecture to automatically detect and count steel pipes from drone footage of warehouse yards, enabling more efficient inventory monitoring.</li>
                <li>Prepared and annotated custom datasets, optimized model training pipelines, and fine-tuned hyperparameters for improved detection accuracy.</li>
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
                <li>Led executive team in planning and executing club events that promote Thai culture within the UBC community.</li>
                <li>Facilitated regular meetings to align team goals, monitor progress, and foster collaboration among departments.</li>
                <li>Designed graphics, posters, and promotional materials; managed social media content across Instagram, Facebook, and Line.</li>
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
                <li>Developed precise 3D CAD models for various projects; collaborated with team members and external stakeholders to deliver customized design solutions.</li>
                <li>Created rapid prototypes to test and validate design concepts, contributing to an iterative design process.</li>
                <li>Diagnosed and resolved technical issues related to 3D printing processes, ensuring smooth production workflows.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      

      <section id="projects" className="py-20 px-6 bg-[#0b0f19]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Autonomous Driving Car */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gray-800">
                <img
                  src="/racing.png"
                  alt="Autonomous Driving Car Report"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autonomous Driving Car</h3>
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

            {/* Salus Insurance */}
            <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10 hover:bg-white/10 transition">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <img
                  src="/salus.jpeg"
                  alt="Salus Insurance"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Salus Insurance</h3>
              <p className="text-gray-300 mb-4">
                Won 1st place at Botnoi HackFest 2023 against 500+ teams. Deployed on Heroku with Omne App integration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-green-900/40 text-green-200 text-xs rounded border border-green-500/30">Python</span>
                <span className="px-2 py-1 bg-green-900/40 text-green-200 text-xs rounded border border-green-500/30">Streamlit</span>
                <span className="px-2 py-1 bg-green-900/40 text-green-200 text-xs rounded border border-green-500/30">Scikit-learn</span>
                <span className="px-2 py-1 bg-green-900/40 text-green-200 text-xs rounded border border-green-500/30">Heroku</span>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Warotpete/Salus_Frontend"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  GitHub →
                </a>
                <a
                  href="https://salus-insurance-e1ca1b74cf92.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  Try the app →
                </a>
                <a
                  href="/Salus.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  View Slides →
                </a>
              </div>
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
              <a
                href="https://youtu.be/Jg0pPHCoGXA?si=v-KsuVNSSosgLGib"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                Watch Demo →
              </a>
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
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 bg-[#08101f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Skills & Tech Stack</h2>
            <p className="mt-4 text-gray-400">Languages, frameworks, tools, and platforms I work with</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
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
              className="w-16 h-16 flex items-center justify-center rounded-xl border border-gray-500 hover:border-white transition"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.191 20 14.434 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/warotpete/"
              target="_blank"
              rel="noreferrer"
              aria-label="View LinkedIn profile"
              className="w-16 h-16 flex items-center justify-center rounded-xl border border-gray-500 hover:border-white transition"
            >
              <svg className="w-6 h-6 text-gray-300 hover:text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
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