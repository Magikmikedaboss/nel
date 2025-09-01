interface IframeProps {
src: string;
title: string;
}


export function ResponsiveIframe({ src, title }: IframeProps) {
return (
<div className="relative w-full overflow-hidden rounded-lg aspect-video">
<iframe
className="absolute inset-0 h-full w-full"
src={src}
title={title}
loading="lazy"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
/>
</div>
);
}


export function SpotifyArtist({ id }: { id: string }) {
return (
<div className="relative w-full overflow-hidden rounded-lg" style={{ height: 352 }}>
<iframe
title="Spotify Artist"
className="absolute inset-0 h-full w-full"
src={`https://open.spotify.com/embed/artist/${id}`}
loading="lazy"
allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
/>
</div>
);
}


export function SoundCloudProfile({ userUrl }: { userUrl: string }) {
const src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(userUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
return <ResponsiveIframe src={src} title="SoundCloud" />;
}


export function YouTubeVideo({ id }: { id: string }) {
return <ResponsiveIframe src={`https://www.youtube.com/embed/${id}`} title="YouTube" />;
}