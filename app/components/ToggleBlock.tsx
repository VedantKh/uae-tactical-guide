"use client";

import { useState } from "react";

interface ToggleBlockProps {
  id?: string;
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

export default function ToggleBlock({
  id,
  title,
  defaultOpen = false,
  children,
}: ToggleBlockProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div id={id} className="scroll-mt-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 py-2 text-left group"
        aria-expanded={open}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="flex-shrink-0 transition-transform duration-200"
          style={{
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            color: "var(--muted)",
          }}
        >
          <path
            d="M8 5l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="text-lg font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </span>
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 200ms ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <div className="pl-7 pb-6 pt-1">{children}</div>
        </div>
      </div>
    </div>
  );
}
