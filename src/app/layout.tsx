import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Dev AS - Webutvikling som fungerer",
  description:
    "Dev AS er et lite utviklerfirma som lager skreddersydde nettsider. Vi jobber tett med våre kunder – fra spennende start-ups og foreninger til etablerte bedrifter som vil ha kvalitet uten å måtte betale formuer.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
