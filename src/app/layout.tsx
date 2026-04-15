import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Suspense } from "react";
import AnalyticsClient from "@/components/AnalyticsClient";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sistema de Gestão de Bibliotecas - E. E. Prof. Gastão Valle",
  description:
    "Sistema gratuito e de código aberto para gestão de bibliotecas escolares. Controle livros, alunos e empréstimos de forma moderna e eficiente. Desenvolvido na E. E. Professor Gastão Valle.",
  keywords: [
    "sistema de biblioteca",
    "gestão de biblioteca escolar",
    "controle de empréstimos",
    "biblioteca digital",
    "software escolar gratuito",
    "código aberto",
    "gastão valle",
    "escola estadual",
    "biblioteca escola",
    "gerenciamento de livros",
  ],
  authors: [{ name: "E. E. Professor Gastão Valle" }],
  creator: "E. E. Professor Gastão Valle",
  publisher: "E. E. Professor Gastão Valle",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sistema de Gestão de Bibliotecas - Gastão Valle",
    title: "Sistema de Gestão de Bibliotecas - E. E. Prof. Gastão Valle",
    description:
      "Sistema gratuito e de código aberto para gestão de bibliotecas escolares. Controle livros, alunos e empréstimos de forma moderna e eficiente.",
    images: [
      {
        url: "/images/library-app.jpeg",
        width: 1200,
        height: 630,
        alt: "Interface do Sistema de Gestão de Bibliotecas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Gestão de Bibliotecas - E. E. Prof. Gastão Valle",
    description:
      "Sistema gratuito e de código aberto para gestão de bibliotecas escolares. Controle livros, alunos e empréstimos de forma moderna e eficiente.",
    images: ["/images/library-app.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Sistema de Gestão de Bibliotecas",
              description:
                "Sistema gratuito e de código aberto para gestão de bibliotecas escolares. Controle livros, alunos e empréstimos de forma moderna e eficiente.",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Windows",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
              },
              author: {
                "@type": "EducationalOrganization",
                name: "E. E. Professor Gastão Valle",
                url: "https://www.gastaovalle.com/",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Bocaiúva",
                  addressRegion: "MG",
                  addressCountry: "BR",
                },
              },
              featureList: [
                "Gestão de Alunos",
                "Catálogo com Código de Barras",
                "Controle de Empréstimos",
                "Reserva de Livros",
                "Sistema de Notificações",
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased min-h-screen bg-background text-foreground flex flex-col`}>
        <Suspense fallback={null}>
          <AnalyticsClient />
        </Suspense>
        {children}
      </body>
    </html>
  );
}