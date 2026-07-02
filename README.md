# Personal Portfolio Website

A modern, performant portfolio website showcasing expertise in systems engineering, controls, and autonomous motion control.

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: MDX (Markdown + JSX)
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # Reusable React components
│   ├── lib/              # Utility functions
│   └── content/          # MDX blog posts and content
├── public/               # Static assets
├── .github/workflows/    # CI/CD workflows
└── content/              # MDX content files
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone https://github.com/Kausi-hub/personal-website.git
cd personal-website
npm install
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build & Deploy

```bash
npm run build
npm start
npm run format
npm run type-check
```

## 📄 Site Navigation

- **Home** - Landing page with hero section and expertise highlights
- **About** - Professional background, leadership experience, and detailed expertise
- **Expertise** - Systems Engineering, Controls, System Integration, V&V
- **Programs** - EDU Platform, GM RWD, AMG eLSD, AWD Systems, Autonomous Motion Control
- **Innovation** - Patents and technical contributions
- **Blog** - Technical insights and articles (MDX-based)
- **Contact** - Contact form for reaching out
- **Resume Center** - Download and view resume
- **Career Timeline** - Interactive career progression

## 🚀 Deployment

This project is configured for Vercel deployment. Connect your GitHub repository to Vercel for automatic deployments on push to main branch.

## 📝 License

MIT License