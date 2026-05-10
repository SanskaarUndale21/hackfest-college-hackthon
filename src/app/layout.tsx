import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Pirata_One, Crimson_Text } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Compass } from "@/components/Compass";
import { GlobalBackground } from "@/components/GlobalBackground";
import { Loader } from "@/components/Loader";


const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const pirata = Pirata_One({
  variable: "--font-pirata",
  weight: "400",
  subsets: ["latin"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackFest 2K26 | SGBIT AI & DS",
  description:
    "HackFest 2K26 — A 6-Hour Hackathon by the AI & DS Department, SG Balekundri Institute of Technology, Belagavi. Code. Collaborate. Conquer.",
  authors: [{ name: "SGBIT AI & DS" }],
  keywords: [
    "HackFest",
    "HackFest 2K26",
    "Hackathon",
    "SGBIT",
    "SG Balekundri Institute of Technology",
    "AI DS Department",
    "6 hour hackathon",
    "coding competition",
    "Karnataka Hackathon",
    "Belagavi hackathon",
    "college hackathon India",
    "2026",
  ],
  openGraph: {
    title: "HackFest 2K26 | SGBIT AI & DS",
    description:
      "HackFest 2K26 is a 6-Hour Hackathon organised by the AI & DS Department at SGBIT, Belagavi. Build. Break. Innovate.",
    url: "https://sgbit.edu.in/",
    siteName: "HackFest 2K26",
    locale: "en_IN",
    images: [
      {
        url: "https://sgbit.edu.in/logos/hflogowithbg.webp",
        width: 1200,
        height: 630,
        alt: "HackFest 2K26 — 6-Hour Hackathon by SGBIT AI & DS",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HackFest 2K26 | SGBIT AI & DS",
    description:
      "HackFest 2K26 is a 6-Hour Hackathon organised by the AI & DS Department at SGBIT, Belagavi. Build. Break. Innovate.",
    images: ["https://sgbit.edu.in/logos/hflogowithbg.webp"],
  },
  icons: {
    icon: "/logos/sgbit-logo.png",
  },
};

import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${pirata.variable} ${crimson.variable} antialiased select-none`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Loader />
          <GlobalBackground />
          <Navbar />
          {children}
          <Compass />
        </ThemeProvider>
      </body>
    </html>
  );
}
