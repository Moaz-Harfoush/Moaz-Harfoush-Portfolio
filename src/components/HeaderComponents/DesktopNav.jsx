import React, { useMemo } from "react";

const DesktopNav = ({ active, setActive, NAV_LINKS }) => {
  return (
    <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium select-none">
      {NAV_LINKS.map((link, index) => {
        const isActive = active === link.name;
        return (
          <a
            key={index}
            href={link.href}
            onClick={() => setActive(link.name)}
            className={`relative py-2 transition-all duration-300 ease-out ${
              isActive
                ? "text-neon drop-shadow-[0_0_8px_rgba(0,255,156,0.5)] font-semibold"
                : "text-zinc-light hover:text-neon"
            }
            before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-0.5 before:bg-neon before:shadow-[0_0_12px_rgba(0,255,156,0.8)] before:transition-transform before:duration-300 before:origin-left
            ${isActive ? "before:scale-x-100 before:w-full" : "before:w-full before:scale-x-0 hover:before:scale-x-100"}
            `}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
