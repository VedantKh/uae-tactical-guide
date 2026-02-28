export default function BelievePage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="text-4xl mb-4 block">🧭</span>
        <h1
          className="text-4xl font-bold tracking-tight mb-2"
          style={{ color: "var(--foreground)" }}
        >
          What to Believe & What Not To
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          A simple framework for navigating information in uncertain times.
        </p>
      </div>

      <div className="h-px w-full mb-10" style={{ backgroundColor: "var(--border)" }} />

      {/* Believe Section */}
      <section className="mb-12">
        <h2
          className="text-xl font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="inline-block px-2 py-0.5 rounded text-xs font-medium"
            style={{ backgroundColor: "var(--tag-green)", color: "var(--tag-green-text)" }}
          >
            Trust
          </span>
          What to believe
        </h2>
        <ul className="space-y-3">
          {[
            {
              title: "Primary sources",
              desc: "Official statements, published data, peer-reviewed research.",
            },
            {
              title: "Established journalists with track records",
              desc: "Reporters who cite sources and issue corrections.",
            },
            {
              title: "Your own direct experience",
              desc: "What you witness firsthand is a valid data point.",
            },
            {
              title: "Consensus among independent experts",
              desc: "When multiple unaffiliated experts agree, it's a strong signal.",
            },
            {
              title: "Transparent organizations",
              desc: "Those that publish methodology, data, and funding sources.",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="rounded-lg p-4 border"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>
                {item.title}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Don't Believe Section */}
      <section className="mb-12">
        <h2
          className="text-xl font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="inline-block px-2 py-0.5 rounded text-xs font-medium"
            style={{ backgroundColor: "var(--tag-red)", color: "var(--tag-red-text)" }}
          >
            Doubt
          </span>
          What not to believe
        </h2>
        <ul className="space-y-3">
          {[
            {
              title: "Screenshots of tweets or messages",
              desc: "Easily fabricated. Always verify at the source.",
            },
            {
              title: "Anonymous \"insider\" accounts",
              desc: "No accountability means no reliability.",
            },
            {
              title: "Content that makes you feel extreme emotion",
              desc: "Outrage and fear are engagement tools, not truth signals.",
            },
            {
              title: "Breaking news in the first 30 minutes",
              desc: "Initial reports are almost always incomplete or wrong.",
            },
            {
              title: "Information with no clear origin",
              desc: "If you can't trace it back, don't pass it forward.",
            },
          ].map((item, i) => (
            <li
              key={i}
              className="rounded-lg p-4 border"
              style={{ borderColor: "var(--border)" }}
            >
              <p className="font-medium text-sm" style={{ color: "var(--foreground)" }}>
                {item.title}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Test */}
      <section
        className="rounded-lg p-6 border"
        style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
      >
        <h3 className="font-semibold text-sm mb-3" style={{ color: "var(--foreground)" }}>
          💡 Quick Credibility Test
        </h3>
        <ol className="space-y-2 text-sm list-decimal list-inside" style={{ color: "var(--muted)" }}>
          <li>Who is saying this? Can I verify their identity?</li>
          <li>What&apos;s the original source? Can I find it?</li>
          <li>Are other credible outlets reporting the same thing?</li>
          <li>Am I being asked to share this urgently? (Red flag.)</li>
          <li>Does this confirm what I already believe? (Check bias.)</li>
        </ol>
      </section>
    </div>
  );
}
