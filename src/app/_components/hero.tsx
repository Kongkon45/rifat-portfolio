"use client"

import { Button } from "@/components/ui/button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaDribbble,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
// import { BsInstagram } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Download } from "lucide-react";

const iconList = [
  { icon: <FaFacebookF key="fb" />, label: "Facebook", bgColor: "#1877F2", hoverBgColor: "#155db4" },
  { icon: <IoLogoWhatsapp key="wa" />, label: "WhatsApp", bgColor: "#25D366", hoverBgColor: "#1eae56" },
  { icon: <FaLinkedinIn key="li" />, label: "LinkedIn", bgColor: "#0A66C2", hoverBgColor: "#084fa1" },
  // { icon: <BsInstagram key="ig" />, label: "Instagram", bgColor: "#E4405F", hoverBgColor: "#c81e58" },
  { icon: <FaDribbble key="db" />, label: "Dribbble", bgColor: "#EA4C89", hoverBgColor: "#d93d78" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const badgeFromTop = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const iconBingHover = {
  scale: 1.15,
  rotate: [0, -10, 10, -5, 5, 0],
  transition: {
    duration: 0.6,
    ease: "easeInOut",
    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
  },
};

const buttonHover = {
  scale: 1.05,
  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)",
  transition: { duration: 0.3, ease: "easeOut" },
};

const roles = ["UI/UX Designer", "UX Researcher", "Problem Solver", "Website Designer"];

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < role.length) {
          setCurrentText(role.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <motion.section
      className="w-full flex justify-center pt-6 md:pt-8 px-4 relative pb-24 md:pb-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div className="space-y-5" variants={fadeUp}>
          <motion.div
            className="inline-block px-4 py-1 bg-green-100 text-green-600 text-xs rounded-full shadow-lg dark:bg-emerald-900 dark:text-emerald-200"
            variants={badgeFromTop}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 25px rgba(34, 197, 94, 0.3)",
              transition: { duration: 0.3 }
            }}
          >
            ✨ Available for freelance
          </motion.div>

          <motion.p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl lg:text-2xl font-semibold leading-normal" variants={fadeUp}>
            Hi, I am
          </motion.p>

          <motion.h1 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white" variants={fadeUp}>
            Rifat Hossain
          </motion.h1>

          <motion.h2
            className="h-[52px] text-4xl md:text-5xl lg:text-6xl font-bold leading-normal bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text"
            variants={fadeUp}
          >
            {currentText}
            <span className={`inline-block w-1 h-full bg-orange-500 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
          </motion.h2>

          {/* Social */}
          <motion.div className="flex gap-4 pt-2" variants={fadeUp}>
            {iconList.map((item) => (
              <motion.div
                key={item.label}
                whileHover={iconBingHover}
                whileTap={{ scale: 0.95 }}
                className="rounded-full size-12 lg:size-14 relative shrink-0 animate-[design-process-border-blink_1.6s_ease-in-out_infinite]"
                style={{
                  border: `2px solid ${item.bgColor}`,
                }}
              >
                <motion.button
                  aria-label={item.label}
                  className="absolute inset-1 lg:inset-[5px] rounded-full shadow-md flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: `linear-gradient(to bottom, ${item.bgColor}, #8b5cf6)`,
                  }}
                  type="button"
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.boxShadow = `0 0 20px ${item.bgColor}60, 0 10px 20px rgba(0, 0, 0, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget as HTMLButtonElement;
                    btn.style.boxShadow = "0px 10px 15px 0px rgba(0,0,0,0.1), 0px 4px 6px 0px rgba(0,0,0,0.1)";
                  }}
                >
                  {item.icon}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div className="flex flex-wrap gap-4 pt-3" variants={fadeUp}>
            <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
              <Link href="#contact">
              <Button className="bg-orange-500 hover:bg-orange-600 rounded-md px-8 h-11 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                Hire Me
              </Button>
              </Link>
            </motion.div>

            <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-md px-8 h-11 font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Resume <Download className="w-6 h-6 "/>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="relative flex justify-center"
          variants={fadeUp}
          whileHover={{
            y: -10,
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-purple-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Image
            src="/assets/images/hero_bg.png"
            alt="hero image"
            width={1000}
            height={1000}
            className="w-[280px] sm:w-[330px] md:w-[420px] h-auto object-contain relative z-10 drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Ultra-Premium Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
        className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <div className="relative group flex flex-col items-center">
          {/* Outer Glowing Mouse Body */}
          <div className="relative w-[30px] h-[54px] md:w-[32px] md:h-[58px] border-[1px] border-slate-200/80 rounded-full flex justify-center p-[3px] bg-white/10 backdrop-blur-[2px]">
            {/* Inner "Liquid" Scroll Track */}
            <div className="w-full h-full rounded-full bg-slate-50/50 relative overflow-hidden">
              <motion.div
                animate={{
                  y: ["-100%", "200%"],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[40%] bg-gradient-to-b from-orange-400 via-orange-500 to-purple-600 rounded-full shadow-[0_0_12px_rgba(249,115,22,0.5)]"
              />
            </div>
            
            {/* Subtle Reflection */}
            <div className="absolute top-[15%] left-[20%] w-[4px] h-[10px] bg-white opacity-20 rounded-full blur-[1px]" />
          </div>

          {/* Staggered Pulsing Chevrons */}
          <div className="mt-4 flex flex-col items-center">
            {[0, 1].map((i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: [0, 6, 0],
                  opacity: [0.1, 0.6, 0.1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.4,
                  ease: "easeInOut" 
                }}
                className="text-orange-500/60"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={i === 1 ? "-mt-3" : ""}>
                  <path d="M7 10l5 5 5-5" />
                </svg>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimalist Text */}
        <motion.span 
          animate={{ opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="mt-1 text-[7px] md:text-[8px] font-black tracking-[0.8em] text-slate-400 uppercase select-none"
        >
          Explore More
        </motion.span>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;