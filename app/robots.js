export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://banjizzlecosmetics.com/sitemap.xml",
  }
}
