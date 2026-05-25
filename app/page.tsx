import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <p className="text-blue-400 font-medium mb-4">
              Hi, I&apos;m
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Warot Tharanamai
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              I'm a Computer Engineering student at the University of British Columbia passionate about machine 
              learning, autonomous systems, and modern software engineering. I enjoy building real-world 
              projects that combine AI, robotics, and full-stack development — from self-driving systems 
              and computer vision models to scalable web applications and cloud infrastructure.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl font-medium transition"
              >
                View Projects
              </a>

              <a
                href="#work-experience"
                className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl font-medium transition"
              >
                Work Experience
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl font-medium transition"
              >
                View Resume
              </a>

              <a
                href="https://www.linkedin.com/in/warotpete/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-gray-500 hover:border-white rounded-xl font-medium transition"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex justify-center">
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

      <section id="work-experience" className="py-20 px-6 bg-[#08101f]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
          </div>

          <div className="space-y-10">
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
                  <p className="text-gray-400">Apr. 2024 – Present</p>
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
              <a
                href="/autonomous_racing.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                View Report →
              </a>
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
              <a
                href="https://github.com/Warotpete/Salus_Frontend"
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

      <footer className="py-12 px-6 bg-[#08101f] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-6">© 2026 Warot Tharanamai. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Warotpete"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/warotpete/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}