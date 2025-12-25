"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const headlines = [
  "Luxury Skincare, Naturally Yours",
  "Pure Ingredients. Powerful Results.",
  "Glow Naturally. Feel Confident.",
  "Where Nature Meets Elegance",
]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = headlines[index]
    const speed = isDeleting ? 40 : 70

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      )

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1400)
      }

      if (isDeleting && text === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % headlines.length)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>{text}</span>
          <span className="cursor">|</span>
        </h1>

        <p className="hero-subtitle animate-fade-in-up">
          Discover the power of nature with our premium collection of Rose Water,
          Raw Shea Butter, and carefully crafted serums designed for your natural
          beauty journey.
        </p>

        <div className="hero-actions animate-fade-in-up">
          <Link href="/products" className="btn btn-primary">
            Explore Products
          </Link>
          {/* <Link href="#featured" className="btn btn-secondary">
            Explore Products
          </Link> */}
        </div>
      </div>
    </section>
  )
}
