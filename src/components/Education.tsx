"use client";

import { motion } from "framer-motion";

export default function Education() {
  const education = [
    {
      degree: "Master of Computer Science (M.Sc)",
      institution: "Maharaja Ganga Singh University",
      date: "2025 – Present"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Maharaja Ganga Singh University",
      date: "2022 – 2025"
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
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">Education</h2>
        
        <div className="relative">
          {/* Continuous Vertical Line */}
          <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-[1px] bg-[#222]"></div>

          <div className="space-y-16">
            {education.map((edu, index) => (
              <div key={index} className="relative flex flex-col md:flex-row group">
                
                {/* Timeline Dot */}
                <div className="absolute left-[-3.5px] md:left-[calc(25%-3.5px)] top-1.5 w-2 h-2 bg-[#555] rounded-none z-10 transition-colors group-hover:bg-foreground"></div>

                {/* Date Side */}
                <div className="md:w-1/4 mb-4 md:mb-0 pl-8 md:pl-0 md:pr-12 md:text-right shrink-0">
                  <span className="text-sm text-muted tracking-wide">{edu.date}</span>
                </div>
                
                {/* Content Side */}
                <div className="md:w-3/4 pl-8 md:pl-12 pb-2">
                  <h3 className="text-lg font-medium text-foreground mb-1">{edu.degree}</h3>
                  <h4 className="text-md text-muted">{edu.institution}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
