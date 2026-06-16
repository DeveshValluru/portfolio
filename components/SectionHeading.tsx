"use client";

import { motion } from "framer-motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 flex flex-col items-start gap-3"
    >
      <span className="chip text-indigo-300">{eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight text-gradient md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-ink-300 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
