import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importación de componentes de layout
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Definición de fuentes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadatos de la aplicación
export const metadata = {
  title: "Conecta Marcas y Showrooms | La Plataforma Líder",
  description: "Conectamos marcas de moda con los mejores espacios para exhibir. Encuentra showrooms o marcas que potencien tu negocio.",
  keywords: ["moda", "showrooms", "marcas", "exhibición", "ropa", "networking"],
  authors: [{ name: "Tu Empresa" }],
  creator: "Tu Empresa",
  metadataBase: new URL("https://tudominio.com"),
  openGraph: {
    title: "Conecta Marcas y Showrooms | La Plataforma Líder",
    description: "Conectamos marcas de moda con los mejores espacios para exhibir. Encuentra showrooms o marcas que potencien tu negocio.",
    url: "https://tudominio.com",
    siteName: "Conecta Marcas y Showrooms",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conecta Marcas y Showrooms",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}