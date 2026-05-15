import Image from "next/image";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Git and GitHub",
  "Cybersecurity",
  "Cloud Deployment",
  "AI Tools",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[260px_1fr]">
        <aside className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6 text-center shadow-2xl backdrop-blur-md">
          <div className="mx-auto mb-4 overflow-hidden rounded-full shadow-lg">
  <Image
    src="/profile.png"
    alt="Rod Raemon Alvero"
    width={140}
    height={140}
    className="h-36 w-36 object-cover"
  />
</div>

          <h1 className="text-2xl font-bold">Rod Raemon Alvero</h1>
          <p className="mt-2 text-slate-400"
            Computer Science Student
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <a
              href="https://github.com/rodraemonalvero"
              target="_blank"
              className="block rounded-lg bg-slate-800 px-4 py-2 text-slate-100 hover:bg-slate-700"
            >
              GitHub Profile
            </a>

            <a
              href="mailto:rodraemon.alvero@cstu.edu"
              className="block rounded-lg bg-cyan-500 px-4 py-2 text-slate-950 hover:bg-cyan-400"
            >
              Email Me
            </a>
          </div>
        </aside>

        <section>
          <h2 className="mb-4 text-3xl font-bold">About Me</h2>

          <div className="space-y-4 text-slate-300">
            <p>
              My name is Rod Raemon Alvero, and I am a Computer Science student
              interested in software development, cybersecurity, cloud
              deployment, and artificial intelligence.
            </p>

            <p>
              I am learning how to build full stack applications using modern
              tools such as Next.js, React, Tailwind CSS, Git, and GitHub. I am
              also interested in how AI can help developers write, test, debug,
              and improve software more efficiently.
            </p>

            <p>
              My goal is to continue building projects that show both technical
              skill and practical problem solving. I want this portfolio to grow
              as I complete more class projects, personal projects, and future
              internship work.
            </p>

            <p>
              Outside of technology, I enjoy basketball, movies, Japanese food,
              and learning new skills that help me grow personally and
              professionally.
            </p>
          </div>

          <h3 className="mt-10 mb-4 text-2xl font-semibold">
            Skills and Technologies
          </h3>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-xl border border-cyan-500/20 bg-white/5 px-4 py-3 font-medium text-slate-100 shadow-lg backdrop-blur-md hover:border-cyan-400 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}