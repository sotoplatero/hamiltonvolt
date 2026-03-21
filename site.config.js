/**
 * HamiltonVolt — Site Configuration
 * ================================
 * Edit the values below and run `npm run build` to regenerate the site.
 * All values are injected at build time into every page via Eleventy.
 */

export default {

  // ── Business identity ──────────────────────────────────
  businessName: "HamiltonVolt",
  tagline: "Sub-metering for rental properties",
  serviceArea: "Hamilton & Burlington, ON",

  // ── Contact ────────────────────────────────────────────
  // Phone number displayed on the site (formatted)
  phoneDisplay: "(289) 799-8573",
  // Phone number for tel: links (E.164 format, no spaces)
  phoneLink: "+12897998573",
  // WhatsApp number (digits only, with country code, no + sign)
  whatsappNumber: "12897998573",
  // Pre-filled WhatsApp message (pre-qualifies the lead)
  whatsappMessage: "Hi HamiltonVolt, I have ___ units in ___ (neighbourhood) and I'd like to know if sub-metering works for my property.",

  // ── Address & location ─────────────────────────────────
  address: {
    street: "",          // e.g. "123 James St N"
    city: "Hamilton",
    province: "ON",
    postalCode: "",      // e.g. "L8R 2K5"
    country: "CA",
  },
  // Google Maps coordinates (used in schema, geo meta)
  coordinates: {
    lat: "43.2557",
    lng: "-79.8711",
  },

  // ── Trust bar stats ────────────────────────────────────
  // Hidden until we have real numbers — no fake stats
  showTrustBar: false,
  stats: {
    properties: "—",
    units: "—",
    monthlyFees: "$0",
    installTime: "< 1 Hour",
  },

  // ── Testimonials ───────────────────────────────────────
  // Hidden — no customers yet. Will enable when we have real testimonials.
  showTestimonials: false,
  testimonials: [],

  // ── Founder ────────────────────────────────────────────
  founder: {
    name: "[Your Name]",           // Replace with real name
    photo: "",                      // Replace with real photo path
    bio: "I started HamiltonVolt after watching a friend lose thousands on hydro bills for his fourplex. The solution existed — clip-on meters that measure each unit — but nobody in Hamilton was making it easy for landlords to get started. That's what we do.",
    background: "Hamilton-based. Background in property management and building systems.",
  },

  // ── Pricing (shown in FAQ) ─────────────────────────────
  pricing: {
    perUnit: "$300–$600",
    fourplexTotal: "$1,200–$2,000",
    roiMonths: "3–5",
  },

  // ── Scheduling (for soft scarcity in CTA) ──────────────
  inspectionsPerWeek: "5",

  // ── URLs ───────────────────────────────────────────────
  siteUrl: "https://voltshare.ca",
  // OG image for social sharing (1200x630px, absolute URL)
  ogImageUrl: "https://voltshare.ca/img/og-image.svg",

  // ── Images (local paths) ───────────────────────────────
  images: {
    hero: "/img/hero-apartment-interior.jpg",
    inspection: "/img/step-inspection-property.jpg",
    installation: "/img/step-installation-electrician.jpg",
    monitoring: "/img/step-monitoring-dashboard.jpg",
    cta: "/img/cta-hamilton-skyline.jpg",
    ogImage: "/img/og-image.svg",
  },

  // ── Neighbourhoods (for footer & schema) ──────────────
  // Curated for rental density — neighbourhoods with the most multi-unit properties
  neighbourhoods: {
    hamilton: [
      "Downtown Hamilton", "Hamilton Mountain", "Westdale",
      "Crown Point", "Beasley", "Kirkendall",
      "Corktown", "Bartonville", "Delta",
      "Landsdale", "Stoney Creek", "Dundas",
      "Stipley", "Central Hamilton", "Gibson"
    ],
    burlington: [
      "Downtown Burlington", "Aldershot", "Central Burlington",
      "Appleby", "Elizabeth Gardens", "Maple",
      "Brant Hills", "Orchard", "Tyandaga",
      "Palmer", "Roseland"
    ],
  },

  // ── FAQ ────────────────────────────────────────────────
  faq: [
    {
      question: "Is sub-metering legal in Ontario?",
      answer: "Yes. Ontario Regulation 394/10 under the <em>Electricity Act</em> gives landlords the right to install sub-meters and bill tenants for individual electricity usage, as long as tenants receive proper notice. We walk you through the entire compliance process.",
      schemaAnswer: "Yes. Ontario Regulation 394/10 under the Electricity Act gives landlords the right to install sub-meters and bill tenants for individual electricity usage, as long as tenants receive proper notice."
    },
    {
      question: "How much does it cost?",
      answer: "Typical installations range from $300–$600 per unit depending on your panel layout. A fourplex usually costs $1,200–$2,000 total. Most landlords recoup the full cost in 3–5 months through reduced hydro bills. You get the exact number during the free inspection — no surprises after.",
      schemaAnswer: "Typical installations range from $300–$600 per unit depending on your panel layout. A fourplex usually costs $1,200–$2,000 total. Most landlords recoup the full cost in 3–5 months through reduced hydro bills."
    },
    {
      question: "Do I need to change my leases?",
      answer: 'For existing tenants with "electricity included" leases, you must provide written notice and reduce rent by a corresponding amount per Reg. 394/10. For new tenants, you simply write the lease without included electricity. We provide notice templates and walk you through the process.',
      schemaAnswer: "For existing tenants with electricity included leases, you must provide written notice and reduce rent by a corresponding amount per Reg. 394/10. For new tenants, you simply write the lease without included electricity."
    },
    {
      question: "What types of properties work?",
      answer: "Duplexes, triplexes, fourplexes, townhouse blocks, and apartment buildings across Hamilton and Burlington. If you have 2+ units sharing one meter, sub-metering will almost certainly work. The free inspection confirms it for your specific property.",
      schemaAnswer: "Duplexes, triplexes, fourplexes, townhouse blocks, and apartment buildings. If you have 2 or more units sharing one meter, sub-metering will almost certainly work."
    },
    {
      question: "Do I need an electrician for this?",
      answer: "No. Our meters are clip-on devices (current transformers) that clamp around the existing wire without touching it. Nothing gets cut, spliced, or modified. No permits, no electrical inspection, no licensed electrician required. It's closer to installing a smart thermostat than doing electrical work.",
      schemaAnswer: "No. The meters are clip-on devices (current transformers) that clamp around the existing wire without touching it. Nothing gets cut, spliced, or modified. No permits or electrical inspection required."
    },
    {
      question: "What if I want to remove them later?",
      answer: "The clip comes off and your panel goes back to exactly how it was. Zero trace. There's nothing permanent about the installation — no holes, no rewiring, no residue. If you sell the property or change your mind, removal takes minutes.",
      schemaAnswer: "The clip comes off and your panel goes back to exactly how it was. Zero trace. Nothing permanent about the installation."
    }
  ],

  // ── Footer ─────────────────────────────────────────────
  copyrightYear: "2026",
};
