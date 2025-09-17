"use client"

import { useState, useEffect } from "react"

const values = [
  {
    title: "Natural Luxury",
    description: "We believe luxury comes from nature's finest ingredients, carefully sourced and ethically produced.",
    icon: "🌿",
  },
  {
    title: "Self-Care Ritual",
    description: "Transform your daily routine into a mindful self-care experience with our premium products.",
    icon: "✨",
  },
  {
    title: "Professional Quality",
    description: "Every product meets the highest standards of quality and effectiveness for professional results.",
    icon: "💎",
  },
  {
    title: "Sustainable Beauty",
    description: "Committed to sustainable practices that honor both your skin and our planet.",
    icon: "🌍",
  },
]

export default function BrandValues() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("values")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="values" className="section" style={{ background: "var(--color-white)" }}>
      <div className="container">
        <div className="text-center mb-xl">
          <h2 className={isVisible ? "animate-fade-in-up" : ""}>Our Values</h2>
          <p className={`${isVisible ? "animate-fade-in-up" : ""} opacity-80`} style={{ animationDelay: "0.2s" }}>
            What makes Banjizzle Cosmetics special
          </p>
        </div>

        <div className="grid grid-2">
          {values.map((value, index) => (
            <div
              key={index}
              className={`card ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "var(--spacing-md)" }}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p className="opacity-80">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
