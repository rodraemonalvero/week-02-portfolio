export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-400">
        Learning Journey
      </p>

      <h1 className="mb-6 text-5xl font-bold text-slate-950">
        Blog
      </h1>

      <div className="rounded-3xl border border-cyan-300 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md">
        <p className="mb-2 text-sm text-cyan-300">May 2026</p>

        <h2 className="mb-4 text-3xl font-bold text-white">
          What I Learned Building My First Next.js Portfolio
        </h2>

        <div className="space-y-4 text-slate-300">
          <p>
            One of the biggest things I learned this semester was how modern
            frontend development works using React, Next.js, and Tailwind CSS.
          </p>

          <p>
            Building this portfolio helped me understand reusable components,
            responsive layouts, routing with the App Router, and deployment
            using Vercel and GitHub.
          </p>

          <p>
            I also learned how AI tools can help developers debug problems,
            improve layouts, and speed up development while still requiring
            human creativity and decision making.
          </p>
        </div>
      </div>
    </main>
  );
}