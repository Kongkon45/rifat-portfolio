"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedThemeToggler from "@/components/ui/animated-theme-toggler";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "#about" },
  { name: "My Skills", href: "#my-skills" },
  { name: "Case Study's", href: "#case-study" },
  { name: "Live Project", href: "#project" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme =
      storedTheme === "dark" || storedTheme === "light"
        ? (storedTheme as "light" | "dark")
        : prefersDark
          ? "dark"
          : "light";
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="sticky top-3 z-50 w-full flex justify-center mt-4 px-3"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="site-container w-full max-w-6xl bg-gradient-to-r from-orange-400 to-orange-500 dark:bg-slate-950/95 rounded-full px-6 py-3 flex items-center justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 relative backdrop-blur-sm border border-white/10 dark:border-slate-700 text-slate-950 dark:text-slate-100">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/">
            <Image
              src="/assets/images/logo.png"
              alt="hero image"
              width={100}
              height={100}
              className="w-[70px] h-[54px] object-contain relative z-10"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center gap-8 text-slate-950 dark:text-white font-medium"
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className="relative group text-slate-950 dark:text-white text-sm font-semibold"
              >
                {item.name}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-white rounded-full group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex items-center gap-4"
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
            <Link href="#contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="h-10 hidden md:block bg-purple-500 hover:bg-purple-600 text-white rounded-full px-7 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Hire Me
              </Button>
            </motion.div>
          </Link>
          {mounted && <AnimatedThemeToggler theme={theme} onToggle={toggleTheme} />}

        

          {/* Mobile Toggle */}
          <motion.button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900 dark:text-slate-100 bg-white/10 dark:bg-slate-800/80 p-2 rounded-full hover:bg-white/20 dark:hover:bg-slate-700/70 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </motion.div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            className="absolute top-[70px] left-3 right-3 bg-white/95 dark:bg-slate-900/95 rounded-2xl p-6 flex flex-col gap-4 text-slate-900 dark:text-slate-100 md:hidden shadow-lg backdrop-blur-sm border border-slate-200/70 dark:border-slate-700"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-950 dark:text-slate-100 text-sm font-semibold pb-3 border-b border-slate-200/70 dark:border-slate-700 hover:text-purple-700 dark:hover:text-purple-200 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="#contact">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white rounded-full mt-2 font-semibold shadow-lg">
                  Hire Me
                </Button>
              </Link>
            </motion.div>

          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
