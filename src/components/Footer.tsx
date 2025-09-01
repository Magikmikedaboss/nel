import Link from "next/link";


export default function Footer() {
return (
<footer className="mt-16 border-t">
<div className="mx-auto max-w-6xl px-4 py-8 grid gap-6 md:grid-cols-3 text-sm">
<div>
<div className="font-semibold">Nel Fuoco</div>
<p className="text-gray-600 mt-2">© {new Date().getFullYear()} All rights reserved.</p>
</div>
<div>
<div className="font-semibold">Social</div>
<ul className="mt-2 space-y-1 text-gray-700">
<li><Link href="https://instagram.com/iamnelfuoco" className="hover:text-blue-600">Instagram</Link></li>
<li><Link href="https://open.spotify.com/artist/7LPqGS3mrdemn1VRxtvRod" className="hover:text-blue-600">Spotify</Link></li>
<li><Link href="https://www.youtube.com/channel/UCpsk7-8rp7M2bLiRa9pBH4w" className="hover:text-blue-600">YouTube</Link></li>
<li><Link href="https://linktr.ee/nelfuoco" className="hover:text-blue-600">Linktree</Link></li>
</ul>
</div>
<div>
<div className="font-semibold">Contact</div>
<p className="text-gray-700 mt-2">Booking: <a href="mailto:booking@example.com" className="underline">booking@example.com</a></p>
</div>
</div>
</footer>
);
}