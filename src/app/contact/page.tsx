import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Nel Fuoco",
  description: "Booking & management contact details.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="section-pad">
        <div className="wrap">
          <h1 className="h1 gradient-brand">Contact</h1>
          <p className="mt-3 text-white/80 max-w-2xl">
            For bookings, press, and partnerships, reach out below.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="section-pad">
        <div className="wrap grid gap-8 md:grid-cols-2">
          {/* Info block */}
          <div className="surface p-6 space-y-4">
            <h2 className="h2">Booking / Management</h2>
            <p className="text-white/85">
              Please email{" "}
              <a
                className="underline underline-offset-2 decoration-2"
                href="mailto:booking@example.com"
              >
                booking@example.com
              </a>{" "}
              with event details.
            </p>
            <p className="text-white/80">
              Provide date, city, venue, set length, budget, and any special
              requests to help us get back to you quickly.
            </p>
          </div>

          {/* Form */}
          <form
            className="surface p-6 space-y-4"
            action="mailto:booking@example.com"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm font-medium text-white/80">
                Your Name
              </label>
              <input
                className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80">
                Email
              </label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80">
                Message
              </label>
              <textarea
                className="mt-1 w-full rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-cyan-400"
                name="message"
                rows={5}
                required
              />
            </div>
            <button className="btn btn-primary mt-2" type="submit">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
