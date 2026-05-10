import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <section className="rounded-2xl bg-white p-10 shadow">
        <h1 className="mb-4 text-4xl font-bold">Hi, I’m Rod Raemon Alvero</h1>

        <p className="mb-4 text-xl text-blue-700">
          Computer Science Student & Future Full Stack Developer
        </p>

        <p className="mb-8 text-gray-700">
          I am learning full stack software development, cybersecurity, cloud
          deployment, and how to use AI tools to build better applications.
        </p>

        <div className="flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            View My Work
          </Link>

          <Link
            href="/about"
            className="rounded-lg border px-5 py-3 hover:bg-gray-100"
          >
            About Me
          </Link>
        </div>
      </section>
    </main>
  );
}