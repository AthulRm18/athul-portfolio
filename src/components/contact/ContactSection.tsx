"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { transition } from "@/lib/motion";

const WEB3FORMS_KEY = "1ecec8e7-6d75-41d4-9c4b-803d8299fc78";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `New message from ${formData.name}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        
        {/* We use the same card style as the Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition.medium}
          className="w-full bg-[#0a0a0a] border border-[#222] rounded-xl overflow-hidden"
        >
          {/* Top striped divider (optional, to match aesthetic if desired, or just header) */}
          <div className="h-6 w-full" style={{ backgroundImage: "repeating-linear-gradient(-45deg, #1f1f1f, #1f1f1f 2px, transparent 2px, transparent 8px)" }} />
          
          <div className="p-6 md:p-8">
            <p className="text-[12px] font-sans font-bold tracking-[0.1em] text-white/60 mb-8 uppercase">
              CONTACT ME
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[12px] font-sans font-bold tracking-[0.05em] text-white/60 mb-2 uppercase"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-[#222] rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[12px] font-sans font-bold tracking-[0.05em] text-white/60 mb-2 uppercase"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john.doe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-[#222] rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[12px] font-sans font-bold tracking-[0.05em] text-white/60 mb-2 uppercase"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#111111] border border-[#222] rounded-xl px-4 py-3.5 text-sm font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-all duration-300 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="mailto:athumrm518@gmail.com"
                  className="flex-1 group flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#222] hover:bg-[#333] border border-[#333] text-white transition-all duration-300"
                >
                  <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                    <line x1="6" x2="6" y1="2" y2="4" />
                    <line x1="10" x2="10" y1="2" y2="4" />
                    <line x1="14" x2="14" y1="2" y2="4" />
                  </svg>
                  Jump on a call
                </a>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className={`
                    flex-1 group flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer
                    ${status === "sent"
                      ? "bg-green-500/20 border border-green-500/30 text-green-400"
                      : status === "error"
                        ? "bg-red-500/20 border border-red-500/30 text-red-400"
                        : "bg-[#222] hover:bg-[#333] border border-[#333] text-white"
                    }
                    disabled:opacity-60 disabled:cursor-not-allowed
                  `}
                >
                  {status === "sending" && (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      <svg className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Send Message
                    </>
                  )}
                  {status === "sent" && "Message Sent!"}
                  {status === "error" && "Error — try again"}
                </button>
              </div>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
