# Vo Manh Quan | Full Stack Developer Portfolio

Welcome to my professional portfolio! This is a modern, high-performance, and SEO-optimized web application built with **Next.js 15+** and **Tailwind CSS v4**. It showcases my professional journey, skills, and projects as a Full Stack Developer.

## 🚀 Live Demo

Check out the live version here: [portfolio-manh-quan.vercel.app](https://portfolio-manh-quan.vercel.app/)

## ✨ Key Features

- **🌐 Multi-language Support**: Fully localized in English and Vietnamese with dynamic dictionary-based translations.
- **🌓 Dark/Light Mode**: Smooth theme switching using `next-themes` with a "Warm Minimalist" aesthetic.
- **📱 Responsive Design**: optimized for all screen sizes, from mobile to ultra-wide displays (1300px+ specifically handled).
- **🎨 Modern Animations**: Engaging micro-interactions and scroll-based animations powered by **Framer Motion**.
- **🔍 SEO Optimized**:
  - Semantic HTML5 structure.
  - Dynamic Metadata & OpenGraph tags for social sharing.
  - Automated `sitemap.xml` and `robots.txt` generation.
  - Structured data (JSON-LD) for better search engine indexing.
- **⚡ Performance**:
  - Built with **Next.js Turbopack** for lightning-fast development.
  - Optimized font loading with `next/font`.
  - Lazy-loaded components and images.

## 🛠️ Tech Stack

### Core

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)

### Libraries

- **Theme Management**: `next-themes`
- **Slider/Carousel**: `Swiper.js`
- **Utilities**: `clsx`, `tailwind-merge`, `class-variance-authority`

## 📁 Project Structure

```bash
src/
├── app/                  # Next.js App Router (Layouts, Pages, SEO)
├── components/           # Reusable UI components & Sections
│   ├── sections/         # Main page sections (Hero, About, Projects, etc.)
│   └── ui/               # Primary UI primitives (shadcn/ui style)
├── constants/            # Shared constants, config, and swiper options
├── dictionaries/         # JSON files for i18n support (EN, VI)
├── i18n/                 # Internationalization logic and settings
├── lib/                  # Utility functions and library wrappers
├── types/                # Global TypeScript definitions
└── utils/                # Helper functions
```

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: 18.x or later
- **npm** or **yarn** or **pnpm**

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mannj-nef/portfolio-Manh_Quan.git
   cd cv-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_URL=http://localhost:3000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License

This project is licensed under the MIT License. Feel free to use it as a template for your own portfolio!

---

**Built with ❤️ by Vo Manh Quan**
