import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito } from '@next/font/google';
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
  title: "LauriYei - Mantenimiento de Pisccinas, Jacuzzis y Jardinería",
  description: "Somos una empresa líder en mantenimiento de piscinas, jacuzzis y jardinería que opera en la ciudad de Ibagué y municipios aledaños, trabajamos con piscinas privadas, publicas, conjuntos residenciales, casa quinta, constructoras y toda persona natural o jurídica que requiera de nuestros servicios profesinales.",
  keywords: ['mantenimiento', 'piscinas', 'jacuzzis','jardinería', 'Ibagué', 'Tolima', 'Wilmer Ramirez'],
  authors: [ { name:'Wilmer Ramirez'}],
  applicationName: 'LauriYei'
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
        {children}
      </body>
    </html>
  );
}
