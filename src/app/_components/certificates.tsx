"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import {
  Lightbulb, PenTool, Layers, Brain, Network, FlaskConical,
} from "lucide-react";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type Skill = {
  title: string;
  desc: string;
  icon: React.ElementType;
  accent: "orange" | "purple";
};

const skills: Skill[] = [
  {
    title: "Ui / Ux Research",
    desc: "We test your product with real users to identify pain points. This feedback helps us optimize designs for better user experience.",
    icon: Lightbulb,
    accent: "orange",
  },
  {
    title: "MVP Ui Design",
    desc: "We design functional MVPs focused on core features. We ensure quick validation of your idea with minimal investment.",
    icon: PenTool,
    accent: "purple",
  },
  {
    title: "Wireframing & Prototyping",
    desc: "We create low-fidelity wireframes and high-fidelity prototypes to visualize your ideas and helps refine user interactions early on.",
    icon: Layers,
    accent: "orange",
  },
  {
    title: "Problem Solving",
    desc: "I identify real user challenges and turn them into practical, user friendly digital solutions through research and strategy.",
    icon: Brain,
    accent: "purple",
  },
  {
    title: "Information Architecture",
    desc: "I organize content and structure information clearly so users can navigate products easily and find what they need.",
    icon: Network,
    accent: "orange",
  },
  {
    title: "Usability Testing",
    desc: "I test designs with real users to identify pain points and ensure the final product delivers a smooth and effective experience.",
    icon: FlaskConical,
    accent: "purple",
  },
];

const accentConfig = {
  orange: {
    iconBg: "bg-gradient-to-br from-orange-400 to-orange-600",
    border: "border-b-orange-500",
    glow: "group-hover:shadow-orange-100",
    ring: "ring-orange-100",
  },
  purple: {
    iconBg: "bg-gradient-to-br from-violet-400 to-violet-600",
    border: "border-b-violet-500",
    glow: "group-hover:shadow-violet-100",
    ring: "ring-violet-100",
  },
};

const GAP = 24;
const AUTO_DELAY = 3000; // ms between slides

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visible, setVisible] = useState(3);
  const [paused, setPaused] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const dragStartX = useRef(0);
  const dragOffset = useRef(0);
  const isDragging = useRef(false);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIndex = Math.max(0, skills.length - visible);

  const updateLayout = useCallback(() => {
    if (!outerRef.current) return;
    const w = outerRef.current.offsetWidth;
    const vis = w >= 900 ? 3 : w >= 580 ? 2 : 1;
    setVisible(vis);
    setCardWidth((w - GAP * (vis - 1)) / vis);
  }, []);

  useEffect(() => {
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, [updateLayout]);

  const go = useCallback(
    (idx: number, max: number) => {
      setCurrent(Math.max(0, Math.min(idx, max)));
    },
    []
  );

  // Auto-slide
  useEffect(() => {
    if (paused || maxIndex === 0) return;
    autoTimer.current = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, AUTO_DELAY);
    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current);
    };
  }, [paused, maxIndex]);

  const resetAuto = () => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    if (!paused && maxIndex > 0) {
      autoTimer.current = setInterval(() => {
        setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, AUTO_DELAY);
    }
  };

  const handleGo = (idx: number) => {
    go(idx, maxIndex);
    resetAuto();
  };

  // Mouse drag
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragOffset.current = 0;
    setPaused(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    dragOffset.current = e.clientX - dragStartX.current;
  };
  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragOffset.current < -60) handleGo(current + 1);
    else if (dragOffset.current > 60) handleGo(current - 1);
    dragOffset.current = 0;
    setPaused(false);
  };

  // Touch
  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    dragOffset.current = 0;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    dragOffset.current = e.changedTouches[0].clientX - dragStartX.current;
    if (dragOffset.current < -50) handleGo(current + 1);
    else if (dragOffset.current > 50) handleGo(current - 1);
    dragOffset.current = 0;
    setPaused(false);
  };

  const offset = current * (cardWidth + GAP);

  return (
    <section
      id="certificates"
      className="site-section w-full bg-gradient-to-br from-pink-50/60 via-white to-green-50/40 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          className="mb-10 flex flex-col items-center gap-3 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <h2 className="site-heading">
            My <span className="text-orange-500 italic">Certificates</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-violet-500" />
        </motion.div>

        {/* Slider track */}
        <div
          ref={outerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: -offset }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              const config = accentConfig[skill.accent];
              return (
                <div
                  key={i}
                  style={{ flex: `0 0 ${cardWidth}px`, minWidth: 0 }}
                  className="group"
                >
                  <div
                    className={`
                      relative flex flex-col h-full rounded-2xl bg-white dark:bg-slate-900
                      border border-slate-100 dark:border-slate-700 border-b-4 ${config.border}
                      shadow-md hover:shadow-xl ${config.glow}
                      transition-shadow duration-300 p-5 md:p-6
                      overflow-hidden
                    `}
                  >
                    <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 ${config.iconBg}`} />
                    <div
                      className={`
                        inline-flex items-center justify-center
                        w-14 h-14 rounded-2xl mb-6
                        ${config.iconBg} ring-4 ${config.ring} shadow-lg
                      `}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed flex-1">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => handleGo(current - 1)}
            disabled={current === 0}
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition disabled:opacity-30 disabled:cursor-default"
            aria-label="Previous"
          >
            ←
          </button>

          {/* Dots with progress ring */}
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleGo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 bg-orange-500"
                    : "w-2 bg-slate-300 dark:bg-slate-600"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => handleGo(current + 1)}
            disabled={current >= maxIndex}
            className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition disabled:opacity-30 disabled:cursor-default"
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;