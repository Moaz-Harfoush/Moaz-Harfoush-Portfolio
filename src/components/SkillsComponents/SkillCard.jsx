import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/fadeInUp";

const SkillCard = ({ name, feature, techCode, icon: Icon }) => {
  return (
    <motion.div
      {...fadeInUp}
      className="relative w-full max-w-86.25 bg-zinc-card rounded-2xl p-8 border border-neon/30 flex flex-col items-start text-left min-h-52.5 transition-all duration-500 ease-out group cursor-default select-none hover:-translate-y-3 hover:shadow-[0_15px_40px_rgba(0,255,156,0.08)] transform-gpu will-change-transform overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out
        before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-linear-to-r before:from-transparent before:via-neon before:to-transparent before:shadow-[0_0_15px_#00ff9c]
        after:content-[''] after:absolute after:inset-x-0 after:top-0 after:h-full after:bg-linear-to-b after:from-neon/15 after:via-neon/5 after:to-transparent after:transform after:-translate-y-full group-hover:after:translate-y-0 after:transition-transform after:duration-700 after:ease-out"
      />

      <div className="relative z-10 flex flex-col items-start space-y-5 w-full h-full justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="w-12 h-12 rounded-xl bg-zinc-bg border border-zinc-deep flex items-center justify-center text-zinc-light group-hover:text-neon group-hover:border-neon/20 group-hover:scale-105 transition-all duration-300 shadow-inner">
            <Icon className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-bg/60 border border-zinc-deep/50 rounded-full font-mono text-[9px] tracking-widest text-zinc-muted group-hover:border-neon/10 group-hover:text-white transition-colors duration-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neon shadow-[0_0_6px_#00ff9c]" />
            </span>
            <span>{techCode}</span>
          </div>
        </div>

        <div className="space-y-1.5 text-left">
          <h3 className="text-lg font-bold text-white tracking-wide font-mono group-hover:text-neon transition-colors duration-300">
            {name}
          </h3>
          <p className="text-zinc-light text-sm font-sans font-normal leading-relaxed line-clamp-2">
            {feature}
          </p>
        </div>

        <div className="w-full pt-3 border-t border-zinc-deep/20 flex items-center justify-between text-[9px] font-mono tracking-widest text-zinc-muted">
          <span>MODULE // READY</span>
          <span className="text-[10px] text-zinc-deep group-hover:text-neon/50 duration-300">
            ⚡
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
