"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const featuredProducts = [
  {
    id: 1,
    name: "Premium Rose Water",
    price: "Ksh1,200",
    description: "Pure, organic rose water for hydration and natural glow",
    image: "/luxury-rose-water-bottle-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Premium Rose Water (Ksh1,200). Can you tell me more about it?",
  },

  
  {
    id: 2,
    name: "Face Serum / Oily Skin Serum",
    price: "Ksh1,200",
    description: "Wholesale price (Min 10 pieces)",
    image: "/raw-shea-butter-jar-natural-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Raw Shea Butter (Ksh1,200). Can you tell me more about it?",
  },



  
  {
    id: 3,
    name: "Vitamin E Oil",
    price: "Ksh1,000",
    description: "Wholesale price (Min 10 pieces)",
    image: "/vitamin-c-serum-bottle-luxury-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Vitamin C Serum ($32.99). Can you tell me more about it?",
  },
  {
    id: 4,
    name: "Combine Self-Care Package",
    price: "Ksh7,000",
    description: "Consists of Black Soap, Rose Water, Shea Butter..",
    image: "/luxury-skincare-gift-set-package.jpg",
    whatsappMessage: "Hi! I'm interested in the Self-Care Package ($89.99). Can you tell me more about it?",
  },
]

export default function FeaturedProducts() {
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

    const element = document.getElementById("featured")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleWhatsAppOrder = (message) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/254703201556?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="featured" className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h2 className={isVisible ? "animate-fade-in-up" : ""}>Signature Collection</h2>
          <p className={`${isVisible ? "animate-fade-in-up" : ""} opacity-80`} style={{ animationDelay: "0.2s" }}>
            Discover our most loved products, crafted with the finest natural ingredients
          </p>
        </div>

        <div className="grid grid-4">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`product-card ${isVisible ? "animate-fade-in-up" : ""}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div style={{ position: "relative", overflow: "hidden" }}>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={250}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <p className="product-description">{product.description}</p>
                <button
                  onClick={() => handleWhatsAppOrder(product.whatsappMessage)}
                  className="btn btn-gold"
                  style={{ width: "100%" }}
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
