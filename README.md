# Corbyn's Portfolio

A minimalist developer portfolio built with SvelteKit, inspired by [davis7.sh](https://davis7.sh).

## What's Included

- **Home Page** - Hero section with your intro + featured projects
- **Projects Page** - Grid of all your projects
- **Project Details** - Individual pages for each project with markdown content
- **Contact Page** - Simple page with your email and social links

## Tech Stack

- **SvelteKit** - Web framework
- **TailwindCSS** - Styling
- **Marked** - Markdown parser
- **Shiki** - Syntax highlighting for code blocks

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:5173

That's it! No backend setup needed.

## Customize Your Portfolio

### Update Personal Info

**Your name and bio:**
- Edit `src/lib/components/Hero.svelte`

**Your email and social links:**
- Edit `src/lib/components/Footer.svelte`
- Edit `src/routes/contact/+page.svelte`

### Add Your Projects

1. **Add project metadata** in `src/data/projects.js`:

```javascript
{
  slug: 'my-project',
  title: 'My Project',
  description: 'Short description',
  tags: ['React', 'TypeScript'],
  github: 'https://github.com/yourusername/project',
  demo: 'https://demo.com', // optional
  featured: true
}
```

2. **Create markdown file** at `src/content/projects/my-project.md`:

```markdown
# My Project

Full description with code examples...
```

The project will automatically appear on your site!

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  accent: '#00ff88',  // Change to your color
}
```

## Project Structure

```
portfolio/
├── src/
│   ├── routes/              # Pages
│   │   ├── +page.svelte     # Home
│   │   ├── projects/        # Projects pages
│   │   └── contact/         # Contact page
│   ├── lib/
│   │   ├── components/      # Reusable components
│   │   └── utils/           # Markdown renderer
│   ├── data/
│   │   └── projects.js      # Your projects data
│   └── content/
│       └── projects/        # Markdown files
├── static/                  # Static files
└── package.json
```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

That's it - no environment variables or backend setup needed.

## Available Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Customize Further

- Update the font in `src/app.css` (currently JetBrains Mono)
- Modify component styles in `src/app.css`
- Add more pages in `src/routes/`

---

Built with SvelteKit 🚀
