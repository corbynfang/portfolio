# Portfolio Website

A clean, minimalist portfolio built with **SvelteKit** and **Tailwind CSS**. Features markdown-based project documentation, animated UI elements, and a dark gradient theme.

## 🚀 Features

- **Markdown Support** - Write project documentation in markdown with syntax highlighting
- **Dynamic Routing** - Automatic project pages from markdown files
- **Animated Links** - Smooth underline animations on hover
- **Responsive Design** - Mobile-friendly layout
- **Dark Theme** - Beautiful gradient background with radial overlays
- **Fast & Modern** - Built with SvelteKit and Vite

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── content/              # Markdown files for projects
│   │   ├── pamela-chess-engine.md
│   │   └── cdl-website.md
│   ├── lib/
│   │   └── components/       # Reusable Svelte components
│   │       ├── Hero.svelte
│   │       ├── Footer.svelte
│   │       └── MarkdownRenderer.svelte
│   ├── routes/
│   │   ├── +page.svelte      # Homepage
│   │   └── projects/[slug]/  # Dynamic project pages
│   └── app.css               # Global styles
├── static/                   # Static assets
└── package.json
```

## 🛠️ Tech Stack

- **SvelteKit** - Web framework
- **Tailwind CSS** - Utility-first styling
- **Marked** - Markdown parser
- **Vite** - Build tool
- **Vercel Adapter** - Deployment

## 📦 Installation

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Add a New Project

1. Create a markdown file in `src/content/`:
```bash
src/content/my-project.md
```

2. Add project to `src/lib/components/Hero.svelte`:
```javascript
const projects = [
  {
    title: "My Project",
    url: "/projects/my-project",
    description: "Project description here",
    isInternal: true
  }
];
```

3. Visit `/projects/my-project` - Done! 🎉

### Update Colors

Edit `tailwind.config.js` to change the color scheme.

### Update Social Links

Edit the `socials` array in `src/lib/components/Footer.svelte`.

## 🌐 Deployment

### Deploy to Vercel

```bash
npm run build
```

Then push to GitHub and connect to Vercel. The adapter is already configured!

### Deploy to Other Platforms

Change the adapter in `svelte.config.js` to match your platform:
- `@sveltejs/adapter-netlify`
- `@sveltejs/adapter-cloudflare`
- `@sveltejs/adapter-node`

## 📝 Writing Markdown

Your markdown files support:

- Headings (`# ## ###`)
- **Bold** and *italic* text
- Code blocks with syntax highlighting
- Lists (ordered and unordered)
- Links with animated underlines
- Blockquotes
- And more!

Example:

```markdown
# My Project

This is **awesome**!

## Code Example
\`\`\`javascript
console.log('Hello World!');
\`\`\`
```

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ using SvelteKit
