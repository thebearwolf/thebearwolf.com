import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Social links - top right */}
      <div className="fixed top-6 right-6 z-10 flex gap-4">
        <a
          href="https://x.com/BjornulfOstvik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="X (Twitter)"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/bjornulfostvik/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.063 2.063 0 1.139-.925 2.065-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>

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
          <div className="relative w-full sm:w-[32rem] md:w-[38rem] lg:w-[44rem] aspect-[3/4] overflow-hidden rounded bg-zinc-900 shrink-0 mx-auto lg:mx-0">
            <Image
              src="/portrait.jpeg"
              alt="Bjørnulf Østvik"
              fill
              className="object-cover"
              priority
              quality={95}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 38rem, 44rem"
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
