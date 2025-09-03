Nel Fuoco — Official Site (Next.js + Tailwind)

A sleek, neon-styled artist site with a switchable “Pro” theme. Pages for Home, Music (Apple/Spotify/SoundCloud embeds), Media (photos + videos), Tour (upcoming/past), and Contact (booking).

Replace YOUR_GH_USERNAME and YOUR_REPO_NAME above after you push the repo.

✨ Features

Next.js (App Router) + Tailwind CSS

Two themes: “neon” (default) and “pro” (muted, professional). Toggle lives in the nav.

Embeds: Apple Music, Spotify, SoundCloud, YouTube (privacy-enhanced) with correct allow attrs and permissions.

Media gallery with placeholder images + video cards (Lite YouTube component included).

Tour table (upcoming + collapsible past).

Contact page with simple “mailto” form (swap to Formspree/Netlify/Vercel easily).

Solid defaults: responsive images, accessible buttons/labels, nice CSS utilities.

🧱 Tech Stack

Next.js 14/15 (App Router)

Tailwind CSS

TypeScript

next/font (Inter + Playfair Display)

▶️ Quick Start (Local)
# 1) Install
npm install

# 2) Run dev server
npm run dev
# open http://localhost:3000

# 3) Build (prod)
npm run build
npm start


Requirements: Node 18+ (or 20+ recommended).

🚀 One-Click Deploy (Vercel)

Push this repo to GitHub.

Update the Deploy button at the top of this README with your repo URL.

Click the button → Vercel will clone, build, and host it for you.

Auto-deploys on every push to main (default).

📂 Project Structure
/public
  /images... (album covers, portraits)
  luigu-album-cover.jpg
  nel-fuoco-summertime-splash-640x480.JPG
/src
  /app
    layout.tsx
    globals.css
    page.tsx                 # Home
    /music/page.tsx
    /media/page.tsx
    /tour/page.tsx
    /contact/page.tsx
  /components
    Embeds.tsx               # Apple/Spotify/SC/YouTube
    LiteYouTube.tsx
    NeonNavBar.tsx
    Footer.tsx
  /styles (optional split)
/lib (optional)
next.config.ts
README.md

🎨 Theming (Neon ↔ Pro)

We use a simple data-attribute theme on the <html> element. The navbar toggles and persists it via localStorage.

Default theme: neon

Alternative theme: pro

CSS lives in globals.css under @layer base / @layer components.

The toggle code is in src/components/NeonNavBar.tsx:

reads localStorage.theme

sets document.documentElement.dataset.theme = "neon" | "pro"

You can add pro-specific overrides like:

:root[data-theme="pro"] {
  --page: #0b0b0f;          /* darker neutral */
  --neon-pink: #e5e7eb;     /* muted accents */
  --neon-cyan: #cbd5e1;
  --neon-violet: #d1d5db;
}
/* Optional: tone down gradients, borders, shadows for pro */

🖼 Editing Content

Images: place in /public. Update paths in pages/components.

Home hero & About: src/app/page.tsx

Music (players + featured art): src/app/music/page.tsx

Media (gallery + videos): src/app/media/page.tsx

Tour (list of shows): src/app/tour/page.tsx — edit the shows array.

Contact (emails/wording): src/app/contact/page.tsx

Embeds (Apple/Spotify/SC/YouTube): src/components/Embeds.tsx

▶️ Embeds & Permissions

We’ve already set correct allow attributes on iframes and configured a Permissions-Policy response header to prevent console warnings:

Apple Music: allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" + sandbox

Spotify: allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"

YouTube (nocookie): allow="accelerometer; clipboard-write; gyroscope; picture-in-picture; web-share"

Server Headers (Next.js)

next.config.ts includes headers() that add:

Permissions-Policy:
  encrypted-media=(self "https://open.spotify.com" "https://embed.music.apple.com" "https://w.soundcloud.com" "https://www.youtube-nocookie.com"),
  autoplay=()


This allows encrypted media (for DRM checks) but disables autoplay site-wide.

If you deploy behind another proxy, ensure those headers aren’t stripped.

✉️ Contact Form Options

Current form uses a simple mailto: (no backend). Choose one:

1) Formspree (super easy)

Create a Formspree project → copy the endpoint.

Replace the <form action="mailto:..."> with:

<form action="https://formspree.io/f/yourid" method="POST">
  <!-- inputs -->
</form>


Done—emails will forward to your address.

2) Netlify Forms

If hosted on Netlify, add data-netlify="true" and a hidden input name="form-name".

Netlify captures submissions in their dashboard.

3) Vercel Serverless (full control)

Create src/app/api/contact/route.ts to send email via SMTP (Nodemailer).

Add SMTP env vars in Vercel (SMTP_HOST, SMTP_USER, etc.).

Point the form to /api/contact.
(We can add the API route later if you want it baked in.)

🧪 Useful Scripts
npm run dev       # start dev server
npm run build     # production build
npm run start     # run built app
npm run lint      # lint

🔧 Troubleshooting

Encrypted-media / autoplay warnings in console

We’ve disabled autoplay on iframes and added Permissions-Policy headers.

If you still see warnings in prod, verify headers reach the browser:

Mac/Linux

curl -I https://your-domain.com | grep -i permissions-policy


Windows PowerShell

(Invoke-WebRequest -Method Head -Uri https://your-domain.com).Headers["Permissions-Policy"]


Largest Contentful Paint (LCP) image warnings

Add priority to above-the-fold images (we did on hero/about where needed).

Use accurate sizes attributes to avoid downloading huge images on mobile.

Smooth scroll warning (Next.js)

Add data-scroll-behavior="smooth" to <html> if you enable smooth scrolling globally.

📦 Static Export (optional)

If you want a folder of plain files you can host anywhere:

// next.config.ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;


Then:

npm run build
# site is in /out


Note: server routes (API) won’t work in static export.

📝 License

You own your content. The code here can be MIT if you want—add a LICENSE file or keep it private.