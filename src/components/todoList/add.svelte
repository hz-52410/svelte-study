<script lang="ts">
	let {
		onAdd
	}: {
		onAdd?: (title: string) => void;
	} = $props();

	let title = $state('');
	function handleAdd() {
		if (onAdd && title) onAdd(title);
		title = '';
	}
</script>

<form class="flex items-center justify-between gap-2" onsubmit={handleAdd}>
	<input type="text" bind:value={title} placeholder="Todo" />
	<button type="submit">Add</button>
</form>

<style>
	input[type='text'] {
		flex: 1;
		padding: 10px;
		background-color: transparent;
		color: #f0f0f0;
		border: none;
		outline: none;
		&:active {
			outline: none;
			border: none;
		}
	}
	button {
		&:hover {
			cursor: pointer;
			background-color: #f0f0f0;
			color: #000;
		}
		&:active {
			background-color: #000;
			color: #f0f0f0;
		}
	}
</style>
