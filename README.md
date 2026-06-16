# Devesh Valluru — Portfolio

A glassmorphism portfolio site for Devesh Valluru, built with Next.js 14 + Tailwind + Framer Motion. Auto-fetches public GitHub repos at build/ISR time.

## Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom glass utilities
- **Animation:** Framer Motion (scroll-reveal, hover lifts, animated background blobs)
- **Icons:** lucide-react
- **Data:** GitHub REST API (`/users/:user/repos`), revalidated every 30 minutes

## Local dev

```bash
npm install
npm run dev          # http://localhost:3000
```

## Edit your content

All content is in plain TypeScript — no CMS, no DB.

| What to change            | File                  |
| ------------------------- | --------------------- |
| Name, tagline, contact    | `lib/profile.ts`      |
| Featured projects (3)     | `lib/projects.ts`     |
| Skills, education, certs  | `lib/skills.ts`       |
| Site metadata / OG tags   | `app/layout.tsx`      |
| Theme tokens / colors     | `tailwind.config.ts`  |
| Glass utility classes     | `app/globals.css`     |

To **pin a GitHub repo** to the top of the live-repos section, edit `FEATURED_SLUGS` in `lib/github.ts`.

## Optional: GitHub API token

Unauthenticated GitHub requests are rate-limited to 60/hr per IP. For production it's worth adding a token:

1. Create a fine-grained token at https://github.com/settings/tokens with only **Public repositories: Read** access.
2. Locally: copy `.env.example` to `.env.local` and set `GITHUB_TOKEN`.
3. On Vercel: add `GITHUB_TOKEN` under **Settings → Environment Variables** for Production, Preview, and Development.

## Deploy to Vercel

The fastest path:

```bash
# 1. Initialize a git repo and push to GitHub
cd portfolio
git init && git add . && git commit -m "Initial portfolio"
gh repo create devesh-portfolio --public --source=. --push   # or push to an existing repo

# 2. Deploy
npx vercel              # link the project
npx vercel --prod       # ship to production
```

Or the click-through path:

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — no build config needed.
4. (Optional) Add `GITHUB_TOKEN` under Environment Variables.
5. Click **Deploy**. You get a `*.vercel.app` URL within ~60 seconds.

## Add your resume PDF

Drop your resume into `public/Devesh_Valluru_Resume.pdf` and it'll be served at `/Devesh_Valluru_Resume.pdf`. The path is already set in `profile.resumePath` if you want to wire up a download button.

## Custom domain

In Vercel → Project → Settings → Domains, add the domain and copy the DNS records to your registrar (usually a single CNAME for the www subdomain or an A record for the apex).

## Production build

```bash
npm run build && npm start
```
