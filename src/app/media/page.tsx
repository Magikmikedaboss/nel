import Image from "next/image";
import type { Metadata } from "next";


export const metadata: Metadata = {
title: "Media — Nel Fuoco",
description: "Photos, videos, and press assets.",
};


const photos = [
{ src: "/media1.jpg", alt: "Live show 1" },
{ src: "/media2.jpg", alt: "Live show 2" },
{ src: "/media3.jpg", alt: "Backstage" },
{ src: "/media4.jpg", alt: "Studio" },
];


export default function MediaPage() {
return (
<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14 space-y-8">
<h1 className="text-3xl font-bold">Media</h1>
<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
{photos.map((p) => (
<div key={p.src} className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
<Image src={p.src} alt={p.alt} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
</div>
))}
</div>


<section className="space-y-4">
<h2 className="text-xl font-semibold">Press</h2>
<ul className="list-disc pl-5 text-gray-700 space-y-1">
<li><a className="underline" href="#">Press Kit (PDF)</a></li>
<li><a className="underline" href="#">High-res photos (ZIP)</a></li>
</ul>
</section>
</main>
);
}