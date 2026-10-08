import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Inter for body text, Space Grotesk for headings
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
