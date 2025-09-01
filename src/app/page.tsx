import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14 space-y-16">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold sm:text-5xl">Nel Fuoco</h1>
          <p className="mt-3 text-lg text-gray-600">
            Music artist & entertainer — new single out now.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/music" className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white">
              Listen
            </Link>
            <Link href="/tour" className="rounded-lg border px-5 py-3 font-medium">
              Tour Dates
            </Link>
          </div>
        </div>

        <div className="relative aspect-[16/11] w-full">
          <Image
            src="/artist-hero.jpg"
            alt="Artist performing on stage"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            fetchPriority="high"
            /* TODO: add /public/artist-hero.jpg (≤200KB ideal) */
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Latest Release</h2>
        <div className="rounded-xl border p-4">
          <p className="mb-3 font-medium">“Ciao Baby” — available on all platforms</p>
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="underline" href="#">Spotify</a>
            <a className="underline" href="#">Apple Music</a>
            <a className="underline" href="#">YouTube</a>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Featured Video</h2>
        <div className="relative w-full overflow-hidden rounded-lg aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/Xc8Wp1b_g_8"
            title="Featured video"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
