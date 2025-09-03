import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AppleMusicTrack, SpotifyArtist, SoundCloudTrack } from "@/components/Embeds";
import LiteYouTube from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Music — Nel Fuoco",
  description: "Listen on Apple Music, Spotify & SoundCloud. Watch videos and discover new releases.",
};

export default function MusicPage() {
  const videos = [
    { id: "pPyePdw-6ew", title: "Nel Fuoco — Flow Loko" },
    { id: "Xc8Wp1b_g_8", title: "Nel Fuoco — Ciao Baby" },
    { id: "Du7_J7q290I", title: "Nel Fuoco — My Other Half" },
  ];

  return (
    <main>
     {/* Header — neon glass, glow orbs, tight CTAs */}
<section className="section-pad" aria-labelledby="music-heading">
  <div className="wrap">
    <div className="relative surface overflow-hidden text-center p-8 sm:p-12 lg:p-16">
      {/* Decorative glow orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-35"
          style={{ background: "radial-gradient(closest-side, var(--neon-violet), transparent)" }}
        />
        <div
          className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(closest-side, var(--neon-cyan), transparent)" }}
        />
      </div>

      {/* Preheader pill */}
      <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
        New single <span className="text-white">“Ciao Baby”</span>
      </span>

      <h1 id="music-heading" className="relative z-10 h1 gradient-brand mt-4">
        Music
      </h1>

      <p className="relative z-10 mt-3 text-white/85 max-w-2xl mx-auto leading-relaxed">
        Stream the latest releases on your favorite platform.
      </p>

      {/* CTAs to players on the page (make sure the sections use these IDs) */}
      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
        <a href="#apple" className="btn btn-primary group">
          Apple Music <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </a>
        <a href="#spotify" className="btn btn-outline">Spotify</a>
        <a href="#soundcloud" className="btn btn-outline">SoundCloud</a>
      </div>

      {/* Subtle divider line */}
      <div className="relative z-10 mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  </div>
</section>


      {/* Featured + Players */}
      <section className="section-pad" aria-labelledby="featured-and-players">
        <div className="wrap grid gap-8 lg:grid-cols-3">
          {/* Featured release (left) */}
          <div className="surface p-6 space-y-4 lg:col-span-1">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/ciao-baby.jpg"
                alt="Ciao Baby — cover art"
                fill
                className="object-cover"
                // tuned sizes + priority to keep LCP happy if visible early
                sizes="(min-width:1280px) 384px, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                priority
                fetchPriority="high"
              />
            </div>

            <div>
              <h2 className="h2">“Ciao Baby”</h2>
              <p className="mt-2 text-white/80">Sultry hooks. Razor bars. Stream it everywhere.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="https://music.apple.com/us/album/ciao-baby/1810609439?i=1810609440"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Play on Apple Music
              </Link>
              <Link
                href="https://www.youtube.com/watch?v=Xc8Wp1b_g_8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Watch on YouTube
              </Link>
            </div>
          </div>

          {/* Players (right) — stacked, full column width, no borders */}
          <div className="lg:col-span-2 space-y-8">
            {/* All three players intentionally use block/w-full + rounded only.
                No extra wrapper card/border to avoid any visible outline gap. */}

            <div className="space-y-3">
              <h3 className="text-lg font-bold tracking-tight">Apple Music</h3>
              <AppleMusicTrack src="https://embed.music.apple.com/us/song/ciao-baby/1810609440" />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold tracking-tight">Spotify</h3>
              {/* Taller height is set in the component (e.g., 352) for readability */}
              <SpotifyArtist id="7LPqGS3mrdemn1VRxtvRod" />
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold tracking-tight">SoundCloud</h3>
              <SoundCloudTrack trackUrl="https://api.soundcloud.com/tracks/2109983028" />
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-pad" aria-labelledby="videos-heading">
        <div className="wrap">
          <div className="flex items-center justify-between gap-4">
            <h2 id="videos-heading" className="h2">Videos</h2>
            <Link href="/media" className="underline underline-offset-2 decoration-2">
              See all
            </Link>
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.id} className="surface overflow-hidden hover:ring-1 hover:ring-fuchsia-400/40">
                <LiteYouTube id={v.id} title={v.title} className="relative aspect-video w-full" />
                <div className="p-4">
                  <h3 className="font-semibold">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
