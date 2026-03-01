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
          A report and guide for people in UAE navigating the situation due to the US/Iran conflict.
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
            <p className="text-xs font-medium mb-3" style={{ color: "var(--muted)" }}>
              As of Sunday 1 Mar 2026 (UAE)
            </p>
            <ul className="space-y-2 ml-1" style={{ color: "var(--muted)" }}>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex-shrink-0">&#8226;</span>
                <span>Iran <a href="https://www.aljazeera.com/news/2026/2/28/multiple-gulf-arab-states-that-host-us-assets-targeted-in-iran-retaliation" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>launched ballistic missiles</a> toward multiple Gulf locations, following U.S. and Israeli strikes on Iran, escalating the regional conflict.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex-shrink-0">&#8226;</span>
                <span>UAE Ministry of Defence (via WAM) said UAE air defences <a href="https://www.wam.ae/en/article/173jo13-uae-air-defences-intercept-137-missiles-209-drones" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>intercepted 132 missiles and 195 drones</a>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex-shrink-0">&#8226;</span>
                <span><a href="https://gulfnews.com/uae/pakistani-national-in-uae-dies-as-iranian-missiles-intercepted-amid-us-israel-strikes-1.500458618" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>One civilian was killed in Abu Dhabi</a> from falling debris. 4 people were injured in Dubai after debris caused a <a href="https://www.reuters.com/world/middle-east/iran-missiles-brings-war-gulf-doorstep-hardens-support-usisrael-campaign-2026-02-28/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>building fire on Palm Jumeirah</a>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex-shrink-0">&#8226;</span>
                <span>Dubai International (DXB) and Abu Dhabi airports <a href="https://www.thenationalnews.com/business/aviation/2026/02/28/airlines-suspend-flights-amid-us-israel-strikes-on-iran-and-gulf-airspace-closures/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>suspended operations</a>, multiple airlines halted routes, and UAE airspace was closed nationally.</span>
              </li>
            </ul>
          </div>
        </ToggleBlock>

        {/* Toggle 2: What to do */}
        <ToggleBlock id="do-now" title="What to do" defaultOpen>
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

        {/* Toggle 3: What is worth believing */}
        <ToggleBlock id="believe" title="What is worth believing">
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
                  Official UAE channels
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

            {/* Also credible — international */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                  style={{ backgroundColor: "var(--tag-green)", color: "var(--tag-green-text)" }}
                >
                  Also credible
                </span>
                <span className="font-semibold" style={{ color: "var(--foreground)" }}>
                  International outlets
                </span>
              </div>
              <ul className="space-y-1.5 ml-1" style={{ color: "var(--muted)" }}>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span><strong style={{ color: "var(--foreground)" }}>Reuters / AP</strong> &mdash; Wire services with journalists on the ground; usually first with verified facts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 flex-shrink-0">&#8226;</span>
                  <span><strong style={{ color: "var(--foreground)" }}>Ground News</strong> &mdash; Aggregates coverage from multiple sources; shows bias ratings and blind spots. Good for getting a balanced view on the broader picture.</span>
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
              </ol>
            </div>
          </div>
        </ToggleBlock>
      </div>
    </div>
  );
}
