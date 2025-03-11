import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Chai's Essays",
  description: "A collection of essays on topics I care about",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        fontSans.variable,
        "min-h-screen bg-zinc-100"
      )}>
        <div className="min-h-screen flex flex-col">
          <header className="py-6 border-b border-zinc-200 bg-white">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl font-bold text-zinc-900">Chai&apos;s Essays</h1>
            </div>
          </header>
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
            <Analytics />
          </main>
          <footer className="py-6 border-t border-zinc-200 bg-white">
            <div className="container mx-auto px-4">
              <p className="text-center text-zinc-600">
                You can reach me at:{" "}
                <a href="https://www.instagram.com/_chailattte_/" className="text-zinc-900 hover:underline">Instagram</a>{" | "}
                <a href="https://github.com/chaituprakash06" className="text-zinc-900 hover:underline">GitHub</a>{" | "}
                <a href="mailto:chai@talentlex.app" className="text-zinc-900 hover:underline">Email</a>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}