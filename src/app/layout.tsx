import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Instagram, Github, Mail } from "lucide-react"; // Import the icons

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
        "min-h-screen bg-white"
      )}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1 pt-8">
            {children}
            <Analytics />
          </main>
          <div className="footer-container">
            <p className="footer-text">
              You can reach me at: {" "}
              <a href="https://www.instagram.com/_chailattte_/" style={{ color: '#0000FF', textDecoration: 'none' }}><Instagram className="inline w-4 h-4 mr-1" /> Instagram</a>{" | "}
              <a href="https://github.com/chaituprakash06" style={{ color: '#0000FF', textDecoration: 'none' }}><Github className="inline w-4 h-4 mr-1" /> GitHub</a>{" | "}
              <a href="mailto:chai@talentlex.app" style={{ color: '#0000FF', textDecoration: 'none' }}><Mail className="inline w-4 h-4 mr-1" /> Email</a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}