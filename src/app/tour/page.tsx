// src/app/tour/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour — Nel Fuoco",
  description: "Upcoming shows, tickets, and past tour dates.",
};

type Show = { date: string; city: string; venue: string; link?: string };

const shows: Show[] = [
  { date: "2025-09-20", city: "Las Vegas, NV",   venue: "Downtown Stage",    link: "#" },
  { date: "2025-10-04", city: "Los Angeles, CA", venue: "Echo Park",         link: "#" },
  { date: "2025-11-12", city: "Phoenix, AZ",     venue: "Crescent Ballroom", link: "#" },
];

function formatDate(iso: string) {
  // Consistent US-format date
  return new Date(iso).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function TourPage() {
  const today = new Date();
  const upcoming = shows
    .filter((s) => new Date(s.date) >= new Date(today.toDateString()))
    .sort((a, b) => +new Date(a.date) - +new Date(b.date));

  const past = shows
    .filter((s) => new Date(s.date) < new Date(today.toDateString()))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main>
      {/* Header */}
      <section className="section-pad">
        <div className="wrap">
          <h1 className="h1 gradient-brand">Tour</h1>
          <p className="mt-3 text-white/80">
            Catch the show. New dates drop often — check back or <a href="/contact" className="link-underline">book an event</a>.
          </p>
        </div>
      </section>

      {/* Upcoming shows */}
      <section className="section-pad">
        <div className="wrap">
          <h2 className="h2">Upcoming</h2>

          {upcoming.length === 0 ? (
            <div className="glass rounded-xl border border-white/20 p-6 mt-4">
              <p className="text-white/85">
                No upcoming shows yet. Follow on{" "}
                <a className="link-underline" href="https://instagram.com/iamnelfuoco" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>{" "}
                for announcements.
              </p>
            </div>
          ) : (
            <div className="mt-4 overflow-x-auto rounded-xl border border-white/20 bg-white/[.06] neon-card p-0">
              <table className="min-w-full text-left text-sm">
                <thead className="text-white/80">
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 font-semibold">Date</th>
                    <th className="px-4 py-3 font-semibold">City</th>
                    <th className="px-4 py-3 font-semibold">Venue</th>
                    <th className="px-4 py-3 font-semibold">Tickets</th>
                  </tr>
                </thead>
                <tbody>
                  {upcoming.map((s) => (
                    <tr key={`${s.date}-${s.venue}`} className="border-t border-white/10 hover:bg-white/[.04] transition">
                      <td className="px-4 py-3">{formatDate(s.date)}</td>
                      <td className="px-4 py-3">{s.city}</td>
                      <td className="px-4 py-3">{s.venue}</td>
                      <td className="px-4 py-3">
                        {s.link ? (
                          <a href={s.link} className="btn btn-primary btn-primary-glow">
                            Tickets
                          </a>
                        ) : (
                          <span className="badge">TBA</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* Past shows (collapsible) */}
      {past.length > 0 && (
        <section className="section-pad">
          <div className="wrap">
            <details className="group">
              <summary className="neon-outline inline-flex items-center gap-2 rounded-lg px-3 py-2 cursor-pointer select-none">
                Past shows
                <span className="text-white/60 group-open:rotate-180 transition">▾</span>
              </summary>

              <div className="mt-4 overflow-x-auto rounded-xl border border-white/20 bg-white/[.06] p-0">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-white/70">
                    <tr className="border-b border-white/10">
                      <th className="px-4 py-3 font-semibold">Date</th>
                      <th className="px-4 py-3 font-semibold">City</th>
                      <th className="px-4 py-3 font-semibold">Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {past.map((s) => (
                      <tr key={`${s.date}-${s.venue}`} className="border-t border-white/10 opacity-80 hover:opacity-100 hover:bg-white/[.04] transition">
                        <td className="px-4 py-3">{formatDate(s.date)}</td>
                        <td className="px-4 py-3">{s.city}</td>
                        <td className="px-4 py-3">{s.venue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
        </section>
      )}
    </main>
  );
}
