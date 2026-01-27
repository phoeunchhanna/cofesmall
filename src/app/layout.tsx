import type { Metadata } from "next";
import { Geist, Geist_Mono, Battambang } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const battambang = Battambang({
  weight: ["400", "700"],
  subsets: ["khmer"],
  variable: "--font-battambang",
});

export const metadata: Metadata = {
  title: "BuyCofe - Phearsok Coffee",
  description: "Premium Coffee & Drinks",
};

import LanguageSwitcher from "@/components/LanguageSwitcher";
import SocialFloatingButtons from "@/components/SocialFloatingButtons";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${battambang.variable} antialiased font-sans`}
      >
        <LanguageSwitcher />
        <SocialFloatingButtons />
        {children}
      </body>
    </html>
  );
}
