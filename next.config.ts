// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",               // apply to every route
        headers: [
          {
            key: "Permissions-Policy",
            value:
              'encrypted-media=(self "https://open.spotify.com" "https://embed.music.apple.com" "https://w.soundcloud.com" "https://www.youtube-nocookie.com"), autoplay=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
