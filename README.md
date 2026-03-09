# 🌿 Upcyclers Creative Hub — Next.js Website

A modern, production-ready website for **Upcyclers Creative Hub**, a women- and youth-led social enterprise in Mathare, Nairobi that transforms textile waste into handcrafted products.

## ✨ Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system (green/brown/terracotta palette)
- **Framer Motion** animations — scroll reveals, counters, floating fabric strips
- **Skeleton loaders** on the products grid
- **Animated counters** that count up on scroll
- **Mobile hamburger menu** with full-screen overlay
- **Active nav link** highlighting based on scroll position
- **Google Maps embed** for Mathare, Nairobi
- **Newsletter signup** with validation
- **Back-to-top button**
- **Hover tooltips** on impact cards
- **SEO** — meta tags, Open Graph, JSON-LD structured data
- **Accessibility** — ARIA labels, keyboard nav, reduced motion support
- **SDG 12** aligned branding

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
upcyclers-hub/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx            # Main page — assembles all sections
│   └── globals.css         # CSS variables, Tailwind base, custom utilities
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav with scroll effects + mobile menu
│   │   └── Footer.tsx      # Multi-column footer with social links
│   ├── sections/
│   │   ├── Hero.tsx        # Full-height hero with animated fabric strips
│   │   ├── StatsBar.tsx    # Animated statistics bar
│   │   ├── ProcessStrip.tsx # 6-step circular economy process
│   │   ├── Mission.tsx     # Mission + SDG 12 card
│   │   ├── Products.tsx    # Product grid with skeleton loader
│   │   ├── Impact.tsx      # Impact cards with tooltips + progress bars
│   │   ├── Team.tsx        # Faith Adoyo + team statistics
│   │   ├── Partners.tsx    # Partners row
│   │   ├── Location.tsx    # Google Maps embed + directions
│   │   └── Newsletter.tsx  # Email signup with validation
│   └── ui/
│       └── index.tsx       # FadeInSection, AnimatedCounter, AnimatedProgressBar,
│                           # SkeletonCard, BackToTop
├── lib/
│   ├── constants.ts        # All site data (products, stats, nav links, etc.)
│   └── utils.ts            # Utility functions
├── public/
│   └── images/             # Add your product/team images here
├── tailwind.config.ts      # Custom theme: colors, fonts, animations
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `green-deep` | `#1a3a1a` | Primary background, headers |
| `green-mid` | `#2d6a2d` | Hover states |
| `green-light` | `#4caf50` | Accents, progress bars |
| `terracotta` | `#c76e4d` | Highlights, CTAs, borders |
| `brown-dark` | `#3e2723` | Stats bar, footer secondary |
| `cream` | `#faf6f0` | Page background, text on dark |

### Fonts
- **Playfair Display** — headings (700, 900 weights)
- **DM Sans** — body text (300–600 weights)

---

## 🔧 Customisation

### Add your real product images
Replace the emoji icons in `lib/constants.ts` by updating the `Products` section component to use `next/image` with your real photos placed in `public/images/`.

### Update contact info
Edit `lib/constants.ts` — all text content, links, stats, and labels live there.

### Google Maps
The map in `components/sections/Location.tsx` uses a public embed for Mathare. Replace the `src` URL with your own Google Maps Embed API URL for a more precise pin.

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

---

## 🌍 Aligned With
**SDG 12** — Responsible Consumption and Production  
**UN-Habitat** partner · Available on **MESH Soko**

---

*Built with ♻ for Upcyclers Creative Hub, Mathare, Nairobi.*
# Hub
