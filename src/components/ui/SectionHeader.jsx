import React from "react";
import { motion } from "motion/react";
import { fadeInUp } from "../utils/fadeInUp";

const SectionHeader = ({
  icon: Icon,
  subtitle,
  titleLight,
  titleColored,
  description,
}) => {
  return (
    <motion.div {...fadeInUp} className="flex flex-col gap-8">
      <div className="flex items-center gap-2 text-emerald-light font-mono text-xs tracking-widest uppercase">
        {Icon && <Icon className="w-4 h-4" />} <span>{subtitle}</span>
      </div>

      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-sans text-white">
        {titleLight}{" "}
        <span className="text-emerald-light drop-shadow-[0_0_20px_emerald-glow]">
          {titleColored}
        </span>
      </h2>

      {description && (
        <p className="max-w-2xl text-zinc-light font-mono text-xs sm:text-sm tracking-widest">
          {description}
        </p>
      )}

      <div className="h-0.5 w-20 bg-linear-to-r from-emerald-primary to-transparent" />
    </motion.div>
  );
};

export default SectionHeader;
