import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-10">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">Warot Tharanamai</h1>
        <p className="mt-4 text-xl text-gray-600">
          Computer Engineering student at UBC interested in AI, robotics,
          full-stack development, and digital transformation.
        </p>

        <div className="mt-8 flex gap-4">
          <a href="#projects" className="px-4 py-2 bg-black text-white rounded-lg">
            View Projects
          </a>
          <a href="#contact" className="px-4 py-2 border rounded-lg">
            Contact Me
          </a>
        </div>
      </section>

      <section id="projects" className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="mt-6 grid gap-6">
          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold">F1TENTH Autonomous Racing</h3>
            <p className="mt-2 text-gray-600">
              Built ROS2-based autonomous driving features including safety,
              wall following, gap following, and raceline optimization.
            </p>
          </div>

          <div className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold">YOLO Deployment System</h3>
            <p className="mt-2 text-gray-600">
              Developed an AI object detection deployment system using YOLO,
              FastAPI, and Streamlit.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-4">Email: warotpete@gmail.com</p>
      </section>
    </main>
  );
}
