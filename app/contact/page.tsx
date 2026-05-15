export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
        Contact
      </p>

      <h1 className="mb-6 text-5xl font-bold text-slate-950">
        Get In Touch
      </h1>

      <div className="rounded-3xl border border-cyan-300 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md">
        <div className="space-y-6 text-slate-300">
          <p>
            I am currently learning full stack software development,
            cybersecurity, cloud deployment, and AI-assisted applications.
          </p>

          <p>
            Feel free to connect with me regarding projects, internships,
            collaboration opportunities, or networking.
          </p>

          <div className="space-y-3">
            <p>
              <span className="font-semibold text-cyan-300">Email:</span>{" "}
              <a
                href="mailto:rodraemon.alvero@cstu.edu"
                className="hover:text-cyan-300"
              >
                rodraemon.alvero@cstu.edu
              </a>
            </p>

            <p>
              <span className="font-semibold text-cyan-300">GitHub:</span>{" "}
              <a
                href="https://github.com/rodraemonalvero"
                target="_blank"
                className="hover:text-cyan-300"
              >
                github.com/rodraemonalvero
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}