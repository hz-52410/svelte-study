<script lang="ts">
	let { data } = $props();
</script>

<article class="prose prose-invert prose-zinc max-w-none">
	<h1 class="animate-fade-in-up text-balance">{data.post.title}</h1>
	<div class="animate-fade-in-up border-t border-zinc-800/80 pt-6 [animation-delay:90ms]">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- 正文在 +page.server.js 中经 DOMPurify.sanitize 净化 -->
		{@html data.post.content}
	</div>
</article>