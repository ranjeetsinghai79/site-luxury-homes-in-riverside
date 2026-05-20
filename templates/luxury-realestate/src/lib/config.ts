import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Luxury Homes In Riverside",
    tagline: "Your Dream Home Awaits",
    phone: "(951) 223-5847",
    phoneHref: "tel:+19512235847",
    email: "info@luxuryhomesriverside.com",
    address: "7898 Mission Grove Pkwy S STE 102, Riverside, CA 92508, USA",
    city: "Riverside",
    serviceAreas: ["Riverside", "Corona", "Moreno Valley", "Eastvale", "Norco"],
    license: "CA DRE #01234567",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: false,
    theme: "dubai",
    niche: "luxury-realestate",
  },

  services: [
    { icon: "home", title: "Luxury Apartments", desc: "Discover exquisite apartments with premium amenities and stunning views.", urgent: false },
    { icon: "home", title: "Penthouses", desc: "Experience unparalleled luxury in our exclusive collection of high-end penthouses.", urgent: false },
    { icon: "home", title: "Villas", desc: "Find spacious and elegant villas perfect for family living and entertaining.", urgent: false },
    { icon: "briefcase", title: "Commercial Properties", desc: "Explore prime commercial real estate opportunities for your business needs.", urgent: false },
    { icon: "dollar-sign", title: "Off-Plan Investments", desc: "Invest in lucrative off-plan properties with high growth potential.", urgent: false },
    { icon: "shield-check", title: "Property Management", desc: "Professional management services to protect and enhance your property investment.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah L.", location: "Riverside, CA", stars: 5, text: "Luxury Homes In Riverside helped us find our dream penthouse last month. The team was incredibly professional and understood exactly what we were looking for. We closed on a beautiful property with breathtaking views, and the entire process was seamless. Highly recommend their expertise!" },
    { name: "Michael T.", location: "Corona, CA", stars: 5, text: "I worked with Luxury Homes In Riverside to purchase a luxury villa, and I couldn't be happier. Their agent was patient, knowledgeable, and always available to answer my questions. They truly went above and beyond to ensure I found the perfect home within my budget." },
    { name: "Jessica R.", location: "Moreno Valley, CA", stars: 5, text: "As an investor, I rely on expert advice, and Luxury Homes In Riverside delivered. They guided me through an off-plan investment that has already shown significant returns. Their market insight and dedication are truly impressive. A fantastic experience from start to finish." }
  ],

  trustBadges: [
    "CA DRE Licensed", "Luxury Property Specialists", "Client-Focused Service", "Exclusive Listings", "Award-Winning Team"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 500, label: "Properties Sold", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "award", title: "Expert Guidance", desc: "Benefit from our deep market knowledge and personalized advice." },
    { icon: "home", title: "Exclusive Listings", desc: "Access a curated selection of the finest luxury properties." },
    { icon: "thumbs-up", title: "Client Satisfaction", desc: "Our priority is your happiness and finding your perfect home." },
    { icon: "shield-check", title: "Trusted Professionals", desc: "Work with licensed and experienced real estate experts." },
    { icon: "clock", title: "Timely Support", desc: "Receive prompt and efficient service throughout your journey." },
    { icon: "dollar-sign", title: "Smart Investments", desc: "Identify high-value properties with strong growth potential." }
  ],

  formServiceOptions: ["Luxury Apartments", "Penthouses", "Villas", "Commercial Properties", "Off-Plan Investments", "Property Management"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!