import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "徳島のボートシーバスなら｜ボートシーバス2FACE",
  description:
    "徳島・吉野川をメインフィールドとしたボートシーバスガイド。シーバス・アカメ・青物・フラットフィッシュ対応。LINEで簡単予約。",
  keywords: "ボートシーバス,徳島,吉野川,シーバス,アカメ,釣りガイド,2FACE",
  openGraph: {
    title: "徳島のボートシーバスなら｜ボートシーバス2FACE",
    description:
      "徳島・吉野川をメインフィールドとしたボートシーバスガイド。シーバス・アカメ・青物・フラットフィッシュ対応。LINEで簡単予約。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${notoSansJP.variable} font-sans bg-brand-dark text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
