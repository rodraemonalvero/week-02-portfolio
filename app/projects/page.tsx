"use client";

import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Week 1 Personal Profile Page",
    description:
      "A static personal profile page built with semantic HTML, custom CSS, flexbox, and GitHub version control.",
    tags: ["HTML", "CSS"],
    status: "Completed",
    link: "https://github.com/rodraemonalvero/week-01-lab",
  },
  {
    id: 2,
    title: "JavaScript Counter and To-Do List",
    description:
      "A vanilla JavaScript practice project using DOM manipulation, event listeners, createElement, and appendChild.",
    tags: ["JavaScript"],
    status: "Completed",
    link: "#",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js, React, Tailwind CSS, reusable components, and a project filter using useState.",
    tags: ["Next.js", "React", "Tailwind"],
    status: "In Progress",
    link: "https://github.com/rodraemonalvero/week-02-portfolio",
  },
  {
    id: 4,
    title: "Zero Trust AI Security Demo",
    description:
      "A class project concept focused on Zero Trust architecture, human-in-the-loop approvals, admin workflows, and AI-assisted security decisions.",
    tags: ["Python", "Cybersecurity", "AI"],
    status: "Planned Project",
    link: "#",
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
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
          My Work
        </p>

        <h1 className="text-4xl font-bold">Projects</h1>

        <p className="mt-4 max-w-2xl text-gray-600">
          These projects show my progress in full stack development,
          JavaScript, cybersecurity, and AI-assisted software development.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full px-4 py-2 text-sm font-medium shadow-sm transition ${
              activeTag === tag
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
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
            status={project.status}
            link={project.link}
          />
        ))}
      </div>
    </main>
  );
}