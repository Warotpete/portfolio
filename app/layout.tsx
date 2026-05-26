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
  title: "Warot Tharanamai | Computer Engineering & AI/ML",
  description: "Portfolio of Warot Tharanamai - Computer Engineering student at UBC specializing in machine learning, autonomous systems, and full-stack development.",
  openGraph: {
    title: "Warot Tharanamai | Computer Engineering & AI/ML",
    description: "Computer Engineering student at UBC. Building AI, robotics, and full-stack projects.",
    type: "website",
    url: "https://warot-portfolio.com",
    siteName: "Warot Tharanamai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warot Tharanamai | Computer Engineering & AI/ML",
    description: "Computer Engineering student at UBC specializing in ML and autonomous systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
