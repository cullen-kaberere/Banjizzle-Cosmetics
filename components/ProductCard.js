import Link from "next/link"
import Image from "next/image"
import styles from "@/styles/product-card.module.css"

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.alt}
          width={400}
          height={320}
        />
        <span className={styles.badge}>{product.category}</span>
      </div>

      <div className={styles.info}>
        <h3>{product.name}</h3>
        <p className={styles.price}>{product.price}</p>
      </div>
    </Link>
  )
}
