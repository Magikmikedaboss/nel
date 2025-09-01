export default function TailwindTestPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 sm:p-10">
      {/* Banner */}
      <div className="mb-6 rounded-xl bg-blue-600 px-4 py-3 text-white shadow">
        Tailwind is working 🎉 — hover me!
      </div>

      {/* Heading with gradient & responsive sizes */}
      <h1 className="mb-2 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
        Tailwind Test
      </h1>
      <p className="mb-8 text-gray-600">
        If you see colors, rounded corners, shadows, and this layout looks tidy, Tailwind is compiling.
      </p>

      {/* Buttons: hover / focus ring */}
      <div className="mb-10 flex flex-wrap gap-3">
        <button className="rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Primary
        </button>
        <button className="rounded-lg border px-5 py-2.5 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Outline
        </button>
        <button className="rounded-lg px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300">
          Ghost
        </button>
        <button className="animate-pulse rounded-lg bg-emerald-600 px-5 py-2.5 font-medium text-white">
          Pulse
        </button>
      </div>

      {/* Responsive grid + cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {["Card One", "Card Two", "Card Three"].map((t) => (
          <div
            key={t}
            className="group rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-lg"
          >
            <div className="mb-3 h-36 w-full rounded-xl bg-gray-100 transition group-hover:bg-gray-200" />
            <h3 className="text-lg font-semibold">{t}</h3>
            <p className="mt-1 text-sm text-gray-600">
              This is a test card. Hover to see shadow/背景 change.
            </p>
            <a
              href="#"
              className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-black"
            >
              Action
            </a>
          </div>
        ))}
      </div>

      {/* Breakpoint helper (shows current size label) */}
      <div className="mt-10 text-sm text-gray-500">
        <span className="sm:hidden">Viewport: xs</span>
        <span className="hidden sm:inline md:hidden">Viewport: sm</span>
        <span className="hidden md:inline lg:hidden">Viewport: md</span>
        <span className="hidden lg:inline xl:hidden">Viewport: lg</span>
        <span className="hidden xl:inline 2xl:hidden">Viewport: xl</span>
        <span className="hidden 2xl:inline">Viewport: 2xl</span>
      </div>
    </main>
  );
}
