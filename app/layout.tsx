import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Inter for text and the thin heading lines, Instrument Serif for the italic ones
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://warotpete.vercel.app"),
  title: "Warot Tharanamai | Computer Engineering & AI/ML",
  description: "Portfolio of Warot Tharanamai - Computer Engineering student at UBC specializing in machine learning, autonomous systems, and full-stack development.",
  openGraph: {
    title: "Warot Tharanamai | Computer Engineering & AI/ML",
    description: "Computer Engineering student at UBC. Building AI, robotics, and full-stack projects.",
    type: "website",
    url: "/",
    siteName: "Warot Tharanamai",
    images: [{ url: "/profile.jpeg", alt: "Warot Tharanamai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warot Tharanamai | Computer Engineering & AI/ML",
    description: "Computer Engineering student at UBC specializing in ML and autonomous systems.",
    images: ["/profile.jpeg"],
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
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
