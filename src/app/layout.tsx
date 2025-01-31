'use client'
import "./globals.css";

import ClientProviders from "./components/action/ClientProviders";
import { Metadata } from "next";
import { getTranslations } from "@/src/app/lib/i18n"; // ✅ Correct import

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale || "en";
  const t = getTranslations(locale); // ✅ Now correctly defined

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    openGraph: {
      title: t.metadata.title,
      description: t.metadata.description,
      images: t.metadata.image,
    },
    icons: {
      icon: t.metadata.image,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}