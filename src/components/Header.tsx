import Link from "next/link";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/story", label: "STORY" },
  { href: "/building", label: "BUILDING" },
  { href: "/library", label: "LIBRARY" },
  { href: "/connect", label: "CONNECT" },
];

export default function Header() {
  return (
    <header className="border-b border-zinc-800/40">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
        {nav.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-white hover:text-zinc-300 font-bold text-sm sm:text-base tracking-[0.15em] uppercase transition-colors"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
