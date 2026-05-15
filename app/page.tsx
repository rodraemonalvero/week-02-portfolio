import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
            Computer Science Student
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
            Hi, I’m Rod Raemon Alvero.
          </h1>

          <p className="mb-6 text-xl text-slate-700">
            Future Full Stack Developer focused on software development,
            cybersecurity, cloud deployment, and AI-powered applications.
          </p>

          <p className="mb-8 text-slate-600">
            I am building a strong foundation in modern web development using
            Next.js, React, Tailwind CSS, and GitHub. My goal is to create clean,
            useful, and secure applications that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-medium text-slate-950 shadow hover:bg-cyan-400 hover:opacity-90"
            >
              View My Projects
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium text-slate-800 hover:bg-slate-800"
            >
              Learn About Me
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-cyan-500/90 via-blue-700/80 to-slate-950 p-8 text-white shadow-2xl shadow-cyan-500/20">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-cyan-500">
            RA
          </div>

          <h2 className="mb-3 text-2xl font-bold">Portfolio Focus</h2>

          <ul className="space-y-3 text-cyan-50">
            <li>• Full Stack Development</li>
            <li>• Cybersecurity Fundamentals</li>
            <li>• AI-Assisted Software Projects</li>
            <li>• Cloud Deployment with GitHub and Vercel</li>
          </ul>
        </div>
      </section>
    </main>
  );
}