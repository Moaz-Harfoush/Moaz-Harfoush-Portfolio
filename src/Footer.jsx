const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative bg-black border-t border-zinc-deep">
      <div className="container py-10 select-none flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm md:text-base font-mono tracking-wide text-zinc-muted leading-relaxed max-w-2xl">
          &copy; {currentYear}{" "}
          <span className="text-neon font-bold">Moaz Harfoush</span>. Crafted
          with high performance{" "}
          <span className="text-neon font-bold">React</span> &amp; dynamic
          animation loops.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
