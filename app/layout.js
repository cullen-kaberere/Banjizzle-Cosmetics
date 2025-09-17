import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata = {
  title: {
    default: "Banjizzle Cosmetics - Luxury Skincare, Naturally Yours",
    template: "%s | Banjizzle Cosmetics",
  },
  description:
    "Premium natural skincare and cosmetics featuring Rose Water, Raw Shea Butter, Serums, and Self-care Packages. Luxury beauty products for natural elegance and professional results.",
  keywords: [
    "luxury skincare",
    "natural cosmetics",
    "rose water",
    "shea butter",
    "vitamin c serum",
    "hyaluronic acid serum",
    "niacinamide serum",
    "lip balm",
    "self-care packages",
    "skincare packages",
    "natural beauty",
    "premium cosmetics",
    "organic skincare",
    "anti-aging serum",
    "moisturizer",
    "face mask",
    "skincare routine",
    "banjizzle cosmetics",
  ].join(", "),
  authors: [{ name: "Banjizzle Cosmetics" }],
  creator: "Banjizzle Cosmetics",
  publisher: "Banjizzle Cosmetics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://banjizzlecosmetics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Banjizzle Cosmetics - Luxury Skincare, Naturally Yours",
    description:
      "Premium natural skincare and cosmetics featuring Rose Water, Raw Shea Butter, Serums, and Self-care Packages. Transform your skincare routine with luxury products.",
    type: "website",
    locale: "en_US",
    url: "https://banjizzlecosmetics.com",
    siteName: "Banjizzle Cosmetics",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banjizzle Cosmetics - Luxury Natural Skincare Products",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Banjizzle Cosmetics Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Banjizzle Cosmetics - Luxury Skincare, Naturally Yours",
    description:
      "Premium natural skincare and cosmetics featuring Rose Water, Raw Shea Butter, Serums, and Self-care Packages.",
    creator: "@banjizzlecosmetics",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Beauty & Cosmetics",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href="https://banjizzlecosmetics.com"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="author" content="Banjizzle Cosmetics" />
        <meta name="theme-color" content="#1B3B36" />
        <meta name="msapplication-TileColor" content="#1B3B36" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured Data for SEO (Organization + Local Business) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Banjizzle Cosmetics",
              description:
                "Premium natural skincare and cosmetics company specializing in luxury beauty products",
              url: "https://banjizzlecosmetics.com",
              logo: "https://banjizzlecosmetics.com/logo.png",
              image: "https://banjizzlecosmetics.com/og-image.jpg",
              telephone: "+1-555-123-4567",
              email: "info@banjizzlecosmetics.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Beauty Boulevard",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              sameAs: ["https://instagram.com/banjizzlecosmetics_"],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
