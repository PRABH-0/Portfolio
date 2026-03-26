"use client";

import { MapPin, Mail } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.4 5.4 0 0 0-1.5-3.8 5.4 5.4 0 0 0-.1-3.7s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0c-2.7-1.8-3.9-1.4-3.9-1.4a5.4 5.4 0 0 0-.1 3.7 5.4 5.4 0 0 0-1.5 3.8c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
    <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-5xl mx-auto px-8 pt-32 pb-20 flex flex-col justify-center min-h-[70vh]"
    >
      <div className="flex items-center text-muted tracking-widest text-xs uppercase mb-8 space-x-2">
        <MapPin size={14} />
        <span>India</span>
        {time && (
          <>
            <span className="mx-2">•</span>
            <span>{time}</span>
          </>
        )}
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
        Hi! I am <br className="hidden md:block" /> Prabhjot Singh
      </h1>

      <p className="text-muted text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
        Full Stack Developer with 1+ year of experience building scalable Angular and .NET Web API applications. I design efficient, real-time systems and optimize performance for production-level applications.
      </p>

      <div className="flex items-center space-x-6">
        <button 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-opacity-90 transition-opacity flex items-center space-x-2 cursor-pointer"
        >
          <Mail size={16} />
          <span>Write To Me</span>
        </button>

        <a href="https://github.com/PRABH-0" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">
          <GithubIcon size={24} />
          <span className="sr-only">GitHub</span>
        </a>

        <a href="https://www.linkedin.com/in/prabhjot-singh-008a0a2aa/" target="_blank" rel="noreferrer" className="text-muted hover:text-foreground transition-colors">
          <LinkedinIcon size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
    </motion.section>
  );
}
