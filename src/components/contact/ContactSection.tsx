"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { transition } from "@/lib/motion";
import { site } from "@/lib/data/site";

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
    <section id="contact" className="py-24 md:py-32 scroll-mt-24 border-t border-border">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition.medium}
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-dim mb-5">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-[1.1] mb-5">
            Say hello.
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-sm mb-10">
            If something I built caught your attention, or you just want to talk
            about an idea — drop me a message.
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {[
              { label: "GitHub", href: site.github },
              { label: "LinkedIn", href: site.linkedin },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-3 border-b border-border text-sm text-muted hover:text-fg transition-colors duration-300"
              >
                <span className="font-mono">{link.label}</span>
                <span
                  className="text-dim group-hover:text-fg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  aria-hidden
                >
                  ↗
                </span>
              </a>
            ))}
            <p className="text-xs font-mono text-dim mt-4">India</p>
          </div>
        </motion.div>

        {/* Right — contact form */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition.medium, delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-[11px] font-mono uppercase tracking-[0.22em] text-accent mb-3"
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
                className="w-full bg-surface-elevated/50 border border-border rounded-lg px-4 py-3.5 text-sm text-fg placeholder:text-dim/60 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-[11px] font-mono uppercase tracking-[0.22em] text-accent mb-3"
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
                className="w-full bg-surface-elevated/50 border border-border rounded-lg px-4 py-3.5 text-sm text-fg placeholder:text-dim/60 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-[11px] font-mono uppercase tracking-[0.22em] text-accent mb-3"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-surface-elevated/50 border border-border rounded-lg px-4 py-3.5 text-sm text-fg placeholder:text-dim/60 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
              />
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`
                group flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-lg font-medium text-sm transition-all duration-300 cursor-pointer
                ${status === "sent"
                  ? "bg-green-500/20 border border-green-500/30 text-green-400"
                  : status === "error"
                    ? "bg-red-500/20 border border-red-500/30 text-red-400"
                    : "bg-surface-elevated border border-border hover:border-accent/40 hover:bg-accent/10 text-fg"
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
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                  </svg>
                  Send Message
                </>
              )}
              {status === "sent" && (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Message Sent!
                </>
              )}
              {status === "error" && (
                <>
                  Something went wrong — try again
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
