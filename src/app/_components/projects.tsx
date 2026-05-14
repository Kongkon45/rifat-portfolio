"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "The Social Chamber",
    subtitle: "Room Booking Platform",
    description:
      "A responsive booking experience for hospitality brands with smooth room navigation, live availability, and premium user journeys.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    imageLabel: "Private room showcase",
    liveUrl: "#",
    codeUrl: "#",
    accent: "from-orange-500 via-amber-500 to-rose-500",
  },
  {
    title: "The FreelancePM Club",
    subtitle: "Community Portal",
    description:
      "A professional community platform for freelance project managers with membership, resources, and networking tools.",
    tags: ["React", "Dashboard", "UX", "Responsive"],
    imageLabel: "Club dashboard preview",
    liveUrl: "#",
    codeUrl: "#",
    accent: "from-sky-500 via-indigo-600 to-violet-500",
  },
  {
    title: "Lawbie Marketplace",
    subtitle: "Multi-Vendor Platform",
    description:
      "A dynamic marketplace for legal resources, courses, and seller tools built for streamlined discovery and conversion.",
    tags: ["Marketplace", "Stripe", "SEO", "Accessibility"],
    imageLabel: "Legal product library",
    liveUrl: "#",
    codeUrl: "#",
    accent: "from-cyan-500 via-slate-800 to-slate-500",
  },
  {
    title: "Studio Portfolio",
    subtitle: "Design Showcase",
    description:
      "A refined showcase for creative work with polished visuals, case study storytelling, and interactive micro UX.",
    tags: ["Portfolio", "Design", "Animation", "Branding"],
    imageLabel: "Creative case study",
    liveUrl: "/",
    codeUrl: "#",
    accent: "from-fuchsia-500 via-pink-500 to-rose-500",
  },
  {
    title: "Launch Landing",
    subtitle: "Marketing Website",
    description:
      "A conversion-focused landing page with strong CTAs, feature highlights, and a modern product presentation.",
    tags: ["Landing Page", "Conversion", "Copy", "Performance"],
    imageLabel: "Launch experience",
    liveUrl: "#",
    codeUrl: "#",
    accent: "from-emerald-500 via-lime-400 to-yellow-400",
  },
];

const ProjectsSection = () => {
  return (
    <section id="project" className="relative w-full py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-400 mb-3">
            Featured Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Selected <span className="text-orange-400">Work</span>
          </h2>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 shadow-2xl backdrop-blur-sm md:grid-cols-2 ${index % 2 === 1 ? "md:flex-row-reverse md:grid-cols-[0.95fr_1.05fr]" : ""}`}
            >
              <div className="relative min-h-[20rem] overflow-hidden bg-slate-800">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_28%)]" />
                <div className="absolute left-6 top-6 rounded-full bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80">
                  {project.subtitle}
                </div>
                <div className="absolute left-6 bottom-6 right-6 rounded-3xl border border-white/10 bg-black/30 p-5 shadow-2xl">
                  <p className="text-sm text-white/80">{project.imageLabel}</p>
                  <div className="mt-4 h-44 rounded-3xl border border-white/10 bg-white/10" />
                </div>
              </div>

              <div className="p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild variant="outline" className="rounded-full border-white/10 px-6 py-3 text-sm text-white">
                    <a href={project.codeUrl} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  </Button>
                  <Button className="rounded-full bg-orange-500 px-6 py-3 text-sm text-white hover:bg-orange-600">
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
