import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import LiteYouTube from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Media — Nel Fuoco",
  description: "Photos, videos, and press assets.",
};

const photos = [
  { src: "/media1.jpg", alt: "Live show — purple lights" },
  { src: "/media2.jpg", alt: "Live show — crowd energy" },
  { src: "/media3.jpg", alt: "Backstage — candid moment" },
  { src: "/media4.jpg", alt: "Studio — recording vocals" },
  // add more as you like
];

const videos = [
  { id: "pPyePdw-6ew", title: "Nel Fuoco — Flow Loko" },
  { id: "Xc8Wp1b_g_8", title: "Nel Fuoco — Ciao Baby" },
  { id: "Du7_J7q290I", title: "Nel Fuoco — My Other Half" },
];

export default function MediaPage() {
  return (
    <main>
      {/* Header */}
      <section className="section-pad">
        <div className="wrap">
          <h1 className="h1 gradient-brand">Media</h1>
          <p className="mt-3 text-white/80">
            High-res photos, videos, and press materials for features and promotion.
          </p>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="section-pad">
        <div className="wrap">
          <h2 className="h2">Photos</h2>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((p) => (
              <figure
                key={p.src}
                className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/[.06]"
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                {/* subtle caption + neon edge on hover */}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-sm text-white/90 bg-gradient-to-t from-black/60 to-transparent">
                  {p.alt}
                </figcaption>
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 opacity-0 group-hover:opacity-100 transition opacity duration-300"
                  style={{
                    boxShadow: "0 0 12px rgba(34,211,238,.35), 0 0 16px rgba(240,171,252,.25)",
                    background: "linear-gradient(90deg,#22d3ee,#f0abfc,#22d3ee)"
                  }}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-pad">
        <div className="wrap">
          <div className="flex items-center justify-between gap-4">
            <h2 className="h2">Videos</h2>
            <Link href="/media" className="link-underline">All videos</Link>
          </div>

          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div
                key={v.id}
                className="card neon-card overflow-hidden hover:ring-1 hover:ring-fuchsia-400/40"
              >
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
      <section className="section-pad">
        <div className="wrap">
          <h2 className="h2">Press</h2>
          <ul className="mt-3 space-y-2 text-white/85">
            <li>
              <a className="link-underline" href="/press/nelfuoco-epk.pdf" target="_blank" rel="noopener noreferrer">
                Press Kit (PDF)
              </a>
            </li>
            <li>
              <a className="link-underline" href="/press/nelfuoco-photos.zip">
                High-res Photos (ZIP)
              </a>
            </li>
            <li>
              <a className="link-underline" href="/press/nelfuoco-bio.txt">
                Short Bio (TXT)
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
