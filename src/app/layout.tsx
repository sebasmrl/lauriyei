import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito } from '@next/font/google';
import { Footer, Header } from "@/components";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ["200" , "300" , "400" , "500" , "600" , "700" , "800" , "900" , "1000"], // Puedes especificar los pesos que necesitas
});


export const metadata: Metadata = {
  title: "Lauriyei - Mantenimiento de Piscinas y Jacuzzis en Ibagué",
  description: "Somos una empresa líder en mantenimiento de piscinas y jacuzzis que opera en la ciudad de Ibagué y municipios aledaños, trabajamos con piscinas privadas, publicas, conjuntos residenciales, casa quinta, constructoras y toda persona natural o jurídica que requiera de nuestros servicios profesinales.",
  keywords: ['mantenimiento de piscinas', 'Manteniemiento de piscinas en Ibagué','Lauriyei','lauriyei', 'mantenimiento',  'piscinas', 'jacuzzis','jardinería', 'Ibagué', 'Tolima', 'Wilmer Ramirez'],
  authors: [ { name:'Wilmer Ramirez'}],
  applicationName: 'Lauriyei',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8535428079535434"
     crossOrigin="anonymous"></script>
    </html>
  );
}
