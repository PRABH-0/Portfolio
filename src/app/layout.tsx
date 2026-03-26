import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prabhjot Singh | Full Stack Developer",
  description: "Portfolio of Prabhjot Singh, Full Stack Developer building scalable applications.",
};

import Background from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="relative min-h-screen flex flex-col text-foreground font-sans">
        <ScrollProgress />
        <CustomCursor />
        <Background />
        <Navbar />
        <main className="flex-grow flex flex-col pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
