import React from "react";
import { ArrowUpRight, FileText, Sparkles, ChevronsDown } from "lucide-react";
import { motion } from "motion/react";
import { HERO_DATA } from "./HeroComponents/HERO_DATA";
import FloatingBadge from "./HeroComponents/FloatingBadge";
import SocialLinks from "./HeroComponents/SocialLinks";
import { fadeInUp } from "./utils/fadeInUp";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center items-center pt-58 overflow-hidden"
    >
      {/* Spreading global animation configs globally loaded from utility objects */}
      <motion.div
        {...fadeInUp}
        className="container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative pb-24"
      >
        <div className="lg:col-span-7 flex flex-col lg:items-start items-center space-y-8 text-center lg:text-left">
          {/* Subtle loop glow animation to draw instant attention to availability badge */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 font-bold bg-emerald-badge-bg border border-emerald-badge-border text-emerald-light text-xs font-mono uppercase px-4 py-1.5 rounded-full tracking-widest shadow-[0_0_15px_emerald-glow]"
          >
            <Sparkles className="w-4" /> Available for innovative projects
          </motion.div>

          <div>
            <p className="text-zinc-light text-sm tracking-[5px] font-mono uppercase mb-2">
              {HERO_DATA.welcome}
            </p>
            {/* whitespace-pre-line processes the "\n" line breaks explicitly injected within string raw values */}
            <h1 className="text-4xl md:text-7xl tracking-[5px] text-white font-bold leading-tight whitespace-pre-line">
              {HERO_DATA.name}
            </h1>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide font-sans text-neon">
            {HERO_DATA.role}
          </h2>
          <p className="text-zinc-light text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed">
            {HERO_DATA.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#projects"
              className="group px-6 py-4 uppercase bg-white text-black font-semibold hover:bg-brand-dark rounded-lg text-xs tracking-[1px] hover:text-white hover:border-white border border-transparent transition-all flex items-center gap-2 duration-300 shadow-lg w-full sm:w-auto justify-center"
            >
              View Projects{" "}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 rotate-45 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="px-6 py-4 uppercase bg-brand-dark border hover:border-emerald-light duration-300 border-zinc-deep text-zinc-light font-semibold rounded-lg text-sm tracking-wide hover:text-white transition-all w-full sm:w-auto justify-center text-center"
            >
              Contact Me
            </a>
            <a
              target="blank"
              href="https://drive.google.com/file/d/1Ho_uwin11zve7qTPD0T9Sx0ZsYeGCJZZ/view"
              className="px-6 py-4 uppercase bg-brand-blue duration-300 hover:bg-brand-blue/80 text-white font-semibold rounded-lg text-sm tracking-wide transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] w-full sm:w-auto justify-center"
            >
              <FileText className="w-4 h-4" /> Resume
            </a>
          </div>

          <SocialLinks />
        </div>

        <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0 select-none w-full px-4">
          <div className="relative h-72 w-72 sm:w-85 sm:h-85 md:w-95 md:h-95 aspect-square rounded-full flex justify-center items-center p-6 shadow-[0_0_50px_var(--color-emerald-glow)] group">
            {/* Inner avatar configuration toggling from circle to square on card parent hover */}
            <div className="w-full h-full rounded-full border-2 border-emerald-primary/80 bg-zinc-bg relative overflow-hidden flex items-end justify-center shadow-[inset_0_0_30px_var(--color-emerald-glow)]">
              <img
                src="/images/profile.webp"
                alt="Moaz Harfoush"
                className="w-full rounded-full transition-all duration-500 ease-out transform scale-95 group-hover:scale-100 group-hover:rounded-none"
              />
            </div>

            {HERO_DATA.floatingBadges.map((badge, idx) => (
              <FloatingBadge key={idx} {...badge} />
            ))}
          </div>
        </div>

        {/* Dynamic down scroll cue with automated physics looping */}
        <a
          href="#about"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col duration-300 text-zinc-light hover:text-emerald-light items-center gap-1 cursor-pointer"
        >
          <span className="text-sm font-mono uppercase tracking-widest">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 15] }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="will-change-transform transform-gpu"
          >
            <ChevronsDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
