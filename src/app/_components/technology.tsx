"use client";

import { motion } from "framer-motion";
import { 
  SiFigma, 
  SiJira, 
  SiDiscord 
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";

type Tool = {
  name: string;
  value: number;
  color: string;
  bgColor: string;
  barBg: string;
  icon: React.ReactNode;
};

const GoogleWorkspaceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full">
    <path d="M2.25 4.5A2.25 2.25 0 0 1 4.5 2.25h15A2.25 2.25 0 0 1 21.75 4.5v15A2.25 2.25 0 0 1 19.5 21.75h-15A2.25 2.25 0 0 1 2.25 19.5v-15z" fill="#fff" />
    <path d="M6 6h4v4H6V6zm8 0h4v4h-4V6zM6 14h4v4H6v-4zm8 0h4v4h-4v-4z" fill="#34A853" />
    <path d="M6 6h4v4H6V6z" fill="#4285F4" />
    <path d="M14 6h4v4h-4V6z" fill="#34A853" />
    <path d="M6 14h4v4H6v-4z" fill="#FBBC05" />
    <path d="M14 14h4v4h-4v-4z" fill="#EA4335" />
  </svg>
);

const JitterIcon = () => (
  <div className="bg-[#8A63E5] w-full h-full rounded-md flex items-center justify-center">
    <span className="text-[10px] font-black text-white leading-none tracking-tighter">Jitter</span>
  </div>
);

const tools: Tool[] = [
  {
    name: "Figma",
    value: 90,
    color: "#FF7639",
    bgColor: "bg-[#FFF5F1]",
    barBg: "bg-[#FFE0D3]",
    icon: <SiFigma className="w-7 h-7 text-[#F24E1E]" />,
  },
  {
    name: "Photoshop",
    value: 75,
    color: "#31A8FF",
    bgColor: "bg-[#F0F9FF]",
    barBg: "bg-[#D1EDFF]",
    icon: <TbBrandAdobePhotoshop className="w-7 h-7 text-[#31A8FF]" />,
  },
  {
    name: "Jitter",
    value: 85,
    color: "#8A63E5",
    bgColor: "bg-[#F5F2FF]",
    barBg: "bg-[#E6DEFF]",
    icon: <JitterIcon />,
  },
  {
    name: "Jira",
    value: 80,
    color: "#0052CC",
    bgColor: "bg-[#F0F5FF]",
    barBg: "bg-[#D1E0FF]",
    icon: <SiJira className="w-7 h-7 text-[#0052CC]" />,
  },
  {
    name: "Google Workspace",
    value: 70,
    color: "#34A853",
    bgColor: "bg-[#F1F9F3]",
    barBg: "bg-[#D9EFE0]",
    icon: <GoogleWorkspaceIcon />,
  },
  {
    name: "Discord",
    value: 78,
    color: "#5865F2",
    bgColor: "bg-[#F1F3FF]",
    barBg: "bg-[#DDE1FF]",
    icon: <SiDiscord className="w-7 h-7 text-[#5865F2]" />,
  },
];

export default function TechnologySection() {
  return (
    <section id="technology" className="relative w-full py-24 overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 opacity-20 pointer-events-none hidden lg:block">
         <svg viewBox="0 0 100 200" className="w-full h-full text-[#FF7639]">
            <path d="M10 10 Q 50 50 10 90 T 10 170" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
         </svg>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-slate-950 dark:text-white"
          >
            Tools & <span className="text-[#FF7639]">Technology</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#8A63E5]/30 mx-auto mt-4 rounded-full relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[#8A63E5] w-1/2" />
          </motion.div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl p-6 ${tool.bgColor} border border-gray-50 dark:border-slate-700 shadow-sm dark:bg-slate-900/90 overflow-hidden group`}
            >
              {/* Left Side Accent Border */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-full"
                style={{ backgroundColor: tool.color }}
              />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 shadow-sm flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                   {tool.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tool.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className="space-y-3">
                <div className={`h-3 w-full rounded-full ${tool.barBg} overflow-hidden relative`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + index * 0.1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: tool.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}