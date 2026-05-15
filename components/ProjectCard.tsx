type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  status: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  tags,
  status,
  link,
}: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-md transition hover:-translate-y-2 hover:border-cyan-300 hover:bg-slate-800/90">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold">{title}</h2>

        <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
          {status}
        </span>
      </div>

      <p className="mb-5 text-slate-300">{description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-cyan-950 px-3 py-1 text-sm text-cyan-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        className="font-medium text-cyan-400 hover:text-cyan-300"
      >
        View project →
      </a>
    </article>
  );
}