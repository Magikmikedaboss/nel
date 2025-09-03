export interface IframeProps {
  src: string;
  title: string;
  className?: string;
  ratioClassName?: string;
  allow?: string;
}

/** Generic responsive iframe — NO autoplay by default */
export function ResponsiveIframe({
  src,
  title,
  className = "",
  ratioClassName = "aspect-video",
  allow = "accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share",
}: IframeProps) {
  return (
    <div className={`relative w-full overflow-hidden rounded-xl ${ratioClassName} ${className}`}>
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        allow={allow} // no autoplay here
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{ border: 0, display: "block" }}
      />
    </div>
  );
}

/** Apple Music — needs encrypted-media; no autoplay */
export function AppleMusicTrack({
  src,
  className = "",
  height = 175,
}: {
  src: string;
  className?: string;
  height?: number;
}) {
  return (
    <iframe
      title="Apple Music Player"
      allow='encrypted-media https://embed.music.apple.com; fullscreen *; clipboard-write *'
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={src}
      height={height}
      style={{ width: "100%", overflow: "hidden", borderRadius: 10, display: "block" }}
      className={`block w-full rounded-xl ${className}`}
      frameBorder={0}
      loading="lazy"
    />
  );
}

/** Spotify — needs encrypted-media; no autoplay */
export function SpotifyArtist({
  id,
  className = "",
  height = 352,
}: {
  id: string;
  className?: string;
  height?: number;
}) {
  const src = `https://open.spotify.com/embed/artist/${id}?utm_source=generator&theme=0`;
  return (
    <iframe
      title="Spotify Artist"
      src={src}
      height={height}
      loading="lazy"
      allow='encrypted-media https://open.spotify.com; clipboard-write *; fullscreen *; picture-in-picture *'
      className={`block w-full rounded-xl ${className}`}
      style={{ borderRadius: 12, background: "#121212", display: "block" }}
      frameBorder={0}
    />
  );
}

/** SoundCloud — needs encrypted-media; no autoplay (auto_play=false already) */
export function SoundCloudTrack({
  trackUrl,
  className = "",
  height = 352,
  color = "#262634",
}: {
  trackUrl: string;
  className?: string;
  height?: number;
  color?: string;
}) {
  const src =
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}` +
    `&color=${encodeURIComponent(color)}` +
    `&auto_play=false&hide_related=false&show_comments=true` +
    `&show_user=true&show_reposts=false&show_teaser=true&visual=true`;

  return (
    <iframe
      title="SoundCloud Track"
      src={src}
      width="100%"
      height={height}
      scrolling="no"
      frameBorder={0}
      loading="lazy"
      allow='encrypted-media https://w.soundcloud.com; clipboard-write *; fullscreen *; picture-in-picture *'
      className={`block w-full rounded-xl ${className}`}
      style={{ background: color, display: "block" }}
    />
  );
}

/** YouTube — privacy-enhanced, no autoplay */
export function YouTubeVideo({
  id,
  title = "YouTube",
  className = "",
}: {
  id: string;
  title?: string;
  className?: string;
}) {
  const src = `https://www.youtube-nocookie.com/embed/${id}?modestbranding=1&rel=0`;
  return (
    <ResponsiveIframe
      src={src}
      title={title}
      className={className}
      ratioClassName="aspect-video"
      allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
    />
  );
}
