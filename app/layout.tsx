import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/lib/profile";

export const metadata: Metadata = {
  title: `${profile.name} - ${profile.tagline}`,
  description: profile.intro,
  metadataBase: new URL("https://devesh-valluru.vercel.app"),
  openGraph: {
    title: `${profile.name} - ${profile.tagline}`,
    description: profile.intro,
    type: "website",
    url: "/",
    siteName: profile.name
  },
  twitter: {
    card: "summary_large_image",
    title: profile.name,
    description: profile.tagline
  },
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ backgroundColor: "#020617" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="min-h-screen overflow-x-hidden"
        style={{ backgroundColor: "#020617", color: "#f8fafc" }}
      >
        <div aria-hidden className="pointer-events-none fixed inset-0 bg-grid" />
        {children}
      </body>
    </html>
  );
}
