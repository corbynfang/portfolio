<script>
  const projects = [
    {
      title: "Pamela Chess Engine",
      url: "/projects/pamela-chess-engine",
      description: "A neural network-based chess engine built in Python using PyTorch for machine learning practice and experimentation.",
      isInternal: true
    },
    {
      title: "CDL Website",
      url: "/projects/cdl-website",
      description: "A comprehensive statistics platform for the Call of Duty League with player analytics, team rosters, and interactive data visualizations.",
      isInternal: true
    }
  ];
</script>

<div class="text-center space-y-8">
  
  <!-- Name -->
  <h1 class="text-5xl md:text-6xl font-bold mb-4">
    Corbyn Ledbetter
  </h1>
  
  <!-- Bio -->
  <p class="text-xl md:text-2xl text-gray-300 mb-16">
    <a href="https://github.com/corbynfang" target="_blank">developer</a>, building modern web applications and exploring machine learning.
  </p>
  
  <!-- Section heading -->
  <h3 class="text-2xl font-semibold mb-10 mt-20">
    You might be looking for:
  </h3>
  
  <!-- Projects - left aligned in centered container -->
  <div class="max-w-2xl mx-auto space-y-8 text-left">
    {#each projects as project}
      <div class="leading-relaxed">
        <p class="text-lg">
          {#if project.isInternal}
            <a href={project.url} class="font-semibold text-blue-400">{project.title}</a>
          {:else}
            <a href={project.url} target="_blank" rel="noopener noreferrer" class="font-semibold text-blue-400">{project.title}</a>
          {/if}
          <span class="text-gray-300">: {project.description}</span>
        </p>
      </div>
    {/each}
  </div>
  
</div>
