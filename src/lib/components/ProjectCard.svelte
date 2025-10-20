<script>
	/**
	 * ProjectCard component
	 * - Displays project metadata
	 * - Links to detailed project page
	 * - Shows tags, GitHub link, and demo link if available
	 *
	 * @prop {object} project - Project data object
	 */

	export let project;
</script>

<article class="card">
	<!-- Title and Description -->
	<div class="mb-4">
		<h3 class="text-xl md:text-2xl font-bold mb-2">
			<a href="/projects/{project.slug}" class="block">
				{project.title}
			</a>
		</h3>
		<p class="text-muted text-sm md:text-base">
			{project.description}
		</p>
	</div>

	<!-- Tags -->
	<div class="flex flex-wrap gap-2 mb-4">
		{#each project.tags as tag}
			<span class="text-xs px-2 py-1 border border-border rounded">
				{tag}
			</span>
		{/each}
	</div>

	<!-- Links -->
	<div class="flex items-center gap-4 text-sm">
		{#if project.github}
			<a
				href={project.github}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="text-accent">&gt;</span> GitHub
			</a>
		{/if}

		{#if project.demo}
			<a
				href={project.demo}
				target="_blank"
				rel="noopener noreferrer"
			>
				<span class="text-accent">&gt;</span> Live Demo
			</a>
		{/if}

		<a
			href="/projects/{project.slug}"
			class="ml-auto"
		>
			Read more <span class="text-accent">→</span>
		</a>
	</div>
</article>
