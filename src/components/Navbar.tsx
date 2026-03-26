"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show name when scrolled down 300px (roughly past the top section)
      if (window.scrollY > 300) {
        setShowName(true);
      } else {
        setShowName(false);
      }
    };

    // Trigger once on load in case the user refreshes midway down the page
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-[#222]">
      <div className="w-full flex justify-between py-6 px-8 max-w-5xl mx-auto items-center text-sm tracking-wide text-muted">
        
        {/* Left Side: Logo / Name that slides and fades on scroll */}
        <div className="relative h-8 w-48 flex items-center overflow-hidden">
          
          {/* Default Title - Slides UP and fades out when scrolling down */}
          <div 
            className={`absolute top-0 left-0 transition-all duration-500 ease-in-out flex items-center h-full ${
              showName ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
            }`}
          >
            <span className="text-xl font-bold tracking-tight text-foreground cursor-default">
              Portfolio
            </span>
          </div>

          {/* Name - Slides UP to center and fades in when scrolling down */}
          <div 
            className={`absolute top-0 left-0 transition-all duration-500 ease-in-out flex items-center h-full ${
              showName ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
            }`}
          >
           <button onClick={scrollToTop} className="text-xl font-bold tracking-tight text-foreground cursor-pointer hover:text-[#fff] transition-colors">
             Prabhjot Singh
           </button>
          </div>
        </div>

        {/* Right Side: Links */}
        <nav className="flex items-center space-x-6">
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="hover:text-foreground transition-colors duration-200"
          >
            Home
          </Link>
          <Link 
            href="/PrabhjotResume2026.pdf" 
            target="_blank" 
            className="hover:text-foreground transition-colors duration-200"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
