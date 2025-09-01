import type { Metadata } from "next";


export const metadata: Metadata = {
title: "Contact — Nel Fuoco",
description: "Booking & management contact details.",
};


export default function ContactPage() {
return (
<main className="mx-auto max-w-6xl px-4 py-10 sm:py-14 space-y-8">
<h1 className="text-3xl font-bold">Contact</h1>
<div className="grid gap-8 md:grid-cols-2">
<div className="space-y-4">
<h2 className="text-xl font-semibold">Booking / Management</h2>
<p className="text-gray-700">
For bookings, press, and partnerships, please email
{" "}
<a className="underline" href="mailto:booking@example.com">booking@example.com</a>.
</p>
<p className="text-gray-700">Provide date, city, venue, set length, budget, and any special requests.</p>
</div>
<form
className="space-y-4 rounded-lg border p-4"
action="mailto:booking@example.com"
method="post"
encType="text/plain"
>
<div>
<label className="block text-sm font-medium">Your Name</label>
<input className="mt-1 w-full rounded border px-3 py-2" name="name" required />
</div>
<div>
<label className="block text-sm font-medium">Email</label>
<input type="email" className="mt-1 w-full rounded border px-3 py-2" name="email" required />
</div>
<div>
<label className="block text-sm font-medium">Message</label>
<textarea className="mt-1 w-full rounded border px-3 py-2" name="message" rows={5} required />
</div>
<button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white" type="submit">Send</button>
</form>
</div>
</main>
);
}