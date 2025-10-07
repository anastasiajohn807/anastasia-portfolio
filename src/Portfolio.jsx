// Portfolio.jsx
// Single-file React component (default export) styled with Tailwind CSS
// Replace any placeholder content as needed. Uses your GitHub projects and contact info.

import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      name: "to-do-app",
      desc: "A simple to-do list web app built with HTML, CSS & JavaScript.",
      url: "https://github.com/anastasiajohn807/to-do-app"
    },
    {
      name: "quiz-app",
      desc: "Interactive quiz application (JavaScript).",
      url: "https://github.com/anastasiajohn807/quiz-app"
    },
    {
      name: "Andrea-s-World",
      desc: "Clothing website project (HTML).",
      url: "https://github.com/anastasiajohn807/Andrea-s-World"
    },
    {
      name: "screenshot.png",
      desc: "Image / screenshot file in the repo.",
      url: "https://github.com/anastasiajohn807/screenshot.png"
    }
  ];

  const skills = [
    'JavaScript (ES6+)',
    'React & Next.js',
    'Node.js & Express',
    'REST APIs',
    'HTML & CSS (Tailwind)',
    'MongoDB / PostgreSQL',
    'Git & GitHub',
    'Responsive Design & UI/UX'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-pink-300 text-gray-900">
      <div className="max-w-5xl mx-auto p-6">
        {/* HERO */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Anastasia Nwanazia</h1>
            <p className="mt-2 text-lg text-white/90">Full Stack Developer — building colourful, usable web apps</p>
            <p className="mt-4 max-w-xl text-white/90">Hi! I build elegant web solutions using modern technologies — from sleek, responsive frontends to scalable backends. I love turning ideas into delightful, reliable products.</p>

            <div className="mt-5 flex gap-3">
              <a href="#projects" className="inline-block px-4 py-2 bg-white/90 text-purple-700 font-semibold rounded-lg shadow hover:translate-y-[-2px] transition">View Projects</a>
              <a href="#contact" className="inline-block px-4 py-2 border border-white/60 text-white rounded-lg hover:bg-white/10 transition">Contact Me</a>
            </div>

            <div className="mt-6 text-sm text-white/80">
              <div>GitHub: <a className="underline" href="https://github.com/anastasiajohn807">github.com/anastasiajohn807</a></div>
              <div>Email: <a className="underline" href="mailto:Anastasiajohn807@gmail.com">Anastasiajohn807@gmail.com</a></div>
            </div>
          </div>

          {/* Avatar / visual */}
          <div className="w-40 h-40 rounded-2xl bg-white/20 flex items-center justify-center shadow-lg">
            <div className="text-white text-center px-3">
              <div className="text-xl font-semibold">Anastasia</div>
              <div className="text-sm">Full Stack Dev</div>
            </div>
          </div>
        </header>

        {/* ABOUT & SKILLS */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white/10 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold text-white">About Me</h2>
            <p className="mt-3 text-white/90">Hi, I’m <strong>Anastasia Nwanazia</strong>, a passionate <strong>Full Stack Developer</strong> who loves turning ideas into powerful, user-friendly digital experiences. I build elegant web solutions using modern technologies — from sleek, responsive frontends to scalable, efficient backends. I’m driven by creativity, problem-solving, and the joy of transforming complex challenges into simple, beautiful results. When I’m not coding, I explore new tools and refine UI/UX designs.</p>
          </div>

          <aside className="bg-white/10 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-white">Skills</h3>
            <ul className="mt-4 space-y-2">
              {skills.map((s) => (
                <li key={s} className="text-white/90">• {s}</li>
              ))}
            </ul>
          </aside>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold text-white">Projects</h2>
          <p className="mt-2 text-white/80">Selected projects from my GitHub profile.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="block bg-white/10 p-5 rounded-xl hover:scale-[1.01] transition-shadow shadow-md">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-white">{p.name}</h4>
                    <p className="mt-2 text-white/85">{p.desc}</p>
                  </div>
                  <div className="text-sm text-white/80">View →</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <footer id="contact" className="mt-12 bg-white/6 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl text-white font-bold">Let’s build something together</h3>
            <p className="mt-2 text-white/80">Email me at <a className="underline" href="mailto:Anastasiajohn807@gmail.com">Anastasiajohn807@gmail.com</a> or check out my GitHub <a className="underline" href="https://github.com/anastasiajohn807">@anastasiajohn807</a>.</p>
          </div>

          <div className="mt-4 md:mt-0">
            <a href="/Anastasia_Resume.pdf" className="inline-block px-4 py-2 bg-white text-purple-700 rounded-lg font-semibold shadow">Download Resume</a>
          </div>
        </footer>

        <p className="mt-6 text-center text-white/70 text-sm">Made with ❤️ — colourful & creative theme</p>
      </div>
    </div>
  );
}
