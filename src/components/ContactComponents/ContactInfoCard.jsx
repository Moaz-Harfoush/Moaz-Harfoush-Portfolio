import {
  Mail,
  Phone,
  Copy,
  Check,
  FileText,
  Github,
  Linkedin,
} from "lucide-react";
import { useState } from "react";

const ContactInfoCard = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "moazharfoush60@gmail.com";
  const phone = "+201005242031";

  // Reusable utility function targeting the modern asynchronous Navigator Clipboard API
  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        // Automatically reset the visual checkmark indicator back to copy icon after 2 seconds
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Clipboard copy operation failed:", err));
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      {/* Visual availability status indicator with continuous pulse/ping loops */}
      <div className="flex items-center gap-2 self-start px-4 py-2 text-xs font-bold tracking-wider text-neon bg-neon/10 border border-neon/20 rounded-md uppercase">
        <div className="relative flex h-2.5 w-2.5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75 duration-1000" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-neon shadow-[0_0_10px_var(--color-neon)]" />
        </div>
        Available for new projects
      </div>

      {/* Email Card Gateway Component Layout Section */}
      <div className="flex items-center justify-between p-4 bg-zinc-card border border-white/5 rounded-xl hover:border-neon/30 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-4 min-w-0">
          <div className="p-3 bg-white/5 rounded-xl text-neon shrink-0">
            <Mail size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] tracking-widest text-zinc-muted uppercase">
              Email Gateway
            </p>
            {/* truncate forces long email raw strings to neatly snap with ellipses on narrow viewpoints */}
            <p className="text-sm md:text-base text-zinc-light font-medium truncate">
              {email}
            </p>
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(email, setCopiedEmail)}
          className="p-2 text-zinc-muted hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors shrink-0 ml-2"
          aria-label="Copy email"
        >
          {copiedEmail ? (
            <Check size={16} className="text-neon" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>

      {/* Phone Card Component Layout Section */}
      <div className="flex items-center justify-between p-4 bg-zinc-card border border-white/5 rounded-xl hover:border-neon/30 transition-transform duration-300 hover:-translate-y-1">
        <div className="flex items-center gap-4 min-w-0">
          <div className="p-3 bg-white/5 rounded-xl text-neon shrink-0">
            <Phone size={20} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] tracking-widest text-zinc-muted uppercase">
              Phone Encrypted
            </p>
            <p className="text-sm md:text-base text-zinc-light font-medium truncate">
              {phone}
            </p>
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(phone, setCopiedPhone)}
          className="p-2 text-zinc-muted hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors shrink-0 ml-2"
          aria-label="Copy phone number"
        >
          {copiedPhone ? (
            <Check size={16} className="text-neon" />
          ) : (
            <Copy size={16} />
          )}
        </button>
      </div>

      {/* SLA Guidelines Responsive Feedback Framework Box */}
      <div className="p-4 bg-zinc-card/40 border border-dashed border-white/5 rounded-xl text-xs space-y-1">
        <div className="flex items-center gap-2 text-zinc-light font-medium">
          <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
          Responsive SLA
        </div>
        <p className="text-zinc-400 leading-relaxed">
          Usually replies within 24 hours. Directly accessible via GitHub or
          official communication handles.
        </p>
      </div>

      {/* Downloadable Resume External Link Vector Layout Panel */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 bg-brand-blue/5 border border-brand-blue/30 rounded-xl hover:border-brand-blue/60 transition-colors duration-300">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/5 rounded-xl text-brand-cyan border border-brand-blue/20">
            <FileText size={20} />
          </div>
          <div>
            <p className="text-[10px] tracking-widest text-zinc-muted uppercase">
              Verified CV
            </p>
            <p className="text-sm font-medium text-zinc-light">
              Curriculum Vitae
            </p>
          </div>
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1Ho_uwin11zve7qTPD0T9Sx0ZsYeGCJZZ/view"
          className="px-4 py-2 uppercase bg-brand-blue hover:bg-brand-blue/80 text-white font-semibold rounded-lg text-xs tracking-wide transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(0,119,181,0.2)] w-full sm:w-auto justify-center self-stretch sm:self-auto"
        >
          <FileText className="w-4 h-4" /> Resume
        </a>
      </div>

      {/* Grid Network Mapping Secondary External Social Anchors */}
      <div className="mt-2 space-y-4 bg-zinc-card/60 p-5 rounded-2xl border border-white/5">
        <p className="text-[10px] tracking-widest text-zinc-light uppercase">
          External Channels
        </p>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://github.com/Moaz-Harfoush"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/5 hover:border-neon hover:bg-neon/5 hover:text-neon rounded-xl text-xs text-zinc-light transition-all duration-300"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/moaz-harfoush-87ab77405/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/5 hover:border-neon hover:bg-neon/5 hover:text-neon rounded-xl text-xs text-zinc-light transition-all duration-300"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
