import { Github, Linkedin } from "lucide-react";

export const HERO_DATA = {
  welcome: "Hello World, I am",
  name: "Moaz\nHarfoush",
  role: "Frontend Developer",
  bio: "Building high-performance web applications with modern frontend experiences, responsive user interfaces, and seamless interactive designs.",

  socialLinks: [
    {
      name: "Github",
      href: "https://github.com/Moaz-Harfoush",
      icon: Github,
      hoverClass:
        "hover:border-emerald-primary/50 hover:text-emerald-light hover:bg-emerald-badge-bg",
    },
    {
      name: "Linkedin",
      href: "https://www.linkedin.com/in/moaz-harfoush-87ab77405/",
      icon: Linkedin,
      hoverClass:
        "hover:border-brand-blue/50 hover:text-brand-blue hover:bg-brand-blue/20",
    },
  ],

  floatingBadges: [
    {
      text: "Tailwind",
      color: "bg-brand-blue",
      position: "top-[18%] -left-[5%]",
      duration: 3,
    },
    {
      text: "React",
      color: "bg-brand-cyan",
      position: "top-[35%] -right-[5%]",
      duration: 3.5,
    },
    {
      text: "Git",
      color: "bg-accent-red",
      position: "bottom-[18%] left-[0%]",
      duration: 4,
    },
    {
      text: "TypeScript",
      color: "bg-emerald-light",
      position: "bottom-[25%] -right-[3%]",
      duration: 3.2,
    },
  ],
};
