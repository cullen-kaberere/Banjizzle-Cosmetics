"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const allProducts = [
  // Individual Products
  {
    id: 1,
    name: "Premium Rose Water",
    price: "$24.99",
    category: "Toners & Mists",
    description: "Pure, organic rose water for hydration and natural glow. Perfect for all skin types.",
    image: "/luxury-rose-water-bottle-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Premium Rose Water ($24.99). Can you tell me more about it?",
    alt: "Premium Rose Water - Natural Organic Toner for Hydration and Glow",
  },
  {
    id: 2,
    name: "Raw Shea Butter",
    price: "$18.99",
    category: "Moisturizers",
    description: "Unrefined African shea butter for deep moisturization and skin repair.",
    image: "/raw-shea-butter-jar-natural-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Raw Shea Butter ($18.99). Can you tell me more about it?",
    alt: "Raw Shea Butter - Unrefined African Moisturizer for Deep Skin Repair",
  },
  {
    id: 3,
    name: "Vitamin C Serum",
    price: "$32.99",
    category: "Serums",
    description: "Brightening serum with natural vitamin C for radiant, youthful skin.",
    image: "/vitamin-c-serum-bottle-luxury-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Vitamin C Serum ($32.99). Can you tell me more about it?",
    alt: "Vitamin C Serum - Brightening Anti-Aging Serum for Radiant Skin",
  },
  {
    id: 4,
    name: "Hyaluronic Acid Serum",
    price: "$28.99",
    category: "Serums",
    description: "Intense hydration serum that plumps and smooths fine lines.",
    image: "/hyaluronic-acid-serum-luxury-bottle.jpg",
    whatsappMessage: "Hi! I'm interested in the Hyaluronic Acid Serum ($28.99). Can you tell me more about it?",
    alt: "Hyaluronic Acid Serum - Intense Hydration for Plump, Smooth Skin",
  },
  {
    id: 5,
    name: "Niacinamide Serum",
    price: "$26.99",
    category: "Serums",
    description: "Pore-refining serum that controls oil and improves skin texture.",
    image: "/niacinamide-serum-skincare-bottle.jpg",
    whatsappMessage: "Hi! I'm interested in the Niacinamide Serum ($26.99). Can you tell me more about it?",
    alt: "Niacinamide Serum - Pore Refining Oil Control for Better Skin Texture",
  },
  {
    id: 6,
    name: "Vanilla Lip Balm",
    price: "$12.99",
    category: "Lip Care",
    description: "Nourishing lip balm with natural vanilla for soft, smooth lips.",
    image: "/vanilla-lip-balm-natural-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Vanilla Lip Balm ($12.99). Can you tell me more about it?",
    alt: "Vanilla Lip Balm - Natural Nourishing Lip Care for Soft Smooth Lips",
  },
  {
    id: 7,
    name: "Coconut Lip Balm",
    price: "$12.99",
    category: "Lip Care",
    description: "Tropical coconut lip balm for ultimate lip hydration and protection.",
    image: "/coconut-lip-balm-natural-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Coconut Lip Balm ($12.99). Can you tell me more about it?",
    alt: "Coconut Lip Balm - Tropical Natural Lip Hydration and Protection",
  },
  {
    id: 8,
    name: "Honey Oat Face Mask",
    price: "$22.99",
    category: "Treatments",
    description: "Gentle exfoliating mask with honey and oats for smooth, glowing skin.",
    image: "/honey-oat-face-mask-natural-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Honey Oat Face Mask ($22.99). Can you tell me more about it?",
    alt: "Honey Oat Face Mask - Gentle Exfoliating Treatment for Smooth Glowing Skin",
  },
  // Package Deals
  {
    id: 9,
    name: "Complete Self-Care Package",
    price: "$89.99",
    category: "Packages",
    description: "Complete skincare routine with Rose Water, Shea Butter, Vitamin C Serum, and Lip Balm.",
    image: "/luxury-skincare-gift-set-package.jpg",
    whatsappMessage: "Hi! I'm interested in the Complete Self-Care Package ($89.99). Can you tell me more about it?",
    alt: "Complete Self-Care Package - Full Skincare Routine Gift Set",
  },
  {
    id: 10,
    name: "Serum Trio Package",
    price: "$79.99",
    category: "Packages",
    description: "All three premium serums: Vitamin C, Hyaluronic Acid, and Niacinamide.",
    image: "/serum-trio-package-luxury-skincare.jpg",
    whatsappMessage: "Hi! I'm interested in the Serum Trio Package ($79.99). Can you tell me more about it?",
    alt: "Serum Trio Package - Vitamin C, Hyaluronic Acid, and Niacinamide Serums",
  },
  {
    id: 11,
    name: "Lip Care Duo",
    price: "$22.99",
    category: "Packages",
    description: "Both Vanilla and Coconut lip balms for complete lip care.",
    image: "/lip-care-duo-package-natural.jpg",
    whatsappMessage: "Hi! I'm interested in the Lip Care Duo ($22.99). Can you tell me more about it?",
    alt: "Lip Care Duo Package - Vanilla and Coconut Natural Lip Balms",
  },
  {
    id: 12,
    name: "Starter Skincare Package",
    price: "$59.99",
    category: "Packages",
    description: "Perfect for beginners: Rose Water, Shea Butter, and one serum of choice.",
    image: "/starter-skincare-package-natural.jpg",
    whatsappMessage: "Hi! I'm interested in the Starter Skincare Package ($59.99). Can you tell me more about it?",
    alt: "Starter Skincare Package - Beginner-Friendly Natural Skincare Set",
  },
]

const categories = ["All", "Serums", "Moisturizers", "Toners & Mists", "Lip Care", "Treatments", "Packages"]

export default function ProductsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts)
    } else {
      setFilteredProducts(allProducts.filter((product) => product.category === selectedCategory))
    }
  }, [selectedCategory])

  const handleWhatsAppOrder = (message) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/1234567890?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* Category Filter */}
      <div className="text-center mb-xl">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "var(--spacing-sm)",
            marginBottom: "var(--spacing-xl)",
          }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${selectedCategory === category ? "btn-primary" : "btn-secondary"}`}
              style={{ minWidth: "120px" }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-3">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`product-card ${isVisible ? "animate-fade-in-up" : ""}`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <div style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.alt || product.name}
                width={300}
                height={250}
                className="product-image"
              />
              <div
                style={{
                  position: "absolute",
                  top: "var(--spacing-sm)",
                  right: "var(--spacing-sm)",
                  background: "var(--color-gold)",
                  color: "var(--color-charcoal)",
                  padding: "var(--spacing-xs) var(--spacing-sm)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                {product.category}
              </div>
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

      {/* No products message */}
      {filteredProducts.length === 0 && (
        <div className="text-center" style={{ padding: "var(--spacing-3xl)" }}>
          <h3>No products found in this category</h3>
          <p className="opacity-80">Try selecting a different category to see our products.</p>
        </div>
      )}
    </>
  )
}
