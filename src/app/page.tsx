import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[28rem] overflow-hidden rounded bg-zinc-900 mb-10">
          <Image
            src="/portrait.jpg"
            alt="Bjørnulf Østvik"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-center">
          Bjørnulf Østvik
        </h1>

        <p className="mt-4 text-zinc-500 text-xs sm:text-sm tracking-[0.25em] uppercase">
          Founder · Scientist · Builder
        </p>

        <div className="absolute bottom-10">
          <svg
            className="w-5 h-5 text-zinc-700 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center">
        <div className="w-12 h-px bg-zinc-800" />
      </div>

      {/* Featured Work */}
      <section className="max-w-2xl mx-auto px-6 py-24 md:py-32">
        <div className="space-y-6">
          <Link
            href="/resource-technology"
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
            href="/constructive-thermochemistry"
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
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/40 py-16 text-center">
        <p className="text-zinc-700 text-xs tracking-[0.2em] uppercase">
          More to come
        </p>
      </footer>
    </main>
  );
}
