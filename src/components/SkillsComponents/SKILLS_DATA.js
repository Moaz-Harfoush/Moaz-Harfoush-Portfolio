import {
  Code2,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  MonitorSmartphone,
  Radio,
  GitBranch,
  Boxes,
  Globe,
} from "lucide-react";

export const ALL_SKILLS = [
  {
    name: "HTML5",
    feature: "Semantic Structure & Modern Web Standards",
    techCode: "DOM_STAT",
    icon: Code2,
  },
  {
    name: "CSS3",
    feature: "Advanced Layouts, Flexbox, Grid & Keyframes",
    techCode: "STYLE_V3",
    icon: Layers,
  },
  {
    name: "SCSS / SASS",
    feature: "CSS Preprocessing, Nesting & Modular Mixins",
    techCode: "EXT_CSS",
    icon: Layers,
  },
  {
    name: "Tailwind CSS",
    feature: "Utility-First Styling & Custom Configuration",
    techCode: "TW_STYL",
    icon: Layers,
  },
  {
    name: "JavaScript",
    feature: "ES6+ Core Engine & Asynchronous Execution",
    techCode: "CORE_SYS",
    icon: Terminal,
  },
  {
    name: "Axios",
    feature: "Asynchronous HTTP Orchestration & Interceptor Pipeline",
    techCode: "AXIOS_HTTP",
    icon: Radio,
  },
  {
    name: "TypeScript",
    feature: "Strict Type Safety & Compile-Time Security",
    techCode: "STRICT_T",
    icon: ShieldCheck,
  },
  {
    name: "React.js",
    feature: "Component Architecture & Custom Hooks Mastery",
    techCode: "MOD_ARCH",
    icon: Cpu,
  },
  {
    name: "Next.js",
    feature: "Server-Side Rendering, App Router & Static Generation",
    techCode: "NXT_FRM",
    icon: Globe,
  },
  {
    name: "Redux Toolkit",
    feature: "Global State Management & Predictable State Container",
    techCode: "GLB_STAT",
    icon: Boxes,
  },
  {
    name: "Git & GitHub",
    feature: "Version Control, Branching & Team Workflows",
    techCode: "V_CNTRL",
    icon: GitBranch,
  },
  {
    name: "Responsive Design",
    feature: "Fluid Grid Frameworks & Mobile-First Coding",
    techCode: "RSP_VIEW",
    icon: MonitorSmartphone,
  },
];
