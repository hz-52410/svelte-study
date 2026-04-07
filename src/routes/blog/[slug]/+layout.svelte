<script lang="ts">
    import { resolve } from '$app/paths';
    let { data,children } = $props();
    
</script>
<div class="layout">
    <main>
        {@render children()}
    </main>
    <aside>
        <h2>more posts</h2>
        <ul>
            {#each data.summaries as { slug, title } (slug)}
                <li><a href={resolve(`/blog/${slug}`)}>{title}</a></li>
            {/each}
        </ul>
    </aside>
</div>
<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>