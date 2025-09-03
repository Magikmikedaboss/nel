"use client";

import { useState, KeyboardEvent } from "react";

type Props = {
  id: string;
  title?: string;
  className?: string; // e.g. "relative aspect-video w-full rounded-xl overflow-hidden"
};

export default function LiteYouTube({ id, title = "YouTube video", className = "" }: Props) {
  const [play, setPlay] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setPlay(true);
    }
  };

  if (play) {
    return (
      <div className={className}>
        <iframe
          className="absolute inset-0 h-full w-full"
          // IMPORTANT: no autoplay param
          src={`https://www.youtube-nocookie.com/embed/${id}?modestbranding=1&rel=0`}
          title={title}
          loading="eager"
          // IMPORTANT: no 'autoplay' in allow
          allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{ border: 0, display: "block" }}
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlay(true)}
      onKeyDown={onKey}
      className={`${className} group`}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumb}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition" aria-hidden="true" />
      <span
        className="absolute inset-0 m-auto grid h-14 w-14 place-items-center rounded-full bg-white/90 text-black shadow-lg transition group-hover:scale-105"
        aria-hidden="true"
      >
        ▶
      </span>
    </button>
  );
}
