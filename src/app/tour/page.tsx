import type { Metadata } from "next";
type Show = { date: string; city: string; venue: string; link?: string };
const shows: Show[] = [
{ date: "2025-09-20", city: "Las Vegas, NV", venue: "Downtown Stage", link: "#" },
{ date: "2025-10-04", city: "Los Angeles, CA", venue: "Echo Park", link: "#" },
{ date: "2025-11-12", city: "Phoenix, AZ", venue: "Crescent Ballroom", link: "#" },
];


export default function TourPage() {
return (
<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14 space-y-8">
<h1 className="text-3xl font-bold">Tour</h1>
<div className="overflow-x-auto rounded-lg border">
<table className="min-w-full text-left text-sm">
<thead className="bg-gray-50">
<tr>
<th className="px-4 py-3 font-semibold">Date</th>
<th className="px-4 py-3 font-semibold">City</th>
<th className="px-4 py-3 font-semibold">Venue</th>
<th className="px-4 py-3 font-semibold">Tickets</th>
</tr>
</thead>
<tbody>
{shows.map((s) => (
<tr key={`${s.date}-${s.venue}`} className="border-t">
<td className="px-4 py-3">{new Date(s.date).toLocaleDateString()}</td>
<td className="px-4 py-3">{s.city}</td>
<td className="px-4 py-3">{s.venue}</td>
<td className="px-4 py-3">
{s.link ? (
<a className="rounded border px-3 py-1 text-blue-600 hover:underline" href={s.link}>Tickets</a>
) : (
<span className="text-gray-500">TBA</span>
)}
</td>
</tr>
))}
</tbody>
</table>
</div>
</main>
);
}