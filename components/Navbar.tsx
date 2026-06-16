"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#repos", label: "Repos" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border border-white/10 bg-ink-900/70 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      >
        <a href="#top" className="group flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/30">
            D
          </span>
          <span className="hidden text-sm text-ink-100 transition-colors group-hover:text-white sm:inline">
            {profile.name.split(" ")[0]}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm text-ink-300 transition-colors hover:bg-white/[0.04] hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full p-2 text-ink-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full p-2 text-ink-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-full p-2 text-ink-300 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
