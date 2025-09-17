import Navigation from "../../components/Navigation"
import ProductsGrid from "../../components/ProductsGrid"
import Footer from "../../components/Footer"

export const metadata = {
  title: "Premium Skincare Products | Banjizzle Cosmetics",
  description:
    "Shop our complete collection of luxury natural skincare products. Rose Water ($24.99), Raw Shea Butter ($18.99), Vitamin C Serums, Lip Balms, and Self-care Packages. Order via WhatsApp with fast delivery.",
  keywords:
    "buy skincare products online, luxury rose water price, raw shea butter for sale, vitamin c serum benefits, hyaluronic acid serum, niacinamide serum, natural lip balm, skincare packages deals, organic face mask, anti-aging serums, moisturizer for dry skin, skincare routine products",
  openGraph: {
    title: "Premium Skincare Products | Banjizzle Cosmetics",
    description:
      "Shop our complete collection of luxury natural skincare products including Rose Water, Raw Shea Butter, Serums, and Self-care Packages. Order via WhatsApp.",
    type: "website",
    url: "https://banjizzlecosmetics.com/products",
    images: [
      {
        url: "/products-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Banjizzle Cosmetics Product Collection - Natural Skincare",
      },
    ],
  },
  alternates: {
    canonical: "https://banjizzlecosmetics.com/products",
  },
}

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "100px" }}>
        <section className="section">
          <div className="container">
            <div className="text-center mb-xl">
              <h1>Our Complete Collection</h1>
              <p className="opacity-80">
                Discover our full range of premium natural skincare products, each crafted with the finest ingredients
                for your beauty journey.
              </p>
            </div>
            <ProductsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
