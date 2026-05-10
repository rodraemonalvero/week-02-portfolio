"use client";

import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Personal Profile Page",
    description: "A simple HTML and CSS profile page from Week 1.",
    tags: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "JavaScript To-Do List",
    description: "A DOM manipulation practice app with a counter and to-do list.",
    tags: ["JavaScript"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A Next.js portfolio site with multiple pages and reusable components.",
    tags: ["React", "Next.js"],
  },
  {
    id: 4,
    title: "Cybersecurity Learning Project",
    description: "A beginner project focused on cybersecurity and secure systems.",
    tags: ["Python", "Cybersecurity"],
  },
];

const tags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filteredProjects =
    activeTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag));

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold">Projects</h1>

      <div className="mb-8 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-lg px-4 py-2 ${
              activeTag === tag
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 shadow hover:bg-gray-100"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </div>
    </main>
  );
}