import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="wrap">
        {/* Carded footer that floats above the neon bg */}
        <div className="surface rounded-2xl p-6 sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-sm">
            {/* Brand */}
            <div>
              <div className="neon-logo">Nel Fuoco</div>
              <p className="mt-2 text-white/70">© {year} All rights reserved.</p>
            </div>

            {/* Social (horizontal row instead of vertical list) */}
            <div>
              <h3 className="font-semibold text-white/90">Social</h3>
              <div className="mt-3 flex flex-wrap gap-4">
                <Link
                  href="https://instagram.com/iamnelfuoco"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="https://open.spotify.com/artist/7LPqGS3mrdemn1VRxtvRod"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Spotify
                </Link>
                <Link
                  href="https://www.youtube.com/channel/UCpsk7-8rp7M2bLiRa9pBH4w"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  YouTube
                </Link>
                <Link
                  href="https://linktr.ee/nelfuoco"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Linktree
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-white/90">Contact</h3>
              <p className="mt-3 text-white/80">
              {" "}
                <a
                  href="mailto:booking@NelFuoco.com"
                  className="underline hover:opacity-90"
                >
                  booking@NelFuoco.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Tiny line & note */}
        <div className="py-4 text-center text-xs text-white/50">
          Built with Next.js + Tailwind
        </div>
      </div>
    </footer>
  );
}
