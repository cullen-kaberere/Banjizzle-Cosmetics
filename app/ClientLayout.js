"use client"

import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import "./globals.css"

const geistSans = GeistSans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export default function ClientLayout({ children }) {
  const searchParams = useSearchParams()

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://banjizzlecosmetics.com" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Banjizzle Cosmetics" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Banjizzle Cosmetics",
              description: "Premium natural skincare and cosmetics",
              url: "https://banjizzlecosmetics.com",
              logo: "https://banjizzlecosmetics.com/logo.png",
              sameAs: ["https://instagram.com/banjizzlecosmetics_"],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
