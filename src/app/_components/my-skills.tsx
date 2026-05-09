"use client";
import { motion, Variants } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Layers,
  Brain,
  Network,
  FlaskConical,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

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
    desc: "We create low-fidelity wireframes and high-fidelity prototypes to visualize your ideas and helps refine user interactions and layouts early on.",
    icon: Layers,
    accent: "orange",
  },
  {
    title: "Problem Solving",
    desc: "I identify real user challenges and turn them into practical, user friendly digital solutions through research, strategy, and thoughtful design decisions.",
    icon: Brain,
    accent: "purple",
  },
  {
    title: "Information Architecture",
    desc: "I organize content and structure information in a clear and logical way so users can navigate products easily and find what they need without confusion.",
    icon: Network,
    accent: "orange",
  },
  {
    title: "Usability Testing",
    desc: "I test designs with real users to identify pain points, improve functionality, and ensure the final product delivers a smooth and effective experience.",
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

const MySkillsSection = () => {
  return (
    <section
      id="my-skills"
      className="w-full bg-gradient-to-br from-pink-50/60 via-white to-green-50/40 py-24 px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          className="mb-16 flex flex-col items-center gap-3 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My{" "}
            <span className="text-orange-500 italic">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-violet-500" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            const config = accentConfig[skill.accent];
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group"
              >
                <div
                  className={`
                    relative flex flex-col h-full rounded-2xl bg-white
                    border border-slate-100 border-b-4 ${config.border}
                    shadow-md hover:shadow-xl ${config.glow}
                    transition-shadow duration-300 p-7
                    overflow-hidden
                  `}
                >
                  {/* Subtle bg decor */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-5 ${config.iconBg}`} />

                  {/* Icon */}
                  <div
                    className={`
                      inline-flex items-center justify-center
                      w-14 h-14 rounded-2xl mb-6
                      ${config.iconBg}
                      ring-4 ${config.ring}
                      shadow-lg
                    `}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {skill.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default MySkillsSection;