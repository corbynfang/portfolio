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
- **Node.js** - Runtime environment

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

### Deploy to Railway

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login to Railway:
```bash
railway login
```

3. Initialize and deploy:
```bash
railway init
railway up
```

4. Set build and start commands in Railway dashboard:
   - **Build Command**: `npm run build`
   - **Start Command**: `node build`

Your site will be live at your Railway subdomain!

### Environment Variables

No environment variables required for basic deployment.

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ using SvelteKit
