<script lang="ts">
	let count = $state(0);

	function increment() {
		count++;
	}
	const derivedCount = $derived(count * 2);
	const derivedByCount = $derived.by(() => count * 3);

	let canvas: HTMLCanvasElement;
	let size = $state(100);
	let color = $state('#000000');
	const updateColor = (event: Event & { currentTarget: HTMLInputElement }) => {
		color = event.currentTarget.value;
	};
	const updateSize = (event: Event & { currentTarget: HTMLInputElement }) => {
		console.log(event.currentTarget.value);
		size = parseInt(event.currentTarget.value, 10);
	};
	$effect(() => {
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.clearRect(0, 0, size, size);
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, size, size);
		ctx.strokeStyle = color;
		ctx.strokeRect(0, 0, size, size);
	});
</script>

<h1>Welcome {count}!</h1>
<h2>derived count: {derivedCount}</h2>
<h2>derived by count: {derivedByCount}</h2>
<button onclick={increment}>Click me</button>

<canvas bind:this={canvas} width="100" height="100"></canvas>
<input type="color" value={color} oninput={updateColor} />
<input type="range" min="10" max="100" value={size} oninput={updateSize} />

<style>
	:global(body) {
		background-color: #2a2a2a;
		color: #f0f0f0;
		font-family: 'Roboto', sans-serif;
		margin: 0;
		padding: 20px;
	}
	button {
		background-color: #024a04;
		border-radius: 10px;
		color: white;
		padding: 15px 32px;
		border: none;
		cursor: pointer;
		transition: background-color 0.3s ease;
		&:active {
			background-color: #023a04;
		}
	}
</style>
