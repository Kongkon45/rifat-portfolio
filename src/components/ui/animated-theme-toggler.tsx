"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

type AnimatedThemeTogglerProps = {
  theme: "light" | "dark";
  onToggle: () => void;
};

export default function AnimatedThemeToggler({
  theme,
  onToggle,
}: AnimatedThemeTogglerProps) {
  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="relative grid h-12 md:h-14 w-12 md:w-14 place-items-center rounded-full bg-[#ff7a00] shadow-lg"
      whileTap={{ scale: 0.96 }}
      whileHover={{ scale: 1.04 }}
    >
      <motion.span
        className="grid h-9 w-9 place-items-center rounded-full bg-[#e9edf3] text-[#5f6671]"
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.span>
    </motion.button>
  );
}
