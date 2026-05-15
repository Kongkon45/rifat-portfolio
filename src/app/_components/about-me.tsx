"use client"
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Coffee, Zap, Users, Palette, Folder } from "lucide-react";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const floatingAnimation = (delay: number = 0): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

const AboutMeSection = () => {
  const stats = [
    {
      value: "2+",
      label: "Years of Experience",
      color: "text-orange-500",
      bg: "bg-orange-50",
      icon: Zap,
    },
    {
      value: "20+",
      label: "Happy Clients",
      color: "text-violet-600",
      bg: "bg-violet-50",
      icon: Users,
    },
    {
      value: "30+",
      label: "Projects Completed",
      color: "text-orange-500",
      bg: "bg-orange-50",
      icon: Palette,
    },
    {
      value: "100+",
      label: "Cups of Coffee",
      color: "text-violet-600",
      bg: "bg-violet-50",
      icon: Coffee,
    },
  ];

  return (
    <motion.section
      id="about"
      className="w-full bg-white dark:bg-slate-950 py-20 px-6 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Illustration and Text */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          
          {/* Left: Illustration with Floating Elements */}
          <motion.div variants={fadeIn} className="relative flex justify-center items-center">
            {/* Star Background Decor */}
            <div className="absolute -z-10 w-[120%] h-[120%] flex items-center justify-center opacity-10">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-[500px] text-orange-500 fill-current">
                <path d="M100 0L130 70L200 100L130 130L100 200L70 130L0 100L70 70Z" />
              </svg>
            </div>

            {/* Character Image */}
            <div className="relative z-10 w-full max-w-[450px]">
              <Image
                src="/assets/images/about_bg.png"
                alt="About me illustration"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
              
              {/* Floating Icons */}
              <motion.div 
                variants={floatingAnimation(0)}
                initial="initial"
                animate="animate"
                className="absolute top-[10%] left-[5%] p-3 bg-white rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-orange-50 rounded-lg">
                  <span className="text-orange-500 font-bold text-xs">Fi</span>
                </div>
              </motion.div>

              <motion.div 
                variants={floatingAnimation(0.5)}
                initial="initial"
                animate="animate"
                className="absolute top-[15%] right-[5%] p-3 bg-[#001E36] rounded-2xl shadow-xl"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-[#001E36] text-[#00C8FF] font-bold text-xs">
                  Ps
                </div>
              </motion.div>

              <motion.div 
                variants={floatingAnimation(1)}
                initial="initial"
                animate="animate"
                className="absolute bottom-[20%] left-[-5%] p-3 bg-[#6C63FF] rounded-2xl shadow-xl rotate-[-15deg]"
              >
                <div className="text-white text-[10px] font-bold px-2 py-1">Jitter</div>
              </motion.div>

              <motion.div 
                variants={floatingAnimation(1.5)}
                initial="initial"
                animate="animate"
                className="absolute top-[40%] right-[-8%] p-3 bg-white rounded-2xl shadow-xl border border-slate-100"
              >
                <Folder className="w-6 h-6 text-blue-400" />
              </motion.div>

              <motion.div 
                variants={floatingAnimation(2)}
                initial="initial"
                animate="animate"
                className="absolute bottom-[10%] right-[10%] p-3 bg-white rounded-2xl shadow-xl border border-slate-100"
              >
                <div className="flex flex-col gap-1">
                  <div className="w-6 h-2 bg-red-400 rounded-full" />
                  <div className="w-6 h-2 bg-green-400 rounded-full" />
                  <div className="w-6 h-2 bg-yellow-400 rounded-full" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div variants={fadeIn} className="space-y-8">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white">
                About <span className="text-orange-500">Me</span>
              </h2>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-500/50 to-violet-500/50 rounded-full" />
            </div>

            <div className="bg-[#FFF8F6] dark:bg-slate-900 border border-orange-100/50 dark:border-slate-700 rounded-[40px] p-8 md:p-12 shadow-sm">
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed md:text-xl">
                I&apos;m a passionate UI/UX Designer who solves real-world problems through user-centered design. I focus on creating simple, intuitive, and visually engaging digital experiences. By understanding user behavior and business goals, I design solutions that not only look good but also deliver meaningful results. I&apos;m always exploring new ideas and refining my process to create better, more impactful designs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Stats Grid */}
        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index} 
                variants={fadeIn}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className={`rounded-[32px] border-none ${item.bg} shadow-sm overflow-hidden dark:bg-slate-900`}>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full bg-white shadow-sm mb-6 ${item.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className={`text-4xl font-bold mb-2 ${item.color}`}>
                      {item.value}
                    </h3>
                    <p className="text-slate-600 font-medium">
                      {item.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutMeSection;
