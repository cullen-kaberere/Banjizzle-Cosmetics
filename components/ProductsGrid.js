"use client"

import ProductCard from "./ProductCard"
import styles from "@/styles/products-grid.module.css"
import products from "@/data/products"

export default function ProductsGrid({ type }) {
  const filtered =
    type === "packages"
      ? products.filter((p) => p.category === "Packages")
      : products

  return (
    <div className={styles.grid}>
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
