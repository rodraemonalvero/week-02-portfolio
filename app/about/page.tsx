const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "Cybersecurity",
  "Cloud Deployment",
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">About Me</h1>

      <p className="text-gray-700">
        My name is Rod Raemon Alvero. I am a Computer Science student interested
        in software development, cybersecurity, and artificial intelligence. I
        am taking this course to improve my full stack skills and build real
        projects using modern tools.
      </p>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">Skills & Interests</h2>

      <ul className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-lg bg-white px-4 py-3 shadow">
            {skill}
          </li>
        ))}
      </ul>
    </main>
  );
}