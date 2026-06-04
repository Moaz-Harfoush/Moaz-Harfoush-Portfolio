import React from "react";
import { User, Layout } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { motion } from "motion/react";
import { fadeInUp } from "./utils/fadeInUp";
import { ABOUT_DATA } from "./AboutComponents/ABOUT_DATA";

const About = () => {
  return (
    <section id="about">
      <div className="container flex gap-14 flex-col items-start relative">
        <SectionHeader
          icon={User}
          subtitle="01 / BACKGROUND CONTEXT"
          titleLight="About"
          titleColored="Me"
          description="Frontend Developer"
        />
        <motion.div
          {...fadeInUp}
          className="w-full bg-zinc-card rounded-2xl p-6 sm:p-10 relative shadow-2xl overflow-hidden
          before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.75 before:bg-linear-to-b before:from-emerald-primary before:via-emerald-light before:to-transparent
          hover:-translate-y-1 border border-transparent hover:border-emerald-light duration-300"
        >
          <div className="space-y-6 text-zinc-light text-sm sm:text-base leading-relaxed font-sans font-normal text-left">
            <p>
              I'm a passionate Frontend Developer dedicated to crafting
              pixel-perfect, highly responsive web experiences. My core focus
              centers on writing clean, maintainable, and scalable code that
              doesn't just look good under the hood, but delivers exceptional
              performance. I specialize in turning complex designs into fluid,
              user-centric interfaces with a strong emphasis on modern
              architecture, cross-browser compatibility, and seamless
              responsiveness.
            </p>

            <p>
              Driven by a curiosity for modern web ecosystems, I enjoy taking on
              fresh challenges and translating conceptual ideas into
              high-performing, real-world products. My goal is to bring value to
              an innovative development team where I can contribute to building
              impactful software solutions while fast-tracking my growth
              alongside experienced engineers.
            </p>

            <p>
              Passionate about clean architecture, responsive layout design, and
              user-focused development, I aim to contribute to innovative teams
              building impactful and seamless web interfaces.
            </p>
          </div>

          <div className="mt-10 pt-6 border-t border-zinc-deep/60">
            <h3 className="text-sm font-mono tracking-widest text-zinc-light uppercase mb-4 text-left">
              KEY COMPETENCY VECTORS
            </h3>

            <div className="flex flex-wrap gap-3">
              {ABOUT_DATA.map((item, idx) => {
                // Assigning the reference pointer to a capitalized variable to render it as a valid JSX element
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-1.5 px-4 py-3 border text-sm font-mono rounded-lg transition-all duration-300 ${item.className}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
