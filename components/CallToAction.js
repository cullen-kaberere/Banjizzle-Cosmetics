"use client"

import { useState, useEffect } from "react"

export default function CallToAction() {
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

    const element = document.getElementById("cta")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about Banjizzle Cosmetics products. Can you help me find the perfect skincare routine?",
    )
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="cta"
      className="section"
      style={{ background: "linear-gradient(135deg, var(--color-deep-green), var(--color-charcoal))" }}
    >
      <div className="container text-center">
        <h2 className={`${isVisible ? "animate-fade-in-up" : ""}`} style={{ color: "var(--color-white)" }}>
          Ready to Transform Your Skincare Routine?
        </h2>
        <p
          className={`${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ color: "var(--color-white)", opacity: 0.9, animationDelay: "0.2s" }}
        >
          Join thousands of satisfied customers who have discovered the power of natural luxury skincare. Get
          personalized recommendations and start your journey to radiant, healthy skin.
        </p>
        <div className={`${isVisible ? "animate-fade-in-up" : ""}`} style={{ animationDelay: "0.4s" }}>
          <button onClick={handleWhatsAppContact} className="btn btn-gold" style={{ marginRight: "1rem" }}>
            Shop Now on WhatsApp
          </button>
          <a
            href="https://instagram.com/banjizzlecosmetics_"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
