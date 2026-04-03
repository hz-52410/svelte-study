<script lang="ts">
	import { onDestroy, onMount, tick } from 'svelte';
	import Add from './add.svelte';
	import List from './list.svelte';
	import type { Todo } from './type';

	const todoList = $state<Todo[]>([
		{
			id: 1,
			title: 'Todo 1',
			completed: false
		},
		{
			id: 2,
			title: 'Todo 2',
			completed: false
		},
		{
			id: 3,
			title: 'Todo 3',
			completed: false
		}
	]);

	function removeTodo(id: number) {
		const i = todoList.findIndex((t) => t.id === id);
		if (i !== -1) todoList.splice(i, 1);
	}
	function addTodo(title: string) {
		todoList.push({
			id: todoList.length + 1,
			title,
			completed: false
		});
	}

    onMount(() => {
        console.log('onMount');
    });
    $effect.pre(() => {
		console.log('组件即将更新');
		tick().then(() => {
				console.log('组件刚刚更新');
		});
	});
    onDestroy(() => {
        console.log('onDestroy');
    });
</script>

<div class="todo-list">
	<h1 class="text-2xl font-bold">Todo List</h1>
	{#each todoList as todo (todo.id)}
		<List {todo} onDelete={removeTodo} />
	{:else}
		<p>No tasks!</p>
	{/each}
	<Add onAdd={addTodo} />
</div>

<style>
	.todo-list {
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>
