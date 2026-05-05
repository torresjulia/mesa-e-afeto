import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mesa & Afeto | Buffet e Eventos em São Paulo",
  description:
    "Gastronomia artesanal para casamentos, aniversários, formaturas e eventos corporativos. Ingredientes frescos, apresentação elegante e atendimento humanizado.",
  keywords: [
    "buffet",
    "eventos",
    "casamento",
    "aniversário",
    "formatura",
    "corporativo",
    "São Paulo",
    "gastronomia",
  ],
  openGraph: {
    title: "Mesa & Afeto | Buffet e Eventos",
    description:
      "Gastronomia artesanal para momentos que ficam na memória.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${lato.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
