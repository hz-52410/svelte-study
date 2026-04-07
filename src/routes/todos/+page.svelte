<script lang="ts">
	import { onDestroy, onMount, tick } from 'svelte';
	import List from './list.svelte';
	import Add from './add.svelte';

	let { data, form } = $props();

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
	<List todos={data.todos} />
	<Add {form} />
</div>

<style>
	.todo-list {
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>
