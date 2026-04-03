<script lang="ts">
	import type { Todo } from './type';

	let {
		todo = null,
		onDelete,
        onAdd,
	}: {
		todo?: Todo | null;
		onDelete?: (id: number) => void;
		onAdd?: (title: string) => void;
	} = $props();

	const readonly = $derived(todo ? true : false);
	function handleDelete() {
		if (todo && onDelete) onDelete(todo.id);
	}
    function handleAdd(event: Event) {
        const target = event.target as HTMLInputElement;
        if (onAdd && target.value) onAdd(target.value);
    }
</script>

<div class="flex items-center justify-between gap-2">
	<button
		type="button"
		class="fa-solid fa-xmark "
		aria-label="删除"
		disabled={!todo}
		onclick={handleDelete}
	></button>
	<input type="text" value={todo?.title ?? ''} {readonly} placeholder="Todo" oninput={handleAdd} />
	<input type="checkbox" checked={todo?.completed} />
</div>

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
	input[type='checkbox'] {
		width: 20px;
		height: 20px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: transparent;
		color: #f0f0f0;
		&:checked {
			background-color: #000;
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
