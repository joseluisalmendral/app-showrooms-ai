import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "The Showroom App | Conectando Marcas y Showrooms",
  description: "Conectamos marcas de moda con los mejores espacios para exhibir. Encuentra showrooms o marcas que potencien tu negocio.",
  keywords: ["moda", "showrooms", "marcas", "exhibición", "ropa", "networking"],
  authors: [{ name: "The Showroom App" }],
  creator: "The Showroom App",
  metadataBase: new URL("https://theshowroomapp.com"),
  openGraph: {
    title: "The Showroom App | Conectando Marcas y Showrooms",
    description: "Conectamos marcas de moda con los mejores espacios para exhibir. Encuentra showrooms o marcas que potencien tu negocio.",
    url: "https://theshowroomapp.com",
    siteName: "The Showroom App",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Showroom App",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex flex-col min-h-screen antialiased bg-brandBeige-200">
        <div className="p-4 text-center font-handwritten text-2xl">
          The Showroom App
        </div>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="p-4 text-center text-sm">
          © 2025 The Showroom App
        </footer>
      </body>
    </html>
  );
}