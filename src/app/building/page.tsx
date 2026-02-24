import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building",
  description:
    "Bjørnulf Østvik (Bjornulf Ostvik) — BearWolf founder, Ecogensus, resource technology.",
  alternates: { canonical: "https://realbearwolf.com/building" },
};

export default function Building() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6">
      <p className="text-zinc-500 text-sm tracking-[0.15em] uppercase">
        Check back soon for content
      </p>
    </main>
  );
}
