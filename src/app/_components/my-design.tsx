"use client";

import { motion } from "framer-motion";
import {
  Search,
  Users,
  Lightbulb,
  PenTool,
  Layers,
  Rocket,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Empathize",
    desc: "Research users, analyze competitors, and define the problem space.",
    icon: <Search className="w-5 h-5 md:w-6 md:h-6" />,
    color: "#FF7639",
  },
  {
    number: "02",
    title: "Discover",
    desc: "Create personas, journey maps, and understand pain points deeply.",
    icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
    color: "#8A63E5",
  },
  {
    number: "03",
    title: "Ideate",
    desc: "Brainstorm solutions, sketch concepts, and explore possibilities.",
    icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />,
    color: "#FF7639",
  },
  {
    number: "04",
    title: "Design",
    desc: "Create wireframes, high-fidelity mockups, and interactive prototypes.",
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" />,
    color: "#8A63E5",
  },
  {
    number: "05",
    title: "Test",
    desc: "Validate with users, iterate based on feedback, and refine solutions.",
    icon: <Layers className="w-5 h-5 md:w-6 md:h-6" />,
    color: "#FF7639",
  },
  {
    number: "06",
    title: "Launch",
    desc: "Ship the product, monitor metrics, and continuously improve.",
    icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />,
    color: "#8A63E5",
  },
];

export default function MyDesignSection() {
  return (
    <section id="case-study" className="pt-10 md:pt-2 pb-2 relative w-full overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        {/* Left Wavy Line */}
        <motion.svg 
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute left-[-40px] top-40 h-[90%] w-64 hidden lg:block" 
          viewBox="0 0 100 1000" 
          fill="none" 
          stroke="#FF7639" 
          strokeWidth="1.5"
        >
          <path d="M50 0 C 100 150 0 300 50 450 C 100 600 0 750 50 900 C 100 1050 0 1200 50 1350" />
        </motion.svg>

        {/* Right Purple Dots */}
        <div 
          className="absolute right-10 top-40 w-48 h-80 opacity-15 hidden lg:block" 
          style={{ 
            backgroundImage: 'radial-gradient(#8A63E5 1.5px, transparent 1.5px)', 
            backgroundSize: '20px 20px' 
          }} 
        />
      </div>

      <div className="site-container container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="site-heading font-poppins text-slate-950 dark:text-white tracking-tight"
          >
            My Design <span className="text-[#FF7639]">Process</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-[3px] w-24 bg-gray-200 dark:bg-slate-800 mx-auto mt-4 rounded-full relative overflow-hidden"
          >
             <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute inset-0 bg-[#8A63E5]"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            A structured, iterative approach that ensures every design decision is intentional and user-validated
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-gray-100 dark:bg-slate-800 -translate-x-1/2"
          />

          <div className="space-y-1">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className="relative grid grid-cols-2 gap-4 items-center py-1 md:py-4">
                  {/* Left Side */}
                  <div className={`flex ${isLeft ? "justify-end pr-5 lg:pr-10" : "justify-start"}`}>
                    {isLeft ? <StepContent step={step} isLeft={isLeft} /> : null}
                  </div>

                  {/* Right Side */}
                  <div className={`flex ${!isLeft ? "justify-start pl-5 md:pl-20" : "justify-end"}`}>
                    {!isLeft ? <StepContent step={step} isLeft={isLeft} /> : null}
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.05 * index }}
                      className="relative"
                    >
                      {/* Outer Ring */}
                      <div 
                        className="absolute inset-[-4px] md:inset-[-6px] rounded-full border-[1.5px] opacity-40 shadow-sm"
                        style={{ borderColor: step.color }}
                      />
                      
                      {/* Node Circle */}
                      <div 
                        className="relative w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white border-[3px] border-white shadow-lg z-10"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
function StepContent({ step, isLeft }: { step: Step, isLeft: boolean }) {
  const alignmentClass = isLeft ? "text-right" : "text-left";
  const animationX = isLeft ? -20 : 20;

  return (
    <motion.div 
      initial={{ opacity: 0, x: animationX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`max-w-xs md:max-w-sm ${alignmentClass} group`}
    >
      <h4 className="text-2xl md:text-3xl font-bold block mb-1 text-slate-950 dark:text-white leading-none">
        {step.number}
      </h4>
      <h3 className="text-lg md:text-xl font-bold mb-2 font-poppins text-slate-900 dark:text-slate-100 group-hover:text-[#FF7639] transition-colors">
        {step.title}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-snug font-medium">
        {step.desc}
      </p>
    </motion.div>
  );
}