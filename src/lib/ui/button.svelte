<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// Rinominare per bene le proprietà

	export let grow = false;
	export let disabled = false;

	export let active = false;
	export let lock = false;
	export let release = false;
	export let disableOnLock = false;

	export let locked = false;

	/**
	 *
	 */

	// State variables

	// let locked;
	let activated = false;

	// Functions controlling state variables

	function doLock() {
		//
		locked = true;
		//
		if (active) {
			activated = true;
		}
		//
		if (disableOnLock) {
			disabled = true;
		}
	}

	function doRelease() {
		//
		locked = false;
		//
		activated = false;
		//
		disabled = false;
	}

	// Dispatching clicks

	const dispatch = createEventDispatcher();

	function click() {
		// If it's not a lock button, just send a click
		if (!lock) {
			dispatch('click', {});
		}
		// If it's a lock button, instead
		else {
			if (!locked) {
				doLock();
				dispatch('click', {});
			} else {
				if (release) {
					doRelease();
				}
				dispatch('release', {});
			}
		}
	}

	$: if (!locked) {
		doRelease();
	}

	// // Detecting state changes

	// $: if ($isUp) {
	// 	doRelease();
	// } else {
	// 	doLock();
	// }
</script>

<!--  -->

<button
	on:click={click}
	{disabled}
	class:locked
	class:grow
	class:activated
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
		transition: all 100ms;
	}

	button:active,
	button.locked {
		transform: translate(0, 0);
		box-shadow: 0 0 0 0 #000;
	}

	button.activated {
		background-color: lightgreen;
	}

	button:disabled {
		transform: translate(0, 0);
		box-shadow: 0 0 0 0 red;
		border: solid 2px red;
	}
</style>
