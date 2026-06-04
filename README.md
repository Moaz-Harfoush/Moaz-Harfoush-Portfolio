# Moaz Harfoush // Portfolio 🚀

Welcome to my personal portfolio repository. This is a high-performance, responsive, and architecture-driven web application built with modern frontend technologies, custom animations, and clean semantic structures.

## 🛠️ Tech Stack & Arsenal

The project is engineered using a curated selection of modern frameworks and tools:

- **Core Framework:** React.js (Component Architecture & Custom Hooks)
- **Language:** JavaScript (ES6+ Asynchronous Core)
- **Styling & UI:** Tailwind CSS (Utility-First, Custom Configurations) & SCSS
- **Animations:** Framer Motion (`motion/react`) for smooth, GPU-accelerated micro-interactions.
- **Icons:** Lucide React

---

## 💎 Key Features & Architecture

### 1. Motion & Micro-Interactions (`Framer Motion`)

- **Floating Asset Loop:** Floating badges (`FloatingBadge.jsx`) for technical skills with randomized duration offsets to prevent synchronization artifacts.
- **Dynamic Scroll Cue:** Automated physics-looping scroll indicators (`ChevronsDown`) using reversing ease curves.

### 2. High-Fidelity UI & Hover Mechanics

- **Neo-Brutalism & Glassmorphism:** Cards use custom gradients, blurred backdrop filters (`backdrop-blur-md`), and radial neon glows.
- **Interactive Overlays:** Skill cards utilize advanced CSS pseudo-elements (`before`/`after`) to slide lighting grids down and trigger neon border flashes on hover.

### 3. Asynchronous Scrollspy Architecture

- Custom built React Hook (`useScrollspy.js`) powered by the native browser **Intersection Observer API**.
- Implements a shrunk detection viewport boundary (`rootMargin: "-30% 0px -60% 0px"`) to track active page sections precisely and sync navigation highlights seamlessly during scrolling.

### 4. Controlled Submissions & Clipboard Interface

- **Asynchronous Copy-To-Clipboard:** Seamless integration with the modern `navigator.clipboard` API to store secure emails/phone numbers with automated 2-second UI state rollbacks.
- **Secure Envelope Form:** Fully controlled React form handling client-side state synchronization, submission interceptions, and smooth scrolling resets.

---
