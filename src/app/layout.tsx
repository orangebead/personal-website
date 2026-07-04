import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";
import { DockDemo } from "@/components/shared/CustomDock";

// Point this to exactly where you saved the font file
const geistPixel = localFont({
  src: "./fonts/GeistPixel.ttf",
  variable: "--font-geist-pixel",
});

export const metadata: Metadata = {
  title: "Neil Laturkar",
  description: "Student, Developer, and Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistPixel.variable} ${geistPixel.className} antialiased`}
      >
        <SmoothScroll>
          {children}
          <DockDemo />
        </SmoothScroll>
      </body>
    </html> 
  );
}