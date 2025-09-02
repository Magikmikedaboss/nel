interface IframeProps {
  src: string;
  title: string;
  /** Extra classes for the outer wrapper (use: "card neon-card" etc.) */
  className?: string;
  /** Aspect ratio class; defaults to aspect-video */
  ratioClassName?: string;
}

/** Generic responsive iframe with a neon-friendly frame */
export function ResponsiveIframe({
  src,
  title,
  className = "",
  ratioClassName = "aspect-video",
}: IframeProps) {
  return (
    <div
      className={
        `relative w-full overflow-hidden rounded-xl border border-white/20 bg-white/[.06] ${ratioClassName} ` +
        className
      }
    >
      <iframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

/** Spotify artist embed */
export function SpotifyArtist({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  // Spotify requires a fixed height for the Artist embed
  return (
    <div
      className={
        "relative w-full overflow-hidden rounded-xl border border-white/20 bg-white/[.06] " +
        className
      }
      style={{ height: 352 }}
    >
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

/** SoundCloud user profile/player (violet tinted to match theme) */
export function SoundCloudProfile({
  userUrl,
  className = "",
}: {
  userUrl: string;
  className?: string;
}) {
  const src =
    `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      userUrl
    )}` +
    `&color=%23a855f7&auto_play=false&hide_related=false&show_comments=true` +
    `&show_user=true&show_reposts=false&show_teaser=true`;
  return (
    <ResponsiveIframe
      src={src}
      title="SoundCloud"
      className={className}
      ratioClassName="aspect-video"
    />
  );
}

/** YouTube embed (privacy-enhanced domain + modest branding) */
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
    />
  );
}
