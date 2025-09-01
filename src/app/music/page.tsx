import type { Metadata } from "next";
import { SpotifyArtist, SoundCloudProfile } from "@/components/Embeds";


export const metadata: Metadata = {
title: "Music — Nel Fuoco",
description: "Listen on Spotify & SoundCloud, watch videos, and discover new releases.",
};


export default function MusicPage() {
return (
<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14 space-y-12">
<h1 className="text-3xl font-bold">Music</h1>


{/* Spotify (replace with real artist ID) */}
<section className="space-y-4">
<h2 className="text-xl font-semibold">Spotify</h2>
<SpotifyArtist id="7LPqGS3mrdemn1VRxtvRod" />
</section>


{/* SoundCloud (replace with real profile URL) */}
<section className="space-y-4">
<h2 className="text-xl font-semibold">SoundCloud</h2>
<SoundCloudProfile userUrl="https://soundcloud.com/artist" />
</section>


{/* You can add playlists, albums, Bandcamp, etc. */}
</main>
);
}