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
      {/* HERO — text-only (no background image) */}
      {/* HERO — neon glass, glow orbs, tight CTAs */}
<section className="section-pad" aria-labelledby="hero-heading">
  <div className="wrap">
    <div className="relative surface overflow-hidden p-8 sm:p-12 lg:p-16 text-center">
      {/* Decorative glow orbs (pure CSS, no images) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-20 h-64 w-64 rounded-full blur-3xl opacity-40 animate-pulse"
          style={{ background: "radial-gradient(closest-side, var(--neon-violet), transparent)" }}
        />
        <div
          className="absolute -bottom-28 -right-16 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(closest-side, var(--neon-cyan), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Preheader pill */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
          New single <span className="text-white">“Ciao Baby”</span>
        </span>

        <h1 id="hero-heading" className="h1 gradient-brand mt-4">Nel Fuoco</h1>

        <p className="mt-3 max-w-2xl mx-auto text-white/90 leading-relaxed">
          Energy. Bars. Brooklyn heat. New single <span className="font-semibold">“Ciao Baby”</span> out now.
        </p>

        {/* CTAs with a tiny motion nudge */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/music" className="btn btn-primary group">
            Listen Now <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
          <Link href="/tour" className="btn btn-outline">
            Tour Dates
          </Link>
        </div>

        {/* Micro meta line (optional) */}
        <div className="mt-5 flex items-center justify-center gap-4 text-xs text-white/60">
          <span>Brooklyn Based</span>
          <span className="w-1 h-1 rounded-full bg-white/30" />
          <span>R&amp;B • Hip Hop • Pop • Artist • Writer • Poet • Creator </span>
        </div>

        {/* Scroll cue */}
        <a
          href="#about-heading"
          className="mt-8 inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll</span>
          <span className="animate-bounce">▾</span>
        </a>
      </div>
    </div>
  </div>
</section>


{/* ABOUT — collapsible with photo + bio */}
{/* ABOUT — image always visible + teaser + read more dropdown */}
<section className="section-pad" aria-labelledby="about-heading">
  <div className="wrap">
    <div className="surface p-6 sm:p-8">
      <div className="grid items-start gap-8 md:grid-cols-2">
        {/* Left: Photo (always visible) */}
        <div className="overflow-hidden rounded-xl border border-white/10">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/nel-fuoco-summertime-splash-640x480.JPG"
              alt="Nel Fuoco performing live"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
              priority
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Right: Bio (teaser + expandable) */}
        <div>
          <h2 id="about-heading" className="h2">About Nel Fuoco</h2>

          {/* Teaser (always visible) */}
          <p className="mt-3 text-white/85 leading-relaxed">
            Nel Fuoco is a Brooklyn-based singer-songwriter and lyricist whose
            music ignites the spark between soulful vulnerability and unapologetic
            confidence. Drawing on her roots in street-corner freestyle battles and
            late-night studio sessions, she blends pop-driven hooks, R&amp;B grooves,
            and poetic storytelling into a sound that feels both familiar and electrifying.
          </p>

          {/* Read more (collapsible) */}
          <details className="group mt-3">
            <summary
              className="inline-flex items-center gap-2 cursor-pointer select-none rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/15"
              aria-controls="bio-more"
            >
              <span className="group-open:hidden">Read more</span>
              <span className="hidden group-open:inline">Show less</span>
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>

            <div id="bio-more" className="mt-4 space-y-4 text-white/85 leading-relaxed">
              <p>
                Since her debut single, “I Think We Have a Problem,” Nel has captured ears and
                hearts with lyrics that explore the tumult of modern love—its dizzying highs,
                its bittersweet regrets, and the fierce joy of finding yourself in the melody.
                Her latest EP, <em>After Hours Confessions</em>, debuted on indie charts within
                days of release, thanks to standout tracks like “Neon Signs” and “Midnight
                Confession,” each showcasing her sultry vocal tone and razor-sharp wordplay.
              </p>
              <p>
                Beyond the studio, Nel’s live performances are an intimate conversation: she
                brings audiences to their feet with soaring choruses, then leans in close for a
                whisper of truth. A proud advocate for mental-health awareness, she partners with
                youth arts programs in New York City, mentoring aspiring songwriters and reminding
                them that every powerful line begins with an honest heart.
              </p>
              <p>
                As she prepares her full-length album for early 2026, Nel Fuoco is more than a
                rising talent—she’s a storyteller lighting the way forward for a new generation
                of music lovers.
              </p>
            </div>
          </details>

          <div className="mt-6">
            <Link href="/contact" className="btn btn-outline">Booking &amp; Press</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* LATEST RELEASE */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid items-start gap-8 lg:grid-cols-[360px,1fr]">
            {/* Cover art */}
            <div className="surface relative aspect-square overflow-hidden">
              <Image
                src="/luigu-album-cover.jpg"
                alt="Latest release cover art"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 360px"
              />
            </div>

            {/* Copy + CTAs */}
            <div className="surface p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold rounded-full px-3 py-1 border border-white/15 bg-white/10 text-white/85">
                  New
                </span>
                <h2 className="h2">Latest Release — “Ciao Baby”</h2>
              </div>
              <p className="mt-3 text-white/85">
                Sultry R&amp;B hooks and razor-sharp wordplay. Stream it everywhere.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  className="btn btn-primary"
                  href="https://music.apple.com/us/album/ciao-baby/1810609439?i=1810609440"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apple Music
                </a>
                <a
                  className="btn btn-outline"
                  href="https://open.spotify.com/artist/7LPqGS3mrdemn1VRxtvRod"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify
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

      {/* VIDEO GALLERY */}
      <section className="section-pad">
        <div className="wrap">
          <div className="flex items-center justify-between gap-4">
            <h2 className="h2">Video Gallery</h2>
            <Link
              href="/media"
              className="underline underline-offset-2 decoration-2"
            >
              See all
            </Link>
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div key={v.id} className="surface overflow-hidden">
                {/* If you have a LiteYouTube component, use it here instead */}
                <div className="relative aspect-video w-full">
                  <iframe
  className="absolute inset-0 h-full w-full"
  src={`https://www.youtube-nocookie.com/embed/${v.id}?modestbranding=1&rel=0`}
  title={v.title}
  loading="lazy"
  allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share
"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>

                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOLLOW + TOUR */}
      <section className="section-pad">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="surface p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight">Follow</h3>
              <p className="mt-2 text-white/85">
                Tap in for drops, behind-the-scenes, and tour updates.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  className="btn btn-outline"
                  href="https://instagram.com/iamnelfuoco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  className="btn btn-outline"
                  href="https://open.spotify.com/artist/7LPqGS3mrdemn1VRxtvRod"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify
                </a>
                <a
                  className="btn btn-outline"
                  href="https://www.youtube.com/channel/UCpsk7-8rp7M2bLiRa9pBH4w"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
                <a
                  className="btn btn-outline"
                  href="https://linktr.ee/nelfuoco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linktree
                </a>
              </div>
            </div>

            <div className="surface-alt p-6 sm:p-8">
              <h3 className="text-xl font-extrabold tracking-tight">Catch Me Live</h3>
              <p className="mt-2 text-white/90">
                NYC, LA, and more — new dates dropping soon.
              </p>
              <Link href="/tour" className="btn btn-outline mt-4">
                View Tour Dates
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
