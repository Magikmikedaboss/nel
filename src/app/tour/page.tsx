// app/tour/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

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

/** Parse a YYYY-MM-DD as LOCAL date (avoids TZ drift) */
function parseDateLocal(isoDate: string) {
  const [y, m, d] = isoDate.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}
function formatDate(iso: string) {
  const dt = parseDateLocal(iso);
  return dt.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function TourPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcoming = shows
    .filter((s) => parseDateLocal(s.date) >= today)
    .sort((a, b) => +parseDateLocal(a.date) - +parseDateLocal(b.date));

  const past = shows
    .filter((s) => parseDateLocal(s.date) < today)
    .sort((a, b) => +parseDateLocal(b.date) - +parseDateLocal(a.date));

  return (
    <main>
      {/* Header */}
      <section className="section-pad">
        <div className="wrap">
          <div className="surface p-6 sm:p-8 text-center">
            <h1 className="h1 gradient-brand">Tour</h1>
            <p className="mt-3 text-white/80">
              Catch the show. New dates drop often — check back or{" "}
              <Link href="/contact" className="underline underline-offset-2 decoration-2">
                book an event
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming shows */}
      <section className="section-pad" aria-labelledby="upcoming-heading">
        <div className="wrap">
          <h2 id="upcoming-heading" className="h2">Upcoming</h2>

          {upcoming.length === 0 ? (
            <div className="surface mt-4 p-6" aria-live="polite">
              <p className="text-white/85">
                No upcoming shows yet. Follow on{" "}
                <a
                  className="underline underline-offset-2 decoration-2"
                  href="https://instagram.com/iamnelfuoco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>{" "}
                for announcements.
              </p>
            </div>
          ) : (
            <>
              {/* Mobile: card list */}
              <ul className="mt-4 grid gap-4 md:hidden">
                {upcoming.map((s) => (
                  <li key={`${s.date}-${s.venue}`} className="surface p-4">
                    <div className="text-sm text-white/70">
                      <time dateTime={s.date}>{formatDate(s.date)}</time>
                    </div>
                    <div className="mt-1 font-semibold">{s.city}</div>
                    <div className="text-white/80">{s.venue}</div>
                    <div className="mt-3">
                      {s.link ? (
                        <a
                          href={s.link}
                          className="btn btn-primary"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Get tickets for ${s.venue} in ${s.city} on ${formatDate(s.date)}`}
                        >
                          Tickets
                        </a>
                      ) : (
                        <span className="inline-block rounded-full px-2.5 py-1 text-xs border border-white/20 bg-white/10 text-white/85">
                          TBA
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Desktop: table */}
              <div className="mt-4 overflow-x-auto rounded-xl border border-white/15 bg-white/[.06] p-0 hidden md:block">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-white/80">
                    <tr className="border-b border-white/10">
                      <th scope="col" className="px-4 py-3 font-semibold">Date</th>
                      <th scope="col" className="px-4 py-3 font-semibold">City</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Venue</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Tickets</th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcoming.map((s) => (
                      <tr
                        key={`${s.date}-${s.venue}`}
                        className="border-t border-white/10 hover:bg-white/[.04] transition-colors"
                      >
                        <td className="px-4 py-3 whitespace-nowrap">
                          <time dateTime={s.date}>{formatDate(s.date)}</time>
                        </td>
                        <td className="px-4 py-3">{s.city}</td>
                        <td className="px-4 py-3">{s.venue}</td>
                        <td className="px-4 py-3">
                          {s.link ? (
                            <a
                              href={s.link}
                              className="btn btn-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Get tickets for ${s.venue} in ${s.city} on ${formatDate(s.date)}`}
                            >
                              Tickets
                            </a>
                          ) : (
                            <span className="inline-block rounded-full px-2.5 py-1 text-xs border border-white/20 bg-white/10 text-white/85">
                              TBA
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Past shows (collapsible) */}
      {past.length > 0 && (
        <section className="section-pad" aria-labelledby="past-heading">
          <div className="wrap">
            <details className="group">
              <summary className="inline-flex items-center gap-2 rounded-lg px-3 py-2 border border-white/20 bg-white/10 cursor-pointer select-none">
                <span id="past-heading">Past shows</span>
                <span className="text-white/60 text-sm">({past.length})</span>
                <span className="text-white/60 transition-transform group-open:rotate-180">▾</span>
              </summary>

              {/* Mobile: card list */}
              <ul className="mt-4 grid gap-4 md:hidden">
                {past.map((s) => (
                  <li key={`${s.date}-${s.venue}`} className="surface p-4 opacity-85 hover:opacity-100 transition">
                    <div className="text-sm text-white/70">
                      <time dateTime={s.date}>{formatDate(s.date)}</time>
                    </div>
                    <div className="mt-1 font-semibold">{s.city}</div>
                    <div className="text-white/80">{s.venue}</div>
                  </li>
                ))}
              </ul>

              {/* Desktop: table */}
              <div className="mt-4 overflow-x-auto rounded-xl border border-white/20 bg-white/[.06] p-0 hidden md:block">
                <table className="min-w-full text-left text-sm">
                  <thead className="text-white/70">
                    <tr className="border-b border-white/10">
                      <th scope="col" className="px-4 py-3 font-semibold">Date</th>
                      <th scope="col" className="px-4 py-3 font-semibold">City</th>
                      <th scope="col" className="px-4 py-3 font-semibold">Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {past.map((s) => (
                      <tr
                        key={`${s.date}-${s.venue}`}
                        className="border-t border-white/10 opacity-80 hover:opacity-100 hover:bg-white/[.04] transition"
                      >
                        <td className="px-4 py-3 whitespace-nowrap">
                          <time dateTime={s.date}>{formatDate(s.date)}</time>
                        </td>
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
