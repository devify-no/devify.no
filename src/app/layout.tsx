import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

const title = "Dev AS — Nettsider uten byrålag";
const description =
  "Vi bygger raske, gjennomtenkte nettsider og webløsninger for små og mellomstore bedrifter — med direkte dialog fra første møte til lansering.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devify.no"),
  title: {
    default: title,
    template: "%s | Dev AS",
  },
  description,
  authors: [{ name: "Dev AS", url: "https://www.devify.no" }],
  creator: "Dev AS",
  keywords: [
    "webutvikling",
    "nettside",
    "webdesign",
    "Next.js",
    "TypeScript",
    "Norge",
    "utviklerbyrå",
    "søkemotoroptimalisering",
    "SEO",
  ],
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://www.devify.no",
    siteName: "Dev AS",
    title,
    description,
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Dev AS",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/android-chrome-512x512.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="no" className={`${geist.variable}`}>
      <body>{children}</body>
    </html>
  );
}
