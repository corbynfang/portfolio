<script>
  /**
   * Layout Component
   * This wraps around all pages in your site.
   * It imports the global CSS and provides a consistent structure.
   *
   * BEGINNER NOTE: +layout.svelte is a special file in SvelteKit.
   * It applies to all pages, so you only need to import CSS once here.
   */

  // Import global styles (Tailwind + custom styles)
  import '../app.css';
</script>

<!--
  The <slot /> is where page content gets inserted
  Think of it like a placeholder that shows +page.svelte content
-->
<div class="min-h-screen flex flex-col">
  <slot />
</div>

<!--
  BEGINNER NOTES:
  - This layout is very simple - just imports CSS and displays content
  - min-h-screen makes sure the page is at least full screen height
  - flex flex-col stacks content vertically
  - The gradient background comes from app.css (applied to body)
-->
