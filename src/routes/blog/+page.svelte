<script lang="ts">
	import { resolve } from '$app/paths';
	let { data } = $props();
</script>

<h1 class="animate-fade-in-up mb-6 text-3xl font-semibold tracking-tight text-zinc-50">Blog</h1>

<ul class="animate-fade-in-up flex flex-col gap-2 [animation-delay:80ms]">
	{#each data.summaries as { slug, title } (slug)}
		<li>
			<a
				class="group block rounded-lg border border-transparent px-3 py-2 transition-all duration-300 hover:border-emerald-500/20 hover:bg-zinc-900/80 hover:shadow-[0_0_24px_-8px_rgba(16,185,129,0.35)]"
				href={resolve(`/blog/${slug}`)}
			>
				<span
					class="text-zinc-300 transition-colors duration-300 group-hover:text-emerald-300/95"
					>{title}</span
				>
			</a>
		</li>
	{/each}
</ul>
