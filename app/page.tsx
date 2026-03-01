"use client";

import ToggleBlock from "./components/ToggleBlock";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1
          className="text-4xl font-bold tracking-tight mb-3"
          style={{ color: "var(--foreground)" }}
        >
          UAE Tactical Guide
        </h1>
        <p
          className="text-base leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          I&apos;m in Abu Dhabi with my parents, and have been thinking about
          the best way to navigate the current situation.
        </p>
      </div>

      <div
        className="h-px w-full mb-8"
        style={{ backgroundColor: "var(--border)" }}
      />

      {/* Toggles */}
      <div className="space-y-2">
        {/* Toggle 1: The situation */}
        <ToggleBlock id="situation" title="The situation">
          <div className="space-y-4 text-sm" style={{ color: "var(--foreground)" }}>
            <p style={{ color: "var(--muted)" }}>
              Iran launched missile strikes targeting the UAE. UAE air defence systems intercepted
              the majority of incoming projectiles. Debris has been reported in parts of Abu Dhabi
              and Dubai. One civilian death has been confirmed. Aviation has been disrupted, with
              flights grounded or diverted at multiple airports.
            </p>

            <div>
              <p className="font-semibold mb-2">Emergency numbers</p>
              <div className="space-y-1.5">
                {[
                  { label: "Police", number: "999" },
                  { label: "Ambulance", number: "998" },
                  { label: "Fire / Civil Defence", number: "997" },
                ].map((item) => (
                  <div key={item.number} className="flex items-center gap-3">
                    <span style={{ color: "var(--muted)" }}>{item.label}</span>
                    <a
                      href={`tel:${item.number}`}
                      className="font-mono font-semibold px-2 py-0.5 rounded"
                      style={{
                        backgroundColor: "var(--tag-red)",
                        color: "var(--tag-red-text)",
                      }}
                    >
                      {item.number}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ToggleBlock>

        {/* Toggle 2: What is worth believing and what is not */}
        <ToggleBlock id="believe" title="What is worth believing and what is not">
          <div className="space-y-5 text-sm">
            {/* Trust */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: "var(--tag-green)", color: "var(--tag-green-text)" }}
                >
                  Trust
                </span>
                <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                  Official UAE channels only
                </span>
              </div>
              <ul className="space-y-1.5 ml-1" style={{ color: "var(--muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span><strong style={{ color: "var(--foreground)" }}>Ministry of Defence / WAM</strong> &mdash; Official military and state news agency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span><strong style={{ color: "var(--foreground)" }}>NCEMA</strong> &mdash; National Emergency Crisis and Disaster Management Authority</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span><strong style={{ color: "var(--foreground)" }}>Ministry of Interior (MOI)</strong> &mdash; Public safety updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span><strong style={{ color: "var(--foreground)" }}>Abu Dhabi Police / Dubai Police</strong> &mdash; Local situation and road updates</span>
                </li>
              </ul>
            </div>

            {/* Doubt */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: "var(--tag-red)", color: "var(--tag-red-text)" }}
                >
                  Doubt
                </span>
                <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                  Do not amplify
                </span>
              </div>
              <ul className="space-y-1.5 ml-1" style={{ color: "var(--muted)" }}>
                {[
                  "Unverified videos or photos circulating on WhatsApp / social media",
                  "Screenshots of tweets or messages \u2014 easily fabricated",
                  "Anonymous \u201Cinsider\u201D accounts with no accountability",
                  "Content designed to provoke extreme emotion (outrage, panic)",
                  "Breaking claims in the first 30 minutes \u2014 initial reports are almost always wrong",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0">&#8226;</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Credibility Test */}
            <div
              className="rounded-lg p-4 border"
              style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
            >
              <p className="font-semibold text-sm mb-2" style={{ color: "var(--foreground)" }}>
                Quick credibility test
              </p>
              <ol className="space-y-1 text-sm list-decimal list-inside" style={{ color: "var(--muted)" }}>
                <li>Who is saying this? Can I verify their identity?</li>
                <li>What&apos;s the original source? Can I find it?</li>
                <li>Are other credible outlets reporting the same thing?</li>
                <li>Am I being asked to share this urgently? (Red flag.)</li>
                <li>Does this confirm what I already believe? (Check bias.)</li>
              </ol>
            </div>
          </div>
        </ToggleBlock>

        {/* Toggle 3: What we're doing right now */}
        <ToggleBlock id="do-now" title="What we're doing right now" defaultOpen>
          <div className="space-y-5 text-sm">
            {/* First 60 seconds */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: "var(--tag-red)", color: "var(--tag-red-text)" }}
                >
                  First 60 sec
                </span>
                <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                  If you hear sirens or explosions
                </span>
              </div>
              <ol className="space-y-1.5 ml-1 list-decimal list-inside" style={{ color: "var(--muted)" }}>
                <li><strong style={{ color: "var(--foreground)" }}>Get inside</strong> &mdash; Move to an interior room away from windows</li>
                <li><strong style={{ color: "var(--foreground)" }}>Get low</strong> &mdash; Crouch or lie flat, protect your head</li>
                <li><strong style={{ color: "var(--foreground)" }}>Stay put</strong> &mdash; Do not go outside to look; wait for the all-clear</li>
              </ol>
            </div>

            {/* Specific situations */}
            <div>
              <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                Specific situations
              </p>
              <div className="space-y-2" style={{ color: "var(--muted)" }}>
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p><strong style={{ color: "var(--foreground)" }}>In a high-rise:</strong> Move to a stairwell or interior corridor, away from glass. Do not use elevators.</p>
                </div>
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p><strong style={{ color: "var(--foreground)" }}>Outside:</strong> Get inside the nearest solid structure. If nothing is available, lie flat in the lowest area you can find.</p>
                </div>
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p><strong style={{ color: "var(--foreground)" }}>Driving:</strong> Pull over safely, get out, and move inside the nearest building. If no building, lie flat in a ditch or low area away from the vehicle.</p>
                </div>
              </div>
            </div>

            {/* Debris protocol */}
            <div>
              <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                Debris protocol
              </p>
              <ul className="space-y-1.5 ml-1" style={{ color: "var(--muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span><strong style={{ color: "var(--foreground)" }}>Do not touch</strong> any debris &mdash; it may be hazardous or unexploded</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span>Create a wide perimeter and keep others away</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span>Call <a href="tel:999" className="font-mono font-semibold underline">999</a> to report the location</span>
                </li>
              </ul>
            </div>

            {/* Next 2-24 hours */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: "var(--tag-yellow)", color: "var(--tag-yellow-text)" }}
                >
                  Next 2&ndash;24 hrs
                </span>
                <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                  Prepare
                </span>
              </div>
              <ul className="space-y-1.5 ml-1" style={{ color: "var(--muted)" }}>
                {[
                  "Charge all phones and portable batteries",
                  "Locate a flashlight and keep shoes by the bed",
                  "Prepare a grab bag: IDs, medications, water, phone charger, cash",
                  "Avoid non-essential travel to airports \u2014 flights may be grounded or diverted",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 flex-shrink-0">&#8226;</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ToggleBlock>

        {/* Toggle 4: What news to follow */}
        <ToggleBlock id="news" title="What news to follow">
          <div className="space-y-4 text-sm">
            <p style={{ color: "var(--muted)" }}>
              Stick to official UAE government channels. Everything else is secondary.
            </p>

            <div className="space-y-2">
              {[
                {
                  name: "WAM (Emirates News Agency)",
                  desc: "Official state news agency \u2014 first source for government statements",
                },
                {
                  name: "NCEMA",
                  desc: "National Emergency Crisis and Disaster Management Authority \u2014 safety directives and alerts",
                },
                {
                  name: "Ministry of Interior (MOI)",
                  desc: "Public safety updates, road closures, curfews",
                },
                {
                  name: "Abu Dhabi Police",
                  desc: "Local law enforcement updates for Abu Dhabi emirate",
                },
                {
                  name: "Dubai Police",
                  desc: "Local law enforcement updates for Dubai emirate",
                },
              ].map((source, i) => (
                <div
                  key={i}
                  className="rounded-lg p-3 border"
                  style={{ borderColor: "var(--border)" }}
                >
                  <p className="font-medium" style={{ color: "var(--foreground)" }}>
                    {source.name}
                  </p>
                  <p className="mt-0.5" style={{ color: "var(--muted)" }}>
                    {source.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="rounded-lg p-4 border"
              style={{ backgroundColor: "var(--sidebar-bg)", borderColor: "var(--border)" }}
            >
              <p className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                What NOT to follow or share
              </p>
              <ul className="space-y-1 ml-1" style={{ color: "var(--muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Unverified Telegram channels or WhatsApp forwards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Social media accounts posting &ldquo;breaking&rdquo; with no official source</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0">&#8226;</span>
                  <span>Videos or images you cannot verify yourself &mdash; do not reshare</span>
                </li>
              </ul>
            </div>
          </div>
        </ToggleBlock>
      </div>
    </div>
  );
}
