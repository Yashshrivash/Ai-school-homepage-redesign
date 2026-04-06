# AI Ready School — Homepage

A modern, conversion-focused SaaS homepage built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
ai-ready-school/
├── app/
│   ├── globals.css          # Tailwind directives + custom styles
│   ├── layout.js            # Root layout with metadata
│   └── page.js              # Homepage — assembles all sections
├── components/
│   ├── AnimatedSection.js   # Reusable scroll-reveal wrapper (Framer Motion)
│   ├── Navbar.js            # Sticky nav with mobile menu
│   ├── Hero.js              # Hero section with dashboard mockup
│   ├── LogoBar.js           # Auto-scrolling trusted-by logos
│   ├── Products.js          # Five product cards (Cypher, Morpheus, etc.)
│   ├── Stats.js             # Key metrics (100+ schools, 50k students, etc.)
│   ├── Testimonials.js      # Three testimonial cards
│   ├── Features.js          # "Why Schools Choose Us" checklist
│   ├── FinalCTA.js          # Dark gradient CTA banner
│   └── Footer.js            # Footer with links
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## 🎨 Design System

| Token       | Value                          |
|-------------|--------------------------------|
| Primary     | `#0B1F3A` (Deep Blue)          |
| Accent      | `#3B82F6` (Electric Blue)      |
| Purple      | `#8B5CF6` (Soft Purple)        |
| Background  | `#FAFBFD` (Off-white)          |
| Heading     | Outfit (800/700/600)           |
| Body        | DM Sans (400/500/600)          |
| Radius      | 14px (buttons) / 20px (cards)  |

## 📱 Responsive Breakpoints

- **Mobile** (<768px): Single column, stacked CTAs, hamburger menu
- **Tablet** (768–1024px): 2-column grids
- **Desktop** (>1024px): Full layout with 3-column product grid

## ⚡ Deployment

Optimized for **Vercel**:

```bash
npx vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 🔧 Customization

- **Colors**: Edit `tailwind.config.js` → `theme.extend.colors`
- **Content**: Edit text directly in each component file
- **Fonts**: Swap Google Fonts import in `globals.css`
- **Animations**: Adjust timing in `AnimatedSection.js`
