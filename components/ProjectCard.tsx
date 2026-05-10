type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="mb-4 text-gray-700">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}