"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`nav-wrapper ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-pill">
        {/* Logo */}
        <Link href="/" className="logo-wrapper">
          <Image
            src="/BANJIZZLE-logo-nobg.png"
            alt="Banjizzle Cosmetics"
            width={270}
            height={90}
            priority
            className="logo-img"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="nav-links">
          <li>
            <Link href="/products" className="nav-link">
              Products
            </Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="nav-right">
          {/* Cart */}
          <Link href="/cart" className="cart-btn">
            <FiShoppingCart />
            <span className="cart-text">Cart</span>
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/products" onClick={() => setMenuOpen(false)}>
          Products
        </Link>
        <Link href="/cart" onClick={() => setMenuOpen(false)}>
          Cart
        </Link>
      </div>
    </header>
  )
}
