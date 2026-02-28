"use client";

import Link from "next/link";

const pages = [
  {
    href: "/believe",
    emoji: "🧭",
    title: "What to Believe & What Not To",
    desc: "A simple framework for navigating information in uncertain times.",
    tag: "Framework",
    tagBg: "var(--tag-green)",
    tagColor: "var(--tag-green-text)",
  },
  {
    href: "/do-now",
    emoji: "⚡",
    title: "What to Do Right Now",
    desc: "Concrete, actionable steps you can take today.",
    tag: "Action",
    tagBg: "var(--tag-yellow)",
    tagColor: "var(--tag-yellow-text)",
  },
  {
    href: "/news",
    emoji: "📰",
    title: "News Threads to Follow",
    desc: "Curated sources worth your attention. Quality over quantity.",
    tag: "Sources",
    tagBg: "var(--tag-blue)",
    tagColor: "var(--tag-blue-text)",
  },
];

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1
          className="text-4xl font-bold tracking-tight mb-3"
          style={{ color: "var(--foreground)" }}
        >
          Info Hub
        </h1>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          A calm, simple guide to staying informed without losing your mind.
          <br />
          Pick a topic below to get started.
        </p>
      </div>

      <div
        className="h-px w-full mb-10"
        style={{ backgroundColor: "var(--border)" }}
      />

      <div className="space-y-3">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            className="rounded-lg p-5 border flex items-start gap-4 transition-colors block"
            style={{ borderColor: "var(--border)" }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--sidebar-bg)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "transparent";
            }}
          >
            <span className="text-2xl mt-0.5">{page.emoji}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {page.title}
                </p>
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: page.tagBg, color: page.tagColor }}
                >
                  {page.tag}
                </span>
              </div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {page.desc}
              </p>
            </div>
            <span className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              →
            </span>
          </Link>
        ))}
      </div>

      <div
        className="mt-12 rounded-lg p-5 border"
        style={{
          backgroundColor: "var(--sidebar-bg)",
          borderColor: "var(--border)",
        }}
      >
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          <strong style={{ color: "var(--foreground)" }}>
            Why this exists:
          </strong>{" "}
          In a world of information overload, having a simple, reliable
          reference helps you make better decisions. This is that reference.
        </p>
      </div>
    </div>
  );
}
