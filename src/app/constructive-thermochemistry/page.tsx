import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constructive Thermochemistry",
  description:
    "Constructive thermochemistry. Bjørnulf Østvik (Bjornulf Ostvik), BearWolf founder.",
  alternates: { canonical: "https://realbearwolf.com/constructive-thermochemistry" },
};

export default function ConstructiveThermochemistry() {
  return (
    <main className="min-h-screen">
      <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="text-zinc-600 text-sm hover:text-zinc-400 transition-colors inline-flex items-center gap-2 mb-16"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </Link>

        <header className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-medium">
            Paper
          </span>
          <h1 className="text-3xl md:text-4xl font-light mt-4 tracking-tight">
            Constructive Thermochemistry
          </h1>
        </header>

        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>Content coming soon.</p>
        </div>
      </article>
    </main>
  );
}
