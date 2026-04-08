<script lang="ts">
	import { resolve } from '$app/paths';
	import 'virtual:uno.css';
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page, navigating, updated } from '$app/state';

	let { children } = $props();
	console.log(page);
	console.log(navigating);
	console.log('updated', updated);
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="relative flex min-h-dvh flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-50"
>
	<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
		<div
			class="animate-aurora-drift absolute -top-[18%] -left-[12%] h-[58vmin] w-[58vmin] rounded-full bg-emerald-600/28 blur-[100px]"
		></div>
		<div
			class="animate-aurora-drift-alt absolute top-[28%] -right-[14%] h-[48vmin] w-[48vmin] rounded-full bg-cyan-500/22 blur-[88px]"
			style="animation-delay: -6s"
		></div>
		<div
			class="animate-aurora-drift absolute -bottom-[22%] left-[18%] h-[42vmin] w-[42vmin] rounded-full bg-violet-600/18 blur-[110px]"
			style="animation-delay: -12s"
		></div>
		<div
			class="animate-border-glow absolute inset-0 opacity-30 mix-blend-screen"
			style="background: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.15), transparent 50%)"
		></div>
	</div>

	<header
		class="sticky top-0 z-10 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md supports-backdrop-filter:bg-zinc-950/65"
	>
		<nav
			class="mx-auto flex max-w-5xl items-center gap-1 px-4 py-3 sm:gap-2 sm:px-6"
			aria-label="主导航"
		>
			<a
				href={resolve('/')}
				class="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 ease-out hover:bg-zinc-800/70 hover:text-zinc-100 hover:shadow-[0_0_28px_-6px_rgba(16,185,129,0.45)] active:scale-[0.98] aria-[current]:bg-emerald-500/12 aria-[current]:text-emerald-300 aria-[current]:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.28)]"
				aria-current={page.url.pathname === '/'}
			>
				Home
			</a>
			<a
				href={resolve('/todos')}
				class="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 ease-out hover:bg-zinc-800/70 hover:text-zinc-100 hover:shadow-[0_0_28px_-6px_rgba(16,185,129,0.45)] active:scale-[0.98] aria-[current]:bg-emerald-500/12 aria-[current]:text-emerald-300 aria-[current]:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.28)]"
				aria-current={page.url.pathname === '/todos'}
			>
				Todos
			</a>
			<a
				href={resolve('/blog')}
				class="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 ease-out hover:bg-zinc-800/70 hover:text-zinc-100 hover:shadow-[0_0_28px_-6px_rgba(16,185,129,0.45)] active:scale-[0.98] aria-[current]:bg-emerald-500/12 aria-[current]:text-emerald-300 aria-[current]:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.28)]"
				aria-current={page.url.pathname.startsWith('/blog')}
			>
				Blog
			</a>
			<a
				href={resolve('/about')}
				class="group relative rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-all duration-300 ease-out hover:bg-zinc-800/70 hover:text-zinc-100 hover:shadow-[0_0_28px_-6px_rgba(16,185,129,0.45)] active:scale-[0.98] aria-[current]:bg-emerald-500/12 aria-[current]:text-emerald-300 aria-[current]:shadow-[inset_0_0_0_1px_rgba(16,185,129,0.28)]"
				aria-current={page.url.pathname === '/about'}
			>
				About
			</a>
			{#if navigating.to}
				<span
					class="ml-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300/95 shadow-[0_0_20px_-4px_rgba(16,185,129,0.5)] backdrop-blur-sm"
				>
					<span class="relative flex h-2 w-2">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"
						></span>
						<span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
					</span>
					导航到 {navigating.to.url.pathname}
				</span>
			{/if}
		</nav>
	</header>

	<main
		class="animate-fade-in-up mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 sm:px-6"
	>
		{@render children()}
	</main>

	<footer class="border-t border-zinc-800/80 bg-zinc-950/50">
		<div class="mx-auto max-w-5xl px-4 py-5 sm:px-6">
			<p class="text-center text-sm text-zinc-500">Copyright 2026</p>
		</div>
	</footer>
</div>

{#if updated.current}
	<div class="toast">
		<p>
			A new version of the app is available

			<button onclick={() => location.reload()}> reload the page </button>
		</p>
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: 1rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	.toast p {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: var(--bg-2);
		padding: 0.5rem 0.5rem 0.5rem 1rem;
		border-radius: 4px;
	}
</style>
