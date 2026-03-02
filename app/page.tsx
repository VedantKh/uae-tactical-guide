"use client";

import ToggleBlock from "./components/ToggleBlock";

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Potential Targets Link */}
      <a
        href="https://potential-targets.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-lg px-4 py-3 mb-6 border text-sm font-medium transition-colors"
        style={{ borderColor: "var(--tag-red)", backgroundColor: "var(--tag-red)", color: "var(--tag-red-text)" }}
      >
        <span>View Potential Targets Map &rarr;</span>
      </a>

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
            <p>The situation remains tense. Attacks are ongoing with multiple waves. Schools and universities have moved to distance learning Mon 2 Mar &ndash; Wed 4 Mar. Airspace is closed, airports suspended. Power and utilities are operational.</p>
            <p className="mt-2 font-bold">Stay indoors. Avoid debris zones. Follow NCEMA alerts.</p>
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
              As of Monday 2 Mar 2026 (UAE)
            </p>
            <ul className="space-y-2 ml-4 list-disc list-outside" style={{ color: "var(--muted)" }}>
              <li>UAE Ministry of Defence confirmed air defences have <a href="https://gulfnews.com/uae/uae-intercepts-missiles-drones-in-iranian-attack-latest-updates-so-far-1.500459345" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>intercepted 165 ballistic missiles, 2 cruise missiles, and 541 drones</a> since Saturday.</li>
              <li><a href="https://gulfnews.com/uae/us-israel-war-on-iran-escalates-uae-airlines-extend-flight-cancellations-1.500459372" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>3 people killed and 58 injured</a> across the UAE. One killed at <a href="https://www.thenationalnews.com/news/uae/2026/03/01/iran-missile-attacks-uae-deaths/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>Zayed International Airport</a> (drone interception), one in Abu Dhabi from falling debris, and one at Jebel Ali.</li>
              <li>A <a href="https://www.aljazeera.com/news/2026/3/1/more-blasts-rock-dubai-doha-and-manama-as-iran-targets-us-assets-in-gulf" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>second wave of strikes</a> hit Dubai and Abu Dhabi on Sunday morning (1 Mar). Attacks are ongoing.</li>
              <li>All airports remain suspended. UAE airspace closed. <a href="https://whichschooladvisor.com/uae/school-news/missile-interceptions-will-uae-schools-open-on-monday" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>Schools shifted to distance learning</a> Mon 2 Mar &ndash; Wed 4 Mar.</li>
              <li><a href="https://www.thenationalnews.com/news/uae/2026/03/01/iran-missile-attacks-uae-deaths/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>UAE closed its embassy in Tehran</a> and recalled its ambassador.</li>
            </ul>

            {/* Affected locations */}
            <div className="mt-4">
              <p className="font-semibold mb-2" style={{ color: "var(--foreground)" }}>
                Affected locations &mdash; areas to be cautious around
              </p>
              <p className="text-xs mb-3" style={{ color: "var(--muted)" }}>
                These areas experienced debris, fires, or direct damage. Avoid non-essential travel to these zones. Sources: <a href="https://www.wam.ae/en/article/byyv9j5-uae-announces-successful-interception-several" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>WAM</a>, <a href="https://www.thenationalnews.com/news/uae/2026/03/01/woman-and-child-among-injured-on-day-two-of-iranian-attacks-on-the-uae/" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>The National</a>, <a href="https://gulfnews.com/uae/uae-intercepts-missiles-drones-in-iranian-attack-latest-updates-so-far-1.500459345" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "var(--foreground)" }}>Gulf News</a>
              </p>
              <div className="space-y-2">
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p className="mb-1.5"><strong style={{ color: "var(--foreground)" }}>Dubai</strong></p>
                  <ul className="space-y-1 ml-4 list-disc list-outside">
                    <li><strong style={{ color: "var(--foreground)" }}>Palm Jumeirah</strong> &mdash; Fairmont The Palm hotel fire from strike; 4 injuries reported.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Jebel Ali Port</strong> &mdash; Berth fire from intercepted missile debris. Port operations suspended. Accounts for 36% of Dubai&apos;s GDP.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Burj Al Arab</strong> &mdash; Facade fire from falling debris, contained quickly. No injuries.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Dubai International Airport (DXB)</strong> &mdash; A concourse sustained minor damage. All flights suspended.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Burj Khalifa / Dubai Marina area</strong> &mdash; Debris reported in residential areas nearby.</li>
                  </ul>
                </div>
                <div className="rounded-lg p-3 border" style={{ borderColor: "var(--border)" }}>
                  <p className="mb-1.5"><strong style={{ color: "var(--foreground)" }}>Abu Dhabi</strong></p>
                  <ul className="space-y-1 ml-4 list-disc list-outside">
                    <li><strong style={{ color: "var(--foreground)" }}>Zayed International Airport</strong> &mdash; Drone interception incident; 1 killed, 7 injured.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Etihad Towers</strong> &mdash; Drone debris hit building housing Conrad Hotel and diplomatic missions; woman and child injured.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Al Salam Naval Base</strong> &mdash; Two Iranian drones struck the base, causing a fire.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Saadiyat Island</strong> &mdash; Intercepted missile debris reported in the area.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Khalifa City / Mohamed Bin Zayed City / Beni Yas / Al Falah</strong> &mdash; Debris from interceptions fell across these residential areas.</li>
                    <li><strong style={{ color: "var(--foreground)" }}>Main port (Mina Zayed)</strong> &mdash; Fire from debris, contained by authorities.</li>
                  </ul>
                </div>
              </div>
            </div>
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
