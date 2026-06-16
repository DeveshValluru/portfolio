import { Github, Star, GitFork, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import RevealCard from "./RevealCard";
import { fetchPublicRepos, languageColors } from "@/lib/github";
import { profile } from "@/lib/profile";

export default async function GithubRepos() {
  const repos = await fetchPublicRepos(profile.githubUsername);

  return (
    <section id="repos" className="relative">
      <div className="section-pad">
        <SectionHeading
          eyebrow="From GitHub"
          title="Live from my repos."
          description="Auto-fetched from the GitHub API — the latest things I&apos;ve been pushing to."
        />

        {repos.length === 0 ? (
          <div className="glass p-8 text-center text-ink-300">
            <Github className="mx-auto mb-3 h-8 w-8 text-ink-400" />
            <p>
              Couldn&apos;t reach GitHub right now.{" "}
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 hover:underline"
              >
                Browse on GitHub →
              </a>
            </p>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo, i) => {
              const dotColor = repo.language ? languageColors[repo.language] || "bg-ink-400" : "bg-ink-500";
              return (
                <RevealCard key={repo.id} index={i}>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover group flex h-full flex-col p-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-ink-400 transition-colors group-hover:text-indigo-300" />
                        <span className="font-mono text-sm font-medium text-white">{repo.name}</span>
                      </div>
                      <ArrowUpRight className="h-4 w-4 -translate-x-1 translate-y-1 text-ink-400 opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:text-indigo-300" />
                    </div>

                    {repo.description && (
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-300">
                        {repo.description}
                      </p>
                    )}

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {repo.topics.slice(0, 4).map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-white/5 bg-white/[0.02] px-1.5 py-0.5 text-[10px] text-ink-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex items-center gap-4 pt-4 text-xs text-ink-400">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span className={`h-2 w-2 rounded-full ${dotColor}`} />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="h-3 w-3" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </a>
                </RevealCard>
              );
            })}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <Github className="h-4 w-4" />
            All repositories
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
