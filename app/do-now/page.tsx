export default function DoNowPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="text-4xl mb-4 block">⚡</span>
        <h1
          className="text-4xl font-bold tracking-tight mb-2"
          style={{ color: "var(--foreground)" }}
        >
          What to Do Right Now
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          Concrete, actionable steps you can take today.
        </p>
      </div>

      <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--border)" }} />

      {/* Immediate Actions */}
      <section className="mb-12">
        <h2
          className="text-xl font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="inline-block px-2 py-0.5 rounded text-xs font-medium"
            style={{ backgroundColor: "var(--tag-red)", color: "var(--tag-red-text)" }}
          >
            Urgent
          </span>
          Do today
        </h2>
        <div className="space-y-3">
          {[
            {
              task: "Verify your information sources",
              detail: "Audit who you follow. Unfollow accounts that consistently share unverified info.",
              time: "15 min",
            },
            {
              task: "Set up alerts for trusted news",
              detail: "Use RSS or notification settings to get updates from 2–3 reliable sources.",
              time: "10 min",
            },
            {
              task: "Talk to someone you trust",
              detail: "Share what you know and what you're unsure about. Two perspectives are better than one.",
              time: "20 min",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg p-4 border flex justify-between items-start gap-4"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-4 h-4 rounded border-2 flex-shrink-0"
                    style={{ borderColor: "var(--muted)" }}
                  />
                  <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>
                    {item.task}
                  </p>
                </div>
                <p className="text-sm ml-6" style={{ color: "var(--muted)" }}>
                  {item.detail}
                </p>
              </div>
              <span
                className="text-xs px-2 py-1 rounded flex-shrink-0"
                style={{ backgroundColor: "var(--tag-blue)", color: "var(--tag-blue-text)" }}
              >
                {item.time}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* This Week */}
      <section className="mb-12">
        <h2
          className="text-xl font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="inline-block px-2 py-0.5 rounded text-xs font-medium"
            style={{ backgroundColor: "var(--tag-yellow)", color: "var(--tag-yellow-text)" }}
          >
            This week
          </span>
          Do soon
        </h2>
        <div className="space-y-3">
          {[
            {
              task: "Build a personal info toolkit",
              detail:
                "Bookmark 3–5 primary sources. Have a go-to fact-checking site (e.g., Snopes, Reuters Fact Check).",
            },
            {
              task: "Practice the 24-hour rule",
              detail: "Before sharing news, wait a day. See if it holds up.",
            },
            {
              task: "Diversify your media diet",
              detail:
                "Read one source you normally wouldn't. Seek out local journalists and independent reporters.",
            },
            {
              task: "Prepare an emergency contact list",
              detail:
                "Know who to call, where to go, and what channels to monitor in a real crisis.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg p-4 border"
              style={{ borderColor: "var(--border)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-4 h-4 rounded border-2 flex-shrink-0"
                  style={{ borderColor: "var(--muted)" }}
                />
                <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>
                  {item.task}
                </p>
              </div>
              <p className="text-sm ml-6" style={{ color: "var(--muted)" }}>
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mindset */}
      <section
        className="rounded-lg p-6 border"
        style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
      >
        <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--foreground)" }}>
          🧘 Mindset reminder
        </h3>
        <div className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
          <p>
            <strong style={{ color: "var(--foreground)" }}>You don&apos;t need to know everything.</strong>{" "}
            Focus on what you can control and verify.
          </p>
          <p>
            <strong style={{ color: "var(--foreground)" }}>Taking a break is productive.</strong>{" "}
            Constant news consumption leads to worse decisions, not better ones.
          </p>
          <p>
            <strong style={{ color: "var(--foreground)" }}>Action beats anxiety.</strong>{" "}
            Even small steps reduce the feeling of helplessness.
          </p>
        </div>
      </section>
    </div>
  );
}
