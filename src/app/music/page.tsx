import type { Metadata } from "next";
import Link from "next/link";
import { SpotifyArtist, SoundCloudProfile } from "@/components/Embeds"; // ⟵ lowercase path
import LiteYouTube from "@/components/LiteYouTube";

export const metadata: Metadata = {
  title: "Music — Nel Fuoco",
  description:
    "Listen on Spotify & SoundCloud, watch videos, and discover new releases.",
};

export default function MusicPage() {
  const videos = [
    { id: "pPyePdw-6ew", title: "Nel Fuoco — Flow Loko" },
    { id: "Xc8Wp1b_g_8", title: "Nel Fuoco — Ciao Baby" },
    { id: "Du7_J7q290I", title: "Nel Fuoco — My Other Half" },
  ];

  return (
    <main>
      {/* Header */}
      <section className="section-pad">
        <div className="wrap">
          <h1 className="h1 gradient-brand">Music</h1>
          <p className="mt-3 text-white/80">
            Stream the latest releases and dive into videos, playlists, and more.
          </p>
        </div>
      </section>

      {/* Listen CTA strip */}
      <section className="section-pad">
        <div className="wrap">
          <div className="glass rounded-xl border border-white/20 p-5">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="https://open.spotify.com/artist/7LPqGS3mrdemn1VRxtvRod"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-primary-glow"
              >
                Play on Spotify
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCpsk7-8rp7M2bLiRa9pBH4w"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                YouTube Channel
              </Link>
              <Link
                href="#"
                className="btn btn-outline"
                aria-label="Apple Music (coming soon)"
              >
                Apple Music
              </Link>
              <Link
                href="https://linktr.ee/nelfuoco"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Linktree
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spotify */}
      <section className="section-pad">
        <div className="wrap space-y-4">
          <h2 className="h2">Spotify</h2>
          <SpotifyArtist id="7LPqGS3mrdemn1VRxtvRod" className="neon-card" />
        </div>
      </section>

      {/* SoundCloud */}
      <section className="section-pad">
        <div className="wrap space-y-4">
          <h2 className="h2">SoundCloud</h2>
          <SoundCloudProfile
            userUrl="https://soundcloud.com/artist" // TODO: replace with real profile
            className="neon-card"
          />
        </div>
      </section>

      {/* Videos */}
      <section className="section-pad">
        <div className="wrap">
          <div className="flex items-center justify-between gap-4">
            <h2 className="h2">Videos</h2>
            <Link href="/media" className="link-underline">
              See all
            </Link>
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
    </main>
  );
}
