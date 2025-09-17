"use client"

import { useState, useEffect } from "react"

export default function ContactInfo() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to get personalized skincare recommendations from Banjizzle Cosmetics. Can you help me?",
    )
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:info@banjizzlecosmetics.com?subject=Skincare Consultation Request"
  }

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-xl">
          <h1 className={isVisible ? "animate-fade-in-up" : ""}>Get In Touch</h1>
          <p className={`${isVisible ? "animate-fade-in-up" : ""} opacity-80`} style={{ animationDelay: "0.2s" }}>
            Visit us or reach out for personalized skincare recommendations
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: "var(--spacing-3xl)" }}>
          {/* Contact Information */}
          <div className={`${isVisible ? "animate-fade-in-left" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="card">
              <h2>Contact Information</h2>
              <div style={{ marginBottom: "var(--spacing-xl)" }}>
                <h3 style={{ color: "var(--color-gold)", marginBottom: "var(--spacing-sm)" }}>Phone & WhatsApp</h3>
                <p style={{ fontSize: "1.2rem", marginBottom: "var(--spacing-md)" }}>+1 (555) 123-4567</p>
                <button
                  onClick={handleWhatsAppContact}
                  className="btn btn-primary"
                  style={{ marginBottom: "var(--spacing-lg)" }}
                >
                  Message on WhatsApp
                </button>
              </div>

              <div style={{ marginBottom: "var(--spacing-xl)" }}>
                <h3 style={{ color: "var(--color-gold)", marginBottom: "var(--spacing-sm)" }}>Email</h3>
                <p style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-md)" }}>info@banjizzlecosmetics.com</p>
                <button
                  onClick={handleEmailContact}
                  className="btn btn-secondary"
                  style={{ marginBottom: "var(--spacing-lg)" }}
                >
                  Send Email
                </button>
              </div>

              <div style={{ marginBottom: "var(--spacing-xl)" }}>
                <h3 style={{ color: "var(--color-gold)", marginBottom: "var(--spacing-sm)" }}>Social Media</h3>
                <p style={{ marginBottom: "var(--spacing-md)" }}>Follow us for skincare tips and product updates</p>
                <a
                  href="https://instagram.com/banjizzlecosmetics_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                >
                  Follow on Instagram
                </a>
              </div>

              <div>
                <h3 style={{ color: "var(--color-gold)", marginBottom: "var(--spacing-sm)" }}>Business Hours</h3>
                <p style={{ marginBottom: "var(--spacing-xs)" }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p style={{ marginBottom: "var(--spacing-xs)" }}>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Location & Map */}
          <div className={`${isVisible ? "animate-fade-in-right" : ""}`} style={{ animationDelay: "0.4s" }}>
            <div className="card">
              <h2>Visit Our Location</h2>
              <div style={{ marginBottom: "var(--spacing-lg)" }}>
                <h3 style={{ color: "var(--color-gold)", marginBottom: "var(--spacing-sm)" }}>Address</h3>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
                  123 Beauty Boulevard
                  <br />
                  Luxury District
                  <br />
                  New York, NY 10001
                </p>
              </div>

              {/* Google Maps Embed */}
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  marginBottom: "var(--spacing-lg)",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1635959542742!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Banjizzle Cosmetics Location"
                ></iframe>
              </div>

              <p style={{ fontSize: "0.95rem", opacity: 0.8, textAlign: "center" }}>
                Located in the heart of the luxury district, our boutique offers personalized skincare consultations and
                the full range of Banjizzle Cosmetics products.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : ""}`}
          style={{ marginTop: "var(--spacing-3xl)", animationDelay: "0.6s" }}
        >
          <div className="card" style={{ background: "var(--color-deep-green)", color: "var(--color-white)" }}>
            <h2 style={{ color: "var(--color-gold)" }}>Personalized Skincare Consultations</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-lg)" }}>
              Our skincare experts are here to help you create the perfect routine for your unique skin needs. Whether
              you're dealing with dryness, sensitivity, or looking to enhance your natural glow, we'll recommend the
              ideal combination of our premium products.
            </p>
            <div style={{ display: "flex", gap: "var(--spacing-md)", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={handleWhatsAppContact} className="btn btn-gold">
                Book Consultation via WhatsApp
              </button>
              <a
                href="https://instagram.com/banjizzlecosmetics_"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                See Results on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
