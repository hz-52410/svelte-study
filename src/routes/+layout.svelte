<script lang="ts">
	import { resolve } from '$app/paths';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';

	let { children } = $props();

</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="flex min-h-dvh flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-50"
>
	<header class="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
		<nav
			class="mx-auto flex max-w-5xl items-center gap-1 px-4 py-3 sm:gap-2 sm:px-6"
			aria-label="主导航"
		>
			<a
				href={resolve('/')}
				class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-zinc-100"
				aria-current={page.url.pathname === '/'}
			>
				Home
			</a>

			<a
				href={resolve('/todos')}
				class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-zinc-100"
				aria-current={page.url.pathname === '/todos'}
			>
				Todos
			</a>
			<a
				href={resolve('/blog')}
				class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-zinc-100"
				aria-current={page.url.pathname === '/blog'}
			>
				Blog
			</a>
			<a
				href={resolve('/about')}
				class="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/80 hover:text-zinc-100"
				aria-current={page.url.pathname === '/about'}
			>
				About
			</a>
		</nav>
	</header>

	<main class="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 sm:px-6">
		{@render children()}
	</main>

	<footer class="border-t border-zinc-800/80 bg-zinc-950/50">
		<div class="mx-auto max-w-5xl px-4 py-5 sm:px-6">
			<p class="text-center text-sm text-zinc-500">Copyright 2026</p>
		</div>
	</footer>
</div>
