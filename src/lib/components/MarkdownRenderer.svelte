<script>
  /**
   * MarkdownRenderer Component
   *
   * This component takes markdown text and converts it to HTML.
   * Perfect for blog posts, documentation, and project descriptions!
   *
   * Usage:
   *   <MarkdownRenderer content={markdownText} />
   */

  import { marked } from 'marked';

  // The markdown content to render
  export let content = '';

  // Configure marked for better rendering
  marked.setOptions({
    breaks: true,        // Convert \n to <br>
    gfm: true,          // GitHub Flavored Markdown
  });

  // Convert markdown to HTML
  // $: means this automatically updates when 'content' changes
  $: html = marked(content);
</script>

<!-- Render the HTML (safely!) -->
<div class="markdown-content">
  {@html html}
</div>

<style>
  /*
   * Markdown Content Styling
   * These styles make the rendered markdown look beautiful
   */

  .markdown-content {
    max-width: 100%;
    color: #e4e6eb;
  }

  /* Headings */
  .markdown-content :global(h1) {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #ffffff;
  }

  .markdown-content :global(h2) {
    font-size: 2rem;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    color: #ffffff;
    border-bottom: 1px solid #374151;
    padding-bottom: 0.5rem;
  }

  .markdown-content :global(h3) {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: #e4e6eb;
  }

  /* Paragraphs */
  .markdown-content :global(p) {
    line-height: 1.7;
    margin-bottom: 1rem;
    color: #d1d5db;
  }

  /* Links - will use our animated underline from global CSS */
  .markdown-content :global(a) {
    color: #4ea1ff;
  }

  /* Lists */
  .markdown-content :global(ul),
  .markdown-content :global(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    line-height: 1.7;
  }

  .markdown-content :global(li) {
    margin-bottom: 0.5rem;
    color: #d1d5db;
  }

  /* Code blocks */
  .markdown-content :global(pre) {
    background: #1f2937;
    border: 1px solid #374151;
    border-radius: 0.5rem;
    padding: 1rem;
    overflow-x: auto;
    margin-bottom: 1rem;
  }

  .markdown-content :global(code) {
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    color: #93c5fd;
  }

  /* Inline code */
  .markdown-content :global(p code),
  .markdown-content :global(li code) {
    background: #1f2937;
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    color: #60a5fa;
  }

  /* Blockquotes */
  .markdown-content :global(blockquote) {
    border-left: 4px solid #4ea1ff;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #9ca3af;
  }

  /* Strong/Bold text */
  .markdown-content :global(strong) {
    font-weight: 600;
    color: #ffffff;
  }

  /* Emphasis/Italic */
  .markdown-content :global(em) {
    font-style: italic;
    color: #d1d5db;
  }

  /* Horizontal rules */
  .markdown-content :global(hr) {
    border: none;
    border-top: 1px solid #374151;
    margin: 2rem 0;
  }
</style>

<!--
  BEGINNER NOTES:

  1. {@html html} - This renders HTML in Svelte. Be careful! Only use with trusted content.
  2. :global() - This makes the styles apply to elements created by {@html}
  3. $: - This is Svelte's reactivity. When 'content' changes, 'html' updates automatically
  4. The 'marked' library converts markdown to HTML for us

  HOW TO USE:

  In any Svelte component:

    <script>
      import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';

      const myMarkdown = '# Hello World\\nThis is **markdown**!';
    </script>

    <MarkdownRenderer content={myMarkdown} />
-->
