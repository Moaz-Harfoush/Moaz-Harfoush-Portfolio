import React from "react";
import { HERO_DATA } from "./HERO_DATA";

const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {HERO_DATA.socialLinks.map((link, idx) => {
        // Dynamically extract the Lucide component constructor assigned in the data object
        const Icon = link.icon;
        return (
          <a
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            href={link.href}
            aria-label={link.name}
            className={`w-10 h-10 rounded-full bg-zinc-card border border-transparent text-zinc-light flex justify-center items-center transition-all duration-300 shadow-sm ${link.hoverClass}`}
          >
            <Icon className="w-4 h-4" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
