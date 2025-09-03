import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LiteYouTube from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Media — Nel Fuoco",
  description: "Photos, videos, and press assets.",
};

// Drop placeholder JPGs into /public/media/ with these names
const photos = [
  { src: "/media/placeholder-01.jpg", alt: "Live show — purple lights" },
  { src: "/media/placeholder-02.jpg", alt: "Live show — crowd energy" },
  { src: "/media/placeholder-03.jpg", alt: "Backstage — candid moment" },
  { src: "/media/placeholder-04.jpg", alt: "Studio — recording vocals" },
  { src: "/media/placeholder-05.jpg", alt: "Portrait — neon edge" },
  { src: "/media/placeholder-06.jpg", alt: "On set — behind the scenes" },
  { src: "/media/placeholder-07.jpg", alt: "Mic check — soundcheck glow" },
  { src: "/media/placeholder-08.jpg", alt: "Crowd — hands in the air" },
  { src: "/media/placeholder-09.jpg", alt: "Candid — street night shot" },
];

const videos = [
  { id: "pPyePdw-6ew", title: "Nel Fuoco — Flow Loko" },
  { id: "Xc8Wp1b_g_8", title: "Nel Fuoco — Ciao Baby" },
  { id: "Du7_J7q290I", title: "Nel Fuoco — My Other Half" },
];

export default function MediaPage() {
  return (
    <main>
      {/* Header — neon glass with soft glow orbs & CTAs */}
      <section className="section-pad" aria-labelledby="media-heading">
        <div className="wrap">
          <div className="relative surface overflow-hidden text-center p-8 sm:p-12 lg:p-16">
            {/* Decorative glow orbs */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div
                className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl opacity-35"
                style={{ background: "radial-gradient(closest-side, var(--neon-violet), transparent)" }}
              />
              <div
                className="absolute -bottom-28 -right-20 h-80 w-80 rounded-full blur-3xl opacity-25"
                style={{ background: "radial-gradient(closest-side, var(--neon-cyan), transparent)" }}
              />
            </div>

            {/* Content */}
            <h1 id="media-heading" className="relative z-10 h1 gradient-brand">Media</h1>
            <p className="relative z-10 mt-3 text-white/85 max-w-2xl mx-auto leading-relaxed">
              High-res photos, videos, and press materials for features and promotion.
            </p>

            <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
              <a href="#photos" className="btn btn-primary group">
                Photos <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#videos" className="btn btn-outline">Videos</a>
              <a href="#press" className="btn btn-outline">Press</a>
            </div>

            <div className="relative z-10 mt-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section id="photos" className="section-pad" aria-labelledby="photos-heading">
        <div className="wrap">
          <div className="flex items-end justify-between gap-4">
            <h2 id="photos-heading" className="h2">Photos</h2>
            <p className="text-sm text-white/60">Click a photo to open full size</p>
          </div>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <figure
                key={p.src}
                className="group relative overflow-hidden rounded-xl border border-white/15 bg-white/[.06]"
              >
                {/* Click-through to original */}
                <Link href={p.src} target="_blank" className="block">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Neon edge on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        boxShadow: "0 0 12px rgba(34,211,238,.35), 0 0 16px rgba(240,171,252,.25)",
                        background: "linear-gradient(90deg,#22d3ee,#f0abfc,#22d3ee)",
                      }}
                    />
                  </div>
                </Link>

                {/* Caption overlay */}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-sm text-white/90 bg-gradient-to-t from-black/60 to-transparent">
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section id="videos" className="section-pad" aria-labelledby="videos-heading">
        <div className="wrap">
          <div className="flex items-center justify-between gap-4">
            <h2 id="videos-heading" className="h2">Videos</h2>
            <Link href="#videos" className="underline underline-offset-2 decoration-2">
              All videos
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

      {/* Press assets */}
      <section id="press" className="section-pad" aria-labelledby="press-heading">
        <div className="wrap">
          <h2 id="press-heading" className="h2">Press</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <a
              className="surface p-5 hover:ring-1 hover:ring-fuchsia-400/40 rounded-xl transition"
              href="/press/nelfuoco-epk.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white font-semibold">Press Kit (PDF)</div>
              <p className="text-white/70 text-sm mt-1">Bio, photos, and highlights</p>
            </a>

            <a
              className="surface p-5 hover:ring-1 hover:ring-fuchsia-400/40 rounded-xl transition"
              href="/press/nelfuoco-photos.zip"
            >
              <div className="text-white font-semibold">High-res Photos (ZIP)</div>
              <p className="text-white/70 text-sm mt-1">Approved live & studio shots</p>
            </a>

            <a
              className="surface p-5 hover:ring-1 hover:ring-fuchsia-400/40 rounded-xl transition"
              href="/press/nelfuoco-bio.txt"
            >
              <div className="text-white font-semibold">Short Bio (TXT)</div>
              <p className="text-white/70 text-sm mt-1">Copy-ready, updated</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
