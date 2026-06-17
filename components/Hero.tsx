"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin, Sparkles, Cpu } from "lucide-react";
import { profile } from "@/lib/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" }
  })
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Glow blobs */}
      <div
        className="blob -left-32 top-10 h-[420px] w-[420px] bg-indigo-600 animate-blob"
        aria-hidden
      />
      <div
        className="blob -right-32 top-40 h-[480px] w-[480px] bg-violet-600 animate-blob"
        style={{ animationDelay: "4s" }}
        aria-hidden
      />
      <div
        className="blob left-1/2 top-[60%] h-[380px] w-[380px] -translate-x-1/2 bg-fuchsia-600 animate-blob"
        style={{ animationDelay: "8s" }}
        aria-hidden
      />

      <div className="section-pad relative z-10 flex min-h-[92vh] flex-col justify-center pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-6"
        >
          <span className="chip">
            <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
            {profile.availability}
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          <br />
          <span className="text-gradient-accent">{profile.name.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg text-ink-200 md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-4 max-w-2xl text-base leading-relaxed text-ink-300 md:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary">
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          custom={5}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-4 text-sm text-ink-400"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            {profile.location}
          </span>
          <span className="h-1 w-1 rounded-full bg-ink-500" />
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-indigo-300"
          >
            {profile.email}
          </a>
        </motion.div>
          </div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 justify-self-center lg:order-2 lg:justify-self-end"
          >
            <div className="relative">
              {/* Glow halo */}
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full bg-gradient-to-br from-indigo-500/40 via-violet-500/40 to-fuchsia-500/30 opacity-70 blur-3xl"
              />
              {/* Soft inner ring */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/30 to-violet-400/30 blur-md"
              />
              {/* Photo */}
              <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-white/15 shadow-[0_20px_60px_-10px_rgba(99,102,241,0.45)] ring-1 ring-white/10 md:h-72 md:w-72">
                <Image
                  src="/devesh.jpg"
                  alt={`${profile.name} — portrait`}
                  fill
                  sizes="(max-width: 768px) 224px, 288px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
        >
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="glass glass-hover px-4 py-3"
            >
              <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-ink-400">
                {s.label}
              </div>
              <div className="mt-1 text-base font-semibold text-white">
                {s.value}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Currently learning */}
        <motion.div
          custom={7}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-5 flex items-start gap-3 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-4 backdrop-blur-md"
        >
          <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
            <Cpu className="h-4 w-4 text-cyan-300" />
          </span>
          <div className="text-sm leading-relaxed">
            <span className="font-medium text-cyan-300">Currently learning:</span>{" "}
            <span className="text-ink-200">{profile.currentlyLearning}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
