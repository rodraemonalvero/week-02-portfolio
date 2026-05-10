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
    <article className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold">{title}</h2>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
          {status}
        </span>
      </div>

      <p className="mb-5 text-gray-700">{description}</p>

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        className="font-medium text-blue-600 hover:text-blue-800"
      >
        View project →
      </a>
    </article>
  );
}