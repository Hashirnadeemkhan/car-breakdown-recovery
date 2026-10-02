// Central business information for Car Breakdown Recovery Leeds.
// Update these values in one place and they flow through the whole site.

export const site = {
  name: "Car Breakdown Recovery Leeds",
  shortName: "Recovery Leeds",
  tagline: "24/7 Professional Breakdown Recovery & Roadside Assistance",
  phoneDisplay: "+44 7886 003475",
  phoneHref: "tel:+447886003475",
  whatsappHref: "https://wa.me/447886003475",
  email: "info@breakdownrecoveryleeds.co.uk",
  address: {
    street: "18 Broom Walk, Soothill",
    city: "Batley",
    postcode: "WF17 6PL",
    country: "United Kingdom",
    full: "18 Broom Walk, Soothill, Batley WF17 6PL, United Kingdom",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=18+Broom+Walk+Soothill+Batley+WF17+6PL",
  hours: "24/7 · Always Available",
  url: "https://www.carbreakdownrecoveryleeds.co.uk",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;
