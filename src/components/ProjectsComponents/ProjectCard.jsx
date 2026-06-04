import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/fadeInUp";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      {...fadeInUp}
      className={`w-full flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-8 lg:gap-12 items-center bg-zinc-card border border-neon/20 rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden`}
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out
        before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-neon before:to-transparent before:shadow-[0_0_15px_#00ff9c]
        after:content-[''] after:absolute after:inset-x-0 after:top-0 after:h-full after:bg-linear-to-b after:from-neon/15 after:via-neon/5 after:to-transparent after:transform after:-translate-y-full group-hover:after:translate-y-0 after:transition-transform after:duration-700 after:ease-out"
      />

      <div className="absolute -inset-x-20 bottom-0 h-44 bg-radial-gradient(circle_at_bottom,rgba(0,255,156,0.18)_0%,transparent_75%) opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden border border-neon bg-zinc-bg z-10">
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center scale-[1.03] group-hover:scale-[1.06] transition-all duration-700 ease-out"
            style={{ backgroundImage: `url(${project.imagePlaceholder})` }}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center space-y-4 text-left relative z-10">
        <span className="font-mono text-xs text-neon tracking-[4px] font-bold">
          PROJECT_0{index + 1}
        </span>

        <h3 className="text-2xl font-bold text-white tracking-wide group-hover:text-neon transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-zinc-light text-sm leading-relaxed font-sans">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-zinc-bg/80 border border-zinc-deep/60 rounded-md font-mono text-[10px] tracking-wider text-zinc-muted cursor-default select-none group-hover:border-zinc-deep transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 w-full border-t border-zinc-deep/20">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-light hover:text-neon transition-colors duration-300 group/btn"
          >
            <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>REPOSITORY</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-light hover:text-neon transition-colors duration-300 group/btn"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
            <span>LIVE_DEMO</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
