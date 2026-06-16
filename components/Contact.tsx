"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/profile";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    accent: "from-indigo-500/30 to-violet-500/30"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dvallur2",
    href: profile.linkedin,
    icon: Linkedin,
    accent: "from-blue-500/30 to-cyan-500/30"
  },
  {
    label: "GitHub",
    value: `github.com/${profile.githubUsername}`,
    href: profile.github,
    icon: Github,
    accent: "from-violet-500/30 to-fuchsia-500/30"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something."
          description="Best reached by email. New Grad 2026 — open to full-time ML Engineer, AI Engineer, or Applied Scientist roles in the US (OPT available, Summer/Fall 2026)."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group relative overflow-hidden"
              >
                <div className="glass glass-hover relative flex items-center justify-between p-6">
                  <div
                    className={`absolute inset-0 -z-10 bg-gradient-to-br ${c.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                    aria-hidden
                  />
                  <div className="flex items-center gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors group-hover:border-indigo-400/40">
                      <Icon className="h-5 w-5 text-indigo-300" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-ink-400">{c.label}</div>
                      <div className="font-medium text-white">{c.value}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="glass-strong mt-6 flex flex-col items-start justify-between gap-4 p-6 md:flex-row md:items-center"
        >
          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-violet-300" />
              {profile.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-ink-500" />
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-violet-300" />
              {profile.phone}
            </span>
          </div>
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail className="h-4 w-4" />
            Say hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
