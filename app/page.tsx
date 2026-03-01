"use client";

import ToggleBlock from "./components/ToggleBlock";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-4">
        <h1
          className="text-4xl font-bold tracking-tight mb-3"
          style={{ color: "var(--foreground)" }}
        >
          UAE Tactical Guide
        </h1>
        <p
          className="text-base leading-relaxed mb-4"
          style={{ color: "var(--muted)" }}
        >
          A report and guide for people in UAE navigating the US/Iran conflict.</p>
          <p>Iran <a href="https://www.reuters.com/world/middle-east/iran-fires-missiles-gulf-arab-states-one-killed-abu-dhabi-2026-02-28/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>launched ballistic missiles</a> toward UAE and other Gulf countries with US military bases, following U.S. and Israeli strikes on Iran, escalating the regional conflict.</p>

        <div
          className="flex items-start gap-3 rounded-md px-4 py-4 mt-4"
          style={{ backgroundColor: "var(--callout-bg)" }}
        >
          <span className="text-lg leading-6 flex-shrink-0">&#128161;</span>
          <div className="text-sm" style={{ color: "var(--foreground)" }}>
            <p>The situation is tense but fairly stable right now. Power and utilities are all operational, people are recommended to stay indoors but no curfew yet.</p>
            <p className="mt-2 font-semibold">Civilian mindset: prepare, wait and watch while staying indoors.</p>
          </div>
        </div>
      </div>

      <div
        className="h-px w-full mb-4"
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
            <ul className="space-y-2 ml-4 list-disc list-outside" style={{ color: "var(--muted)" }}>
              <li>UAE Ministry of Defence (via WAM) said UAE air defences <a href="https://www.wam.ae/en/article/173jo13-uae-air-defences-intercept-137-missiles-209-drones" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>intercepted 132 missiles and 195 drones</a>.</li>
              <li><a href="https://gulfnews.com/uae/pakistani-national-in-uae-dies-as-iranian-missiles-intercepted-amid-us-israel-strikes-1.500458618" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>One civilian was killed in Abu Dhabi</a> from falling debris. 4 people were injured in Dubai after debris caused a <a href="https://www.reuters.com/world/middle-east/iran-missiles-brings-war-gulf-doorstep-hardens-support-usisrael-campaign-2026-02-28/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>building fire on Palm Jumeirah</a>.</li>
              <li>Dubai International (DXB) and Abu Dhabi airports <a href="https://www.thenationalnews.com/business/aviation/2026/02/28/airlines-suspend-flights-amid-us-israel-strikes-on-iran-and-gulf-airspace-closures/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>suspended operations</a>, multiple airlines halted routes, and UAE airspace was closed nationally.</li>
            </ul>
          </div>
        </ToggleBlock>

        {/* Toggle 2: What to do */}
        <ToggleBlock id="do-now" title="What to do in case during missiles, blasts, falling debris">
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
                  Do these immediately
                </span>
              </div>
              <ol className="space-y-2.5 ml-5 list-decimal list-outside" style={{ color: "var(--muted)" }}>
                <li><strong style={{ color: "var(--foreground)" }}>Get inside</strong> as fast as you safely can. The biggest risk is <strong style={{ color: "var(--foreground)" }}>glass, debris, and shrapnel</strong>, even when interceptions happen.</li>
                <li>
                  <strong style={{ color: "var(--foreground)" }}>Move away from windows.</strong> Go to an <strong style={{ color: "var(--foreground)" }}>interior room</strong>.
                  <ul className="ml-4 mt-1 list-disc list-outside">
                    <li>Best options: <strong style={{ color: "var(--foreground)" }}>windowless bathroom</strong>, closet, or a central corridor.</li>
                  </ul>
                </li>
                <li>
                  <strong style={{ color: "var(--foreground)" }}>Get low and protect your head.</strong>
                  <ul className="ml-4 mt-1 space-y-1 list-disc list-outside">
                    <li>Sit or lie on the floor.</li>
                    <li>Use a pillow, bag, or blanket if available.</li>
                  </ul>
                </li>
                <li><strong style={{ color: "var(--foreground)" }}>Do not go to balconies or rooftops</strong> to watch or film.</li>
                <li>
                  <strong style={{ color: "var(--foreground)" }}>Stay put</strong> until there is an official update or all-clear.
                  <ul className="ml-4 mt-1 list-disc list-outside">
                    <li>Do not self-evacuate into streets unless authorities instruct it.</li>
                  </ul>
                </li>
              </ol>
            </div>

            {/* Specific situations */}
            <div>
              <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                If you are in a specific situation
              </p>
              <div className="space-y-2" style={{ color: "var(--muted)" }}>
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p className="mb-1.5"><strong style={{ color: "var(--foreground)" }}>In a high-rise</strong></p>
                  <ul className="space-y-1 ml-4 list-disc list-outside">
                    <li>Go deeper inside the unit (central hallway or bathroom).</li>
                    <li>Avoid elevators during an active incident.</li>
                    <li>Close curtains or blinds <strong style={{ color: "var(--foreground)" }}>only if you can do it safely</strong>. This reduces glass scatter.</li>
                  </ul>
                </div>
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p className="mb-1.5"><strong style={{ color: "var(--foreground)" }}>Outside</strong></p>
                  <ul className="space-y-1 ml-4 list-disc list-outside">
                    <li>Go into the nearest solid building.</li>
                    <li>Avoid glass fa&ccedil;ades, glass canopies, and open promenades.</li>
                  </ul>
                </div>
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p className="mb-1.5"><strong style={{ color: "var(--foreground)" }}>Driving</strong></p>
                  <ul className="space-y-1 ml-4 list-disc list-outside">
                    <li>If you hear blasts or receive an alert: pull over safely and get into the nearest building if possible.</li>
                    <li>If you cannot exit safely, stop and <strong style={{ color: "var(--foreground)" }}>duck below the window line</strong>.</li>
                    <li>Avoid stopping near fuel stations, bridges, overpasses, or crowds.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Debris protocol */}
            <div>
              <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                Debris protocol (critical)
              </p>
              <ol className="space-y-1.5 ml-5 list-decimal list-outside" style={{ color: "var(--muted)" }}>
                <li><strong style={{ color: "var(--foreground)" }}>Assume debris is dangerous.</strong> It can be sharp, hot, and potentially hazardous.</li>
                <li><strong style={{ color: "var(--foreground)" }}>Do not touch it</strong> and do not approach.</li>
                <li><strong style={{ color: "var(--foreground)" }}>Do not photograph it</strong> up close.</li>
                <li><strong style={{ color: "var(--foreground)" }}>Create a perimeter.</strong> Keep children and bystanders away.</li>
                <li><strong style={{ color: "var(--foreground)" }}>Report it to authorities.</strong></li>
                <li>If anyone is injured: <strong style={{ color: "var(--foreground)" }}>call an ambulance immediately</strong>.</li>
              </ol>
            </div>

            {/* Emergency numbers */}
            <div>
              <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                Emergency numbers (UAE)
              </p>
              <div className="space-y-1.5" style={{ color: "var(--muted)" }}>
                {[
                  { label: "Police", number: "999" },
                  { label: "Ambulance", number: "998" },
                  { label: "Fire and Civil Defence", number: "997" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <a href={`tel:${item.number}`} className="font-mono font-semibold underline" style={{ color: "var(--foreground)" }}>{item.number}</a>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
                If it is life-threatening and you are unsure, call <a href="tel:999" className="font-mono font-semibold underline" style={{ color: "var(--foreground)" }}>999</a> and they will route appropriately.
              </p>
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
                  Reduce risk and stay functional
                </span>
              </div>
              <ul className="space-y-1.5 ml-4 list-disc list-outside" style={{ color: "var(--muted)" }}>
                <li>Charge phones and power banks.</li>
                <li>Keep a flashlight nearby.</li>
                <li>Keep shoes near you. Glass is a common injury source.</li>
                <li>
                  Prep a small grab bag:
                  <ul className="ml-4 mt-1 space-y-0.5 list-[circle] list-outside">
                    {["IDs", "Essential meds", "Water", "Child supplies (if relevant)", "Charger", "Small cash"].map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </li>
                <li>Avoid non-essential airport travel. Flight operations can change rapidly.</li>
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
              <ul className="space-y-1.5 ml-4 list-disc list-outside" style={{ color: "var(--muted)" }}>
                <li><strong style={{ color: "var(--foreground)" }}>Ministry of Defence / WAM</strong> &mdash; Official military and state news agency</li>
                <li><strong style={{ color: "var(--foreground)" }}>NCEMA</strong> &mdash; National Emergency Crisis and Disaster Management Authority</li>
                <li><strong style={{ color: "var(--foreground)" }}>Ministry of Interior (MOI)</strong> &mdash; Public safety updates</li>
                <li><strong style={{ color: "var(--foreground)" }}>Abu Dhabi Police / Dubai Police</strong> &mdash; Local situation and road updates</li>
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
              <ul className="space-y-1.5 ml-4 list-disc list-outside" style={{ color: "var(--muted)" }}>
                <li><strong style={{ color: "var(--foreground)" }}>Reuters / AP</strong> &mdash; Wire services with journalists on the ground; usually first with verified facts</li>
                <li><strong style={{ color: "var(--foreground)" }}>Ground News</strong> &mdash; Aggregates coverage from multiple sources; shows bias ratings and blind spots. Good for getting a balanced view on the broader picture.</li>
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
              <ul className="space-y-1.5 ml-4 list-disc list-outside" style={{ color: "var(--muted)" }}>
                {[
                  "Unverified videos or photos circulating on WhatsApp / social media",
                  "Screenshots of tweets or messages \u2014 easily fabricated",
                  "Anonymous \u201Cinsider\u201D accounts with no accountability",
                  "Content designed to provoke extreme emotion (outrage, panic)",
                ].map((text, i) => (
                  <li key={i}>{text}</li>
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
              <ol className="space-y-1 text-sm ml-5 list-decimal list-outside" style={{ color: "var(--muted)" }}>
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
