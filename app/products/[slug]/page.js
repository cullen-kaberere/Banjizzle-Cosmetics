import products from "@/data/products"
import Image from "next/image"
import Navigation from "@/components/Navigation"
import styles from "@/styles/product-detail.module.css"

export default async function ProductDetail({ params }) {
  const resolvedParams = await params
  const slug = resolvedParams.slug

  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <>
        <Navigation />
        <main className={styles.container}>
          <h2>Product not found</h2>
        </main>
      </>
    )
  }

  return (
    <>
      <Navigation />

      <main className={styles.container}>
        <div className={styles.grid}>
          <Image
            src={product.image}
            alt={product.alt}
            width={500}
            height={500}
            priority
          />

          <div>
            <h1>{product.name}</h1>
            <p className={styles.price}>{product.price}</p>
            <p className={styles.desc}>{product.description}</p>

            <div className={styles.qty}>
              <label>Quantity</label>
              <input type="number" min="1" defaultValue="1" />
            </div>

            <button className={styles.btn}>
              Add to Cart (Coming Soon)
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
