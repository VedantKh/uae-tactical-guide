"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/#situation", label: "The situation" },
  { href: "/#believe", label: "What to believe" },
  { href: "/#do-now", label: "What we're doing" },
  { href: "/#news", label: "News to follow" },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden flex flex-col gap-1 p-2 rounded-md border"
        style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
        aria-label="Toggle menu"
      >
        <span className="block w-4 h-0.5" style={{ backgroundColor: "var(--foreground)" }} />
        <span className="block w-4 h-0.5" style={{ backgroundColor: "var(--foreground)" }} />
        <span className="block w-4 h-0.5" style={{ backgroundColor: "var(--foreground)" }} />
      </button>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-60 flex flex-col border-r z-40 transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
      >
        <div className="px-4 py-5">
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              UAE Tactical Guide
            </span>
          </Link>
        </div>

        <nav className="flex-1 px-2 space-y-0.5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-sm transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--sidebar-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div
          className="px-4 py-4 text-xs border-t"
          style={{ color: "var(--muted)", borderColor: "var(--border)" }}
        >
          Stay safe. Stay informed.
        </div>
      </aside>
    </>
  );
}
