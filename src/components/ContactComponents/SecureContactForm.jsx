import { useState } from "react";
import { ShieldCheck, Send } from "lucide-react";

const SecureContactForm = () => {
  // Managed state object encapsulating controlled fields to synchronize form text entries
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    // Intercept form engine default routing to process state parameters safely client-side
    e.preventDefault();

    // Guard clause validating payload fields exist completely before initializing core logic
    if (!formData.name || !formData.email || !formData.message) return;

    console.log("Transmission Sent:", formData);

    // Flush and reset state structures to cleanly purge input fields following success parameters
    setFormData({ name: "", email: "", message: "" });

    // Instantly teleport viewpoint boundary parameters back up smoothly to top index coordinates
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full p-6 bg-zinc-card border border-white/5 rounded-2xl relative overflow-hidden shadow-2xl shadow-black">
      {/* Background radial glowing ambient blurred overlay node */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-neon/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-6">
        <p className="flex items-center gap-1.5 text-sm tracking-widest text-zinc-muted font-bold uppercase">
          <ShieldCheck size={14} className="text-neon" /> Secure Transmission
          Envelope
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input component wrapper layer group */}
        <div className="space-y-1.5">
          <label className="block text-[10px] uppercase tracking-wider text-zinc-muted">
            Full Name
          </label>
          <input
            type="text"
            required
            placeholder="Your Name (e.g. John Doe)"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 bg-brand-dark border border-white/5 rounded-xl text-sm text-zinc-light placeholder-zinc-muted/50 focus:outline-none focus:border-neon/40 transition-colors"
          />
        </div>

        {/* Email input component wrapper layer group */}
        <div className="space-y-1.5">
          <label className="block text-[10px] uppercase tracking-wider text-zinc-muted">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 bg-brand-dark border border-white/5 rounded-xl text-sm text-zinc-light placeholder-zinc-muted/50 focus:outline-none focus:border-neon/40 transition-colors"
          />
        </div>

        {/* Message details input component wrapper layer group */}
        <div className="space-y-1.5">
          <label className="block text-[10px] uppercase tracking-wider text-zinc-muted">
            Message Content
          </label>
          <textarea
            rows="4"
            required
            placeholder="Write your project details or recruitment inquiry here..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 bg-brand-dark border border-white/5 rounded-xl text-sm text-zinc-light placeholder-zinc-muted/50 focus:outline-none focus:border-neon/40 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-2 flex items-center justify-center gap-2 bg-white hover:bg-neon text-black font-extrabold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-all duration-300 shadow-lg shadow-white/5 active:scale-[0.98]"
        >
          Send Secure Message <Send size={14} />
        </button>
      </form>
    </div>
  );
};

export default SecureContactForm;
