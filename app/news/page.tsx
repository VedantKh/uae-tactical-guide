"use client";

export default function NewsPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <span className="text-4xl mb-4 block">📰</span>
        <h1
          className="text-4xl font-bold tracking-tight mb-2"
          style={{ color: "var(--foreground)" }}
        >
          News Threads to Follow
        </h1>
        <p className="text-base" style={{ color: "var(--muted)" }}>
          Curated sources worth your attention. Quality over quantity.
        </p>
      </div>

      <div
        className="h-px w-full mb-10"
        style={{ backgroundColor: "var(--border)" }}
      />

      {/* Wire Services */}
      <section className="mb-10">
        <h2
          className="text-lg font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="inline-block px-2 py-0.5 rounded text-xs font-medium"
            style={{
              backgroundColor: "var(--tag-blue)",
              color: "var(--tag-blue-text)",
            }}
          >
            Wire Services
          </span>
          The raw feed
        </h2>
        <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
          Wire services report facts first, opinions later. They&apos;re the
          source behind most news you read.
        </p>
        <div className="space-y-2">
          {[
            {
              name: "Reuters",
              url: "https://reuters.com",
              desc: "Global, fast, factual.",
            },
            {
              name: "Associated Press",
              url: "https://apnews.com",
              desc: "America's oldest wire service. Trusted worldwide.",
            },
            {
              name: "AFP",
              url: "https://www.afp.com/en",
              desc: "French agency with strong international coverage.",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-4 border flex items-center justify-between gap-3 group transition-colors"
              style={{ borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--sidebar-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div>
                <p
                  className="font-medium text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.name}
                  <span
                    className="ml-2 text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    ↗
                  </span>
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Independent Journalism */}
      <section className="mb-10">
        <h2
          className="text-lg font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="inline-block px-2 py-0.5 rounded text-xs font-medium"
            style={{
              backgroundColor: "var(--tag-purple)",
              color: "var(--tag-purple-text)",
            }}
          >
            Independent
          </span>
          Deep dives & analysis
        </h2>
        <div className="space-y-2">
          {[
            {
              name: "ProPublica",
              url: "https://propublica.org",
              desc: "Investigative journalism in the public interest.",
            },
            {
              name: "The Bureau of Investigative Journalism",
              url: "https://www.thebureauinvestigates.com",
              desc: "UK-based, global scope.",
            },
            {
              name: "Bellingcat",
              url: "https://bellingcat.com",
              desc: "Open-source intelligence and investigations.",
            },
            {
              name: "Rest of World",
              url: "https://restofworld.org",
              desc: "Tech's impact outside the Western bubble.",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-4 border flex items-center justify-between gap-3 transition-colors"
              style={{ borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--sidebar-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div>
                <p
                  className="font-medium text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.name}
                  <span
                    className="ml-2 text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    ↗
                  </span>
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Fact-Checking */}
      <section className="mb-10">
        <h2
          className="text-lg font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--foreground)" }}
        >
          <span
            className="inline-block px-2 py-0.5 rounded text-xs font-medium"
            style={{
              backgroundColor: "var(--tag-green)",
              color: "var(--tag-green-text)",
            }}
          >
            Fact Check
          </span>
          Verify before you share
        </h2>
        <div className="space-y-2">
          {[
            {
              name: "Snopes",
              url: "https://snopes.com",
              desc: "The internet's oldest fact-checking site.",
            },
            {
              name: "Reuters Fact Check",
              url: "https://reuters.com/fact-check",
              desc: "From a trusted wire service.",
            },
            {
              name: "Full Fact",
              url: "https://fullfact.org",
              desc: "UK's independent fact-checking charity.",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-4 border flex items-center justify-between gap-3 transition-colors"
              style={{ borderColor: "var(--border)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--sidebar-bg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <div>
                <p
                  className="font-medium text-sm"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.name}
                  <span
                    className="ml-2 text-xs"
                    style={{ color: "var(--muted)" }}
                  >
                    ↗
                  </span>
                </p>
                <p className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                  {item.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Newsletters */}
      <section
        className="rounded-lg p-6 border"
        style={{
          backgroundColor: "var(--sidebar-bg)",
          borderColor: "var(--border)",
        }}
      >
        <h3
          className="font-semibold text-sm mb-3"
          style={{ color: "var(--foreground)" }}
        >
          📬 Newsletters worth subscribing to
        </h3>
        <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
          <li>
            <strong style={{ color: "var(--foreground)" }}>1440</strong> —
            Culture-war-free daily news digest
          </li>
          <li>
            <strong style={{ color: "var(--foreground)" }}>Ground News</strong>{" "}
            — See how stories are covered across the political spectrum
          </li>
          <li>
            <strong style={{ color: "var(--foreground)" }}>
              The Flip Side
            </strong>{" "}
            — Left and right perspectives on the same story
          </li>
        </ul>
      </section>
    </div>
  );
}
