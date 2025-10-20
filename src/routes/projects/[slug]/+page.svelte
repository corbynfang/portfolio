<script>
  /**
   * Dynamic Project Page
   * Displays a project's full documentation from markdown
   */
  
  import MarkdownRenderer from '$lib/components/MarkdownRenderer.svelte';
  
  // Data from +page.server.js load function
  export let data;
  
  const { markdown, title } = data;
</script>

<svelte:head>
  <title>{title} - Corbyn Ledbetter</title>
</svelte:head>

<div class="relative min-h-screen w-full">
  <!-- Gradient overlays -->
  <div class="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,114,128,0.1),transparent_80%)] z-0"></div>
  <div class="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(75,85,99,0.1),transparent_80%)] z-0"></div>
  
  <div class="relative z-10 flex h-full w-full justify-center overflow-auto py-8">
    <main class="z-10 px-6 max-w-4xl w-full fade-in">
      
      <!-- Back to home link -->
      <div class="mb-8">
        <a href="/" class="text-blue-400 hover:text-blue-300">
          ← Back to Home
        </a>
      </div>
      
      <!-- Render the markdown content -->
      <article class="markdown-wrapper">
        <MarkdownRenderer content={markdown} />
      </article>
      
    </main>
  </div>
</div>

<style>
  .markdown-wrapper {
    max-width: 100%;
  }
</style>
