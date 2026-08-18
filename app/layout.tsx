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
  title: "AI Job Copilot — Senior Engineering Fit & Gap Engine",
  description:
    "Deterministic requirement extraction, AST signal verification, and actionable skill gap remediation engine built for senior engineering roles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0F0F11] text-[#FAFAFA] selection:bg-[#F59E0B]/20 selection:text-white overflow-x-hidden max-w-full`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:border focus:border-[#F59E0B] focus:bg-[#16161A] focus:px-4 focus:py-2.5 focus:text-xs focus:font-mono focus:tracking-wider focus:text-[#FAFAFA] focus:outline-none"
        >
          SKIP TO MAIN CONTENT
        </a>

        {children}
      </body>
    </html>
  );
}