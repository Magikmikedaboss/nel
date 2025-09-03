import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Nel Fuoco",
  description: "Booking & management contact details.",
};

export default function ContactPage() {
  const email = "booking@example.com"; // ← replace

  return (
    <main>
      {/* Header */}
      <section className="section-pad text-center">
        <div className="wrap">
          <h1 className="h1 gradient-brand">Contact</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            For bookings, press, and partnerships—reach out below. The more details you share, the faster we can lock it in.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-pad">
        <div className="wrap grid gap-8 md:grid-cols-2">
          {/* Info / Checklist */}
          <aside className="surface p-6 sm:p-8 space-y-5">
            <div>
              <h2 className="h2">Booking / Management</h2>
              <p className="mt-2 text-white/85">
                Prefer email? Use the button below and include the details in the checklist.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href={`mailto:${email}?subject=Booking%20inquiry%20%28City%20+%20Date%29`}
                >
                  Email {email}
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white/90">What to include</h3>
              <ul className="mt-2 grid gap-2 text-white/80 text-sm">
                <li>• Date &amp; city</li>
                <li>• Venue &amp; set length</li>
                <li>• Budget / offer</li>
                <li>• Tech notes &amp; special requests</li>
                <li>• Contact name &amp; phone</li>
              </ul>
            </div>

            <details className="group">
              <summary className="inline-flex items-center gap-2 cursor-pointer select-none rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/15">
                Press &amp; Partnerships
                <span className="text-white/60 transition-transform group-open:rotate-180">▾</span>
              </summary>
              <div className="mt-3 text-white/80 text-sm space-y-2">
                <p>For interviews, editorial, or brand collabs, add deadlines, outlet/brand, and links to previous work.</p>
              </div>
            </details>
          </aside>

          {/* Mailto form (simple, no JS required) */}
          <form
            className="surface p-6 sm:p-8 space-y-5"
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
            // target="_blank" // optional: open mail client in a new tab
          >
            {/* Contact */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-white/80">Your Name</label>
                <input
                  name="name"
                  autoComplete="name"
                  required
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80">Email</label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Show details */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-white/80">Date</label>
                <input
                  name="date"
                  type="date"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80">City</label>
                <input
                  name="city"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="City, State/Region"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-white/80">Venue</label>
                <input
                  name="venue"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Venue name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80">Set Length</label>
                <input
                  name="set_length"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="e.g., 30–45 min"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-white/80">Budget / Offer</label>
                <input
                  name="budget"
                  inputMode="decimal"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="e.g., $1,500 + travel"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80">Phone (optional)</label>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="+1 (___) ___-____"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-white/80">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                placeholder="Tech needs, promo plan, set time, load-in, etc."
              />
            </div>

            {/* Honey pot (basic bot deterrent) */}
            <div className="hidden">
              <label>Fax</label>
              <input name="fax" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="btn btn-primary" type="submit">Send</button>
              <a
                className="btn btn-outline"
                href={`mailto:${email}?subject=Booking%20inquiry%20%28City%20+%20Date%29`}
              >
                Email instead
              </a>
            </div>

            <p className="text-xs text-white/50">
              Submitting opens your email client with your message prefilled. For the fastest response,
              include as many details as possible.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
