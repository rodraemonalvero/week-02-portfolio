import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            Computer Science Student
          </p>

          <h1 className="mb-5 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Hi, I’m Rod Raemon Alvero.
          </h1>

          <p className="mb-6 text-xl text-gray-700">
            Future Full Stack Developer focused on software development,
            cybersecurity, cloud deployment, and AI-powered applications.
          </p>

          <p className="mb-8 text-gray-600">
            I am building a strong foundation in modern web development using
            Next.js, React, Tailwind CSS, and GitHub. My goal is to create clean,
            useful, and secure applications that solve real problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white shadow hover:bg-blue-700"
            >
              View My Projects
            </Link>

            <Link
              href="/about"
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100"
            >
              Learn About Me
            </Link>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-slate-900 p-8 text-white shadow-xl">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white text-3xl font-bold text-blue-700">
            RA
          </div>

          <h2 className="mb-3 text-2xl font-bold">Portfolio Focus</h2>

          <ul className="space-y-3 text-blue-50">
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