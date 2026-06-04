import { X } from "lucide-react";
import Logo from "./Logo";

const MobileMenu = ({ isOpen, setIsOpen, active, setActive, NAV_LINKS }) => {
  return (
    <div
      /* Toggle visibility and clickability of the overlay based on menu open state */
      className={`fixed inset-0 z-50 bg-black transition-all duration-300 md:hidden flex flex-col ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4 border-b border-zinc-card">
        <Logo />
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-zinc-light hover:text-white transition-colors"
          aria-label="Close Menu"
        >
          <X className="w-6 h-6 text-neon" />
        </button>
      </div>

      <nav className="flex-1 flex flex-col justify-start pt-12 px-8 gap-8 text-lg tracking-widest">
        {NAV_LINKS.map((link, index) => {
          const isActive = active === link.name;
          return (
            <a
              key={index}
              href={link.href}
              /* Double action: Updates the active link and closes the full-screen menu simultaneously */
              onClick={() => {
                setActive(link.name);
                setIsOpen(false);
              }}
              className={`flex items-center justify-between border-b border-zinc-card pb-4 transition-colors duration-200 ${
                isActive
                  ? "text-neon font-semibold"
                  : "text-zinc-light hover:text-white"
              }`}
            >
              <span>{link.name}</span>
              {/* Blinking radio pulse effect to indicate the current active section */}
              {isActive && (
                <div className="relative flex h-3 w-3 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 duration-1000" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon shadow-[0_0_10px_#00ff9c,0_0_20px_#00ff9c]" />
                </div>
              )}
            </a>
          );
        })}
      </nav>

      <div className="p-6 text-center text-[10px] tracking-widest text-zinc-muted border-t border-zinc-card">
        MOAZ HARFOUSH PORTFOLIO • PORT ACTIVE
      </div>
    </div>
  );
};

export default MobileMenu;
