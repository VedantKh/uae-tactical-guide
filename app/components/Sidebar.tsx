"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/believe",
    label: "What to Believe",
    emoji: "🧭",
  },
  {
    href: "/do-now",
    label: "What to Do Right Now",
    emoji: "⚡",
  },
  {
    href: "/news",
    label: "News Threads to Follow",
    emoji: "📰",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="fixed left-0 top-0 h-screen w-60 flex flex-col border-r"
      style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
    >
      <div className="px-4 py-5">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-lg">📋</span>
          <span
            className="text-sm font-semibold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Info Hub
          </span>
        </Link>
      </div>

      <nav className="flex-1 px-2 space-y-0.5">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm transition-colors"
              style={{
                backgroundColor: isActive ? "var(--sidebar-hover)" : "transparent",
                color: isActive ? "var(--foreground)" : "var(--muted)",
                fontWeight: isActive ? 600 : 400,
              }}
              onMouseEnter={(e) => {
                if (!isActive)
                  e.currentTarget.style.backgroundColor = "var(--sidebar-hover)";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span className="text-base">{item.emoji}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div
        className="px-4 py-4 text-xs border-t"
        style={{ color: "var(--muted)", borderColor: "var(--border)" }}
      >
        Stay informed. Stay calm.
      </div>
    </aside>
  );
}
