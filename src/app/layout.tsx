import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realbearwolf.com"),
  title: {
    default: "Bjørnulf Østvik | BearWolf Founder",
    template: "%s | Bjørnulf Østvik",
  },
  description:
    "Bjørnulf Østvik (Bjornulf Ostvik) — BearWolf founder. Ecogensus. Resource technology. Constructive thermochemistry. Dynamic organic repolymerization. EGS-6.",
  keywords: [
    "Bjørnulf Østvik",
    "Bjornulf Ostvik",
    "BearWolf",
    "BearWolf founder",
    "Ecogensus",
    "constructive thermochemistry",
    "resource technology",
    "dynamic organic repolymerization",
    "EGS-6",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Bjørnulf Østvik",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://realbearwolf.com",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bjørnulf Østvik",
  alternateName: "Bjornulf Ostvik",
  jobTitle: "Founder",
  description:
    "BearWolf founder. Ecogensus. Resource technology. Constructive thermochemistry. Dynamic organic repolymerization.",
  url: "https://realbearwolf.com",
  sameAs: [
    "https://x.com/BjornulfOstvik",
    "https://www.linkedin.com/in/bjornulfostvik/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
