import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sci-Fi A.I | Intelligent Software & AI Systems",
    template: "%s | Sci-Fi A.I",
  },
  description:
    "Sci-Fi A.I is a next-generation AI agency focused on building futuristic, intelligent systems and software for automation, creativity, and innovation.",
  keywords: [
    "AI agency",
    "artificial intelligence",
    "automation software",
    "intelligent systems",
    "creative AI",
    "machine learning",
    "software company",
    "AI franchise",
    "tech startup",
    "Sci-Fi A.I",
  ],
  authors: [{ name: "CaiqueWav", url: "https://caiques-portfolio.vercel.app" }],
  creator: "CaiqueWav",
  openGraph: {
    title: "Sci-Fi A.I | Futuristic Software & AI Solutions",
    description:
      "We develop intelligent and scalable AI systems for creative, business, and enterprise needs. Welcome to the future of software.",
    url: "https://yourdomain.com",
    siteName: "Sci-Fi A.I",
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
