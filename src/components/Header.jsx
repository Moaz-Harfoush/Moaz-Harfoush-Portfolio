import React, { useState } from "react";
import { Menu } from "lucide-react";
import Logo from "./HeaderComponents/Logo";
import DesktopNav from "./HeaderComponents/DesktopNav";
import MobileMenu from "./HeaderComponents/MobileMenu";
import useScrollspy from "./hooks/useScrollspy";

const NAV_LINKS = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("HOME");

  // Custom hook that tracks user scroll position and automatically updates the active navigation state
  useScrollspy(setActive);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-black border-b border-zinc-deep">
        <div className="container h-18 flex items-center justify-between">
          <Logo />

          <DesktopNav
            active={active}
            setActive={setActive}
            NAV_LINKS={NAV_LINKS}
          />

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 text-zinc-light hover:text-white transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6 text-neon" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        active={active}
        setActive={setActive}
        NAV_LINKS={NAV_LINKS}
      />
    </>
  );
};

export default Header;
