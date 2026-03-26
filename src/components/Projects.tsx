"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
  </svg>
);

export default function Projects() {
  const projects = [
    {
      name: "Orbit – Visual File Manager",
      description: "Graph-based file system handling large scale nodes with real-time updates.",
      liveUrl: "https://orbit-api-rcpu.onrender.com/",
      sourceUrl: "https://github.com/PRABH-0", // Assuming they have it on github
      features: [
        "Graph-based file system (1000+ nodes)",
        "Real-time updates (<1 second latency)",
        "Secure authentication using Supabase",
        "Improved navigation efficiency by 30%",
        "Fully responsive UI"
      ],
    },
    {
      name: "Snera – Skill-Based Collaboration Platform",
      description: "A platform connecting professionals through multi-parameter skill filtering.",
      liveUrl: "",
      sourceUrl: "",
      features: [
        "Skill matching system with multi-parameter filtering",
        "Real-time chat and collaboration workspace",
        "Kanban task management system",
        "Profile-based user discovery",
        "Backend built with .NET Web API"
      ],
    }
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-8 py-20 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row md:space-x-12 border border-[#222] p-8 hover:border-[#444] transition-colors bg-[#0d0d0d]/60 backdrop-blur-md">
              <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-4">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex space-x-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors flex items-center space-x-2 text-sm">
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors flex items-center space-x-2 text-sm">
                      <GithubIcon size={16} />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="md:w-2/3 md:border-l border-[#222] md:pl-8">
                <ul className="space-y-3">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-muted leading-relaxed text-sm flex items-start">
                      <span className="text-[#444] mr-3 mt-[1px]">›</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
