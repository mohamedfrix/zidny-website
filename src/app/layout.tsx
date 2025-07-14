import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { getServerLanguage } from "@/lib/server-cookies";
import { NavBarProvider } from "@/context/NavBarContext";
import { GoogleAnalytics } from '@next/third-parties/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    default: "Zidny Agency | Agence Digitale Créative en Algérie",
    template: "%s | Zidny Agency",
  },
  description: "Zidny est une agence digitale qui propose des services en design, développement web et mobile, et création vidéo. Un seul endroit pour faire grandir votre projet.",
  keywords: ["Zidny", "agence digitale", "Algérie", "développement web", "design", "filmmaking", "communication"],
  authors: [{ name: "Zidny Agency", url: "https://zidnyagency.com" }],
  creator: "Zidny Agency",
  openGraph: {
    title: "Zidny Agency | Agence Digitale Créative en Algérie",
    description: "Boostez votre présence digitale avec Zidny : web, design, filmmaking.",
    url: "https://zidnyagency.com",
    siteName: "Zidny Agency",
    images: [
      {
        url: "https://www.zidnyagency.com/_next/static/media/logo.45d43321.svg",
        width: 1200,
        height: 630,
        alt: "Zidny Agency - Agence Digitale Algérie",
      },
    ],
    locale: "fr_DZ",
    type: "website",
  },
  icons: {
    icon: "/images/logo.svg",
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialLanguage = await getServerLanguage();

  return (
    <html lang={initialLanguage} className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased`}
      >
        <NavBarProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            {children}
          </LanguageProvider>
        </NavBarProvider>
        <GoogleAnalytics gaId="G-2FDX9SFXSH" />
      </body>
    </html>
  );
}