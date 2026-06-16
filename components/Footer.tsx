import { profile } from "@/lib/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-ink-400 md:flex-row md:px-10">
        <div>
          © {year} {profile.name}. Built with Next.js, Tailwind, and Framer Motion.
        </div>
        <div className="font-mono text-xs text-ink-500">
          Deployed on Vercel · v1.0
        </div>
      </div>
    </footer>
  );
}
