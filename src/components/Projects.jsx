import React from "react";
import { FolderGit2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ProjectsComponents/ProjectCard";
import { PROJECTS_DATA } from "./ProjectsComponents/PROJECTS_DATA";

const Projects = () => {
  return (
    <section id="projects" className="w-full overflow-hidden relative z-10">
      <div className="container flex gap-14 flex-col items-start relative">
        <SectionHeader
          icon={FolderGit2}
          subtitle="03 / FEATURED WORK"
          titleLight="Featured"
          titleColored="Projects"
          description="A curated selection of architecture-driven frontend applications crafted with modern technologies."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full pt-4">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
