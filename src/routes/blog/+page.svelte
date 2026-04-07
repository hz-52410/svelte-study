<script lang="ts">
	import { resolve } from '$app/paths';
	let { data } = $props();
</script>

<h1>blog</h1>

<ul class="">
	{#each data.summaries as { slug, title } (slug)}
		<li><a href={resolve(`/blog/${slug}`)}>{title}</a></li>
	{/each}
</ul>
