<script>
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Corbyn Ledbetter - Full-Stack Developer</title>
  <meta name="description" content="Full-stack developer building modern web applications and exploring machine learning." />
</svelte:head>

<div class="relative min-h-screen w-full flex items-center justify-center">
  <!-- Gradient overlays -->
  <div class="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(107,114,128,0.1),transparent_80%)] z-0"></div>
  <div class="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(75,85,99,0.1),transparent_80%)] z-0"></div>
  
  <!-- Main content - centered vertically and horizontally -->
  <div class="relative z-10 w-full max-w-4xl mx-auto px-4">
    <main class="fade-in">
      <Hero />
      <Footer />
    </main>
  </div>
</div>
