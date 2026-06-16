export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  pushed_at: string;
  fork: boolean;
  archived: boolean;
};

const FEATURED_SLUGS = new Set<string>([
  // If you want to pin specific repos to the top, add their lowercased names here.
]);

export async function fetchPublicRepos(username: string): Promise<Repo[]> {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28"
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=pushed&type=owner`,
      {
        headers,
        next: { revalidate: 60 * 30 } // 30 min ISR
      }
    );

    if (!res.ok) return [];

    const data = (await res.json()) as Repo[];

    return data
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => {
        const aPin = FEATURED_SLUGS.has(a.name.toLowerCase()) ? 1 : 0;
        const bPin = FEATURED_SLUGS.has(b.name.toLowerCase()) ? 1 : 0;
        if (aPin !== bPin) return bPin - aPin;
        if (b.stargazers_count !== a.stargazers_count)
          return b.stargazers_count - a.stargazers_count;
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
      })
      .slice(0, 6);
  } catch {
    return [];
  }
}

export const languageColors: Record<string, string> = {
  Python: "bg-yellow-400",
  JavaScript: "bg-yellow-300",
  TypeScript: "bg-blue-400",
  "Jupyter Notebook": "bg-orange-400",
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
  C: "bg-gray-400",
  "C++": "bg-pink-400",
  Java: "bg-red-400",
  Shell: "bg-green-500",
  Go: "bg-cyan-400",
  Rust: "bg-orange-600"
};
