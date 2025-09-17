"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className={`hero-title ${isVisible ? "animate-fade-in-up" : ""}`}>Luxury Skincare, Naturally Yours</h1>
        <p className={`hero-subtitle ${isVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "0.2s" }}>
          Discover the power of nature with our premium collection of Rose Water, Raw Shea Butter, and carefully crafted
          serums designed for your natural beauty journey.
        </p>
        <div className={`${isVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "0.4s" }}>
          <Link href="/products" className="btn btn-primary" style={{ marginRight: "1rem" }}>
            Shop Collection
          </Link>
          <Link href="#featured" className="btn btn-secondary">
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  )
}
