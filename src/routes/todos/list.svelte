<script lang="ts">
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
	import { fly, slide } from 'svelte/transition';
	import type { Todo } from './type';

	let {
		todos = []
	}: {
		todos?: Todo[];
	} = $props();
	let deleting = $state<string[]>([]);
</script>

<ul>
	{#each todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
		<li in:fly={{ y: 20 }} out:slide={{ duration: 200 }}>
			<form
				method="POST"
				action={resolve('/todos?/delete')}
				use:enhance={()=>{
					deleting = [...deleting, todo.id];
					return async ({update}) => {
						await update();
						deleting = deleting.filter((id) => id !== todo.id);
					};
				}}
				class="flex items-center justify-between gap-2"
			>
				<input type="hidden" name="id" value={todo.id} />
				<button type="submit" class="fa-solid fa-xmark" aria-label="删除" disabled={!todo}></button>
				<span>{todo.description}</span>
				<input type="checkbox" name="done" checked={todo.done} />
			</form>
		</li>
	{:else}
		<p>No tasks!</p>
	{/each}
</ul>

<style>
	span {
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
