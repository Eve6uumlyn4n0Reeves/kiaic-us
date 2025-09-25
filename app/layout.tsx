import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "KIAIC - Kyrgyz Institute of Advanced AI and Cybernetics",
  description:
    "Leading Central Asia into the future of artificial intelligence and cybernetics. World-class education and research in AI, machine learning, and intelligent systems.",
  keywords:
    "artificial intelligence, cybernetics, machine learning, university, Kyrgyzstan, Central Asia, AI education",
  authors: [{ name: "KIAIC" }],
  openGraph: {
    title: "KIAIC - Decoding the Future, Mastering Intelligence",
    description: "Central Asia's premier institute for AI and cybernetics education and research.",
    url: "https://aifun.edu.kg",
    siteName: "KIAIC",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KIAIC - Kyrgyz Institute of Advanced AI and Cybernetics",
    description: "Leading Central Asia into the future of artificial intelligence and cybernetics.",
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
