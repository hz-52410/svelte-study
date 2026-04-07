<script lang="ts">
	import { resolve } from '$app/paths';
	import { enhance } from '$app/forms';
	let { form } = $props();
	let creating = $state(false);
</script>

{#if form?.error}
	<p class="text-red-500">{form?.error}</p>
{/if}
{#if creating}
	<span class="text-green-500">creating...</span>
{/if}
<form
	class="flex items-center justify-between gap-2"
	method="POST"
	action={resolve('/todos?/create')}
	use:enhance={()=>{
		creating = true;
		return async ({update}) => {
			await update();
			creating = false;
		};
	}}
>
	<input type="text" disabled={creating} name="description" autocomplete="off" placeholder="Todo" required />
	<button type="submit" disabled={creating}>Add</button>
</form>

<style>
	input[type='text'] {
		flex: 1;
		padding: 10px;
		background-color: transparent;
		color: #f0f0f0;
		/* border: none; */
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
