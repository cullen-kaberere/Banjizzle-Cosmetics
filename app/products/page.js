import Navigation from "@/components/Navigation"
import ProductsGrid from "@/components/ProductsGrid"
import Footer from "@/components/Footer"
import styles from "@/styles/products.module.css"

export default function ProductsPage() {
  return (
    <>
      <Navigation />

      <main className={styles.main}>
        {/* HERO */}
        <section className={styles.hero}>
          <h1>Our Collection</h1>
          <p>
            Thoughtfully crafted skincare essentials made from nature’s finest
            ingredients.
          </p>
        </section>

        {/* PACKAGES */}
        <section className={styles.section}>
          <h2>Curated Packages</h2>
          <ProductsGrid type="packages" />
        </section>

        {/* ALL PRODUCTS */}
        <section className={styles.sectionAlt}>
          <h2>All Products</h2>
          <ProductsGrid type="all" />
        </section>
      </main>

      <Footer />
    </>
  )
}
