"use client";

import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue, Variants } from "framer-motion";

const headingVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// If you have a real `useProject` hook, remove the fallback below and import it.
// import { useProject } from "@/hooks/ApiCall";

// Project type definition
interface ProjectImage {
  url: string;
}

interface Project {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: ProjectImage[];
  liveLink: string;
}

interface ProjectsResponse {
  data: Project[];
}

interface ProjectsHookReturn {
  data: ProjectsResponse | null;
  isLoading: boolean;
  isError: boolean;
}

// Fallback projects data (used if no hook is available)
const projectsFallback: Project[] = [
  {
    _id: "1",
    title: "The Social Chamber",
    subtitle: "Room Booking Platform",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    liveLink: "#",
  },
   {
    _id: "2",
    title: "The Social Chamber",
    subtitle: "Room Booking Platform",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    liveLink: "#",
  },
   {
    _id: "3",
    title: "The Social Chamber",
    subtitle: "Room Booking Platform",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: [{ url: "/assets/images/hero_bg.png" }],
    liveLink: "#",
  },
];

// Simple fallback hook if your real hook isn't present in the workspace.
function useProjectFallback(): ProjectsHookReturn {
  return { data: { data: projectsFallback }, isLoading: false, isError: false };
}

const ProjectCard = ({ project, index, progress, totalProjects }: { project: Project; index: number; progress: MotionValue<number>; totalProjects: number }): JSX.Element => {

  const start = index * (1 / totalProjects);
  const targetScale = 1 - (totalProjects - index) * 0.04;
  
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div id="project" className="h-[65vh] w-full flex items-center justify-center sticky top-0">
      <motion.div
        style={{
          scale,
          top: `calc(5vh + ${index * 20}px)`,
        }}
        className="relative w-full container origin-top px-4"
      >
        <Card className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 rounded-[2rem] overflow-hidden flex flex-col md:flex-row h-fit md:h-[340px] px-6 shadow-lg dark:shadow-2xl ">
          {/* Image */}
          <div className="relative w-full md:w-1/2 overflow-hidden rounded-[1.3rem] h-[150px] md:min-h-[300px] bg-slate-50 dark:bg-slate-800">
            <Link href={`/project/${project._id}`}>
              <Image
                src={project.image?.[0]?.url || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain group-hover:scale-110 transition-transform duration-700"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="flex flex-col flex-1 p-1 md:p-6 lg:p-8 xl:p-10 text-slate-900 dark:text-slate-100 ">
            <CardHeader className="p-0 mb-5">
              <CardTitle className="text-slate-900 dark:text-white text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </CardTitle>
              <CardDescription className="text-slate-600 dark:text-slate-300 line-clamp-2 md:line-clamp-4 text-sm md:text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0 mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies?.slice(0, 4).map((tech: string, i: number) => (
                  <span key={i} className="px-3 py-1 text-[10px] uppercase font-bold tracking-widest bg-slate-100 dark:bg-white/5 text-blue-600 dark:text-blue-400 border border-slate-300 dark:border-white/10 rounded-lg">
                    {tech.trim()}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-1 md:pt-4">
                <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-500 hover:to-teal-400 border-none rounded-xl h-10 md:h-12 shadow-lg shadow-blue-500/10">
                  <a href={project.liveLink || "#"} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live
                  </a>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default function ProjectsSection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { data, isLoading, isError }: ProjectsHookReturn = useProjectFallback();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const projects: Project[] = data?.data || [];

  return (
    <section
      ref={containerRef}
      id="projects"
      className="site-section relative bg-white dark:bg-[#030712] w-full"
    >

      
     
        {/* Heading */}
        <motion.div
          className="mb-6 flex flex-col items-center gap-3 text-center pt-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
        >
          <h2 className="site-heading">
            Featured <span className="text-orange-500 italic">Projects</span>
          </h2>
          <div className="mt-2 h-1 w-20 rounded-full bg-gradient-to-r from-orange-400 to-violet-500" />
        </motion.div>

      <div className="relative w-full h-fit">
        {isLoading ? (
          <div className="h-screen flex items-center justify-center px-8">
            <div className="h-[480px] w-full max-w-5xl bg-white/5 rounded-[2.5rem] animate-pulse" />
          </div>
        ) : isError ? (
          <div className="h-screen flex items-center justify-center text-red-400">
            Unable to load projects.
          </div>
        ) : (
          <div className="flex flex-col items-center ">
            {projects?.map((project: Project, index: number) => (
              <ProjectCard
                key={project._id || index}
                index={index}
                project={project}
                progress={scrollYProgress}
                totalProjects={projects.length}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
