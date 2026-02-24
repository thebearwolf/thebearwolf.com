import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 pt-12 pb-6 md:pt-16 md:pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight">
          Bjørnulf Østvik
        </h1>
        <p className="mt-4 text-zinc-500 text-xs sm:text-sm tracking-[0.25em] uppercase">
          Founder · Scientist · Builder
        </p>
      </header>

      {/* Main content: photo left, papers right */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Portrait */}
          <div className="relative w-full sm:w-[28rem] md:w-[32rem] lg:w-[36rem] aspect-[3/4] overflow-hidden rounded bg-zinc-900 shrink-0 mx-auto lg:mx-0">
            <Image
              src="/portrait.jpg"
              alt="Bjørnulf Østvik"
              fill
              className="object-cover"
              priority
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 32rem, 36rem"
            />
          </div>

          {/* Papers */}
          <div className="flex flex-col gap-6 w-full lg:pt-8">
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
