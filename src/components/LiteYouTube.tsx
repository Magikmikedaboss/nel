"use client";

import { useState } from "react";

type Props = {
  id: string;
  title: string;
  className?: string;
};

export default function LiteYouTube({ id, title, className }: Props) {
  const [play, setPlay] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  if (play) {
    return (
      <div className={className}>
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&modestbranding=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      className={className + " group"}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumb}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" />
      <span className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-black grid place-items-center shadow-lg group-hover:scale-105 transition">
        ▶
      </span>
    </button>
  );
}
