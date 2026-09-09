import type { Metadata, Viewport } from "next";
import { Caveat, Courier_Prime } from "next/font/google";
import { profile } from "@/lib/profile";
import "./globals.css";

/** Handwritten register — the cover, page titles, margin notes. */
const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-hand",
  display: "swap",
});

/** Typewriter register — everything you actually read. */
const type = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-type",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Portfolio of Lakshya Karira, an AI engineer, kept as a notebook you turn the pages of.",
  authors: [{ name: profile.name }],
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ece3cd",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hand.variable} ${type.variable}`}>
      <body className="font-type">{children}</body>
    </html>
  );
}
