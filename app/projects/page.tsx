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
            {/* Placeholder Project */}
            <div className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition border border-gray-700">
              <div className="bg-gray-800 h-48 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-400 mb-4">
                Project description goes here. This is a placeholder for your project details.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-900 text-blue-200 text-sm rounded-full">
                  Tech Stack
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  View Project
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 font-medium transition"
                >
                  GitHub
                </a>
              </div>
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
    </main>
  );
}
