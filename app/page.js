import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import BrandValues from "../components/BrandValues"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"

export const metadata = {
  title: "Banjizzle Cosmetics - Luxury Skincare, Naturally Yours",
  description:
    "Transform your skincare routine with premium natural cosmetics. Shop Rose Water, Raw Shea Butter, Vitamin C Serums, and Self-care Packages. Luxury beauty products for radiant, healthy skin.",
  keywords:
    "luxury skincare home, natural cosmetics online, premium rose water, raw shea butter, vitamin c serum, self-care packages, skincare routine, organic beauty products, anti-aging skincare, natural moisturizer",
  openGraph: {
    title: "Banjizzle Cosmetics - Luxury Skincare, Naturally Yours",
    description:
      "Transform your skincare routine with premium natural cosmetics. Shop Rose Water, Raw Shea Butter, Vitamin C Serums, and Self-care Packages.",
    type: "website",
    url: "https://banjizzlecosmetics.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banjizzle Cosmetics - Premium Natural Skincare Products Collection",
      },
    ],
  },
  alternates: {
    canonical: "https://banjizzlecosmetics.com",
  },
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <BrandValues />
      <CallToAction />
      <Footer />
    </>
  )
}
