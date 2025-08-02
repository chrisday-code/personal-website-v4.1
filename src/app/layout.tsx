import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Roboto_Mono,
  Arimo,
  Poppins,
  Source_Code_Pro,
} from "next/font/google";
import "./globals.css";

// todo cleanup fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Day",
  description: "Created by Chris Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.variable} ${geistSans.variable} ${geistMono.variable} ${arimo.variable} ${inter.variable} ${robotoMono.variable} ${poppins.variable} font-sans bg-gradient-to-b from-[#0d1117] to-[#161b22] text-white min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
