# 🎓 دليل أدوات الذكاء الاصطناعي للطالب | Sara's AI Tools Guide

A high-conversion, deeply optimized React landing page designed to distribute a comprehensive AI Tools Guide tailored specifically for students in the Saudi and MENA educational markets. Authored by Sara Al-Abbas, the landing page aims to help students save time on research, summarization, and presentations by leveraging Artificial Intelligence.

## 🌟 Project Overview

This project is built from the ground up prioritizing **Performance**, **SEO**, and **Accessibility**. It completely abandons heavy JavaScript animation libraries in favor of pure, GPU-accelerated CSS to achieve a stunning Glassmorphism UI while maintaining perfect Lighthouse scores.

### Key Features

*   **RTL First:** Fully designed with `direction: rtl` for perfect Arabic typography (Cairo/Custom Font) and layout harmony.
*   **Bento Grid Layouts:** Modern, clean UI presentation for features and student testimonials utilizing advanced CSS Grid architectures (`align-items: stretch`).
*   **High Conversion CTA:** Features a persistent, animated, accessible WhatsApp floating action button that lazy-loads to prevent blocking the initial page render.
*   **Performance Obsessed:** 
    *   No layout thrashing.
    *   Below-the-fold components are dynamically loaded via `React.lazy()` and `Suspense`.
    *   Images use native `loading="lazy"` and `decoding="async"` to preserve the main thread.
*   **SEO & A11y:** Built using strict Semantic HTML5 (`<header>`, `<section>`, `<h2>`). All interactive elements possess explicit `aria-labels`, and the Navy/Gold design system adheres to WCAG color contrast standards.

## 🛠️ Tech Stack

*   **Core:** [React 18](https://react.dev/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** Pure Vanilla CSS (Custom Design System with CSS Variables)
*   **Icons:** [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate into the directory:
   ```bash
   cd Sara-Project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local Vite development server:
```bash
npm run dev
```

### Production Build
Create an optimized production bundle:
```bash
npm run build
```
The output will be generated in the `dist` folder, ready for deployment.

---
*Designed to empower the next generation of students with AI.*
