import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/shared/SmoothScroll";
import "./globals.css";
import { Dock } from "lucide-react";
import { DockDemo } from "@/components/shared/CustomDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          {children}
          <DockDemo />
        </SmoothScroll>
      </body>
    </html> 
  );
}
