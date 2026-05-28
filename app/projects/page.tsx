export default function Projects() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Projects</h1>
            <p className="text-lg text-gray-300">
              Explore some of my recent work and projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Autonomous Driving Car */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition border border-gray-700">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gray-800">
                <img
                  src="/racing.png"
                  alt="Autonomous Driving Car Report"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Autonomous Driving Car</h3>
              <p className="text-gray-400 mb-4">
                Built a real-time self-driving system using ROS2 with LiDAR for navigation in simulated and physical environments. Implemented driving and safety algorithms (Gap Follow + Automatic Emergency Braking) and a track mapping pipeline with occupancy maps.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <a
                  href="/autonomous_racing.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  View Report →
                </a>
                <a
                  href="https://github.com/Warotpete/Autonomous-Racing"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  GitHub →
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">Team of 5</p>
            </div>

            {/* Salus Insurance */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition border border-gray-700">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <img
                  src="/salus.jpeg"
                  alt="Salus Insurance"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Salus Insurance</h3>
              <p className="text-gray-400 mb-4">
                Developed an insurance cost prediction model leveraging Kaggle's public dataset. Won 1st place in the Insurance Industry category at Botnoi HackFest 2023 (500+ teams). Successfully deployed on Heroku with integration into the Omne App and Line Official Account.
              </p>
              <a
                href="https://github.com/Warotpete/Salus_Frontend"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                GitHub →
              </a>
              <p className="text-sm text-gray-500 mt-4">Team of 4 • 🏆 1st Place Winner</p>
            </div>

            {/* UBCNET */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition border border-gray-700">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <img
                  src="https://img.youtube.com/vi/Jg0pPHCoGXA/hqdefault.jpg"
                  alt="UBCNET Demo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">UBCNET</h3>
              <p className="text-gray-400 mb-4">
                Developed a Java-based classified platform for the UBC community featuring three main sections: Shop (buy/sell second-hand items), Housing (subletting and rentals), and Announcements (news and events). Designed to serve students, staff, and faculty.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                  Java
                </span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                  Full-Stack
                </span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                  Web
                </span>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="https://youtu.be/Jg0pPHCoGXA?si=v-KsuVNSSosgLGib"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  Watch Demo →
                </a>
                <a
                  href="https://github.com/Warotpete/UBCNet"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  GitHub →
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">Team of 5</p>
            </div>

            {/* Sport Session Tracker */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition border border-gray-700">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0 bg-gray-800">
                <img
                  src="/sportsession.png"
                  alt="Sport Session Tracker"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sport Session Tracker</h3>
              <p className="text-gray-400 mb-4">
                Developed a full-stack athletic performance analysis web application using Node.js, Express, and Oracle Database for CPSC 304 at UBC. The system enables athletes to track training sessions, monitor physical conditions, manage sports data, and analyze performance trends through advanced SQL operations including joins, aggregations, and dynamic queries.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">Express</span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">Oracle</span>
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">SQL</span>
              </div>
              <a
                href="https://github.com/Warotpete/Sport-Sessions-Tracker"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                GitHub →
              </a>
              <p className="text-sm text-gray-500 mt-4">CPSC 304 @ UBC</p>
            </div>

            {/* Platformer Game */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition border border-gray-700">
              <div className="relative h-48 rounded-lg mb-4 overflow-hidden flex-shrink-0">
                <img
                  src="https://img.youtube.com/vi/33I9vTGCc70/hqdefault.jpg"
                  alt="Platformer Game"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Platformer Game</h3>
              <p className="text-gray-400 mb-4">
                A complete platformer game created from scratch, handling all aspects including game mechanics, coding, character animation, and level design. Features smooth gameplay mechanics, polished animations, and engaging level progression.
              </p>
              <a
                href="https://youtu.be/33I9vTGCc70?si=isImxwLTYI4FN8Yj"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition"
              >
                Watch Demo →
              </a>
              <p className="text-sm text-gray-500 mt-4">Solo Project</p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-12">
            <a
              href="/"
              className="text-blue-400 hover:text-blue-300 font-medium transition"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#08101f] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-6">© 2026 Tarit Witworrasakul. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Warotpete"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition font-medium"
            >
              Follow me on GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/warotpete/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition font-medium"
            >
              Follow me on LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
