import Navigation from "../../components/Navigation"
import ContactInfo from "../../components/ContactInfo"
import Footer from "../../components/Footer"

export const metadata = {
  title: "Contact Us | Banjizzle Cosmetics - Luxury Skincare Consultation",
  description:
    "Get personalized skincare recommendations from Banjizzle Cosmetics experts. Visit our New York location, call +1 (555) 123-4567, or message us on WhatsApp for professional skincare advice.",
  keywords:
    "skincare consultation NYC, personalized skincare advice, luxury skincare expert, natural cosmetics consultation, skincare routine help, beauty advice New York, skincare specialist near me",
  openGraph: {
    title: "Contact Banjizzle Cosmetics - Skincare Consultation & Expert Advice",
    description:
      "Get personalized skincare recommendations from our experts. Visit our New York location or contact us via WhatsApp for professional advice.",
    type: "website",
    url: "https://banjizzlecosmetics.com/contact",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Banjizzle Cosmetics - Skincare Consultation",
      },
    ],
  },
  alternates: {
    canonical: "https://banjizzlecosmetics.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main style={{ paddingTop: "100px" }}>
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}
