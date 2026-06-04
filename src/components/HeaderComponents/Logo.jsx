const Logo = () => {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 font-bold tracking-wider text-xl group select-none"
    >
      <span className="relative uppercase text-lg tracking-widest font-bold bg-linear-to-r from-neon via-brand-cyan to-brand-blue bg-clip-text text-transparent drop-shadow-[0_0_8px_var(--color-neon-glow)] transition-all duration-500 ease-in-out group-hover:drop-shadow-[0_0_15px_var(--color-neon-hover)] group-hover:scale-[1.03]">
        {"<Moaz Harfoush/>"}
        <span className="absolute -inset-x-2 inset-y-0 bg-linear-to-r from-neon/0 via-brand-cyan/10 to-brand-blue/0 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </span>
    </a>
  );
};

export default Logo;
