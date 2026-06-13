import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/fadeInUp";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      {...fadeInUp}
      className="w-full flex flex-col justify-between bg-zinc-card border border-neon/20 rounded-3xl p-6 transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out
        before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-neon before:to-transparent before:shadow-[0_0_15px_#00ff9c]
        after:content-[''] after:absolute after:inset-x-0 after:top-0 after:h-full after:bg-linear-to-b after:from-neon/15 after:via-neon/5 after:to-transparent after:transform after:-translate-y-full group-hover:after:translate-y-0 after:transition-transform after:duration-700 after:ease-out"
      />

      <div className="absolute -inset-x-20 bottom-0 h-44 bg-radial-gradient(circle_at_bottom,rgba(0,255,156,0.18)_0%,transparent_75%) opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

      <div className="w-full relative aspect-video rounded-2xl overflow-hidden border-2 border-neon/40 group-hover:border-neon bg-zinc-bg/50 z-10 transition-colors duration-300">
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden rounded-xl bg-zinc-deep/30">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.03] group-hover:scale-[1.06] transition-all duration-700 ease-out"
            style={{ backgroundImage: `url(${project.imagePlaceholder})` }}
          />
        </div>
      </div>

      <div className="w-full flex flex-col grow items-start justify-between space-y-4 text-left relative z-10 pt-5">
        <div className="w-full space-y-2">
          <span className="font-mono text-xs text-neon tracking-[4px] font-bold">
            PROJECT_0{index + 1}
          </span>

          <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-neon transition-colors duration-300 min-h-14 line-clamp-2">
            {project.title}
          </h3>

          <p className="text-zinc-light text-xs leading-relaxed font-sans line-clamp-4 min-h-20">
            {project.description}
          </p>
        </div>

        <div className="w-full space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-zinc-bg/80 border border-zinc-deep/60 rounded-md font-mono text-[9px] tracking-wider text-zinc-muted cursor-default select-none group-hover:border-zinc-deep transition-colors duration-300"
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
              className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-zinc-light hover:text-neon transition-colors duration-300 group/btn"
            >
              <Github className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
              <span>REPO</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-zinc-light hover:text-neon transition-colors duration-300 group/btn"
            >
              <ExternalLink className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
              <span>LIVE</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
