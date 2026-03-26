"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || data.message || "Failed to send email");
      }
    } catch (error: any) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message || "An unexpected error occurred while sending the message.");
    }
  };

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-8 py-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Let's work together</h2>
        <p className="text-muted mb-12 text-sm tracking-wide">Interested in working together? Send me a message.</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 max-w-2xl">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm text-muted tracking-wide">Name</label>
            <input 
              type="text" 
              id="name" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your name"
              className="bg-[#0d0d0d]/60 backdrop-blur-md border border-[#222] text-foreground text-sm p-4 outline-none focus:border-[#555] transition-colors rounded-none placeholder:text-[#444]"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm text-muted tracking-wide">Email</label>
            <input 
              type="email" 
              id="email" 
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="Enter your email"
              className="bg-[#0d0d0d]/60 backdrop-blur-md border border-[#222] text-foreground text-sm p-4 outline-none focus:border-[#555] transition-colors rounded-none placeholder:text-[#444]"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm text-muted tracking-wide">Message</label>
            <textarea 
              id="message" 
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message..."
              className="bg-[#0d0d0d]/60 backdrop-blur-md border border-[#222] text-foreground text-sm p-4 outline-none focus:border-[#555] transition-colors rounded-none placeholder:text-[#444] resize-y"
            />
          </div>

          <button 
            type="submit" 
            disabled={status === "loading"}
            className="self-start px-8 py-4 bg-foreground text-background text-sm font-medium hover:bg-opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-[#38a169] text-sm mt-4 tracking-wide">Your message has been sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-[#e53e3e] text-sm mt-4 tracking-wide">{errorMessage}</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
