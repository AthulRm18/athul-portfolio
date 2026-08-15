import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-instrument",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Athul R Mohan",
  description: "ML, systems, and the projects in between.",
  keywords: [
    "Athul R Mohan",
    "AI",
    "machine learning",
    "deep learning",
    "portfolio",
  ],
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, instrumentSerif.variable, jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-screen">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.04]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(232,168,124,0.8) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
