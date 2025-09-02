import Image from "next/image";
import Link from "next/link";
import LiteYouTube from "@/components/LiteYouTube";

export default function HomePage() {
  const videos = [
    { id: "pPyePdw-6ew", title: "Nel Fuoco — Flow Loko" },
    { id: "Xc8Wp1b_g_8", title: "Nel Fuoco — Ciao Baby" },
    { id: "Du7_J7q290I", title: "Nel Fuoco — My Other Half" },
  ];

  return (
    <main>
      {/* ===== HERO (neon + old film, contained & rounded) ===== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="relative overflow-hidden rounded-2xl border">
            <Image
              src="/nel-fuoco-summertime-splash.JPG" // ensure in /public
              alt="Nel Fuoco performing live"
              fill
              priority
              fetchPriority="high"
              className="object-cover object-[50%_35%] film-tone"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
            {/* Neon tint + film textures */}
            <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-700/60 via-cyan-500/10 to-transparent" />
            <div className="film-scan hidden md:block" />
            <div className="film-grain hidden sm:block" />
            <div className="vignette" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 min-h-[360px] sm:min-h-[420px] md:min-h-[500px]">
              <h1 className="h1 gradient-brand drop-shadow">Nel Fuoco</h1>
              <p className="mt-3 max-w-2xl text-white/90">
                Energy. Bars. Brooklyn heat. New single{" "}
                <span className="font-semibold">“Ciao Baby”</span> out now.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/music"
                  className="btn btn-primary btn-primary-glow hover:scale-[1.02] active:scale-[.99]"
                >
                  Listen Now
                </Link>
                <Link
                  href="/tour"
                  className="btn btn-outline !text-white !border-white/80 hover:!bg-white/10"
                >
                  Tour Dates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRO BIO (short section after hero) ===== */}
      <section className="section-pad">
        <div className="wrap section-narrow">
          <h2 className="h2">About Nel</h2>
          <p className="mt-3 text-white/85">
            Brooklyn-born lyricist with neon-soaked melodies and razor-sharp bars.
            From cipher circles to studio nights, Nel turns love, loss, and late-night
            city glow into tracks that stick in your head—and your chest.
          </p>
          <div className="mt-4">
            <Link href="/contact" className="btn btn-outline">
              Booking & Press
            </Link>
          </div>
        </div>
      </section>

      {/* ===== LATEST RELEASE (neon hover card + tilt) ===== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid items-start gap-8 lg:grid-cols-[360px,1fr]">
            <div className="relative aspect-square overflow-hidden rounded-xl border tilt-on-hover">
              <Image
                src="/luigu-album-cover.jpg"         // ensure in /public
                alt="Latest release cover art"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 360px"
              />
            </div>

            <div className="neon-card card p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="badge animate-float">New</span>
                <h2 className="h2">Latest Release — “Ciao Baby”</h2>
              </div>
              <p className="mt-3 text-gray-700">
                Sultry R&amp;B hooks and razor-sharp wordplay. Stream it everywhere.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary btn-primary-glow hover:scale-[1.02]"
                  href="https://open.spotify.com/artist/7LPqGS3mrdemn1VRxtvRod"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Play on Spotify
                </a>
                <a className="btn btn-outline" href="#" target="_blank" rel="noopener noreferrer">
                  Apple Music
                </a>
                <a
                  className="btn btn-outline"
                  href="https://www.youtube.com/watch?v=Xc8Wp1b_g_8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VIDEO GALLERY (lite embeds, responsive, neon hover) ===== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="flex items-center justify-between gap-4">
            <h2 className="h2">Video Gallery</h2>
            <Link href="/media" className="link-underline">See all</Link>
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.id} className="card neon-card overflow-hidden hover:ring-1 hover:ring-fuchsia-400/40">
                <LiteYouTube id={v.id} title={v.title} className="relative aspect-video w-full" />
                <div className="p-4">
                  <h3 className="font-semibold">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOLLOW + TOUR ===== */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="neon-card card p-6">
              <h3 className="heading text-xl">Follow</h3>
              <p className="mt-2 text-gray-700">
                Tap in for drops, behind-the-scenes, and tour updates.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a className="btn btn-outline" href="https://instagram.com/iamnelfuoco" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a className="btn btn-outline" href="https://open.spotify.com/artist/7LPqGS3mrdemn1VRxtvRod" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a className="btn btn-outline" href="https://www.youtube.com/channel/UCpsk7-8rp7M2bLiRa9pBH4w" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a className="btn btn-outline" href="https://linktr.ee/nelfuoco" target="_blank" rel="noopener noreferrer">Linktree</a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/[.06] p-6 text-white">
              <h3 className="heading text-xl">Catch Me Live</h3>
              <p className="mt-2 text-white/90">NYC, LA, and more — new dates dropping soon.</p>
              <Link href="/tour" className="btn btn-outline mt-4">View Tour Dates</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
