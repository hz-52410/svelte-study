<script>
	let { value = $bindable(), ...props } = $props();
</script>

<input bind:value {...props} />

<style>
	input {
		display: block;
        margin: 10px 0;
	}
	input[type='range'] {
		width: 100%;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']:hover {
		background-color: transparent;
	}

	input[type='text'] {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 5px;
		background-color: transparent;
		color: #f0f0f0;
	}
	input[type='text']:focus {
		outline: none;
	}
	input[type='text']:hover {
		background-color: transparent;
	}
	input[type='text']:active {
		background-color: transparent;
	}
</style>
