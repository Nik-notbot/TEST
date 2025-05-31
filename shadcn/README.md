# Vite + React + TypeScript + ShadcnUI Template

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules, along with ShadcnUI components.

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 📦 [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🧩 [ShadcnUI](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind CSS
- 🔍 [ESLint](https://eslint.org/) - Pluggable JavaScript linter

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open your browser at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Adding ShadcnUI Components

To add more components from ShadcnUI, you can use the [ShadcnUI CLI](https://ui.shadcn.com/docs/cli).

Example:
```bash
npx shadcn-ui@latest add button
```

## Project Structure

```
/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   ├── lib/          # Utility functions
│   ├── App.tsx       # Main component
│   ├── index.css     # Global styles
│   └── main.tsx      # Entry point
├── .eslintrc.cjs     # ESLint configuration
├── index.html        # HTML template
├── postcss.config.js # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json     # TypeScript configuration
└── vite.config.ts    # Vite configuration
```