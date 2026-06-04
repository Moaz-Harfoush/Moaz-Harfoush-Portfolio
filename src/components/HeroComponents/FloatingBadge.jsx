import { motion } from "motion/react";

const FloatingBadge = ({ text, color, position, duration }) => {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute ${position} bg-black/80 border border-zinc-deep text-zinc-light px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md will-change-transform transform-gpu`}
    >
      <span className={`w-1.5 h-1.5 ${color} rounded-full`} /> {text}
    </motion.div>
  );
};

export default FloatingBadge;
