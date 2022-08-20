<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let grow = false;
	export let disabled = false;
	export let lock = false;

	let down = false;

	const dispatch = createEventDispatcher();

	function click() {
		if (lock) {
			disabled = true;
			down = true;
		}
		dispatch('click', {});
	}
</script>

<button on:click={click} {disabled} class="shrink-0" class:grow class:down class:basis-1={grow}>
	<slot />
</button>

<style lang="postcss">
	button {
		box-shadow: -8px 8px 0 0 #000;
		transform: translate(8px, -8px);
		border: solid 2px #000;
		border-radius: 8px;
		cursor: pointer;
		/* transition: transform 100ms, box-shadow 100ms, border 100ms; */
		transition: all 100ms;
	}

	button:active,
	button.down {
		transform: translate(0, 0);
		box-shadow: 0 0 0 0 #000;
	}

	button:disabled:not(.down) {
		border: solid 2px gray;
		transform: translate(0, 0);
		box-shadow: 0 0 0 0 gray;
		color: gray;
	}
</style>
