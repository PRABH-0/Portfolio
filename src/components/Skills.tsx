"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Backend",
      skills: ["C#", "Java", "Python", ".NET 8", "ASP.NET Core", "C++", "Entity Framework Core"]
    },
    {
      title: "Frontend",
      skills: ["Angular", "React", "TypeScript", "RxJS", "HTML5", "CSS3"]
    },
    {
      title: "Databases",
      skills: ["SQL Server", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "Azure", "Docker", "Supabase", "CI/CD"]
    },
    {
      title: "Methodologies & Testing",
      skills: ["Scrum", "SDLC", "Postman"]
    }
  ];

  return (
    <section className="w-full py-20 pb-32">
      <div className="max-w-5xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="flex flex-col border border-[#222] bg-[#0d0d0d]/60 backdrop-blur-md p-8 hover:border-[#444] transition-colors"
              >
                <h3 className="text-sm tracking-widest uppercase text-muted mb-8 font-medium">
                  {category.title}
                </h3>
                <ul className="flex flex-col space-y-4 flex-grow">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center text-foreground text-sm tracking-wide">
                      <span className="w-1.5 h-1.5 bg-muted mr-4 rounded-none"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
