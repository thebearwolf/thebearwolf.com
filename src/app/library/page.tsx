import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Library",
  description:
    "Bjørnulf Østvik (Bjornulf Ostvik) — BearWolf founder, Ecogensus, resource technology.",
  alternates: { canonical: "https://realbearwolf.com/library" },
};

export default function Library() {
  return (
    <main className="min-h-[60vh]">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-2xl md:text-3xl font-light tracking-tight mb-12">
          Library
        </h1>
        <div className="space-y-6">
          <Link
            href="/library/resource-technology"
            className="block group border border-zinc-800/60 rounded-lg p-8 md:p-10 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-medium">
              Framework
            </span>
            <h2 className="text-xl md:text-2xl text-zinc-100 font-normal mt-3 group-hover:text-white transition-colors">
              Resource Technology
            </h2>
            <p className="text-zinc-500 mt-2 text-sm">
              Sector Definition and Framework
            </p>
          </Link>

          <Link
            href="/library/constructive-thermochemistry"
            className="block group border border-zinc-800/60 rounded-lg p-8 md:p-10 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-300"
          >
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-600 font-medium">
              Paper
            </span>
            <h2 className="text-xl md:text-2xl text-zinc-100 font-normal mt-3 group-hover:text-white transition-colors">
              Constructive Thermochemistry
            </h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
