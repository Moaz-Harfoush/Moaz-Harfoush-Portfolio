import React from "react";
import { Code2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import SkillCard from "./SkillsComponents/SkillCard";
import { ALL_SKILLS } from "./SkillsComponents/SKILLS_DATA";

const Skills = () => {
  return (
    <section id="skills" className="w-full overflow-hidden relative z-10">
      <div className="container flex gap-14 flex-col items-start relative">
        <SectionHeader
          icon={Code2}
          subtitle="02 / TECHNICAL ARSENAL"
          titleLight="My"
          titleColored="Skills"
          description="Technologies and core methodologies I master to build scalable and high-performance frontend experiences."
        />

        {/* Dynamic responsive grid configuration shifting column counts seamlessly across viewport breakpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center w-full pt-4">
          {ALL_SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
