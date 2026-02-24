import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resource Technology — Sector Definition and Framework",
  description:
    "Resource technology sector definition and framework. Bjørnulf Østvik (Bjornulf Ostvik), BearWolf founder.",
  alternates: { canonical: "https://realbearwolf.com/library/resource-technology" },
};

export default function ResourceTechnology() {
  return (
    <main className="min-h-screen">
      <article className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/library"
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
          Back to Library
        </Link>

        <header className="mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-medium">
            Framework
          </span>
          <h1 className="text-3xl md:text-4xl font-light mt-4 tracking-tight">
            Resource Technology
          </h1>
          <p className="text-zinc-400 mt-3 text-lg font-light">
            Sector Definition and Framework
          </p>
        </header>

        <a
          href="/papers/resource-technology.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-lg text-zinc-300 hover:border-zinc-500 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View PDF
        </a>
      </article>
    </main>
  );
}
