# Darrielle Evans - Personal Brand Website

A bold, luxe personal brand website built with Next.js 15 + TypeScript featuring a black/white/gold aesthetic.

## 🎨 Design Features

- **Bold Black & White Foundation**: Timeless, editorial aesthetic with strategic gold accents
- **Distinctive Typography**: Montserrat for display (bold, confident) + Cormorant Garamond for body (elegant, readable)
- **Smooth Animations**: Staggered text reveals, fade-ins, and micro-interactions
- **Responsive Design**: Mobile-first approach with elegant breakpoints
- **Strategic Sections**: Hero, About, Bea'Viewed, Speaking, Experience, Contact

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### Building for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📦 Deploy to Vercel

### Method 1: From GitHub (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

In Vercel dashboard:
1. Go to Project Settings → Domains
2. Add `darrielleevans.com`
3. Update your DNS records as instructed by Vercel
4. SSL certificate is automatic

Your DNS settings should point to Vercel:
- A Record: `76.76.21.21`
- Or CNAME: `cname.vercel-dns.com`

## ✏️ Customization Guide

### 1. Replace Your Professional Image

In `/app/page.tsx`, find the hero section and replace:

```tsx
<div className="hero-image">
  <Image 
    src="/your-image.jpg" 
    alt="Darrielle Evans"
    width={600}
    height={800}
    priority
  />
</div>
```

Add your image to the `/public` folder.

### 2. Add Company Logos

In the Experience section, replace placeholders:

```tsx
<div className="companies">
  <Image src="/company1-logo.png" alt="Company 1" width={120} height={40} />
  <Image src="/company2-logo.png" alt="Company 2" width={120} height={40} />
  <Image src="/company3-logo.png" alt="Company 3" width={120} height={40} />
</div>
```

### 3. Add ClickUp Verified Badge

Replace the credential badge placeholder:

```tsx
<Image src="/clickup-verified.png" alt="ClickUp Verified" width={120} height={40} />
```

### 4. Update Social Links

In the Contact section:

```tsx
<a href="https://linkedin.com/in/YOURUSERNAME" target="_blank" rel="noopener noreferrer">
  LinkedIn
</a>
```

Update all social links with your actual profiles.

### 5. Customize Colors (Optional)

Edit CSS variables in `/app/globals.css`:

```css
:root {
  --black: #000000;
  --white: #FFFFFF;
  --cream: #F8F6F3;
  --gold: #C9A961;  /* Adjust gold tone here */
  --charcoal: #2B2D2F;
}
```

### 6. Update Content

All content is in `/app/page.tsx`. Each section is clearly labeled:
- Hero headline
- About text
- Bea'Viewed description
- Speaking topics
- Experience details
- Contact information

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Black | `#000000` | Primary text, backgrounds, bold statements |
| White | `#FFFFFF` | Backgrounds, contrast |
| Cream | `#F8F6F3` | Alternate section backgrounds |
| Gold | `#C9A961` | Accents, luxury touch, hover states |
| Charcoal | `#2B2D2F` | Secondary text |

## 📝 Typography

- **Display Font**: Montserrat (800 weight for headlines, 600 for subheadings)
- **Body Font**: Cormorant Garamond (400 for body, 500 for emphasis)

## 📂 File Structure

```
darrielle-evans-site/
├── app/
│   ├── page.tsx         # Main page component
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── public/              # Static assets (add your images here)
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 💡 Tips for Best Results

1. **High-Quality Images**: Use professional photos with good lighting (minimum 1200px width)
2. **Logo Formats**: PNG or SVG for company logos (transparent background preferred)
3. **Consistent Sizing**: Keep image dimensions consistent for clean layout
4. **Performance**: Optimize images before uploading (use tools like TinyPNG)
5. **Testing**: Test on multiple devices and browsers before deploying

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: CSS Modules + Custom Properties
- **Build Tool**: Turbopack (faster than Webpack)
- **Deployment**: Vercel (optimized for Next.js)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🐛 Troubleshooting

**Build errors?**
- Run `npm run lint` to check for issues
- Make sure all images are in the `/public` folder
- Check that all social links are valid

**Styling issues?**
- Clear browser cache
- Check browser console for errors
- Verify CSS variables are defined

**Deployment issues?**
- Check Vercel build logs
- Ensure all environment variables are set
- Verify domain DNS settings

---

Built with ❤️ using Next.js 15 + TypeScript | Deployed on Vercel | Designed for Bold Impact
