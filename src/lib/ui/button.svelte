<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let grow = false;
	export let disabled = false;
	export let lock = false;
	export let disableOnLock = false;

	let locked = false;

	const dispatch = createEventDispatcher();

	function click() {
		// If it's not a lock button, just send a click
		if (!lock) {
			dispatch('click', {});
		}
		// If it's a lock button, instead
		else {
			if (!locked) {
				locked = true;
				if (disableOnLock) {
					disabled = true;
				}
				dispatch('click', {});
			} else {
				locked = false;
				dispatch('release', {});
			}
		}
	}
</script>

<button
	on:click={click}
	{disabled}
	class:locked
	class:grow
	class:basis-1={grow}
	class="relative shrink-0"
>
	<slot />
</button>

<style lang="postcss">
	button {
		box-shadow: -8px 8px 0 0 #000;
		transform: translate(8px, -8px);
		border: solid 2px #000;
		border-radius: 8px;
		cursor: pointer;
		transition: transform 100ms, box-shadow 100ms, border 100ms;
	}

	button:active,
	button.locked {
		transform: translate(0, 0);
		box-shadow: 0 0 0 0 #000;
	}

	button:disabled {
		transform: translate(0, 0);
		box-shadow: 0 0 0 0 red;
		border: solid 2px red;
	}
</style>
